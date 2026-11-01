// components/PortfolioHome.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioHome() {
  const [selectedProject, setSelectedProject] = useState<{
    image: string;
    images?: string[];
    title: string;
    subtitle: string;
  } | null>(null);
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  // Softwares with verified SVG logos
  const softwareIcons = [
    { name: "Adobe Illustrator", slug: "adobeillustrator", color: "#FF9A00" },
    { name: "Excel", slug: "microsoftexcel", color: "#217346" },
    { name: "AutoCAD", slug: "autodesk", color: "#E51937" },
    { name: "Flutter", slug: "flutter", color: "#02569B" },
    { name: "React", slug: "react", color: "#61DAFB" },
    { name: "HTML5", slug: "html5", color: "#E34F26" },
    { name: "Photoshop", slug: "adobephotoshop", color: "#31A8FF" },
    { name: "InDesign", slug: "adobeindesign", color: "#FF3366" },
  ];

  return (
    <div className="relative bg-[#090909] text-neutral-100 selection:bg-yellow-400 selection:text-black">
      {/* Dynamic Background Grid & Subtle Yellow Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="tech-grid-pattern absolute inset-0 opacity-40" />
        <div className="dots-pattern absolute inset-0 opacity-30" />
        <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full bg-yellow-500/10 blur-[130px] animate-yellow-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[140px] animate-yellow-pulse" style={{ animationDelay: "2.5s" }} />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative z-10 min-h-[92vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        
        {/* Floating Apparel & Software Elements with Touch/Hover Reactions */}
        
        {/* 1. Sewing Machine Icon Floating (Left Top) */}
        <motion.div
          whileHover={{ scale: 1.25, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="hidden sm:flex absolute left-8 lg:left-20 top-24 z-20 cursor-pointer animate-float-1 flex-col items-center p-3 rounded-2xl bg-black/60 border border-yellow-500/30 shadow-xl shadow-yellow-500/10 backdrop-blur-md transition-all group"
        >
          <svg className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18M6 19V8a3 3 0 013-3h8a3 3 0 013 3v11M14 8v5M14 13h-3" />
            <circle cx="17.5" cy="11.5" r="1.5" />
          </svg>
          <span className="text-[10px] font-mono text-yellow-400/80 mt-1 uppercase font-semibold">Sewing Tech</span>
        </motion.div>

        {/* 2. Scissors / Cutting Tool Floating (Right Top) */}
        <motion.div
          whileHover={{ scale: 1.25, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
          className="hidden sm:flex absolute right-8 lg:right-24 top-28 z-20 cursor-pointer animate-float-2 flex-col items-center p-3 rounded-2xl bg-black/60 border border-yellow-500/30 shadow-xl shadow-yellow-500/10 backdrop-blur-md transition-all group"
        >
          <svg className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
          </svg>
          <span className="text-[10px] font-mono text-yellow-400/80 mt-1 uppercase font-semibold">Pattern Cut</span>
        </motion.div>

        {/* 3. Thread Spool Icon Floating (Left Middle) */}
        <motion.div
          whileHover={{ scale: 1.25, rotate: 12 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex absolute left-12 lg:left-24 bottom-36 z-20 cursor-pointer animate-float-3 flex-col items-center p-3 rounded-2xl bg-black/60 border border-yellow-500/30 shadow-xl shadow-yellow-500/10 backdrop-blur-md transition-all group"
        >
          <svg className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10M7 20h10M8 4v16M16 4v16M8 8h8M8 12h8M8 16h8" />
          </svg>
          <span className="text-[10px] font-mono text-yellow-400/80 mt-1 uppercase font-semibold">Yarn & Thread</span>
        </motion.div>

        {/* 4. Measuring Tape / Anthropometry Floating (Right Middle) */}
        <motion.div
          whileHover={{ scale: 1.25, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex absolute right-12 lg:right-28 bottom-40 z-20 cursor-pointer animate-float-1 flex-col items-center p-3 rounded-2xl bg-black/60 border border-yellow-500/30 shadow-xl shadow-yellow-500/10 backdrop-blur-md transition-all group"
        >
          <svg className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path strokeLinecap="round" d="M7 6v4M11 6v3M15 6v4M19 6v3" />
          </svg>
          <span className="text-[10px] font-mono text-yellow-400/80 mt-1 uppercase font-semibold">Anthropometry</span>
        </motion.div>

        {/* 5. Software Icon Floating: Illustrator */}
        <motion.div
          whileHover={{ scale: 1.3, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute left-48 top-16 z-20 cursor-pointer animate-float-2 p-2.5 rounded-2xl bg-black/70 border border-yellow-500/40 shadow-lg shadow-yellow-500/10 backdrop-blur-md"
          title="Adobe Illustrator"
        >
          <img src="https://cdn.simpleicons.org/adobeillustrator/FF9A00" alt="Illustrator" className="w-7 h-7" />
        </motion.div>

        {/* 6. Software Icon Floating: AutoCAD / Autodesk */}
        <motion.div
          whileHover={{ scale: 1.3, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute right-48 top-20 z-20 cursor-pointer animate-float-3 p-2.5 rounded-2xl bg-black/70 border border-yellow-500/40 shadow-lg shadow-yellow-500/10 backdrop-blur-md"
          title="AutoCAD"
        >
          <img src="https://cdn.simpleicons.org/autodesk/E51937" alt="AutoCAD" className="w-7 h-7" />
        </motion.div>

        {/* 7. Software Icon Floating: Excel */}
        <motion.div
          whileHover={{ scale: 1.3, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute left-48 bottom-20 z-20 cursor-pointer animate-float-1 p-2.5 rounded-2xl bg-black/70 border border-yellow-500/40 shadow-lg shadow-yellow-500/10 backdrop-blur-md"
          title="Microsoft Excel"
        >
          <img src="https://cdn.simpleicons.org/microsoftexcel/217346" alt="Excel" className="w-7 h-7" />
        </motion.div>

        {/* 8. Software Icon Floating: Flutter */}
        <motion.div
          whileHover={{ scale: 1.3, rotate: -12 }}
          whileTap={{ scale: 0.9 }}
          className="hidden lg:flex absolute right-48 bottom-24 z-20 cursor-pointer animate-float-2 p-2.5 rounded-2xl bg-black/70 border border-yellow-500/40 shadow-lg shadow-yellow-500/10 backdrop-blur-md"
          title="Flutter"
        >
          <img src="https://cdn.simpleicons.org/flutter/02569B" alt="Flutter" className="w-7 h-7" />
        </motion.div>

        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span>HELLO I AM</span>
        </motion.div>

        {/* Hero Name — Bold, Centered, Punchy Yellow-Black Tech Contrast */}
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl font-black text-center tracking-tighter leading-none mb-4 text-white drop-shadow-[0_10px_25px_rgba(234,179,8,0.15)] select-none"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          Vignesh K U
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-yellow-400">
            Fashion Technology Student | Apparel Production
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1 tracking-widest uppercase">
            National Institute of Fashion Technology (NIFT)
          </p>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          <span>Open to Internship & Placement Opportunities</span>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          className="max-w-xl text-center mb-10 text-neutral-300 text-sm sm:text-base leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Passionate about apparel manufacturing, garment development, and production-process optimization.
        </motion.p>

        {/* Action Buttons with tactile hover & tap animations */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#works"
            className="rounded-full bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3.5 font-bold text-sm shadow-lg shadow-yellow-500/20 transition-all flex items-center gap-2"
          >
            <span>View My Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="rounded-full bg-black/80 hover:bg-neutral-900 text-yellow-400 border border-yellow-400/50 hover:border-yellow-400 px-8 py-3.5 font-bold text-sm shadow-md transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </section>

      {/* ================= SOFTWARE LOGOS RUNWAY ================= */}
      <div className="relative z-10 border-y border-yellow-500/20 bg-black/60 backdrop-blur-md py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
          {[...softwareIcons, ...softwareIcons].map((soft, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-400/60 transition-all cursor-pointer shadow-sm"
            >
              <img
                src={`https://cdn.simpleicons.org/${soft.slug}`}
                alt={soft.name}
                className="w-4 h-4 object-contain"
              />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-200">
                {soft.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT ME ================= */}
      <section id="about" className="relative z-10 py-24 px-6 border-b border-yellow-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-4 tracking-tight text-white">
            Apparel Production & Fashion Engineering
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          
          <p className="max-w-2xl mx-auto text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
            Final-year Fashion Technology student specializing in Apparel Production, Industrial Engineering (IE), and technical garment development. Passionate about solving real-world manufacturing challenges, prototyping innovative functional outerwear, and integrating modern digital tools into apparel manufacturing.
          </p>

          {/* Toggle Button */}
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMoreAbout((prev) => !prev)}
              className="cursor-pointer group flex items-center gap-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-yellow-400 border border-yellow-400/50 hover:border-yellow-400 px-7 py-3 text-sm font-semibold transition-all shadow-md"
            >
              <span>{showMoreAbout ? "Hide Resume Details" : "Know More About Me"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showMoreAbout ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>

          {/* Expandable CV Details */}
          <AnimatePresence>
            {showMoreAbout && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden text-left mt-12 space-y-6"
              >
                {/* Education Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                  <motion.div whileHover={{ y: -4 }} className="bg-black/80 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/60 transition-all">
                    <span className="text-xs uppercase tracking-wider text-yellow-400 font-semibold">Degree</span>
                    <h3 className="text-lg font-bold text-white mt-1">B.FTech</h3>
                    <p className="text-neutral-400 text-sm mt-1">National Institute of Fashion Technology (NIFT)</p>
                    <p className="text-neutral-500 text-xs mt-2 font-mono">2023 - 2027 • CGPA: 8.4</p>
                  </motion.div>

                  <motion.div whileHover={{ y: -4 }} className="bg-black/80 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/60 transition-all">
                    <span className="text-xs uppercase tracking-wider text-yellow-400 font-semibold">Higher Secondary</span>
                    <h3 className="text-lg font-bold text-white mt-1">SSGHSS Payyanur</h3>
                    <p className="text-neutral-400 text-sm mt-1">Science Stream</p>
                    <p className="text-neutral-500 text-xs mt-2 font-mono">2021 - 2023 • Score: 96%</p>
                  </motion.div>

                  <motion.div whileHover={{ y: -4 }} className="bg-black/80 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/60 transition-all">
                    <span className="text-xs uppercase tracking-wider text-yellow-400 font-semibold">Location & Honors</span>
                    <h3 className="text-lg font-bold text-white mt-1">Kannur, Kerala</h3>
                    <p className="text-neutral-400 text-sm mt-1">Malayalam | English | Tamil | Hindi</p>
                    <p className="text-neutral-500 text-xs mt-2 font-mono">Scouts: Rajyapuraskar</p>
                  </motion.div>
                </div>

                {/* Domain Knowledge */}
                <div className="bg-black/80 p-6 sm:p-8 rounded-2xl border border-yellow-500/20">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    Domain Knowledge & Competencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Pattern Making",
                      "Marker Making",
                      "Garment Construction",
                      "Anthropometry",
                      "Special Machines & Stitches",
                      "Fabric Science",
                      "Internet of Things (IoT)",
                      "Industrial Engineering (IE)",
                      "Merchandising",
                      "Line Balancing",
                      "Time Study",
                    ].map((domain, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-medium px-3.5 py-1.5 rounded-full border border-neutral-800 hover:border-yellow-400/50 transition-colors"
                      >
                        {domain}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                <div className="bg-black/80 p-6 sm:p-8 rounded-2xl border border-yellow-500/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white">Fashion Technology Intern</h3>
                    <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full w-fit">
                      June 2026 - July 2026
                    </span>
                  </div>
                  <p className="text-yellow-400/90 text-sm font-medium mb-3">Sonal Apparel Private Ltd (SAPL) • Bangalore</p>
                  <ul className="list-disc list-inside text-neutral-300 text-xs sm:text-sm space-y-1.5 leading-relaxed font-light">
                    <li>Gained hands-on exposure to garment production workflow from techpack to bulk output.</li>
                    <li>Conducted systematic time studies and implemented real-time line balancing efficiencies.</li>
                    <li>Developed an application using Flutter for the gatepass management system, reducing style changeover time.</li>
                  </ul>
                </div>

                {/* Industrial Textile Training */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-black/80 p-5 rounded-2xl border border-yellow-500/20">
                    <span className="text-xs text-yellow-400 font-semibold uppercase">Spinning</span>
                    <h4 className="text-sm font-bold text-white mt-1">Arthi Textiles</h4>
                    <p className="text-xs text-neutral-500 mb-1">Coimbatore</p>
                    <p className="text-neutral-400 text-xs leading-relaxed">Spinning process, fiber opening, and yarn manufacturing operations.</p>
                  </div>
                  <div className="bg-black/80 p-5 rounded-2xl border border-yellow-500/20">
                    <span className="text-xs text-yellow-400 font-semibold uppercase">Dyeing</span>
                    <h4 className="text-sm font-bold text-white mt-1">Poovarasi Textile Mills</h4>
                    <p className="text-xs text-neutral-500 mb-1">Erode</p>
                    <p className="text-neutral-400 text-xs leading-relaxed">Industrial dyeing methods, color matching, and quality control.</p>
                  </div>
                  <div className="bg-black/80 p-5 rounded-2xl border border-yellow-500/20">
                    <span className="text-xs text-yellow-400 font-semibold uppercase">Knitting</span>
                    <h4 className="text-sm font-bold text-white mt-1">Paruthi Knits</h4>
                    <p className="text-xs text-neutral-500 mb-1">Tirupur</p>
                    <p className="text-neutral-400 text-xs leading-relaxed">Knitting machines, fabric finishing, and production workflow.</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="/Vignesh_KU_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-400 hover:underline"
                  >
                    <span>View original 2-page CV (PDF)</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= SELECTED WORKS ================= */}
      <section id="works" className="relative z-10 py-24 px-6 border-b border-yellow-500/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-3 tracking-tight text-white">
              Selected Works
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4 rounded-full" />
            <p className="text-neutral-400 text-sm sm:text-base font-light">Click on any project to explore the presentation.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 01 — Interactive Yellow & Black Card */}
            <motion.div
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                setSelectedProject({
                  image: "/project-1-full.png",
                  title: "Project 01: Reversible Multifunctional Jacket",
                  subtitle:
                    "Scroll down to view design overview, mood board, patterns, and photoshoot",
                })
              }
              className="group cursor-pointer bg-neutral-950 rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/10 flex flex-col"
            >
              <div className="relative h-80 sm:h-[360px] overflow-hidden bg-black flex items-start justify-center">
                <img
                  src="/project-1-full.png"
                  alt="Project 01 - Reversible Multifunctional Jacket"
                  className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-50 transition-opacity" />

                {/* Floating Action Pill */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-5 right-5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </motion.span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-yellow-400 font-semibold">
                      Project 01 • Product Development
                    </span>
                    <span className="text-[11px] text-neutral-400 bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-800">
                      Garment Prototype
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2.5 text-white group-hover:text-yellow-400 transition-colors">
                    Reversible Multifunctional Fur & Windbreaker Jacket
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                    A dual-sided functional jacket featuring black windbreaker styling with red accents on one side, and deep red fleece texture on the reverse side. Complete with technical details, pattern assembly, and photoshoot documentation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project 02 — Automatic Liquid Filling System (IoT) */}
            <motion.div
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                setSelectedProject({
                  image: "/project-2-presentation.jpg",
                  title: "Project 02: IoT-Based Automatic Liquid Filling System",
                  subtitle:
                    "Scroll down to view components, block diagrams, working principle, sensing logic, and prototype setup",
                })
              }
              className="group cursor-pointer bg-neutral-950 rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/10 flex flex-col"
            >
              <div className="relative h-80 sm:h-[360px] overflow-hidden bg-black flex items-start justify-center">
                <img
                  src="/project-2-presentation.jpg"
                  alt="Project 02 - IoT-Based Automatic Liquid Filling System"
                  className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-50 transition-opacity" />

                {/* Floating Action Pill */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-5 right-5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </motion.span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-yellow-400 font-semibold">
                      Project 02 • IoT & Automation
                    </span>
                    <span className="text-[11px] text-neutral-400 bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-800">
                      Textile Wet Processing
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2.5 text-white group-hover:text-yellow-400 transition-colors">
                    IoT-Based Automatic Liquid Filling System
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                    Smart liquid-level monitoring for apparel wet processing (dyeing, washing, and finishing). Integrates Arduino Uno, ultrasonic sensing, and cloud IoT dashboard to automate level-based filling and prevent overflow.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project 03 — Smart Gate Pass Management System */}
            <motion.div
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                setSelectedProject({
                  image: "/project-3-slides/slide-01.png",
                  images: [
                    "/project-3-slides/slide-01.png",
                    "/project-3-slides/slide-02.png",
                    "/project-3-slides/slide-03.png",
                    "/project-3-slides/slide-04.png",
                    "/project-3-slides/slide-05.png",
                    "/project-3-slides/slide-06.png",
                    "/project-3-slides/slide-07.png",
                    "/project-3-slides/slide-08.png",
                    "/project-3-slides/slide-09.png",
                    "/project-3-slides/slide-10.png",
                    "/project-3-slides/slide-11.png",
                    "/project-3-slides/slide-12.png",
                  ],
                  title: "Project 03: Smart Gate Pass Management System",
                  subtitle:
                    "Scroll down to view system overview, use-case diagram, wireframes, app screenshots, and implementation details",
                })
              }
              className="group cursor-pointer bg-neutral-950 rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 shadow-xl hover:shadow-yellow-500/10 flex flex-col"
            >
              <div className="relative h-80 sm:h-[360px] overflow-hidden bg-black flex items-start justify-center">
                <img
                  src="/project-3-slides/slide-01.png"
                  alt="Project 03 - Smart Gate Pass Management System"
                  className="w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-50 transition-opacity" />

                {/* Floating Action Pill */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-5 right-5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </motion.span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-yellow-400 font-semibold">
                      Project 03 • Software Development
                    </span>
                    <span className="text-[11px] text-neutral-400 bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-800">
                      Flutter App
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mt-2.5 text-white group-hover:text-yellow-400 transition-colors">
                    Smart Gate Pass Management System
                  </h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                    A digital gate pass management application built with Flutter for apparel manufacturing facilities. Features real-time tracking, approval workflows, and security logging to streamline factory gate operations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FULL-SCREEN IMAGE MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md"
          >
            {/* Sticky Header with Title and Close Button */}
            <div className="sticky top-0 z-20 flex items-center justify-between bg-black/90 border-b border-yellow-500/20 px-6 sm:px-10 py-4 backdrop-blur-sm">
              <div className="max-w-2xl">
                <h4 className="font-bold text-white text-base sm:text-lg">
                  {selectedProject.title}
                </h4>
                <p className="text-xs text-yellow-400/80">
                  {selectedProject.subtitle}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(null)}
                className="cursor-pointer rounded-full bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 font-bold text-sm transition-all flex items-center gap-2 shadow-lg shrink-0 ml-4"
              >
                <span>Close</span>
                <span className="text-lg leading-none">&times;</span>
              </motion.button>
            </div>

            {/* Scrollable Presentation Sheet container */}
            <div className="min-h-screen py-8 px-2 sm:px-6 flex justify-center">
              <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-neutral-800">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  selectedProject.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${selectedProject.title} - Slide ${idx + 1}`}
                      className="w-full h-auto block"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  ))
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto block"
                    loading="eager"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-3 tracking-tight text-white">
            Contact / Opportunities
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6 rounded-full" />
          
          <p className="text-neutral-300 max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed font-light">
            Open to internships and graduate placement opportunities in apparel manufacturing, IE, and garment development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:vignesh.ku@nift.ac.in"
              className="w-full sm:w-auto rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-9 py-3.5 text-sm shadow-lg shadow-yellow-500/20 transition-all"
            >
              Email Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/Vignesh_KU_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-neutral-900 hover:bg-neutral-800 text-yellow-400 border border-yellow-400/50 hover:border-yellow-400 font-bold px-9 py-3.5 text-sm transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </motion.a>
          </div>

          <div className="mt-16 pt-8 border-t border-yellow-500/10 text-xs font-mono text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>&copy; 2026 Vignesh K U &bull; Fashion Technology Portfolio</span>
            <span className="text-yellow-400/80">NIFT &bull; Kannur, Kerala</span>
          </div>
        </div>
      </section>
    </div>
  );
}
