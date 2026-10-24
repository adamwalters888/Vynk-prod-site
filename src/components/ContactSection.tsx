import React, { useState } from 'react';
import { VYNK_CONTACT_EMAIL } from '../data/content';
import { Mail, Send, ShieldCheck, CheckCircle2, Building, Calendar, Sparkles, Globe } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { TIMEZONE_OPTIONS, getDefaultTimezone } from '../data/timezones';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    serviceInterest: 'cloud-spend',
    timezone: getDefaultTimezone(),
    annualSpendRange: '$5M - $15M/year',
    contractRenewalTimeline: 'Next 3-6 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const isSustainability = formData.serviceInterest === 'sustainability';
  const focusBorderClass = isSustainability ? 'focus:border-emerald-500' : 'focus:border-[#FF5E14]';

  const placeholderText = isSustainability
    ? 'E.g., Carbon emissions & accounting, carbon offset program guidance, ISO certifications (ISO 14001 / ISO 14064), ESG compliance, or GTM monetization...'
    : formData.serviceInterest === 'both'
    ? 'Mention your hyperscaler renewal timeline, cloud spend, and carbon offset / ISO sustainability goals...'
    : 'Brief note on current challenges, hyperscaler partnership, renewal timelines, or target concessions...';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link for direct mail draft
    const subject = encodeURIComponent(`CXO Advisory Inquiry: ${formData.companyName} (${formData.serviceInterest})`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nWork Email: ${formData.workEmail}\nCompany: ${formData.companyName}\nService: ${formData.serviceInterest}\nTimezone: ${formData.timezone}\nAnnual Cloud Spend: ${formData.annualSpendRange}\nTimeline: ${formData.contractRenewalTimeline}\n\nNotes / Context:\n${formData.message}`
    );
    window.location.href = `mailto:${VYNK_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-[#0c0e12] border-t border-zinc-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Info & Zero-Risk Statement */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[#FF5E14] text-xs font-mono uppercase tracking-widest font-semibold">
              Direct CXO Advisory Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Connect with VYNK
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed">
              Whether you have an upcoming Hyperscaler renewal in the next 6 months or are evaluating practical paths to monetise your sustainability commitments, let's connect.
            </p>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                Direct Deal Support & Advisory Inbox
              </span>
              <a
                href={`mailto:${VYNK_CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-lg sm:text-xl font-mono font-bold text-[#FF5E14] hover:text-[#ff7b37] transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{VYNK_CONTACT_EMAIL}</span>
              </a>
              <p className="text-xs text-zinc-400">
                Responses handled directly by ex-hyperscaler partners within 1 business day.
              </p>
            </div>

            {/* Risk Free Guarantee Pill */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-[#FF5E14]/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#FF5E14] shrink-0 mt-0.5" />
              <div className="text-xs text-zinc-300">
                <span className="font-bold text-white block mb-0.5">The Vynk Performance Pledge</span>
                We only succeed when you extract proven, measurable value from your provider contracts. #Risk = Zero.
              </div>
            </div>
          </div>

          {/* Right Column: Contact / Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border border-[#FF5E14]/40 text-[#FF5E14] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Initialized</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Your email client has been launched with your inquiry details addressed to <span className="text-[#FF5E14] font-mono">{VYNK_CONTACT_EMAIL}</span>. We look forward to speaking with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <h3 className="text-xl font-bold text-white">Request a 15-Minute CXO Consult</h3>
                    <span className="text-xs font-mono text-[#FF5E14] font-bold">Complimentary</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Jane Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="jane@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Enterprises"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceInterest: e.target.value as any })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                      >
                        <option value="cloud-spend">Cloud Spend Negotiations ($1M+/yr spend)</option>
                        <option value="sustainability">Sustainability Monetisation & Advisory</option>
                        <option value="both">Both Cloud Spend & Sustainability</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Globe
                          className={`w-3.5 h-3.5 ${
                            isSustainability ? 'text-emerald-400' : 'text-[#FF5E14]'
                          }`}
                        />
                        Your Timezone *
                      </label>
                      <select
                        value={formData.timezone}
                        onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                        className={`w-full px-3.5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors truncate`}
                      >
                        <optgroup label="North America">
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        </optgroup>
                        <optgroup label="Europe & UK">
                          <option value="Europe/London">UK (London • GMT/BST)</option>
                          <option value="Europe/Paris">Central Europe (CET)</option>
                          <option value="Europe/Helsinki">Eastern Europe (EET)</option>
                        </optgroup>
                        <optgroup label="Asia Pacific & Middle East">
                          <option value="Asia/Dubai">UAE (Dubai • GST)</option>
                          <option value="Asia/Singapore">Singapore / HK (SGT)</option>
                          <option value="Asia/Tokyo">Japan / Korea (JST)</option>
                          <option value="Asia/Kolkata">India (IST)</option>
                          <option value="Australia/Sydney">Australia East (AEST)</option>
                          <option value="Pacific/Auckland">New Zealand (NZST)</option>
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Est. Cloud Spend
                      </label>
                      <select
                        value={formData.annualSpendRange}
                        onChange={(e) => setFormData({ ...formData, annualSpendRange: e.target.value })}
                        className={`w-full px-3.5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                      >
                        <option value="Under $1M/yr">&lt;$1M / yr (Sust.)</option>
                        <option value="$1M - $5M/year">$1M – $5M / yr</option>
                        <option value="$5M - $15M/year">$5M – $15M / yr</option>
                        <option value="$15M - $50M+/year">$15M – $50M+ / yr</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        {isSustainability ? 'Expected Timeline' : 'Renewal Timeline'}
                      </label>
                      <select
                        value={formData.contractRenewalTimeline}
                        onChange={(e) =>
                          setFormData({ ...formData, contractRenewalTimeline: e.target.value })
                        }
                        className={`w-full px-3.5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                      >
                        {isSustainability ? (
                          <>
                            <option value="1 - 3 Months">1 – 3 Months</option>
                            <option value="Next 3-6 Months">Next 3–6 Months</option>
                            <option value="Next 6-12 Months">Next 6–12 Months</option>
                            <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                          </>
                        ) : (
                          <>
                            <option value="Next 3 Months">Next 0–3 Months</option>
                            <option value="Next 3-6 Months">Next 3–6 Months</option>
                            <option value="Next 6-12 Months">Next 6–12 Months</option>
                            <option value="Exploratory">Exploratory</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Context / Specific Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={placeholderText}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group ${
                      isSustainability
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99]'
                        : 'bg-[#FF5E14] hover:bg-[#ff722b] text-white shadow-lg shadow-[#FF5E14]/25 hover:shadow-[#FF5E14]/40 hover:scale-[1.01] active:scale-[0.99]'
                    }`}
                  >
                    <Send
                      className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${
                        isSustainability ? 'text-slate-950' : 'text-white'
                      }`}
                    />
                    <span>Send Consultation Request to dealsupport@vynk.cloud</span>
                  </button>
                  <p className="text-[11px] text-center text-zinc-400 font-mono">
                    Direct confidential contact. No spam or commercial resell.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
