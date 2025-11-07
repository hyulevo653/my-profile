"use client"

import { FiShare2, FiTwitter, FiLinkedin, FiCopy } from "react-icons/fi"
import { useState } from "react"

interface SocialShareProps {
  title: string
  url: string
}

export function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-4 py-6 border-t border-b border-slate-800">
      <span className="flex items-center gap-2 text-gray-300">
        <FiShare2 size={18} /> Share:
      </span>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-slate-800 rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <FiTwitter size={20} />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-slate-800 rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <FiLinkedin size={20} />
      </a>
      <button
        onClick={handleCopyLink}
        className="p-2 hover:bg-slate-800 rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
        aria-label="Copy link"
      >
        <FiCopy size={20} />
      </button>
      {copied && <span className="text-cyan-400 text-sm">Link copied!</span>}
    </div>
  )
}
