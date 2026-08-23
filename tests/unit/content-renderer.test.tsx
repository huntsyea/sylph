import { ContentRenderError, renderPost } from "@/lib/content/renderer";

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

describe("renderPost", () => {
  it("returns a heading outline from the rendered syntax tree and semantic GFM footnotes", async () => {
    const rendered = await renderPost(
      createPost(
        "## Installation\n\n### Requirements\n\nA note.[^note]\n\n[^note]: A semantic footnote.",
      ),
    );

    expect(rendered.outline).toEqual([
      { id: "installation", text: "Installation", level: 2 },
      { id: "requirements", text: "Requirements", level: 3 },
    ]);

    const html = renderToStaticMarkup(rendered.content);
    expect(html).toContain('<h2 id="installation">Installation</h2>');
    expect(html).toContain('data-footnotes="true"');
    expect(html).toContain('<section data-footnotes="true" class="footnotes">');
  });

  it("renders trusted links, highlighted code, and registered MDX components", async () => {
    const rendered = await renderPost(
      createPost(
        [
          "[Internal](/guides)",
          "",
          "[External](https://nextjs.org/)",
          "",
          '<Link href="https://nextjs.org/docs" newTab>New tab</Link>',
          "",
          "```ts",
          'const greeting = "hello";',
          "```",
          "",
          "<Preview><PreviewExample /></Preview>",
        ].join("\n"),
      ),
    );

    const html = renderToStaticMarkup(rendered.content);
    expect(html).toContain('href="/guides"');
    expect(html).toContain('href="https://nextjs.org/"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
    expect(html).toContain("data-rehype-pretty-code-figure");
    expect(html).toContain("Showcase");
    expect(html).toContain("<figure");
  });

  it.each([
    ["a page-level heading", "# Duplicate page title"],
    ["an MDX import", 'import Demo from "./demo"'],
    ["a JavaScript expression", "The answer is {6 * 7}."],
  ])(
    "rejects %s with a source-specific error",
    async (_description, content) => {
      await expect(renderPost(createPost(content))).rejects.toThrow(
        ContentRenderError,
      );
      await expect(renderPost(createPost(content))).rejects.toThrow(
        /fixture\.mdx/,
      );
    },
  );
});

function createPost(content: string) {
  return {
    category: "guides",
    slug: "fixture",
    sourcePath: "/fixtures/guides/fixture.mdx",
    content,
    title: "Fixture",
    time: {
      created: "2024-01-01T00:00:00.000Z",
      updated: "2024-01-01T00:00:00.000Z",
    },
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
    updatedAt: new Date("2024-01-01T00:00:00.000Z"),
  };
}
