import React, { useState, useEffect } from 'react';
import { VynkLogo } from './VynkLogo';
import { Shield, FileText, Lock, ChevronRight, Mail, ArrowLeft, DownloadCloud } from 'lucide-react';
import { VYNK_CONTACT_EMAIL } from '../data/content';

interface TermsPageProps {
  onBackToHome: () => void;
  onOpenExportGuide?: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBackToHome, onOpenExportGuide }) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-zinc-100 selection:bg-[#FF5E14] selection:text-white flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#0c0e12]/95 backdrop-blur-md border-b border-zinc-800 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Back to Home"
          >
            <VynkLogo size="md" showSubtitle={false} />
          </button>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all border border-zinc-700 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF5E14]" />
            <span>Back to Main Page</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14] text-xs font-mono font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>LEGAL & COMPLIANCE PORTAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Terms & Conditions & Privacy Policy
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Official agreements, service warranties, intellectual property protections, and privacy safeguards for Vynk Cloud (https://vynk.cloud).
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-zinc-800 bg-zinc-900/60 rounded-t-2xl px-4 pt-2">
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3.5 px-6 text-xs font-bold tracking-wider uppercase flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'border-[#FF5E14] text-[#FF5E14]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms & Conditions</span>
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3.5 px-6 text-xs font-bold tracking-wider uppercase flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-[#FF5E14] text-[#FF5E14]'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="p-6 sm:p-10 rounded-b-2xl bg-zinc-950 border border-t-0 border-zinc-800 space-y-8 text-sm leading-relaxed text-zinc-300 shadow-2xl">
          {activeTab === 'terms' ? (
            <div className="space-y-7 animate-in fade-in duration-150">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Terms & Conditions of Use</h2>
                <div className="h-0.5 w-16 bg-[#FF5E14] mb-6"></div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Terms</span>
                </h3>
                <p className="pl-6">
                  By accessing this website you agree to be bound by these Terms and Conditions of Use. Access other than pursuant to these Terms and Conditions of Use is prohibited.
                </p>
                <p className="pl-6">
                  The information and materials (“Products” and “Services”) exhibited on this website are protected intellectual property and subject to copyright. The Products are for viewing purposes only. Downloading, copying or accessing the Products or Services for any other purpose is prohibited. For the avoidance of doubt, if you would like to re-use any of the Products or Services for any purpose, you may only do so after receiving approval from{' '}
                  <a href={`mailto:${VYNK_CONTACT_EMAIL}`} className="text-[#FF5E14] hover:underline font-semibold">
                    {VYNK_CONTACT_EMAIL}
                  </a>.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Disclaimer</span>
                </h3>
                <p className="pl-6">
                  The Products and Services are exhibited “as is”. We make no warranties whatever (other than those imposed by law) as to the nature, quality or other characteristics of the Products. The Products may include technical, typographical or photographic errors. If you use any of the Products, you do so on the basis of your own judgment as to their quality and suitability for your purposes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Limitations</span>
                </h3>
                <p className="pl-6">
                  We are not liable (and you release us from liability) for any loss or damage which you may incur as a direct or indirect consequence of using any of the Products or Service for any purpose whatever.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Revisions and Errata</span>
                </h3>
                <p className="pl-6">
                  We may add to, amend or delete the Products or Services at any time at our absolute discretion. We give no commitment to update the Products or Services other than as we decide from time to time.
                </p>
                <p className="pl-6">
                  We may add to, amend or delete any of these Terms and Conditions of Use at any time in our absolute discretion.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-7 animate-in fade-in duration-150">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Privacy Policy</h2>
                <div className="h-0.5 w-16 bg-[#FF5E14] mb-6"></div>
              </div>

              <p>
                This Privacy Policy explains how Vynk (“we,” “us,” or “our”) collects, uses, discloses, and safeguards the personal information of visitors (“users” or “you”) of our website [https://vynk.cloud/] (the “Website”). We are committed to protecting your privacy and ensuring the security of your personal information. By accessing or using our Website, you agree to the terms and practices described in this Privacy Policy.
              </p>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Information We Collect</span>
                </h3>
                <ul className="list-disc pl-11 space-y-2 text-zinc-300">
                  <li>
                    <strong className="text-white">Personal Information:</strong> We may collect personal information that you voluntarily provide to us, such as your name, email address, contact number, and any other information you choose to provide when you fill out forms on our Website, subscribe to our newsletter, or contact us through the provided communication channels.
                  </li>
                  <li>
                    <strong className="text-white">Usage Information:</strong> We may automatically collect certain information about how you interact with our Website, including your IP address, browser type, operating system, device information, and pages visited.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Use of Collected Information</span>
                </h3>
                <p className="pl-6">We may use the personal information we collect to:</p>
                <ul className="list-disc pl-11 space-y-1.5 text-zinc-300">
                  <li>Provide and personalize our services to meet your specific needs.</li>
                  <li>Respond to your inquiries, requests, or comments.</li>
                  <li>Send you important administrative information, such as updates to our policies or changes to our services.</li>
                  <li>Send you promotional emails or newsletters with your consent. You can opt-out of receiving such communications at any time. Improve our Website, services, and user experience.</li>
                  <li>Detect and prevent fraudulent or unauthorized activities.</li>
                  <li>Comply with legal obligations and enforce our terms of service.</li>
                </ul>
                <p className="pl-6 pt-2 font-medium">
                  We will not sell, rent, trade, or otherwise disclose your personal information to third parties without your consent, except as described in this Privacy Policy or as required by law.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Data Retention</span>
                </h3>
                <p className="pl-6">
                  We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely dispose of it.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Information Security</span>
                </h3>
                <p className="pl-6">
                  We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Third-Party Links</span>
                </h3>
                <p className="pl-6">
                  Our Website may contain links to third-party websites or services that are not operated by us. Once you leave our Website, we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We encourage you to review the privacy policies of those third parties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Children’s Privacy</span>
                </h3>
                <p className="pl-6">
                  Our Website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected personal information from a child, please contact us, and we will take appropriate measures to remove the information from our records.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF5E14]" />
                  <span>Changes to the Privacy Policy</span>
                </h3>
                <p className="pl-6">
                  We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on our Website. Your continued use of our Website after the posting of any changes constitutes your acceptance of those changes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF5E14]" />
                  <span>Contact Us</span>
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at{' '}
                  <a href={`mailto:${VYNK_CONTACT_EMAIL}`} className="text-[#FF5E14] font-semibold hover:underline">
                    {VYNK_CONTACT_EMAIL}
                  </a>. By using our Website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800/80 py-8 text-xs text-zinc-400 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} VYNK Cloud. All rights reserved.</p>
          <button
            onClick={onBackToHome}
            className="text-[#FF5E14] hover:underline font-semibold cursor-pointer"
          >
            ← Back to Vynk Cloud Landing Page
          </button>
        </div>
      </footer>
    </div>
  );
};
