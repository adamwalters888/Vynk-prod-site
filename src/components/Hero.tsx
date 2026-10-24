import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (service?: 'cloud-spend' | 'sustainability' | 'both') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#FF5E14]/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-12 w-[400px] h-[280px] bg-emerald-950/15 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a12_1px,transparent_1px),linear-gradient(to_bottom,#27272a12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-wide mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
            <span className="text-zinc-200 font-semibold">Ex-Hyperscaler Commercial Negotiators (AWS • GCP • Azure)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Extract Maximum Commercial Value from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E14] via-[#ff7c36] to-[#FFA066]">
              Hyperscaler Cloud Spend.
            </span>
          </h1>

          {/* Subheading narrative */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 max-w-3xl mx-auto leading-snug font-medium mb-4">
            We are ex-hyperscaler deal insiders who save enterprise buyers millions on multi-year cloud contracts.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Having lead the negotiations for the 3 largest public cloud providers on the planet, we know intimately how to unlock maximum concession value, accelerate time-to-contract, and safeguard your future commitments. We have sold &gt; $10B in multi-year Cloud agreements and we WILL help you unlock maximum value for your Cloud commitments.
          </p>

          {/* THE VYNK PERFORMANCE PLEDGE BOX */}
          <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-[#FF5E14]/30 shadow-2xl backdrop-blur-md mb-10 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5E14]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF5E14] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
                <span>The Vynk Performance Pledge</span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-zinc-900 border border-[#FF5E14]/30 text-[#FF5E14]">
                #Risk = Zero
              </span>
            </div>

            <p className="text-base sm:text-lg font-bold text-white mb-4 leading-snug">
              "If we don't deliver measurable added value to your cloud contract, you don't pay a cent."
            </p>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-zinc-400 pt-3 border-t border-zinc-800 font-mono">
              <span className="text-zinc-300 font-medium">Min. Annual Spend: $1M (entry point)</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-zinc-300 font-medium">Min. Term: 2-Years</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-[#FF5E14] font-bold">100% Success-Aligned</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onOpenConsultation('cloud-spend')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF5E14]/25 hover:shadow-[#FF5E14]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>Evaluate Cloud Contract</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#calculator"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#FF5E14]" />
              <span>Concession Value Calculator</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

