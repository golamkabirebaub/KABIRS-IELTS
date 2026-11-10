import { useState } from 'react';
import { Check, Copy, CheckCheck, Send, Download } from 'lucide-react';

interface CostEstimatorProps {
  preselectedService?: string;
  onOpenProposalModal?: () => void;
}

export function CostEstimator({ preselectedService }: CostEstimatorProps) {
  // Config state
  const [projectType, setProjectType] = useState<string>(
    preselectedService || 'Bespoke Digital Flagship'
  );
  const [scale, setScale] = useState<string>('compact');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'seo',
    'cms'
  ]);

  // Lead form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    { id: 'Bespoke Digital Flagship', name: 'Digital Flagship Website', base: 12000, weeks: '4–6 wks' },
    { id: 'Headless E-Commerce & Monolith Migration', name: 'Headless E-Commerce', base: 18000, weeks: '6–10 wks' },
    { id: 'Modern Web Applications & SaaS Frontends', name: 'SaaS Web Application', base: 24000, weeks: '8–12 wks' },
    { id: 'Design Systems & Component Foundations', name: 'Design Token System', base: 9500, weeks: '3–5 wks' }
  ];

  const scaleOptions = [
    { id: 'compact', label: 'Core Scope (1–5 views)', addCost: 0, timeAdd: '0 wks' },
    { id: 'medium', label: 'Growth Scale (6–14 views)', addCost: 4500, timeAdd: '+2 wks' },
    { id: 'enterprise', label: 'Enterprise / Multi-Locale (15+ views)', addCost: 10000, timeAdd: '+4 wks' }
  ];

  const addonsList = [
    { id: 'cms', label: 'Headless CMS Integration (Sanity / Strapi)', cost: 2500 },
    { id: 'webgl', label: 'Custom 3D / WebGL Interactive Canvas', cost: 4200 },
    { id: 'seo', label: 'Deep Technical SEO & Schema Structured Data', cost: 1600 },
    { id: 'i18n', label: 'Multi-Currency & Global i18n Localization', cost: 2200 },
    { id: 'rush', label: 'Accelerated Priority Delivery Sprint', cost: 3800 }
  ];

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const selectedScaleObj = scaleOptions.find((s) => s.id === scale) || scaleOptions[0];
  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const item = addonsList.find((a) => a.id === id);
    return acc + (item ? item.cost : 0);
  }, 0);

  const totalEstimate = selectedTypeObj.base + selectedScaleObj.addCost + addonsTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid work email.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedBrief({
        name,
        email,
        company: company || 'Not specified',
        projectType: selectedTypeObj.name,
        scale: selectedScaleObj.label,
        addons: selectedAddons.map((id) => addonsList.find((a) => a.id === id)?.label),
        totalEstimate: `$${totalEstimate.toLocaleString()}`,
        timeline: selectedTypeObj.weeks,
        notes: notes || 'None',
        timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
    }, 600);
  };

  const copyBriefText = () => {
    if (!submittedBrief) return;
    const text = `AURA STUDIO PROJECT BRIEF
--------------------------
Client: ${submittedBrief.name} (${submittedBrief.email})
Company: ${submittedBrief.company}
Project Architecture: ${submittedBrief.projectType}
Scope: ${submittedBrief.scale}
Addons: ${submittedBrief.addons.join(', ')}
Estimated Investment: ${submittedBrief.totalEstimate} USD
Estimated Delivery: ${submittedBrief.timeline}
Notes: ${submittedBrief.notes}
Generated on: ${submittedBrief.timestamp}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadBriefJson = () => {
    if (!submittedBrief) return;
    const blob = new Blob([JSON.stringify(submittedBrief, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aura-brief-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-3">
            Transparent Pricing & Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
            Configure your project brief
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 font-normal">
            No ambiguous quote games. Select your platform architecture, page count, and engineering capabilities for an immediate itemized scope estimate.
          </p>
        </div>

        {/* 2-Column Split: Configurator on Left, Summary & Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope & Feature Toggles */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                1. Select Architecture & Platform
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      projectType === type.id
                        ? 'border-neutral-900 dark:border-neutral-100 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                        : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">{type.name}</div>
                    <div className="flex items-center justify-between text-xs mt-3 opacity-80 font-mono">
                      <span>Base: ${type.base.toLocaleString()}</span>
                      <span>{type.weeks}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Page Scale */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                2. Page Count & Content Complexity
              </div>
              <div className="space-y-2.5">
                {scaleOptions.map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setScale(opt.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                      scale === opt.id
                        ? 'border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-800 shadow-xs'
                        : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          scale === opt.id
                            ? 'border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100'
                            : 'border-neutral-300 dark:border-neutral-600'
                        }`}
                      >
                        {scale === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-950" />}
                      </div>
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {opt.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      {opt.addCost === 0 ? 'Included' : `+$${opt.addCost.toLocaleString()}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                3. Technical Capabilities & Integrations
              </div>
              <div className="space-y-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-neutral-800 dark:border-neutral-200 bg-white dark:bg-neutral-800 shadow-xs'
                          : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'border-neutral-900 bg-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 text-white dark:text-neutral-950'
                              : 'border-neutral-300 dark:border-neutral-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-sm text-neutral-800 dark:text-neutral-200">
                          {addon.label}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                        +${addon.cost.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Scope Breakdown & Lead Form */}
          <div className="lg:col-span-5 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-sm space-y-6">
            {!submittedBrief ? (
              <>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-1">
                    Live Investment Estimate
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-mono tracking-tight text-neutral-950 dark:text-neutral-50 tabular-nums">
                      ${totalEstimate.toLocaleString()}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">USD fixed</span>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Estimated sprint timeline: <span className="font-semibold text-neutral-800 dark:text-neutral-200">{selectedTypeObj.weeks}</span>
                  </div>
                </div>

                {/* Scope line items */}
                <div className="py-4 border-y border-neutral-100 dark:border-neutral-800 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">{selectedTypeObj.name}</span>
                    <span className="font-mono tabular-nums text-neutral-900 dark:text-neutral-100">${selectedTypeObj.base.toLocaleString()}</span>
                  </div>
                  {selectedScaleObj.addCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-400">{selectedScaleObj.label}</span>
                      <span className="font-mono tabular-nums text-neutral-900 dark:text-neutral-100">+${selectedScaleObj.addCost.toLocaleString()}</span>
                    </div>
                  )}
                  {selectedAddons.map((id) => {
                    const addon = addonsList.find((a) => a.id === id);
                    if (!addon) return null;
                    return (
                      <div key={id} className="flex justify-between">
                        <span className="text-neutral-600 dark:text-neutral-400">{addon.label}</span>
                        <span className="font-mono tabular-nums text-neutral-900 dark:text-neutral-100">+${addon.cost.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Form to submit proposal */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Lock In This Estimate & Book Discovery
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 p-2.5 rounded-lg border border-rose-200 dark:border-rose-900">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@company.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Innovations"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Project Goals or Reference Links (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Target launch date, current website URL, or key competitors..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-50 bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-950 rounded-lg hover:bg-neutral-800 dark:hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Preparing Proposal...'
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Submit Project Brief & Lock Rate
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center">
                    Strict NDA honored. We reply within 12 business hours.
                  </p>
                </form>
              </>
            ) : (
              /* Success / Confirmation State */
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
                    <Check className="w-4 h-4" />
                    Brief Submitted Successfully
                  </div>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">
                    Thank you, {submittedBrief.name}. Our partners have received your brief and will contact {submittedBrief.email} with an architectural roadmap.
                  </p>
                </div>

                <div className="space-y-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 font-mono text-xs">
                  <div className="flex justify-between border-b border-inherit pb-2">
                    <span className="text-neutral-500">Platform:</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">{submittedBrief.projectType}</span>
                  </div>
                  <div className="flex justify-between border-b border-inherit pb-2">
                    <span className="text-neutral-500">Scope:</span>
                    <span className="text-neutral-900 dark:text-neutral-100">{submittedBrief.scale}</span>
                  </div>
                  <div className="flex justify-between border-b border-inherit pb-2">
                    <span className="text-neutral-500">Investment:</span>
                    <span className="font-bold text-neutral-900 dark:text-neutral-100">{submittedBrief.totalEstimate} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Timeline:</span>
                    <span className="text-neutral-900 dark:text-neutral-100">{submittedBrief.timeline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={copyBriefText}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied to Clipboard' : 'Copy Text Brief'}
                  </button>
                  <button
                    onClick={downloadBriefJson}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download JSON
                  </button>
                </div>

                <button
                  onClick={() => setSubmittedBrief(null)}
                  className="w-full text-center text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 underline pt-2"
                >
                  Configure another project
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
