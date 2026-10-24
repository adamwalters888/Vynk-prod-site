import React, { useState } from 'react';
import { CONSULTATION_CALLOUT } from '../data/content';
import {
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Clock,
  CheckCircle2,
  Leaf,
  Target,
  BarChart3,
  Globe,
  FileText,
  ExternalLink,
  Download
} from 'lucide-react';

interface TheVynkApproachProps {
  onOpenConsultation: (service?: 'cloud-spend' | 'sustainability' | 'both') => void;
}

export const TheVynkApproach: React.FC<TheVynkApproachProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'sustainability'>('cloud');

  return (
    <section id="approach" className="py-10 md:py-14 bg-[#0c0e12] relative">
      {/* Background visual accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[#FF5E14] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            <Target className="w-3.5 h-3.5 text-[#FF5E14]" />
            <span>Strategic Advisory Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Vynk Approach
          </h2>

          {/* Interactive Dual-Approach Switcher Buttons */}
          <div className="flex rounded-2xl bg-zinc-900/90 p-1.5 border border-zinc-800 max-w-md mx-auto mb-4 shadow-lg">
            <button
              onClick={() => setActiveTab('cloud')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === 'cloud'
                  ? 'bg-[#FF5E14] text-white shadow-md shadow-[#FF5E14]/25 scale-[1.01]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Cloud Spend</span>
            </button>
            <button
              onClick={() => setActiveTab('sustainability')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === 'sustainability'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 scale-[1.01]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Leaf className={`w-4 h-4 ${activeTab === 'sustainability' ? 'text-slate-950' : 'text-emerald-400'}`} />
              <span>Sustainability</span>
            </button>
          </div>

          {/* Dynamic Context Description based on Active Selection */}
          <div className="max-w-2xl mx-auto min-h-[4.5rem] flex items-center justify-center text-center">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed transition-all duration-300">
              {activeTab === 'cloud' ? (
                'A proven framework built by former hyperscaler commercial directors to extract maximum value, eliminate negotiation blindspots, and maximise the value in your commitments.'
              ) : (
                'Hands on Sustainability leadership, helping you monetise sustainability and carbon engagements, while driving cost efficient changes across your supply chain. Our sustainability experts come from the global technology industry, supporting the worlds largest brands to meet their carbon and sustainability objectives.'
              )}
            </p>
          </div>

          {/* Top Featured Download Link: The Vynk Approach PDF */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href="/Vynk-Approach.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-zinc-900/95 hover:bg-[#FF5E14] text-zinc-200 hover:text-white border border-zinc-800 hover:border-[#FF5E14] text-xs font-semibold tracking-wide transition-all shadow-md group"
            >
              <FileText className="w-4 h-4 text-[#FF5E14] group-hover:text-white transition-colors" />
              <span>Read The Vynk Approach Framework</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 group-hover:bg-black/30 text-zinc-400 group-hover:text-white border border-zinc-700/60 font-semibold">
                PDF
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Active Tab Panel Content */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">

          {/* Active Tab Panel */}
          {activeTab === 'cloud' ? (
            <div className="p-7 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5E14]/10 blur-[120px] pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14] text-xs font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>#Risk = Zero • Success-Based Fee</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Extract Maximum Value from Public Cloud Spend
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                    We save you money and compress your time to contract, removing the uncertainty of whether you secured the best outcome in your Cloud contract negotiations. We are experts at maximizing the financial gains you achieve through your cloud consumption.
                  </p>
                  <div className="p-4 rounded-xl bg-zinc-950/90 border border-[#FF5E14]/30 text-sm text-zinc-200 font-medium">
                    "And if we don't deliver added value, you <span className="underline decoration-[#FF5E14] font-bold text-[#FF5E14] uppercase">don't pay a cent</span>."
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
                      <span>Deep AWS, GCP & Azure Insights</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
                      <span>Concession & Credit Maximisation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
                      <span>Reduced Time-to-Contract</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
                      <span>Min. $1M/yr spend engagement</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenConsultation('cloud-spend')}
                      className="px-6 py-3.5 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-[#FF5E14]/25"
                    >
                      <span>Book Cloud Negotiation Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                      <span className="text-xs font-mono uppercase text-zinc-400 font-medium">Typical Scope</span>
                      <span className="text-xs font-mono text-[#FF5E14] font-bold">$10M – $100M+ Engagements</span>
                    </div>
                    <div className="space-y-3.5">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#FF5E14] mt-0.5">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">Value Extraction</h4>
                          <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">Capturing co-investment funds, training credits, migration subsidies & custom discounted tiers.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#FF5E14] mt-0.5">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">Faster Execution</h4>
                          <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">Avoid lengthy back-and-forth cycles with informed commercial benchmarks.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-7 sm:p-10 rounded-3xl bg-zinc-900/80 border border-emerald-500/30 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Global Network Across 10+ Countries</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Start & Progress Your Carbon Emission Journey
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                    We are a network of sustainability experts in over 10 countries ready to help you start your carbon reduction journey. We find the right partners, progressive approaches, and deliver your commitments.
                  </p>
                  <div className="p-4 rounded-xl bg-zinc-950/90 border border-emerald-500/30 text-sm text-zinc-200 font-medium">
                    "We understand how important cost is in Sustainability. The Vynk team are experts at finding ways to not only move your business to a more sustainable offering but, importantly, <span className="underline decoration-emerald-400 font-bold text-emerald-300">monetise the results</span>."
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Low-Risk Time-Boxed Consulting</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Commercial & GTM Monetisation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Simplified ESG Reporting & Tooling</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>No Minimum Spend Requirement</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenConsultation('sustainability')}
                      className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/25"
                    >
                      <span>Start Sustainability Discovery</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-emerald-500/30 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                      <span className="text-xs font-mono uppercase text-zinc-400 font-medium">Global Coverage</span>
                      <span className="text-xs font-mono text-emerald-300 font-bold">US • Europe • Asia • ANZ</span>
                    </div>
                    <div className="space-y-3.5">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 mt-0.5">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">Profitability with a Purpose</h4>
                          <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">Transforming ESG from a pure cost-center into a differentiator that wins bids and customers.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">Quick Win Delivery</h4>
                          <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">Short consulting sprints allowing you to validate ROI before expanding footprint.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* "Don't Leave Money on the Table" Callout Section */}
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 p-6 sm:p-9 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-7">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14] text-xs font-mono uppercase tracking-widest font-bold">
                {CONSULTATION_CALLOUT.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-2.5 tracking-tight">
                {CONSULTATION_CALLOUT.title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                {CONSULTATION_CALLOUT.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
              {CONSULTATION_CALLOUT.steps.map((step) => (
                <div
                  key={step.number}
                  className="p-5 sm:p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 hover:border-[#FF5E14]/40 transition-all flex flex-col group"
                >
                  <span className="text-xl font-mono font-bold text-[#FF5E14] mb-2">{step.number}</span>
                  <h4 className="text-base font-bold text-white mb-1.5 leading-snug">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => onOpenConsultation('both')}
                className="px-7 py-3.5 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF5E14]/25 hover:shadow-[#FF5E14]/40 hover:scale-[1.01] active:scale-[0.99] transition-all inline-flex items-center gap-2.5 group"
              >
                <span>Schedule Free 15-Minute Consult</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-xs text-zinc-500 font-mono mt-2.5">
                Zero obligation • Direct discussion with former hyperscaler directors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

