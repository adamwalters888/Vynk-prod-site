import React from 'react';

interface VynkLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
  variant?: 'full' | 'mark-only';
}

export const VynkLogo: React.FC<VynkLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
  };

  // Faithful vector rendition of the official Vynk circular logo
  const VynkMark = (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_4px_16px_rgba(255,94,20,0.25)] select-none"
    >
      {/* Charcoal circular disc background matching the official logo */}
      <circle cx="250" cy="250" r="232" fill="#3a3a3d" />

      {/* Outer subtle glow/border ring */}
      <circle cx="250" cy="250" r="231" stroke="#48484c" strokeWidth="2" fill="none" opacity="0.6" />

      {/* 'v' letterform: rounded monoline */}
      <path
        d="M116 226 L152 290 L188 226"
        stroke="#FF5E14"
        strokeWidth="14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 'y' letterform: monoline angled branch with descending tail */}
      <path
        d="M198 226 L230 274"
        stroke="#FF5E14"
        strokeWidth="14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M260 226 L206 312"
        stroke="#FF5E14"
        strokeWidth="14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 'n' letterform: continuous smooth archway */}
      <path
        d="M270 290 V244 C270 231 282 222 297 222 C312 222 324 231 324 244 V290"
        stroke="#FF5E14"
        strokeWidth="14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 'k' letterform: tall vertical stem with upper and lower diagonal arms */}
      <path
        d="M334 196 V290"
        stroke="#FF5E14"
        strokeWidth="14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M336 250 L382 226"
        stroke="#FF5E14"
        strokeWidth="14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M346 244 L386 290"
        stroke="#FF5E14"
        strokeWidth="14.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className={`${iconSizes[size]} ${className}`}>{VynkMark}</div>;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Vynk Logo Mark */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        {VynkMark}
      </div>

      {/* Logotype */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-wider font-extrabold text-white">
          <span className={`font-display tracking-[0.14em] uppercase ${textSizes[size]} text-white`}>
            VYNK
          </span>
          <span className="ml-1.5 text-[#FF5E14] font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#FF5E14]/10 border border-[#FF5E14]/30 uppercase tracking-widest font-bold">
            CLOUD
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] uppercase font-mono tracking-[0.18em] text-zinc-400 -mt-0.5">
            Cloud Spend & Sustainability Advisory
          </span>
        )}
      </div>
    </div>
  );
};

