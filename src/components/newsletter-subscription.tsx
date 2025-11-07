"use client"

import type React from "react"

import { useState } from "react"
import { FiMail, FiCheck } from "react-icons/fi"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <div className="w-full py-12 bg-slate-900 border-t border-b border-slate-800 my-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FiMail className="text-cyan-400" size={24} />
          <h3 className="text-2xl font-bold text-white">Subscribe to my newsletter</h3>
        </div>
        <p className="text-gray-300 mb-6">Get updates on my latest articles and projects directly to your inbox.</p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg font-semibold transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "..." : status === "success" ? <FiCheck size={20} /> : "Subscribe"}
          </button>
        </form>

        {status === "success" && <p className="text-cyan-400 mt-4">Thanks for subscribing!</p>}
      </div>
    </div>
  )
}
