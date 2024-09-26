"use client";

import type { Metadata } from "@/types/post/index";

import { usePathname } from "next/navigation";

interface FooterProps {
  posts: Array<Metadata>;
}

function Footer({ posts }: FooterProps) {
  posts.sort((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const currentSlug = usePathname().split("/").pop();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  const previous = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-16 flex w-full justify-between border-border border-t pt-8">
      {previous && (
        <a href={`${previous.slug}`} className="flex flex-col gap-1 text-left">
          <span className="text-muted">Previous</span>
          <span>{previous.title}</span>
        </a>
      )}
      {next && (
        <a href={`${next.slug}`} className="flex w-full flex-col gap-1 text-right">
          <span className="text-muted">Next</span>
          <span>{next.title}</span>
        </a>
      )}
    </div>
  );
}

export { Footer };