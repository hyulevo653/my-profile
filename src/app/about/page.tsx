"use client"

import { AppConfig } from "@/config/app.config"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 mb-8">
            <FiArrowRight className="rotate-180" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-300">Get to know me better</p>
        </div>
      </header>

      {/* About Content */}
      <section className="w-full py-20 md:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16 p-8 rounded-lg bg-slate-900/50 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm {AppConfig.name}, a {AppConfig.title} with {AppConfig.summary.split(" ")[0]} years of experience. I'm
              passionate about building beautiful, performant web applications that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey into web development started with a curiosity about how things work on the internet. Over the
              years, I've honed my skills in frontend technologies and gained valuable experience with full-stack
              development. I believe in continuous learning and staying updated with the latest technologies.
            </p>
          </div>

          {/* Skills Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(AppConfig.skills).map(([category, items]) => (
                <div key={category} className="p-6 rounded-lg bg-slate-900/50 border border-slate-800">
                  <h3 className="text-lg font-bold text-white capitalize mb-4">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <ul className="space-y-2">
                    {items.slice(0, 4).map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <FiCheck size={16} className="text-cyan-400 flex-shrink-0" />
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            <div className="space-y-6">
              {AppConfig.education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-slate-900/50 border border-slate-800">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-cyan-400 font-semibold">{edu.school}</p>
                  <p className="text-gray-400 text-sm mt-2">{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <p className="text-gray-300 mb-6">Let's discuss your project and see how I can help.</p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300"
            >
              Get in Touch
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
