import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDog } from '@/context/DogContext';
import { TRIAGE_QUESTIONS, resolveTriageSolution } from '@/lib/triage/engine';
import { TriageAnswers, TriageSolution } from '@/lib/triage/types';
import { DisclaimerBar } from '@/components/common/Ui';
import { 
  Zap, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  BookOpen, 
  HelpCircle, 
  CalendarCheck,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { toast } from 'sonner';

export const QuickSolutionPage: React.FC = () => {
  const { activeDog } = useDog();
  const dogName = activeDog?.name || 'Köpeğiniz';

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<TriageAnswers>({});
  const [solution, setSolution] = useState<TriageSolution | null>(null);

  const currentQuestion = TRIAGE_QUESTIONS[currentStepIndex];
  const totalQuestions = TRIAGE_QUESTIONS.length;

  const handleSelectOption = (questionId: string, optionId: string) => {
    const updated = { ...answers, [questionId]: optionId };
    setAnswers(updated);

    if (currentStepIndex < totalQuestions - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // Final step reached, generate resolution
      const resolved = resolveTriageSolution(updated, dogName);
      setSolution(resolved);
      toast.success('Kişiselleştirilmiş Klinik Çözüm Reçeteniz Hazırlandı!');
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setSolution(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Çözüm bağlantısı panoya kopyalandı!');
  };

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-black text-sm border-2 border-black dark:border-white">
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
            KLİNİK KARAR AĞACI & ETOLOJİK TRİYAJ SİSTEMİ
          </span>
          <span className="font-mono text-[10px] font-black px-2 py-0.5 bg-red-600 text-white uppercase border border-black">
            AKILLI HIZLI ÇÖZÜM
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          HIZLI DAVRANIŞ TEŞHİSİ VE ÇÖZÜM SİHİRBAZI
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Köpeğinizin yaşadığı sorunun kök nedenini, aciliyet seviyesini ve <strong>Merck Veterinary Manual 3M Modeli</strong> uyarınca 
          hemen bugün uygulayabileceğiniz en doğru eylem adımlarını 5 basit soruyla belirleyin.
        </p>
      </div>

      <DisclaimerBar />

      {!solution ? (
        /* WIZARD QUESTION VIEW */
        <div className="space-y-6">
          
          {/* Progress Bar & Indicators */}
          <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black uppercase text-black dark:text-white">
                ADIM {String(currentStepIndex + 1).padStart(2, '0')} / {String(totalQuestions).padStart(2, '0')}
              </span>
              <span className="text-zinc-400">|</span>
              <span className="font-mono text-xs font-bold text-red-600">
                {dogName} İçin Teşhis Ediliyor
              </span>
            </div>

            {currentStepIndex > 0 && (
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Önceki Soru
              </button>
            )}
          </div>

          {/* Progress Indicator Dots */}
          <div className="grid grid-cols-5 gap-2">
            {TRIAGE_QUESTIONS.map((q, idx) => (
              <div 
                key={q.id}
                className={`h-2 border-2 border-black dark:border-white transition-all ${
                  idx < currentStepIndex
                    ? 'bg-black dark:bg-white'
                    : idx === currentStepIndex
                    ? 'bg-red-600'
                    : 'bg-zinc-200 dark:bg-zinc-800'
                }`}
              />
            ))}
          </div>

          {/* Question Card */}
          <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-black uppercase text-red-600 tracking-wider">
                SORU {currentStepIndex + 1}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
                {currentQuestion.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt) => {
                const isSelected = answers[currentQuestion.id as keyof TriageAnswers] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                    className={`text-left p-5 border-2 border-black dark:border-white transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-black text-white dark:bg-white dark:text-black shadow-brutal-xl translate-x-1 translate-y-1'
                        : 'bg-white dark:bg-zinc-950 text-black dark:text-white shadow-brutal hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-x-0.5 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {opt.icon && (
                        <span className="text-3xl shrink-0 p-2 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800">
                          {opt.icon}
                        </span>
                      )}
                      <div className="space-y-1">
                        <div className="font-mono text-sm sm:text-base font-black uppercase tracking-tight">
                          {opt.label}
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          isSelected ? 'text-zinc-200 dark:text-zinc-800' : 'text-zinc-600 dark:text-zinc-400'
                        }`}>
                          {opt.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      ) : (
        /* RESOLUTION VIEW */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Top Result Banner */}
          <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black dark:border-white pb-4">
              <div className="flex items-center gap-2">
                <span className={`font-mono text-xs font-black uppercase px-3 py-1 border-2 border-black text-white ${
                  solution.urgencyLevel === 'critical'
                    ? 'bg-red-600'
                    : solution.urgencyLevel === 'high'
                    ? 'bg-orange-600'
                    : solution.urgencyLevel === 'medium'
                    ? 'bg-yellow-600'
                    : 'bg-green-600'
                }`}>
                  ACİLİYET: {solution.urgencyLevel.toUpperCase()}
                </span>
                <span className="font-mono text-xs font-bold uppercase px-3 py-1 border-2 border-black bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white">
                  %{solution.confidencePercentage} TEŞHİS GÜVENİ
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-black uppercase border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white shadow-brutal-sm hover:translate-x-0.5 cursor-pointer"
                >
                  <Share2 className="w-4 h-4" /> Paylaş
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-black uppercase border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black shadow-brutal-sm hover:translate-x-0.5 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Yeni Test
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase text-red-600 tracking-wider">
                🔬 KLİNİK TEŞHİS VE TANI:
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
                {solution.diagnosisTitle}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {solution.clinicalSummary}
              </p>
            </div>

            {/* Root Cause Box */}
            <div className="p-4 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 space-y-1">
              <div className="font-mono text-xs font-black uppercase text-black dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                DAVRANIŞIN ETOLOJİK KÖK NEDENİ:
              </div>
              <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {solution.rootCause}
              </p>
            </div>

            {/* Red Flags if any */}
            {solution.redFlags.length > 0 && (
              <div className="p-4 border-2 border-black dark:border-white bg-red-50 dark:bg-zinc-950 space-y-2">
                <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  🚨 DİKKAT EDİLMESİ GEREKEN KIRMIZI BAYRAKLAR:
                </div>
                <ul className="space-y-1 text-xs font-medium text-zinc-800 dark:text-zinc-200">
                  {solution.redFlags.map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Merck 3M Protocol Section */}
          <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-blue-50 dark:bg-zinc-900 shadow-brutal space-y-6">
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 border border-black inline-block"></span>
                <h3 className="font-mono text-sm sm:text-base font-black uppercase tracking-tight text-blue-950 dark:text-blue-300">
                  MERCK VETERINARY MANUAL — 3M MÜDAHALE PLANI
                </h3>
              </div>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-white dark:bg-zinc-800 text-blue-900 dark:text-blue-300 border border-black uppercase">
                Altın Standart
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-950 shadow-brutal-sm space-y-2">
                <div className="font-mono text-xs font-black uppercase text-black dark:text-white flex items-center gap-1.5">
                  🛡️ 1. Çevresel Yönetim (Management)
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {solution.merck3MPlan.management}
                </p>
              </div>

              <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-950 shadow-brutal-sm space-y-2">
                <div className="font-mono text-xs font-black uppercase text-black dark:text-white flex items-center gap-1.5">
                  🧬 2. Pozitif Modifikasyon (Modification)
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {solution.merck3MPlan.modification}
                </p>
              </div>

              <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-950 shadow-brutal-sm space-y-2">
                <div className="font-mono text-xs font-black uppercase text-black dark:text-white flex items-center gap-1.5">
                  🎯 3. Tepki İkamesi (Response Substitution / DRI)
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {solution.merck3MPlan.responseSubstitution}
                </p>
              </div>

              <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-950 shadow-brutal-sm space-y-2">
                <div className="font-mono text-xs font-black uppercase text-red-600 dark:text-red-400 flex items-center gap-1.5">
                  🩺 4. Medikal & Ağrı Eşiği (Medical / Pain Rule-Out)
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {solution.merck3MPlan.medicalThreshold}
                </p>
              </div>
            </div>
          </div>

          {/* Two-Column Action Blocks: Immediate Steps vs What NOT to do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Immediate Action Steps */}
            <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3 text-green-600">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                <h3 className="text-base font-black uppercase text-black dark:text-white">
                  BUGÜN UYGULAMANIZ GEREKEN 3 ACİL ADIM
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {solution.immediateActionSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 bg-green-600 text-white flex items-center justify-center font-mono text-xs font-black shrink-0 border border-black">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Owner Mistakes To Stop */}
            <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3 text-red-600">
                <XCircle className="w-6 h-6 stroke-[2.5]" />
                <h3 className="text-base font-black uppercase text-black dark:text-white">
                  DERHAL DURDURMANIZ GEREKEN HATALI TEPKİLER
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {solution.ownerMistakesToStop.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 bg-red-600 text-white flex items-center justify-center font-mono text-xs font-black shrink-0 border border-black">
                      ✕
                    </span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action CTAs: Direct Problem, Library, and Training Plan Links */}
          <div className="p-6 sm:p-8 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-950 shadow-brutal space-y-4">
            <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white tracking-wider">
              🔗 BU TEŞHİSE ÖZEL DETAYLI REHBER VE EĞİTİM BAĞLANTILARI
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                to="/sorunlar"
                className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="flex items-center gap-2 text-black dark:text-white font-mono text-xs font-black uppercase">
                  <HelpCircle className="w-4 h-4 text-red-600" />
                  SORUN ÇÖZÜM REHBERİ
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                  Bu sorunun tüm aşamalarını, tetikleyicilerini ve egzersizlerini detaylı inceleyin.
                </p>
                <div className="font-mono text-xs font-bold text-red-600 flex items-center gap-1 group-hover:underline">
                  Rehbere Git <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                to="/kutuphane"
                className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="flex items-center gap-2 text-black dark:text-white font-mono text-xs font-black uppercase">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  MERCK KLİNİK MAKALESİ
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                  Veteriner etoloji literatüründeki akademik çalışmaları ve vaka prensiplerini okuyun.
                </p>
                <div className="font-mono text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:underline">
                  Makaleyi Oku <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                to="/egitim-planlari"
                className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="flex items-center gap-2 text-black dark:text-white font-mono text-xs font-black uppercase">
                  <CalendarCheck className="w-4 h-4 text-green-600" />
                  KİŞİYE ÖZEL EĞİTİM PLANI
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                  {dogName} için gün gün işaretlenebilir 7 veya 14 günlük müfredatı başlatın.
                </p>
                <div className="font-mono text-xs font-bold text-green-600 flex items-center gap-1 group-hover:underline">
                  Plan Oluştur <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
