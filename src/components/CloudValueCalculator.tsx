import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ShieldAlert, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface CloudValueCalculatorProps {
  onOpenConsultation: (service?: 'cloud-spend' | 'sustainability' | 'both', initialSpend?: string) => void;
}

export const CloudValueCalculator: React.FC<CloudValueCalculatorProps> = ({ onOpenConsultation }) => {
  const [annualSpend, setAnnualSpend] = useState<number>(5); // In Millions USD
  const [contractYears, setContractYears] = useState<number>(3); // Years

  const totalContractValue = annualSpend * contractYears;
  
  // Typical enterprise concession extraction benchmark range (15% - 28%)
  const lowConcession = Math.round(totalContractValue * 0.14 * 10) / 10;
  const highConcession = Math.round(totalContractValue * 0.26 * 10) / 10;
  const lowCoInvest = Math.round(totalContractValue * 0.04 * 10) / 10;
  const highCoInvest = Math.round(totalContractValue * 0.125 * 10) / 10;

  return (
    <section id="calculator" className="py-20 bg-[#0c0e12] border-t border-zinc-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[#FF5E14] text-xs font-mono uppercase tracking-widest font-semibold">
            Executive Value Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-4 mb-3">
            Simulate Your Public Cloud Concession Potential
          </h2>
          <p className="text-zinc-300 text-base">
            See the financial concessions, co-investments, and credit tiers typically unlocked by ex-hyperscaler negotiators.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-10 shadow-2xl">
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
    </section>
  );
};
