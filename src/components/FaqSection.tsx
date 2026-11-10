import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is the exact difference between IELTS Academic and General Training?',
      answer: 'IELTS Academic is strictly required for higher education admissions (undergraduate, masters, PhD, postdoctoral fellowships) and professional healthcare registrations (GMC, NMC, Nursing, PLAB). IELTS General Training is designed for permanent residency (PR, Canadian Express Entry, Australian GSM, New Zealand skilled migrant) and work permits. The Listening and Speaking tests are identical in both formats; only Reading and Writing Task 1 differ.'
    },
    {
      question: 'Should I choose Computer-Delivered IELTS or Paper-Based IELTS?',
      answer: 'Computer-Delivered IELTS (CD-IELTS) is strongly recommended for most candidates today. Results are released within 3 to 5 calendar days (compared to 13 days for paper), listening test takers have individual noise-cancelling headphones, and the writing test features a live word counter and effortless editing without messy eraser smudges. Our on-campus testing lab runs the identical simulation software to give you complete confidence.'
    },
    {
      question: 'How does Kabir Sir evaluate our Speaking and Writing essays?',
      answer: 'Unlike large lecture factories that give generic grades, every writing submission at Kabir\'s IELTS is marked against the official British Council four-band rubric: Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy. You receive written annotations showing where B1 vocabulary was upgraded to C1/C2 collocations. Speaking interviews are conducted 1-on-1 with live recordings and pronunciation feedback.'
    },
    {
      question: 'How does the Free Band Retake Guarantee work?',
      answer: 'We stand 100% behind our pedagogical methodology. If you attend at least 90% of your scheduled masterclasses and sit for all assigned full-length mock examinations but do not achieve your target band on your official test date, you can re-enroll in the next batch completely free of tuition charges until your score is attained.'
    },
    {
      question: 'Does Kabir\'s IELTS assist with official British Council or IDP exam date registration?',
      answer: 'Yes! As an authorized test registration partner, our admissions desk assists students with date selection, venue booking, passport verification, and payment processing for official British Council and IDP examination dates at zero service fee.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>IELTS Candidate FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Everything you need to know about exam registration, preparation formats, and the Kabir's IELTS score guarantee.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900/50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 rounded-md text-neutral-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
