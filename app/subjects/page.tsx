"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const subjects = [
  {
    category: "MATHEMATICS",
    icon: "∑",
    subjects: [
      {
        name: "Algebra",
        level: "Basic → Advanced",
        tutors: 3,
        description: "CRUSH algebraic equations and DOMINATE polynomial functions",
      },
      {
        name: "Calculus",
        level: "AP → University",
        tutors: 2,
        description: "OBLITERATE derivatives and ANNIHILATE integrals with precision",
      },
      {
        name: "Statistics",
        level: "Intro → Advanced",
        tutors: 2,
        description: "DESTROY data analysis fears and CONQUER probability theory",
      },
      {
        name: "Linear Algebra",
        level: "University",
        tutors: 1,
        description: "DEMOLISH matrix operations and VAPORIZE vector spaces",
      },
      {
        name: "Differential Equations",
        level: "Advanced",
        tutors: 1,
        description: "ELIMINATE complex differential systems with BRUTAL efficiency",
      },
    ],
  },
  {
    category: "SCIENCES",
    icon: "⚗",
    subjects: [
      {
        name: "Chemistry",
        level: "High School → AP",
        tutors: 2,
        description: "EXPLODE chemical reactions and INCINERATE molecular confusion",
      },
      {
        name: "Physics",
        level: "Mechanics → Quantum",
        tutors: 2,
        description: "SMASH through physics problems with DEVASTATING force",
      },
      {
        name: "Biology",
        level: "Basic → Advanced",
        tutors: 2,
        description: "DISSECT biological systems and CONQUER cellular processes",
      },
      {
        name: "Organic Chemistry",
        level: "University",
        tutors: 1,
        description: "BURN through organic mechanisms with CHEMICAL precision",
      },
      {
        name: "Biochemistry",
        level: "Advanced",
        tutors: 1,
        description: "DISSOLVE biochemical pathways and MASTER metabolic networks",
      },
    ],
  },
  {
    category: "ENGLISH & LITERATURE",
    icon: "✎",
    subjects: [
      {
        name: "Essay Writing",
        level: "Basic → Advanced",
        tutors: 2,
        description: "FORGE powerful essays that DEMOLISH academic standards",
      },
      {
        name: "Literature Analysis",
        level: "High School → AP",
        tutors: 2,
        description: "DISSECT literary works and EXTRACT hidden meanings with FORCE",
      },
      {
        name: "Grammar & Syntax",
        level: "All Levels",
        tutors: 2,
        description: "OBLITERATE grammatical errors and PERFECT sentence structure",
      },
      {
        name: "Creative Writing",
        level: "Intermediate → Advanced",
        tutors: 1,
        description: "UNLEASH creative potential and CRAFT compelling narratives",
      },
      {
        name: "SAT/ACT Prep",
        level: "Test Prep",
        tutors: 3,
        description: "DESTROY standardized tests and MAXIMIZE scoring potential",
      },
    ],
  },
  {
    category: "TEST PREPARATION",
    icon: "🎯",
    subjects: [
      {
        name: "SAT Prep",
        level: "All Sections",
        tutors: 3,
        description: "ANNIHILATE SAT sections and BOOST scores to ELITE levels",
      },
      {
        name: "ACT Prep",
        level: "All Sections",
        tutors: 2,
        description: "CRUSH ACT components and DOMINATE composite scores",
      },
      {
        name: "AP Exams",
        level: "Multiple Subjects",
        tutors: 3,
        description: "OBLITERATE AP exams across ALL subject areas",
      },
      {
        name: "MCAT Prep",
        level: "Medical School",
        tutors: 1,
        description: "VAPORIZE MCAT sections and SECURE medical school admission",
      },
      {
        name: "GRE/GMAT",
        level: "Graduate School",
        tutors: 2,
        description: "DEMOLISH graduate entrance exams with STRATEGIC precision",
      },
    ],
  },
]

const tutors = [
  { id: 1, name: "DR. SARAH CHEN", slug: "sarah-chen" },
  { id: 2, name: "PROF. MARCUS WRIGHT", slug: "marcus-wright" },
  { id: 3, name: "MS. ELENA RODRIGUEZ", slug: "elena-rodriguez" },
]

export default function SubjectsPage() {
  const [activeCategory, setActiveCategory] = useState("MATHEMATICS")
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border-b-2 sm:border-b-4 border-black">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-bold mb-4 sm:mb-6">
              SUBJECT
              <br />
              <span className="bg-black text-white px-2 sm:px-4">DOMINATION</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-mono max-w-3xl mx-auto leading-relaxed">
              CHOOSE YOUR ACADEMIC BATTLEFIELD. Our ELITE tutors will OBLITERATE your weaknesses and transform you into
              an UNSTOPPABLE academic WARRIOR across ALL subjects.
            </p>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 border-b-2 sm:border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              {subjects.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`p-3 sm:p-4 lg:p-6 border-2 sm:border-4 border-black font-mono font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 ${
                    activeCategory === category.category
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">{category.icon}</div>
                  <div className="text-xs sm:text-sm lg:text-base">{category.category}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {subjects.map(
              (category) =>
                activeCategory === category.category && (
                  <div key={category.category}>
                    <div className="text-center mb-8 sm:mb-12">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold mb-3 sm:mb-4">
                        {category.category} <span className="text-3xl sm:text-4xl lg:text-6xl">{category.icon}</span>
                      </h2>
                      <p className="text-base sm:text-lg font-mono">
                        DOMINATE {category.category.toLowerCase()} with our BRUTAL teaching methods
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {category.subjects.map((subject, index) => (
                        <div
                          key={index}
                          className={`border-2 sm:border-4 border-black p-4 sm:p-6 transition-all duration-300 cursor-pointer group ${
                            hoveredSubject === `${category.category}-${index}`
                              ? "bg-black text-white transform -translate-y-1 sm:-translate-y-2"
                              : "bg-white text-black hover:bg-black hover:text-white hover:transform hover:-translate-y-1 sm:hover:-translate-y-2"
                          }`}
                          onMouseEnter={() => setHoveredSubject(`${category.category}-${index}`)}
                          onMouseLeave={() => setHoveredSubject(null)}
                        >
                          <div className="flex justify-between items-start mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-mono font-bold">{subject.name}</h3>
                            <div
                              className={`px-2 sm:px-3 py-1 border-1 sm:border-2 text-xs sm:text-sm font-mono font-bold ${
                                hoveredSubject === `${category.category}-${index}`
                                  ? "border-white text-white"
                                  : "border-black text-black group-hover:border-white group-hover:text-white"
                              }`}
                            >
                              {subject.tutors} TUTORS
                            </div>
                          </div>

                          <div className="mb-3 sm:mb-4">
                            <span className="text-xs sm:text-sm font-mono font-bold">LEVEL: </span>
                            <span className="font-mono text-xs sm:text-sm">{subject.level}</span>
                          </div>

                          <p className="font-mono text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{subject.description}</p>

                          <div className="space-y-3 mb-4">
                            <h4 className="text-sm font-mono font-bold">BOOK WITH SPECIFIC TUTOR:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {tutors.slice(0, Math.min(3, subject.tutors)).map((tutor) => (
                                <Link
                                  key={tutor.id}
                                  href={`/book?tutor=${tutor.id}&subject=${encodeURIComponent(subject.name)}`}
                                  className={`text-center py-2 px-3 border-2 font-mono font-bold text-xs transition-colors ${
                                    hoveredSubject === `${category.category}-${index}`
                                      ? "border-white text-white hover:bg-white hover:text-black"
                                      : "border-black text-black group-hover:border-white group-hover:text-white hover:bg-black hover:text-white"
                                  }`}
                                >
                                  BOOK {tutor.name.split(" ")[1]}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Link
                              href="/tutors"
                              className={`flex-1 text-center py-3 border-2 font-mono font-bold transition-colors ${
                                hoveredSubject === `${category.category}-${index}`
                                  ? "border-white text-white hover:bg-white hover:text-black"
                                  : "border-black text-black group-hover:border-white group-hover:text-white hover:bg-white hover:text-black"
                              }`}
                            >
                              VIEW TUTORS
                            </Link>
                            <Link
                              href={`/book?subject=${encodeURIComponent(subject.name)}`}
                              className={`flex-1 text-center py-3 border-2 font-mono font-bold transition-colors ${
                                hoveredSubject === `${category.category}-${index}`
                                  ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                                  : "bg-black text-white border-black group-hover:bg-white group-hover:text-black group-hover:border-white"
                              }`}
                            >
                              BOOK NOW
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6">
              READY TO <span className="bg-white text-black px-4">DOMINATE</span>
              <br />
              YOUR SUBJECTS?
            </h2>
            <p className="text-xl font-mono mb-8 leading-relaxed">
              Don't let academic weaknesses DESTROY your future. Choose your subjects and let our ELITE tutors
              OBLITERATE your struggles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="border-2 border-white bg-white text-black px-8 py-4 font-mono font-bold text-lg hover:bg-transparent hover:text-white transition-colors"
              >
                START DOMINATING NOW
              </Link>
              <Link
                href="/tutors"
                className="border-2 border-white px-8 py-4 font-mono font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                MEET THE DESTROYERS
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
