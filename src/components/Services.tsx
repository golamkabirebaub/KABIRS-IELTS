import { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/projects';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
}

export function Services({ onSelectServiceForEstimate }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-3">
            Core Capabilities & Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Engineered from first principles
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            We don't use off-the-shelf theme drag-and-drops. Every application is custom designed in Figma, built with TypeScript, and compiled to raw, edge-cached web primitives.
          </p>
        </div>

        {/* Editorial Service Accordion / Asymmetric Bento List */}
        <div className="space-y-4">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-900 shadow-xs'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {/* Header row */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                    <span className="font-mono text-sm sm:text-base font-semibold text-neutral-400 dark:text-neutral-500 tabular-nums shrink-0">
                      {service.number}.
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-neutral-50 truncate">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 hidden sm:block truncate">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:inline-block text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      from {service.startingRange} · {service.timeline}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 bg-neutral-100 dark:bg-neutral-800' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
                      <div className="lg:col-span-2 space-y-4">
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                          {service.description}
                        </p>

                        <div>
                          <div className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
                            Included Engineering Deliverables
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.capabilities.map((cap, capIdx) => (
                              <div
                                key={capIdx}
                                className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                              >
                                <Check className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100 shrink-0" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                            Typical Timeline & Investment
                          </div>
                          <div className="text-2xl font-bold font-mono text-neutral-950 dark:text-neutral-50 tabular-nums">
                            {service.startingRange}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400">
                            Typical turnaround: <span className="font-medium text-neutral-900 dark:text-neutral-200">{service.timeline}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onSelectServiceForEstimate(service.title);
                            const el = document.getElementById('calculator');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-50 bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-950 rounded-lg hover:bg-neutral-800 dark:hover:bg-white transition-colors cursor-pointer"
                        >
                          Estimate This Service
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
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
