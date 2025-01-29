# Personal Blog & Portfolio

A modern, performant personal blog and portfolio built with Next.js 14+. This site serves as a platform for sharing guides, writing, and projects while maintaining a clean, minimalist design focused on content presentation.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Content**: MDX
- **Package Manager**: pnpm
- **Animations**: Framer Motion
- **Formatting**: Biome

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── (posts)/           # Post route group
│   │   ├── guides/        # Guide posts
│   │   ├── writing/       # Writing posts
│   │   └── projects/      # Project posts
│   ├── api/               # API routes
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── screens/          # Page-level components
│   ├── motion/           # Animation components
│   └── posts/            # Post-related components
├── lib/                   # Utility functions
├── styles/               # Global styles
├── types/                # TypeScript types
└── public/               # Static assets
```

## Features

### Content Management
- **MDX Support**: Write content in MDX with frontmatter
- **Categories**: Organized into Guides, Writing, and Projects
- **Post Metadata**: Rich metadata support including:
  - Creation and update times
  - Reading time estimation
  - Tags and categories
  - SEO metadata
  - Social sharing metadata

### UI/UX
- **Modern Design**: Clean, minimalist interface
- **Responsive Layout**: Works seamlessly across devices
- **Animations**: Smooth fade-in transitions
- **Navigation**: 
  - Breadcrumb navigation
  - Previous/Next post navigation
  - Table of contents
- **Dark Mode**: Built-in dark mode support

### Performance & SEO
- **Static Generation**: Pre-rendered pages for optimal performance
- **Dynamic OG Images**: Automatic social share image generation
- **SEO Optimized**: 
  - Automatic sitemap generation
  - Meta tags
  - Structured data
  - OpenGraph tags

### Developer Experience
- **TypeScript**: Full type safety
- **Modern Tooling**:
  - Biome for code formatting
  - PostCSS for CSS processing
  - pnpm for fast, efficient package management
- **Code Organization**: Clear separation of concerns
- **Component Architecture**: Reusable, modular components

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Create content:
- Add MDX files to `app/(posts)/{category}/posts/`
- Include required frontmatter
- Use components in your MDX

## Content Structure

Posts are written in MDX and should include frontmatter:

```mdx
---
title: "Your Post Title"
time:
  created: "2024-01-24T00:00:00.000Z"
  updated: "2024-01-24T00:00:00.000Z"
tags: ["tag1", "tag2"]
summary: "A brief summary of your post"
---

Your content here...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the terms of the license included with this repository.

<p align="center">
<img src=".github/assets/readme.png">
<a href="https://github.com/sponsors/raphaelsalaja">
    <picture>
        <img src="https://github.com/user-attachments/assets/e9754454-5f51-4166-8194-0f3ba1db82dc" alt="Sponsor" height="30">
    </picture>
</a>
<a href="https://vercel.com/new/clone?repository-url=https://github.com/raphaelsalaja/sylph&env=NEXT_PUBLIC_SITE_URL&project-name=portfolio&repository-name=portfolio&redirect-url=https://twitter.com/raphaelsalaja&demo-title=next-slyph-portfolio&demo-description=A+minimal+blog+built+with+Next.js.&demo-url=https://next-sylph-portfolio.vercel.app&demo-image=https://raw.githubusercontent.com/raphaelsalaja/sylph/refs/heads/main/.github/assets/readme.png&teamSlug=raphael-salaja">
    <picture>
        <img src="https://github.com/user-attachments/assets/7ea626bf-b827-4995-b0d0-6eea0c0ba2d5" alt="Deploy" height="30">
    </picture>
</a>
<a href="https://x.com/raphaelsalaja">
    <picture>
        <img src="https://github.com/user-attachments/assets/8d599ebf-b73e-4c05-8297-867b5846b7c4" alt="Twitter" height="30">
    </picture>
</a>
</p>
