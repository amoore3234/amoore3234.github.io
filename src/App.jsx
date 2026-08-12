import React, { useState } from 'react';
import { projectsData } from './data/projects';

export default function App() {
  const [projects] = useState(projectsData);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">

      {/* HEADER NAVBAR CONTAINER */}
      <header className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
          <a href="#hero" class="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors">
            MyDeveloperPortfolio<span className="text-blue-600">.io</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About Me</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO HERO INTRO REGION */}
      <section id="hero" className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-none">
            Designing & Scaling <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Comprehensive Software Solutions</span>
          </h1>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Full-Stack Software Developer building responsive frontend applications and scalable enterprise APIs.
          </p>
          <a href="#projects" className="px-6 py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all">Explore My Work</a>
        </div>
      </section>

      {/* ABOUT ME & EXPERIENCE TIMELINE */}
      <section id="about" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <div className='mt-30'>
                <img
                  src="./profile-photo.png"
                  alt="Anthony Moore Profile Picture"
                  onError={(e) => {
                    e.target.src = "https://placeholder.com";
                  }}
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">About Me</h2>
              <p className="text-3xl font-black tracking-tight mb-6 leading-tight text-slate-900">
                Driven by building and optimizing complex systems.
              </p>
              <p className="text-slate-750 leading-relaxed mb-6 font-normal">
                I'm an experienced learner with a strong foundation in modern JavaScript frameworks (<strong>React & Angular</strong>) and robust backend technologies (<strong>Java, Python, and Node</strong>),
                specializing in designing and building applications at scale.
              </p>
              <p className="text-slate-750 leading-relaxed font-normal">
                Whether I'm architecting REST API services, constructing UI mocks and system design diagrams, tickering with database queries, or improving responsive UI components,
                my focus is to create software that is both efficient and user-friendly.
              </p>
              <div className='mt-10'>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Experience</h3>
                <div className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5"></div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">2021 — Present</div>
                  <h4 className="text-lg font-bold">Full-Stack Developer</h4>
                  <p className="text-md text-slate-750 mt-2 font-normal">
                    I'm currently a Full Stack Software Developer at Whitesky Communications where we strive to provide our customers with the next-generation of internet for multi-family and commercial units.
                    My focus is to build and optimize internal tooling systems for end users, so they can perform their day-to-day duties more efficiently. I helped build and optimized Java-based REST APIs
                    improving data modernization across 500+ sites, reducing synchronization bottlenecks by 30%. I also built a network tooling system to streamline workflows and enhance visibility for Network Engineers.
                    I'm currently synchronizing 1000+ devices from external systems to Whitesky's ecosystem to enhance data efficiency, accessibility, and reduce manual processing for end users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Portfolio</h2>
            <p className="text-4xl font-black tracking-tight">Recent Projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects.map(job => (
              <div key={job.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-md">{job.framework}</span>
                    <span className="text-xs font-semibold text-slate-400">{job.type}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                  <p className="text-sm text-slate-650 leading-relaxed mb-6">{job.desc}</p>
                </div>
                <a href={job.github} target="_blank" rel="noopener noreferrer" className="w-full h-11 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-xs font-bold rounded-xl flex items-center justify-center gap-2 tracking-wide uppercase transition-colors">
                  View Repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Connection Hub</h2>
            <p className="text-4xl font-black text-slate-900 tracking-tight">Let's Build Something Exciting!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

            {/* Interactive connect directory section */}
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Connect Channels</h3>

              {/* Github Link */}
              <a
                href="https://github.com/amoore3234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-200 group"
              >
                <div className="p-2.5 bg-slate-900 text-white rounded-lg group-hover:bg-blue-600 transition-colors flex-shrink-0">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">GitHub Repository</div>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/amoore3228"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-200 group"
              >
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Professional Network</div>
                </div>
              </a>

              {/* Email Form */}
              <a
                href="mailto:akmoore3234@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-200 group"
              >
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Direct Inbox</div>
                </div>
              </a>

              {/* Resume Download */}
              <a
                href="./resume.pdf"
                download="FullStackDeveloper.pdf"
                className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-200 group"
              >
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Document Download</div>
                  <div className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors truncate">Download Resume (PDF)</div>
                </div>
              </a>

            </div>

            {/* RIGHT COLUMN: MESSAGING FORM */}
            <form action="https://formspree.io/f/mdendogj"
                method="POST"
                className="md:col-span-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Your Name</label>
                  <input type="text" name="name" required className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-sm text-slate-800 outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address</label>
                  <input type="email" name="email" required className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-sm text-slate-800 outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message Content</label>
                <textarea name="message" rows="4" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-sm text-slate-800 outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full h-12 bg-slate-900 text-white font-bold text-sm tracking-wide uppercase rounded-xl hover:bg-slate-800 transition-colors">
                Send Secure Message
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-8 text-center text-xs font-medium text-slate-500">
        &copy; 2026 Portfolio. Hosted on GitHub Pages.
      </footer>
    </div>
  );
}