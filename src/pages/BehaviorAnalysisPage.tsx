import React, { useState } from 'react';
import { useDog } from '@/context/DogContext';
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
  TRIGGERS
} from '@/lib/analysis/options';
import { analyzeDogBehavior } from '@/lib/analysis/engine';
import { OptionGroup } from '@/components/analysis/OptionGroup';
import { AnalysisResultView } from '@/components/analysis/AnalysisResultView';
import { DisclaimerBar } from '@/components/common/Ui';
import { ArrowRight } from 'lucide-react';

export const BehaviorAnalysisPage: React.FC = () => {
  const { activeDog } = useDog();
  const [eduMode, setEduMode] = useState(true);
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
    dogName: activeDog?.name || 'Kuçu'
  });

  const steps = [
    { id: 'tail', label: '1. KUYRUK DİLİ', desc: 'Pozisyon, hız, yön ve gerilim' },
    { id: 'head', label: '2. KULAK & GÖZ', desc: 'Bakış ve kulak konumları' },
    { id: 'face_posture', label: '3. AĞIZ & GÖVDE', desc: 'Dudak mimikleri ve beden ağırlığı' },
    { id: 'context', label: '4. ENERJİ & BAĞLAM', desc: 'Hareket modu ve tetikleyiciler' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const evaluated = analyzeDogBehavior({
      ...formState,
      dogName: activeDog?.name || formState.dogName || 'Dostunuz'
    });
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
              KURAL TABANLI VE AĞIRLIKLI SKORLAMA MOTORU
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
            EĞİTİM MODU: {eduMode ? 'AÇIK' : 'KAPALI'}
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          KÖPEK DAVRANIŞ ANALİZİ
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Kuyruk asimetrisinden balina gözüne, piloereksiyondan sakinleşme sinyallerine kadar gözlemlediğiniz beden dili verilerini girin. Deterministik motor anlık duygusal durumu ve gerilim riskini hesaplasın.
        </p>
      </div>

      {/* Mandatory Disclaimer */}
      <DisclaimerBar variant="compact" />

      {/* RESULT VIEW */}
      {result ? (
        <AnalysisResultView result={result} onReset={handleReset} />
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
                  label="A.1 KUYRUK POZİSYONU"
                  weightTag="%30 AĞIRLIK"
                  options={TAIL_POSITIONS}
                  value={formState.tailPosition}
                  onChange={(val) => setFormState({ ...formState, tailPosition: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <OptionGroup
                  label="A.2 KUYRUK SALINMA YÖNÜ (VALLORTIGARA ASİMETRİSİ)"
                  categoryTag="NÖRO-ETOLOJİ"
                  options={TAIL_DIRECTIONS}
                  value={formState.tailDirection}
                  onChange={(val) => setFormState({ ...formState, tailDirection: val })}
                  eduMode={eduMode}
                  columns={3}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <OptionGroup
                    label="A.3 SALLAMA HIZI"
                    options={TAIL_SPEEDS}
                    value={formState.tailSpeed}
                    onChange={(val) => setFormState({ ...formState, tailSpeed: val })}
                    eduMode={eduMode}
                    columns={1}
                  />

                  <OptionGroup
                    label="A.4 SALINIM GENİŞLİĞİ"
                    options={TAIL_SPREADS}
                    value={formState.tailSpread}
                    onChange={(val) => setFormState({ ...formState, tailSpread: val })}
                    eduMode={eduMode}
                    columns={1}
                  />

                  <OptionGroup
                    label="A.5 KAS GERGİNLİĞİ"
                    options={TAIL_TENSIONS}
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
                  label="B.1 KULAK DURUŞU"
                  weightTag="%15 AĞIRLIK"
                  options={EAR_POSITIONS}
                  value={formState.earPosition}
                  onChange={(val) => setFormState({ ...formState, earPosition: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <OptionGroup
                  label="C.1 GÖZLER VE BAKIŞ ŞEKLİ"
                  weightTag="%10 AĞIRLIK"
                  categoryTag="BALİNA GÖZÜ & SABİT BAKIŞ"
                  options={EYE_GAZES}
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
                  label="D.1 AĞIZ, DUDAK VE YÜZ MİMİKLERİ"
                  weightTag="%10 AĞIRLIK"
                  categoryTag="SAKİNLEŞME SİNYALLERİ"
                  options={MOUTH_FACES}
                  value={formState.mouthFace}
                  onChange={(val) => setFormState({ ...formState, mouthFace: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <OptionGroup
                  label="E.1 GENEL VÜCUT DURUŞU (POSTURE)"
                  weightTag="%25 AĞIRLIK"
                  categoryTag="AĞIRLIK MERKEZİ & PİLOEREKSİYON"
                  options={BODY_POSTURES}
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
                  label="F.1 GENEL ENERJİ VE HAREKET MODU"
                  weightTag="%10 AĞIRLIK"
                  categoryTag="FREEZE / FIGHT / FLIGHT"
                  options={ENERGY_MOVEMENTS}
                  value={formState.energyMovement}
                  onChange={(val) => setFormState({ ...formState, energyMovement: val })}
                  eduMode={eduMode}
                  columns={2}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <OptionGroup
                    label="G.1 MEVCUT ORTAM (BAĞLAM)"
                    options={ENVIRONMENTS}
                    value={formState.environment || 'home'}
                    onChange={(val) => setFormState({ ...formState, environment: val })}
                    eduMode={eduMode}
                    columns={1}
                  />

                  <OptionGroup
                    label="G.2 ÇEVRESEL TETİKLEYİCİ"
                    options={TRIGGERS}
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
                  ← ÖNCEKİ ADIM
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
                  <span>SONRAKİ ADIM</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="h-[44px] sm:h-[40px] px-8 border-2 border-black dark:border-white bg-red-600 text-white font-mono text-xs font-black uppercase tracking-wider shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>ANALİZİ HESAPLA</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              )}
            </div>

          </form>

        </div>
      )}

    </div>
  );
};
