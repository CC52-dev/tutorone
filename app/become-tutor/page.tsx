"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

interface FormData {
  name: string
  email: string
  phone: string
  educationLevel: string
  university: string
  degree: string
  graduationYear: string
  subjects: string[]
  experience: string
  availability: string
  hourlyRate: string
  motivation: string
  references: string
  resume: File | null
}

interface FormErrors {
  [key: string]: string
}

export default function BecomeTutorPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    educationLevel: "",
    university: "",
    degree: "",
    graduationYear: "",
    subjects: [],
    experience: "",
    availability: "",
    hourlyRate: "",
    motivation: "",
    references: "",
    resume: null,
  })

  const subjectOptions = [
    "Mathematics", "Physics", "Chemistry", "Biology", 
    "English Literature", "Spanish", "French", "SAT Prep", 
    "ACT Prep", "AP Exams", "Calculus", "Statistics",
    "Linear Algebra", "Organic Chemistry", "Biochemistry"
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.educationLevel.trim()) newErrors.educationLevel = "Education level is required"
    if (!formData.university.trim()) newErrors.university = "University/High School is required"
    if (!formData.degree.trim()) newErrors.degree = "Degree/Program is required"
    if (!formData.graduationYear.trim()) newErrors.graduationYear = "Graduation year is required"
    if (formData.subjects.length === 0) newErrors.subjects = "Select at least one subject"
    if (!formData.experience.trim()) newErrors.experience = "Teaching experience is required"
    if (!formData.availability.trim()) newErrors.availability = "Availability is required"
    if (!formData.hourlyRate.trim()) newErrors.hourlyRate = "Expected hourly rate is required"
    if (!formData.motivation.trim()) newErrors.motivation = "Motivation statement is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleSubjectChange = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }))
    
    if (errors.subjects) {
      setErrors(prev => ({
        ...prev,
        subjects: ""
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      resume: file
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Tutor application submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  // Thank You Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white text-black font-mono flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
            <div className="border-2 sm:border-4 border-green-600 p-8 sm:p-12 bg-green-50">
              <div className="text-6xl sm:text-8xl mb-6">✓</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-none text-green-600">
                [APPLICATION SUBMITTED]
              </h1>
              <p className="text-lg sm:text-xl font-bold mb-8 text-green-700">
                {">"} THANK YOU FOR YOUR INTEREST IN JOINING TUTORONE
              </p>
              <div className="space-y-4 text-base sm:text-lg">
                <p className="font-bold">WHAT HAPPENS NEXT?</p>
                <div className="text-left space-y-2">
                  <div>{">"} WE'LL REVIEW YOUR APPLICATION WITHIN 24 HOURS</div>
                  <div>{">"} EXPECT A PHONE INTERVIEW WITHIN 3-5 DAYS</div>
                  <div>{">"} BACKGROUND CHECK & REFERENCE VERIFICATION</div>
                  <div>{">"} ONBOARDING & TRAINING SESSION</div>
                  <div>{">"} START TUTORING WITHIN 1-2 WEEKS</div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-green-600 text-white hover:bg-green-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-green-600 rounded-none"
                >
                  [SUBMIT ANOTHER APPLICATION]
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 leading-none">[BECOME A TUTOR]</h1>
              <p className="text-base sm:text-lg font-bold">{">"} JOIN OUR ELITE TEAM OF EDUCATORS</p>
            </div>

            <div className="border-2 sm:border-4 border-black p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">FULL NAME *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="YOUR.FULL.NAME"
                      className={`border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">EMAIL ADDRESS *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="YOUR.EMAIL@UNIVERSITY.EDU"
                      className={`border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">PHONE NUMBER *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className={`border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">EDUCATION LEVEL *</label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      className={`w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono bg-white ${errors.educationLevel ? 'border-red-500' : ''}`}
                    >
                      <option value="">SELECT EDUCATION LEVEL</option>
                      <option value="high-school">HIGH SCHOOL STUDENT</option>
                      <option value="high-school-graduate">HIGH SCHOOL GRADUATE</option>
                      <option value="university-student">UNIVERSITY STUDENT</option>
                      <option value="university-graduate">UNIVERSITY GRADUATE</option>
                      <option value="graduate-student">GRADUATE STUDENT</option>
                      <option value="graduate-degree">GRADUATE DEGREE HOLDER</option>
                      <option value="phd">PHD STUDENT/HOLDER</option>
                    </select>
                    {errors.educationLevel && <p className="text-red-500 text-sm mt-1">{errors.educationLevel}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">UNIVERSITY/HIGH SCHOOL *</label>
                    <Input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      placeholder="YOUR UNIVERSITY OR HIGH SCHOOL"
                      className={`border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono ${errors.university ? 'border-red-500' : ''}`}
                    />
                    {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">DEGREE/PROGRAM *</label>
                    <Input
                      type="text"
                      name="degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      placeholder="B.S. Computer Science or High School Diploma"
                      className={`border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono ${errors.degree ? 'border-red-500' : ''}`}
                    />
                    {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">GRADUATION YEAR *</label>
                  <Input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                    placeholder="2024"
                    className={`border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono ${errors.graduationYear ? 'border-red-500' : ''}`}
                  />
                  {errors.graduationYear && <p className="text-red-500 text-sm mt-1">{errors.graduationYear}</p>}
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">SUBJECT EXPERTISE *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                    {subjectOptions.map((subject) => (
                      <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.subjects.includes(subject)}
                          onChange={() => handleSubjectChange(subject)}
                          className="w-4 h-4 border-2 border-black"
                        />
                        <span className="text-sm sm:text-base">{subject}</span>
                      </label>
                    ))}
                  </div>
                  {errors.subjects && <p className="text-red-500 text-sm mt-1">{errors.subjects}</p>}
                </div>

                {/* Experience and Availability */}
                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">TEACHING EXPERIENCE *</label>
                  <Textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="DESCRIBE YOUR TEACHING/TUTORING EXPERIENCE..."
                    className={`w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-24 sm:h-32 resize-none ${errors.experience ? 'border-red-500' : ''}`}
                  />
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">AVAILABILITY *</label>
                    <Textarea
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="E.G., MON-FRI 6-9PM, WEEKENDS 10AM-6PM"
                      className={`w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-20 resize-none ${errors.availability ? 'border-red-500' : ''}`}
                    />
                    {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2">EXPECTED HOURLY RATE *</label>
                    <Input
                      type="text"
                      name="hourlyRate"
                      value={formData.hourlyRate}
                      onChange={handleInputChange}
                      placeholder="$25-50"
                      className={`border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono ${errors.hourlyRate ? 'border-red-500' : ''}`}
                    />
                    {errors.hourlyRate && <p className="text-red-500 text-sm mt-1">{errors.hourlyRate}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">WHY DO YOU WANT TO TUTOR? *</label>
                  <Textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="TELL US ABOUT YOUR PASSION FOR TEACHING AND HELPING STUDENTS..."
                    className={`w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-24 sm:h-32 resize-none ${errors.motivation ? 'border-red-500' : ''}`}
                  />
                  {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
                </div>

                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">REFERENCES (OPTIONAL)</label>
                  <Textarea
                    name="references"
                    value={formData.references}
                    onChange={handleInputChange}
                    placeholder="PROFESSOR NAMES, CONTACT INFO, OR PREVIOUS EMPLOYERS..."
                    className="w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-20 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">RESUME (OPTIONAL)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono bg-white"
                  />
                  {formData.resume && (
                    <p className="text-sm text-gray-600 mt-1">Selected: {formData.resume.name}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none"
                >
                  {isSubmitting ? "[SUBMITTING...]" : "[SUBMIT APPLICATION]"}
                </Button>
              </form>

              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-xs sm:text-sm font-bold text-gray-600">
                  {">"} WE'LL REVIEW YOUR APPLICATION
                  <br />
                  {">"} EXPECT RESPONSE WITHIN 3-5 DAYS
                  <br />
                  {">"} COMPETITIVE RATES & FLEXIBLE SCHEDULING
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 bg-black text-white">
                <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4">WHY JOIN TUTORONE?</h3>
                <div className="text-sm sm:text-base space-y-1 sm:space-y-2">
                  <div>{">"} COMPETITIVE HOURLY RATES ($25-75/HR)</div>
                  <div>{">"} FLEXIBLE REMOTE WORK</div>
                  <div>{">"} ELITE STUDENT BASE</div>
                  <div>{">"} PROFESSIONAL DEVELOPMENT</div>
                  <div>{">"} SUPPORTIVE COMMUNITY</div>
                  <div>{">"} GROWTH OPPORTUNITIES</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
