import React, { useState } from 'react';
import { X, DownloadCloud, Server, Terminal, Check, Copy, FileCode2, Globe } from 'lucide-react';

interface ExportGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportGuideModal: React.FC<ExportGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(id);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-zinc-900 border border-zinc-700 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 text-[#FF5E14] text-xs font-mono font-bold mb-2">
              <DownloadCloud className="w-3.5 h-3.5 text-[#FF5E14]" />
              <span>Hostinger & cPanel Deployment Package</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Download Pre-Built Website Package
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Download the fully compiled production package and upload directly into Hostinger File Manager (<code className="text-zinc-200">public_html</code>).
            </p>
          </div>

          {/* Direct Download Action */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF5E14]/20 via-zinc-900 to-zinc-950 border border-[#FF5E14]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <FileCode2 className="w-4 h-4 text-[#FF5E14]" />
                <span>vynk-production.tar.gz</span>
              </div>
              <p className="text-xs text-zinc-300">
                Contains pre-compiled HTML, CSS, JavaScript, PDF, and high-res brand assets.
              </p>
            </div>
            <a
              href="/vynk-production.tar.gz"
              download="vynk-production.tar.gz"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#FF5E14]/30 shrink-0"
            >
              <DownloadCloud className="w-4 h-4" />
              <span>Download Package</span>
            </a>
          </div>

          <div className="space-y-4">
            {/* Method 1: Exporting as Static HTML/JS for Any Web Host */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Server className="w-4 h-4 text-[#FF5E14]" />
                  <span>Option A: Standard Web Hosting (cPanel / Apache / Nginx)</span>
                </div>
                <span className="text-[10px] font-mono bg-zinc-900 text-[#FF5E14] border border-[#FF5E14]/30 px-2 py-0.5 rounded font-bold">
                  Recommended for Static Hosts
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                1. Download or clone this project repository to your local computer.<br />
                2. Run the production build command in your terminal:
              </p>
              <div className="relative p-3 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-[#FF5E14] flex items-center justify-between">
                <code>npm run build</code>
                <button
                  onClick={() => copyToClipboard('npm run build', 'build')}
                  className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  title="Copy command"
                >
                  {copiedStep === 'build' ? <Check className="w-4 h-4 text-[#FF5E14]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-zinc-400">
                3. This generates a compiled <code className="text-zinc-200">dist/</code> folder containing pure static HTML, CSS, JS, and SVG assets.<br />
                4. Upload the contents of <code className="text-zinc-200">dist/</code> directly to your web root folder (e.g. <code className="text-zinc-200">public_html</code> or <code className="text-zinc-200">/var/www/html</code>).
              </p>
            </div>

            {/* Method 2: Modern Git Deploy (Vercel, Netlify, Cloudflare) */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Globe className="w-4 h-4 text-zinc-200" />
                  <span>Option B: Continuous Git Deploy (Vercel / Netlify / Cloudflare)</span>
                </div>
                <span className="text-[10px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 px-2 py-0.5 rounded font-bold">
                  Zero Config
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                1. Export this repository to your GitHub account using the Google AI Studio menu.<br />
                2. Connect the repository in Vercel / Netlify / Cloudflare Pages.<br />
                3. Framework preset will automatically detect Vite. Set build command to <code className="text-zinc-200 font-mono">npm run build</code> and output directory to <code className="text-zinc-200 font-mono">dist</code>.
              </p>
            </div>

            {/* Apache .htaccess snippet for SPA routing if needed */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-300 font-semibold">
                  Optional: Apache .htaccess Rewrite Rule
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /\n  RewriteRule ^index\\.html$ - [L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule . /index.html [L]\n</IfModule>`,
                      'htaccess'
                    )
                  }
                  className="p-1 rounded text-zinc-400 hover:text-white flex items-center gap-1 text-[11px] font-mono"
                >
                  {copiedStep === 'htaccess' ? <Check className="w-3.5 h-3.5 text-[#FF5E14]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy .htaccess</span>
                </button>
              </div>
              <p className="text-[11px] text-zinc-400">
                If your host uses Apache (cPanel), placing this file in your <code className="text-zinc-200">public_html</code> directory ensures seamless single-page routing for deep links.
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
