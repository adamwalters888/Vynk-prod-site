import React from 'react';
import { VynkLogo } from './VynkLogo';
import { VYNK_CONTACT_EMAIL } from '../data/content';
import { Mail, Globe, ShieldCheck, ArrowUpRight, DownloadCloud } from 'lucide-react';

interface FooterProps {
  onOpenExportGuide: () => void;
  onOpenConsultation: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportGuide, onOpenConsultation, onOpenTerms }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <VynkLogo size="md" />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              VYNK is a global executive team of former commercial directors from Google Cloud, AWS, Microsoft, Dell, HP, IBM, and DXC. We help enterprise CXOs maximize cloud contract value and monetize sustainability.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`mailto:${VYNK_CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#FF5E14] hover:text-[#ff7e38] transition-colors p-2 rounded-lg bg-zinc-900 border border-zinc-800"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{VYNK_CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Core Practices */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Practices
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#cloud-spend" className="hover:text-[#FF5E14] transition-colors">
                  Cloud Spend Negotiations
                </a>
              </li>
              <li>
                <a href="#cloud-spend" className="hover:text-[#FF5E14] transition-colors">
                  Hyperscaler Concessions
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-zinc-200 transition-colors">
                  Enterprise Sustainability
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-zinc-200 transition-colors">
                  GTM Carbon Monetisation
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#FF5E14] transition-colors">
                  Concession Value Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Approach & FAQs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  The Vynk Approach
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  How Vynk Gets Paid
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Entry Criteria ($1M+ Spend)
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Supported Providers
                </a>
              </li>
              <li>
                {onOpenTerms ? (
                  <button
                    onClick={onOpenTerms}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Terms & Conditions
                  </button>
                ) : (
                  <a href="#terms" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                )}
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="text-[#FF5E14] hover:text-[#ff7e38] font-semibold"
                >
                  Book 15-Min Consult
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Presence */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Global Presence
            </h4>
            <p className="text-xs text-zinc-400">
              Specialists active across 10+ countries supporting Fortune 500 & Global Enterprise accounts:
            </p>
            <div className="space-y-1.5 text-xs text-zinc-300 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />
                <span>United States & Canada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />
                <span>Europe & United Kingdom</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />
                <span>Asia-Pacific</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />
                <span>Australia & New Zealand (ANZ)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} VYNK Cloud. All rights reserved.</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">#Risk = Zero</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>dealsupport@vynk.cloud</span>
            <span>•</span>
            <a href="https://vynk.cloud" className="hover:text-[#FF5E14] transition-colors">
              vynk.cloud
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
