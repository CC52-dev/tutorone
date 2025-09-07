"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function BecomeTutorPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    experience: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form doesn't actually work - just for show
    console.log("Tutor application:", formData)
    alert("APPLICATION SUBMITTED - WE'LL CONTACT YOU SOON!")
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 leading-none">[BECOME A TUTOR]</h1>
              <p className="text-base sm:text-lg font-bold">{">"} JOIN OUR ELITE TEAM OF EDUCATORS</p>
            </div>

            <div className="border-2 sm:border-4 border-black p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">FULL NAME *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="YOUR.FULL.NAME"
                    className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">EMAIL ADDRESS *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="YOUR.EMAIL@UNIVERSITY.EDU"
                    className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                    required
                  />
              </div>

              <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">SUBJECT EXPERTISE *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono bg-white"
                  required
                  >
                    <option value="">SELECT YOUR SUBJECT</option>
                  <option value="mathematics">MATHEMATICS</option>
                  <option value="physics">PHYSICS</option>
                  <option value="chemistry">CHEMISTRY</option>
                  <option value="biology">BIOLOGY</option>
                  <option value="english">ENGLISH</option>
                  <option value="spanish">SPANISH</option>
                  <option value="french">FRENCH</option>
                  <option value="test-prep">TEST PREPARATION</option>
                  <option value="other">OTHER</option>
                </select>
              </div>

              <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">TEACHING EXPERIENCE *</label>
                <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="DESCRIBE YOUR TEACHING/TUTORING EXPERIENCE..."
                    className="w-full border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono h-24 sm:h-32 resize-none"
                  required
                />
              </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none"
                >
                  [SUBMIT APPLICATION]
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
                  <div>{">"} COMPETITIVE HOURLY RATES</div>
                  <div>{">"} FLEXIBLE REMOTE WORK</div>
                  <div>{">"} ELITE STUDENT BASE</div>
                  <div>{">"} PROFESSIONAL DEVELOPMENT</div>
                  <div>{">"} SUPPORTIVE COMMUNITY</div>
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
