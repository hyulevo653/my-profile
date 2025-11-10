"use client"

import { useTheme } from "next-themes"
// import { FiMoon, FiSun } from "react-icons/fi"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 transition-colors"
      aria-label="Toggle theme"
    >
      {/* {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />} */}
       <span className="text-xl">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  )
}
