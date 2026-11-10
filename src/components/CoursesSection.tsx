import { COURSES, Course } from '../data/ieltsData';
import { Check, ArrowRight } from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourse: (courseName: string) => void;
}

export function CoursesSection({ onSelectCourse }: CoursesSectionProps) {
  return (
    <section id="courses" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-3">
            Academic & General Training Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Structured course tracks calibrated to your target score
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Whether starting from an intermediate foundation or seeking the final +0.5 push in Writing and Speaking, each curriculum delivers rigorous diagnostic feedback and Cambridge materials.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {COURSES.map((course: Course) => (
            <div
              key={course.id}
              className={`border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                course.badge
                  ? 'border-blue-600/50 dark:border-blue-500/50 bg-white dark:bg-neutral-900 shadow-md ring-1 ring-blue-600/20'
                  : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {course.duration} · {course.classes}
                  </div>
                  {course.badge && (
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-900">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                  {course.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {course.description}
                </p>

                {/* Key Metrics Banner */}
                <div className="my-5 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase">Target Score</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">Band {course.targetBand}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase">Mock Testing</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">{course.mockTests}</span>
                  </div>
                </div>

                {/* Included Features */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Included Curriculum Highlights:
                  </div>
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Action */}
              <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Course Fee</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-950 dark:text-neutral-50 tabular-nums">
                    {course.fee}
                  </div>
                </div>

                <button
                  onClick={() => onSelectCourse(course.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                >
                  Enroll / Book Assessment
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
