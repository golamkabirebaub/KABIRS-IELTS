import { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/projects';
import { ArrowUpRight, Quote } from 'lucide-react';

interface CaseStudiesProps {
  onSelectProject: (client: string) => void;
}

export function CaseStudies({ onSelectProject }: CaseStudiesProps) {
  const [selectedId, setSelectedId] = useState<string>('ara-ceramics');
  const activeStudy = CASE_STUDIES.find(c => c.id === selectedId) || CASE_STUDIES[0];

  return (
    <section id="work" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-3">
              Selected Works & Documented Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Measurable outcomes, not vanity metrics
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              Every digital release is engineered against hard commercial objectives: revenue velocity, latency reduction, and qualified pipeline.
            </p>
          </div>

          {/* Clean Segmented Filter (Allowed interactive buttons §1.A) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg shrink-0 overflow-x-auto">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedId === study.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50'
                }`}
              >
                {study.client.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Split */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative aspect-4/3 lg:aspect-auto bg-neutral-100 dark:bg-neutral-950 overflow-hidden min-h-[340px]">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                {/* Zero-Pill: Clean unboxed metadata with typographic separators */}
                <div className="text-xs font-mono text-white/90 bg-neutral-950/60 backdrop-blur-xs px-3 py-1 rounded">
                  <span>{activeStudy.sector}</span>
                  <span className="mx-2">·</span>
                  <span>{activeStudy.year}</span>
                </div>
              </div>
            </div>

            {/* Narrative & Proof Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Client Case Study · {activeStudy.client}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-snug">
                  {activeStudy.title}
                </h3>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {activeStudy.description}
                </p>

                {/* Quantitative Impact Box */}
                <div className="mt-6 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/80 border border-neutral-200/80 dark:border-neutral-800">
                  <div className="text-3xl font-bold font-mono tracking-tight text-neutral-950 dark:text-neutral-50 tabular-nums">
                    {activeStudy.impactMetric}
                  </div>
                  <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-1">
                    {activeStudy.metricLabel}
                  </div>
                </div>

                {/* Deliverables Unboxed List */}
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                    Delivered System Components
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                    {activeStudy.deliverables.map((item, idx) => (
                      <span key={idx}>
                        {item} {idx < activeStudy.deliverables.length - 1 && '·'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Attributable Testimonial Quote */}
              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                <Quote className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                <p className="text-xs sm:text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  "{activeStudy.testimonial.quote}"
                </p>
                <div className="text-xs">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {activeStudy.testimonial.author}
                  </span>
                  <span className="text-neutral-400 mx-1.5">/</span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    {activeStudy.testimonial.role}, {activeStudy.testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Grid Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.filter((c) => c.id !== selectedId).map((study: CaseStudy) => (
            <div
              key={study.id}
              onClick={() => setSelectedId(study.id)}
              className="group border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900/40 p-5 cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-950 mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Clean unboxed text metadata */}
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
                  <span>{study.client}</span>
                  <span className="mx-1.5">·</span>
                  <span>{study.year}</span>
                </div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 line-clamp-2">
                  {study.title}
                </h4>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold font-mono text-neutral-950 dark:text-neutral-50 tabular-nums">
                    {study.impactMetric}
                  </span>
                  <span className="text-[11px] text-neutral-500 block truncate max-w-[160px]">
                    {study.metricLabel}
                  </span>
                </div>
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
