import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "HOW DO I BOOK A TUTORING SESSION?",
    answer: "Click the [BOOK SESSION] button on our homepage or visit the /book page. Select your subject, choose your preferred tutor, and pick an available time slot. Payment is processed securely through our platform."
  },
  {
    question: "WHAT SUBJECTS DO YOU COVER?",
    answer: "We cover Mathematics (Algebra to Calculus), Sciences (Physics, Chemistry, Biology), Languages (English, Spanish, French), and Test Prep (SAT, ACT, AP Exams). Our tutors are experts in their respective fields with proven track records."
  },
  {
    question: "HOW MUCH DO TUTORING SESSIONS COST?",
    answer: "Pricing varies by subject and tutor experience level. Basic sessions start at $50/hour, advanced subjects at $75/hour, and specialized test prep at $100/hour. We offer package deals for multiple sessions with significant discounts."
  },
  {
    question: "CAN I CHOOSE MY OWN TUTOR?",
    answer: "Absolutely. Browse our tutor profiles to see their qualifications, specialties, and student reviews. You can book directly with your preferred tutor or let us match you with the best fit based on your needs."
  },
  {
    question: "ARE SESSIONS CONDUCTED ONLINE OR IN-PERSON?",
    answer: "We offer both options. Online sessions use our secure video platform with screen sharing and digital whiteboard. In-person sessions are available in select locations. You can choose your preference when booking."
  },
  {
    question: "WHAT IF I NEED TO CANCEL OR RESCHEDULE?",
    answer: "Cancellations made 24+ hours in advance receive a full refund. Rescheduling is free with 12+ hours notice. Last-minute cancellations (less than 12 hours) may incur a 50% fee to compensate our tutors."
  },
  {
    question: "DO YOU OFFER GROUP TUTORING?",
    answer: "Yes, we offer group sessions for 2-4 students at reduced rates. Group sessions are perfect for study groups, siblings, or friends taking the same course. Contact us to arrange group bookings."
  },
  {
    question: "WHAT MAKES TUTORONE DIFFERENT?",
    answer: "We only work with elite tutors who have proven track records of student success. Our tutors are not just knowledgeable—they're results-driven educators who push students to achieve their maximum potential. No shortcuts, just excellence."
  },
  {
    question: "DO YOU GUARANTEE GRADE IMPROVEMENTS?",
    answer: "While we can't guarantee specific grades, our students average a 98% improvement rate. We focus on understanding concepts deeply rather than memorization, which leads to lasting academic success and confidence."
  },
  {
    question: "HOW DO I BECOME A TUTOR?",
    answer: "Visit our /become-tutor page to apply. We require advanced degrees or equivalent experience, proven teaching ability, and a commitment to our high standards. Successful applicants join our elite team with competitive compensation."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6 sm:mb-8 tracking-tighter">
              FREQUENTLY
              <br />
              <span className="bg-black text-white px-1 sm:px-2">ASKED</span>
              <br />
              QUESTIONS
            </h1>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed">
              {">"} EVERYTHING YOU NEED TO KNOW
              <br />
              {">"} NO BULLSHIT. JUST ANSWERS.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 sm:border-4 border-black"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl font-black px-4 sm:px-6 py-4 sm:py-6 hover:bg-black hover:text-white transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base sm:text-lg leading-relaxed px-4 sm:px-6 py-4 sm:py-6 bg-gray-50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-none text-white">
              <span className="text-white">STILL HAVE</span>
              <br />
              <span className="bg-white text-black px-2 sm:px-4">QUESTIONS?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 font-bold text-white">
              {">"} CONTACT US DIRECTLY
              <br />
              {">"} WE'RE HERE TO HELP
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-black tracking-wider border-2 sm:border-4 border-white rounded-none">
                  [CONTACT US]
                </Button>
              </Link>
              <Link href="/book">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto border-2 sm:border-4 border-white text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-black tracking-wider rounded-none bg-transparent transition-colors"
                >
                  [BOOK SESSION]
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

