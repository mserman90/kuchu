import React, { useState } from 'react';
import { DisclaimerBar } from '@/components/common/Ui';
import { 
  TOXIC_FOODS_DATABASE, 
  ToxicFoodItem, 
  ToxicityLevel 
} from '@/lib/content/toxicFoods';
import { ChocolateCalculator } from '@/components/toxic/ChocolateCalculator';
import { 
  Search, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  PhoneCall, 
  Flame, 
  Info,
  ChevronDown,
  ChevronUp,
  Apple
} from 'lucide-react';

export const ToxicFoodsPage: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [filterLevel, setFilterLevel] = useState<ToxicityLevel | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('kuru-uzum-yas-uzum');

  const filteredFoods = TOXIC_FOODS_DATABASE.filter((item) => {
    const matchesFilter = filterLevel === 'all' || item.level === filterLevel;
    const query = search.toLowerCase().trim();
    const matchesSearch = 
      query === '' ||
      item.name.toLowerCase().includes(query) ||
      item.toxicAgent.toLowerCase().includes(query) ||
      item.aliases.some((a) => a.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  const getLevelBadge = (level: ToxicityLevel) => {
    switch (level) {
      case 'critical':
        return {
          bg: 'bg-red-600 text-white animate-pulse',
          label: '🚨 ACİL HAYATİ TEHLİKE'
        };
      case 'high':
        return {
          bg: 'bg-orange-600 text-white',
          label: '⚠️ YÜKSEK TOKSİSİTE'
        };
      case 'moderate':
        return {
          bg: 'bg-yellow-400 text-black',
          label: '🟡 ORTA ZARARLI'
        };
      case 'safe':
        return {
          bg: 'bg-green-600 text-white',
          label: '🟢 GÜVENLİ GIDA'
        };
    }
  };

  return (
    <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-mono font-black text-sm border-2 border-black">
            ☣
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-600">
            MERCK VETERINARY MANUAL & ASPCA TOKSİKOLOJİ PROTOKOLLERİ
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          ZEHİRLİ GIDALAR & ACİL TOKSİKOLOJİ REHBERİ
        </h1>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
          Köpeğiniz yabancı bir gıda veya insan yemeği mi yedi? Panik yapmadan önce toksik maddeyi arayın, ölümcül eşiğini kontrol edin ve veteriner hekime ulaşana kadar doğru ilk yardım adımlarını uygulayın.
        </p>
      </div>

      <DisclaimerBar variant="compact" />

      {/* Emergency First-Aid Vital Rules Banner */}
      <div className="p-6 border-2 border-black dark:border-white bg-black text-white dark:bg-zinc-950 dark:text-white shadow-brutal space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-red-500 animate-bounce" />
          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            ACİL ZEHİRLENMEDE 3 HAYATİ İLK YARDIM KURALI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3 border border-zinc-700 bg-zinc-900/70 space-y-1">
            <span className="text-red-400 font-bold">1. NE ZAMAN KUSTURULMAZ?</span>
            <p className="text-zinc-300 text-[11px] leading-relaxed">
              Köpek baygınsa, kasılıyorsa, pişen sivri kemik yutmuşsa veya çamaşır suyu/asit gibi yakıcı kimyasal içtiyse <strong>ASLA KUSTURMAYIN</strong>. Yemek borusu delinebilir veya akciğerine kaçarak boğulabilir.
            </p>
          </div>

          <div className="p-3 border border-zinc-700 bg-zinc-900/70 space-y-1">
            <span className="text-yellow-400 font-bold">2. İLK 2 SAAT KURALI</span>
            <p className="text-zinc-300 text-[11px] leading-relaxed">
              Midedeki toksin henüz kana ve karaciğere karışmadan önce (ilk 1-2 saat) veteriner kliniğinde Apomorfin veya Hidrojen Peroksit ile kontrollü kusturulursa kurtulma şansı %95'tir.
            </p>
          </div>

          <div className="p-3 border border-zinc-700 bg-zinc-900/70 space-y-1">
            <span className="text-green-400 font-bold">3. AMBALAJI YANINIZA ALIN</span>
            <p className="text-zinc-300 text-[11px] leading-relaxed">
              Yenen ilacın kutusunu, çikolatanın ambalajını veya bitkinin fotoğrafını mutlaka veteriner hekime gösterin. Spesifik panzehir (Antidot) bu bilgiye göre seçilir.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Chocolate Calculator Tool */}
      <ChocolateCalculator />

      {/* Search and Filters */}
      <div className="p-4 sm:p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Gıda adı yazın (Örn: üzüm, sakız, soğan, çikolata, havuç)..."
              className="w-full pl-10 pr-4 py-2.5 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 font-mono text-xs font-bold uppercase focus:outline-hidden"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'TÜMÜ' },
              { id: 'critical', label: '🚨 KRİTİK' },
              { id: 'high', label: '⚠️ YÜKSEK' },
              { id: 'moderate', label: '🟡 ORTA' },
              { id: 'safe', label: '🟢 GÜVENLİ' }
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterLevel(f.id as any)}
                className={`px-3 py-1.5 font-mono text-xs font-black uppercase border-2 transition-all cursor-pointer ${
                  filterLevel === f.id
                    ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-black dark:border-white hover:bg-zinc-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        <div className="font-mono text-xs text-zinc-500 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-2">
          <span>Toplam {filteredFoods.length} gıda maddesi listeleniyor.</span>
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="text-red-600 underline font-bold cursor-pointer"
            >
              Aramayı Temizle
            </button>
          )}
        </div>

      </div>

      {/* Toxic Foods Accordion / Grid */}
      <div className="space-y-4">
        {filteredFoods.length === 0 ? (
          <div className="p-8 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 text-center font-mono text-xs space-y-2">
            <div className="text-3xl">🔍</div>
            <div className="font-black uppercase">ARADIĞINIZ GIDA VERİTABANINDA BULUNAMADI</div>
            <p className="text-zinc-500">
              Şüpheli bir madde tüketildiyse vakit kaybetmeden derhal en yakın veteriner kliniğine danışın.
            </p>
          </div>
        ) : (
          filteredFoods.map((item) => {
            const isExpanded = expandedId === item.id;
            const badge = getLevelBadge(item.level);

            return (
              <div 
                key={item.id}
                className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal transition-all"
              >
                {/* Header Row */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2 py-0.5 font-mono text-[10px] font-black uppercase border border-black ${badge.bg}`}>
                        {badge.label}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500 font-bold uppercase">
                        Toksin: {item.toxicAgent}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black uppercase text-black dark:text-white">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="font-mono text-xs font-bold text-red-600">
                      Başlangıç: {item.onsetHours}
                    </span>
                    <button className="p-1 border border-black dark:border-white">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Accordion Content */}
                {isExpanded && (
                  <div className="border-t-2 border-black dark:border-white p-6 bg-zinc-50 dark:bg-zinc-950 space-y-6 animate-in fade-in">
                    
                    {/* Lethal Threshold Alert */}
                    <div className="p-4 border-2 border-black dark:border-white bg-red-600 text-white font-mono text-xs space-y-1">
                      <div className="font-black uppercase flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-yellow-300" />
                        <span>TOKSİK EŞİK VE TEHLİKE DERECESİ:</span>
                      </div>
                      <p className="leading-relaxed opacity-95">
                        {item.lethalThreshold}
                      </p>
                    </div>

                    {/* Symptoms & Emergency First Aid Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Symptoms */}
                      <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-2">
                        <span className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          GÖRÜLEN KLİNİK BELİRTİLER
                        </span>
                        <ul className="space-y-1.5 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                          {item.symptoms.map((sym, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-1.5">
                              <span className="text-red-600 font-bold">•</span>
                              <span>{sym}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Emergency First Aid */}
                      <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 space-y-2">
                        <span className="font-mono text-xs font-black uppercase text-green-600 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          ACİL İLK YARDIM ADIMLARI
                        </span>
                        <ul className="space-y-1.5 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                          {item.emergencyFirstAid.map((aid, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-1.5">
                              <span className="text-green-600 font-bold">✓</span>
                              <span>{aid}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Contraindications (What NOT to do) */}
                    <div className="p-4 border-2 border-black dark:border-white bg-amber-500/10 dark:bg-amber-950/20 space-y-1 font-mono text-xs text-black dark:text-white">
                      <span className="font-black text-amber-700 dark:text-amber-400 uppercase flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-amber-600" />
                        KESİNLİKLE YAPILMAMASI GEREKENLER (KONTRAENDİKASYON):
                      </span>
                      <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                        {item.contraindications.map((c, cIdx) => (
                          <li key={cIdx}>⛔ {c}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Veterinary Treatment */}
                    <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 font-mono text-xs space-y-1">
                      <span className="font-black uppercase text-black dark:text-white flex items-center gap-1">
                        <Info className="w-4 h-4 text-blue-600" />
                        VETERİNER KLİNİK MÜDAHALE VE YOĞUN BAKIM PROTOKOLÜ:
                      </span>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.veterinaryTreatment}
                      </p>
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
