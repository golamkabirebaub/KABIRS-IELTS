import { useState } from 'react';
import { 
  rawToBandListening, 
  rawToBandReadingAcademic, 
  rawToBandReadingGeneral, 
  calculateOverallBand 
} from '../data/ieltsData';
import { Calculator, CheckCircle2, Globe2, HelpCircle } from 'lucide-react';

interface BandScoreCalculatorProps {
  onOpenBookingWithBand?: (band: number) => void;
}

export function BandScoreCalculator({ onOpenBookingWithBand }: BandScoreCalculatorProps) {
  const [examType, setExamType] = useState<'academic' | 'general'>('academic');
  const [listeningRaw, setListeningRaw] = useState<number>(34); // ~7.5
  const [readingRaw, setReadingRaw] = useState<number>(33);    // ~7.5
  const [writingBand, setWritingBand] = useState<number>(7.0);
  const [speakingBand, setSpeakingBand] = useState<number>(7.5);

  const listeningBand = rawToBandListening(listeningRaw);
  const readingBand = examType === 'academic' 
    ? rawToBandReadingAcademic(readingRaw) 
    : rawToBandReadingGeneral(readingRaw);

  const overallBand = calculateOverallBand(listeningBand, readingBand, writingBand, speakingBand);

  const getUniversityList = (band: number) => {
    if (band >= 8.0) {
      return {
        tier: 'Tier 1 Global Elite',
        color: 'text-emerald-600 dark:text-emerald-400',
        institutions: [
          'University of Oxford & Cambridge (UK)',
          'Harvard, Stanford & MIT (USA)',
          'Imperial College London (UK)',
          'University of Toronto (Canada)',
          'University of Melbourne (Australia)'
        ],
        clb: 'CLB 10+ (Maximum Express Entry Points for Canada PR)'
      };
    } else if (band >= 7.5) {
      return {
        tier: 'Top 50 World Universities',
        color: 'text-blue-600 dark:text-blue-400',
        institutions: [
          'UCL, King\'s College & Edinburgh (UK)',
          'University of British Columbia (Canada)',
          'University of Sydney & UNSW (Australia)',
          'National University of Singapore (NUS)',
          'Direct Entry to Medical & Law Faculties'
        ],
        clb: 'CLB 9–10 (High Express Entry Immigration Rank)'
      };
    } else if (band >= 7.0) {
      return {
        tier: 'Top 150 Global Universities',
        color: 'text-sky-600 dark:text-sky-400',
        institutions: [
          'University of Manchester & Warwick (UK)',
          'McGill University (Canada)',
          'Monash University (Australia)',
          'Technical University of Munich (Germany English track)',
          'Canadian Express Entry Standard Gateway'
        ],
        clb: 'CLB 8 (Eligible for all Post-Grad & Skilled Migration)'
      };
    } else {
      return {
        tier: 'Standard International Entry',
        color: 'text-amber-600 dark:text-amber-400',
        institutions: [
          'Standard UK & Australian Undergraduate Degree Programs',
          'Canadian Community Colleges & Work Permit Programs',
          'European English-taught Bachelor Degrees'
        ],
        clb: 'CLB 7 (Minimum benchmark for work & study visas)'
      };
    }
  };

  const currentEligibility = getUniversityList(overallBand);

  const applyPreset = (target: number) => {
    if (target === 8.5) {
      setListeningRaw(38);
      setReadingRaw(38);
      setWritingBand(8.0);
      setSpeakingBand(8.5);
    } else if (target === 7.5) {
      setListeningRaw(34);
      setReadingRaw(34);
      setWritingBand(7.0);
      setSpeakingBand(7.5);
    } else if (target === 7.0) {
      setListeningRaw(31);
      setReadingRaw(30);
      setWritingBand(6.5);
      setSpeakingBand(7.0);
    }
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              <span>Official IELTS Band Score Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Interactive Band Calculator & University Matcher
            </h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              Input your raw test scores to calculate your exact official overall band using official IELTS half-band rounding algorithms.
            </p>
          </div>

          {/* Module Selector (Academic vs General) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/80 dark:border-neutral-800 shrink-0">
            <button
              onClick={() => setExamType('academic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                examType === 'academic'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100'
              }`}
            >
              IELTS Academic
            </button>
            <button
              onClick={() => setExamType('general')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                examType === 'general'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100'
              }`}
            >
              IELTS General Training
            </button>
          </div>
        </div>

        {/* 2-Zone Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Zone: Interactive Score Sliders */}
          <div className="lg:col-span-7 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4">
              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Individual Module Breakdown
              </span>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>Presets:</span>
                <button
                  onClick={() => applyPreset(7.0)}
                  className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  7.0
                </button>
                <button
                  onClick={() => applyPreset(7.5)}
                  className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  7.5
                </button>
                <button
                  onClick={() => applyPreset(8.5)}
                  className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  8.5+
                </button>
              </div>
            </div>

            {/* Listening Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Listening Module (Raw Score out of 40)
                </span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-neutral-500">{listeningRaw}/40 correct</span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold">
                    Band {listeningBand.toFixed(1)}
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={listeningRaw}
                onChange={(e) => setListeningRaw(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                <span>0</span>
                <span>16 (Band 5.0)</span>
                <span>26 (Band 6.5)</span>
                <span>35 (Band 8.0)</span>
                <span>40 (Band 9.0)</span>
              </div>
            </div>

            {/* Reading Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Reading Module ({examType === 'academic' ? 'Academic' : 'General'} Raw Score)
                </span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-neutral-500">{readingRaw}/40 correct</span>
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold">
                    Band {readingBand.toFixed(1)}
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={readingRaw}
                onChange={(e) => setReadingRaw(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                <span>0</span>
                <span>15 (Band 5.0)</span>
                <span>27 (Band 6.5)</span>
                <span>35 (Band 8.0)</span>
                <span>40 (Band 9.0)</span>
              </div>
            </div>

            {/* Writing Step Buttons */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Writing Module (Task 1 & Task 2)
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-bold">
                  Band {writingBand.toFixed(1)}
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {[5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5].map((band) => (
                  <button
                    key={band}
                    onClick={() => setWritingBand(band)}
                    className={`py-2 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                      writingBand === band
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-transparent shadow-xs'
                        : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {band.toFixed(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Speaking Step Buttons */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Speaking Module (Examiner 1-on-1 Interview)
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-bold">
                  Band {speakingBand.toFixed(1)}
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {[5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5].map((band) => (
                  <button
                    key={band}
                    onClick={() => setSpeakingBand(band)}
                    className={`py-2 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                      speakingBand === band
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-transparent shadow-xs'
                        : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {band.toFixed(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Official Rounding Explainer */}
            <div className="pt-2 flex items-start gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
              <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>
                <strong>Official IELTS Half-Band Rule:</strong> The average of the four components is rounded to the nearest half or whole band. For instance, an average of 7.25 rounds up to 7.5; an average of 7.75 rounds up to 8.0.
              </span>
            </div>
          </div>

          {/* Right Zone: Target Band Display & Global University Matcher */}
          <div className="lg:col-span-5 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-1">
                Projected Overall IELTS Band
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold font-mono tracking-tight text-neutral-950 dark:text-neutral-50 tabular-nums">
                  {overallBand.toFixed(1)}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  {examType === 'academic' ? 'Academic' : 'General Training'}
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                Raw mean: {((listeningBand + readingBand + writingBand + speakingBand) / 4).toFixed(3)} → Official Rounded Result
              </p>
            </div>

            {/* Individual Sub-Scores Summary */}
            <div className="grid grid-cols-4 gap-2 text-center py-3 border-y border-neutral-100 dark:border-neutral-800 font-mono">
              <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950">
                <div className="text-[10px] text-neutral-400">L</div>
                <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{listeningBand.toFixed(1)}</div>
              </div>
              <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950">
                <div className="text-[10px] text-neutral-400">R</div>
                <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{readingBand.toFixed(1)}</div>
              </div>
              <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950">
                <div className="text-[10px] text-neutral-400">W</div>
                <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{writingBand.toFixed(1)}</div>
              </div>
              <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-950">
                <div className="text-[10px] text-neutral-400">S</div>
                <div className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{speakingBand.toFixed(1)}</div>
              </div>
            </div>

            {/* University & Immigration Matcher */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Global Admissions Match ({currentEligibility.tier})</span>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 space-y-2">
                <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                  Eligible Institutions & Programs:
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {currentEligibility.institutions.map((inst, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60 text-[11px] text-neutral-500">
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Canadian Immigration:</span> {currentEligibility.clb}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#courses"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Find Course for Target Band {overallBand.toFixed(1)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
