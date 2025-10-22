"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { reviews, Review } from "@/lib/reviews-data"

export default function TestimonialsPage() {
  const [selectedReview, setSelectedReview] = useState<number | null>(null)
  const [reviewsPerPage] = useState<number>(12)
  const [currentPage, setCurrentPage] = useState<number>(1)

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

      <Footer />
    </div>
  )
}
