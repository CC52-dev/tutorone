import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">[PRIVACY POLICY]</h1>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            {">"} YOUR DATA. YOUR RIGHTS.
            <br />
            {">"} TRANSPARENT PRACTICES ONLY
            <br />
            {">"} ACADEMIC PRIVACY PROTECTED
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[INFORMATION WE COLLECT]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>PERSONAL INFORMATION:</strong> NAME, EMAIL, PHONE NUMBER, ACADEMIC LEVEL
                </p>
                <p>
                  {">"} <strong>ACADEMIC DATA:</strong> SUBJECTS, GRADES, LEARNING PREFERENCES, SESSION NOTES
                </p>
                <p>
                  {">"} <strong>USAGE DATA:</strong> PLATFORM INTERACTIONS, SESSION ATTENDANCE, PROGRESS METRICS
                </p>
                <p>
                  {">"} <strong>COMMUNICATION:</strong> MESSAGES WITH TUTORS, SUPPORT INTERACTIONS, FEEDBACK
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[HOW WE USE YOUR DATA]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>TUTORING SERVICES:</strong> MATCHING WITH APPROPRIATE TUTORS, SCHEDULING SESSIONS
                </p>
                <p>
                  {">"} <strong>ACADEMIC PROGRESS:</strong> TRACKING IMPROVEMENT, CUSTOMIZING LEARNING PLANS
                </p>
                <p>
                  {">"} <strong>COMMUNICATION:</strong> SESSION REMINDERS, PROGRESS UPDATES, PLATFORM NOTIFICATIONS
                </p>
                <p>
                  {">"} <strong>IMPROVEMENT:</strong> ENHANCING PLATFORM FEATURES, TUTOR MATCHING ALGORITHMS
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-black text-white">
              <h2 className="text-3xl font-black mb-6">[DATA PROTECTION]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>ENCRYPTION:</strong> ALL DATA ENCRYPTED IN TRANSIT AND AT REST
                </p>
                <p>
                  {">"} <strong>ACCESS CONTROL:</strong> STRICT EMPLOYEE ACCESS PROTOCOLS
                </p>
                <p>
                  {">"} <strong>RETENTION:</strong> DATA DELETED AFTER ACCOUNT CLOSURE + 7 YEARS
                </p>
                <p>
                  {">"} <strong>COMPLIANCE:</strong> FERPA, COPPA, AND GDPR COMPLIANT
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[YOUR RIGHTS]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>ACCESS:</strong> REQUEST COPY OF ALL YOUR PERSONAL DATA
                </p>
                <p>
                  {">"} <strong>CORRECTION:</strong> UPDATE INACCURATE OR INCOMPLETE INFORMATION
                </p>
                <p>
                  {">"} <strong>DELETION:</strong> REQUEST REMOVAL OF YOUR ACCOUNT AND DATA
                </p>
                <p>
                  {">"} <strong>PORTABILITY:</strong> EXPORT YOUR DATA IN MACHINE-READABLE FORMAT
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[CONTACT FOR PRIVACY]</h2>
              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  {">"} <strong>EMAIL:</strong> PRIVACY@TUTOROPIA.COM
                </p>
                <p className="mb-4">
                  {">"} <strong>RESPONSE TIME:</strong> 48 HOURS MAXIMUM
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
