import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ onOpenBooking, isDarkMode, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-md border-neutral-200/80 dark:border-neutral-800/80 shadow-xs'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark with icon */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span>Kabir's IELTS</span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            <a
              href="#courses"
              className="hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Courses
            </a>
            <a
              href="#calculator"
              className="hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Band Calculator
            </a>
            <a
              href="#mock-lab"
              className="hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Mock Test Lab
            </a>
            <a
              href="#success-stories"
              className="hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Success Stories
            </a>
            <a
              href="#batches"
              className="hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Batches & Schedule
            </a>
          </nav>

          {/* Zone 3: 1 primary action + theme toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleTheme}
              className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            >
              Free Diagnostic Test
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-6 py-4 space-y-3">
          <a
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 py-2 hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            IELTS Courses & Tracks
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 py-2 hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            Official Band Score Calculator
          </a>
          <a
            href="#mock-lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 py-2 hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            Computer-Delivered Mock Lab
          </a>
          <a
            href="#success-stories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 py-2 hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            Student Results & Testimonials
          </a>
          <a
            href="#batches"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 py-2 hover:text-neutral-950 dark:hover:text-neutral-50"
          >
            Upcoming Batch Timings
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              Book Free Diagnostic Test
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
