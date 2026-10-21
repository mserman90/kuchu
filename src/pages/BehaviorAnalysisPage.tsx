import React, { useState } from 'react';
import { useDog } from '@/context/DogContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BehaviorInputState, 
  BehaviorAnalysisResult 
} from '@/lib/analysis/types';
import { 
  TAIL_POSITIONS, 
  TAIL_SPEEDS, 
  TAIL_SPREADS, 
  TAIL_DIRECTIONS, 
  TAIL_TENSIONS,
  EAR_POSITIONS,
  EYE_GAZES,
  MOUTH_FACES,
  BODY_POSTURES,
  ENERGY_MOVEMENTS,
  ENVIRONMENTS,
  TRIGGERS,
  getLocalizedOptions
} from '@/lib/analysis/options';
import { analyzeDogBehavior } from '@/lib/analysis/engine';
import { OptionGroup } from '@/components/analysis/OptionGroup';
import { AnalysisResultView } from '@/components/analysis/AnalysisResultView';
import { VisionScanner } from '@/components/analysis/VisionScanner';
import { DisclaimerBar } from '@/components/common/Ui';
import { ArrowRight, Camera, SlidersHorizontal } from 'lucide-react';

export const BehaviorAnalysisPage: React.FC = () => {
  const { activeDog } = useDog();
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const [eduMode, setEduMode] = useState(true);
  const [analysisMode, setAnalysisMode] = useState<'vision' | 'manual'>('vision');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [result, setResult] = useState<BehaviorAnalysisResult | null>(null);

  const [formState, setFormState] = useState<BehaviorInputState>({
    tailPosition: 'neutral',
    tailSpeed: 'medium',
    tailSpread: 'broad_loose',
    tailDirection: 'balanced',
    tailTension: 'relaxed_fluid',
    earPosition: 'relaxed_side',
    eyeGaze: 'relaxed_normal',
    mouthFace: 'open_panting_gentle',
    bodyPosture: 'balanced_relaxed',
    energyMovement: 'calm',
    environment: 'home',
    trigger: 'none',
    dogName: activeDog?.name || (isEn ? 'Kuchu' : 'Kuçu')
  });

  const steps = isEn
    ? [
        { id: 'tail', label: '1. TAIL LANGUAGE', desc: 'Carriage, velocity, bias & tension' },
        { id: 'head', label: '2. EARS & EYES', desc: 'Gaze dynamics & ear positioning' },
        { id: 'face_posture', label: '3. MOUTH & POSTURE', desc: 'Facial tension & center of gravity' },
        { id: 'context', label: '4. ENERGY & CONTEXT', desc: 'Arousal state & environmental triggers' }
      ]
    : [
        { id: 'tail', label: '1. KUYRUK DİLİ', desc: 'Pozisyon, hız, yön ve gerilim' },
        { id: 'head', label: '2. KULAK & GÖZ', desc: 'Bakış ve kulak konumları' },
        { id: 'face_posture', label: '3. AĞIZ & GÖVDE', desc: 'Dudak mimikleri ve beden ağırlığı' },
        { id: 'context', label: '4. ENERJİ & BAĞLAM', desc: 'Hareket modu ve tetikleyiciler' }
      ];

  const handleApplyVision = (detectedState: Partial<BehaviorInputState>) => {
    const nextForm = { ...formState, ...detectedState };
    setFormState(nextForm);
    const evaluated = analyzeDogBehavior({
      ...nextForm,
      dogName: activeDog?.name || nextForm.dogName || (isEn ? 'Kuchu' : 'Kuçu')
    }, lang);
    setResult(evaluated);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const evaluated = analyzeDogBehavior({
      ...formState,
      dogName: activeDog?.name || formState.dogName || (isEn ? 'Your Dog' : 'Dostunuz')
    }, lang);
    setResult(evaluated);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setResult(null);
    setActiveStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-black border-2 border-black dark:border-white">
              01
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
              {isEn ? 'RULE-BASED & WEIGHTED SCORING ENGINE' : 'KURAL TABANLI VE AĞIRLIKLI SKORLAMA MOTORU'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setEduMode(!eduMode)}
            className={`px-3 py-1 font-mono text-xs font-bold uppercase border-2 transition-all cursor-pointer ${
              eduMode
                ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                : 'bg-white dark:bg-zinc-950 text-black dark:text-white border-black dark:border-white'
            }`}
          >
            {isEn ? `EDUCATION MODE: ${eduMode ? 'ON' : 'OFF'}` : `EĞİTİM MODU: ${eduMode ? 'AÇIK' : 'KAPALI'}`}
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          {isEn ? 'CANINE BEHAVIOR ANALYSIS' : 'KÖPEK DAVRANIŞ ANALİZİ'}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {isEn
            ? 'Input observed body language parameters — from tail lateralization to whale eye, piloerection to subtle calming signals. The deterministic engine computes real-time emotional equilibrium and tension risk.'
            : 'Kuyruk asimetrisinden balina gözüne, piloereksiyondan sakinleşme sinyallerine kadar gözlemlediğiniz beden dili verilerini girin. Deterministik motor anlık duygusal durumu ve gerilim riskini hesaplasın.'}
        </p>
      </div>

      {/* Mandatory Disclaimer */}
      <DisclaimerBar variant="compact" />

      {/* RESULT VIEW */}
      {result ? (
        <AnalysisResultView result={result} onReset={handleReset} />
      ) : (
        <div className="space-y-6">
          
          {/* Analysis Mode Switcher */}
          <div className="flex flex-col sm:flex-row border-2 border-black dark:border-white p-1.5 bg-zinc-100 dark:bg-zinc-800 gap-2 font-mono text-xs font-black uppercase shadow-brutal-sm">
            <button
              type="button"
              onClick={() => setAnalysisMode('vision')}
              className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                analysisMode === 'vision'
                  ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                  : 'bg-white dark:bg-zinc-900 text-black dark:text-white border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{isEn ? '1. SCAN VISION AI WITH PHOTO (COMPUTER VISION)' : '1. FOTOĞRAFLA VISION AI TARA (YAPAY ZEKA)'}</span>
            </button>

            <button
              type="button"
              onClick={() => setAnalysisMode('manual')}
              className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
                analysisMode === 'manual'
                  ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                  : 'bg-white dark:bg-zinc-900 text-black dark:text-white border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{isEn ? '2. MANUAL PARAMETER SELECTOR (4-AXIS ENGINE)' : '2. MANUEL PARAMETRE SEÇİCİ (4 BOYUTLU MOTOR)'}</span>
            </button>
          </div>

          {analysisMode === 'vision' ? (
            <VisionScanner onApplyToAnalysis={handleApplyVision} />
          ) : (
            /* STEP WIZARD FORM */
            <div className="space-y-6">
              
              {/* Step Navigation Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {steps.map((s, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 text-left border-2 transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                          : 'bg-white dark:bg-zinc-900 border-black dark:border-white text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      <div className="font-mono text-xs font-black uppercase">{s.label}</div>
                      <div className="text-[10px] font-medium opacity-80 truncate">{s.desc}</div>
                    </button>
                  );
                })}
              </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* STEP 0: TAIL */}
            {activeStep === 0 && (
              <div className="space-y-8 border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal">
                <OptionGroup
                  label={isEn ? 'A.1 TAIL POSITION' : 'A.1 KUYRUK POZİSYONU'}
                  weightTag={isEn ? '30% WEIGHT' : '%30 AĞIRLIK'}
                  options={getLocalizedOptions(TAIL_POSITIONS, lang)}
                  value={formState.tailPosition}
                  onChange={(val) => setFormState({ ...formState, tailPosition: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <OptionGroup
                  label={isEn ? 'A.2 TAIL LATERALIZATION (VALLORTIGARA ASYMMETRY)' : 'A.2 KUYRUK SALINMA YÖNÜ (VALLORTIGARA ASİMETRİSİ)'}
                  categoryTag={isEn ? 'NEURO-ETHOLOGY' : 'NÖRO-ETOLOJİ'}
                  options={getLocalizedOptions(TAIL_DIRECTIONS, lang)}
                  value={formState.tailDirection}
                  onChange={(val) => setFormState({ ...formState, tailDirection: val })}
                  eduMode={eduMode}
                  columns={3}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <OptionGroup
                    label={isEn ? 'A.3 WAGGING VELOCITY' : 'A.3 SALLAMA HIZI'}
                    options={getLocalizedOptions(TAIL_SPEEDS, lang)}
                    value={formState.tailSpeed}
                    onChange={(val) => setFormState({ ...formState, tailSpeed: val })}
                    eduMode={eduMode}
                    columns={1}
                  />

                  <OptionGroup
                    label={isEn ? 'A.4 OSCILLATION AMPLITUDE' : 'A.4 SALINIM GENİŞLİĞİ'}
                    options={getLocalizedOptions(TAIL_SPREADS, lang)}
                    value={formState.tailSpread}
                    onChange={(val) => setFormState({ ...formState, tailSpread: val })}
                    eduMode={eduMode}
                    columns={1}
                  />

                  <OptionGroup
                    label={isEn ? 'A.5 MUSCLE RIGIDITY / TENSION' : 'A.5 KAS GERGİNLİĞİ'}
                    options={getLocalizedOptions(TAIL_TENSIONS, lang)}
                    value={formState.tailTension}
                    onChange={(val) => setFormState({ ...formState, tailTension: val })}
                    eduMode={eduMode}
                    columns={1}
                  />
                </div>
              </div>
            )}

            {/* STEP 1: EARS & EYES */}
            {activeStep === 1 && (
              <div className="space-y-8 border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal">
                <OptionGroup
                  label={isEn ? 'B.1 EAR CARRIAGE' : 'B.1 KULAK DURUŞU'}
                  weightTag={isEn ? '15% WEIGHT' : '%15 AĞIRLIK'}
                  options={getLocalizedOptions(EAR_POSITIONS, lang)}
                  value={formState.earPosition}
                  onChange={(val) => setFormState({ ...formState, earPosition: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <OptionGroup
                  label={isEn ? 'C.1 OCULAR GAZE DYNAMICS' : 'C.1 GÖZLER VE BAKIŞ ŞEKLİ'}
                  weightTag={isEn ? '10% WEIGHT' : '%10 AĞIRLIK'}
                  categoryTag={isEn ? 'WHALE EYE & HARD STARE' : 'BALİNA GÖZÜ & SABİT BAKIŞ'}
                  options={getLocalizedOptions(EYE_GAZES, lang)}
                  value={formState.eyeGaze}
                  onChange={(val) => setFormState({ ...formState, eyeGaze: val })}
                  eduMode={eduMode}
                  columns={2}
                />
              </div>
            )}

            {/* STEP 2: MOUTH & POSTURE */}
            {activeStep === 2 && (
              <div className="space-y-8 border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal">
                <OptionGroup
                  label={isEn ? 'D.1 MOUTH, LIPS & FACIAL EXPRESSIONS' : 'D.1 AĞIZ, DUDAK VE YÜZ MİMİKLERİ'}
                  weightTag={isEn ? '10% WEIGHT' : '%10 AĞIRLIK'}
                  categoryTag={isEn ? 'CALMING SIGNALS' : 'SAKİNLEŞME SİNYALLERİ'}
                  options={getLocalizedOptions(MOUTH_FACES, lang)}
                  value={formState.mouthFace}
                  onChange={(val) => setFormState({ ...formState, mouthFace: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <OptionGroup
                  label={isEn ? 'E.1 POSTURAL STANCE & SPINAL ALIGNMENT' : 'E.1 GENEL VÜCUT DURUŞU (POSTURE)'}
                  weightTag={isEn ? '25% WEIGHT' : '%25 AĞIRLIK'}
                  categoryTag={isEn ? 'WEIGHT SHIFT & PILOERECTION' : 'AĞIRLIK MERKEZİ & PİLOEREKSİYON'}
                  options={getLocalizedOptions(BODY_POSTURES, lang)}
                  value={formState.bodyPosture}
                  onChange={(val) => setFormState({ ...formState, bodyPosture: val })}
                  eduMode={eduMode}
                  columns={2}
                />
              </div>
            )}

            {/* STEP 3: ENERGY & CONTEXT */}
            {activeStep === 3 && (
              <div className="space-y-8 border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal">
                <OptionGroup
                  label={isEn ? 'F.1 AROUSAL STATE & LOCOMOTION' : 'F.1 GENEL ENERJİ VE HAREKET MODU'}
                  weightTag={isEn ? '10% WEIGHT' : '%10 AĞIRLIK'}
                  categoryTag="FREEZE / FIGHT / FLIGHT"
                  options={getLocalizedOptions(ENERGY_MOVEMENTS, lang)}
                  value={formState.energyMovement}
                  onChange={(val) => setFormState({ ...formState, energyMovement: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <OptionGroup
                    label={isEn ? 'G.1 IMMEDIATE ENVIRONMENT (CONTEXT)' : 'G.1 MEVCUT ORTAM (BAĞLAM)'}
                    options={getLocalizedOptions(ENVIRONMENTS, lang)}
                    value={formState.environment || 'home'}
                    onChange={(val) => setFormState({ ...formState, environment: val })}
                    eduMode={eduMode}
                    columns={1}
                  />

                  <OptionGroup
                    label={isEn ? 'G.2 ENVIRONMENTAL TRIGGER' : 'G.2 ÇEVRESEL TETİKLEYİCİ'}
                    options={getLocalizedOptions(TRIGGERS, lang)}
                    value={formState.trigger || 'none'}
                    onChange={(val) => setFormState({ ...formState, trigger: val })}
                    eduMode={eduMode}
                    columns={1}
                  />
                </div>
              </div>
            )}

            {/* Form Step Buttons */}
            <div className="flex items-center justify-between border-t-2 border-black dark:border-white pt-6">
              {activeStep > 0 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="h-[44px] sm:h-[40px] px-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white font-mono text-xs font-bold uppercase shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  {isEn ? '← PREVIOUS STEP' : '← ÖNCEKİ ADIM'}
                </button>
              ) : (
                <div />
              )}

              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="h-[44px] sm:h-[40px] px-6 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>{isEn ? 'NEXT STEP' : 'SONRAKİ ADIM'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="h-[44px] sm:h-[40px] px-8 border-2 border-black dark:border-white bg-red-600 text-white font-mono text-xs font-black uppercase tracking-wider shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>{isEn ? 'CALCULATE ANALYSIS' : 'ANALİZİ HESAPLA'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              )}
            </div>

          </form>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

