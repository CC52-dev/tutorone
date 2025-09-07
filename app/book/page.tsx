"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

const tutors = [
  {
    id: 1,
    name: "DR. SARAH CHEN",
    subjects: ["MATHEMATICS", "PHYSICS"],
    price: "$150/HR",
    strengths: ["Advanced Math", "Problem Solving", "Exam Prep"],
    calendlyLink: "https://calendly.com/sarah-chen-tutoring",
  },
  {
    id: 2,
    name: "PROF. MARCUS WRIGHT",
    subjects: ["CHEMISTRY", "BIOLOGY"],
    price: "$140/HR",
    strengths: ["Lab Work", "Research Methods", "Medical Prep"],
    calendlyLink: "https://calendly.com/marcus-wright-tutoring",
  },
  {
    id: 3,
    name: "MS. ELENA RODRIGUEZ",
    subjects: ["LANGUAGES", "TEST PREP"],
    price: "$120/HR",
    strengths: ["Language Immersion", "SAT/ACT", "Communication"],
    calendlyLink: "https://calendly.com/elena-rodriguez-tutoring",
  },
]

const quizQuestions = [
  {
    question: "WHAT IS YOUR PRIMARY ACADEMIC GOAL?",
    options: [
      { text: "IMPROVE GRADES IN CURRENT CLASSES", points: { 1: 2, 2: 2, 3: 1 } },
      { text: "PREPARE FOR STANDARDIZED TESTS", points: { 1: 1, 2: 1, 3: 3 } },
      { text: "GET AHEAD FOR NEXT SEMESTER", points: { 1: 3, 2: 2, 3: 2 } },
      { text: "COLLEGE APPLICATION PREP", points: { 1: 2, 2: 3, 3: 3 } },
    ],
  },
  {
    question: "WHICH SUBJECT AREA NEEDS THE MOST HELP?",
    options: [
      { text: "MATHEMATICS & PHYSICS", points: { 1: 3, 2: 0, 3: 0 } },
      { text: "SCIENCES & LAB WORK", points: { 1: 1, 2: 3, 3: 0 } },
      { text: "LANGUAGES & COMMUNICATION", points: { 1: 0, 2: 0, 3: 3 } },
      { text: "TEST TAKING STRATEGIES", points: { 1: 1, 2: 1, 3: 3 } },
    ],
  },
  {
    question: "WHAT IS YOUR LEARNING STYLE?",
    options: [
      { text: "VISUAL & HANDS-ON PRACTICE", points: { 1: 3, 2: 2, 3: 1 } },
      { text: "RESEARCH & EXPERIMENTATION", points: { 1: 1, 2: 3, 3: 1 } },
      { text: "DISCUSSION & CONVERSATION", points: { 1: 1, 2: 1, 3: 3 } },
      { text: "STRUCTURED & SYSTEMATIC", points: { 1: 2, 2: 2, 3: 2 } },
    ],
  },
]

export default function BookPage() {
  const searchParams = useSearchParams()
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({ 1: 0, 2: 0, 3: 0 })
  const [quizComplete, setQuizComplete] = useState(false)
  const [selectedTutor, setSelectedTutor] = useState<number | null>(null)
  const [bookingStep, setBookingStep] = useState<"select" | "details">("select")

  // Auto-select tutor from URL parameter
  useEffect(() => {
    const tutorId = searchParams.get('tutor')
    if (tutorId) {
      const tutorIdNum = Number.parseInt(tutorId)
      if (tutorIdNum && tutors.find(t => t.id === tutorIdNum)) {
        setSelectedTutor(tutorIdNum)
        setBookingStep("details")
      }
    }
  }, [searchParams])

  const handleQuizAnswer = (option: any) => {
    const newScores = { ...scores }
    Object.entries(option.points).forEach(([tutorId, points]) => {
      newScores[Number.parseInt(tutorId) as keyof typeof newScores] += points as number
    })
    setScores(newScores)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizComplete(true)
      const recommendedTutorId = Object.entries(newScores).reduce((a, b) =>
        newScores[Number.parseInt(a[0]) as keyof typeof newScores] >
        newScores[Number.parseInt(b[0]) as keyof typeof newScores]
          ? a
          : b,
      )[0]
      setSelectedTutor(Number.parseInt(recommendedTutorId))
    }
  }

  const resetQuiz = () => {
    setShowQuiz(false)
    setCurrentQuestion(0)
    setScores({ 1: 0, 2: 0, 3: 0 })
    setQuizComplete(false)
  }

  const selectedTutorData = tutors.find((t) => t.id === selectedTutor)

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {!showQuiz && bookingStep === "select" && (
            <>
              <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-none">[BOOK SESSION]</h1>
                <p className="text-base sm:text-lg lg:text-xl font-bold">{">"} CHOOSE YOUR PATH TO ACADEMIC DOMINATION</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
                <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 text-center hover:bg-black hover:text-white transition-colors duration-200 group">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-6">[QUIZ MODE]</h2>
                  <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    {">"} ANSWER 3 STRATEGIC QUESTIONS
                    <br />
                    {">"} GET MATCHED WITH OPTIMAL TUTOR
                    <br />
                    {">"} SCIENCE-BASED SELECTION
                  </p>
                  <Button
                    onClick={() => setShowQuiz(true)}
                    className="w-full bg-transparent border-2 sm:border-4 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white hover:bg-white hover:text-black font-bold tracking-wider rounded-none text-sm sm:text-base py-3 sm:py-4"
                  >
                    [START QUIZ]
                  </Button>
                </div>

                <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 text-center hover:bg-black hover:text-white transition-colors duration-200 group">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-6">[DIRECT SELECT]</h2>
                  <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    {">"} BROWSE ALL AVAILABLE TUTORS
                    <br />
                    {">"} CHOOSE BASED ON EXPERTISE
                    <br />
                    {">"} MANUAL SELECTION CONTROL
                  </p>
                  <Link href="/tutors">
                    <Button className="w-full bg-transparent border-2 sm:border-4 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white hover:bg-white hover:text-black font-bold tracking-wider rounded-none text-sm sm:text-base py-3 sm:py-4">
                      [VIEW TUTORS]
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}

          {showQuiz && !quizComplete && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4">[TUTOR MATCHING]</h1>
                <div className="text-base sm:text-lg lg:text-xl font-bold">
                  QUESTION {currentQuestion + 1} OF {quizQuestions.length}
                </div>
                <div className="w-full bg-black h-3 sm:h-4 mt-3 sm:mt-4">
                  <div
                    className="bg-white h-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black mb-6 sm:mb-8 text-center">{quizQuestions[currentQuestion].question}</h2>
                <div className="space-y-3 sm:space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuizAnswer(option)}
                      className="w-full text-left p-4 sm:p-6 bg-transparent border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white font-bold tracking-wider rounded-none text-sm sm:text-base lg:text-lg"
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white font-bold tracking-wider rounded-none bg-transparent text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  [RESTART QUIZ]
                </Button>
              </div>
            </div>
          )}

          {quizComplete && selectedTutorData && bookingStep === "select" && (
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8">[MATCH FOUND]</h1>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 bg-black text-white">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">{selectedTutorData.name}</h2>
                <div className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">{selectedTutorData.subjects.join(" • ")}</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-black mb-4 sm:mb-6">{selectedTutorData.price}</div>
                <div className="text-sm sm:text-base lg:text-lg">
                  {">"} OPTIMAL MATCH BASED ON YOUR RESPONSES
                  <br />
                  {">"} SPECIALIZES IN YOUR PRIORITY AREAS
                  <br />
                  {">"} PROVEN SUCCESS WITH SIMILAR STUDENTS
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={() => setBookingStep("details")}
                  className="bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none"
                >
                  [BOOK THIS TUTOR]
                </Button>
                <Button
                  onClick={resetQuiz}
                  variant="outline"
                  className="border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white font-bold tracking-wider rounded-none bg-transparent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  [RETAKE QUIZ]
                </Button>
              </div>
            </div>
          )}

          {bookingStep === "details" && selectedTutorData && (
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8">[BOOK WITH {selectedTutorData.name.split(" ")[1]}]</h1>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 bg-black text-white">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black mb-4 sm:mb-6">TUTOR DETAILS</h2>
                <div className="text-sm sm:text-base lg:text-lg space-y-1 sm:space-y-2">
                  <div>TUTOR: {selectedTutorData.name}</div>
                  <div>SUBJECTS: {selectedTutorData.subjects.join(" • ")}</div>
                  <div>RATE: {selectedTutorData.price}</div>
                  <div>STRENGTHS: {selectedTutorData.strengths.join(", ")}</div>
                </div>
              </div>

              <div className="text-base sm:text-lg font-bold mb-6 sm:mb-8">
                {">"} CLICK BELOW TO SCHEDULE YOUR SESSION
                <br />
                {">"} CHOOSE YOUR PREFERRED TIME SLOT
                <br />
                {">"} INSTANT CONFIRMATION VIA CALENDLY
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={() => window.open(selectedTutorData.calendlyLink, '_blank')}
                  className="bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none"
                >
                  [SCHEDULE SESSION]
                </Button>
                <Button
                  onClick={() => setBookingStep("select")}
                  variant="outline"
                  className="border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white font-bold tracking-wider rounded-none bg-transparent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  [GO BACK]
                </Button>
              </div>
            </div>
          )}
        </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
