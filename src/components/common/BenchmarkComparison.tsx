import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Minus, 
  ShieldCheck, 
  Zap, 
  Lock,
  Award
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BenchmarkRow {
  category: string;
  feature: string;
  kuchu: { value: string; positive: boolean; note?: string };
  dogo: { value: string; positive: boolean | 'partial'; note?: string };
  puppr: { value: string; positive: boolean | 'partial'; note?: string };
  goodpup: { value: string; positive: boolean | 'partial'; note?: string };
  traditional: { value: string; positive: boolean | 'partial'; note?: string };
}

export const BenchmarkComparison: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [filter, setFilter] = useState<'all' | 'science' | 'privacy' | 'cost'>('all');
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const benchmarkDataTR: BenchmarkRow[] = [
    {
      category: 'science',
      feature: 'Bilimsel Etolojik Metodoloji',
      kuchu: { value: 'Merck Vet Manual 3M Modeli + Pozitif Karşıt Koşullandırma', positive: true },
      dogo: { value: 'Temel Clicker Eğitimi', positive: 'partial' },
      puppr: { value: 'Numara & Şov Odaklı', positive: 'partial' },
      goodpup: { value: 'Eğitmene Göre Değişken', positive: 'partial' },
      traditional: { value: 'Alfa / Dominans & Hiyerarşi (Eski Usul)', positive: false }
    },
    {
      category: 'science',
      feature: 'Klinik Triyaj & Aciliyet Teşhisi',
      kuchu: { value: '5 Aşamalı Etolojik Triyaj + Kırmızı Bayraklar', positive: true },
      dogo: { value: 'Yok (Sadece Genel Ders Listesi)', positive: false },
      puppr: { value: 'Yok', positive: false },
      goodpup: { value: 'Birebir Görüşmede Manuel', positive: 'partial' },
      traditional: { value: 'Yok / Subjektif Gözlem', positive: false }
    },
    {
      category: 'science',
      feature: 'Çiftlik & Kırsal Köpek Sorunları (Tavuk/Kedi Avlama - Predatory Drift)',
      kuchu: { value: 'Özel Premack & Flirt Pole & Çift Çit Protokolü', positive: true },
      dogo: { value: 'Yok (Sadece Şehir Dairesi Uyumu)', positive: false },
      puppr: { value: 'Yok', positive: false },
      goodpup: { value: 'Çok Sınırlı', positive: false },
      traditional: { value: 'Tavuk Bağlama / Şok Tasması (Zararlı)', positive: false }
    },
    {
      category: 'science',
      feature: 'Tıbbi Dışlama (Medical Rule-Out) Kuralı',
      kuchu: { value: 'Zorunlu Hekim Eşiği (Sistit, Artrit, Kulak vb.)', positive: true },
      dogo: { value: 'Yüzeysel Uyarı', positive: 'partial' },
      puppr: { value: 'Yok', positive: false },
      goodpup: { value: 'Veteriner Yönlendirmesi Var', positive: true },
      traditional: { value: 'Gözardı Edilir / "İnatçılık" Sanılır', positive: false }
    },
    {
      category: 'cost',
      feature: 'Kullanım Maliyeti / Abonelik',
      kuchu: { value: '%100 ÜCRETSİZ & AÇIK BİLİM (0 ₺)', positive: true },
      dogo: { value: '₺899 - ₺1.400 / Yıl (Abonelik Tuzağı)', positive: false },
      puppr: { value: '₺650 / Yıl (Premium Kilitli)', positive: false },
      goodpup: { value: '~$34 / Hafta (~₺1.200 / Hafta)', positive: false },
      traditional: { value: '₺15.000 - ₺45.000 / Eğitim Paketi', positive: false }
    },
    {
      category: 'privacy',
      feature: 'Gizlilik, Veri Güvenliği & Hesap Zorunluluğu',
      kuchu: { value: 'Local-First (Veriler Cihazınızda Kalır, Üyeliksiz Tam Erişim)', positive: true },
      dogo: { value: 'Zorunlu Hesap + Veri Analitiği', positive: false },
      puppr: { value: 'Zorunlu Kayıt', positive: 'partial' },
      goodpup: { value: 'Bulut Kaydı + Kredi Kartı Şartı', positive: false },
      traditional: { value: 'Sözleşmesiz / Takipsiz', positive: false }
    },
    {
      category: 'privacy',
      feature: 'Çevrimdışı Çalışma (Offline PWA Desteği)',
      kuchu: { value: 'Tam PWA (İnternetsiz Dağda/Kırsalda Çalışır)', positive: true },
      dogo: { value: 'Sürekli İnternet Gerektirir', positive: false },
      puppr: { value: 'Kısmi İndirme', positive: 'partial' },
      goodpup: { value: 'Görüntülü Arama İçin Yüksek Hız Şart', positive: false },
      traditional: { value: 'N/A', positive: false }
    },
    {
      category: 'science',
      feature: 'Yerel Türkçe & Türkiye Şartlarına Uyum',
      kuchu: { value: 'Yerel Sokak/Çiftlik Dinamiklerine %100 Uyumlu', positive: true },
      dogo: { value: 'Otomatik Çeviri Hataları', positive: 'partial' },
      puppr: { value: 'Yalnızca İngilizce', positive: false },
      goodpup: { value: 'Yalnızca İngilizce (ABD Odaklı)', positive: false },
      traditional: { value: 'Eğitmenin Kişisel Yaklaşımına Bağlı', positive: 'partial' }
    },
    {
      category: 'privacy',
      feature: 'Tasarım Dili & Erişilebilirlik (Gece/Gündüz Modu)',
      kuchu: { value: 'Swiss Modernism, Yüksek Kontrast, Tam Gece/Gündüz Modu', positive: true },
      dogo: { value: 'Çocuksu Oyunlaştırma, Reklam Bannerları', positive: 'partial' },
      puppr: { value: 'Standart Mobil Arayüz', positive: 'partial' },
      goodpup: { value: 'Kurumsal Çağrı Arayüzü', positive: 'partial' },
      traditional: { value: 'N/A', positive: false }
    }
  ];

  const benchmarkDataEN: BenchmarkRow[] = [
    {
      category: 'science',
      feature: 'Scientific Ethological Methodology',
      kuchu: { value: 'Merck Vet Manual 3M Model + Positive Counter-Conditioning', positive: true },
      dogo: { value: 'Basic Clicker Lessons', positive: 'partial' },
      puppr: { value: 'Tricks & Showmanship Focus', positive: 'partial' },
      goodpup: { value: 'Trainer-dependent Variations', positive: 'partial' },
      traditional: { value: 'Alpha / Dominance & Hierarchy (Outdated)', positive: false }
    },
    {
      category: 'science',
      feature: 'Clinical Triage & Urgency Diagnosis',
      kuchu: { value: '5-Stage Ethological Triage + Red Flags', positive: true },
      dogo: { value: 'None (Generic Lesson Catalog Only)', positive: false },
      puppr: { value: 'None', positive: false },
      goodpup: { value: 'Manual via 1-on-1 Consultation', positive: 'partial' },
      traditional: { value: 'None / Subjective Guesswork', positive: false }
    },
    {
      category: 'science',
      feature: 'Working & Rural Dog Challenges (Predatory Drift / Livestock)',
      kuchu: { value: 'Dedicated Premack & Flirt Pole & Double-Fence Protocol', positive: true },
      dogo: { value: 'None (Apartment Fitting Only)', positive: false },
      puppr: { value: 'None', positive: false },
      goodpup: { value: 'Very Limited', positive: false },
      traditional: { value: 'Chicken Tying / Shock Collars (Aversive)', positive: false }
    },
    {
      category: 'science',
      feature: 'Medical Rule-Out Mandate',
      kuchu: { value: 'Mandatory Clinical Threshold (Cystitis, Arthritis, Otitis, etc.)', positive: true },
      dogo: { value: 'Superficial Disclaimer', positive: 'partial' },
      puppr: { value: 'None', positive: false },
      goodpup: { value: 'Vet Referral Guidance Included', positive: true },
      traditional: { value: 'Ignored / Misattributed to "Stubbornness"', positive: false }
    },
    {
      category: 'cost',
      feature: 'Cost of Use / Subscriptions',
      kuchu: { value: '100% FREE & OPEN SCIENCE ($0 / £0 / ₺0)', positive: true },
      dogo: { value: '$70 - $120 / Year (Subscription Paywalls)', positive: false },
      puppr: { value: '~$50 / Year (Locked Premium Content)', positive: false },
      goodpup: { value: '~$34 / Week (~$136 / Month)', positive: false },
      traditional: { value: '$500 - $2,500 / Training Package', positive: false }
    },
    {
      category: 'privacy',
      feature: 'Privacy, Data Ownership & Mandatory Accounts',
      kuchu: { value: 'Local-First (Data Stays on Device, Full Access without Sign-up)', positive: true },
      dogo: { value: 'Mandatory Account + Telemetry Tracking', positive: false },
      puppr: { value: 'Mandatory Registration', positive: 'partial' },
      goodpup: { value: 'Cloud Storage + Credit Card Required', positive: false },
      traditional: { value: 'No Contract / Untracked', positive: false }
    },
    {
      category: 'privacy',
      feature: 'Offline Operation (Full PWA Support)',
      kuchu: { value: 'Full PWA (Operates in Forests/Mountains Without Internet)', positive: true },
      dogo: { value: 'Requires Continuous Internet', positive: false },
      puppr: { value: 'Partial Content Download', positive: 'partial' },
      goodpup: { value: 'Requires High-Speed Video Stream', positive: false },
      traditional: { value: 'N/A', positive: false }
    },
    {
      category: 'science',
      feature: 'Real-World Behavioral Adaptability',
      kuchu: { value: '100% Adapted for Street Rescues, Farms & High-Stimulus Environments', positive: true },
      dogo: { value: 'Automated Translation Errors', positive: 'partial' },
      puppr: { value: 'English Only', positive: false },
      goodpup: { value: 'US Suburban Focus Only', positive: false },
      traditional: { value: 'Subject to Individual Trainer', positive: 'partial' }
    },
    {
      category: 'privacy',
      feature: 'Design Aesthetics & Accessibility (Day/Night Theme)',
      kuchu: { value: 'Swiss Modernism, High-Contrast Neo-Brutalism, Day/Night Theme', positive: true },
      dogo: { value: 'Childish Gamification, Upsell Banners', positive: 'partial' },
      puppr: { value: 'Standard Commercial Mobile App', positive: 'partial' },
      goodpup: { value: 'Corporate Call Interface', positive: 'partial' },
      traditional: { value: 'N/A', positive: false }
    }
  ];

  const benchmarkData = isEn ? benchmarkDataEN : benchmarkDataTR;

  const filteredData = benchmarkData.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const renderBadge = (item: { value: string; positive: boolean | 'partial'; note?: string }) => {
    if (item.positive === true) {
      return (
        <div className="flex items-start gap-1.5 text-green-700 dark:text-green-400 font-bold">
          <Check className="w-4 h-4 shrink-0 text-green-600 mt-0.5" />
          <span className="text-xs leading-tight">{item.value}</span>
        </div>
      );
    }
    if (item.positive === false) {
      return (
        <div className="flex items-start gap-1.5 text-red-600 dark:text-red-400 font-medium">
          <X className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
          <span className="text-xs leading-tight">{item.value}</span>
        </div>
      );
    }
    return (
      <div className="flex items-start gap-1.5 text-zinc-600 dark:text-zinc-400 font-medium">
        <Minus className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
        <span className="text-xs leading-tight">{item.value}</span>
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      
      {/* Header Banner */}
      <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-red-600 text-white font-mono font-black text-xs border border-black dark:border-white">
            {isEn ? 'BENCHMARK & COMPARISON' : 'BENCHMARK & KARŞILAŞTIRMA'}
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
            {isEn ? 'INDUSTRY BENCHMARKS & SCIENTIFIC DISTINCTIONS' : 'SEKTÖREL PERFORMANS VE BİLİMSEL FARKLAR'}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
          {isEn
            ? 'KUÇU VS. GLOBAL APPS AND TRADITIONAL TRAINING'
            : 'KUÇU VS. KÜRESEL UYGULAMALAR VE GELENEKSEL EĞİTİM'}
        </h2>

        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
          {isEn ? (
            <>
              While most commercial apps treat dogs as <em>"trick-performing novelty toys"</em>, Kuçu democratizes{' '}
              <strong>Merck Veterinary Manual Clinical Behavioral Medicine</strong> standards and{' '}
              <strong>LIMA (Least Intrusive, Minimally Aversive)</strong> protocols for everyone. Here is our objective comparison:
            </>
          ) : (
            <>
              Piyasadaki uygulamaların çoğu köpekleri <em>"numara yapan birer oyuncak"</em> gibi ele alırken; Kuçu,{' '}
              <strong>Merck Veterinary Manual Klinik Davranış Tıbbı</strong> standartlarını ve{' '}
              <strong>LIMA (En Az İnvaziv, Etkili Yaklaşım)</strong> prensiplerini tabana yayar. İşte tarafsız sektörel kıyaslamamız:
            </>
          )}
        </p>

        {/* Highlight Scorecards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">
              {isEn ? 'PRICING POLICY' : 'FİYAT POLİTİKASI'}
            </div>
            <div className="text-lg font-black text-green-600">
              {isEn ? '100% FREE' : '%100 ÜCRETSİZ'}
            </div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">
              {isEn ? 'No hidden subscriptions' : 'Gizli abonelik yok'}
            </div>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">
              {isEn ? 'CLINICAL ETHOLOGY' : 'KLİNİK ETOLOJİ'}
            </div>
            <div className="text-lg font-black text-red-600">MERCK 3M</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">
              {isEn ? 'Medical rule-out mandate' : 'Tıbbi kural dışlama'}
            </div>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">
              {isEn ? 'PRIVACY & DATA' : 'GİZLİLİK & VERİ'}
            </div>
            <div className="text-lg font-black text-black dark:text-white">LOCAL-FIRST</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">
              {isEn ? 'Stored on your device' : 'Cihazda saklanır'}
            </div>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">
              {isEn ? 'MOBILE ARCHITECTURE' : 'MOBİL MİMARİ'}
            </div>
            <div className="text-lg font-black text-blue-600">OFFLINE PWA</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">
              {isEn ? 'No internet needed' : 'İnternetsiz erişim'}
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-black dark:border-white">
          <span className="font-mono text-xs font-black uppercase text-zinc-500 mr-1">
            {isEn ? 'FILTER:' : 'FİLTRELE:'}
          </span>
          {[
            { id: 'all', label: isEn ? 'ALL CRITERIA' : 'TÜM KRİTERLER' },
            { id: 'science', label: isEn ? 'SCIENTIFIC METHODOLOGY' : 'BİLİMSEL METODOLOJİ' },
            { id: 'cost', label: isEn ? 'COST & ACCESS' : 'MALİYET & ERİŞİM' },
            { id: 'privacy', label: isEn ? 'PRIVACY & PWA' : 'GİZLİLİK & PWA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase border-2 transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                  : 'bg-white dark:bg-zinc-800 text-black dark:text-white border-black dark:border-white hover:bg-zinc-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Benchmark Matrix Table */}
      <div className="border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b-2 border-black dark:border-white bg-black text-white dark:bg-zinc-950 font-mono text-xs font-black uppercase">
              <th className="p-3.5 w-1/4 border-r border-zinc-700">
                {isEn ? 'CRITERION / FEATURE' : 'KRİTER / ÖZELLİK'}
              </th>
              <th className="p-3.5 w-1/4 bg-red-700 text-white border-r border-red-800">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>{isEn ? 'KUÇU (US)' : 'KUÇU (BİZ)'}</span>
                </div>
              </th>
              <th className="p-3.5 w-1/6 border-r border-zinc-700">DOGO APP</th>
              <th className="p-3.5 w-1/6 border-r border-zinc-700">PUPPR</th>
              <th className="p-3.5 w-1/6">
                {isEn ? 'TRADITIONAL TRAINING' : 'GELENEKSEL EĞİTİM'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-black dark:divide-white font-mono text-xs">
            {filteredData.map((row, idx) => (
              <tr 
                key={idx} 
                className={idx % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50 dark:bg-zinc-950/60'}
              >
                <td className="p-3.5 font-bold text-black dark:text-white border-r-2 border-black dark:border-white">
                  {row.feature}
                </td>
                <td className="p-3.5 bg-red-50/50 dark:bg-red-950/20 border-r-2 border-black dark:border-white">
                  {renderBadge(row.kuchu)}
                </td>
                <td className="p-3.5 border-r border-zinc-300 dark:border-zinc-800">
                  {renderBadge(row.dogo)}
                </td>
                <td className="p-3.5 border-r border-zinc-300 dark:border-zinc-800">
                  {renderBadge(row.puppr)}
                </td>
                <td className="p-3.5">
                  {renderBadge(row.traditional)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Strategic Advantage Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              {isEn ? '1. AVERSIVE-FREE ETHICS & MEDICAL AWARENESS' : '1. ŞİDDETSİZ ETİK VE TIBBİ BİLİNÇ'}
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isEn
              ? 'Prong/shock collars, alpha rolls, or muzzle pinning provoke acute defensive aggression. Kuçu reconditions behaviors at the root using clinical DRI (Differential Reinforcement of Incompatible behavior).'
              : 'Dikenli/şok tasmaları, alfa yuvarlama (alpha roll) veya köpeğin ağzını kapatma gibi yöntemler köpekte korku agresyonunu tetikler. Kuçu, Merck kılavuzundaki DRI (Tepki İkamesi) ile davranışı temelden dönüştürür.'}
          </p>
        </div>

        <div className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              {isEn ? '2. INSTANT CLINICAL TRIAGE ENGINE' : '2. ANINDA KLİNİK TRİYAJ MOTORU'}
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isEn
              ? 'Instead of rote video catalogs, it analyzes symptoms, age, and triggers to provide urgency classification, red flags, and veterinary exclusion recommendations.'
              : 'Rakipler gibi ezbere video izletmek yerine; köpeğin semptomunu, yaşını ve tetikleyicisini analiz ederek aciliyet derecesi, kırmızı bayraklar ve veteriner hekim dışlama önerisi sunar.'}
          </p>
        </div>

        <div className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-2">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-green-600" />
            <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              {isEn ? '3. INDEPENDENT, FREE & PRIVATE' : '3. BAĞIMSIZ, ÜCRETSİZ & GİZLİ'}
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isEn
              ? 'No paywalls. Your data resides directly in your browser (IndexedDB), zero commercial advertisements, and full PWA offline support works seamlessly anywhere.'
              : 'Kullanıcıyı ödeme duvarlarına (paywall) sıkıştırmaz. Verileriniz doğrudan tarayıcınızda (IndexedDB) barınır, reklam içermez ve PWA desteğiyle internet olmadan da her yerde çalışır.'}
          </p>
        </div>

      </div>

    </div>
  );
};

