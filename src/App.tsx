/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BandScoreCalculator } from './components/BandScoreCalculator';
import { MockTestSimulator } from './components/MockTestSimulator';
import { CoursesSection } from './components/CoursesSection';
import { BatchSchedule } from './components/BatchSchedule';
import { SuccessStories } from './components/SuccessStories';
import { TrainerBio } from './components/TrainerBio';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kabirs-ielts-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState<string>(
    'IELTS Comprehensive Masterclass (8 Weeks)'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('kabirs-ielts-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('kabirs-ielts-theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourseForBooking(courseName);
    setIsBookingOpen(true);
  };

  const handleReserveBatch = (batchDetails: string) => {
    setSelectedCourseForBooking(batchDetails);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* Hero Section & Proposition */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Interactive Official IELTS Band Score Calculator */}
        <BandScoreCalculator
          onOpenBookingWithBand={(band) => {
            setSelectedCourseForBooking(`Target Band ${band.toFixed(1)} Coaching Program`);
            setIsBookingOpen(true);
          }}
        />

        {/* Computer-Delivered IELTS Diagnostic Mock Simulator */}
        <MockTestSimulator />

        {/* Structured Course Tracks & Pricing */}
        <CoursesSection onSelectCourse={handleSelectCourse} />

        {/* Upcoming Batch Schedule & Live Seat Counter */}
        <BatchSchedule onReserveBatch={handleReserveBatch} />

        {/* Verified Candidate Scorecards & Testimonials */}
        <SuccessStories />

        {/* Master Mentor Golam Kabir Profile & Methodology */}
        <TrainerBio />

        {/* Candidate FAQ */}
        <FaqSection />
      </main>

      {/* Footer & Accreditations */}
      <Footer />

      {/* Free Diagnostic Assessment & Enrollment Modal */}
      <EnrollmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedCourse={selectedCourseForBooking}
      />
    </div>
  );
}
