import { useState } from 'react';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Palette, 
  Code2, 
  Check, 
  ShoppingBag, 
  TrendingUp, 
  Layers, 
  UtensilsCrossed,
  ArrowUpRight
} from 'lucide-react';

type ArchetypeKey = 'commerce' | 'saas' | 'architecture' | 'gastronomy';
type DeviceMode = 'desktop' | 'tablet' | 'mobile';
type PaletteTheme = 'default' | 'travertine' | 'indigo' | 'dark';

export function InteractiveStudio({ onSelectArchetype }: { onSelectArchetype: (name: string) => void }) {
  const [activeArchetype, setActiveArchetype] = useState<ArchetypeKey>('commerce');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [theme, setTheme] = useState<PaletteTheme>('default');
  const [activeTab, setActiveTab] = useState<'preview' | 'spec'>('preview');

  // Simulated interactive states within archetypes
  const [cartCount, setCartCount] = useState(1);
  const [activeMetricTab, setActiveMetricTab] = useState<'revenue' | 'conversion' | 'latency'>('revenue');
  const [tastingMenuCourse, setTastingMenuCourse] = useState(1);

  // Archetype definitions
  const archetypes = {
    commerce: {
      name: 'Editorial E-Commerce Flagship',
      tagline: 'Artisan Goods & High-Average-Order-Value Brands',
      idealFor: 'Direct-to-consumer luxury, fashion, apothecary, fine home goods',
      techStack: ['Shopify Plus Storefront API', 'React 19 Server Components', 'Tailwind CSS v4', 'Edge CDN Caching'],
      lighthouse: { performance: 99, accessibility: 100, bestPractices: 100, seo: 100 },
      image: '/src/assets/images/project_editorial_commerce_1794288415800.jpg'
    },
    saas: {
      name: 'High-Density SaaS Platform',
      tagline: 'Data-Dense Software & Enterprise Analytics',
      idealFor: 'B2B infrastructure, fintech dashboards, AI consoles, developer platforms',
      techStack: ['TypeScript Strict Mode', 'TanStack Virtualized Grids', 'SVG Canvas Rendering', 'WebSockets'],
      lighthouse: { performance: 98, accessibility: 98, bestPractices: 100, seo: 98 },
      image: '/src/assets/images/project_saas_platform_1794288415497.jpg'
    },
    architecture: {
      name: 'Architectural & Cultural Archive',
      tagline: 'Spatial Design & Creative Production Studios',
      deliverables: ['Custom WebGL Gallery', 'Curatorial CMS', 'Fluid Transitions', 'Global CDN'],
      idealFor: 'Architects, interior design firms, contemporary galleries, cinema producers',
      techStack: ['Motion Canvas', 'Next-Gen Picture Formats', 'Sanity / Strapi CMS', 'Dynamic Fluid Scaling'],
      lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
      image: '/src/assets/images/project_architectural_portfolio_1794288416371.jpg'
    },
    gastronomy: {
      name: 'Michelin Gastronomy Flagship',
      tagline: 'Hospitality, Tasting Menus & Private Reservations',
      idealFor: 'Award-winning restaurants, boutique hotels, private member clubs',
      techStack: ['SevenRooms / Resy API Bridge', 'Real-time Table Hold Engine', 'Bespoke Sommelier Guide'],
      lighthouse: { performance: 99, accessibility: 100, bestPractices: 100, seo: 100 },
      image: '/src/assets/images/project_culinary_brand_1794288417213.jpg'
    }
  };

  const current = archetypes[activeArchetype];

  // Palette styling mapping for simulated preview
  const themeClassMap = {
    default: 'bg-white text-neutral-900 border-neutral-200',
    travertine: 'bg-[#F9F6F0] text-[#292524] border-[#E7E2D7]',
    indigo: 'bg-[#0F172A] text-slate-100 border-slate-800',
    dark: 'bg-[#0A0A0A] text-neutral-100 border-neutral-800'
  };

  const getContainerWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[390px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'max-w-full';
    }
  };

  return (
    <section id="interactive-studio" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
              Interactive Website Sandbox
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Test live website archetypes
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              Inspect how we structure layouts, micro-interactions, responsive geometry, and accessibility benchmarks across key industry verticals.
            </p>
          </div>

          {/* Archetype Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/80 dark:border-neutral-800 shrink-0 overflow-x-auto">
            <button
              onClick={() => setActiveArchetype('commerce')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeArchetype === 'commerce'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-100 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Commerce
            </button>
            <button
              onClick={() => setActiveArchetype('saas')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeArchetype === 'saas'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-100 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              SaaS Console
            </button>
            <button
              onClick={() => setActiveArchetype('architecture')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeArchetype === 'architecture'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-100 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Architecture
            </button>
            <button
              onClick={() => setActiveArchetype('gastronomy')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeArchetype === 'gastronomy'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-100 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              Gastronomy
            </button>
          </div>
        </div>

        {/* Studio Sandbox Workspace Card */}
        <div className="bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-sm">
          {/* Top Control Bar inside Sandbox */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800 mb-6">
            {/* View Mode & Archetype Title */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {current.name}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:inline">
                — {current.tagline}
              </span>
            </div>

            {/* Device & Theme Controls */}
            <div className="flex items-center gap-4">
              {/* Device Selector */}
              <div className="flex items-center bg-white dark:bg-neutral-800 p-1 rounded-lg border border-neutral-200/80 dark:border-neutral-700">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`p-1.5 rounded-md transition-colors ${
                    deviceMode === 'desktop'
                      ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
                      : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                  }`}
                  title="Desktop 1440px"
                  aria-label="Desktop view"
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceMode('tablet')}
                  className={`p-1.5 rounded-md transition-colors ${
                    deviceMode === 'tablet'
                      ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
                      : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                  }`}
                  title="Tablet 768px"
                  aria-label="Tablet view"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`p-1.5 rounded-md transition-colors ${
                    deviceMode === 'mobile'
                      ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
                      : 'text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
                  }`}
                  title="Mobile 390px"
                  aria-label="Mobile view"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              {/* Theme Palette Switcher */}
              <div className="hidden sm:flex items-center gap-1.5 bg-white dark:bg-neutral-800 px-2 py-1 rounded-lg border border-neutral-200/80 dark:border-neutral-700">
                <Palette className="w-3.5 h-3.5 text-neutral-400 mr-1" />
                <button
                  onClick={() => setTheme('default')}
                  className={`w-4 h-4 rounded-full border ${
                    theme === 'default' ? 'ring-2 ring-neutral-900 dark:ring-neutral-100' : ''
                  } bg-white border-neutral-300`}
                  title="Minimalist White"
                  aria-label="Minimalist white theme"
                />
                <button
                  onClick={() => setTheme('travertine')}
                  className={`w-4 h-4 rounded-full border ${
                    theme === 'travertine' ? 'ring-2 ring-neutral-900 dark:ring-neutral-100' : ''
                  } bg-[#F4EFE6] border-[#D8CEBA]`}
                  title="Warm Travertine"
                  aria-label="Warm travertine theme"
                />
                <button
                  onClick={() => setTheme('indigo')}
                  className={`w-4 h-4 rounded-full border ${
                    theme === 'indigo' ? 'ring-2 ring-neutral-900 dark:ring-neutral-100' : ''
                  } bg-[#0F172A] border-slate-700`}
                  title="Slate Obsidian"
                  aria-label="Slate obsidian theme"
                />
              </div>

              {/* View spec toggle */}
              <button
                onClick={() => setActiveTab(activeTab === 'preview' ? 'spec' : 'preview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                  activeTab === 'spec'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-transparent'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                {activeTab === 'spec' ? 'View Live UI' : 'Technical Specs'}
              </button>
            </div>
          </div>

          {/* Sandbox Content Viewport */}
          <div className="flex justify-center transition-all duration-300 min-h-[460px]">
            <div className={`w-full ${getContainerWidth()} transition-all duration-300`}>
              {activeTab === 'preview' ? (
                <div
                  className={`rounded-xl border p-6 transition-colors duration-200 shadow-sm ${themeClassMap[theme]}`}
                >
                  {/* Archetype 1: Commerce */}
                  {activeArchetype === 'commerce' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-inherit pb-4">
                        <div className="text-base font-semibold tracking-wider uppercase font-serif">
                          ARA OBJECTS
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                          <span className="hidden sm:inline">Vessels</span>
                          <span className="hidden sm:inline">Stoneware</span>
                          <span className="hidden sm:inline">Archive</span>
                          <button
                            onClick={() => setCartCount(cartCount + 1)}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            Bag ({cartCount})
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="aspect-4/3 rounded-lg overflow-hidden bg-neutral-200">
                          <img
                            src="/src/assets/images/project_editorial_commerce_1794288415800.jpg"
                            alt="ARA Ceramic Bowl with bespoke packaging"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="text-xs uppercase tracking-widest opacity-70">
                            Spring Release 04 · Hand-thrown in Kyoto
                          </div>
                          <h3 className="text-2xl font-bold tracking-tight">
                            Speckled Travertine Bowl No. 14
                          </h3>
                          <div className="text-lg font-mono font-medium tabular-nums">
                            $240 USD
                          </div>
                          <p className="text-xs leading-relaxed opacity-80">
                            Crafted from reduction-fired Japanese stoneware with an unglazed raw mineral exterior and food-safe matte satin interior glaze.
                          </p>
                          <div className="flex items-center gap-3 pt-2">
                            <button
                              onClick={() => setCartCount(cartCount + 1)}
                              className="px-4 py-2.5 text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-md hover:opacity-90 transition-opacity"
                            >
                              Add to Bag
                            </button>
                            <span className="text-xs opacity-60">Ships worldwide in 48h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Archetype 2: SaaS */}
                  {activeArchetype === 'saas' && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between border-b border-inherit pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded bg-blue-600" />
                          <span className="text-sm font-semibold tracking-tight font-mono">
                            SPECTRA // TELEMETRY
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <button
                            onClick={() => setActiveMetricTab('revenue')}
                            className={`px-2 py-1 rounded ${
                              activeMetricTab === 'revenue' ? 'bg-blue-600 text-white' : 'opacity-70'
                            }`}
                          >
                            ARR
                          </button>
                          <button
                            onClick={() => setActiveMetricTab('conversion')}
                            className={`px-2 py-1 rounded ${
                              activeMetricTab === 'conversion' ? 'bg-blue-600 text-white' : 'opacity-70'
                            }`}
                          >
                            Conversion
                          </button>
                          <button
                            onClick={() => setActiveMetricTab('latency')}
                            className={`px-2 py-1 rounded ${
                              activeMetricTab === 'latency' ? 'bg-blue-600 text-white' : 'opacity-70'
                            }`}
                          >
                            Latency
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg border border-inherit bg-black/5 dark:bg-white/5">
                          <div className="text-xs opacity-70">30-Day Volume</div>
                          <div className="text-xl font-mono font-bold tabular-nums mt-1">$482,900</div>
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                            +18.4% WoW
                          </div>
                        </div>
                        <div className="p-3 rounded-lg border border-inherit bg-black/5 dark:bg-white/5">
                          <div className="text-xs opacity-70">p99 Ingestion</div>
                          <div className="text-xl font-mono font-bold tabular-nums mt-1">14.2ms</div>
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                            Optimal
                          </div>
                        </div>
                        <div className="p-3 rounded-lg border border-inherit bg-black/5 dark:bg-white/5">
                          <div className="text-xs opacity-70">Active Nodes</div>
                          <div className="text-xl font-mono font-bold tabular-nums mt-1">128 / 128</div>
                          <div className="text-xs opacity-70 font-mono mt-0.5">Global mesh</div>
                        </div>
                      </div>

                      {/* Interactive Visual Display Chart */}
                      <div className="h-44 rounded-lg border border-inherit p-4 flex flex-col justify-between bg-black/5 dark:bg-white/5 relative overflow-hidden">
                        <div className="flex items-center justify-between text-xs font-mono opacity-70">
                          <span>Live Ingestion Trend (Events/sec)</span>
                          <span className="tabular-nums">Peak: 48,200/s</span>
                        </div>
                        {/* SVG sparkline graph */}
                        <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                          <path
                            d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,35"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,35 L400,100 L0,100 Z"
                            fill="url(#blueGrad)"
                            opacity="0.15"
                          />
                          <defs>
                            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="flex justify-between text-[10px] font-mono opacity-50">
                          <span>00:00 UTC</span>
                          <span>06:00 UTC</span>
                          <span>12:00 UTC</span>
                          <span>18:00 UTC</span>
                          <span>NOW</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Archetype 3: Architecture */}
                  {activeArchetype === 'architecture' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-inherit pb-4">
                        <span className="text-sm font-semibold tracking-widest uppercase">
                          MONOLITH STUDIO // EXHIBITION
                        </span>
                        <span className="text-xs opacity-70 font-mono">Archive 08 / 2026</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="aspect-4/3 rounded-lg overflow-hidden bg-neutral-200">
                          <img
                            src="/src/assets/images/project_architectural_portfolio_1794288416371.jpg"
                            alt="Concrete Pavilion Architecture"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="text-xs tracking-wider uppercase opacity-60">
                            Geological Pavilion · Sintra Coastal Reserve
                          </div>
                          <h3 className="text-xl font-bold tracking-tight">
                            Structure 07: Cast Concrete & Coastal Light
                          </h3>
                          <p className="text-xs leading-relaxed opacity-80">
                            Exploring the intersection of monolithic structural mass and marine fog penetration. Monolithic post-tensioned slabs cantilevered over natural schist outcroppings.
                          </p>
                          <div className="pt-2 border-t border-inherit/40 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div>
                              <span className="opacity-50 block text-[10px]">TOTAL FOOTPRINT</span>
                              <span>1,850 m²</span>
                            </div>
                            <div>
                              <span className="opacity-50 block text-[10px]">COMPLETION</span>
                              <span>November 2025</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Archetype 4: Gastronomy */}
                  {activeArchetype === 'gastronomy' && (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between border-b border-inherit pb-3">
                        <span className="text-sm tracking-wider uppercase font-serif font-bold">
                          L'ARDOISE // ÉTOILE
                        </span>
                        <div className="flex items-center gap-3 text-xs">
                          <button
                            onClick={() => setTastingMenuCourse(1)}
                            className={`px-2 py-1 rounded transition-colors ${
                              tastingMenuCourse === 1 ? 'font-bold underline' : 'opacity-60'
                            }`}
                          >
                            7-Course Nocturne
                          </button>
                          <button
                            onClick={() => setTastingMenuCourse(2)}
                            className={`px-2 py-1 rounded transition-colors ${
                              tastingMenuCourse === 2 ? 'font-bold underline' : 'opacity-60'
                            }`}
                          >
                            Sommelier Cellar
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="aspect-4/3 rounded-lg overflow-hidden bg-neutral-900">
                          <img
                            src="/src/assets/images/project_culinary_brand_1794288417213.jpg"
                            alt="Fine dining culinary presentation"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="text-xs uppercase tracking-widest opacity-60">
                            Course IV · Wild Sea Bass
                          </div>
                          <h3 className="text-xl font-bold tracking-tight">
                            Pan-Seared Line-Caught Sea Bass
                          </h3>
                          <p className="text-xs leading-relaxed opacity-80">
                            Sweet pea mousseline, baby heirloom carrots, micro garden borage, and emulsion of reduced citrus verbena.
                          </p>
                          <div className="pt-3">
                            <a
                              href="#calculator"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                            >
                              Reserve Table Tasting
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Technical Specs Tab */
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      Engineering Architecture: {current.name}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      Production-grade specifications applied to this archetype
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                        Lighthouse Audit Performance
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                          <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                            {current.lighthouse.performance}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                            Performance
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                          <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                            {current.lighthouse.accessibility}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                            Accessibility
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                          <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                            {current.lighthouse.bestPractices}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                            Best Practices
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                          <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                            {current.lighthouse.seo}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                            SEO & Schema
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                        Framework & Delivery Pipeline
                      </div>
                      <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                        {current.techStack.map((tech, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                        <span className="text-xs font-medium text-neutral-500 block">Recommended for:</span>
                        <span className="text-xs text-neutral-800 dark:text-neutral-200 mt-1 block">
                          {current.idealFor}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        onSelectArchetype(current.name);
                        const calcEl = document.getElementById('calculator');
                        if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-950 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Use Archetype in Cost Estimator
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
