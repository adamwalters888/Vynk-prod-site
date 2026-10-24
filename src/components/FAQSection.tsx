import React, { useState } from 'react';
import { FAQS, VYNK_CONTACT_EMAIL } from '../data/content';
import { ChevronDown, HelpCircle, Mail, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';

interface FAQSectionProps {
  onOpenConsultation: (service?: 'cloud-spend' | 'sustainability' | 'both') => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<'all' | 'cloud' | 'sustainability'>('all');

  const filteredFaqs = FAQS.filter(
    (faq) => filter === 'all' || faq.category === filter
  );

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-10 md:py-14 bg-[#090b0e] border-t border-zinc-800 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[#FF5E14] text-xs font-mono uppercase tracking-widest font-semibold">
            Executive FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-2.5">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base">
            Clear answers about our zero-risk commercial model, vendor scope, and sustainability engagement criteria.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-6">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'cloud', label: 'Cloud Negotiations' },
            { id: 'sustainability', label: 'Sustainability' },
          ].map((cat) => {
            const isSelected = filter === cat.id;
            let activeClasses = 'bg-[#FF5E14] text-white shadow-md shadow-[#FF5E14]/25';
            let inactiveClasses = 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white';

            if (cat.id === 'sustainability') {
              activeClasses = 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 font-bold';
              inactiveClasses = 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-emerald-300 hover:border-emerald-500/40';
            } else if (cat.id === 'all') {
              activeClasses = 'bg-zinc-800 text-white border border-zinc-700 shadow-md font-bold';
              inactiveClasses = 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white';
            }

            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                  isSelected ? activeClasses : inactiveClasses
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isSust = faq.category === 'sustainability';

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? isSust
                      ? 'bg-zinc-900/90 border-emerald-500/50 shadow-xl shadow-emerald-950/20'
                      : 'bg-zinc-900/90 border-[#FF5E14]/50 shadow-xl shadow-orange-950/20'
                    : isSust
                    ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-emerald-500/30'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`p-1.5 rounded border shrink-0 ${
                        isSust
                          ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-400'
                          : 'bg-zinc-950 border-zinc-800 text-[#FF5E14]'
                      }`}
                    >
                      {isSust ? (
                        <Leaf className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <HelpCircle className="w-4 h-4 text-[#FF5E14]" />
                      )}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? isSust
                          ? 'rotate-180 text-emerald-400'
                          : 'rotate-180 text-[#FF5E14]'
                        : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-zinc-300 text-sm leading-relaxed border-t border-zinc-800/60 whitespace-pre-line space-y-4">
                    <p>{faq.answer}</p>
                    {faq.highlight && (
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold ${
                          isSust
                            ? 'bg-emerald-950/80 border border-emerald-500/30 text-emerald-300'
                            : 'bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14]'
                        }`}
                      >
                        <ShieldCheck
                          className={`w-3.5 h-3.5 ${
                            isSust ? 'text-emerald-400' : 'text-[#FF5E14]'
                          }`}
                        />
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                    <div className="pt-2 flex items-center gap-4 text-xs font-mono">
                      <button
                        onClick={() => onOpenConsultation(isSust ? 'sustainability' : 'cloud-spend')}
                        className={`font-bold flex items-center gap-1 underline underline-offset-4 ${
                          isSust
                            ? 'text-emerald-400 hover:text-emerald-300'
                            : 'text-[#FF5E14] hover:text-[#ff7e38]'
                        }`}
                      >
                        Ask directly in 15-min consult <ArrowRight className="w-3 h-3" />
                      </button>
                      <a
                        href={`mailto:${VYNK_CONTACT_EMAIL}?subject=FAQ%20Inquiry%3A%20${encodeURIComponent(
                          faq.question
                        )}`}
                        className="text-zinc-400 hover:text-white flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        Email {VYNK_CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-white font-bold text-base">Have a unique contract or requirement?</h4>
            <p className="text-xs text-zinc-400">Our senior team is available for confidential CXO discussions.</p>
          </div>
          <button
            onClick={() => onOpenConsultation('both')}
            className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shrink-0"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
