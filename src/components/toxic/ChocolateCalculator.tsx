import React, { useState } from 'react';
import { 
  calculateChocolateToxicity, 
  ChocolateCalcResult 
} from '@/lib/content/toxicFoods';
import { 
  Flame, 
  PhoneCall 
} from 'lucide-react';
import { useDog } from '@/context/DogContext';
import { useLanguage } from '@/contexts/LanguageContext';

export const ChocolateCalculator: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { activeDog } = useDog();
  const { lang } = useLanguage();

  // Approximate default weight based on size if activeDog exists
  const getDefaultWeight = () => {
    if (!activeDog) return 15;
    if (activeDog.size === 'small') return 6;
    if (activeDog.size === 'medium') return 16;
    if (activeDog.size === 'large') return 30;
    if (activeDog.size === 'giant') return 45;
    return 15;
  };

  const [weightKg, setWeightKg] = useState<number>(getDefaultWeight());
  const [chocolateType, setChocolateType] = useState<'white' | 'milk' | 'dark' | 'baking_cocoa'>('milk');
  const [amountGrams, setAmountGrams] = useState<number>(50);

  const result: ChocolateCalcResult = calculateChocolateToxicity(weightKg, chocolateType, amountGrams, lang);

  const getSeverityStyle = (sev: ChocolateCalcResult['severity']) => {
    switch (sev) {
      case 'negligible':
        return {
          bg: 'bg-green-500/10 dark:bg-green-950/20',
          border: 'border-green-600',
          text: 'text-green-700 dark:text-green-400',
          badge: 'bg-green-600 text-white',
          label: lang === 'en' ? 'SAFE / LOW RISK' : 'GÜVENLİ / DÜŞÜK RİSK'
        };
      case 'mild':
        return {
          bg: 'bg-yellow-500/10 dark:bg-yellow-950/20',
          border: 'border-yellow-500',
          text: 'text-yellow-700 dark:text-yellow-400',
          badge: 'bg-yellow-500 text-black',
          label: lang === 'en' ? 'MILD - MODERATE RISK' : 'HAFİF - ORTA RİSK'
        };
      case 'moderate':
        return {
          bg: 'bg-orange-500/10 dark:bg-orange-950/20',
          border: 'border-orange-600',
          text: 'text-orange-700 dark:text-orange-400',
          badge: 'bg-orange-600 text-white',
          label: lang === 'en' ? 'HIGH TOXICITY' : 'YÜKSEK TOKSİSİTE'
        };
      case 'severe_critical':
        return {
          bg: 'bg-red-500/10 dark:bg-red-950/30',
          border: 'border-red-600',
          text: 'text-red-700 dark:text-red-400',
          badge: 'bg-red-600 text-white animate-pulse',
          label: lang === 'en' ? '🚨 EMERGENCY LIFE THREAT' : '🚨 ACİL HAYATİ TEHLİKE'
        };
    }
  };

  const style = getSeverityStyle(result.severity);

  return (
    <div className={`p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-6 ${className}`}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-black dark:border-white pb-3">
        <div>
          <span className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-red-600" />
            {lang === 'en' ? 'VETERINARY THEOBROMINE ENGINE' : 'VETERİNER TEOBROMİN HESAPLAMA MOTORU'}
          </span>
          <h3 className="text-xl font-black uppercase text-black dark:text-white mt-0.5">
            {lang === 'en' ? 'CHOCOLATE TOXICITY CALCULATOR' : 'ÇİKOLATA TOKSİSİTESİ HESAPLAYICISI'}
          </h3>
        </div>
        <div className="font-mono text-xs font-bold text-zinc-500">
          {lang === 'en' ? 'MERCK TOXICOLOGY STANDARD' : 'MERCK TOKSİKOLOJİ STANDARDI'}
        </div>
      </div>

      <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {lang === 'en'
          ? 'Dogs cannot metabolize the theobromine compound found in chocolate. Calculate the real-time clinical risk level based on weight, cocoa intensity, and grams eaten:'
          : 'Köpekler çikolatadaki teobromin maddesini metabolize edemez. Köpeğinizin kilosu, çikolatanın kakao yoğunluğu ve gramajına göre anlık risk seviyesini hesaplayın:'}
      </p>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Weight Input */}
        <div className="space-y-1.5 p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
          <label className="block font-mono text-xs font-black uppercase text-black dark:text-white flex items-center justify-between">
            <span>{lang === 'en' ? "DOG'S WEIGHT" : 'KÖPEĞİN AĞIRLIĞI'}</span>
            <span className="text-red-600">{weightKg} KG</span>
          </label>
          <input
            type="range"
            min="1"
            max="70"
            step="1"
            value={weightKg}
            onChange={(e) => setWeightKg(Number(e.target.value))}
            className="w-full accent-red-600 cursor-pointer"
          />
          <div className="flex justify-between font-mono text-[10px] text-zinc-500">
            <span>1 kg ({lang === 'en' ? 'Puppy' : 'Yavru'})</span>
            <span>30 kg</span>
            <span>70 kg ({lang === 'en' ? 'Giant' : 'Dev'})</span>
          </div>
        </div>

        {/* Chocolate Type */}
        <div className="space-y-1.5 p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
          <label className="block font-mono text-xs font-black uppercase text-black dark:text-white">
            {lang === 'en' ? 'CHOCOLATE TYPE' : 'ÇİKOLATA TÜRÜ'}
          </label>
          <select
            value={chocolateType}
            onChange={(e) => setChocolateType(e.target.value as any)}
            className="w-full p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-mono text-xs font-bold uppercase cursor-pointer"
          >
            <option value="white">{lang === 'en' ? 'White Chocolate (Trace Amount)' : 'Beyaz Çikolata (Eser Miktar)'}</option>
            <option value="milk">{lang === 'en' ? 'Milk Chocolate (Standard)' : 'Sütlü Çikolata (Normal)'}</option>
            <option value="dark">{lang === 'en' ? 'Dark Chocolate (60-70% Cocoa)' : 'Bitter Çikolata (%60-70 Kakao)'}</option>
            <option value="baking_cocoa">{lang === 'en' ? 'Pure Baking Cocoa / Couverture (85%+)' : 'Saf Kakao Tozu / Kuvertür (%85+)'}</option>
          </select>
          <span className="font-mono text-[10px] text-zinc-500 block">
            {lang === 'en' ? 'Higher cocoa percentage increases toxicity exponentially.' : 'Kakao oranı arttıkça toksisite katlanarak artar.'}
          </span>
        </div>

        {/* Amount Input */}
        <div className="space-y-1.5 p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
          <label className="block font-mono text-xs font-black uppercase text-black dark:text-white flex items-center justify-between">
            <span>{lang === 'en' ? 'AMOUNT CONSUMED' : 'YENEN MİKTAR'}</span>
            <span className="text-red-600">{amountGrams} {lang === 'en' ? 'GRAMS' : 'GRAM'}</span>
          </label>
          <input
            type="number"
            min="1"
            max="1000"
            value={amountGrams}
            onChange={(e) => setAmountGrams(Math.max(1, Number(e.target.value)))}
            className="w-full p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-mono text-xs font-bold"
            placeholder={lang === 'en' ? 'In grams' : 'Gram cinsinden'}
          />
          <div className="flex gap-1 pt-0.5">
            {[20, 50, 100, 200].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setAmountGrams(g)}
                className="px-2 py-0.5 text-[10px] font-mono border border-black dark:border-white hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                {g}g
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Result Card */}
      <div className={`p-5 border-4 ${style.border} ${style.bg} space-y-3 shadow-brutal-sm`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black dark:border-white pb-2">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 font-mono text-xs font-black uppercase border border-black ${style.badge}`}>
              {style.label}
            </span>
            <span className="font-mono text-xs font-bold text-black dark:text-white">
              {lang === 'en' ? 'Theobromine Dose:' : 'Teobromin Dozu:'} <strong>{result.theobromineDoseMgPerKg} mg/kg</strong>
            </span>
          </div>

          <div className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
            {lang === 'en' ? 'Total Ingested Theobromine:' : 'Toplam Alınan Teobromin:'} <strong>{result.totalTheobromineMg} mg</strong>
          </div>
        </div>

        <h4 className="text-base font-black uppercase text-black dark:text-white">
          {result.summary}
        </h4>

        <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-mono text-xs leading-relaxed text-black dark:text-white">
          <strong>{lang === 'en' ? 'CLINICAL PROTOCOL:' : 'KLİNİK PROTOKOL:'}</strong> {result.actionRequired}
        </div>

        {result.severity === 'severe_critical' || result.severity === 'moderate' ? (
          <div className="flex items-center gap-2 text-red-600 font-mono text-xs font-black uppercase pt-1">
            <PhoneCall className="w-4 h-4 animate-bounce" />
            <span>{lang === 'en' ? 'Act fast! Decontamination within the first 2 hours saves lives.' : 'Zaman kaybetmeyin! İlk 2 saat içinde mide boşaltımı hayat kurtarır.'}</span>
          </div>
        ) : null}
      </div>

    </div>
  );
};
