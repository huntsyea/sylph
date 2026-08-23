import type { Metadata } from "next";

import { Posts } from "@/components/posts";
import { contentCatalog } from "@/lib/content";
import { createSiteMetadata, siteProfile } from "@/lib/site/profile";

import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ category: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return contentCatalog
    .listEntries()
    .flatMap((entry) =>
      entry.kind === "category" ? [{ category: entry.category.slug }] : [],
    );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = contentCatalog.getCategory(slug);

  if (!category) {
    return {};
  }

  return createSiteMetadata({
    title: category.title,
    description: `Browse ${category.title.toLowerCase()} published with ${siteProfile.name}.`,
    path: `/${category.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { category: slug } = await params;
  const category = contentCatalog.getCategory(slug);

  if (!category) {
    notFound();
  }

  return <Posts category={category} asCategoryPage />;
}
