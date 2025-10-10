"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { reviews, Review } from "@/lib/reviews-data"

const testimonials = [
  {
    id: 1,
    name: "MICHAEL K.",
    grade: "12TH GRADE",
    subject: "CALCULUS",
    tutor: "SHIVEN SHARMA",
    rating: 5,
    improvement: "C+ TO A",
    quote:
      "SHIVEN'S NO-NONSENSE CALCULUS DRILLS AND CLEAR EXPLANATIONS TURNED MY WEAKNESSES INTO STRENGTHS. I STOPPED MEMORIZING AND STARTED UNDERSTANDING. RESULTS FOLLOWED FAST.",
    beforeAfter: {
      before: "C+ IN CALCULUS",
      after: "A ON FINAL EXAM",
    },
  },
  {
    id: 2,
    name: "PRIYA S.",
    grade: "SENIOR",
    subject: "SAT PREP",
    tutor: "RYAN ZHAO",
    rating: 5,
    improvement: "1360 TO 1540",
    quote:
      "RYAN'S SAT SYSTEM IS BRUTAL BUT EFFECTIVE. EVERY SESSION HAD A PURPOSE. I LEARNED TO THINK LIKE THE TEST AND MY SCORE SKYROCKETED.",
    beforeAfter: {
      before: "1360 SAT SCORE",
      after: "1540 SAT SCORE",
    },
  },
  {
    id: 3,
    name: "OMAR K.",
    grade: "11TH GRADE",
    subject: "CHEMISTRY",
    tutor: "TATTVA HARISH",
    rating: 5,
    improvement: "D TO A-",
    quote:
      "TATTVA MADE CHEMISTRY CLICK. STEP-BY-STEP MECHANISMS, ZERO FLUFF. I WENT FROM GUESSING TO ACTUALLY UNDERSTANDING REACTIONS.",
    beforeAfter: {
      before: "STRUGGLING WITH REACTION MECHANISMS",
      after: "A- IN CHEMISTRY",
    },
  },
  {
    id: 4,
    name: "EMILY J.",
    grade: "11TH GRADE",
    subject: "BIOLOGY",
    tutor: "JOEL JACOBS",
    rating: 5,
    improvement: "B- TO A",
    quote:
      "JOEL CONNECTED BIOLOGY TO REAL EXAMPLES AND TAUGHT ME HOW TO STUDY SMART. MY TEST SCORES JUMPED IMMEDIATELY.",
    beforeAfter: {
      before: "B- AVERAGE IN BIOLOGY",
      after: "A ON UNIT EXAMS",
    },
  },
  {
    id: 5,
    name: "LI M.",
    grade: "10TH GRADE",
    subject: "PHYSICS",
    tutor: "SHIVEN SHARMA",
    rating: 5,
    improvement: "F TO B+",
    quote:
      "SHIVEN'S VISUAL APPROACH TO PHYSICS AND RIGOROUS PRACTICE SETS SAVED ME. I FINALLY UNDERSTOOD WHY THE FORMULAS WORK.",
    beforeAfter: {
      before: "FAILING PHYSICS QUIZZES",
      after: "B+ COURSE GRADE",
    },
  },
  {
    id: 6,
    name: "ARUN P.",
    grade: "12TH GRADE",
    subject: "CALCULUS",
    tutor: "TATTVA HARISH",
    rating: 5,
    improvement: "B TO A+",
    quote:
      "TATTVA'S FOCUS ON FOUNDATIONAL IDEAS AND TARGETED PRACTICE BROKE THROUGH PLATEAUS. I STARTED SOLVING HARD PROBLEMS WITH CONFIDENCE.",
    beforeAfter: {
      before: "B IN CALCULUS",
      after: "A+ ON AP-LEVEL PROBLEMS",
    },
  },
]

const stats = [
  { number: "98%", label: "GRADE IMPROVEMENT RATE" },
  { number: "320", label: "AVERAGE SAT POINT INCREASE" },
  { number: "2.1", label: "AVERAGE GPA BOOST" },
  { number: "95%", label: "COLLEGE ACCEPTANCE RATE" },
]

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null)
  const [filterSubject, setFilterSubject] = useState<string>("ALL")
  const [selectedReview, setSelectedReview] = useState<number | null>(null)
  const [reviewsPerPage] = useState<number>(12)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const subjects = ["ALL", "MATHEMATICS", "PHYSICS", "CHEMISTRY", "BIOLOGY", "LANGUAGES", "TEST PREP"]

  const filteredTestimonials =
    filterSubject === "ALL"
      ? testimonials
      : testimonials.filter((t) => {
          if (filterSubject === "MATHEMATICS") return t.subject === "CALCULUS"
          if (filterSubject === "LANGUAGES") return t.subject === "SPANISH"
          if (filterSubject === "TEST PREP") return t.subject === "SAT PREP"
          return t.subject === filterSubject
        })

  // Sort reviews by date (newest first)
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  // Pagination logic for reviews
  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage)
  const startIndex = (currentPage - 1) * reviewsPerPage
  const paginatedReviews = sortedReviews.slice(startIndex, startIndex + reviewsPerPage)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-none">[SUCCESS STORIES]</h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold max-w-2xl mx-auto">
              {">"} REAL STUDENTS. REAL RESULTS.
              <br />
              {">"} NO FAKE REVIEWS. ONLY FACTS.
              <br />
              {">"} ACADEMIC DOMINATION DOCUMENTED
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 border-b-2 sm:border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 sm:mb-12 text-center">[THE NUMBERS]</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-4">{stat.number}</div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 border-b-2 sm:border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {subjects.map((subject) => (
                <Button
                  key={subject}
                  onClick={() => setFilterSubject(subject)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none transition-colors text-xs sm:text-sm lg:text-base ${
                    filterSubject === subject
                      ? "bg-black text-white"
                      : "bg-transparent text-black hover:bg-black hover:text-white"
                  }`}
                >
                  [{subject}]
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="border-2 sm:border-4 border-black p-4 sm:p-6 hover:bg-black hover:text-white transition-colors duration-200 group cursor-pointer"
                  onClick={() => setSelectedTestimonial(testimonial.id)}
                >
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-black">{testimonial.name}</h3>
                      <div className="text-xs sm:text-sm font-bold">{testimonial.grade}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm sm:text-base lg:text-lg font-black">{testimonial.improvement}</div>
                      <div className="text-xs sm:text-sm">{"★".repeat(testimonial.rating)}</div>
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <div className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2">{testimonial.subject}</div>
                    <div className="text-xs sm:text-sm">TUTOR: {testimonial.tutor}</div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <div className="text-xs sm:text-sm font-bold mb-1 sm:mb-2">TRANSFORMATION:</div>
                    <div className="text-xs sm:text-sm">
                      FROM: {testimonial.beforeAfter.before}
                      <br />
                      TO: {testimonial.beforeAfter.after}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed line-clamp-4">"{testimonial.quote}"</p>

                  <div className="mt-3 sm:mt-4 text-center">
                    <Button className="w-full bg-transparent border-1 sm:border-2 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white hover:bg-white hover:text-black font-bold text-xs sm:text-sm rounded-none py-2 sm:py-3">
                      [READ FULL STORY]
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Reviews Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8">[STUDENT REVIEWS]</h2>
              <p className="text-base sm:text-lg lg:text-xl font-bold">
                {">"} REAL FEEDBACK FROM REAL STUDENTS
                <br />
                {">"} {reviews.length} VERIFIED REVIEWS
                <br />
                {">"} AVERAGE RATING: {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}/5 STARS
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {paginatedReviews.map((review) => (
                <div
                  key={review.id}
                  className="border-2 sm:border-4 border-black p-4 sm:p-6 hover:bg-black hover:text-white transition-colors duration-200 group cursor-pointer"
                  onClick={() => setSelectedReview(review.id)}
                >
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-black">{review.name}</h3>
                      <div className="text-xs sm:text-sm font-bold">{formatDate(review.date)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm sm:text-base">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed line-clamp-4">"{review.review}"</p>

                  <div className="mt-3 sm:mt-4 text-center">
                    <Button className="w-full bg-transparent border-1 sm:border-2 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white hover:bg-white hover:text-black font-bold text-xs sm:text-sm rounded-none py-2 sm:py-3">
                      [READ FULL REVIEW]
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 sm:gap-4">
                <Button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="bg-transparent border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white font-bold rounded-none px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  [PREV]
                </Button>
                
                <div className="flex gap-1 sm:gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`border-2 sm:border-4 border-black font-bold rounded-none px-3 py-2 text-sm ${
                        currentPage === page
                          ? "bg-black text-white"
                          : "bg-transparent text-black hover:bg-black hover:text-white"
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="bg-transparent border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white font-bold rounded-none px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  [NEXT]
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">READY TO JOIN THEM?</h2>
            <p className="text-xl mb-8 font-bold">
              {">"} YOUR SUCCESS STORY STARTS HERE
              <br />
              {">"} NO EXCUSES. ONLY RESULTS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 font-black tracking-wider border-4 border-white rounded-none">
                  [BOOK YOUR TUTOR]
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white hover:text-black font-bold tracking-wider rounded-none bg-transparent"
                >
                  [TAKE MATCHING QUIZ]
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for Full Review */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
          <div className="bg-white border-4 border-black max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {(() => {
              const review = reviews.find((r) => r.id === selectedReview)!
              return (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-black">{review.name}</h2>
                      <div className="text-lg font-bold">{formatDate(review.date)}</div>
                    </div>
                    <Button
                      onClick={() => setSelectedReview(null)}
                      className="bg-black text-white hover:bg-gray-800 px-4 py-2 font-bold border-4 border-black rounded-none"
                    >
                      [CLOSE]
                    </Button>
                  </div>

                  <div className="border-4 border-black p-6 mb-6 bg-black text-white">
                    <div className="text-center">
                      <div className="text-4xl font-black mb-2">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                      <div className="text-lg">{review.rating}/5 STARS</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-black mb-4">FULL REVIEW:</h3>
                    <div className="border-4 border-black p-6">
                      <p className="text-lg leading-relaxed">"{review.review}"</p>
                      <div className="mt-4 text-right font-bold">
                        - {review.name}, {formatDate(review.date)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Modal for Full Testimonial */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
          <div className="bg-white border-4 border-black max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {(() => {
              const testimonial = testimonials.find((t) => t.id === selectedTestimonial)!
              return (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-black">{testimonial.name}</h2>
                      <div className="text-lg font-bold">
                        {testimonial.grade} • {testimonial.subject}
                      </div>
                    </div>
                    <Button
                      onClick={() => setSelectedTestimonial(null)}
                      className="bg-black text-white hover:bg-gray-800 px-4 py-2 font-bold border-4 border-black rounded-none"
                    >
                      [CLOSE]
                    </Button>
                  </div>

                  <div className="border-4 border-black p-6 mb-6 bg-black text-white">
                    <div className="text-center">
                      <div className="text-4xl font-black mb-2">{testimonial.improvement}</div>
                      <div className="text-lg">GRADE IMPROVEMENT</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-black mb-4">TRANSFORMATION DETAILS:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-4 border-black p-4">
                        <div className="font-bold mb-2">BEFORE:</div>
                        <div>{testimonial.beforeAfter.before}</div>
                      </div>
                      <div className="border-4 border-black p-4 bg-black text-white">
                        <div className="font-bold mb-2">AFTER:</div>
                        <div>{testimonial.beforeAfter.after}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-black mb-4">FULL TESTIMONIAL:</h3>
                    <div className="border-4 border-black p-6">
                      <p className="text-lg leading-relaxed">"{testimonial.quote}"</p>
                      <div className="mt-4 text-right font-bold">
                        - {testimonial.name}, {testimonial.grade}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold mb-4">TUTORED BY: {testimonial.tutor}</div>
                    <div className="text-2xl">{"★".repeat(testimonial.rating)}</div>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
