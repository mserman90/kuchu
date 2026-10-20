import React, { useState, useEffect } from 'react';
import { useDog } from '@/context/DogContext';
import { useAppAuth } from '@/contexts/AppAuthContext';
import { dataEntities } from '@/lib/data/entities';
import { DogProfileEntity, BehaviorAnalysisEntity, TrainingPlanEntity, FavoriteEntity } from '@/lib/data/types';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Trash2, 
  Columns, 
  CalendarCheck, 
  Compass, 
  X,
  FileText,
  UserCheck
} from 'lucide-react';
import { toast } from 'sonner';
import { ThemeSelector } from '@/components/common/ThemeSelector';
import { BenchmarkComparison } from '@/components/common/BenchmarkComparison';

export const AccountPanelPage: React.FC = () => {
  const { activeDog, setActiveDog } = useDog();
  const { authState, user, login, logout } = useAppAuth();

  // Local entities state
  const [dogs, setDogs] = useState<DogProfileEntity[]>([]);
  const [analyses, setAnalyses] = useState<BehaviorAnalysisEntity[]>([]);
  const [plans, setPlans] = useState<TrainingPlanEntity[]>([]);
  const [favorites, setFavorites] = useState<FavoriteEntity[]>([]);

  // Modals
  const [isAddDogOpen, setIsAddDogOpen] = useState(false);
  const [compareAnalysisA, setCompareAnalysisA] = useState<BehaviorAnalysisEntity | null>(null);
  const [compareAnalysisB, setCompareAnalysisB] = useState<BehaviorAnalysisEntity | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // New Dog Form
  const [newDog, setNewDog] = useState<Omit<DogProfileEntity, 'id' | 'createdAt'>>({
    name: '',
    breed: '',
    ageYears: 1,
    ageMonths: 0,
    size: 'medium',
    gender: 'male',
    isNeutered: true,
    energyLevel: 'medium',
    knownIssues: [],
    specialNotes: ''
  });

  // Notes state
  const [personalNotes, setPersonalNotes] = useState(() => {
    return localStorage.getItem('kuchu_personal_notes') || 'Kuçu bugün yürüyüşte karşıdan gelen köpeği görünce daha az heyecanlandı. LAT protokolü çalışıyor.';
  });

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');

  const refreshData = async () => {
    const [d, a, p, f] = await Promise.all([
      dataEntities.dogs.list(),
      dataEntities.analyses.list(),
      dataEntities.plans.list(),
      dataEntities.favorites.list()
    ]);
    setDogs(d);
    setAnalyses(a);
    setPlans(p);
    setFavorites(f);
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleSaveNotes = () => {
    localStorage.setItem('kuchu_personal_notes', personalNotes);
    toast.success('Kişisel notlar kaydedildi.');
  };

  const handleAddDogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDog.name.trim()) return;
    const created = await dataEntities.dogs.create(newDog);
    setActiveDog(created as any);
    setIsAddDogOpen(false);
    setNewDog({
      name: '',
      breed: '',
      ageYears: 1,
      ageMonths: 0,
      size: 'medium',
      gender: 'male',
      isNeutered: true,
      energyLevel: 'medium',
      knownIssues: [],
      specialNotes: ''
    });
    refreshData();
    toast.success(`"${created.name}" profili eklendi.`);
  };

  const handleDeleteDog = async (id: string, name: string) => {
    if (confirm(`"${name}" profilini silmek istediğinize emin misiniz?`)) {
      await dataEntities.dogs.delete(id);
      refreshData();
      toast.info(`"${name}" profili silindi.`);
    }
  };

  const handleDeleteAnalysis = async (id: string) => {
    await dataEntities.analyses.delete(id);
    refreshData();
    toast.info('Analiz kaydı silindi.');
  };

  const handleDeletePlan = async (id: string) => {
    await dataEntities.plans.delete(id);
    refreshData();
    toast.info('Eğitim planı silindi.');
  };

  const openComparison = (a: BehaviorAnalysisEntity, b?: BehaviorAnalysisEntity) => {
    setCompareAnalysisA(a);
    setCompareAnalysisB(b || analyses.find((item) => item.id !== a.id) || null);
    setIsCompareModalOpen(true);
  };

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Header */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-600">
            HESAP & KÖPEK YÖNETİM MERKEZİ
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
            KONTROL PANELİ
          </h1>
          <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Köpek profillerinizi, geçmiş davranış analizlerinizi ve aktif eğitim müfredatlarınızı yönetin.
          </p>
        </div>

        {/* Auth status block */}
        <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs shadow-brutal-sm">
          {authState === 'authenticated' && user ? (
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-green-600" />
              <span>GİRİŞ YAPILDI: <strong>{user.email}</strong></span>
              <button
                onClick={logout}
                className="text-red-600 underline font-bold ml-2 cursor-pointer"
              >
                Çıkış
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (loginEmail) login(loginEmail);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="eposta@adresiniz.com"
                className="p-1 px-2 border border-black dark:border-white text-xs bg-white dark:bg-zinc-900"
              />
              <button
                type="submit"
                className="px-2.5 py-1 bg-red-600 text-white font-bold uppercase cursor-pointer"
              >
                GİRİŞ
              </button>
            </form>
          )}
        </div>
      </div>

      {/* SECTION 1: DOG PROFILES */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
          <h2 className="text-xl font-black uppercase text-black dark:text-white flex items-center gap-2">
            <span>🐕 KÖPEK PROFİLLERİ</span>
            <span className="font-mono text-xs font-bold text-zinc-500">({dogs.length})</span>
          </h2>

          <button
            onClick={() => setIsAddDogOpen(true)}
            className="flex items-center gap-1.5 h-[36px] px-4 bg-red-600 text-white font-mono text-xs font-bold uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>YENİ KÖPEK EKLE</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dogs.map((d) => {
            const isSelected = activeDog?.id === d.id;
            return (
              <div
                key={d.id}
                className={`p-5 border-2 border-black dark:border-white transition-all space-y-3 ${
                  isSelected
                    ? 'bg-zinc-50 dark:bg-zinc-950 shadow-brutal'
                    : 'bg-white dark:bg-zinc-900 shadow-brutal-sm'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-black uppercase text-red-600">
                      {d.breed || 'Irk Belirtilmedi'}
                    </span>
                    <h3 className="text-xl font-black uppercase text-black dark:text-white">
                      {d.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    {dogs.length > 1 && (
                      <button
                        onClick={() => handleDeleteDog(d.id, d.name)}
                        className="p-1.5 text-zinc-400 hover:text-red-600 cursor-pointer"
                        title="Profili Sil"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 font-mono text-[11px] font-bold border-y-2 border-black dark:border-white py-2 text-zinc-600 dark:text-zinc-400">
                  <div>YAŞ: {d.ageYears} Yıl</div>
                  <div>BOYUT: {d.size.toUpperCase()}</div>
                  <div>ENERJİ: {d.energyLevel.toUpperCase()}</div>
                </div>

                {d.specialNotes && (
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {d.specialNotes}
                  </p>
                )}

                <button
                  onClick={() => setActiveDog(d as any)}
                  className={`w-full py-2 font-mono text-xs font-black uppercase border-2 border-black dark:border-white cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-200'
                  }`}
                >
                  {isSelected ? '✓ SEÇİLİ AKTİF KÖPEK' : 'BU KÖPEĞİ SEÇ'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: BEHAVIOR ANALYSES HISTORY & COMPARISON */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black dark:border-white pb-3">
          <div>
            <h2 className="text-xl font-black uppercase text-black dark:text-white flex items-center gap-2">
              <span>📊 DAVRANIŞ ANALİZ GEÇMİŞİ</span>
              <span className="font-mono text-xs font-bold text-zinc-500">({analyses.length})</span>
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Gözlemlediğiniz ruh hallerinin zamana göre değişimini inceleyin veya iki analizi yan yana kıyaslayın.
            </p>
          </div>

          {analyses.length >= 2 && (
            <button
              onClick={() => openComparison(analyses[0], analyses[1])}
              className="flex items-center gap-1.5 h-[36px] px-4 bg-yellow-400 text-black font-mono text-xs font-bold uppercase border-2 border-black shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer shrink-0"
            >
              <Columns className="w-4 h-4" />
              <span>SON 2 ANALİZİ KARŞILAŞTIR</span>
            </button>
          )}
        </div>

        {analyses.length === 0 ? (
          <div className="p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal text-center space-y-3">
            <Compass className="w-8 h-8 text-zinc-400 mx-auto" />
            <div className="text-sm font-bold text-black dark:text-white uppercase">
              Henüz kaydedilmiş bir analiz bulunmuyor.
            </div>
            <Link
              to="/analiz"
              className="inline-block px-4 py-2 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal-sm"
            >
              İLK ANALİZİ BAŞLAT →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analyses.map((ana) => (
              <div
                key={ana.id}
                className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase text-zinc-500">
                      {new Date(ana.timestamp).toLocaleDateString('tr-TR')} • {new Date(ana.timestamp).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <h4 className="text-lg font-black uppercase text-black dark:text-white">
                      {ana.moodTitle}
                    </h4>
                  </div>

                  <span className={`font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black ${
                    ana.riskLevel === 'red'
                      ? 'bg-red-600 text-white'
                      : ana.riskLevel === 'yellow'
                      ? 'bg-yellow-400 text-black'
                      : 'bg-green-600 text-white'
                  }`}>
                    RİSK: %{ana.riskScore}
                  </span>
                </div>

                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {ana.summary}
                </p>

                <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-2 font-mono text-xs font-bold">
                  <button
                    onClick={() => openComparison(ana)}
                    className="text-red-600 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Columns className="w-3.5 h-3.5" />
                    <span>KIYASLA</span>
                  </button>

                  <button
                    onClick={() => handleDeleteAnalysis(ana.id)}
                    className="text-zinc-400 hover:text-red-600 cursor-pointer"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 3: TRAINING PLANS PROGRESS */}
      <section className="space-y-4">
        <div className="border-b-2 border-black dark:border-white pb-3">
          <h2 className="text-xl font-black uppercase text-black dark:text-white flex items-center gap-2">
            <span>🎯 KAYITLI EĞİTİM PLANLARI</span>
            <span className="font-mono text-xs font-bold text-zinc-500">({plans.length})</span>
          </h2>
        </div>

        {plans.length === 0 ? (
          <div className="p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal text-center space-y-3">
            <CalendarCheck className="w-8 h-8 text-zinc-400 mx-auto" />
            <div className="text-sm font-bold text-black dark:text-white uppercase">
              Henüz kaydedilmiş bir eğitim planı yok.
            </div>
            <Link
              to="/egitim-planlari"
              className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal-sm"
            >
              EĞİTİM PLANI OLUŞTUR →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {plans.map((p) => {
              const compCount = p.exercises.filter((ex) => ex.completed).length;
              const pct = Math.round((compCount / p.exercises.length) * 100);
              return (
                <div
                  key={p.id}
                  className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase bg-red-600 text-white px-2 py-0.5 border border-black">
                        {p.durationDays} GÜN / {p.level.toUpperCase()}
                      </span>
                      <h3 className="text-lg font-black uppercase text-black dark:text-white mt-1">
                        {p.planTitle}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-mono text-xs font-bold uppercase text-zinc-500">
                          {compCount} / {p.exercises.length} TAMAMLANDI
                        </div>
                        <div className="w-36 h-3 border border-black dark:border-white bg-zinc-200 dark:bg-zinc-800 overflow-hidden mt-1">
                          <div className="h-full bg-green-600" style={{ width: `${pct}%` }} />
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeletePlan(p.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-600 cursor-pointer"
                        title="Planı Sil"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <Link
                      to="/egitim-planlari"
                      className="font-mono text-xs font-black uppercase text-red-600 hover:underline"
                    >
                      PLANA GİT VE EGZERSİZLERİ İŞARETLE →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* SECTION 4: FAVORITES & PERSONAL NOTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Favorites */}
        <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3">
            <span className="text-lg">⭐</span>
            <h3 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              FAVORİ İÇERİKLER ({favorites.length})
            </h3>
          </div>

          {favorites.length === 0 ? (
            <p className="text-xs font-medium text-zinc-500">
              Kütüphane ve Sorun Çözüm Merkezindeki makalelerin yanındaki yıldız simgesine tıklayarak buraya ekleyebilirsiniz.
            </p>
          ) : (
            <ul className="space-y-2 font-mono text-xs">
              {favorites.map((fav) => (
                <li
                  key={fav.id}
                  className="p-2 border border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between"
                >
                  <span className="font-bold truncate max-w-[220px]">{fav.title}</span>
                  <span className="text-[10px] text-red-600 font-bold uppercase">{fav.targetType}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Personal Ethology Notes */}
        <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
          <div className="flex items-center gap-2 border-b-2 border-black dark:border-white pb-3">
            <FileText className="w-5 h-5 text-red-600" />
            <h3 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              KİŞİSEL GÖZLEM VE DAVRANIŞ NOTLARI
            </h3>
          </div>

          <textarea
            value={personalNotes}
            onChange={(e) => setPersonalNotes(e.target.value)}
            rows={4}
            className="w-full p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-medium focus:outline-hidden"
            placeholder="Köpeğinizin bugünkü ilerlemeleri, tetikleyicileri..."
          />

          <div className="flex justify-end">
            <button
              onClick={handleSaveNotes}
              className="h-[36px] px-5 bg-red-600 text-white font-mono text-xs font-bold uppercase border-2 border-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
            >
              NOTLARI KAYDET
            </button>
          </div>
        </div>

      </div>

      {/* SECTION 5: THEME SETTINGS (GECE / GÜNDÜZ MODU) */}
      <section className="space-y-4">
        <ThemeSelector variant="full" />
      </section>

      {/* SECTION 6: BENCHMARK & KARŞILAŞTIRMA */}
      <section className="space-y-4 pt-4">
        <BenchmarkComparison />
      </section>

      {/* COMPARISON MODAL (Brutalist Side-by-Side) */}
      {isCompareModalOpen && compareAnalysisA && compareAnalysisB && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-brutal-xl dark:shadow-brutal-white-xl">
            
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black uppercase bg-red-600 text-white px-2 py-0.5 border border-black">
                  ETOLOJİK ZAMAN ANALİZİ
                </span>
                <h3 className="text-xl font-black uppercase text-black dark:text-white mt-1">
                  İKİ ANALİZİ KARŞILAŞTIR
                </h3>
              </div>
              <button onClick={() => setIsCompareModalOpen(false)} className="p-1 cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Column A */}
              <div className="p-4 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 space-y-3">
                <div className="font-mono text-xs font-black uppercase bg-black text-white px-2 py-0.5 inline-block">
                  A: {new Date(compareAnalysisA.timestamp).toLocaleDateString('tr-TR')}
                </div>
                <h4 className="text-base font-black uppercase text-black dark:text-white">
                  {compareAnalysisA.moodTitle}
                </h4>
                <div className="font-mono text-sm font-black text-red-600">
                  RİSK: %{compareAnalysisA.riskScore} ({compareAnalysisA.riskTitle})
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {compareAnalysisA.summary}
                </p>
                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 font-mono text-xs font-bold space-y-1">
                  <div>Kuyruk: <strong>{compareAnalysisA.scoreBreakdown.tailScore}/30</strong></div>
                  <div>Duruş: <strong>{compareAnalysisA.scoreBreakdown.postureScore}/25</strong></div>
                  <div>Göz+Ağız: <strong>{compareAnalysisA.scoreBreakdown.faceScore}/20</strong></div>
                </div>
              </div>

              {/* Column B */}
              <div className="p-4 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 space-y-3">
                <div className="font-mono text-xs font-black uppercase bg-red-600 text-white px-2 py-0.5 inline-block">
                  B: {new Date(compareAnalysisB.timestamp).toLocaleDateString('tr-TR')}
                </div>
                <h4 className="text-base font-black uppercase text-black dark:text-white">
                  {compareAnalysisB.moodTitle}
                </h4>
                <div className="font-mono text-sm font-black text-red-600">
                  RİSK: %{compareAnalysisB.riskScore} ({compareAnalysisB.riskTitle})
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {compareAnalysisB.summary}
                </p>
                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 font-mono text-xs font-bold space-y-1">
                  <div>Kuyruk: <strong>{compareAnalysisB.scoreBreakdown.tailScore}/30</strong></div>
                  <div>Duruş: <strong>{compareAnalysisB.scoreBreakdown.postureScore}/25</strong></div>
                  <div>Göz+Ağız: <strong>{compareAnalysisB.scoreBreakdown.faceScore}/20</strong></div>
                </div>
              </div>

            </div>

            {/* Comparison Conclusion */}
            <div className="p-4 border-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-950 font-mono text-xs font-black uppercase text-black dark:text-white">
              📈 GELİŞİM FARKI: Gerilim Skoru Değişimi: {compareAnalysisB.riskScore - compareAnalysisA.riskScore > 0 ? `+${compareAnalysisB.riskScore - compareAnalysisA.riskScore}% (Artış)` : `${compareAnalysisB.riskScore - compareAnalysisA.riskScore}% (Pozitif İyileşme / Sakinleşme)`}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="h-[40px] px-6 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-black uppercase border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                KAPAT
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Add Dog Modal */}
      {isAddDogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-brutal-xl dark:shadow-brutal-white-xl">
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
              <h3 className="text-lg font-black uppercase text-black dark:text-white">
                YENİ KÖPEK PROFİLİ EKLE
              </h3>
              <button onClick={() => setIsAddDogOpen(false)} className="p-1 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddDogSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-xs font-black uppercase mb-1">KÖPEK ADI</label>
                  <input
                    type="text"
                    value={newDog.name}
                    onChange={(e) => setNewDog({ ...newDog, name: e.target.value })}
                    className="w-full p-2.5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase"
                    placeholder="Örn: Pamuk"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-black uppercase mb-1">IRK / MELEZ</label>
                  <input
                    type="text"
                    value={newDog.breed}
                    onChange={(e) => setNewDog({ ...newDog, breed: e.target.value })}
                    className="w-full p-2.5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase"
                    placeholder="Örn: Terrier Melezi"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-mono text-xs font-black uppercase mb-1">YAŞ (YIL)</label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={newDog.ageYears}
                    onChange={(e) => setNewDog({ ...newDog, ageYears: Number(e.target.value) })}
                    className="w-full p-2.5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-black uppercase mb-1">BOYUT</label>
                  <select
                    value={newDog.size}
                    onChange={(e) => setNewDog({ ...newDog, size: e.target.value as any })}
                    className="w-full p-2.5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase"
                  >
                    <option value="small">Küçük</option>
                    <option value="medium">Orta</option>
                    <option value="large">Büyük</option>
                    <option value="giant">Dev</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs font-black uppercase mb-1">CİNSİYET</label>
                  <select
                    value={newDog.gender}
                    onChange={(e) => setNewDog({ ...newDog, gender: e.target.value as any })}
                    className="w-full p-2.5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase"
                  >
                    <option value="male">Erkek</option>
                    <option value="female">Dişi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-black uppercase mb-1">ÖZEL NOTLAR</label>
                <textarea
                  value={newDog.specialNotes}
                  onChange={(e) => setNewDog({ ...newDog, specialNotes: e.target.value })}
                  placeholder="Karakter özellikleri veya korkuları..."
                  rows={2}
                  className="w-full p-2.5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-medium"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t-2 border-black dark:border-white">
                <button
                  type="button"
                  onClick={() => setIsAddDogOpen(false)}
                  className="h-[38px] px-4 border-2 border-black dark:border-white font-mono text-xs font-black uppercase cursor-pointer"
                >
                  İPTAL
                </button>
                <button
                  type="submit"
                  className="h-[38px] px-6 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-black shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  KAYDET
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
