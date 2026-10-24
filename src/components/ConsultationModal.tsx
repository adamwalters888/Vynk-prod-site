import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Calendar, Globe, Clock } from 'lucide-react';
import { VYNK_CONTACT_EMAIL } from '../data/content';
import { ConsultationFormData } from '../types';
import { TIMEZONE_OPTIONS, getDefaultTimezone } from '../data/timezones';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: 'cloud-spend' | 'sustainability' | 'both';
  initialSpend?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'cloud-spend',
  initialSpend = '$5M - $15M/year',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    serviceInterest: initialService || 'cloud-spend',
    timezone: getDefaultTimezone(),
    annualSpendRange: initialSpend,
    contractRenewalTimeline: 'Next 3-6 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync initial props whenever modal opens or props change
  React.useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: initialService || 'cloud-spend',
        annualSpendRange: initialSpend || prev.annualSpendRange,
        timezone: prev.timezone || getDefaultTimezone(),
      }));
      setSubmitted(false);
    }
  }, [isOpen, initialService, initialSpend]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `15-Min Consult Request: ${formData.companyName} (${formData.serviceInterest})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nWork Email: ${formData.workEmail}\nCompany: ${formData.companyName}\nService: ${formData.serviceInterest}\nTimezone: ${formData.timezone}\nAnnual Cloud Spend: ${formData.annualSpendRange}\nTimeline: ${formData.contractRenewalTimeline}\n\nNotes / Specific Questions:\n${formData.message}`
    );
    window.location.href = `mailto:${VYNK_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const isSustainability = formData.serviceInterest === 'sustainability';
  const accentColor = isSustainability ? 'emerald' : 'orange';
  const focusBorderClass = isSustainability ? 'focus:border-emerald-500' : 'focus:border-[#FF5E14]';

  const placeholderText = isSustainability
    ? 'E.g., Carbon emissions & accounting, carbon offset program guidance, ISO certifications (ISO 14001 / ISO 14064), ESG compliance, or GTM monetization...'
    : formData.serviceInterest === 'both'
    ? 'Mention your hyperscaler renewal timeline, cloud spend, and carbon offset / ISO sustainability goals...'
    : 'Mention your hyperscaler (AWS/GCP/Azure) renewal timeline, annual spend, or specific contract targets...';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-xl rounded-3xl bg-zinc-900 border ${
          isSustainability ? 'border-emerald-500/40 shadow-emerald-950/20' : 'border-zinc-700 shadow-orange-950/20'
        } shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto ${
                isSustainability
                  ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-400'
                  : 'bg-zinc-800 border border-[#FF5E14]/40 text-[#FF5E14]'
              }`}
            >
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">Consultation Request Prepared</h3>
            <p className="text-sm text-zinc-300">
              Your inquiry has been formulated and sent to your email client addressed to{' '}
              <span
                className={`font-mono font-bold ${
                  isSustainability ? 'text-emerald-400' : 'text-[#FF5E14]'
                }`}
              >
                {VYNK_CONTACT_EMAIL}
              </span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                isSustainability
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                  : 'bg-[#FF5E14] hover:bg-[#ff7b37] text-white'
              }`}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mb-2 ${
                  isSustainability
                    ? 'bg-emerald-950/80 border border-emerald-500/30 text-emerald-300'
                    : 'bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14]'
                }`}
              >
                <Calendar
                  className={`w-3.5 h-3.5 ${
                    isSustainability ? 'text-emerald-400' : 'text-[#FF5E14]'
                  }`}
                />
                <span>
                  {isSustainability
                    ? 'Complimentary 15-Min Sustainability Scoping'
                    : 'Complimentary 15-Min CXO Review'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Schedule a Consultation with Vynk
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                {isSustainability
                  ? 'Direct discussion with global sustainability specialists across 10+ countries.'
                  : 'Direct discussion with ex-hyperscaler partners. #Risk = Zero.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your Name"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs sm:text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="name@enterprise.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs sm:text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Enterprise Ltd."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs sm:text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Primary Focus
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceInterest: e.target.value as any })
                  }
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs sm:text-sm ${focusBorderClass} focus:outline-none transition-colors`}
                >
                  <option value="cloud-spend">Cloud Spend Negotiations ($1M+/yr)</option>
                  <option value="sustainability">Sustainability & Carbon Monetisation</option>
                  <option value="both">Both Cloud & Sustainability</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Globe
                      className={`w-3.5 h-3.5 ${
                        isSustainability ? 'text-emerald-400' : 'text-[#FF5E14]'
                      }`}
                    />
                    Your Timezone *
                  </span>
                </label>
                <select
                  value={formData.timezone}
                  onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs sm:text-sm ${focusBorderClass} focus:outline-none transition-colors truncate`}
                >
                  <optgroup label="North America">
                    <option value="America/New_York">Eastern Time (New York, Toronto • ET)</option>
                    <option value="America/Chicago">Central Time (Chicago, Dallas • CT)</option>
                    <option value="America/Denver">Mountain Time (Denver, Phoenix • MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (San Francisco, Seattle • PT)</option>
                  </optgroup>
                  <optgroup label="Europe & UK">
                    <option value="Europe/London">UK & Ireland (London, Dublin • GMT/BST)</option>
                    <option value="Europe/Paris">Central Europe (Paris, Frankfurt, Zurich • CET)</option>
                    <option value="Europe/Helsinki">Eastern Europe (Helsinki, Athens • EET)</option>
                  </optgroup>
                  <optgroup label="Asia Pacific & Middle East">
                    <option value="Asia/Dubai">UAE & Gulf (Dubai, Riyadh • GST)</option>
                    <option value="Asia/Singapore">Singapore & Hong Kong (SGT/HKT)</option>
                    <option value="Asia/Tokyo">Japan & Korea (Tokyo, Seoul • JST)</option>
                    <option value="Asia/Kolkata">India (IST • New Delhi, Bengaluru)</option>
                    <option value="Australia/Sydney">Australia Eastern (Sydney, Melbourne • AEST)</option>
                    <option value="Australia/Perth">Australia Western (Perth • AWST)</option>
                    <option value="Pacific/Auckland">New Zealand (Auckland • NZST)</option>
                  </optgroup>
                  <optgroup label="Other Regions">
                    <option value="America/Sao_Paulo">South America (São Paulo • BRT)</option>
                    <option value="Africa/Johannesburg">South Africa (Johannesburg • SAST)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Expected Timeline
                </label>
                <select
                  value={formData.contractRenewalTimeline}
                  onChange={(e) =>
                    setFormData({ ...formData, contractRenewalTimeline: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs sm:text-sm ${focusBorderClass} focus:outline-none transition-colors`}
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
                      <option value="Immediate / Active Negotiation">Immediate / Active Negotiation</option>
                      <option value="Next 3-6 Months">Next 3–6 Months</option>
                      <option value="Next 6-12 Months">Next 6–12 Months</option>
                      <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Context / Specific Questions
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={placeholderText}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs sm:text-sm ${focusBorderClass} focus:outline-none transition-colors`}
              />
            </div>

            <div
              className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                isSustainability
                  ? 'bg-zinc-950 border-emerald-500/30 text-zinc-300'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400'
              }`}
            >
              {isSustainability ? (
                <>
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-emerald-300">Complimentary Scoping:</strong> A free 15-minute discovery call to evaluate roadmap viability, carbon offset guidance, and ISO certifications. Zero obligation.
                  </span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-200">100% Performance Guarantee:</strong> If we don't deliver measurable financial added value to your cloud negotiations, you don't pay a cent.
                  </span>
                </>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                isSustainability
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01]'
                  : 'bg-[#FF5E14] hover:bg-[#ff722b] text-white shadow-lg shadow-[#FF5E14]/25 hover:shadow-[#FF5E14]/40 hover:scale-[1.01]'
              }`}
            >
              <Send className={`w-4 h-4 ${isSustainability ? 'text-slate-950' : 'text-white'}`} />
              <span>Send Request to dealsupport@vynk.cloud</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

