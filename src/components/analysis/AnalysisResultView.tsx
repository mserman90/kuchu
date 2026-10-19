import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BehaviorAnalysisResult } from '@/lib/analysis/types';
import { dataEntities } from '@/lib/data/entities';
import { RiskBadge } from '@/components/common/Ui';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  RotateCcw, 
  BarChart3, 
  Sparkles 
} from 'lucide-react';
import { toast } from 'sonner';

interface AnalysisResultViewProps {
  result: BehaviorAnalysisResult;
  onReset: () => void;
}

export const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({ result, onReset }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    try {
      await dataEntities.analyses.create(result);
      setSaved(true);
      toast.success('Analiz sonucu profilinize kaydedildi.');
    } catch {
      toast.error('Kayıt sırasında bir sorun oluştu.');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Main Mood & Risk Banner */}
      <div className="p-6 sm:p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-xl dark:shadow-brutal-white-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-black dark:border-white pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black px-2.5 py-1 border border-black dark:border-white">
                {result.dogName} DAVRANIŞ DEĞERLENDİRMESİ
              </span>
              <RiskBadge level={result.riskLevel} text={result.riskTitle} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tightest text-black dark:text-white mt-2">
              {result.moodTitle}
            </h2>
            <p className="font-mono text-xs sm:text-sm font-bold uppercase text-red-600 dark:text-red-400">
              {result.moodSubtitle}
            </p>
          </div>

          {/* Risk Level & Confidence Box */}
          <div className="p-4 bg-zinc-50 dark:bg-zinc-950 text-black dark:text-white border-2 border-black dark:border-white shadow-brutal space-y-1.5 shrink-0 min-w-[200px]">
            <div className="font-mono text-xs font-black uppercase tracking-wider text-red-600">
              RİSK PUANI
            </div>
            <div className="font-mono text-3xl font-black">
              %{result.riskScore}
            </div>
            <div className="font-mono text-[11px] font-bold text-zinc-600 dark:text-zinc-400 border-t border-zinc-300 dark:border-zinc-700 pt-1.5">
              GÜVEN DÜZEYİ: %{result.confidenceScore}
            </div>
          </div>
        </div>

        {/* Ethology Summary */}
        <div className="space-y-2">
          <span className="font-mono text-xs font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            ETOLOJİK DAVRANIŞ VE DUYGU ANALİZİ:
          </span>
          <p className="text-sm sm:text-base font-medium text-black dark:text-white leading-relaxed">
            {result.summary}
          </p>
        </div>
      </div>

      {/* Score Breakdown (Ağırlıklı Motor) */}
      <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
        <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3">
          <BarChart3 className="w-5 h-5 text-red-600 stroke-[2.5]" />
          <h3 className="font-mono text-sm font-black uppercase text-black dark:text-white">
            BİLİMSEL PUAN DAĞILIMI (AĞIRLIKLI MOTOR)
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 block">Kuyruk (%30)</span>
            <strong className="font-mono text-lg font-black text-black dark:text-white">{result.scoreBreakdown.tailScore} / 30</strong>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 block">Duruş (%25)</span>
            <strong className="font-mono text-lg font-black text-black dark:text-white">{result.scoreBreakdown.postureScore} / 25</strong>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 block">Göz+Ağız (%20)</span>
            <strong className="font-mono text-lg font-black text-black dark:text-white">{result.scoreBreakdown.faceScore} / 20</strong>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 block">Kulaklar (%15)</span>
            <strong className="font-mono text-lg font-black text-black dark:text-white">{result.scoreBreakdown.earScore} / 15</strong>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 col-span-2 sm:col-span-1">
            <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 block">Enerji (%10)</span>
            <strong className="font-mono text-lg font-black text-black dark:text-white">{result.scoreBreakdown.energyScore} / 10</strong>
          </div>
        </div>
      </div>

      {/* Calming Signals & Scientific Insights */}
      {(result.calmingSignalsDetected.length > 0 || result.scientificInsights.length > 0) && (
        <div className="p-6 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-950 shadow-brutal space-y-3">
          <span className="font-mono text-xs font-black uppercase text-black dark:text-white flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-red-600 stroke-[2.5]" />
            TESPİT EDİLEN BİLİMSEL İŞARETLER:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
            {result.calmingSignalsDetected.map((sig, idx) => (
              <div key={idx} className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-mono text-xs font-bold text-black dark:text-white">
                🐾 {sig}
              </div>
            ))}
            {result.scientificInsights.map((ins, idx) => (
              <div key={idx} className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-mono text-xs font-bold text-red-600">
                🔬 {ins}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* What to do & What not to do */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* What to do */}
        <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3 text-green-600">
            <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
            <h3 className="text-base font-black uppercase text-black dark:text-white">
              NE YAPMALISINIZ? (ADIM ADIM)
            </h3>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {result.whatToDo.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 bg-green-600 text-white flex items-center justify-center font-mono text-xs font-black shrink-0 border border-black">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What NOT to do */}
        <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3 text-red-600">
            <XCircle className="w-6 h-6 stroke-[2.5]" />
            <h3 className="text-base font-black uppercase text-black dark:text-white">
              ASLA NE YAPMAMALISINIZ?
            </h3>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {result.whatNotToDo.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 bg-red-600 text-white flex items-center justify-center font-mono text-xs font-black shrink-0 border border-black">
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Likely Causes */}
      <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <h4 className="font-mono text-xs font-black uppercase tracking-wider text-black dark:text-white">
          OLASI TETİKLEYİCİLER & NEDENLER
        </h4>
        <div className="flex flex-wrap gap-2">
          {result.likelyCauses.map((c, idx) => (
            <span key={idx} className="px-3 py-1.5 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 font-mono text-xs font-bold text-black dark:text-white">
              💡 {c}
            </span>
          ))}
        </div>
      </div>

      {/* Action Row: Save / Reset / Plan */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t-2 border-black dark:border-white">
        <button
          onClick={onReset}
          className="w-full sm:w-auto h-[44px] sm:h-[40px] flex items-center justify-center gap-2 px-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white font-mono text-xs font-black uppercase shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>YENİ ANALİZ YAP</span>
        </button>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <Link
            to="/egitim-planlari"
            className="flex-1 sm:flex-initial h-[44px] sm:h-[40px] flex items-center justify-center gap-2 px-5 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-mono text-xs font-black uppercase shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <span>ÖNERİLEN EĞİTİM PLANI →</span>
          </Link>

          <button
            onClick={handleSave}
            disabled={saved}
            className={`flex-1 sm:flex-initial h-[44px] sm:h-[40px] flex items-center justify-center gap-2 px-6 border-2 border-black dark:border-white font-mono text-xs font-black uppercase shadow-brutal transition-all cursor-pointer ${
              saved
                ? 'bg-green-600 text-white cursor-default'
                : 'bg-red-600 text-white hover:translate-x-0.5 hover:translate-y-0.5'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>{saved ? 'PANELİYE KAYDEDİLDİ ✓' : 'ANALİZİ KAYDET'}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
