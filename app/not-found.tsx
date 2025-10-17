import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center py-12 sm:py-16 lg:py-20">
          {/* Giant 404 */}
          <div className="border-4 sm:border-8 border-black p-8 sm:p-12 lg:p-16 mb-8 sm:mb-12 bg-black text-white">
            <h1 className="text-8xl sm:text-9xl lg:text-[200px] font-black leading-none mb-4 sm:mb-6">
              404
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-wider">
              [ERROR: PAGE NOT FOUND]
            </div>
          </div>

          {/* Error Message */}
          <div className="border-2 sm:border-4 border-black p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 tracking-wider">
              [NAVIGATION FAILURE]
            </h2>
            <div className="text-base sm:text-lg lg:text-xl space-y-2 font-bold">
              <p>{">"} THIS PAGE DOES NOT EXIST</p>
              <p>{">"} IT MAY HAVE BEEN MOVED OR DELETED</p>
              <p>{">"} OR YOU TYPED THE WRONG URL</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none transition-colors">
                  [RETURN HOME]
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 sm:border-4 border-black text-black hover:bg-black hover:text-white text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 font-bold tracking-wider rounded-none bg-transparent transition-colors"
                >
                  [BOOK SESSION]
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-2 sm:border-4 border-black p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 tracking-wider">
              [QUICK NAVIGATION]
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base font-bold">
              <Link href="/" className="border-2 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-colors">
                {">"} HOME
              </Link>
              <Link href="/tutors" className="border-2 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-colors">
                {">"} TUTORS
              </Link>
              <Link href="/book" className="border-2 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-colors">
                {">"} BOOK
              </Link>
              <Link href="/subjects" className="border-2 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-colors">
                {">"} SUBJECTS
              </Link>
              <Link href="/faq" className="border-2 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-colors">
                {">"} FAQ
              </Link>
              <Link href="/contact" className="border-2 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-colors">
                {">"} CONTACT
              </Link>
            </div>
          </div>

          {/* Error Code */}
          <div className="mt-8 sm:mt-12 text-xs sm:text-sm font-bold text-gray-600">
            <p>{">"} ERROR CODE: HTTP 404</p>
            <p>{">"} REQUESTED RESOURCE NOT AVAILABLE</p>
            <p>{">"} SYSTEM STATUS: OPERATIONAL</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

