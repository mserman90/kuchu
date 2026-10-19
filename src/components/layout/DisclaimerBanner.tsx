import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface DisclaimerBannerProps {
  variant?: 'standard' | 'compact';
  className?: string;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({
  variant = 'standard',
  className = ''
}) => {
  if (variant === 'compact') {
    return (
      <div className={`p-3 bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#ffffff] text-xs font-bold leading-snug flex items-start gap-2.5 ${className}`}>
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-black" />
        <p>
          <strong className="font-black uppercase">YASAL & ETOLOJİK BİLDİRİM:</strong> Bu analiz ve içerikler genel bilimsel rehberlik amaçlıdır; veteriner hekim teşhisi niteliği taşımaz. Isırma geçmişi ve ciddi agresyon vakalarında profesyonel veteriner davranış uzmanına danışınız.
        </p>
      </div>
    );
  }

  return (
    <div className={`p-4 sm:p-5 bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#ffffff] ${className}`}>
      <div className="flex flex-col sm:flex-row items-start gap-3.5">
        <div className="w-10 h-10 bg-red-600 text-white border-2 border-black dark:border-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#000000] dark:shadow-[2px_2px_0px_0px_#ffffff]">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black dark:text-white">
              BİLİMSEL STANDART & SORUMLULUK REDDİ BİLDİRİMİ
            </h4>
            <span className="text-[10px] font-black uppercase bg-red-600 text-white px-2 py-0.5 border border-black dark:border-white">
              %100 Force-Free Standart
            </span>
          </div>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            Kuchu platformundaki algoritmalar; Turid Rugaas sakinleşme sinyalleri, Vallortigara & Quaranta nöro-etoloji bulguları ve AVSAB pozitif pekiştirme prensiplerine göre çalışır. 
            <strong className="block mt-1 text-black dark:text-white font-black">
              Bu araç tıbbi veya bireysel klinik tedavi hizmeti sunmaz. Kendine veya çevreye zarar verme riski taşıyan acil durumlarda mutlaka sertifikalı veteriner davranış uzmanına (Veterinary Behaviorist) başvurunuz.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
