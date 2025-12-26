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
              I'm {AppConfig.name}, a {AppConfig.title}.
              {AppConfig.summary}
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

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-12">
              {AppConfig.experiences.map((exp, expIdx) => (
                <div key={expIdx} className="border-l-2 border-cyan-500/30 pl-8 relative">
                  <div className="absolute -left-4 top-2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950"></div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.position}</p>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                  </div>

                  <div className="space-y-6">
                    {exp.projects.map((project, projIdx) => (
                      <div
                        key={projIdx}
                        className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 hover:border-cyan-500/30 transition-colors"
                      >
                        <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</p>
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
                          <p className="text-sm font-semibold text-gray-400 mb-2">Responsibilities:</p>
                          <ul className="space-y-2">
                            {project.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                                <FiCheck size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16 mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            <div className="space-y-6">
              {AppConfig.education.map((edu, idx) => (
                <a
                  key={idx}
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group"
                >
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {edu.school}
                  </p>
                  <p className="text-gray-400 text-base bg-slate-800/50 px-4 py-2 rounded-lg inline-block hover:bg-slate-700/50 transition-colors">
                    {edu.duration}
                  </p>
                  <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-cyan-500/30 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
          {/* CTA */}
          <div className="p-8 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <p className="text-gray-300 mb-6">Let's discuss your project and see how I can help.</p>
            <Link
              href="/contact"
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
