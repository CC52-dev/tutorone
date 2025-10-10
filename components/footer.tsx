import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t-4 border-black py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-wider">[CONTACT]</h3>
            <p className="text-lg">
              {">"} HELLO@TUTOROPIA.COM
              <br />
              {">"} ONLINE & IN-PERSON
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-wider">[QUICK LINKS]</h3>
            <div className="space-y-2">
              <Link
                href="/tutors"
                className="block text-lg hover:bg-black hover:text-white px-2 py-1 transition-colors"
              >
                {">"} FIND TUTORS
              </Link>
              <Link href="/book" className="block text-lg hover:bg-black hover:text-white px-2 py-1 transition-colors">
                {">"} BOOK SESSION
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-wider">[FOR TUTORS]</h3>
            <div className="space-y-2">
              <Link
                href="/become-tutor"
                className="block text-lg hover:bg-black hover:text-white px-2 py-1 transition-colors"
              >
                {">"} BECOME A TUTOR
              </Link>
              <Link
                href="/login"
                className="block text-lg hover:bg-black hover:text-white px-2 py-1 transition-colors"
              >
                {">"} TUTOR RESOURCES
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-wider">[FREE TUTORING]</h3>
            <div className="space-y-2">
              <p className="text-lg text-green-600 font-bold">
                {">"} EDUCATION FOR ALL
              </p>
              <p className="text-sm">
                QUALIFYING STUDENTS GET:
                <br />
                • ALL SUBJECTS FREE
                <br />
                • TEST PREP INCLUDED
                <br />
                • MENTORSHIP
              </p>
              <Link
                href="/contact"
                className="block text-lg hover:bg-green-600 hover:text-white px-2 py-1 transition-colors bg-green-600 text-white mt-2"
              >
                {">"} APPLY NOW
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-wider">[LEGAL]</h3>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block text-lg hover:bg-black hover:text-white px-2 py-1 transition-colors"
              >
                {">"} PRIVACY POLICY
              </Link>
              <Link href="/terms" className="block text-lg hover:bg-black hover:text-white px-2 py-1 transition-colors">
                {">"} TERMS OF SERVICE
              </Link>
              <Link
                href="/student-agreement"
                className="block text-lg hover:bg-black hover:text-white px-2 py-1 transition-colors"
              >
                {">"} STUDENT AGREEMENT
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-4 border-black mt-12 pt-8 text-center">
          <p className="text-lg font-bold">© 2025 TUTOROPIA - ALL RIGHTS ACADEMICALLY RESERVED</p>
        </div>
      </div>
    </footer>
  )
}
