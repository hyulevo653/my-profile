"use client"

import { AppConfig } from "@/config/app.config"
import Image from "next/image"
import { FiCheck } from "react-icons/fi"

export default function MyCVPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white">{AppConfig.name}</h1>
                <p className="text-xl text-cyan-400 font-medium">{AppConfig.title}</p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line max-w-lg">
                {AppConfig.introduction}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📧 {AppConfig.email}</p>
                <p>📱 {AppConfig.phone}</p>
                <p>🎂 DOB: {AppConfig.dob}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                {AppConfig.subscriptions.map((sub, idx) => (
                  <button
                    key={idx}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      sub.preferred
                        ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-lg shadow-cyan-500/50"
                        : "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600"
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-8">
                {AppConfig.socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                      aria-label={link.name}
                    >
                      <Icon size={24} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right: Avatar */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-75"></div>
                <div className="relative w-full h-full bg-slate-800 rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl">
                  <Image
                    src={AppConfig.imageCV || "/placeholder.svg"}
                    alt={AppConfig.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full py-20 md:py-32 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
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
      </section>

      {/* Skills Section */}
      <section className="w-full py-20 md:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(AppConfig.skills).map(([category, items]) => (
              <div
                key={category}
                className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-white capitalize mb-4">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <FiCheck size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full py-20 md:py-32 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AppConfig.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                    <p className="text-cyan-400 font-semibold">{edu.degree}</p>
                    <p className="text-gray-400 text-sm mt-2">{edu.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 md:py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How to work with me</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the best option that fits your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {AppConfig.subscriptions.map((sub, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  sub.preferred
                    ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500 shadow-lg shadow-cyan-500/20 transform md:scale-105"
                    : "bg-slate-800 border border-slate-700 hover:border-slate-600"
                }`}
              >
                {sub.preferred && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-cyan-500 text-white text-sm font-semibold rounded-full">Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{sub.name}</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                  {sub.price}
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <FiCheck className="text-cyan-400 flex-shrink-0" size={20} />
                    <span>Professional consultation</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FiCheck className="text-cyan-400 flex-shrink-0" size={20} />
                    <span>Quality code delivery</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FiCheck className="text-cyan-400 flex-shrink-0" size={20} />
                    <span>Support & maintenance</span>
                  </li>
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    sub.preferred
                      ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-gray-400">© 2025 {AppConfig.name}. All rights reserved.</p>
            </div>

            <div className="flex gap-8">
              {AppConfig.socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>

            <a
              href={`mailto:${AppConfig.email}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
