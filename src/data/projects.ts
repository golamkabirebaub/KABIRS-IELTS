export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  sector: string;
  impactMetric: string;
  metricLabel: string;
  description: string;
  deliverables: string[];
  image: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ara-ceramics',
    title: 'Minimalist Commerce Engine for Artisanal Objects',
    client: 'ARA Stoneware & Ceramics',
    year: '2026',
    sector: 'Luxury Retail & Craft',
    impactMetric: '+168%',
    metricLabel: 'Direct-to-Consumer Revenue in First 90 Days',
    description: 'Engineered a bespoke headless storefront with sub-second page transitions, dynamic tactile material zooms, and seamless checkout optimization.',
    deliverables: ['Custom Storefront', 'Shopify Plus Integration', 'Brand Design System', 'Global Multi-currency'],
    image: '/src/assets/images/project_editorial_commerce_1794288415800.jpg',
    testimonial: {
      quote: 'Aura transformed our artisan brand from a boutique local pottery studio into a premier international design name. Our international orders grew 300% within two months.',
      author: 'Elena Vasquez',
      role: 'Creative Director & Founder',
      company: 'ARA Ceramics'
    }
  },
  {
    id: 'spectra-analytics',
    title: 'High-Density Intelligence Dashboard for FinTech',
    client: 'Spectra Data Systems',
    year: '2026',
    sector: 'Enterprise Software & Analytics',
    impactMetric: '+210%',
    metricLabel: 'Trial-to-Paid Conversion Rate Increase',
    description: 'Re-architected an algorithmic streaming analytics suite into a fluid, accessible web app with zero-latency data visualization and keyboard shortcuts.',
    deliverables: ['Web Application Frontend', 'Design Token System', 'Real-time Charting', 'WCAG AA Compliance'],
    image: '/src/assets/images/project_saas_platform_1794288415497.jpg',
    testimonial: {
      quote: 'The speed and clarity of the new frontend helped us close six-figure enterprise contracts that had previously stalled on UX friction.',
      author: 'Marcus Vance',
      role: 'VP of Product',
      company: 'Spectra Data Systems'
    }
  },
  {
    id: 'monolith-pavilion',
    title: 'Architectural Exhibition Archive & Ticket Platform',
    client: 'Monolith Cultural Foundation',
    year: '2025',
    sector: 'Architecture & Institutional',
    impactMetric: '45,000+',
    metricLabel: 'Exhibition Visitors & Ticket Reservations in 4 Weeks',
    description: 'Designed an editorial broadsheet experience documenting brutalist and contemporary pavilions, integrating smooth WebGL spatial transitions and reservation flow.',
    deliverables: ['Interactive Exhibition Map', 'Bespoke Ticketing Flow', 'Architectural Archive', 'Multilingual Support'],
    image: '/src/assets/images/project_architectural_portfolio_1794288416371.jpg',
    testimonial: {
      quote: 'Visitors routinely praise the digital experience as an artwork in itself. Aura treated our concrete structures with rare digital craftsmanship.',
      author: 'Dr. Kenzo Hayashi',
      role: 'Chief Curator',
      company: 'Monolith Cultural Foundation'
    }
  },
  {
    id: 'lardoise-culinary',
    title: 'Sensory Dining Identity & Reservation Flagship',
    client: "L'Ardoise Gastronomy",
    year: '2025',
    sector: 'Hospitality & Culinary Arts',
    impactMetric: '100%',
    metricLabel: 'Weekend Table Capacity Booked 3 Months in Advance',
    description: 'A sensory digital dining flagship featuring seasonal pairing menus, micro-cellar inventory, and effortless table reservation with concierge messaging.',
    deliverables: ['Culinary Editorial Website', 'Real-time Table Booking', 'Tasting Menu Engine', 'Private Dining Inquiry'],
    image: '/src/assets/images/project_culinary_brand_1794288417213.jpg',
    testimonial: {
      quote: 'Our guests frequently comment that browsing our digital menu was what finalized their booking. It captures the intimacy of our kitchen perfectly.',
      author: 'Chef Julien Laurent',
      role: 'Head Chef & Owner',
      company: "L'Ardoise Gastronomy"
    }
  }
];

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  timeline: string;
  startingRange: string;
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Digital Flagships & Bespoke Web Platforms',
    tagline: 'Brand-defining websites engineered to dominate your category.',
    description: 'We construct high-craft, conversion-driven websites designed from first principles. Every layout is calibrated for typographic hierarchy, natural storytelling, and sub-second load times.',
    capabilities: [
      'Interactive Design & Art Direction',
      'Fluid Micro-Interactions & Motion',
      'SEO & Semantic Structured Data',
      'Headless CMS Content Architecture'
    ],
    timeline: '4–6 weeks',
    startingRange: '$12,000'
  },
  {
    number: '02',
    title: 'Headless E-Commerce & Monolith Migration',
    tagline: 'Ultra-fast shopping experiences built on modern commerce APIs.',
    description: 'Decoupled storefronts with Shopify Plus, Medusa, or custom headless engines. We eliminate clunky checkout friction and give you complete artistic freedom over merchandising.',
    capabilities: [
      'Shopify Hydrogen & Headless Next.js',
      'Custom Cart Drawers & Upsell Engines',
      'Global Currency & Localization',
      'Automated Inventory Synchronization'
    ],
    timeline: '6–10 weeks',
    startingRange: '$18,000'
  },
  {
    number: '03',
    title: 'Modern Web Applications & SaaS Frontends',
    tagline: 'Complex product logic simplified into fluid, intuitive interfaces.',
    description: 'Frontend engineering for web apps that need to handle dense information, high concurrency, and real-time data visualization without feeling sluggish.',
    capabilities: [
      'React & TypeScript Core Architecture',
      'Real-time Charting & Canvas Views',
      'Role-based Permission Workflows',
      'Keyboard-first Power User Shortcuts'
    ],
    timeline: '8–12 weeks',
    startingRange: '$24,000'
  },
  {
    number: '04',
    title: 'Design Systems & Component Foundations',
    tagline: 'Unified token architectures that scale across design and code.',
    description: 'Bridging Figma and production code. We establish comprehensive design systems with strict typographic math, token hierarchies, and accessible React primitives.',
    capabilities: [
      'Token Hierarchies & Theming Engines',
      'WCAG 2.1 AA Accessibility Auditing',
      'Interactive Storybook Documentation',
      'Cross-Platform Consistency'
    ],
    timeline: '3–5 weeks',
    startingRange: '$9,500'
  }
];
