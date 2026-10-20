import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BEHAVIOR_PROBLEMS, BehaviorProblem } from '@/lib/content/problems';
import { DisclaimerBar } from '@/components/common/Ui';
import { FavoriteButton } from '@/components/common/FavoriteButton';
import { 
  Search, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  X, 
  ArrowRight,
  Zap
} from 'lucide-react';

export const ProblemCenterPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [activeProblem, setActiveProblem] = useState<BehaviorProblem | null>(null);

  const categories = [
    { id: 'all', label: `TÜMÜ (${BEHAVIOR_PROBLEMS.length})` },
    { id: 'predatory', label: '🌾 ÇİFTLİK & AV DÜRTÜSÜ' },
    { id: 'reactivity', label: 'HAVLAMA & REAKTİVİTE' },
    { id: 'anxiety', label: 'AYRILIK & YALNIZLIK' },
    { id: 'compulsive', label: 'KOMPULSİF & ALIŞKANLIK' },
    { id: 'puppy', label: 'YAVRU & ISIRMA' },
    { id: 'habits', label: 'TASMA, TUVALET & KAPI' },
    { id: 'fear', label: 'KORKU & FOBİLER' }
  ];

  const filtered = BEHAVIOR_PROBLEMS.filter((p) => {
    const matchCat = category === 'all' || p.category === category;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-yellow-400 text-black flex items-center justify-center font-mono font-black text-sm border-2 border-black">
            02
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
            POZİTİF PROTOKOLLER VE CEZASIZ MÜDAHALE REHBERİ
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          DAVRANIŞ SORUNU ÇÖZÜM MERKEZİ
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Köpeğinizin zorlayıcı davranışları bir itaatsizlik değil; yardım çağrısıdır. Bilimsel karşıt koşullandırma ve desensitizasyon ilkeleriyle kalıcı çözümlere ulaşın.
        </p>
      </div>

      <DisclaimerBar variant="compact" />

      {/* Quick Solution Wizard Promo */}
      <div className="p-4 sm:p-5 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-mono text-xs font-black uppercase tracking-wider">
              SORUNUNUZUN NE OLDUĞUNDAN EMİN DEĞİL MİSİNİZ?
            </span>
          </div>
          <p className="text-xs text-zinc-300 dark:text-zinc-700">
            5 soruluk klinik triyaj testimizle köpeğinizin davranışını, aciliyetini ve Merck 3M reçetesini anında belirleyin.
          </p>
        </div>
        <Link
          to="/hizli-cozum"
          className="px-5 py-2.5 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all whitespace-nowrap"
        >
          HIZLI ÇÖZÜMÜ BAŞLAT →
        </Link>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal">
        
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`px-3 py-1.5 font-mono text-xs font-bold uppercase border-2 transition-all cursor-pointer ${
                category === c.id
                  ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-black dark:border-white hover:bg-zinc-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Sorun ara (örn: tasma, havlama)..."
            className="w-full pl-9 pr-3 py-2 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase focus:outline-hidden"
          />
        </div>

      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prob) => (
          <div
            key={prob.id}
            onClick={() => setActiveProblem(prob)}
            className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm transition-all flex flex-col justify-between cursor-pointer space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black dark:border-white ${
                  prob.severity === 'high'
                    ? 'bg-red-600 text-white'
                    : prob.severity === 'medium'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-green-600 text-white'
                }`}>
                  {prob.severity === 'high' ? 'YÜKSEK ÖNCELİK' : prob.severity === 'medium' ? 'ORTA DÜZEY' : 'HAFİF ALIŞKANLIK'}
                </span>

                <FavoriteButton
                  targetType="problem"
                  targetId={prob.id}
                  title={prob.title}
                  category={prob.category}
                />
              </div>

              <h3 className="text-base font-black uppercase text-black dark:text-white leading-snug">
                {prob.title}
              </h3>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                {prob.shortDescription}
              </p>
            </div>

            <div className="pt-3 border-t-2 border-black dark:border-white flex items-center justify-between font-mono text-xs font-black uppercase text-red-600">
              <span>REHBERİ İNCELE</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Problem Detail Modal (No Blur, Strict Brutal) */}
      {activeProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-brutal-xl dark:shadow-brutal-white-xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black uppercase bg-red-600 text-white px-2 py-0.5 border border-black">
                  BİLİMSEL ÇÖZÜM REHBERİ
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white mt-2">
                  {activeProblem.title}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {activeProblem.shortDescription}
                </p>
              </div>

              <button
                onClick={() => setActiveProblem(null)}
                className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Root causes */}
            <div className="p-4 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-950 space-y-2">
              <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white">
                🔍 DAVRANIŞIN KÖK NEDENLERİ (PSİKOLOJİK ARKA PLAN)
              </h4>
              <ul className="space-y-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {activeProblem.rootCauses.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-black">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step by step solution */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                POZİTİF ÇÖZÜM YÖNTEMİ: {activeProblem.positiveProtocol.protocolName}
              </h4>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                {activeProblem.positiveProtocol.overview}
              </p>

              <div className="space-y-3">
                {activeProblem.positiveProtocol.steps.map((st) => (
                  <div key={st.stepNumber} className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono text-xs font-black border border-black">
                        {st.stepNumber}
                      </span>
                      <span className="font-mono text-xs font-black uppercase text-black dark:text-white">
                        {st.title}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 pl-8">
                      {st.instruction}
                    </p>
                    {st.scientificTip && (
                      <p className="text-[11px] font-mono font-bold text-red-600 dark:text-red-400 pl-8 pt-1">
                        🔬 Bilimsel İpucu: {st.scientificTip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Merck Veterinary Clinical Protocol (3M Model) */}
            <div className="p-5 border-2 border-black dark:border-white bg-blue-50 dark:bg-zinc-950 space-y-4 shadow-brutal-sm">
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-blue-600 inline-block border border-black"></span>
                  MERCK VETERINARY MANUAL — KLİNİK DAVRANIŞ DÜZENLEME PROTOKOLÜ (3M)
                </span>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 border border-black bg-white dark:bg-zinc-900 text-blue-800 dark:text-blue-300 uppercase">
                  Altın Standart
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-1">
                  <div className="font-mono font-black text-black dark:text-white uppercase flex items-center gap-1 text-[11px]">
                    🛡️ 1. Çevresel Yönetim (Management)
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-[11px] leading-relaxed">
                    {activeProblem.merckProtocol.management}
                  </p>
                </div>

                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-1">
                  <div className="font-mono font-black text-black dark:text-white uppercase flex items-center gap-1 text-[11px]">
                    🧬 2. Pozitif Modifikasyon (Modification)
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-[11px] leading-relaxed">
                    {activeProblem.merckProtocol.modification}
                  </p>
                </div>

                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-1">
                  <div className="font-mono font-black text-black dark:text-white uppercase flex items-center gap-1 text-[11px]">
                    🎯 3. Tepki İkamesi (Response Substitution / DRI)
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-[11px] leading-relaxed">
                    {activeProblem.merckProtocol.responseSubstitution}
                  </p>
                </div>

                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-1">
                  <div className="font-mono font-black text-red-600 dark:text-red-400 uppercase flex items-center gap-1 text-[11px]">
                    🩺 4. Ağrı & Tıbbi Dışlama (Medical Rule-Out)
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-[11px] leading-relaxed">
                    {activeProblem.merckProtocol.medicalRuleOut}
                  </p>
                </div>
              </div>
            </div>

            {/* What NOT to do */}
            <div className="p-4 border-2 border-black dark:border-white bg-red-50 dark:bg-zinc-950 space-y-2">
              <h4 className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-600" />
                YAPILMAMASI GEREKENLER (RİSKLİ YÖNTEMLER)
              </h4>
              <ul className="space-y-1.5 text-xs font-medium text-zinc-800 dark:text-zinc-200">
                {activeProblem.whatNotToDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional help */}
            <div className="p-4 border-2 border-black dark:border-white bg-yellow-50 dark:bg-zinc-950 space-y-2">
              <h4 className="font-mono text-xs font-black uppercase text-yellow-700 dark:text-yellow-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                NE ZAMAN PROFESYONEL YARDIM ALINMALI?
              </h4>
              <ul className="space-y-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {activeProblem.whenToCallProfessional.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveProblem(null)}
                className="h-[40px] px-6 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                REHBERİ KAPAT
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
