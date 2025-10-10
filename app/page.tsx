import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SplineHero } from "@/components/spline-hero"
import Link from "next/link"

export default function TutopiaLanding() {
  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6 sm:mb-8 tracking-tighter">
                  LEARN.
                  <br />
                  EXCEL.
                  <br />
                  <span className="bg-black text-white px-1 sm:px-2">SUCCEED.</span>
                </h1>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
                  {">"} ELITE TUTORING FOR SERIOUS STUDENTS
                  <br />
                  {">"} NO SHORTCUTS. JUST RESULTS.
                  <br />
                  {">"} MASTER YOUR SUBJECTS OR FAIL TRYING.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/book">
                    <Button className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none transition-colors">
                      [BOOK SESSION]
                    </Button>
                  </Link>
                  <Link href="/tutors">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider rounded-none bg-transparent transition-colors"
                    >
                      [VIEW TUTORS]
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="w-full h-64 sm:h-80 lg:h-96 border-4 sm:border-6 lg:border-8 border-black relative overflow-hidden">
                  <SplineHero />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center border-2 sm:border-4 border-white p-4 sm:p-6 lg:p-8">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-4">4.3</div>
                <div className="text-base sm:text-lg lg:text-xl font-bold tracking-wider">AVERAGE GPA</div>
              </div>
              <div className="text-center border-2 sm:border-4 border-white p-4 sm:p-6 lg:p-8 bg-white text-black">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-4">1500+</div>
                <div className="text-base sm:text-lg lg:text-xl font-bold tracking-wider">AVERAGE SAT</div>
              </div>
              <div className="text-center border-2 sm:border-4 border-white p-4 sm:p-6 lg:p-8 sm:col-span-2 lg:col-span-1">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 sm:mb-4">10</div>
                <div className="text-base sm:text-lg lg:text-xl font-bold tracking-wider">APS TAKEN</div>
              </div>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="subjects">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-12 sm:mb-16 text-center">[SUBJECTS]</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[01] MATHEMATICS</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} ALGEBRA TO CALCULUS MASTERY
                  <br />
                  {">"} NO EQUATION LEFT UNSOLVED
                  <br />
                  {">"} LOGIC OVER MEMORIZATION
                </p>
              </div>
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[02] SCIENCES</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} PHYSICS, CHEMISTRY, BIOLOGY
                  <br />
                  {">"} THEORY MEETS PRACTICE
                  <br />
                  {">"} UNDERSTAND THE UNIVERSE
                </p>
              </div>
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[03] LANGUAGES</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} ENGLISH, SPANISH, FRENCH
                  <br />
                  {">"} FLUENCY THROUGH IMMERSION
                  <br />
                  {">"} COMMUNICATION IS POWER
                </p>
              </div>
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[04] TEST PREP</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} SAT, ACT, AP EXAMS
                  <br />
                  {">"} STRATEGY OVER STRESS
                  <br />
                  {">"} MAXIMUM SCORES GUARANTEED
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8">[FREQUENTLY ASKED QUESTIONS]</h2>
              <p className="text-base sm:text-lg lg:text-xl font-bold">{">"} GET YOUR ANSWERS HERE</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[HOW TO BOOK?]</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} CLICK [BOOK SESSION] BUTTON
                  <br />
                  {">"} SELECT SUBJECT & TUTOR
                  <br />
                  {">"} CHOOSE YOUR TIME SLOT
                  <br />
                  {">"} PAY SECURELY ONLINE
                </p>
              </div>
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[WHAT SUBJECTS?]</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} MATHEMATICS (ALL LEVELS)
                  <br />
                  {">"} SCIENCES (PHYSICS, CHEM, BIO)
                  <br />
                  {">"} LANGUAGES (ENGLISH, SPANISH, FRENCH)
                  <br />
                  {">"} TEST PREP (SAT, ACT, AP)
                </p>
              </div>
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[PRICING?]</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} BASIC: $50/HR
                  <br />
                  {">"} ADVANCED: $75/HR
                  <br />
                  {">"} TEST PREP: $100/HR
                  <br />
                  {">"} PACKAGE DEALS AVAILABLE
                </p>
              </div>
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[ONLINE OR IN-PERSON?]</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} BOTH OPTIONS AVAILABLE
                  <br />
                  {">"} SECURE VIDEO PLATFORM
                  <br />
                  {">"} SCREEN SHARING & WHITEBOARD
                  <br />
                  {">"} SELECT LOCATIONS FOR IN-PERSON
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/faq">
                <Button className="bg-black text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none transition-colors">
                  [VIEW ALL FAQ]
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-none text-white">
              <span className="text-white">READY TO</span>
              <br />
              <span className="bg-white text-black px-2 sm:px-4">DOMINATE</span>
              <br />
              <span className="text-white">YOUR GRADES?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 font-bold text-white">
              {">"} JOIN THE ACADEMIC ELITE
              <br />
              {">"} NO EXCUSES. ONLY EXCELLENCE.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/tutors">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-black tracking-wider border-2 sm:border-4 border-white rounded-none">
                  [MEET THE TUTORS]
                </Button>
              </Link>
              <Link href="/book">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto border-2 sm:border-4 border-white text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-black tracking-wider rounded-none bg-transparent transition-colors"
                >
                  [BOOK NOW]
                </Button>
              </Link>
            </div>
            <p className="text-xs sm:text-sm mt-6 sm:mt-8 font-bold text-white">
              {">"} WARNING: SIDE EFFECTS MAY INCLUDE ACADEMIC SUCCESS
            </p>
          </div>
        </section>

        {/* Free Tutoring for Underprivileged Kids Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8">[FREE TUTORING]</h2>
              <p className="text-base sm:text-lg lg:text-xl font-bold">{">"} EDUCATION FOR EVERYONE - NO BARRIERS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="border-2 sm:border-4 border-green-600 p-4 sm:p-6 lg:p-8 hover:bg-green-600 hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider text-green-600 group-hover:text-white">[WHO QUALIFIES?]</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} FAMILIES BELOW POVERTY LINE
                  <br />
                  {">"} FOSTER CARE YOUTH
                  <br />
                  {">"} REFUGEE & IMMIGRANT STUDENTS
                  <br />
                  {">"} FIRST-GENERATION COLLEGE BOUND
                </p>
              </div>
              <div className="border-2 sm:border-4 border-green-600 p-4 sm:p-6 lg:p-8 hover:bg-green-600 hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider text-green-600 group-hover:text-white">[WHAT'S INCLUDED?]</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  {">"} ALL SUBJECTS COVERED
                  <br />
                  {">"} TEST PREP INCLUDED
                  <br />
                  {">"} COLLEGE APPLICATION HELP
                  <br />
                  {">"} MENTORSHIP & GUIDANCE
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="bg-green-600 text-white hover:bg-green-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-green-600 rounded-none transition-colors">
                  [APPLY FOR FREE TUTORING]
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Become a Tutor Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8">[BECOME A TUTOR]</h2>
              <p className="text-base sm:text-lg lg:text-xl font-bold">{">"} JOIN OUR ELITE TEAM OF EDUCATORS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200 group">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[WHY JOIN US?]</h3>
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {">"} COMPETITIVE RATES
                  <br />
                  {">"} FLEXIBLE SCHEDULING
                  <br />
                  {">"} ELITE STUDENT BASE
                  <br />
                  {">"} PROVEN RESULTS
                </p>
                <Link href="/become-tutor">
                  <Button className="w-full bg-transparent border-2 sm:border-4 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white hover:bg-black hover:text-white font-bold tracking-wider rounded-none text-sm sm:text-base py-3 sm:py-4">
                    [LEARN MORE]
                  </Button>
                </Link>
              </div>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 hover:bg-black hover:text-white transition-colors duration-200 group">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 tracking-wider">[BECOME A TUTOR]</h3>
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {">"} JOIN OUR ELITE TEAM
                  <br />
                  {">"} FLEXIBLE SCHEDULING
                  <br />
                  {">"} COMPETITIVE RATES
                </p>
                <Link href="/become-tutor">
                  <Button className="w-full bg-transparent border-2 sm:border-4 border-black group-hover:border-white text-black group-hover:text-black group-hover:bg-white hover:bg-black hover:text-white font-bold tracking-wider rounded-none text-sm sm:text-base py-3 sm:py-4">
                    [APPLY NOW]
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
