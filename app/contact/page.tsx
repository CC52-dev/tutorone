import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 text-center hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">[EMAIL]</h3>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {">"} FASTEST RESPONSE TIME
                  <br />
                  {">"} DETAILED INQUIRIES WELCOME
                </p>
                <div className="text-base sm:text-lg lg:text-xl font-bold">HELLO@TUTORONE.EDU</div>
              </div>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 text-center hover:bg-black hover:text-white transition-colors duration-200">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">[PHONE]</h3>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {">"} IMMEDIATE ASSISTANCE
                  <br />
                  {">"} SPEAK TO ACADEMIC ADVISOR
                </p>
                <div className="text-base sm:text-lg lg:text-xl font-bold">+1 (555) TUTOR-1</div>
              </div>

              <div className="border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 text-center hover:bg-black hover:text-white transition-colors duration-200 md:col-span-2 lg:col-span-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">[HOURS]</h3>
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  {">"} MONDAY - FRIDAY: 8AM-10PM
                  <br />
                  {">"} WEEKEND: 10AM-8PM
                </p>
                <div className="text-base sm:text-lg lg:text-xl font-bold">EST TIMEZONE</div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
