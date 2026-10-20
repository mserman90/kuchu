import React from 'react';

interface KuchuLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const KuchuLogoIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 40,
  className = '' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Kuçu Logo"
    >
      {/* Brutalist Frame */}
      <rect x="2" y="2" width="44" height="44" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      
      {/* Inner Geometric Contrast Plate */}
      <rect x="6" y="6" width="36" height="36" fill="#000000" />
      
      {/* Stylized Modernist Attentive Dog Head Profile (Pure Geometry) */}
      {/* Muzzle and Jaw */}
      <path 
        d="M12 28H28L34 20V12L24 16L18 24H12V28Z" 
        fill="#FFFFFF" 
      />
      {/* Upright Alert Ear */}
      <polygon 
        points="22,16 28,6 34,12 28,18" 
        fill="#DC2626" 
      />
      {/* Keen Intelligent Eye */}
      <rect x="24" y="20" width="3" height="3" fill="#000000" />
      
      {/* Canine Nose Tip */}
      <rect x="12" y="24" width="4" height="4" fill="#DC2626" />

      {/* Modernist Positive Wave Accent */}
      <rect x="36" y="28" width="4" height="4" fill="#FFFFFF" />
      <rect x="36" y="34" width="4" height="4" fill="#DC2626" />
    </svg>
  );
};

export const KuchuLogo: React.FC<KuchuLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Vector Icon Container with Brutalist Shadow */}
      <div className="relative text-black dark:text-white group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
        <KuchuLogoIcon size={iconSize} />
        {/* Brutal shadow accent behind icon */}
        <div className="absolute -bottom-1 -right-1 w-full h-full bg-red-600 -z-10 pointer-events-none" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black uppercase tracking-tightest text-black dark:text-white ${
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}>
            KUÇU
          </span>
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-600 inline-block shrink-0 shadow-xs" />
          <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 border border-black dark:border-white tracking-widest">
            PRO
          </span>
        </div>

        {showSubtitle && (
          <p className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mt-1 hidden sm:block">
            BİLİMSEL KÖPEK DAVRANIŞ ENSTİTÜSÜ
          </p>
        )}
      </div>
    </div>
  );
};
