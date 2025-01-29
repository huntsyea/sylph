import { LinkInBio } from "@/components/screens/links";
import { OpenGraph } from "@/lib/og";

import React from "react";

export function generateMetadata() {
  const title = "Links";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <React.Fragment>
      <LinkInBio />
    </React.Fragment>
  );
}
