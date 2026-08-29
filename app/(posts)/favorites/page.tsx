import type { Metadata } from "next";

import { Favorites } from "@/components/favorites";
import { createSiteMetadata } from "@/lib/site/profile";

export const metadata: Metadata = createSiteMetadata({
  title: "Favorites",
  description: "External articles and resources Hunter keeps coming back to.",
  path: "/favorites",
});

export default function Page() {
  return <Favorites asPage />;
}
