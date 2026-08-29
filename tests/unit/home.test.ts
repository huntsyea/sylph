import { readHomeIntro } from "@/lib/home";

import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

const fixtureFiles: string[] = [];

afterEach(() => {
  for (const file of fixtureFiles.splice(0)) {
    fs.rmSync(file, { force: true });
  }
});

describe("home intro", () => {
  it("reads title, tagline, and body from a markdown file", () => {
    const sourcePath = writeHome(
      `---\ntitle: Sylph\ntagline: Next.js Portfolio Starter\n---\n\nHello from the vault.\n`,
    );

    expect(readHomeIntro(sourcePath)).toEqual({
      title: "Sylph",
      tagline: "Next.js Portfolio Starter",
      body: "\nHello from the vault.\n",
    });
  });

  it("returns empty fields when the file is missing", () => {
    expect(
      readHomeIntro(
        path.join(os.tmpdir(), `sylph-home-missing-${Date.now()}.md`),
      ),
    ).toEqual({
      title: "",
      tagline: "",
      body: "",
    });
  });

  it("ignores leftover publisher keys", () => {
    const sourcePath = writeHome(
      `---\ntitle: Home\ntagline: Intro\nshare: true\npath: content/home.md\ncategory: home\n---\n\nBody.\n`,
    );

    expect(readHomeIntro(sourcePath)).toEqual({
      title: "Home",
      tagline: "Intro",
      body: "\nBody.\n",
    });
  });
});

function writeHome(contents: string): string {
  const sourcePath = path.join(
    os.tmpdir(),
    `sylph-home-${Date.now()}-${Math.random().toString(16).slice(2)}.md`,
  );
  fs.writeFileSync(sourcePath, contents);
  fixtureFiles.push(sourcePath);
  return sourcePath;
}
