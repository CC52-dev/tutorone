"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const tutors = [
  {
    id: 1,
    slug: "alex-srinivasan", // User as the leader
    name: "ALEX SRINIVASAN",
    subjects: ["MATHEMATICS", "PHYSICS", "CHEMISTRY"],
    experience: "2 YEARS",
    rating: "5.0",
    students: "50+",
    description:
      "> 4.35 GPA - TOP 1% OF CLASS\n> 1520 SAT SCORE\n> 5s ON AP CHEM & CALCULUS\n> 4s ON AP PHYSICS C\n> FOUNDER & LEAD TUTOR",
    price: "$40/HR",
    availability: "MON-FRI 4PM-9PM PST",
    calendlyLink: "https://calendly.com/alex-srinivasan-tutoring",
  },
  {
    id: 2,
    slug: "marcus-chen", // 4.4 GPA #1
    name: "MARCUS CHEN",
    subjects: ["MATHEMATICS", "BIOLOGY", "TEST PREP"],
    experience: "1.5 YEARS",
    rating: "4.9",
    students: "35+",
    description:
      "> 4.4 GPA - VALEDICTORIAN\n> 1520 SAT SCORE\n> 5s ON AP CALCULUS & BIO\n> 4s ON AP PHYSICS C & CHEM\n> SPECIALIZES IN TEST PREP",
    price: "$35/HR",
    availability: "TUE-SAT 3PM-8PM PST",
    calendlyLink: "https://calendly.com/marcus-chen-tutoring",
  },
  {
    id: 3,
    slug: "david-kim", // 4.25 GPA
    name: "DAVID KIM",
    subjects: ["CHEMISTRY", "PHYSICS", "MATHEMATICS"],
    experience: "1 YEAR",
    rating: "4.8",
    students: "25+",
    description:
      "> 4.25 GPA - HONOR ROLL\n> 1480 SAT SCORE\n> 4s ON AP CHEM & PHYSICS\n> STRONG IN STEM SUBJECTS\n> PATIENT TEACHING STYLE",
    price: "$30/HR",
    availability: "MON-THU 4PM-7PM PST",
    calendlyLink: "https://calendly.com/david-kim-tutoring",
  },
  {
    id: 4,
    slug: "james-patel", // 3.9 GPA
    name: "JAMES PATEL",
    subjects: ["MATHEMATICS", "ENGLISH", "TEST PREP"],
    experience: "1 YEAR",
    rating: "4.7",
    students: "20+",
    description:
      "> 3.9 GPA - HONOR STUDENT\n> 1450 SAT SCORE\n> STRONG IN ALGEBRA & WRITING\n> GREAT WITH STRUGGLING STUDENTS\n> ENCOURAGING APPROACH",
    price: "$25/HR",
    availability: "WED-SUN 2PM-6PM PST",
    calendlyLink: "https://calendly.com/james-patel-tutoring",
  },
  {
    id: 5,
    slug: "ryan-zhang", // 4.4 GPA #2
    name: "RYAN ZHANG",
    subjects: ["PHYSICS", "MATHEMATICS", "COMPUTER SCIENCE"],
    experience: "1 YEAR",
    rating: "4.9",
    students: "30+",
    description:
      "> 4.4 GPA - TOP 2% OF CLASS\n> 1500 SAT SCORE\n> 5s ON AP CALCULUS & PHYSICS\n> STRONG IN ADVANCED MATH\n> CLEAR EXPLANATIONS",
    price: "$35/HR",
    availability: "TUE-FRI 5PM-9PM PST",
    calendlyLink: "https://calendly.com/ryan-zhang-tutoring",
  },
]

export default function TutorsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-none">[ELITE TUTORS]</h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold max-w-2xl mx-auto">
              {">"} HANDPICKED ACADEMIC WARRIORS
              <br />
              {">"} PROVEN TRACK RECORDS ONLY
              <br />
              {">"} YOUR SUCCESS IS THEIR MISSION
            </p>
          </div>
        </section>

        {/* Tutors Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {tutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200 group"
                >
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-black tracking-wider">{tutor.name}</h2>
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-bold">{tutor.rating}★</div>
                      <div className="text-xs sm:text-sm">{tutor.students}</div>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {tutor.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="border-1 sm:border-2 border-black group-hover:border-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                    <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{tutor.experience} EXPERIENCE</div>
                    <div className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{tutor.price}</div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <div className="whitespace-pre-line text-xs sm:text-sm leading-relaxed">{tutor.description}</div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <div className="text-xs sm:text-sm font-bold">AVAILABILITY:</div>
                    <div className="text-xs sm:text-sm">{tutor.availability}</div>
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-3">
                    <Button 
                      onClick={() => window.open(tutor.calendlyLink, '_blank')}
                      className="w-full bg-transparent border-2 sm:border-4 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white hover:bg-white hover:text-black font-bold tracking-wider rounded-none transition-colors text-sm sm:text-base py-2 sm:py-3"
                    >
                      [BOOK {tutor.name.split(" ")[1]}]
                    </Button>
                    <Link href={`/tutors/${tutor.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-2 sm:border-4 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white bg-transparent hover:bg-black hover:text-white font-bold tracking-wider rounded-none transition-colors text-sm sm:text-base py-2 sm:py-3"
                      >
                        [VIEW PROFILE]
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8">CAN'T DECIDE?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 font-bold">
              {">"} TAKE OUR MATCHING QUIZ
              <br />
              {">"} FIND YOUR PERFECT ACADEMIC PARTNER
            </p>
            <Link href="/book">
              <Button className="bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-black tracking-wider border-2 sm:border-4 border-white rounded-none">
                [TAKE TUTOR QUIZ]
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
