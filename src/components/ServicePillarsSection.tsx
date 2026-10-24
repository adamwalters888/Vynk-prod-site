import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Cloud
} from 'lucide-react';

interface ServicePillarsSectionProps {
  onOpenConsultation: (service?: 'cloud-spend' | 'sustainability' | 'both', initialSpend?: string) => void;
}

export const ServicePillarsSection: React.FC<ServicePillarsSectionProps> = ({ onOpenConsultation }) => {
  // Calculator state for Service 1
  const [annualSpend, setAnnualSpend] = useState<number>(5); // In Millions USD
  const [contractYears, setContractYears] = useState<number>(3); // Years

  const totalContractValue = annualSpend * contractYears;
  const lowConcession = Math.round(totalContractValue * 0.14 * 10) / 10;
  const highConcession = Math.round(totalContractValue * 0.26 * 10) / 10;
  const lowCoInvest = Math.round(totalContractValue * 0.04 * 10) / 10;
  const highCoInvest = Math.round(totalContractValue * 0.125 * 10) / 10;

  return (
    <section className="py-10 md:py-14 bg-[#090b0e] relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-widest">
            Core Service Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-3 mb-2.5">
            Specialized Executive Advisory
          </h2>
          <p className="text-sm sm:text-base text-zinc-300">
            Focused on the two highest-impact financial and operational levers for modern enterprise leadership.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SERVICE 1 COMPLETE FLOW: CLOUD SPEND CONSUMPTION & CONCESSION CALCULATOR  */}
        {/* ========================================================================= */}
        <div id="cloud-spend" className="mb-10 md:mb-14 scroll-mt-24">
          <div className="space-y-8">
            {/* Service 1 Main Card */}
            <div className="p-7 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14] text-xs font-mono font-bold">
                  SERVICE 01 • CLOUD CONSUMPTION
                </span>
                <span className="text-xs font-mono text-[#FF5E14] font-bold px-3 py-1 rounded bg-zinc-950 border border-[#FF5E14]/30">
                  #Risk = Zero Guarantee
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-7 space-y-5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    Public Cloud Consumption & Contract Negotiations
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Competition among Public Cloud providers (hyperscalers) is fierce. While they offer concessions to secure your business, our team of <strong className="text-white font-bold">EXPERTS</strong> know intimately how to exploit that value. Having sold for the 3 largest public cloud providers on the planet, we will help you and the hyperscaler reduce the time to contract and ensure maximum benefit for each party.
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    We ensure you get a robust, flexible agreement delivering maximum investment and benefit for your business. We are so confident in the benefits we provide that if we don't deliver, <strong className="text-[#FF5E14] font-bold">you don't pay a cent</strong>.
                  </p>

                  <div className="space-y-3 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                      Key Value Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5E14] mt-0.5 shrink-0" />
                        <span>Commercial Concessions & Ramp Discounts</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5E14] mt-0.5 shrink-0" />
                        <span>Migration & Training Co-Investment Funds</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5E14] mt-0.5 shrink-0" />
                        <span>Accelerated Time-to-Contract Timelines</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5E14] mt-0.5 shrink-0" />
                        <span>Penalty & Minimum Spend Flexibility</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenConsultation('cloud-spend')}
                      className="px-6 py-3 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF5E14]/25 transition-all flex items-center gap-2 group"
                    >
                      <span>Evaluate Cloud Contract</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <a
                      href="#calculator"
                      className="px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-semibold transition-all"
                    >
                      Simulate Spend Concessions ↓
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  {/* Entry Criteria Box */}
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-[#FF5E14]/30 shadow-inner">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF5E14] font-bold mb-3">
                      <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
                      <span>Cloud Spend Entry Criteria</span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                        <span className="text-zinc-400 text-xs block mb-1 font-mono">Contract Parameters</span>
                        <p className="text-white font-bold text-xs sm:text-sm">
                          Minimum 2-Year Term with $1M+ (USD) forecast spend per year.
                        </p>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Our model and background focus on enterprise agreements in the <strong className="text-zinc-200">$10s and $100s of millions</strong>, where our ex-hyperscaler leverage extracts maximum commercial concession.
                      </p>
                    </div>
                  </div>

                  {/* Hyperscaler Negotiation Coverage - Clean Aligned Cassette Rows */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-zinc-800/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-semibold flex items-center gap-1.5">
                        <Cloud className="w-3.5 h-3.5 text-[#FF5E14]" />
                        <span>Supported Hyperscalers</span>
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Enterprise Scope
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {[
                        {
                          name: 'AWS',
                          fullName: 'Amazon Web Services',
                          tag: 'AWS',
                          agreements: 'EDP • PPA • Private Pricing'
                        },
                        {
                          name: 'Microsoft Azure',
                          fullName: 'Microsoft Azure',
                          tag: 'AZURE',
                          agreements: 'EA • MACC Commitments'
                        },
                        {
                          name: 'Google Cloud',
                          fullName: 'Google Cloud Platform',
                          tag: 'GCP',
                          agreements: 'CUD • Custom Terms'
                        },
                        {
                          name: 'Alibaba Cloud',
                          fullName: 'Alibaba Cloud (Aliyun)',
                          tag: 'ALIYUN',
                          agreements: 'Global & APAC Spend'
                        }
                      ].map((provider) => (
                        <div
                          key={provider.tag}
                          className="px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all grid grid-cols-12 items-center gap-2 group"
                        >
                          {/* Column 1: Badge (fixed 2 columns) */}
                          <div className="col-span-3 sm:col-span-2">
                            <span className="inline-block w-full text-center px-1.5 py-1 rounded-md bg-zinc-800/90 border border-zinc-700/80 text-[#FF5E14] font-mono text-[10px] font-bold tracking-wider">
                              {provider.tag}
                            </span>
                          </div>

                          {/* Column 2: Provider Name (fixed 4-5 columns, perfectly aligned) */}
                          <div className="col-span-4 sm:col-span-4">
                            <span className="text-xs sm:text-[13px] font-semibold text-zinc-100 group-hover:text-white whitespace-nowrap">
                              {provider.name}
                            </span>
                          </div>

                          {/* Column 3: Agreement Scope (fixed right-aligned columns) */}
                          <div className="col-span-5 sm:col-span-6 text-right">
                            <span className="text-[10.5px] sm:text-[11px] font-mono text-zinc-400 whitespace-nowrap">
                              {provider.agreements}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 1 Interactive Concession & Spend ROI Calculator */}
            <div id="calculator" className="scroll-mt-24">
              <div className="p-7 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#FF5E14]" />
                    <span>Service 01 Tool • Concession Simulator</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Calculated on Multi-Year Concession Benchmarks
                  </span>
                </div>

                <div className="mb-8 max-w-2xl">
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                    Simulate Your Public Cloud Concession Potential
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Adjust your annual forecast spend and commitment duration below to estimate the concession tiers, training co-investments, and timeline compressions typically unlocked by our ex-hyperscaler negotiators.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Input Controls */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-zinc-200">
                          Forecast Annual Cloud Spend
                        </label>
                        <span className="text-lg font-mono font-bold text-[#FF5E14]">
                          ${annualSpend}M USD / Year
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        step="1"
                        value={annualSpend}
                        onChange={(e) => setAnnualSpend(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#FF5E14]"
                      />
                      <div className="flex justify-between text-xs font-mono text-zinc-400 mt-1.5">
                        <span>$1M</span>
                        <span>$50M+</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-zinc-200 block mb-2">
                        Contract Term Duration
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {[2, 3, 5].map((years) => (
                          <button
                            key={years}
                            type="button"
                            onClick={() => setContractYears(years)}
                            className={`py-2.5 rounded-xl text-xs font-bold font-mono transition-all border ${
                              contractYears === years
                                ? 'bg-[#FF5E14] text-white border-[#FF5E14] shadow-md shadow-[#FF5E14]/25'
                                : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                            }`}
                          >
                            {years} Years
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                        <Zap className="w-3.5 h-3.5 text-[#FF5E14]" />
                        Total Contract Value (TCV): ${totalContractValue}M USD
                      </div>
                      <p className="text-[11px] text-zinc-500">Entry criteria met: Minimum 2-year commitment & $1M+/year forecast spend.</p>
                    </div>
                  </div>

                  {/* Simulated ROI Results Card */}
                  <div className="lg:col-span-6">
                    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-[#FF5E14]/30 shadow-xl space-y-5">
                      <div>
                        <span className="text-xs font-mono uppercase text-[#FF5E14] tracking-wider font-bold block mb-1">
                          Potential Value Extraction Range
                        </span>
                        <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          ${lowConcession}M – ${highConcession}M{' '}
                          <span className="text-xs sm:text-sm font-normal text-zinc-400 font-sans">USD in benefits</span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          Across discounted consumption rates, tier commits, and flexibility concessions.
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2 border-t border-zinc-800">
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-zinc-400">Co-Investment:</span>
                          <span className="text-white font-mono font-bold">${lowCoInvest}M – ${highCoInvest}M USD</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-zinc-400">Time-to-Contract Savings:</span>
                          <span className="text-zinc-200 font-mono font-bold">30% – 50% Faster</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-zinc-400">Vynk Engagement Risk:</span>
                          <span className="text-[#FF5E14] font-mono font-bold">#Risk = Zero</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() =>
                            onOpenConsultation('cloud-spend', `$${annualSpend}M/year (${contractYears} Year Term)`)
                          }
                          className="w-full py-3.5 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF5E14]/25 hover:shadow-[#FF5E14]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                        >
                          <span>Discuss This Scenario with Vynk</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <p className="text-[11px] text-center text-zinc-500 mt-2 font-mono">
                          Free 15-minute review with no financial obligation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SERVICE 2 COMPLETE FLOW: SUSTAINABILITY & ESG ADVISORY                    */}
        {/* ========================================================================= */}
        <div id="sustainability" className="scroll-mt-24">
          <div className="p-7 sm:p-10 rounded-3xl bg-zinc-900/80 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative">
              <span className="px-3.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SERVICE 02 • SUSTAINABILITY ADVISORY
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold px-3 py-1 rounded bg-zinc-950 border border-emerald-500/30">
                Network in 10+ Countries
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative">
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Sustainability — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Profitability with a Purpose</span>
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  We are part of a global alliance of passionate Sustainability specialists with a presence in over 10 countries and many years of Sustainability experience. The team will demystify the process to get you started on your Sustainability journey, or if you are already making progress, we leverage current global use cases to deliver solutions moving your business toward carbon neutrality using automated tooling.
                </p>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  We pride ourselves in helping our customers <strong className="text-emerald-200 font-semibold">build GTM offerings that deliver a carbon-neutral Service or Product</strong>. We understand how important cost is in Sustainability, and we focus on delivering a positive ROI using the simplest approaches possible.
                </p>

                <div className="space-y-3 pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400/90 font-bold">
                    Key Advisory Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>Commercialised Carbon-Neutral Products & GTM</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>Automated Recording & ESG Reporting Tooling</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>Low-Risk Time-Boxed Consulting Engagements</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>Fast Turnaround Quick-Win Validation</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenConsultation('sustainability')}
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.01] transition-all flex items-center gap-2"
                  >
                    <span>Start Sustainability Discovery</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="mailto:dealsupport@vynk.cloud?subject=Sustainability%20Discovery%20Inquiry"
                    className="px-5 py-3 rounded-xl bg-zinc-950 border border-emerald-500/30 hover:border-emerald-400/50 text-emerald-300 text-xs font-semibold transition-all"
                  >
                    Email dealsupport@vynk.cloud
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                {/* Entry Criteria Box */}
                <div className="p-6 rounded-2xl bg-zinc-950 border border-emerald-500/30 shadow-inner">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>Sustainability Advisory Model</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                      <span className="text-emerald-400 text-xs block mb-1 font-mono font-bold">Complimentary Scoping</span>
                      <p className="text-white font-bold text-xs sm:text-sm">
                        No Minimum Spend Requirement.
                      </p>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      In a complimentary 15-minute call, we quickly establish:
                    </p>
                    <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                      <li>If Vynk can help with your specific sustainability targets</li>
                      <li>Indication of feasible approaches, platforms, and tooling</li>
                      <li>Estimated timelines and commercial monetization potential</li>
                    </ul>
                  </div>
                </div>

                {/* Global Presence Box */}
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-3">
                    Global Specialist Footprint:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs">United States</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs">Europe & UK</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs">Asia-Pacific</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs">Australia & NZ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
