import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function StudentAgreementPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">[STUDENT AGREEMENT]</h1>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            {">"} COMMITMENT TO EXCELLENCE
            <br />
            {">"} ACADEMIC SUCCESS CONTRACT
            <br />
            {">"} NO EXCUSES. ONLY RESULTS.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="border-4 border-black p-8 bg-black text-white">
              <h2 className="text-3xl font-black mb-6">[THE TUTORONE COMMITMENT]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  BY JOINING TUTORONE, YOU AGREE TO PURSUE ACADEMIC EXCELLENCE WITH UNWAVERING DETERMINATION. THIS IS
                  NOT A CASUAL TUTORING SERVICE - THIS IS AN ELITE ACADEMIC TRANSFORMATION PROGRAM.
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[STUDENT OBLIGATIONS]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>PUNCTUALITY:</strong> ARRIVE ON TIME FOR EVERY SESSION, NO EXCEPTIONS
                </p>
                <p>
                  {">"} <strong>PREPARATION:</strong> COMPLETE ALL ASSIGNED WORK BETWEEN SESSIONS
                </p>
                <p>
                  {">"} <strong>ENGAGEMENT:</strong> ACTIVELY PARTICIPATE AND ASK QUESTIONS
                </p>
                <p>
                  {">"} <strong>HONESTY:</strong> COMMUNICATE STRUGGLES AND CONFUSION IMMEDIATELY
                </p>
                <p>
                  {">"} <strong>RESPECT:</strong> TREAT TUTORS AND PLATFORM WITH PROFESSIONALISM
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[ACADEMIC STANDARDS]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>EFFORT REQUIREMENT:</strong> MINIMUM 2 HOURS STUDY PER 1 HOUR TUTORING
                </p>
                <p>
                  {">"} <strong>PROGRESS TRACKING:</strong> WEEKLY ASSESSMENTS AND GOAL SETTING
                </p>
                <p>
                  {">"} <strong>IMPROVEMENT METRICS:</strong> MEASURABLE GRADE INCREASES EXPECTED
                </p>
                <p>
                  {">"} <strong>FEEDBACK INTEGRATION:</strong> IMPLEMENT TUTOR RECOMMENDATIONS IMMEDIATELY
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-black text-white">
              <h2 className="text-3xl font-black mb-6">[CONSEQUENCES OF NON-COMPLIANCE]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>FIRST WARNING:</strong> FORMAL NOTICE AND PERFORMANCE IMPROVEMENT PLAN
                </p>
                <p>
                  {">"} <strong>SECOND WARNING:</strong> MANDATORY ACADEMIC COUNSELING SESSION
                </p>
                <p>
                  {">"} <strong>FINAL WARNING:</strong> PROBATIONARY STATUS WITH STRICT MONITORING
                </p>
                <p>
                  {">"} <strong>TERMINATION:</strong> REMOVAL FROM PLATFORM FOR REPEATED VIOLATIONS
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[SUCCESS GUARANTEES]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>GRADE IMPROVEMENT:</strong> MINIMUM ONE LETTER GRADE INCREASE IN 8 WEEKS
                </p>
                <p>
                  {">"} <strong>UNDERSTANDING DEPTH:</strong> CONCEPTUAL MASTERY, NOT JUST MEMORIZATION
                </p>
                <p>
                  {">"} <strong>CONFIDENCE BUILDING:</strong> INCREASED ACADEMIC SELF-EFFICACY
                </p>
                <p>
                  {">"} <strong>STUDY SKILLS:</strong> INDEPENDENT LEARNING CAPABILITY DEVELOPMENT
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">[PARENT/GUARDIAN INVOLVEMENT]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  {">"} <strong>PROGRESS REPORTS:</strong> WEEKLY UPDATES ON STUDENT PERFORMANCE
                </p>
                <p>
                  {">"} <strong>COMMUNICATION:</strong> IMMEDIATE NOTIFICATION OF CONCERNS
                </p>
                <p>
                  {">"} <strong>SUPPORT EXPECTATIONS:</strong> HOME ENVIRONMENT CONDUCIVE TO LEARNING
                </p>
                <p>
                  {">"} <strong>COLLABORATION:</strong> PARTNERSHIP IN STUDENT SUCCESS STRATEGY
                </p>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-black text-white">
              <h2 className="text-3xl font-black mb-6">[AGREEMENT SIGNATURE]</h2>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  BY USING THE TUTORONE PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND
                  BY THIS STUDENT AGREEMENT.
                </p>
                <p className="font-black">FAILURE IS NOT AN OPTION. EXCELLENCE IS THE ONLY ACCEPTABLE OUTCOME.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
