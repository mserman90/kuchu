import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Minus, 
  ShieldCheck, 
  Zap, 
  BookOpen, 
  HeartHandshake, 
  Lock,
  Award
} from 'lucide-react';

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

  const benchmarkData: BenchmarkRow[] = [
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
            BENCHMARK & KARŞILAŞTIRMA
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
            SEKTÖREL PERFORMANS VE BİLİMSEL FARKLAR
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
          KUÇU VS. KÜRESEL UYGULAMALAR VE GELENEKSEL EĞİTİM
        </h2>

        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
          Piyasadaki uygulamaların çoğu köpekleri <em>"numara yapan birer oyuncak"</em> gibi ele alırken; Kuçu, <strong>Merck Veterinary Manual Klinik Davranış Tıbbı</strong> standartlarını ve <strong>LIMA (En Az İnvaziv, Etkili Yaklaşım)</strong> prensiplerini tabana yayar. İşte tarafsız sektörel kıyaslamamız:
        </p>

        {/* Highlight Scorecards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">FİYAT POLİTİKASI</div>
            <div className="text-lg font-black text-green-600">%100 ÜCRETSİZ</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">Gizli abonelik yok</div>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">KLİNİK ETOLOJİ</div>
            <div className="text-lg font-black text-red-600">MERCK 3M</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">Tıbbi kural dışlama</div>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">GİZLİLİK & VERİ</div>
            <div className="text-lg font-black text-black dark:text-white">LOCAL-FIRST</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">Cihazda saklanır</div>
          </div>
          <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950">
            <div className="font-mono text-[10px] text-zinc-500 uppercase font-black">MOBİL MİMARİ</div>
            <div className="text-lg font-black text-blue-600">OFFLINE PWA</div>
            <div className="text-[10px] text-zinc-600 dark:text-zinc-400">İnternetsiz erişim</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-black dark:border-white">
          <span className="font-mono text-xs font-black uppercase text-zinc-500 mr-1">FİLTRELE:</span>
          {[
            { id: 'all', label: 'TÜM KRİTERLER' },
            { id: 'science', label: 'BİLİMSEL METODOLOJİ' },
            { id: 'cost', label: 'MALİYET & ERİŞİM' },
            { id: 'privacy', label: 'GİZLİLİK & PWA' }
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
              <th className="p-3.5 w-1/4 border-r border-zinc-700">KRİTER / ÖZELLİK</th>
              <th className="p-3.5 w-1/4 bg-red-700 text-white border-r border-red-800">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>KUÇU (BİZ)</span>
                </div>
              </th>
              <th className="p-3.5 w-1/6 border-r border-zinc-700">DOGO APP</th>
              <th className="p-3.5 w-1/6 border-r border-zinc-700">PUPPR</th>
              <th className="p-3.5 w-1/6">GELENEKSEL EĞİTİM</th>
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
              1. ŞİDDETSİZ ETİK VE TIBBİ BİLİNÇ
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Dikenli/şok tasmaları, alfa yuvarlama (alpha roll) veya köpeğin ağzını kapatma gibi yöntemler köpekte korku agresyonunu tetikler. Kuçu, Merck kılavuzundaki DRI (Tepki İkamesi) ile davranışı temelden dönüştürür.
          </p>
        </div>

        <div className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              2. ANINDA KLİNİK TRİYAJ MOTORU
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Rakipler gibi ezbere video izletmek yerine; köpeğin semptomunu, yaşını ve tetikleyicisini analiz ederek aciliyet derecesi, kırmızı bayraklar ve veteriner hekim dışlama önerisi sunar.
          </p>
        </div>

        <div className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-2">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-green-600" />
            <h4 className="font-mono text-xs font-black uppercase text-black dark:text-white">
              3. BAĞIMSIZ, ÜCRETSİZ & GİZLİ
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Kullanıcıyı ödeme duvarlarına (paywall) sıkıştırmaz. Verileriniz doğrudan tarayıcınızda (IndexedDB) barınır, reklam içermez ve PWA desteğiyle internet olmadan da her yerde çalışır.
          </p>
        </div>

      </div>

    </div>
  );
};
