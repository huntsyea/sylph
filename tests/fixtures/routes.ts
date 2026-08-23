import { ContentCatalog } from "../../lib/content/catalog";

const contentCatalog = new ContentCatalog();

export const siteRoutes = {
  home: "/",
  guides: "/guides",
  examples: "/examples",
  guidePost: "/guides/getting-started",
  projectStructurePost: "/guides/project-structure",
  writingPost: "/guides/basic-writing-and-formatting-syntax",
  examplePost: "/examples/component-showcase",
  missingCategory: "/this-category-does-not-exist",
  missingPost: "/guides/this-post-does-not-exist",
} as const;

const catalogRoutes = contentCatalog
  .listEntries()
  .map((entry) =>
    entry.kind === "category"
      ? `/${entry.category.slug}`
      : `/${entry.post.category}/${entry.post.slug}`,
  );

export const postRoutes = catalogRoutes.filter(
  (route) => route.split("/").length === 3,
);

export const indexableRoutes = [siteRoutes.home, ...catalogRoutes];

export const themeLabels = ["system", "dark", "light"] as const;
