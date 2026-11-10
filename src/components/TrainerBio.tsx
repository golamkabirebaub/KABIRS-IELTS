import { CheckCircle2, Award, BookOpen, ShieldCheck } from 'lucide-react';

export function TrainerBio() {
  return (
    <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md aspect-4/3 relative">
              <img
                src="/src/assets/images/ielts_computer_lab_1794290151465.jpg"
                alt="Modern computer-delivered testing lab at Kabir's IELTS"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-wider text-blue-300 font-mono">
                  Computer-Delivered IELTS Lab
                </div>
                <div className="text-sm font-semibold">
                  Official Exam Simulation Environment
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 aspect-16/9 relative hidden sm:block">
              <img
                src="/src/assets/images/ielts_study_materials_1794290151533.jpg"
                alt="Cambridge IELTS study materials and headphones"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-white/90 bg-neutral-950/60 px-2 py-0.5 rounded">
                Authentic Cambridge 14–19 Test Materials
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Mentorship & Pedagogical Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                Led by Master Trainer Golam Kabir
              </h2>
              <p className="mt-2 text-xs font-mono text-neutral-500">
                British Council & IDP Accredited IELTS Mentor · 12+ Years Dedicated Practice
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              Most candidates fail to achieve their target band score not because their general English is inadequate, but because they treat IELTS as an intuitive English test rather than a structured psychometric evaluation with rigid rubric criteria.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              At <strong className="font-semibold text-neutral-900 dark:text-neutral-100">Kabir's IELTS</strong>, we break down each module into predictable structural frameworks. We train you on the exact micro-skills examiners look for: Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Individual Diagnostic Profiling</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Pinpoint your exact reading blind spots and recurring grammatical slip-ups before you enter the examination hall.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Line-by-Line Essay Marking</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Every Task 1 report and Task 2 essay receives handwritten or digital examiner annotations with vocabulary upgrades.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Unlimited 1:1 Speaking Mocks</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Continuous live interviews until you speak with natural rhythm, diverse intonation, and zero hesitation markers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Full Retake Guarantee</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  If you attend all scheduled classes and complete your assigned mocks without achieving your target band, retake the course free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
