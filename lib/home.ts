import "server-only";

import { mdxComponents } from "@/mdx-components";

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const homeFrontmatterSchema = z.object({
  title: z.string().trim().optional(),
  tagline: z.string().trim().optional(),
});

export type HomeIntro = {
  title: string;
  tagline: string;
  body: string;
};

const defaultHomePath = path.join(process.cwd(), "content", "home.md");

export function readHomeIntro(sourcePath = defaultHomePath): HomeIntro {
  let source: string;
  try {
    source = fs.readFileSync(sourcePath, "utf8");
  } catch (error) {
    if (isMissingPath(error)) {
      return emptyHomeIntro;
    }

    throw error;
  }

  const parsed = matter(source);
  const result = homeFrontmatterSchema.safeParse(parsed.data);
  if (!result.success) {
    return { ...emptyHomeIntro, body: parsed.content };
  }

  return {
    title: result.data.title ?? "",
    tagline: result.data.tagline ?? "",
    body: parsed.content,
  };
}

export async function renderHomeBody(body: string) {
  const source = body.trim();
  if (source.length === 0) {
    return null;
  }

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return content;
}

const emptyHomeIntro: HomeIntro = {
  title: "",
  tagline: "",
  body: "",
};

function isMissingPath(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ENOENT"
  );
}
