import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "Hunter Yeagley",
    template: "%s",
  },
  description: "...",
  keywords: ["Product", "Product Management", "Productivity", "Productivity Tools", "Startups", "AI", "Machine Learning"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Hunter Yeagley",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
    siteName: "Hunter Yeagley",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunter Yeagley",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
