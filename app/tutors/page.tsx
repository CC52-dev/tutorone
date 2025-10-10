"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const tutors = [
  {
    id: 1,
    slug: "shiven-sharma",
    name: "SHIVEN SHARMA",
    subjects: ["MATHEMATICS", "PHYSICS", "COMPUTER SCIENCE", "WEB DESIGN", "SAT PREP"],
    experience: "FOUNDER & MANAGER",
    rating: "5.0",
    description:
      "> 4.35 GPA\n> 1520 SAT SCORE\n> TUTOR FOR PROJECT UDAAN\n> FOUNDER & MANAGER\n> ELITE ACADEMIC MENTOR",
    price: "$25/HR",
    availability: "MON-FRI 4PM-9PM PST, SAT-SUN 9AM-9PM PST",
    calendlyLink: "https://calendly.com/shiven-sharma-tutoring",
  },
  {
    id: 2,
    slug: "tattva-harish",
    name: "TATTVA HARISH",
    subjects: ["MATHEMATICS", "ENGLISH", "PHYSICS", "CHEMISTRY", "SAT PREP"],
    experience: "LEAD TUTOR",
    rating: "5.0",
    description:
      "> 4.4 GPA\n> 1520 SAT SCORE\n> 2 YEARS EXPERIENCE\n> LEAD TUTOR\n> PROVEN TRACK RECORD",
    price: "$25/HR",
    availability: "MON-FRI 4PM-9PM PST, SAT-SUN 9AM-9PM PST",
    calendlyLink: "https://calendly.com/tattva-harish-tutoring",
  },
  {
    id: 3,
    slug: "nitin-ramesh",
    name: "NITIN RAMESH",
    subjects: ["MATHEMATICS", "ENGLISH", "CHEMISTRY", "BIOLOGY"],
    experience: "1 YEAR",
    rating: "4.9",
    description:
      "> 3.98 GPA\n> 1 YEAR EXPERIENCE\n> STRONG IN SCIENCES\n> PATIENT & DETAILED\n> GREAT WITH STUDENTS",
    price: "$20/HR",
    availability: "MON-FRI 4PM-9PM PST, SAT-SUN 9AM-9PM PST",
    calendlyLink: "https://calendly.com/nitin-ramesh-tutoring",
  },
  {
    id: 4,
    slug: "ryan-zhao",
    name: "RYAN ZHAO",
    subjects: ["MATHEMATICS", "ENGLISH", "SAT PREP"],
    experience: "2 YEARS",
    rating: "5.0",
    description:
      "> 4.48 GPA\n> 1580 SAT SCORE\n> COMMITTED TO NYU\n> 2 YEARS EXPERIENCE\n> TEST PREP SPECIALIST",
    price: "$25/HR",
    availability: "MON-FRI 7PM-9PM PST",
    calendlyLink: "https://calendly.com/ryan-zhao-tutoring",
  },
  {
    id: 5,
    slug: "joel-jacobs",
    name: "JOEL JACOBS",
    subjects: ["MATHEMATICS", "ENGLISH", "SAT PREP", "BIOLOGY"],
    experience: "2 YEARS",
    rating: "4.9",
    description:
      "> 4.25 GPA\n> 1400 SAT SCORE\n> 2 YEARS EXPERIENCE\n> DEDICATED EDUCATOR\n> COMPREHENSIVE APPROACH",
    price: "$25/HR",
    availability: "MON-FRI 6PM-9PM PST, SAT-SUN 3PM-9PM PST",
    calendlyLink: "https://calendly.com/joel-jacobs-tutoring",
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
