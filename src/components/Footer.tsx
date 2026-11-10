import { ArrowUp, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-100/80 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Kabir's IELTS Academy</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-neutral-500 dark:text-neutral-400">
              Premier IELTS & English language training academy founded by master mentor Golam Kabir. Empowering candidates with British Council & IDP aligned diagnostic curriculum and computer-delivered testing simulations.
            </p>
            <div className="text-[11px] text-neutral-400 pt-1 font-mono">
              Official Registration Partner for British Council & IDP Bangladesh
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              Courses
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  IELTS Masterclass (8 Wks)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Crash Booster (4 Wks)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  1-on-1 Writing & Speaking
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Computer-Delivered Lab
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              Diagnostic Tools
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Band Score Calculator
                </a>
              </li>
              <li>
                <a href="#mock-lab" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Listening Audio Simulator
                </a>
              </li>
              <li>
                <a href="#mock-lab" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Speaking Cue Card Timer
                </a>
              </li>
              <li>
                <a href="#mock-lab" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Writing Rubric Analyzer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              Campus Locations & Helpline
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Level 4, Concord Tower, Kamal Ataturk Avenue, Banani, Dhaka</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>+880 1711-234567 / +880 1911-987654</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>admissions@kabirsielts.com</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3 h-3" />
                Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-14 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Kabir's IELTS Academy. All rights reserved. IELTS is a registered trademark of University of Cambridge ESOL, the British Council, and IDP Education Australia.
          </div>
          <div className="flex items-center gap-3">
            <span className="hover:underline cursor-pointer">Admissions Terms</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Score Guarantee Policy</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Privacy Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
