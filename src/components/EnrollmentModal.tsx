import { useState } from 'react';
import { X, CheckCircle2, Download, Send, Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export function EnrollmentModal({ isOpen, onClose, preselectedCourse }: EnrollmentModalProps) {
  const [course, setCourse] = useState(preselectedCourse || 'IELTS Comprehensive Masterclass');
  const [examType, setExamType] = useState<'Academic' | 'General Training'>('Academic');
  const [targetBand, setTargetBand] = useState('7.5');
  const [mode, setMode] = useState<'In-Person (Campus)' | 'Live Online (Interactive Zoom)'>('In-Person (Campus)');
  
  // Contact details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('Tomorrow · 11:00 AM');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedPass, setConfirmedPass] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Please provide your active WhatsApp or mobile number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const confirmationId = `KI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedPass({
        id: confirmationId,
        name,
        phone,
        email,
        course,
        examType,
        targetBand,
        mode,
        date: preferredDate,
        venue: mode.includes('Campus') 
          ? "Kabir's IELTS Main Campus · Level 4, Concord Tower, Banani, Dhaka" 
          : "Live Proctored Room via Zoom (Link dispatched to email)",
        issuedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
    }, 600);
  };

  const downloadPass = () => {
    if (!confirmedPass) return;
    const content = `KABIR'S IELTS ACADEMY · OFFICIAL DIAGNOSTIC ADMISSION PASS
============================================================
Confirmation Token: ${confirmedPass.id}
Candidate Name: ${confirmedPass.name}
Phone / WhatsApp: ${confirmedPass.phone}
Email: ${confirmedPass.email}
Registered Course: ${confirmedPass.course}
Module Track: IELTS ${confirmedPass.examType}
Target Band Score: Band ${confirmedPass.targetBand}
Delivery Mode: ${confirmedPass.mode}
Diagnostic Slot: ${confirmedPass.date}
Venue / Access: ${confirmedPass.venue}
Date Issued: ${confirmedPass.issuedAt}

TEST DAY INSTRUCTIONS:
1. Please bring a government photo ID or original passport.
2. The diagnostic assessment includes a 30-min listening test, 40-min reading test, and 15-min speaking interview with Golam Kabir.
3. You will receive an itemized band evaluation and study roadmap immediately following your session.
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kabirs_IELTS_Pass_${confirmedPass.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmedPass ? (
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono font-semibold mb-2">
              Official Candidate Registration
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Book Free IELTS Diagnostic Assessment
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Take a full 4-skill diagnostic mock test and receive a personalized band score roadmap directly from master mentor Golam Kabir.
            </p>

            {errorMessage && (
              <div className="mt-4 p-2.5 text-xs text-rose-600 bg-rose-50 dark:bg-rose-950/50 rounded-lg border border-rose-200 dark:border-rose-900">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              {/* Exam Track & Target Band */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Exam Module
                  </label>
                  <select
                    value={examType}
                    onChange={(e: any) => setExamType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden"
                  >
                    <option value="Academic">IELTS Academic (Higher Ed)</option>
                    <option value="General Training">IELTS General Training (Immigration/PR)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Target Band
                  </label>
                  <select
                    value={targetBand}
                    onChange={(e) => setTargetBand(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden"
                  >
                    <option value="6.5">Band 6.5</option>
                    <option value="7.0">Band 7.0</option>
                    <option value="7.5">Band 7.5 (Most Common)</option>
                    <option value="8.0">Band 8.0</option>
                    <option value="8.5">Band 8.5+</option>
                  </select>
                </div>
              </div>

              {/* Course Track */}
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Desired Course / Batch
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden"
                >
                  <option>IELTS Comprehensive Masterclass (8 Weeks)</option>
                  <option>IELTS Crash Band Booster (4 Weeks)</option>
                  <option>Writing & Speaking 1-on-1 Mentorship</option>
                  <option>Computer-Delivered IELTS Lab Pass (20 Mocks)</option>
                </select>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Preferred Attendance Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMode('In-Person (Campus)')}
                    className={`py-2 px-3 rounded-lg border text-left transition-all ${
                      mode === 'In-Person (Campus)'
                        ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    In-Person (Campus Lab)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('Live Online (Interactive Zoom)')}
                    className={`py-2 px-3 rounded-lg border text-left transition-all ${
                      mode === 'Live Online (Interactive Zoom)'
                        ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    Live Online (Zoom)
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Golam Kabir"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    WhatsApp / Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1700-000000"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Preferred Diagnostic Assessment Slot
                </label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden"
                >
                  <option>Tomorrow · 11:00 AM (Morning Session)</option>
                  <option>Tomorrow · 4:00 PM (Afternoon Session)</option>
                  <option>This Friday · 3:30 PM (Weekend Slot)</option>
                  <option>This Saturday · 10:30 AM (Weekend Slot)</option>
                  <option>Custom Weekday Evening (6:30 PM)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer disabled:opacity-50 shadow-xs"
                >
                  {isSubmitting ? (
                    'Generating Admission Pass...'
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Confirm Diagnostic Test Booking (Free)
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center">
                100% Free of charge. No payment required for the initial diagnostic assessment.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Pass Screen */
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                Diagnostic Slot Confirmed!
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                Your appointment pass has been registered in the Kabir's IELTS system. An SMS reminder has also been sent to {confirmedPass.phone}.
              </p>
            </div>

            {/* Visual Admission Pass Ticket */}
            <div className="p-5 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">KABIR'S IELTS ACADEMY</span>
                <span className="font-bold text-neutral-900 dark:text-neutral-100">{confirmedPass.id}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-neutral-400 block">Candidate:</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{confirmedPass.name}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Target Band:</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">Band {confirmedPass.targetBand} ({confirmedPass.examType})</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Slot Time:</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{confirmedPass.date}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block">Course:</span>
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{confirmedPass.course}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 text-[11px]">
                <span className="text-neutral-400 block">Venue / Access:</span>
                <span className="text-neutral-700 dark:text-neutral-300 font-sans">{confirmedPass.venue}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={downloadPass}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Admission Pass (.txt)
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
