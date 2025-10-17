"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

const tutors = [
  {
    id: 1,
    name: "SHIVEN SHARMA",
    subjects: ["MATHEMATICS", "PHYSICS", "COMPUTER SCIENCE", "WEB DESIGN", "SAT PREP"],
    price: "$25/HR",
    strengths: ["Project Udaan Tutor", "4.35 GPA", "1520 SAT", "Founder & Manager"],
  },
  {
    id: 2,
    name: "TATTVA HARISH",
    subjects: ["MATHEMATICS", "ENGLISH", "PHYSICS", "CHEMISTRY", "SAT PREP"],
    price: "$25/HR",
    strengths: ["Lead Tutor", "4.4 GPA", "1520 SAT", "2 Years Experience"],
  },
  {
    id: 3,
    name: "NITIN RAMESH",
    subjects: ["MATHEMATICS", "ENGLISH", "CHEMISTRY", "BIOLOGY"],
    price: "$20/HR",
    strengths: ["3.98 GPA", "Patient Teaching", "Science Specialist", "1 Year Experience"],
  },
  {
    id: 4,
    name: "RYAN ZHAO",
    subjects: ["MATHEMATICS", "ENGLISH", "SAT PREP"],
    price: "$25/HR",
    strengths: ["4.48 GPA", "1580 SAT", "Committed to NYU", "Test Prep Expert"],
  },
  {
    id: 5,
    name: "JOEL JACOBS",
    subjects: ["MATHEMATICS", "ENGLISH", "SAT PREP", "BIOLOGY"],
    price: "$25/HR",
    strengths: ["4.25 GPA", "1400 SAT", "2 Years Experience", "Multi-Subject"],
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState("")
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    preferredDate: "",
    preferredTime: "",
    sessionType: "",
    additionalNotes: "",
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult("SENDING REQUEST...")

    const submitData = new FormData()
    submitData.append("access_key", "0f887b91-f85f-4a80-ba99-e7972c4c0194")
    submitData.append("subject", "Tutoropia - New Tutoring Session Request")
    submitData.append("from_name", "Tutoropia Booking System")
    submitData.append("tutor", selectedTutorData?.name || "Not selected")
    submitData.append("student_name", formData.studentName)
    submitData.append("email", formData.email)
    submitData.append("phone", formData.phone)
    submitData.append("grade", formData.grade)
    submitData.append("subject", formData.subject)
    submitData.append("preferred_date", formData.preferredDate)
    submitData.append("preferred_time", formData.preferredTime)
    submitData.append("session_type", formData.sessionType)
    submitData.append("additional_notes", formData.additionalNotes)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitResult("✓ BOOKING REQUEST SENT SUCCESSFULLY! WE'LL CONTACT YOU WITHIN 24 HOURS.")
        setFormData({
          studentName: "",
          email: "",
          phone: "",
          grade: "",
          subject: "",
          preferredDate: "",
          preferredTime: "",
          sessionType: "",
          additionalNotes: "",
        })
      } else {
        setSubmitResult("✗ ERROR: " + (data.message || "SUBMISSION FAILED. PLEASE TRY AGAIN."))
      }
    } catch (error) {
      setSubmitResult("✗ ERROR: NETWORK ERROR. PLEASE CHECK YOUR CONNECTION AND TRY AGAIN.")
    }

    setIsSubmitting(false)
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
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 text-center leading-none">[BOOK WITH {selectedTutorData.name.split(" ")[1]}]</h1>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 bg-black text-white">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black mb-4 sm:mb-6">TUTOR DETAILS</h2>
                <div className="text-sm sm:text-base lg:text-lg space-y-1 sm:space-y-2">
                  <div>{">"} TUTOR: {selectedTutorData.name}</div>
                  <div>{">"} SUBJECTS: {selectedTutorData.subjects.join(" • ")}</div>
                  <div>{">"} RATE: {selectedTutorData.price}</div>
                  <div>{">"} STRENGTHS: {selectedTutorData.strengths.join(", ")}</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-6 sm:mb-8">[BOOKING FORM]</h2>

                {/* Student Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">STUDENT NAME *</label>
                    <Input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="FULL NAME"
                      className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">EMAIL *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="STUDENT@EMAIL.COM"
                      className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Grade */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">PHONE NUMBER *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(XXX) XXX-XXXX"
                      className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">GRADE LEVEL *</label>
                    <Select onValueChange={(value) => handleSelectChange("grade", value)} required>
                      <SelectTrigger className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-auto">
                        <SelectValue placeholder="SELECT GRADE" />
                      </SelectTrigger>
                      <SelectContent className="font-mono">
                        <SelectItem value="6th">6TH GRADE</SelectItem>
                        <SelectItem value="7th">7TH GRADE</SelectItem>
                        <SelectItem value="8th">8TH GRADE</SelectItem>
                        <SelectItem value="9th">9TH GRADE</SelectItem>
                        <SelectItem value="10th">10TH GRADE</SelectItem>
                        <SelectItem value="11th">11TH GRADE</SelectItem>
                        <SelectItem value="12th">12TH GRADE</SelectItem>
                        <SelectItem value="college">COLLEGE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-base sm:text-lg font-bold mb-2">SUBJECT *</label>
                  <Select onValueChange={(value) => handleSelectChange("subject", value)} required>
                    <SelectTrigger className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-auto">
                      <SelectValue placeholder="SELECT SUBJECT" />
                    </SelectTrigger>
                    <SelectContent className="font-mono">
                      {selectedTutorData.subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">PREFERRED DATE *</label>
                    <Input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">PREFERRED TIME *</label>
                    <Select onValueChange={(value) => handleSelectChange("preferredTime", value)} required>
                      <SelectTrigger className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-auto">
                        <SelectValue placeholder="SELECT TIME" />
                      </SelectTrigger>
                      <SelectContent className="font-mono">
                        <SelectItem value="morning">MORNING (8AM-12PM)</SelectItem>
                        <SelectItem value="afternoon">AFTERNOON (12PM-5PM)</SelectItem>
                        <SelectItem value="evening">EVENING (5PM-9PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Session Type */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-base sm:text-lg font-bold mb-2">SESSION TYPE *</label>
                  <Select onValueChange={(value) => handleSelectChange("sessionType", value)} required>
                    <SelectTrigger className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-auto">
                      <SelectValue placeholder="SELECT TYPE" />
                    </SelectTrigger>
                    <SelectContent className="font-mono">
                      <SelectItem value="online">ONLINE SESSION</SelectItem>
                      <SelectItem value="in-person">IN-PERSON SESSION</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Notes */}
                <div className="mb-6 sm:mb-8">
                  <label className="block text-base sm:text-lg font-bold mb-2">ADDITIONAL NOTES</label>
                  <Textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="ANY SPECIFIC TOPICS OR CONCERNS?"
                    className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono min-h-[120px]"
                  />
                </div>

                {/* Submit Result Message */}
                {submitResult && (
                  <div className={`border-2 sm:border-4 p-4 mb-6 font-bold text-sm sm:text-base ${
                    submitResult.includes("✓") 
                      ? "border-green-600 bg-green-50 text-green-800"
                      : submitResult.includes("✗")
                      ? "border-red-600 bg-red-50 text-red-800"
                      : "border-black bg-gray-50"
                  }`}>
                    {submitResult}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none disabled:opacity-50"
                  >
                    {isSubmitting ? "[SENDING...]" : "[SUBMIT BOOKING REQUEST]"}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setBookingStep("select")
                      setSubmitResult("")
                    }}
                    variant="outline"
                    className="border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white font-bold tracking-wider rounded-none bg-transparent text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                  >
                    [GO BACK]
                  </Button>
                </div>
              </form>

              {/* Info Box */}
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 bg-gray-50">
                <h3 className="text-base sm:text-lg font-black mb-3">{">"} WHAT HAPPENS NEXT?</h3>
                <div className="text-sm sm:text-base space-y-2">
                  <p>{">"} YOUR REQUEST WILL BE REVIEWED WITHIN 24 HOURS</p>
                  <p>{">"} WE'LL CONFIRM AVAILABILITY WITH YOUR CHOSEN TUTOR</p>
                  <p>{">"} YOU'LL RECEIVE AN EMAIL WITH SESSION DETAILS</p>
                  <p>{">"} PAYMENT DETAILS WILL BE PROVIDED UPON CONFIRMATION</p>
                </div>
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
