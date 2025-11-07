"use client"

import Link from "next/link"
import { FiArrowRight, FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi"
import { SocialShare } from "@/components/social-share"
import { ThemeToggle } from "@/components/theme-toggle"

const blogPostsData: Record<
  string,
  {
    id: number
    title: string
    excerpt: string
    content: string
    date: string
    readTime: number
    category: string
    slug: string
    tags: string[]
    author: string
    relatedPostIds: number[]
  }
> = {
  "getting-started-nextjs-15": {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the fundamentals of Next.js 15 and how to build modern web applications with React Server Components.",
    date: "2025-01-15",
    readTime: 8,
    category: "Next.js",
    slug: "getting-started-nextjs-15",
    tags: ["next.js", "react", "web-development"],
    author: "Nguyễn Đức Huy",
    relatedPostIds: [2, 4],
    content: `
Next.js 15 brings powerful improvements for building production-ready applications. This guide will walk you through the essentials.

## What's New in Next.js 15?

Next.js 15 introduces several groundbreaking features that enhance developer experience and application performance:

- **React Server Components**: Full support for building server-first applications
- **Turbopack Integration**: Significantly faster build and dev server performance
- **Image Optimization**: Improved image loading and caching strategies
- **API Routes**: Enhanced routing capabilities with middleware support

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Building Your First Page

Server components are now the default. Here's a simple example:

\`\`\`tsx
export default function Page() {
  return <h1>Welcome to Next.js 15</h1>
}
\`\`\`

## Best Practices

1. Use Server Components by default
2. Leverage streaming for better UX
3. Optimize images with the Image component
4. Implement proper error handling

Next.js 15 is production-ready and recommended for new projects.
    `,
  },
  "react-performance-tips": {
    id: 2,
    title: "React Performance Optimization Tips",
    excerpt:
      "Discover practical strategies to optimize your React applications for better performance and user experience.",
    date: "2025-01-10",
    readTime: 12,
    category: "React",
    slug: "react-performance-tips",
    tags: ["react", "performance", "optimization"],
    author: "Nguyễn Đức Huy",
    relatedPostIds: [1, 3],
    content: `
Performance is crucial for user experience. Learn practical techniques to optimize your React applications.

## Why Performance Matters

Slow applications lead to poor user experience and lower conversion rates. React applications can be optimized at multiple levels.

## Key Optimization Techniques

### 1. Code Splitting
Break your application into smaller chunks that load on demand.

### 2. Memoization
Use React.memo to prevent unnecessary re-renders of components.

\`\`\`tsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>
})
\`\`\`

### 3. Lazy Loading
Load components only when they're needed.

\`\`\`tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'))
\`\`\`

### 4. Virtual Scrolling
For long lists, render only visible items.

## Measuring Performance

Use React DevTools Profiler to identify bottlenecks and measure improvements.

## Conclusion

Performance optimization is an ongoing process. Monitor metrics and continuously improve your application.
    `,
  },
  "typescript-generics-guide": {
    id: 3,
    title: "Understanding TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them effectively in your projects.",
    date: "2025-01-05",
    readTime: 15,
    category: "TypeScript",
    slug: "typescript-generics-guide",
    tags: ["typescript", "programming"],
    author: "Nguyễn Đức Huy",
    relatedPostIds: [2, 5],
    content: `
TypeScript Generics allow you to write flexible and reusable code while maintaining type safety.

## What are Generics?

Generics provide a way to create components that work with a variety of types rather than a single one.

## Generic Functions

\`\`\`tsx
function identity<T>(arg: T): T {
  return arg
}

const result = identity<string>("hello")
\`\`\`

## Generic Classes

\`\`\`tsx
class Container<T> {
  private value: T
  
  constructor(value: T) {
    this.value = value
  }
  
  getValue(): T {
    return this.value
  }
}
\`\`\`

## Generic Constraints

You can restrict what types can be passed to generics:

\`\`\`tsx
interface HasLength {
  length: number
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length)
}
\`\`\`

## Real-world Examples

Generics are essential for building reusable libraries and APIs that work across different data types while maintaining type safety.
    `,
  },
  "angular-vs-react": {
    id: 4,
    title: "Angular vs React: Choosing the Right Framework",
    excerpt: "Compare Angular and React frameworks to help you choose the best fit for your next project.",
    date: "2024-12-28",
    readTime: 10,
    category: "Angular",
    slug: "angular-vs-react",
    tags: ["angular", "react", "frameworks"],
    author: "Nguyễn Đức Huy",
    relatedPostIds: [1, 5],
    content: `
Choosing between Angular and React depends on your project requirements and team expertise.

## Overview

Both are powerful frameworks for building web applications, but they have different philosophies and approaches.

## Angular Advantages

- Full-featured framework
- Built-in routing and HTTP client
- Strong typing with TypeScript
- Excellent for enterprise applications

## React Advantages

- Lightweight and flexible
- Large ecosystem and community
- Easy to learn
- Great for building dynamic UIs

## When to Choose Angular

- Large-scale enterprise applications
- Need built-in features
- Prefer convention over configuration

## When to Choose React

- Small to medium projects
- Need maximum flexibility
- Want a lightweight solution
- Building progressive web apps

## Conclusion

There's no universal "best" choice. Consider your project requirements, team skills, and long-term maintainability.
    `,
  },
  "nodejs-rest-apis": {
    id: 5,
    title: "Building REST APIs with Node.js",
    excerpt: "Complete guide to building scalable REST APIs using Node.js and Express.js.",
    date: "2024-12-20",
    readTime: 14,
    category: "Backend",
    slug: "nodejs-rest-apis",
    tags: ["nodejs", "backend", "rest-api"],
    author: "Nguyễn Đức Huy",
    relatedPostIds: [3, 4],
    content: `
Building REST APIs with Node.js and Express.js is straightforward and powerful.

## Setting Up Express

\`\`\`bash
npm init -y
npm install express
\`\`\`

## Basic Server

\`\`\`javascript
const express = require('express')
const app = express()

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000, () => console.log('Server running'))
\`\`\`

## Key REST Principles

- Use HTTP methods correctly (GET, POST, PUT, DELETE)
- Use meaningful endpoint names
- Return appropriate status codes
- Implement proper error handling

## Best Practices

1. Use middleware for authentication
2. Validate input data
3. Implement rate limiting
4. Use environment variables for configuration
5. Document your API

## Conclusion

Node.js and Express make building scalable REST APIs accessible and enjoyable.
    `,
  },
}

const allPosts = Object.values(blogPostsData)

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPostsData[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Link href="/posts" className="text-cyan-400 hover:text-cyan-300">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  const relatedPosts = post.relatedPostIds.map((id) => allPosts.find((p) => p.id === id)).filter(Boolean)
  const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/post/${slug}`

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="w-full py-8 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/posts" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
            <FiArrowLeft size={20} />
            Back to Blog
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Post Content */}
      <article className="w-full py-16 md:py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta Info */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full font-semibold">{post.category}</span>
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <FiCalendar size={18} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <FiClock size={18} />
                  {post.readTime} min read
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
            <p className="text-lg text-gray-400">By {post.author}</p>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-12 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Share */}
          <SocialShare title={post.title} url={currentUrl} />

          {/* Post Content */}
          <div className="prose prose-invert max-w-none my-12">
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">{post.content}</div>
          </div>

          {/* Social Share Bottom */}
          <SocialShare title={post.title} url={currentUrl} />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-16 md:py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) =>
                relatedPost ? (
                  <Link
                    key={relatedPost.id}
                    href={`/post/${relatedPost.slug}`}
                    className="group p-8 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <FiClock size={14} />
                        {relatedPost.readTime} min
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                      Read More <FiArrowRight size={16} />
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
