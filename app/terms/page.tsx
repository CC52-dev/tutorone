import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">[TERMS OF SERVICE]</h1>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            {">"} THE RULES OF ENGAGEMENT
            <br />
            {">"} ACADEMIC EXCELLENCE STANDARDS
            <br />
            {">"} NO SHORTCUTS. NO EXCEPTIONS.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[SERVICE AGREEMENT]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>TUTORING SERVICES:</strong> ONE-ON-ONE ACADEMIC INSTRUCTION VIA VIDEO OR IN-PERSON
                </p>
                <p>
                  {">"} <strong>SCHEDULING:</strong> SESSIONS BOOKED THROUGH PLATFORM, 24-HOUR CANCELLATION POLICY
                </p>
                <p>
                  {">"} <strong>PAYMENT:</strong> HOURLY RATES CHARGED PER SESSION, NO REFUNDS FOR COMPLETED SESSIONS
                </p>
                <p>
                  {">"} <strong>MATERIALS:</strong> STUDENTS PROVIDE TEXTBOOKS, TUTORS PROVIDE SUPPLEMENTAL RESOURCES
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-black text-white">
              <h2 className="text-3xl font-black mb-6">[STUDENT RESPONSIBILITIES]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>ATTENDANCE:</strong> ARRIVE ON TIME AND PREPARED FOR ALL SESSIONS
                </p>
                <p>
                  {">"} <strong>HOMEWORK:</strong> COMPLETE ASSIGNED PRACTICE BETWEEN SESSIONS
                </p>
                <p>
                  {">"} <strong>COMMUNICATION:</strong> INFORM TUTOR OF SPECIFIC ACADEMIC GOALS AND CHALLENGES
                </p>
                <p>
                  {">"} <strong>RESPECT:</strong> MAINTAIN PROFESSIONAL CONDUCT DURING ALL INTERACTIONS
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[TUTOR STANDARDS]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>QUALIFICATIONS:</strong> VERIFIED DEGREES AND TEACHING EXPERIENCE
                </p>
                <p>
                  {">"} <strong>PREPARATION:</strong> CUSTOMIZED LESSON PLANS FOR EACH STUDENT
                </p>
                <p>
                  {">"} <strong>PROGRESS TRACKING:</strong> REGULAR ASSESSMENTS AND FEEDBACK
                </p>
                <p>
                  {">"} <strong>AVAILABILITY:</strong> RELIABLE SCHEDULING AND PUNCTUALITY
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[ACADEMIC INTEGRITY]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>NO CHEATING:</strong> TUTORS WILL NOT COMPLETE ASSIGNMENTS FOR STUDENTS
                </p>
                <p>
                  {">"} <strong>UNDERSTANDING FOCUS:</strong> EMPHASIS ON LEARNING PROCESS, NOT JUST ANSWERS
                </p>
                <p>
                  {">"} <strong>ORIGINAL WORK:</strong> STUDENTS MUST SUBMIT THEIR OWN WORK TO SCHOOLS
                </p>
                <p>
                  {">"} <strong>REPORTING:</strong> VIOLATIONS WILL BE REPORTED TO EDUCATIONAL INSTITUTIONS
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[PAYMENT TERMS]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>BILLING:</strong> CHARGED IMMEDIATELY AFTER EACH COMPLETED SESSION
                </p>
                <p>
                  {">"} <strong>RATES:</strong> VARY BY TUTOR EXPERIENCE AND SUBJECT COMPLEXITY
                </p>
                <p>
                  {">"} <strong>CANCELLATION:</strong> 24-HOUR NOTICE REQUIRED TO AVOID CHARGES
                </p>
                <p>
                  {">"} <strong>DISPUTES:</strong> CONTACT SUPPORT WITHIN 48 HOURS OF SESSION
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-black text-white">
              <h2 className="text-3xl font-black mb-6">[PLATFORM RULES]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>ACCOUNT SECURITY:</strong> USERS RESPONSIBLE FOR PASSWORD PROTECTION
                </p>
                <p>
                  {">"} <strong>APPROPRIATE USE:</strong> PLATFORM FOR EDUCATIONAL PURPOSES ONLY
                </p>
                <p>
                  {">"} <strong>CONTENT OWNERSHIP:</strong> USERS RETAIN RIGHTS TO THEIR ACADEMIC WORK
                </p>
                <p>
                  {">"} <strong>TERMINATION:</strong> ACCOUNTS MAY BE SUSPENDED FOR POLICY VIOLATIONS
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[CONTACT FOR TERMS]</h2>
              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  {">"} <strong>EMAIL:</strong> LEGAL@TUTOROPIA.COM
                </p>
                <p className="mb-4">
                  {">"} <strong>RESPONSE TIME:</strong> 72 HOURS MAXIMUM
                </p>
                <p>
                  {">"} <strong>LAST UPDATED:</strong> JANUARY 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
