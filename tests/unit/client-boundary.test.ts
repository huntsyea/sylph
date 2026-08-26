import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const sourceRoots = ["app", "components"];
const serverOnlyContentModule =
  /from\s+["']@\/lib\/content(?:\/(?:catalog|renderer))?["']/;

describe("client catalog boundary", () => {
  it("does not import server-only content modules or their barrel", () => {
    const offenders = sourceRoots
      .flatMap((root) => listSourceFiles(path.join(process.cwd(), root)))
      .filter((file) => {
        const source = fs.readFileSync(file, "utf8");
        return hasUseClient(source) && serverOnlyContentModule.test(source);
      })
      .map((file) => path.relative(process.cwd(), file));

    expect(offenders).toEqual([]);
  });
});

function hasUseClient(source: string): boolean {
  return /^["']use client["']/m.test(source);
}

function listSourceFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return listSourceFiles(fullPath);
    }

    return /\.[cm]?[jt]sx?$/.test(entry.name) ? [fullPath] : [];
  });
}
