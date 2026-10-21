import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDog } from '@/context/DogContext';
import { generatePersonalizedPlan } from '@/lib/content/training';
import { TrainingPlanEntity } from '@/lib/data/types';
import { dataEntities } from '@/lib/data/entities';
import { DisclaimerBar } from '@/components/common/Ui';
import { 
  Bookmark, 
  Printer, 
  ChevronDown, 
  ChevronUp,
  CheckSquare,
  Square,
  Zap
} from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

export const TrainingPlannerPage: React.FC = () => {
  const { activeDog } = useDog();
  const { lang } = useLanguage();

  const [dogName, setDogName] = useState(activeDog?.name || (lang === 'en' ? 'Kuçu' : 'Kuçu'));
  const [breed, setBreed] = useState(activeDog?.breed || (lang === 'en' ? 'Golden Retriever Mix' : 'Golden Retriever Melezi'));
  const [ageYears, setAgeYears] = useState(activeDog?.ageYears || 2);
  const [category, setCategory] = useState<
    'basic_obedience' | 'loose_leash' | 'separation_anxiety' | 'socialization' | 'reactivity' | 'mental_enrichment'
  >('basic_obedience');
  const [durationDays, setDurationDays] = useState<7 | 14 | 30>(7);
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  const [currentPlan, setCurrentPlan] = useState<TrainingPlanEntity | null>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const categories = lang === 'en' ? [
    { id: 'basic_obedience', label: 'BASIC OBEDIENCE & ENGAGEMENT', desc: 'Marker, eye contact, sit, stay, drop it' },
    { id: 'loose_leash', label: 'LOOSE LEASH WALKING', desc: 'Resetting pull reflexes and staying by handler’s side' },
    { id: 'separation_anxiety', label: 'SEPARATION ANXIETY REDUCTION', desc: 'Micro-alone durations and threshold desensitization' },
    { id: 'socialization', label: 'POSITIVE SOCIALIZATION', desc: 'Confident acclimation to environment, sounds, and life' },
    { id: 'reactivity', label: 'REACTIVITY & THRESHOLD MANAGEMENT', desc: 'LAT protocol and gaze shifting' },
    { id: 'mental_enrichment', label: 'MENTAL ENRICHMENT & NOSEWORK', desc: 'Search games, scent puzzles, and snuffle work' }
  ] : [
    { id: 'basic_obedience', label: 'TEMEL İTAAT & İLETİŞİM', desc: 'İşaretleyici, göz teması, otur, bekle, bırak' },
    { id: 'loose_leash', label: 'GEVŞEK TASMA YÜRÜYÜŞÜ', desc: 'Çekme refleksini sıfırlama, yanınızda kalma' },
    { id: 'separation_anxiety', label: 'AYRILIK ANKSİYETESİ AZALTMA', desc: 'Mikro yalnızlık seansları ve güvenli eşik' },
    { id: 'socialization', label: 'POZİTİF SOSYALLEŞME', desc: 'Çevreye, seslere ve canlılara korkusuz alışma' },
    { id: 'reactivity', label: 'REAKTİVİTE & EŞİK YÖNETİMİ', desc: 'LAT protokolü ve odak kaydırma' },
    { id: 'mental_enrichment', label: 'ZİHİNSEL ZENGİNLEŞTİRME', desc: 'Koku arama, burun işi ve bulmacalar' }
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const plan = generatePersonalizedPlan({
      dogId: activeDog?.id || 'dog_temp',
      dogName: dogName || (lang === 'en' ? 'Your Companion' : 'Dostunuz'),
      breed,
      category,
      durationDays,
      level,
      energyLevel: activeDog?.energyLevel || 'medium',
      ageYears
    }, lang);
    setCurrentPlan(plan);
    setExpandedDay(1);
    setSavedSuccess(false);
  };

  const handleSave = async () => {
    if (!currentPlan) return;
    try {
      await dataEntities.plans.createOrUpdate(currentPlan);
      setSavedSuccess(true);
      toast.success(lang === 'en' ? 'Training plan saved successfully.' : 'Eğitim planı başarıyla kaydedildi.');
    } catch {
      toast.error(lang === 'en' ? 'An error occurred while saving the plan.' : 'Plan kaydedilirken bir sorun oluştu.');
    }
  };

  const handleToggleDay = (day: number) => {
    if (!currentPlan) return;
    const updatedExercises = currentPlan.exercises.map((ex) =>
      ex.day === day ? { ...ex, completed: !ex.completed } : ex
    );
    const completedDays = updatedExercises.filter((ex) => ex.completed).map((ex) => ex.day);
    const updatedPlan: TrainingPlanEntity = {
      ...currentPlan,
      exercises: updatedExercises,
      completedDays
    };
    setCurrentPlan(updatedPlan);
    dataEntities.plans.createOrUpdate(updatedPlan);
  };

  const completedCount = currentPlan?.exercises.filter((ex) => ex.completed).length || 0;
  const progressPercent = currentPlan ? Math.round((completedCount / currentPlan.exercises.length) * 100) : 0;

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-black text-sm border-2 border-black">
            03
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
            {lang === 'en' ? 'STRUCTURED DAILY CURRICULUM ENGINE' : 'GÜNLÜK YAPILANDIRILMIŞ MÜFREDAT MOTORU'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          {lang === 'en' ? 'CUSTOM R+ TRAINING PLANNER' : 'KİŞİSELLEŞTİRİLMİŞ EĞİTİM PLANI'}
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {lang === 'en'
            ? 'Daily 8-15 minute scientific exercise plan tailored to your dog’s age, breed, energy level, and training focus.'
            : 'Köpeğinizin yaşı, boyutu, enerjisi ve hedeflediğiniz davranışa göre hazırlanan günlük 8-15 dakikalık bilimsel egzersiz planı.'}
        </p>
      </div>

      <DisclaimerBar variant="compact" />

      {/* Form Card */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal">
        <form onSubmit={handleGenerate} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-mono text-xs font-black uppercase mb-1.5 text-black dark:text-white">
                {lang === 'en' ? "DOG'S NAME" : 'KÖPEĞİN ADI'}
              </label>
              <input
                type="text"
                value={dogName}
                onChange={(e) => setDogName(e.target.value)}
                className="w-full h-[40px] px-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase focus:outline-hidden"
                required
              />
            </div>
            <div>
              <label className="block font-mono text-xs font-black uppercase mb-1.5 text-black dark:text-white">
                {lang === 'en' ? 'BREED / MIX' : 'IRK / MELEZ'}
              </label>
              <input
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                className="w-full h-[40px] px-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block font-mono text-xs font-black uppercase mb-1.5 text-black dark:text-white">
                {lang === 'en' ? 'AGE (YEARS)' : 'YAŞ (YIL)'}
              </label>
              <input
                type="number"
                min="0"
                max="20"
                value={ageYears}
                onChange={(e) => setAgeYears(Number(e.target.value))}
                className="w-full h-[40px] px-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase focus:outline-hidden"
              />
            </div>
          </div>

          {/* Goal Categories */}
          <div className="space-y-2">
            <label className="block font-mono text-xs font-black uppercase text-black dark:text-white">
              {lang === 'en' ? 'SELECT TRAINING FOCUS' : 'EĞİTİM HEDEFİ SEÇİN'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setCategory(c.id as any)}
                  className={`p-3.5 border-2 transition-all cursor-pointer ${
                    category === c.id
                      ? 'border-black bg-red-600 text-white shadow-brutal-sm dark:border-white'
                      : 'border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <div className="font-mono text-xs font-black uppercase">{c.label}</div>
                  <div className={`text-[11px] font-medium mt-1 leading-snug ${category === c.id ? 'text-white/90' : 'text-zinc-600 dark:text-zinc-400'}`}>
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Duration & Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="block font-mono text-xs font-black uppercase mb-2 text-black dark:text-white">
                {lang === 'en' ? 'PROGRAM DURATION' : 'PROGRAM SÜRESİ'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[7, 14, 30].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDurationDays(d as any)}
                    className={`h-[40px] font-mono text-xs font-black uppercase border-2 transition-all cursor-pointer ${
                      durationDays === d
                        ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-brutal-sm'
                        : 'bg-white dark:bg-zinc-900 border-black dark:border-white text-black dark:text-white hover:bg-zinc-100'
                    }`}
                  >
                    {d} {lang === 'en' ? 'DAYS' : 'GÜN'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs font-black uppercase mb-2 text-black dark:text-white">
                {lang === 'en' ? 'EXPERIENCE LEVEL' : 'BAŞLANGIÇ SEVİYESİ'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'beginner' as const, label: lang === 'en' ? 'BEGINNER' : 'BAŞLANGIÇ' },
                  { id: 'intermediate' as const, label: lang === 'en' ? 'INTERMEDIATE' : 'ORTA' },
                  { id: 'advanced' as const, label: lang === 'en' ? 'ADVANCED' : 'İLERİ' }
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setLevel(l.id)}
                    className={`h-[40px] font-mono text-xs font-black uppercase border-2 transition-all cursor-pointer ${
                      level === l.id
                        ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-brutal-sm'
                        : 'bg-white dark:bg-zinc-900 border-black dark:border-white text-black dark:text-white hover:bg-zinc-100'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[48px] border-2 border-black dark:border-white bg-red-600 text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            {lang === 'en' ? 'GENERATE PERSONALIZED CURRICULUM →' : 'MÜFREDATI HESAPLA VE ÜRET →'}
          </button>

        </form>
      </div>

      {/* Generated Plan View */}
      {currentPlan && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Header Card */}
          <div className="p-6 sm:p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-xl dark:shadow-brutal-white-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase bg-red-600 text-white px-2.5 py-0.5 border border-black">
                  {currentPlan.durationDays} {lang === 'en' ? 'DAYS' : 'GÜN'} / {currentPlan.level.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white mt-2">
                  {currentPlan.planTitle}
                </h3>
              </div>

              {/* Progress Box */}
              <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 space-y-1.5 shrink-0 shadow-brutal-sm">
                <div className="font-mono text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">
                  {lang === 'en'
                    ? `PROGRESS: ${completedCount} / ${currentPlan.exercises.length} DAYS`
                    : `İLERLEME: ${completedCount} / ${currentPlan.exercises.length} GÜN`}
                </div>
                <div className="w-40 h-3.5 border-2 border-black dark:border-white bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-green-600" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="font-mono text-xs font-black text-green-600 dark:text-green-400">
                  %{progressPercent} {lang === 'en' ? 'COMPLETED' : 'TAMAMLANDI'}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs font-medium uppercase text-zinc-600 dark:text-zinc-400">
                {lang === 'en'
                  ? 'Apply positive 8-15 minute sessions daily; always conclude while the dog is successful.'
                  : 'Günde 8-15 dakikalık pozitif seanslar uygulayın; seansı köpek başarılıyken bitirin.'}
              </span>
              <div className="flex items-center gap-2">
                <Link
                  to="/clicker"
                  className="h-[38px] px-3.5 border-2 border-black dark:border-white bg-yellow-400 text-black font-mono text-xs font-black uppercase flex items-center gap-1.5 shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                  title="Sesli Dijital Clicker ve Seans Kronometresi"
                >
                  <Zap className="w-3.5 h-3.5 fill-black text-black" />
                  <span>{lang === 'en' ? 'OPEN CLICKER' : "CLİCKER'I AÇ"}</span>
                </Link>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="h-[38px] px-4 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800 font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-brutal-sm cursor-pointer hover:bg-zinc-200"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'PRINT' : 'YAZDIR'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={savedSuccess}
                  className={`h-[38px] px-4 border-2 border-black dark:border-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-brutal-sm cursor-pointer ${
                    savedSuccess
                      ? 'bg-green-600 text-white'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{savedSuccess ? (lang === 'en' ? 'SAVED TO PANEL ✓' : 'PANELİYE KAYDEDİLDİ ✓') : (lang === 'en' ? 'SAVE PLAN' : 'PLANI KAYDET')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Day Cards */}
          <div className="space-y-3">
            {currentPlan.exercises.map((ex) => {
              const isExpanded = expandedDay === ex.day;
              return (
                <div
                  key={ex.day}
                  className={`border-2 border-black dark:border-white transition-all shadow-brutal ${
                    ex.completed
                      ? 'bg-zinc-50 dark:bg-zinc-950 opacity-90'
                      : 'bg-white dark:bg-zinc-900'
                  }`}
                >
                  <div
                    onClick={() => setExpandedDay(isExpanded ? null : ex.day)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleDay(ex.day);
                        }}
                        className="text-black dark:text-white cursor-pointer hover:scale-110 transition-transform"
                      >
                        {ex.completed ? (
                          <CheckSquare className="w-6 h-6 text-green-600" />
                        ) : (
                          <Square className="w-6 h-6 text-zinc-400" />
                        )}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-black uppercase text-red-600">
                            {lang === 'en' ? `DAY ${ex.day}` : `GÜN ${ex.day}`}
                          </span>
                          <span className="font-mono text-[10px] font-bold text-zinc-500">
                            • {ex.durationMinutes} {lang === 'en' ? 'MINUTES' : 'DAKİKA'}
                          </span>
                        </div>
                        <h4 className={`text-base font-black uppercase mt-0.5 ${ex.completed ? 'line-through opacity-70' : ''}`}>
                          {ex.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase hidden sm:block text-zinc-500">
                        {isExpanded ? (lang === 'en' ? 'COLLAPSE' : 'KAPAT') : (lang === 'en' ? 'DETAILS' : 'DETAY')}
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-5 border-t-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 space-y-4">
                      <div>
                        <span className="font-mono text-[11px] font-black uppercase text-zinc-500 block">
                          {lang === 'en' ? 'DAILY GOAL:' : 'GÜNLÜK HEDEF:'}
                        </span>
                        <p className="text-xs font-medium text-black dark:text-white mt-0.5">
                          {ex.goal}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="font-mono text-[11px] font-black uppercase text-zinc-500 block">
                          {lang === 'en' ? 'STEP-BY-STEP APPLICATION:' : 'ADIM ADIM UYGULAMA:'}
                        </span>
                        <div className="space-y-1.5">
                          {ex.steps.map((st, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs font-medium">
                              <span className="w-4 h-4 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono text-[10px] font-black shrink-0">
                                {i + 1}
                              </span>
                              <span>{st}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-1">
                          <span className="font-mono text-[10px] font-black uppercase text-green-600 block">
                            🍖 {lang === 'en' ? 'REWARD & REINFORCEMENT TIP' : 'ÖDÜL VE PEKİŞTİREÇ İPUCU'}
                          </span>
                          <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                            {ex.rewardTip}
                          </p>
                        </div>
                        <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-1">
                          <span className="font-mono text-[10px] font-black uppercase text-yellow-600 block">
                            👀 {lang === 'en' ? 'CALMING SIGNAL TO WATCH' : 'SAKİNLEŞME SİNYALİ TAKİBİ'}
                          </span>
                          <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                            {ex.calmingSignalWatch}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};
