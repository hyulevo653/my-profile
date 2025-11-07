"use client"

import { AppConfig } from "@/config/app.config"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 mb-8">
            <FiArrowRight className="rotate-180" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Projects</h1>
          <p className="text-lg text-gray-300">A showcase of my work and experience</p>
        </div>
      </header>

      {/* Projects */}
      <section className="w-full py-20 md:py-32 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {AppConfig.experiences.map((exp, expIdx) => (
              <div key={expIdx} className="space-y-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{exp.company}</h2>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="font-semibold text-cyan-400">{exp.position}</span>
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>

                {exp.projects.map((project, projIdx) => (
                  <div
                    key={projIdx}
                    className="p-8 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-900"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase">Responsibilities</h4>
                        <ul className="space-y-2">
                          {project.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                              <FiCheck size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
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
