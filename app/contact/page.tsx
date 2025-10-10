"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    grade: "",
    preferredTutor: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData)
      
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        grade: "",
        preferredTutor: ""
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-none">[CONTACT US]</h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold max-w-2xl mx-auto">
              {">"} READY TO DOMINATE YOUR ACADEMICS?
              <br />
              {">"} GET IN TOUCH WITH THE ELITE
              <br />
              {">"} NO QUESTION TOO CHALLENGING
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 text-center hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">[EMAIL]</h3>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {">"} FASTEST RESPONSE TIME
                  <br />
                  {">"} DETAILED INQUIRIES WELCOME
                </p>
                <div className="text-base sm:text-lg lg:text-xl font-bold">HELLO@TUTOROPIA.COM</div>
              </div>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 text-center hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">[HOURS]</h3>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {">"} MONDAY - FRIDAY: 4PM-9PM
                  <br />
                  {">"} WEEKEND: 2PM-8PM
                </p>
                <div className="text-base sm:text-lg lg:text-xl font-bold">PST TIMEZONE</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">[SEND MESSAGE]</h2>
                <p className="text-base sm:text-lg font-bold">
                  {">"} FILL OUT THE FORM BELOW
                  <br />
                  {">"} WE'LL GET BACK TO YOU WITHIN 24 HOURS
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-bold mb-2">
                      FULL NAME *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 sm:border-4 border-black rounded-none font-mono text-sm sm:text-base py-3 sm:py-4 px-4"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-bold mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 sm:border-4 border-black rounded-none font-mono text-sm sm:text-base py-3 sm:py-4 px-4"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="grade" className="block text-sm sm:text-base font-bold mb-2">
                      GRADE LEVEL
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="w-full border-2 sm:border-4 border-black rounded-none font-mono text-sm sm:text-base py-3 sm:py-4 px-4 bg-white"
                    >
                      <option value="">Select grade level</option>
                      <option value="9th">9th Grade</option>
                      <option value="10th">10th Grade</option>
                      <option value="11th">11th Grade</option>
                      <option value="12th">12th Grade</option>
                      <option value="college">College</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredTutor" className="block text-sm sm:text-base font-bold mb-2">
                      PREFERRED TUTOR
                    </label>
                    <select
                      id="preferredTutor"
                      name="preferredTutor"
                      value={formData.preferredTutor}
                      onChange={handleInputChange}
                      className="w-full border-2 sm:border-4 border-black rounded-none font-mono text-sm sm:text-base py-3 sm:py-4 px-4 bg-white"
                    >
                      <option value="">No preference</option>
                      <option value="shiven-sharma">Shiven Sharma (Founder & Manager)</option>
                      <option value="tattva-harish">Tattva Harish (Lead Tutor)</option>
                      <option value="nitin-ramesh">Nitin Ramesh (Sciences & Math)</option>
                      <option value="ryan-zhao">Ryan Zhao (SAT Prep Expert)</option>
                      <option value="joel-jacobs">Joel Jacobs (Multi-Subject)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base font-bold mb-2">
                    SUBJECT *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-2 sm:border-4 border-black rounded-none font-mono text-sm sm:text-base py-3 sm:py-4 px-4"
                    placeholder="What subject do you need help with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-bold mb-2">
                    MESSAGE *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="border-2 sm:border-4 border-black rounded-none font-mono text-sm sm:text-base py-3 sm:py-4 px-4 resize-none"
                    placeholder="Tell us about your academic goals and how we can help..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="border-2 sm:border-4 border-green-600 bg-green-50 p-4 sm:p-6 text-center">
                    <p className="text-green-600 font-bold text-sm sm:text-base">
                      ✓ MESSAGE SENT SUCCESSFULLY! WE'LL GET BACK TO YOU SOON.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="border-2 sm:border-4 border-red-600 bg-red-50 p-4 sm:p-6 text-center">
                    <p className="text-red-600 font-bold text-sm sm:text-base">
                      ✗ ERROR SENDING MESSAGE. PLEASE TRY AGAIN OR EMAIL US DIRECTLY.
                    </p>
                  </div>
                )}

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white hover:bg-white hover:text-black text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 font-black tracking-wider border-2 sm:border-4 border-black rounded-none transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "[SENDING...]" : "[SEND MESSAGE]"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
