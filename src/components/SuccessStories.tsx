import { useState } from 'react';
import { STUDENT_STORIES, StudentStory } from '../data/ieltsData';
import { Quote, CheckCircle2, TrendingUp, Award } from 'lucide-react';

export function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<StudentStory>(STUDENT_STORIES[0]);

  return (
    <section id="success-stories" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Documented Candidate Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Real IELTS Test Report Forms, not unsubstantiated claims
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Inspect verified band scores achieved by our candidates who conquered the IELTS exam to secure admissions and visas worldwide.
          </p>
        </div>

        {/* Featured Showcase Split */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 overflow-hidden shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto bg-neutral-100 dark:bg-neutral-950 overflow-hidden min-h-[320px]">
              <img
                src="/src/assets/images/ielts_speaking_interview_1794290151298.jpg"
                alt="One on one speaking interview with IELTS candidate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase tracking-wider text-blue-300 font-mono">
                  Official TRF Scorecard Verified
                </div>
                <div className="text-sm font-semibold">
                  {selectedStory.name} · {selectedStory.targetCountry}
                </div>
                <div className="text-xs text-neutral-300">
                  {selectedStory.university}
                </div>
              </div>
            </div>

            {/* Score Breakdown & Story */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
                      {selectedStory.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">
                      {selectedStory.batch}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedStory.previousScore && (
                      <div className="text-right">
                        <span className="text-[10px] text-neutral-400 block font-mono">PREVIOUS</span>
                        <span className="text-xs font-mono font-medium line-through text-neutral-400">
                          Band {selectedStory.previousScore.toFixed(1)}
                        </span>
                      </div>
                    )}
                    <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-mono font-bold text-lg tabular-nums">
                      Band {selectedStory.scores.overall.toFixed(1)}
                    </div>
                  </div>
                </div>

                {/* Individual Module Sub-scores */}
                <div className="my-6 grid grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800">
                    <div className="text-xs text-neutral-500 uppercase font-mono">Listening</div>
                    <div className="text-xl font-bold font-mono text-neutral-900 dark:text-neutral-100 mt-1 tabular-nums">
                      {selectedStory.scores.listening.toFixed(1)}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800">
                    <div className="text-xs text-neutral-500 uppercase font-mono">Reading</div>
                    <div className="text-xl font-bold font-mono text-neutral-900 dark:text-neutral-100 mt-1 tabular-nums">
                      {selectedStory.scores.reading.toFixed(1)}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800">
                    <div className="text-xs text-neutral-500 uppercase font-mono">Writing</div>
                    <div className="text-xl font-bold font-mono text-neutral-900 dark:text-neutral-100 mt-1 tabular-nums">
                      {selectedStory.scores.writing.toFixed(1)}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800">
                    <div className="text-xs text-neutral-500 uppercase font-mono">Speaking</div>
                    <div className="text-xl font-bold font-mono text-neutral-900 dark:text-neutral-100 mt-1 tabular-nums">
                      {selectedStory.scores.speaking.toFixed(1)}
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="space-y-3">
                  <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <p className="text-xs sm:text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    "{selectedStory.testimonial}"
                  </p>
                </div>
              </div>

              {/* Destination University */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Destination:</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {selectedStory.university}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STUDENT_STORIES.map((story: StudentStory) => {
            const isSelected = selectedStory.id === story.id;
            return (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-blue-600 dark:border-blue-500 bg-blue-50/40 dark:bg-blue-950/20 shadow-xs'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {story.name}
                  </span>
                  <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-blue-600 text-white">
                    {story.scores.overall.toFixed(1)}
                  </span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 mb-2">
                  {story.university}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-2">
                  <span>L:{story.scores.listening}</span>
                  <span>R:{story.scores.reading}</span>
                  <span>W:{story.scores.writing}</span>
                  <span>S:{story.scores.speaking}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
