import React from 'react';

interface KuchuLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

/**
 * KuchuLogoIcon — Swiss Modernism + Neo-Brutalism köpek kafası ikonu
 *
 * Konsept: Josef Müller-Brockmann grid disiplininde geometrik köpek profili.
 *   - Siyah dolgu zemin (arka plan)
 *   - Beyaz köpek baş silueti (frontview, simetrik, blok geometri)
 *   - Dik, sivri kulaklar: Etolojik uyanıklık + analiz durumu
 *   - Kırmızı (#DC2626) gözler: Vision AI odak noktaları
 *   - Alt pati izi motifi: Köpek kimliği vurgusu
 *   - 2px siyah dış çerçeve: Brutalist imza
 */
export const KuchuLogoIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Kuçu — Köpek Davranış Analizi Logosu"
    >
      {/* ── Brutalist outer frame ── */}
      <rect width="64" height="64" fill="currentColor" />
      <rect x="3" y="3" width="58" height="58" fill="#0a0a0a" />

      {/* ── Köpek baş silueti (simetrik, frontview, saf geometri) ── */}

      {/* Sol sivri kulak */}
      <polygon points="11,28 18,8 26,22" fill="#FFFFFF" />
      {/* Sağ sivri kulak */}
      <polygon points="53,28 46,8 38,22" fill="#FFFFFF" />

      {/* Kafa ana bloğu (trapezoid) */}
      <path d="M18 28 H46 L42 46 H22 Z" fill="#FFFFFF" />

      {/* Kafa üst bloğu (yuvarlak değil, düz keskin) */}
      <rect x="18" y="22" width="28" height="10" fill="#FFFFFF" />

      {/* Sol göz — kırmızı, kare, Vision AI noktası */}
      <rect x="22" y="26" width="6" height="5" fill="#DC2626" />
      {/* Sağ göz — kırmızı, kare */}
      <rect x="36" y="26" width="6" height="5" fill="#DC2626" />

      {/* Göz parlaklık noktaları (beyaz piksel) */}
      <rect x="23" y="27" width="2" height="2" fill="#FFFFFF" />
      <rect x="37" y="27" width="2" height="2" fill="#FFFFFF" />

      {/* Burun bloğu — ortalanmış siyah dikdörtgen */}
      <rect x="28" y="36" width="8" height="5" fill="#0a0a0a" />

      {/* Ağız çizgisi — T şekli */}
      <rect x="32" y="41" width="1" height="3" fill="#0a0a0a" />
      <rect x="26" y="41" width="12" height="1" fill="#0a0a0a" />

      {/* ── Alt pati izi motifi (Kuçu kimlik vurgusu) ── */}
      {/* Geometrik köpek pati: 3 parmak bloğu + sağda kırmızı nokta */}
      <rect x="3"  y="51" width="58" height="1"  fill="#FFFFFF" />
      <rect x="5"  y="53" width="8"  height="8"  fill="#FFFFFF" />
      <rect x="16" y="52" width="8"  height="8"  fill="#FFFFFF" />
      <rect x="27" y="53" width="8"  height="8"  fill="#FFFFFF" />
      {/* Tek kırmızı vurgu karesi — sağ köşe */}
      <rect x="50" y="54" width="9"  height="6"  fill="#DC2626" />
    </svg>
  );
};

export const KuchuLogo: React.FC<KuchuLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 56 : 44;

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>

      {/* İkon + Brutalist offset gölge */}
      <div className="relative text-black dark:text-white shrink-0">
        <KuchuLogoIcon size={iconSize} />
        {/* Kırmızı sert offset gölge */}
        <div
          className="absolute inset-0 bg-red-600 -z-10 pointer-events-none"
          style={{ transform: 'translate(3px, 3px)' }}
        />
      </div>

      {/* Metin grubu */}
      <div className="flex flex-col leading-none gap-1">

        {/* Ana marka adı satırı */}
        <div className="flex items-center gap-2">
          <span
            className={`font-black uppercase tracking-tight text-black dark:text-white leading-none ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-[22px]'
            }`}
          >
            KUÇU
          </span>

          {/* Kırmızı ayırıcı kare */}
          <span className="w-2.5 h-2.5 bg-red-600 inline-block shrink-0" />

          {/* Sürüm etiketi */}
          <span className="font-mono text-[9px] font-black uppercase bg-black text-white dark:bg-white dark:text-black px-1.5 py-[3px] tracking-widest border border-black dark:border-white">
            AI
          </span>
        </div>

        {/* Alt başlık */}
        {showSubtitle && (
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hidden sm:block">
            KÖPEK DAVRANIŞ&nbsp;•&nbsp;ETOLOJİ&nbsp;•&nbsp;POZİTİF R+
          </p>
        )}

      </div>
    </div>
  );
};
