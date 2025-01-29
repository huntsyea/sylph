"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { FileTextIcon, GitHubLogoIcon, LightningBoltIcon, RocketIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";

interface LinkItemProps {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  featured?: boolean;
  image?: string;
  date?: string;
}

const links: LinkItemProps[] = [
  {
    href: "/guides/approach-to-product-market-fit",
    title: "How Solo Founders Should Approach PMF",
    description: "A proven framework for solo founders to find product-market fit and validate their ideas.",
    icon: <LightningBoltIcon className="h-5 w-5" />,
    featured: true,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${encodeURIComponent("How Solo Founders Should Approach PMF")}`,
    date: "January 24, 2024",
  },
  {
    href: "https://twitter.com/huntsyea",
    title: "Twitter",
    description: "Follow me for product insights and tech discussions",
    icon: <TwitterLogoIcon className="h-5 w-5" />,
  },
  {
    href: "https://github.com/huntsyea",
    title: "GitHub",
    description: "Check out my current projects and contributions",
    icon: <GitHubLogoIcon className="h-5 w-5" />,
  },
  {
    href: "/writing",
    title: "Writing",
    description: "Read my thoughts on product, tech, and leadership",
    icon: <FileTextIcon className="h-5 w-5" />,
  },
  {
    href: "/projects",
    title: "Projects",
    description: "See what I'm building",
    icon: <RocketIcon className="h-5 w-5" />,
  },
];

const LinkItem = ({ href, title, description, icon, featured, image, date }: LinkItemProps) => {
  if (featured) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="w-full">
        <a href={href} target={href.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">
          <Card className="w-full overflow-hidden">
            {image && (
              <div className="relative aspect-[1200/630] w-full">
                <Image src={image} alt={title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 600px" />
              </div>
            )}
            <div className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <LightningBoltIcon className="h-4 w-4" />
                  <span>Guide</span>
                  {date && (
                    <>
                      <span>•</span>
                      <span>{date}</span>
                    </>
                  )}
                </div>
                <h3 className="font-semibold">{title}</h3>
                {description && <p className="line-clamp-2 text-muted-foreground text-sm">{description}</p>}
              </div>
            </div>
          </Card>
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="w-full">
      <a href={href} target={href.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">
        <Card className="w-full p-4 transition-all hover:bg-accent">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">{title}</h3>
              {description && <p className="text-muted-foreground text-sm">{description}</p>}
            </div>
            {icon}
          </div>
        </Card>
      </a>
    </motion.div>
  );
};

export const LinkInBio = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-background px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://pbs.twimg.com/profile_images/1879745173116129280/NgmyJHi7_400x400.jpg" alt="Hunter Yeagley" />
            <AvatarFallback>HY</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-bold text-2xl">Hunter Yeagley</h1>
            <p className="text-muted-foreground">Product Leader. Builder. Tinkerer.</p>
          </div>
        </div>

        <div className="grid w-full gap-4">
          {links.map((link) => (
            <LinkItem key={link.href} {...link} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" size="sm" asChild>
            <a href="/" className="text-muted-foreground text-sm">
              ← Go To Website
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
