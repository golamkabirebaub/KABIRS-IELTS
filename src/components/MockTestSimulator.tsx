import { useState, useEffect } from 'react';
import { 
  Headphones, 
  FileText, 
  PenTool, 
  Mic, 
  Play, 
  Pause, 
  RotateCcw, 
  Check, 
  X, 
  Sparkles,
  Timer
} from 'lucide-react';

type ModuleKey = 'listening' | 'reading' | 'writing' | 'speaking';

export function MockTestSimulator() {
  const [activeModule, setActiveModule] = useState<ModuleKey>('listening');

  // Listening state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(25);
  const [listeningAnswers, setListeningAnswers] = useState({
    q1: '',
    q2: '',
    q3: ''
  });
  const [listeningSubmitted, setListeningSubmitted] = useState(false);

  // Reading state (True / False / Not Given)
  const [readingAnswers, setReadingAnswers] = useState<Record<string, string>>({});
  const [readingSubmitted, setReadingSubmitted] = useState(false);

  // Writing state
  const [writingCriterion, setWritingCriterion] = useState<'tr' | 'cc' | 'lr' | 'gra'>('tr');

  // Speaking state (Cue card timer)
  const [cueCardIndex, setCueCardIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPhase, setTimerPhase] = useState<'prep' | 'speak'>('prep');

  // Cue cards list
  const cueCards = [
    {
      topic: 'Describe an ambitious project you worked on that made you proud.',
      bullets: [
        'What the project was and who you collaborated with',
        'What major technical or logistical challenges arose',
        'How you resolved obstacles under time constraints',
        'And explain why achieving this outcome was personally significant.'
      ]
    },
    {
      topic: 'Describe a city or foreign country you would like to study or live in.',
      bullets: [
        'Where this place is located and how you learned about it',
        'What academic or professional opportunities it provides',
        'What aspects of its culture or architectural landscape appeal to you',
        'And explain how living there would impact your long-term career goals.'
      ]
    },
    {
      topic: 'Describe an influential mentor or teacher who shaped your perspective.',
      bullets: [
        'Who this person was and what subject they taught',
        'What unique pedagogical methodology they utilized',
        'A specific piece of advice or feedback they provided you',
        'And explain how their mentorship continues to influence your decisions.'
      ]
    }
  ];

  // Timer effect for speaking
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && timerRunning) {
      if (timerPhase === 'prep') {
        setTimerPhase('speak');
        setTimerSeconds(120);
      } else {
        setTimerRunning(false);
      }
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds, timerPhase]);

  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerPhase('prep');
    setTimerSeconds(60);
  };

  // Simulated audio progress
  useEffect(() => {
    let audioTimer: any = null;
    if (isPlayingAudio) {
      audioTimer = setInterval(() => {
        setAudioProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 500);
    }
    return () => clearInterval(audioTimer);
  }, [isPlayingAudio]);

  return (
    <section id="mock-lab" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Computer-Delivered Testing Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Interactive IELTS Diagnostic Lab
            </h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              Experience the actual British Council / IDP test interface. Test your listening accuracy, reading comprehension, writing criteria, and speaking cue card pacing.
            </p>
          </div>

          {/* Module Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/80 dark:border-neutral-800 shrink-0 overflow-x-auto">
            <button
              onClick={() => setActiveModule('listening')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeModule === 'listening'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50'
              }`}
            >
              <Headphones className="w-3.5 h-3.5 text-blue-600" />
              Listening
            </button>
            <button
              onClick={() => setActiveModule('reading')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeModule === 'reading'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              Reading
            </button>
            <button
              onClick={() => setActiveModule('writing')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeModule === 'writing'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 text-purple-600" />
              Writing Rubric
            </button>
            <button
              onClick={() => setActiveModule('speaking')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeModule === 'speaking'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50'
              }`}
            >
              <Mic className="w-3.5 h-3.5 text-rose-600" />
              Speaking Cue Card
            </button>
          </div>
        </div>

        {/* Main Simulation Container */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm overflow-hidden">
          {/* Top Test Header Bar */}
          <div className="bg-neutral-900 text-white px-6 py-3.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="font-bold tracking-wider text-blue-400">CD-IELTS SIMULATOR</span>
              <span className="opacity-50">·</span>
              <span className="uppercase text-neutral-300">Section {activeModule.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="hidden sm:inline">Kabir's IELTS Academic Testing Suite</span>
              <span className="px-2 py-0.5 rounded bg-neutral-800 text-emerald-400 font-bold">
                PROCTOR ACTIVE
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* MODULE 1: LISTENING */}
            {activeModule === 'listening' && (
              <div className="space-y-6">
                {/* Audio Player Bar */}
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                      aria-label={isPlayingAudio ? 'Pause listening track' : 'Play listening track'}
                    >
                      {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div>
                      <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                        Cambridge Practice 18 · Section 1 Recording
                      </div>
                      <div className="text-[11px] text-neutral-500 font-mono">
                        {isPlayingAudio ? 'Audio playing · British English accent' : 'Click play to simulate listening recording'}
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-64 space-y-1">
                    <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${audioProgress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                      <span>01:12</span>
                      <span>04:30</span>
                    </div>
                  </div>
                </div>

                {/* Question Prompt */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-300">
                    <strong>Instructions:</strong> Complete the notes below. Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.
                  </div>

                  <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-neutral-50/50 dark:bg-neutral-950/40 space-y-4 text-xs sm:text-sm">
                    <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                      Holiday Accommodation Inquiry
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Customer Surname: <span className="font-semibold text-neutral-900 dark:text-neutral-100">Mitchell</span>
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-neutral-800 dark:text-neutral-200">
                      <span>1. Preferred cottage location: near the</span>
                      <input
                        type="text"
                        value={listeningAnswers.q1}
                        onChange={(e) => setListeningAnswers({ ...listeningAnswers, q1: e.target.value })}
                        placeholder="Type answer..."
                        className="px-2.5 py-1 text-xs rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-mono w-44"
                      />
                      {listeningSubmitted && (
                        listeningAnswers.q1.toLowerCase().trim() === 'harbour' || listeningAnswers.q1.toLowerCase().trim() === 'harbor' ? (
                          <span className="text-emerald-600 font-medium flex items-center gap-1 text-xs">
                            <Check className="w-3.5 h-3.5" /> Correct (harbour)
                          </span>
                        ) : (
                          <span className="text-rose-600 font-medium flex items-center gap-1 text-xs">
                            <X className="w-3.5 h-3.5" /> Correct: "harbour"
                          </span>
                        )
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-neutral-800 dark:text-neutral-200">
                      <span>2. Maximum budget per week: £</span>
                      <input
                        type="text"
                        value={listeningAnswers.q2}
                        onChange={(e) => setListeningAnswers({ ...listeningAnswers, q2: e.target.value })}
                        placeholder="Type number..."
                        className="px-2.5 py-1 text-xs rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-mono w-32"
                      />
                      {listeningSubmitted && (
                        listeningAnswers.q2.trim() === '450' ? (
                          <span className="text-emerald-600 font-medium flex items-center gap-1 text-xs">
                            <Check className="w-3.5 h-3.5" /> Correct (450)
                          </span>
                        ) : (
                          <span className="text-rose-600 font-medium flex items-center gap-1 text-xs">
                            <X className="w-3.5 h-3.5" /> Correct: "450" (Speaker rejected 500)
                          </span>
                        )
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-neutral-800 dark:text-neutral-200">
                      <span>3. Essential kitchen facility required: a</span>
                      <input
                        type="text"
                        value={listeningAnswers.q3}
                        onChange={(e) => setListeningAnswers({ ...listeningAnswers, q3: e.target.value })}
                        placeholder="Type answer..."
                        className="px-2.5 py-1 text-xs rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-mono w-44"
                      />
                      {listeningSubmitted && (
                        listeningAnswers.q3.toLowerCase().trim() === 'dishwasher' ? (
                          <span className="text-emerald-600 font-medium flex items-center gap-1 text-xs">
                            <Check className="w-3.5 h-3.5" /> Correct (dishwasher)
                          </span>
                        ) : (
                          <span className="text-rose-600 font-medium flex items-center gap-1 text-xs">
                            <X className="w-3.5 h-3.5" /> Correct: "dishwasher"
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setListeningSubmitted(true)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Verify Answers & Examiner Notes
                    </button>
                    {listeningSubmitted && (
                      <button
                        onClick={() => {
                          setListeningAnswers({ q1: '', q2: '', q3: '' });
                          setListeningSubmitted(false);
                        }}
                        className="px-3 py-2 text-xs text-neutral-600 dark:text-neutral-400 hover:underline"
                      >
                        Reset Drill
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 2: READING */}
            {activeModule === 'reading' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Passage Column */}
                <div className="lg:col-span-7 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 bg-neutral-50/60 dark:bg-neutral-950/60 space-y-3 text-xs leading-relaxed max-h-[380px] overflow-y-auto">
                  <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                    Reading Passage 2 · Academic Excerpt
                  </div>
                  <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                    Computational Linguistics in Deciphering Ancient Scripts
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    For centuries, the decipherment of lost scripts depended almost entirely on multilingual inscriptions like the Rosetta Stone. However, when such bilingual keys are absent, linguists faced near-insurmountable obstacles. Recently, probabilistic machine learning algorithms developed at MIT have successfully deciphered the Linear B script and ancient Ugaritic without requiring prior knowledge of their grammatical structure.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    The algorithm operates under the hypothesis that languages evolve through regular phonetic shifts governed by strict statistical constraints. While some traditional epigraphers initially cautioned against over-relying on automated decoders, subsequent excavations of Aegean clay tablets confirmed the software's readings with over 98% concordance.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Nevertheless, lead researchers emphasize that semantic cultural nuances—such as religious metaphors and idiomatic puns—remain far beyond the capability of current unsupervised neural networks.
                  </p>
                </div>

                {/* Questions Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-300">
                    Do the following statements agree with the information? Select <strong>TRUE, FALSE, or NOT GIVEN</strong>.
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-2">
                      <p className="font-medium text-neutral-800 dark:text-neutral-200">
                        1. The MIT algorithm required complete bilingual translations to decipher Linear B.
                      </p>
                      <div className="flex gap-2">
                        {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setReadingAnswers({ ...readingAnswers, q1: opt })}
                            className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                              readingAnswers.q1 === opt
                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-transparent font-bold'
                                : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {readingSubmitted && (
                        <div className="text-[11px] pt-1 text-emerald-600 dark:text-emerald-400">
                          <strong>Answer: FALSE.</strong> Text states it succeeded "without requiring prior knowledge of their grammatical structure."
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-2">
                      <p className="font-medium text-neutral-800 dark:text-neutral-200">
                        2. Current AI models can accurately interpret ancient religious idioms and metaphors.
                      </p>
                      <div className="flex gap-2">
                        {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setReadingAnswers({ ...readingAnswers, q2: opt })}
                            className={`px-2.5 py-1 text-xs rounded border transition-colors cursor-pointer ${
                              readingAnswers.q2 === opt
                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-transparent font-bold'
                                : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {readingSubmitted && (
                        <div className="text-[11px] pt-1 text-emerald-600 dark:text-emerald-400">
                          <strong>Answer: FALSE.</strong> Text notes religious metaphors remain "far beyond the capability" of current networks.
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setReadingSubmitted(true)}
                    className="w-full py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Check Reading Answers
                  </button>
                </div>
              </div>
            )}

            {/* MODULE 3: WRITING EXAMINER RUBRIC */}
            {activeModule === 'writing' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold mb-1">
                    IELTS ACADEMIC & GENERAL WRITING TASK 2
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    Topic: "Some people argue that tertiary education should be fully funded by the state, while others contend that students should pay their own tuition. Discuss both views and give your opinion."
                  </h4>
                </div>

                {/* Examiner 4-Criteria Selector */}
                <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <span className="text-xs font-medium text-neutral-500 mr-2">Highlight Examiner Criteria:</span>
                  <button
                    onClick={() => setWritingCriterion('tr')}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      writingCriterion === 'tr'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    Task Response (TR)
                  </button>
                  <button
                    onClick={() => setWritingCriterion('cc')}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      writingCriterion === 'cc'
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    Coherence & Cohesion (CC)
                  </button>
                  <button
                    onClick={() => setWritingCriterion('lr')}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      writingCriterion === 'lr'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    Lexical Resource (LR)
                  </button>
                  <button
                    onClick={() => setWritingCriterion('gra')}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      writingCriterion === 'gra'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    Grammatical Range (GRA)
                  </button>
                </div>

                {/* Model Essay with highlighted annotations */}
                <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 space-y-3 text-xs sm:text-sm leading-relaxed">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span>Candidate Model Essay (Examiner Band: 8.5)</span>
                    <span>Word Count: 284 words</span>
                  </div>

                  <p>
                    The question of whether the state ought to underwrite the cost of university education remains a contentious social debate.{' '}
                    {writingCriterion === 'tr' && (
                      <span className="bg-blue-100 dark:bg-blue-900/50 px-1 py-0.5 rounded font-medium">
                        [TR: Clear thesis presented in introduction outlining both viewpoints and author position]
                      </span>
                    )}{' '}
                    While proponents advocate that tertiary education represents a universal merit good that spurs nationwide socioeconomic mobility, sceptics caution that universal subsidization strains public fiscal coffers.
                  </p>

                  <p>
                    {writingCriterion === 'cc' && (
                      <span className="bg-purple-100 dark:bg-purple-900/50 px-1 py-0.5 rounded font-medium">
                        [CC: Logical progression from societal benefits to counter-arguments with discourse markers]
                      </span>
                    )}{' '}
                    Advocates of state-sponsored tuition emphasize economic democratization.{' '}
                    {writingCriterion === 'lr' && (
                      <span className="bg-emerald-100 dark:bg-emerald-900/50 px-1 py-0.5 rounded font-medium">
                        [LR: Sophisticated academic collocations: "socioeconomic mobility", "fiscal coffers", "economic democratization"]
                      </span>
                    )}{' '}
                    When higher learning is decoupled from personal wealth, meritocratic selection ensures that gifted individuals from disenfranchised backgrounds can enter critical fields such as oncology and renewable engineering.
                  </p>

                  <p>
                    {writingCriterion === 'gra' && (
                      <span className="bg-amber-100 dark:bg-amber-900/50 px-1 py-0.5 rounded font-medium">
                        [GRA: Complex subordinate clauses, fronted adverbials, and conditional inversion structures]
                      </span>
                    )}{' '}
                    Conversely, those who dispute blanket subsidies point to accountability and state resource allocation. Were governments to fund all degrees indiscriminately, taxpayers would inevitably shoulder the financial burden of disciplines with negligible market demand.
                  </p>
                </div>
              </div>
            )}

            {/* MODULE 4: SPEAKING CUE CARD SIMULATOR */}
            {activeModule === 'speaking' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                      IELTS SPEAKING PART 2 (THE LONG TURN)
                    </span>
                    <button
                      onClick={() => {
                        setCueCardIndex((cueCardIndex + 1) % cueCards.length);
                        resetTimer();
                      }}
                      className="text-xs text-blue-600 hover:underline cursor-pointer"
                    >
                      Draw Another Cue Card
                    </button>
                  </div>

                  {/* Cue card paper */}
                  <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs space-y-3">
                    <div className="text-xs font-serif text-neutral-500 uppercase tracking-widest">
                      Candidate Topic Card
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {cueCards[cueCardIndex].topic}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      You should say:
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-800 dark:text-neutral-200 list-disc list-inside">
                      {cueCards[cueCardIndex].bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 text-[11px] text-neutral-500 italic">
                      You will have 1 minute to make notes with pencil and paper, and then 1 to 2 minutes to speak uninterrupted.
                    </div>
                  </div>
                </div>

                {/* Countdown Timer Deck */}
                <div className="lg:col-span-5 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    <Timer className="w-4 h-4 text-rose-600" />
                    <span>
                      {timerPhase === 'prep' ? 'Preparation Time (1 Min)' : 'Candidate Speech Time (2 Mins)'}
                    </span>
                  </div>

                  <div className="text-5xl font-mono font-bold tracking-tight text-neutral-950 dark:text-neutral-50 tabular-nums">
                    {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                  </div>

                  <div className="text-xs text-neutral-500">
                    {timerPhase === 'prep'
                      ? 'Organize your 4 key bullet points and structural connectors.'
                      : 'Speak at a steady cadence. Avoid rushing and focus on coherence.'}
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={toggleTimer}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-950 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      {timerRunning ? 'Pause Timer' : 'Start Preparation'}
                    </button>
                    <button
                      onClick={resetTimer}
                      className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Reset Timer"
                      aria-label="Reset timer"
                    >
                      <RotateCcw className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
