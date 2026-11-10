import { ArrowRight, BookOpen, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="pt-6 sm:pt-10 pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>British Council & IDP Certified IELTS Preparation Center</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.08] [text-wrap:balance]">
            Achieve your target IELTS band on the first attempt.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
            Master Academic and General Training with senior mentor <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Golam Kabir</strong>. Benefit from personalized 1-on-1 writing task assessments, private speaking mock interviews, and authentic computer-delivered lab simulations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
            >
              Book Free Diagnostic Assessment
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#mock-lab"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-lg hover:bg-neutral-200/70 dark:hover:bg-neutral-800/80 transition-colors whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              Try Online Diagnostic Mock
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Computer-Delivered & Paper Mocks
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Free Band Improvement Retake Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Cambridge 14–19 Official Books Included
            </span>
          </div>
        </div>

        {/* Hero Visual Anchor (16:9 Image) */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl aspect-16/9">
          <img
            src="/src/assets/images/hero_ielts_classroom_1794290150897.jpg"
            alt="Kabir's IELTS Academy lecture hall with students preparing for IELTS exam"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div>
              <div className="text-xs uppercase tracking-wider text-blue-300 font-medium">
                Academic Campus & Computer Simulation Facility
              </div>
              <div className="text-sm font-medium text-neutral-100 mt-1">
                Where rigorous test strategy meets individual speaking confidence
              </div>
            </div>
            <div className="text-xs text-neutral-300 font-mono tabular-nums">
              Session 2026 Admissions Open
            </div>
          </div>
        </div>

        {/* 4-Column Proof & KPI Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight tabular-nums text-neutral-950 dark:text-neutral-50">
              8.2
            </div>
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1.5 uppercase tracking-wider">
              Average Candidate Band
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              Top 5% nationwide score distribution across 2024–2026.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight tabular-nums text-neutral-950 dark:text-neutral-50">
              4,850+
            </div>
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1.5 uppercase tracking-wider">
              Students Placed Globally
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              Enrolled in UK Russell Group, Canada U15, and Go8 Australia.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight tabular-nums text-neutral-950 dark:text-neutral-50">
              94.6%
            </div>
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1.5 uppercase tracking-wider">
              1st-Attempt Success Rate
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              Achieving university requirement in their very first exam.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight tabular-nums text-neutral-950 dark:text-neutral-50">
              1 : 1
            </div>
            <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1.5 uppercase tracking-wider">
              Writing & Speaking Feedback
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              Line-by-line rubric marking directly with certified mentors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
