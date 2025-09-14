"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const tutorData = {
  "alex-srinivasan": {
    name: "Alex Srinivasan",
    title: "Founder & Lead Tutor - Mathematics & Sciences",
    rating: 5.0,
    experience: "2 YEARS",
    sessions: "150+",
    subjects: ["AP Calculus", "AP Chemistry", "AP Physics C", "SAT Math", "Algebra II"],
    education: "High School Senior - 4.35 GPA, 1520 SAT, 5s on AP Chem & Calculus, 4s on AP Physics C",
    bio: "Alex is the FOUNDER and LEAD TUTOR of our elite team. As a top 1% student with a 4.35 GPA and 1520 SAT score, Alex brings UNMATCHED academic excellence to every session. Specializing in advanced mathematics and sciences, Alex has helped 50+ students achieve their academic goals through clear explanations and proven strategies.",
    achievements: [
      "FOUNDED TutorOne at age 17",
      "HELPED 50+ students improve grades by 1+ letter grade",
      "ACHIEVED 5s on AP Chemistry and Calculus",
      "SCORED 1520 on SAT (top 1% nationally)",
    ],
    availability: ["Monday 4-9 PM PST", "Tuesday 4-9 PM PST", "Wednesday 4-9 PM PST", "Thursday 4-9 PM PST", "Friday 4-9 PM PST"],
    rate: "$40/hour",
    calendlyLink: "https://calendly.com/alex-srinivasan-tutoring",
    testimonial:
      '"Alex is an INCREDIBLE tutor! He made calculus actually make sense and helped me go from a C to an A. His explanations are so clear!" - Sarah M.',
  },
  "marcus-chen": {
    name: "Marcus Chen",
    title: "Valedictorian - Mathematics & Test Prep Specialist",
    rating: 4.9,
    experience: "1.5 YEARS",
    sessions: "120+",
    subjects: ["AP Calculus", "AP Biology", "SAT Prep", "Algebra II", "Pre-Calculus"],
    education: "High School Senior - 4.4 GPA, 1520 SAT, 5s on AP Calculus & Biology, 4s on AP Physics C & Chemistry",
    bio: "Marcus is our VALEDICTORIAN and test prep specialist. With a perfect 4.4 GPA and 1520 SAT score, Marcus excels at breaking down complex concepts into understandable pieces. His patient teaching style and strategic approach to test-taking have helped 35+ students achieve their academic goals.",
    achievements: [
      "VALEDICTORIAN of graduating class",
      "HELPED 35+ students improve test scores",
      "ACHIEVED 5s on AP Calculus and Biology",
      "SPECIALIZES in SAT/ACT test prep strategies",
    ],
    availability: ["Tuesday 3-8 PM PST", "Wednesday 3-8 PM PST", "Thursday 3-8 PM PST", "Friday 3-8 PM PST", "Saturday 3-8 PM PST"],
    rate: "$35/hour",
    calendlyLink: "https://calendly.com/marcus-chen-tutoring",
    testimonial:
      '"Marcus helped me raise my SAT score by 200 points! His test strategies are game-changing." - James L.',
  },
  "david-kim": {
    name: "David Kim",
    title: "Honor Roll - Chemistry & Physics Expert",
    rating: 4.8,
    experience: "1 YEAR",
    sessions: "80+",
    subjects: ["AP Chemistry", "AP Physics C", "Algebra II", "Pre-Calculus", "General Chemistry"],
    education: "High School Senior - 4.25 GPA, 1480 SAT, 4s on AP Chemistry & Physics C",
    bio: "David is our patient and methodical STEM specialist. With a 4.25 GPA and strong performance in advanced sciences, David excels at helping students understand challenging chemistry and physics concepts. His encouraging approach makes difficult subjects accessible to all students.",
    achievements: [
      "HONOR ROLL student for 4 consecutive years",
      "HELPED 25+ students master chemistry concepts",
      "ACHIEVED 4s on AP Chemistry and Physics C",
      "SPECIALIZES in making STEM subjects approachable",
    ],
    availability: ["Monday 4-7 PM PST", "Tuesday 4-7 PM PST", "Wednesday 4-7 PM PST", "Thursday 4-7 PM PST"],
    rate: "$30/hour",
    calendlyLink: "https://calendly.com/david-kim-tutoring",
    testimonial:
      '"David made chemistry finally click for me! His step-by-step approach helped me understand concepts I never thought I could." - Emma R.',
  },
  "james-patel": {
    name: "James Patel",
    title: "Honor Student - Mathematics & English Specialist",
    rating: 4.7,
    experience: "1 YEAR",
    sessions: "60+",
    subjects: ["Algebra I", "Algebra II", "English Literature", "SAT Reading", "Essay Writing"],
    education: "High School Senior - 3.9 GPA, 1450 SAT, Strong in Mathematics and English",
    bio: "James is our encouraging and supportive tutor who specializes in helping struggling students. With a 3.9 GPA and 1450 SAT score, James understands the challenges students face and provides patient, step-by-step guidance. His encouraging approach helps build confidence in students who need extra support.",
    achievements: [
      "HONOR STUDENT for 3 consecutive years",
      "HELPED 20+ struggling students improve grades",
      "SPECIALIZES in building student confidence",
      "EXCELLENT at explaining basic concepts clearly",
    ],
    availability: ["Wednesday 2-6 PM PST", "Thursday 2-6 PM PST", "Friday 2-6 PM PST", "Saturday 2-6 PM PST", "Sunday 2-6 PM PST"],
    rate: "$25/hour",
    calendlyLink: "https://calendly.com/james-patel-tutoring",
    testimonial:
      '"James is so patient and encouraging! He helped me go from failing algebra to getting a B+. I actually understand math now!" - Maria S.',
  },
  "ryan-zhang": {
    name: "Ryan Zhang",
    title: "Top 2% - Physics & Advanced Mathematics Expert",
    rating: 4.9,
    experience: "1 YEAR",
    sessions: "100+",
    subjects: ["AP Physics C", "AP Calculus", "Computer Science", "Algebra II", "Pre-Calculus"],
    education: "High School Senior - 4.4 GPA, 1500 SAT, 5s on AP Calculus & Physics C",
    bio: "Ryan is our advanced mathematics and physics specialist. With a 4.4 GPA and 1500 SAT score, Ryan excels at explaining complex mathematical concepts with crystal-clear explanations. His systematic approach to problem-solving helps students master even the most challenging topics.",
    achievements: [
      "TOP 2% of graduating class",
      "HELPED 30+ students master advanced math",
      "ACHIEVED 5s on AP Calculus and Physics C",
      "SPECIALIZES in clear, logical explanations",
    ],
    availability: ["Tuesday 5-9 PM PST", "Wednesday 5-9 PM PST", "Thursday 5-9 PM PST", "Friday 5-9 PM PST"],
    rate: "$35/hour",
    calendlyLink: "https://calendly.com/ryan-zhang-tutoring",
    testimonial:
      '"Ryan\'s explanations are so clear! He helped me understand calculus concepts that seemed impossible. Now I actually enjoy math!" - Alex T.',
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
