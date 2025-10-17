"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const tutorData = {
  "shiven-sharma": {
    id: 1,
    name: "Shiven Sharma",
    title: "Founder & Manager - Elite Academic Mentor",
    rating: 5.0,
    experience: "FOUNDER",
    sessions: "100+",
    subjects: ["Mathematics", "Physics", "Computer Science", "Web Design", "SAT Prep"],
    education: "High School - 4.35 GPA, 1520 SAT",
    bio: "Shiven is the FOUNDER and MANAGER of Tutoropia. With a stellar 4.35 GPA and 1520 SAT score, Shiven brings exceptional academic excellence and leadership to every session. As a tutor for Project Udaan, Shiven is dedicated to making quality education accessible to all. Specializing in STEM subjects and web design, Shiven has helped 100+ students achieve their academic goals through innovative teaching methods and proven strategies.",
    achievements: [
      "FOUNDED Tutoropia to provide elite tutoring",
      "TUTOR for Project Udaan - serving underprivileged students",
      "HELPED 100+ students improve grades significantly",
      "4.35 GPA with 1520 SAT score",
      "EXPERT in Mathematics, Physics, and Computer Science",
    ],
    availability: ["Monday 4-9 PM PST", "Tuesday 4-9 PM PST", "Wednesday 4-9 PM PST", "Thursday 4-9 PM PST", "Friday 4-9 PM PST", "Saturday 9 AM-9 PM PST", "Sunday 9 AM-9 PM PST"],
    rate: "$25/hour",
    testimonial:
      '"Shiven is an exceptional tutor! His innovative teaching methods helped me finally understand calculus. He goes above and beyond for every student!" - Michael K.',
  },
  "tattva-harish": {
    id: 2,
    name: "Tattva Harish",
    title: "Lead Tutor - Multi-Subject Specialist",
    rating: 5.0,
    experience: "2 YEARS",
    sessions: "80+",
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "SAT Prep"],
    education: "High School - 4.4 GPA, 1520 SAT",
    bio: "Tattva is our LEAD TUTOR with an impressive 4.4 GPA and 1520 SAT score. With 2 years of tutoring experience, Tattva has mastered the art of breaking down complex concepts across multiple subjects. His proven track record and versatile expertise make him an invaluable mentor for students seeking comprehensive academic support. Tattva's dedication to student success is unmatched.",
    achievements: [
      "LEAD TUTOR with 2 years of proven experience",
      "HELPED 80+ students achieve academic excellence",
      "4.4 GPA with perfect 1520 SAT score",
      "MASTER of multiple subjects including STEM and humanities",
      "SPECIALIZES in comprehensive test prep strategies",
    ],
    availability: ["Monday 4-9 PM PST", "Tuesday 4-9 PM PST", "Wednesday 4-9 PM PST", "Thursday 4-9 PM PST", "Friday 4-9 PM PST", "Saturday 9 AM-9 PM PST", "Sunday 9 AM-9 PM PST"],
    rate: "$25/hour",
    testimonial:
      '"Tattva helped me raise my SAT score by 180 points! His multi-subject expertise is incredible. Best tutor I\'ve ever had!" - Priya S.',
  },
  "nitin-ramesh": {
    id: 3,
    name: "Nitin Ramesh",
    title: "Tutor - Science & Mathematics Specialist",
    rating: 4.9,
    experience: "1 YEAR",
    sessions: "40+",
    subjects: ["Mathematics", "English", "Chemistry", "Biology"],
    education: "High School - 3.98 GPA",
    bio: "Nitin is our dedicated science and mathematics tutor with a solid 3.98 GPA. With 1 year of tutoring experience, Nitin excels at providing patient, detailed explanations that help students truly understand the material. His strength lies in breaking down complex scientific concepts into manageable pieces. Nitin's encouraging teaching style helps students build confidence and achieve their academic potential.",
    achievements: [
      "STRONG 3.98 GPA demonstrating consistent excellence",
      "HELPED 40+ students improve their science grades",
      "PATIENT and detail-oriented teaching approach",
      "SPECIALIZES in making chemistry and biology accessible",
      "EXCELLENT at building student confidence",
    ],
    availability: ["Monday 4-9 PM PST", "Tuesday 4-9 PM PST", "Wednesday 4-9 PM PST", "Thursday 4-9 PM PST", "Friday 4-9 PM PST", "Saturday 9 AM-9 PM PST", "Sunday 9 AM-9 PM PST"],
    rate: "$20/hour",
    testimonial:
      '"Nitin is incredibly patient and thorough! He helped me go from a C to an A in chemistry. His explanations are crystal clear!" - Jessica L.',
  },
  "ryan-zhao": {
    id: 4,
    name: "Ryan Zhao",
    title: "Tutor - Test Prep Expert",
    rating: 5.0,
    experience: "2 YEARS",
    sessions: "75+",
    subjects: ["Mathematics", "English", "SAT Prep"],
    education: "High School - 4.48 GPA, 1580 SAT, Committed to NYU",
    bio: "Ryan is our exceptional test prep specialist with an outstanding 4.48 GPA and impressive 1580 SAT score. Now committed to NYU, Ryan brings 2 years of tutoring experience and proven test-taking strategies to every session. His systematic approach to SAT preparation has helped 75+ students achieve significant score improvements. Ryan's own success story inspires students to reach for their highest potential.",
    achievements: [
      "IMPRESSIVE 1580 SAT score - top 1% nationally",
      "COMMITTED to New York University",
      "HELPED 75+ students improve test scores dramatically",
      "4.48 GPA demonstrating academic excellence",
      "EXPERT in SAT strategies and test-taking techniques",
    ],
    availability: ["Monday 7-9 PM PST", "Tuesday 7-9 PM PST", "Wednesday 7-9 PM PST", "Thursday 7-9 PM PST", "Friday 7-9 PM PST"],
    rate: "$25/hour",
    testimonial:
      '"Ryan helped me boost my SAT score by 250 points! His strategies work. Now I\'m confident about college applications!" - David M.',
  },
  "joel-jacobs": {
    id: 5,
    name: "Joel Jacobs",
    title: "Tutor - Comprehensive Academic Support",
    rating: 4.9,
    experience: "2 YEARS",
    sessions: "70+",
    subjects: ["Mathematics", "English", "SAT Prep", "Biology"],
    education: "High School - 4.25 GPA, 1400 SAT",
    bio: "Joel is our versatile tutor with a strong 4.25 GPA and 1400 SAT score. With 2 years of dedicated tutoring experience, Joel provides comprehensive academic support across multiple subjects. His well-rounded approach helps students excel in both STEM and humanities. Joel's commitment to student success and his comprehensive teaching methodology make him an excellent choice for students seeking overall academic improvement.",
    achievements: [
      "2 YEARS of successful tutoring experience",
      "HELPED 70+ students achieve their academic goals",
      "STRONG 4.25 GPA with 1400 SAT score",
      "COMPREHENSIVE approach covering multiple subjects",
      "DEDICATED educator committed to student success",
    ],
    availability: ["Monday 6-9 PM PST", "Tuesday 6-9 PM PST", "Wednesday 6-9 PM PST", "Thursday 6-9 PM PST", "Friday 6-9 PM PST", "Saturday 3-9 PM PST", "Sunday 3-9 PM PST"],
    rate: "$25/hour",
    testimonial:
      '"Joel is an amazing all-around tutor! He helped me improve in multiple subjects. His teaching style really works!" - Amanda R.',
  },
}

export default function TutorProfile({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const tutor = tutorData[params.id as keyof typeof tutorData]

  if (!tutor) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-mono font-bold mb-4">TUTOR NOT FOUND</h1>
            <Link
              href="/tutors"
              className="border-2 border-black px-6 py-3 font-mono font-bold hover:bg-black hover:text-white transition-colors"
            >
              BACK TO TUTORS
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Info */}
            <div>
              <div className="border-4 border-black p-8 bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-black text-white flex items-center justify-center text-2xl font-mono font-bold">
                    {tutor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h1 className="text-3xl font-mono font-bold">{tutor.name}</h1>
                    <p className="text-lg font-mono">{tutor.title}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center border-2 border-black p-3">
                    <div className="text-2xl font-mono font-bold">★{tutor.rating}</div>
                    <div className="text-sm font-mono">RATING</div>
                  </div>
                  <div className="text-center border-2 border-black p-3">
                    <div className="text-2xl font-mono font-bold">{tutor.experience}</div>
                    <div className="text-sm font-mono">EXPERIENCE</div>
                  </div>
                  <div className="text-center border-2 border-black p-3">
                    <div className="text-2xl font-mono font-bold">{tutor.sessions}</div>
                    <div className="text-sm font-mono">SESSIONS</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-mono font-bold mb-3">SUBJECTS DOMINATED:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject, index) => (
                      <span key={index} className="border-2 border-black px-3 py-1 text-sm font-mono font-bold">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-mono font-bold mb-2">{tutor.rate}</div>
                  <Link href={`/book?tutor=${tutor.id}`}>
                    <button
                      className="w-full block border-2 border-black bg-black text-white px-6 py-4 font-mono font-bold text-lg hover:bg-white hover:text-black transition-colors"
                    >
                      BOOK {tutor.name.split(" ")[1].toUpperCase()} NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tabs Content */}
            <div>
              <div className="flex border-2 border-black mb-6">
                {["overview", "achievements", "schedule"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 font-mono font-bold border-r-2 border-black last:border-r-0 transition-colors ${
                      activeTab === tab ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="border-4 border-black p-6 bg-white min-h-[400px]">
                {activeTab === "overview" && (
                  <div>
                    <h3 className="text-2xl font-mono font-bold mb-4">EDUCATION & BACKGROUND</h3>
                    <p className="font-mono mb-6 leading-relaxed">{tutor.education}</p>

                    <h3 className="text-2xl font-mono font-bold mb-4">TEACHING PHILOSOPHY</h3>
                    <p className="font-mono leading-relaxed">{tutor.bio}</p>
                  </div>
                )}

                {activeTab === "achievements" && (
                  <div>
                    <h3 className="text-2xl font-mono font-bold mb-6">ACADEMIC DESTRUCTION RECORD</h3>
                    <div className="space-y-4">
                      {tutor.achievements.map((achievement, index) => (
                        <div key={index} className="border-2 border-black p-4 bg-white">
                          <p className="font-mono font-bold">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 border-4 border-black p-6 bg-black text-white">
                      <h4 className="text-lg font-mono font-bold mb-3">STUDENT TESTIMONIAL:</h4>
                      <p className="font-mono leading-relaxed">{tutor.testimonial}</p>
                    </div>
                  </div>
                )}

                {activeTab === "schedule" && (
                  <div>
                    <h3 className="text-2xl font-mono font-bold mb-6">AVAILABILITY</h3>
                    <div className="grid gap-4">
                      {tutor.availability.map((slot, index) => (
                        <div key={index} className="border-2 border-black p-4 flex justify-between items-center">
                          <span className="font-mono font-bold">{slot}</span>
                          <Link href={`/book?tutor=${tutor.id}`}>
                            <button 
                              className="border-2 border-black px-4 py-2 font-mono font-bold hover:bg-black hover:text-white transition-colors"
                            >
                              BOOK SLOT
                            </button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
