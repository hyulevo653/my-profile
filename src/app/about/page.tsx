"use client"

import { AppConfig } from "@/config/app.config"
import Link from "next/link"
import { FiArrowRight, FiCheck } from "react-icons/fi"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-gray-200">
      {/* Header */}
      <header className="relative w-full py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-10"
          >
            <FiArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl">
            Get to know me better
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-white mb-8">My Journey</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              I'm <span className="text-white font-medium">{AppConfig.name}</span>, a{" "}
              <span className="text-cyan-400 font-medium">{AppConfig.title}</span>.
              {AppConfig.summary && ` ${AppConfig.summary}`}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              My passion for web development began with simple curiosity about how the internet really works.
              Over the years, I've evolved from tinkering with HTML & CSS to building modern full-stack applications,
              always striving to learn, adapt, and create clean, performant, user-focused experiences.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-10">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(AppConfig.skills).map(([category, skills]) => (
                <div
                  key={category}
                  className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-700/40 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-5 capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <ul className="space-y-3">
                    {skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <FiCheck className="text-cyan-400 flex-shrink-0" size={18} aria-hidden="true" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience - Modern Timeline */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Work Experience</h2>

            <div className="relative space-y-16 md:space-y-20">
              {/* Vertical line */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/30 to-transparent" />

              {AppConfig.experiences.map((exp, i) => (
                <article
                  key={i}
                  className={`relative flex flex-col md:flex-row md:items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950 z-10 shadow-lg shadow-cyan-900/20" />

                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                    <div className="text-lg font-medium text-cyan-400">{exp.position}</div>
                    <div className="text-sm text-gray-500 mt-1">{exp.duration}</div>

                    <div className="mt-6 space-y-6">
                      {exp.projects?.map((project, j) => (
                        <div
                          key={j}
                          className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-600/40 transition-all duration-300"
                        >
                          <h4 className="text-xl font-semibold text-white mb-3">{project.name}</h4>
                          <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                          {project.techStack?.length > 0 && (
                            <div className="mb-4">
                              <p className="text-sm font-medium text-gray-400 mb-2">Tech Stack</p>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, k) => (
                                  <span
                                    key={k}
                                    className="px-3 py-1 text-xs font-medium bg-cyan-950/50 text-cyan-300 rounded-full border border-cyan-800/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.responsibilities?.length > 0 && (
                            <div>
                              <p className="text-sm font-medium text-gray-400 mb-3">Key Responsibilities</p>
                              <ul className="space-y-2.5">
                                {project.responsibilities.map((resp, k) => (
                                  <li key={k} className="flex gap-3 text-gray-300 text-sm">
                                    <FiCheck className="text-cyan-400 mt-1 flex-shrink-0" size={16} aria-hidden="true" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-10">Education</h2>
            <div className="space-y-6">
              {AppConfig.education.map((edu, i) => (
                <Link
                  key={i}
                  href={edu.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative p-7 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-600/50 hover:bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/20"
                >
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors mb-3">
                    {edu.school}
                  </p>
                  <span className="inline-block px-4 py-1.5 bg-slate-800/70 text-gray-300 text-sm rounded-lg group-hover:bg-slate-700/70 transition-colors">
                    {edu.duration}
                  </span>

                  <div className="absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-cyan-500/30 transition-all duration-300 pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 px-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-blue-950/20 border border-cyan-900/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's talk about your project and explore how I can help bring it to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-900/20 hover:shadow-cyan-600/30 hover:scale-[1.02]"
            >
              Get in Touch
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} {AppConfig.name}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}