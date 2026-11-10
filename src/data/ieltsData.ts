export interface Course {
  id: string;
  name: string;
  badge?: string;
  duration: string;
  classes: string;
  mockTests: string;
  targetBand: string;
  fee: string;
  description: string;
  features: string[];
  idealFor: string;
}

export const COURSES: Course[] = [
  {
    id: 'regular-masterclass',
    name: 'IELTS Comprehensive Masterclass',
    badge: 'Most Popular',
    duration: '8 Weeks',
    classes: '36 Hours Live Sessions',
    mockTests: '12 Full-Length Computer & Paper Mocks',
    targetBand: '7.5 – 8.5+',
    fee: 'BDT 16,500',
    description: 'Our flagship exhaustive preparation track covering all 4 modules (Listening, Reading, Writing, Speaking) with individual diagnostic reviews after every mock.',
    features: [
      '36 Hours of interactive masterclasses by Golam Kabir',
      '12 Proctored computer-delivered & paper mock exams',
      'Unlimited 1-on-1 speaking interview practice slots',
      'Line-by-line feedback on 24 written Task 1 & Task 2 essays',
      'Original Cambridge IELTS 14–19 Book Series included',
      'Free test retake guarantee if target band is not met'
    ],
    idealFor: 'Students targeting Tier-1 universities in the UK, Canada, Australia, and USA.'
  },
  {
    id: 'crash-booster',
    name: 'IELTS Crash Band Booster',
    duration: '4 Weeks',
    classes: '24 Hours Intensive',
    mockTests: '8 Full-Length Mocks',
    targetBand: '7.0 – 8.0',
    fee: 'BDT 12,000',
    description: 'Fast-track targeted training focused on high-scoring strategies, time-saving reading techniques, and writing band descriptor mastery.',
    features: [
      'Speed-reading & keyword locator strategies for 40/40 reading',
      'Task 2 essay blueprints that consistently score 7.5+',
      'Pronunciation, fluency, and idiomatic speaking drills',
      '8 Timed computer-delivered mock tests with instant scoring',
      'Complete digital strategy workbook & audio archive'
    ],
    idealFor: 'Candidates with an upcoming exam date within 30-45 days.'
  },
  {
    id: 'writing-speaking-1on1',
    name: 'Writing & Speaking 1-on-1 Diagnostic Mentorship',
    duration: '4 Weeks (Flexible)',
    classes: '16 Private 1-on-1 Sessions',
    mockTests: '6 Diagnostic Speaking Tests',
    targetBand: '8.0 – 9.0',
    fee: 'BDT 18,500',
    description: 'Dedicated private coaching exclusively focused on the two subjective IELTS modules where students most frequently get stuck at Band 6.0 or 6.5.',
    features: [
      'Private 1-on-1 video/in-person sessions directly with Kabir',
      'Detailed examiner rubric breakdown: TR, CC, LR, GRA',
      'Audio recording analysis with phoneme and intonation feedback',
      'Vocabulary upgrades from common B2 to sophisticated C1/C2 lexemes',
      'Personalized essay rewrite templates for academic task 1 & 2'
    ],
    idealFor: 'Professionals and doctors needing minimum 7.5 or 8.0 in Writing/Speaking for immigration & medical licensing.'
  },
  {
    id: 'computer-delivered-lab',
    name: 'Computer-Delivered IELTS Lab & Simulation Pass',
    duration: '6 Weeks',
    classes: 'Lab Access + Weekly Review',
    mockTests: '20 Authentic Computer Mocks',
    targetBand: 'Target Band Guarantee',
    fee: 'BDT 9,500',
    description: 'Full access to our state-of-the-art computer testing lab running the exact interface used in official British Council and IDP test centers.',
    features: [
      'Identical official CD-IELTS interface and keyboard shortcuts',
      'High-fidelity noise-cancelling headsets for listening practice',
      'Automatic instant raw score and band conversion on Reading & Listening',
      'Teacher assessment and feedback on all written responses',
      'Flexible booking: Morning, afternoon, or evening test slots'
    ],
    idealFor: 'Candidates registered for the Computer-Delivered IELTS exam.'
  }
];

export interface StudentStory {
  id: string;
  name: string;
  targetCountry: string;
  university: string;
  scores: {
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
    overall: number;
  };
  previousScore?: number;
  testimonial: string;
  batch: string;
}

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'tanvir-ahmed',
    name: 'Tanvir Ahmed',
    targetCountry: 'United Kingdom',
    university: 'University of Edinburgh (MSc Data Science)',
    scores: {
      listening: 9.0,
      reading: 8.5,
      writing: 7.5,
      speaking: 8.0,
      overall: 8.5
    },
    previousScore: 6.5,
    testimonial: 'I was previously stuck at Band 6.5 in Writing twice. Kabir Sir broke down the exact paragraph coherence formula that examiners look for. Jumping from 6.5 to 8.5 overall unlocked my full scholarship!',
    batch: 'Comprehensive Masterclass · Batch 42'
  },
  {
    id: 'nusrat-jahan',
    name: 'Nusrat Jahan',
    targetCountry: 'Canada',
    university: 'University of Toronto (Express Entry PR)',
    scores: {
      listening: 8.5,
      reading: 8.0,
      writing: 7.5,
      speaking: 8.0,
      overall: 8.0
    },
    previousScore: 7.0,
    testimonial: 'The mock test environment at Kabir\'s IELTS is identical to the actual exam day. When I sat for my test at British Council, I experienced zero panic because I had already completed 12 authentic mocks here.',
    batch: 'Writing & Speaking Intensive · Batch 39'
  },
  {
    id: 'sayed-rafiqul',
    name: 'Sayed Rafiqul Islam',
    targetCountry: 'Australia',
    university: 'University of Melbourne (Master of Engineering)',
    scores: {
      listening: 9.0,
      reading: 9.0,
      writing: 7.0,
      speaking: 8.0,
      overall: 8.5
    },
    previousScore: 6.5,
    testimonial: 'Scoring 9.0 in both Listening and Reading was a dream. Kabir Sir\'s keyword mapping and elimination techniques took away all the guesswork in True/False/Not Given questions.',
    batch: 'Computer-Delivered Lab Pass · Batch 44'
  },
  {
    id: 'farhana-yasmin',
    name: 'Farhana Yasmin',
    targetCountry: 'United States',
    university: 'Johns Hopkins University (Postdoc Fellowship)',
    scores: {
      listening: 8.5,
      reading: 8.5,
      writing: 8.0,
      speaking: 8.5,
      overall: 8.5
    },
    testimonial: 'Personalized 1-on-1 feedback on my speaking fluency made all the difference. Kabir Sir pointed out subtle grammatical fillers and replaced them with cohesive academic connectors.',
    batch: '1-on-1 Executive Coaching · Batch 40'
  }
];

export interface BatchItem {
  id: string;
  course: string;
  type: 'In-Person (Campus)' | 'Live Online (Interactive Zoom)';
  days: string;
  time: string;
  startDate: string;
  seatsLeft: number;
  totalSeats: number;
}

export const UPCOMING_BATCHES: BatchItem[] = [
  {
    id: 'b-101',
    course: 'IELTS Comprehensive Masterclass',
    type: 'In-Person (Campus)',
    days: 'Sat, Mon, Wed',
    time: '10:00 AM – 12:00 PM',
    startDate: 'March 15, 2026',
    seatsLeft: 3,
    totalSeats: 20
  },
  {
    id: 'b-102',
    course: 'IELTS Comprehensive Masterclass',
    type: 'In-Person (Campus)',
    days: 'Sun, Tue, Thu',
    time: '6:30 PM – 8:30 PM (Evening)',
    startDate: 'March 18, 2026',
    seatsLeft: 5,
    totalSeats: 20
  },
  {
    id: 'b-103',
    course: 'IELTS Crash Band Booster (4 Weeks)',
    type: 'Live Online (Interactive Zoom)',
    days: 'Everyday (Mon–Fri)',
    time: '8:00 PM – 9:30 PM',
    startDate: 'March 22, 2026',
    seatsLeft: 4,
    totalSeats: 25
  },
  {
    id: 'b-104',
    course: 'Writing & Speaking 1-on-1 Mentorship',
    type: 'In-Person (Campus)',
    days: 'Custom Flexible Schedule',
    time: 'Custom Slots',
    startDate: 'Rolling Admissions',
    seatsLeft: 2,
    totalSeats: 8
  }
];

// Official IELTS raw to band score conversion lookup
export function rawToBandListening(raw: number): number {
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 32) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 26) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 18) return 5.5;
  if (raw >= 16) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  if (raw >= 6) return 3.5;
  if (raw >= 4) return 3.0;
  return 2.5;
}

export function rawToBandReadingAcademic(raw: number): number {
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 33) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 27) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 19) return 5.5;
  if (raw >= 15) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  if (raw >= 6) return 3.5;
  return 3.0;
}

export function rawToBandReadingGeneral(raw: number): number {
  if (raw >= 40) return 9.0;
  if (raw >= 39) return 8.5;
  if (raw >= 37) return 8.0;
  if (raw >= 36) return 7.5;
  if (raw >= 34) return 7.0;
  if (raw >= 32) return 6.5;
  if (raw >= 30) return 6.0;
  if (raw >= 27) return 5.5;
  if (raw >= 23) return 5.0;
  if (raw >= 19) return 4.5;
  if (raw >= 15) return 4.0;
  return 3.5;
}

// Official IELTS half-band rounding rule
export function calculateOverallBand(l: number, r: number, w: number, s: number): number {
  const average = (l + r + w + s) / 4;
  const decimal = average - Math.floor(average);

  if (decimal < 0.25) {
    return Math.floor(average);
  } else if (decimal < 0.75) {
    return Math.floor(average) + 0.5;
  } else {
    return Math.ceil(average);
  }
}
