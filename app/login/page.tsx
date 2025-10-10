"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form doesn't actually work - just for show
    console.log("Login attempt:", formData)
    alert("LOGIN SYSTEM NOT IMPLEMENTED - FOR DEMO PURPOSES ONLY")
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 leading-none">[TUTOR LOGIN]</h1>
              <p className="text-base sm:text-lg font-bold">{">"} ACCESS TUTOR RESOURCES</p>
            </div>

            <div className="border-2 sm:border-4 border-black p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">EMAIL ADDRESS *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="TUTOR.EMAIL@TUTOROPIA.COM"
                    className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block text-base sm:text-lg font-bold mb-2">PASSWORD *</label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="ENTER YOUR PASSWORD"
                    className="border-2 sm:border-4 border-black rounded-none text-sm sm:text-base p-3 sm:p-4 font-mono"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none"
                >
                  [LOGIN TO RESOURCES]
                </Button>
              </form>

              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-xs sm:text-sm font-bold text-gray-600">
                  {">"} FORGOT PASSWORD? CONTACT ADMIN
                  <br />
                  {">"} NEW TUTOR? REGISTRATION REQUIRES APPROVAL
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 bg-black text-white">
                <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4">TUTOR RESOURCES INCLUDE:</h3>
                <div className="text-sm sm:text-base space-y-1 sm:space-y-2">
                  <div>{">"} STUDENT MANAGEMENT DASHBOARD</div>
                  <div>{">"} SESSION SCHEDULING TOOLS</div>
                  <div>{">"} PAYMENT TRACKING SYSTEM</div>
                  <div>{">"} CURRICULUM RESOURCES</div>
                  <div>{">"} PERFORMANCE ANALYTICS</div>
                  <div>{">"} COMMUNICATION PORTAL</div>
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
