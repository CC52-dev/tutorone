"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const tutorData = {
  "sarah-chen": {
    name: "Dr. Sarah Chen",
    title: "Mathematics & Physics Specialist",
    rating: 4.9,
    experience: "8 YEARS",
    sessions: "2,847",
    subjects: ["Calculus", "Linear Algebra", "Physics", "Statistics", "Differential Equations"],
    education: "PhD Mathematics - MIT, MS Physics - Stanford",
    bio: "Dr. Chen is a RUTHLESS mathematics destroyer who has OBLITERATED over 2,800 students' academic struggles. Her AGGRESSIVE teaching methodology has transformed failing students into mathematical WARRIORS. She specializes in CRUSHING complex calculus problems and DEMOLISHING physics concepts that leave other tutors trembling.",
    achievements: [
      "DESTROYED 847 calculus failures → A+ students",
      "ELIMINATED 1,200+ physics phobias",
      "ANNIHILATED MIT entrance exam prep (98% success rate)",
      "CRUSHED AP Calculus BC prep (100% pass rate)",
    ],
    availability: ["Monday 2-8 PM", "Wednesday 3-9 PM", "Friday 1-7 PM", "Saturday 10 AM-4 PM"],
    rate: "$85/hour",
    calendlyLink: "https://calendly.com/sarah-chen-tutoring",
    testimonial:
      '"Dr. Chen DESTROYED my calculus fears and turned me into a mathematical BEAST. Went from F to A+ in 6 weeks!" - Marcus T.',
  },
  "marcus-wright": {
    name: "Prof. Marcus Wright",
    title: "English & Literature Dominator",
    rating: 4.8,
    experience: "12 YEARS",
    sessions: "3,156",
    subjects: ["Essay Writing", "Literature Analysis", "Grammar", "Creative Writing", "SAT Prep"],
    education: "PhD English Literature - Harvard, MA Creative Writing - Columbia",
    bio: "Professor Wright is an UNSTOPPABLE force in English education who has ANNIHILATED over 3,000 students' writing weaknesses. His BRUTAL editing techniques and MERCILESS grammar corrections have forged literary CHAMPIONS from struggling writers.",
    achievements: [
      "OBLITERATED 1,500+ essay disasters → A+ papers",
      "CRUSHED SAT Writing scores (average +180 points)",
      "DEMOLISHED college admission essays (95% acceptance rate)",
      "DESTROYED AP Literature exam prep (98% pass rate)",
    ],
    availability: ["Tuesday 1-7 PM", "Thursday 2-8 PM", "Saturday 9 AM-3 PM", "Sunday 12-6 PM"],
    rate: "$75/hour",
    calendlyLink: "https://calendly.com/marcus-wright-tutoring",
    testimonial:
      '"Prof. Wright DEMOLISHED my writing blocks and made me a literary WARRIOR. My essays went from trash to MASTERPIECES!" - Sarah K.',
  },
  "elena-rodriguez": {
    name: "Ms. Elena Rodriguez",
    title: "Science & Chemistry Annihilator",
    rating: 4.9,
    experience: "6 YEARS",
    sessions: "1,923",
    subjects: ["Chemistry", "Biology", "Organic Chemistry", "Biochemistry", "MCAT Prep"],
    education: "MS Chemistry - Caltech, BS Biochemistry - UCLA",
    bio: "Ms. Rodriguez is a CHEMICAL WARFARE specialist who has VAPORIZED over 1,900 students' science struggles. Her EXPLOSIVE teaching methods and REACTIVE problem-solving techniques create UNSTOPPABLE scientific minds.",
    achievements: [
      "INCINERATED 900+ chemistry failures → A students",
      "EXPLODED MCAT scores (average +15 points)",
      "DISSOLVED organic chemistry nightmares (92% success rate)",
      "COMBUSTED AP Chemistry prep (96% pass rate)",
    ],
    availability: ["Monday 3-9 PM", "Wednesday 1-7 PM", "Friday 2-8 PM", "Sunday 10 AM-4 PM"],
    rate: "$80/hour",
    calendlyLink: "https://calendly.com/elena-rodriguez-tutoring",
    testimonial:
      '"Ms. Rodriguez EXPLODED my chemistry confusion and made me a scientific DESTROYER. Aced every test after working with her!" - David L.',
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
                  <button
                    onClick={() => window.open(tutor.calendlyLink, '_blank')}
                    className="w-full block border-2 border-black bg-black text-white px-6 py-4 font-mono font-bold text-lg hover:bg-white hover:text-black transition-colors"
                  >
                    BOOK {tutor.name.split(" ")[1].toUpperCase()} NOW
                  </button>
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
                          <button 
                            onClick={() => window.open(tutor.calendlyLink, '_blank')}
                            className="border-2 border-black px-4 py-2 font-mono font-bold hover:bg-black hover:text-white transition-colors"
                          >
                            BOOK SLOT
                          </button>
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
