"use client"

import Link from "next/link"
import { FiArrowRight, FiCalendar, FiClock, FiSearch } from "react-icons/fi"
import { NewsletterSubscription } from "@/components/newsletter-subscription"
import { useState, useMemo } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

// Sample blog posts with more variety
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the fundamentals of Next.js 15 and how to build modern web applications with React Server Components.",
    date: "2025-01-15",
    readTime: 8,
    category: "Next.js",
    slug: "getting-started-nextjs-15",
    tags: ["next.js", "react", "web-development"],
  },
  {
    id: 2,
    title: "React Performance Optimization Tips",
    excerpt:
      "Discover practical strategies to optimize your React applications for better performance and user experience.",
    date: "2025-01-10",
    readTime: 12,
    category: "React",
    slug: "react-performance-tips",
    tags: ["react", "performance", "optimization"],
  },
  {
    id: 3,
    title: "Understanding TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them effectively in your projects.",
    date: "2025-01-05",
    readTime: 15,
    category: "TypeScript",
    slug: "typescript-generics-guide",
    tags: ["typescript", "programming"],
  },
  {
    id: 4,
    title: "Angular vs React: Choosing the Right Framework",
    excerpt: "Compare Angular and React frameworks to help you choose the best fit for your next project.",
    date: "2024-12-28",
    readTime: 10,
    category: "Angular",
    slug: "angular-vs-react",
    tags: ["angular", "react", "frameworks"],
  },
  {
    id: 5,
    title: "Building REST APIs with Node.js",
    excerpt: "Complete guide to building scalable REST APIs using Node.js and Express.js.",
    date: "2024-12-20",
    readTime: 14,
    category: "Backend",
    slug: "nodejs-rest-apis",
    tags: ["nodejs", "backend", "rest-api"],
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = !selectedCategory || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
              <FiArrowRight className="rotate-180" />
              Back to Home
            </Link>
            <ThemeToggle />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Blog</h1>
          <p className="text-lg text-gray-300">Thoughts, insights, and stories about web development</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="w-full py-8 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-3 border border-slate-700 focus-within:border-cyan-500 transition-colors">
              <FiSearch className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
              />
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === null
                  ? "bg-cyan-500 text-slate-900"
                  : "bg-slate-800 text-gray-300 hover:text-cyan-400"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-slate-900"
                    : "bg-slate-800 text-gray-300 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-20 md:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group p-8 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-900"
                >
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock size={16} />
                        {post.readTime} min read
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                  <Link
                    href={`/post/${post.slug}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                  >
                    Read More
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSubscription />

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
