"use client"

import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
      aria-label="Back to top"
    >
      <FiArrowUp size={24} />
    </button>
  ) : null
}
