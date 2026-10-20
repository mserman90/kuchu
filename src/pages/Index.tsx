import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DisclaimerBar } from '@/components/common/Ui';
import { 
  Compass, 
  HelpCircle, 
  CalendarCheck, 
  MessageSquareHeart, 
  ArrowRight, 
  Activity,
  Brain,
  Zap
} from 'lucide-react';

export const Index: React.FC = () => {
  const [selectedTail, setSelectedTail] = useState<'right' | 'left' | 'tucked' | 'stiff'>('right');

  const previews = {
    right: {
      title: 'SAĞA DOĞRU KUYRUK SALINIMI',
      mood: 'POZİTİF YAKLAŞIM / SEVGİ',
      risk: 'GÜVENLİ',
      riskColor: 'bg-green-600 text-white',
      hemisphere: 'SOL BEYİN YARIKÜRESİ AKTİF',
      desc: 'Vallortigara bulgusu: Köpek ortamı veya yaklaşan bireyi dost canlısı ve güvenli olarak algılıyor.',
    },
    left: {
      title: 'SOLA DOĞRU KUYRUK SALINIMI',
      mood: 'ÇEKİNGENLİK / TEHDİT ALGISI',
      risk: 'TEMKİNLİ',
      riskColor: 'bg-yellow-400 text-black',
      hemisphere: 'SAĞ BEYİN YARIKÜRESİ AKTİF',
      desc: 'Vallortigara bulgusu: Tedirgin edici veya yabancı bir unsur algılandı; köpeğe hemen güvenli mesafe tanınmalıdır.',
    },
    tucked: {
      title: 'BACAK ARASINA SIKIŞMIŞ KUYRUK',
      mood: 'YOĞUN KORKU / YATIŞTIRMA',
      risk: 'YÜKSEK KAYGI',
      riskColor: 'bg-red-600 text-white',
      hemisphere: 'SAVUNMA REFLEKSİ',
      desc: 'Köpek kendini küçültüp görünmez kılmak istiyor. Üzerine gidilirse savunma amaçlı ısırma tetiklenebilir.',
    },
    stiff: {
      title: 'DİK, SERT VE TİTREŞİMLİ KUYRUK',
      mood: 'YÜKSEK UYARILMA / ALARM',
      risk: 'YÜKSEK RİSK',
      riskColor: 'bg-red-600 text-white',
      hemisphere: 'TEHDİT / MEYDAN OKUMA',
      desc: 'En kritik yanılgı: "Kuyruk sallıyor, sevebilirim". Dik ve kaskatı kuyruk bir mesafe ve sınır uyarısıdır.',
    }
  };

  const currentPreview = previews[selectedTail];

  return (
    <div className="space-y-16 md:space-y-24 py-8 md:py-12">
      
      {/* Hero Section: Asymmetric 12-column grid (7/5 ratio) */}
      <section className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Giant Typographic Poster */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black px-2.5 py-1 border-2 border-black dark:border-white">
                ETOLOJİK DAVRANIŞ SİSTEMİ
              </span>
              <span className="font-mono text-xs uppercase tracking-widest bg-red-600 text-white px-2.5 py-1 border-2 border-black dark:border-white">
                BİLİMSEL ETİK PROTOKOL
              </span>
            </div>

            {/* Headline: 900 weight, -0.05em tracking, uppercase poster style */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tightest text-black dark:text-white leading-[0.98]">
                KÖPEĞİNİZİN <br />
                RUH HALİNİ <br />
                <span className="inline-block bg-red-600 text-white px-3 py-0.5 mt-1 border-2 border-black dark:border-white shadow-brutal">
                  BİLİMSEL
                </span> <br />
                OLARAK OKUYUN.
              </h1>
              <p className="text-base sm:text-lg font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl pt-2">
                Kuyruk asimetrisi, sakinleşme sinyalleri, balina gözü ve kas gerginliği. Modası geçmiş ceza yöntemlerini çöpe atın; deterministik etoloji kurallarıyla köpeğinizin gerçek duygu durumunu ve ihtiyaçlarını anlayın.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/hizli-cozum"
                className="h-[44px] sm:h-[40px] px-6 bg-black text-white dark:bg-white dark:text-black font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>HIZLI ÇÖZÜM SİHİRBAZI</span>
                <span className="font-mono text-[9px] bg-red-600 text-white px-1.5 py-0.5">YENİ</span>
              </Link>

              <Link
                to="/analiz"
                className="h-[44px] sm:h-[40px] px-6 bg-red-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4 stroke-[2.5]" />
                <span>DAVRANIŞ ANALİZİ</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                to="/sorunlar"
                className="h-[44px] sm:h-[40px] px-6 bg-white dark:bg-zinc-900 text-black dark:text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal dark:shadow-brutal-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all inline-flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4 stroke-[2.5] text-red-600" />
                <span>SORUN ÇÖZÜMÜ</span>
              </Link>
            </div>

            {/* Scientific Foundations / Trust Points */}
            <div className="border-t-2 border-black dark:border-white pt-6 space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                BİLİMSEL DAYANAKLAR & KANITLAR:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm">
                  <div className="font-mono text-[11px] font-bold uppercase text-red-600">01 / ETOLOJİ</div>
                  <div className="text-xs font-black uppercase mt-1">Turid Rugaas</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight mt-0.5">30+ sakinleşme sinyali</div>
                </div>
                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm">
                  <div className="font-mono text-[11px] font-bold uppercase text-red-600">02 / NÖROLOJİ</div>
                  <div className="text-xs font-black uppercase mt-1">Vallortigara</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight mt-0.5">Kuyruk lateralitesi</div>
                </div>
                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal-sm">
                  <div className="font-mono text-[11px] font-bold uppercase text-red-600">03 / PSİKOLOJİ</div>
                  <div className="text-xs font-black uppercase mt-1">B.F. Skinner</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight mt-0.5">Pozitif pekiştirme R+</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): High-Contrast B&W Dog Portrait + Quick Tool */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 4:3 High-contrast monochrome dog portrait */}
            <div className="border-2 border-black dark:border-white aspect-[4/3] w-full overflow-hidden shadow-brutal-xl dark:shadow-brutal-white-xl bg-black relative">
              <img 
                src="/assets/hero-dog.jpg" 
                alt="Kuchu Etoloji ve Köpek Psikolojisi" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-95" 
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest border border-white">
                ETOLOJİK GÖZLEM ■ 01
              </div>
            </div>

            {/* Quick Analysis Widget with Hard Borders */}
            <div className="border-2 border-black dark:border-white p-5 bg-white dark:bg-zinc-900 shadow-brutal space-y-4">
              
              <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-red-600 stroke-[2.5]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                    HIZLI KUYRUK GÖSTERGESİ
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-0.5">
                  LATERALİTE TESTİ
                </span>
              </div>

              {/* 4 Quick Selector Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'right' as const, label: 'SAĞA SALINIM', sub: 'Pozitif / Güvenli' },
                  { id: 'left' as const, label: 'SOLA SALINIM', sub: 'Kaygı / Çekinme' },
                  { id: 'tucked' as const, label: 'BACAK ARASINDA', sub: 'Yoğun Korku' },
                  { id: 'stiff' as const, label: 'DİK & TİTREŞİMLİ', sub: 'Yüksek Gerilim' },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setSelectedTail(btn.id)}
                    className={`p-2.5 text-left border-2 transition-all cursor-pointer ${
                      selectedTail === btn.id
                        ? 'border-black bg-red-600 text-white shadow-brutal-sm dark:border-white'
                        : 'border-black dark:border-white bg-white dark:bg-zinc-900 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <div className="font-mono text-[11px] font-black uppercase leading-tight">{btn.label}</div>
                    <div className="text-[10px] font-medium opacity-80 mt-0.5">{btn.sub}</div>
                  </button>
                ))}
              </div>

              {/* Dynamic Live Result */}
              <div className="p-3 border-2 border-black dark:border-white bg-zinc-50 dark:bg-zinc-950 space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-black dark:border-white pb-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:text-white">
                    {currentPreview.title}
                  </span>
                  <span className={`font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black dark:border-white ${currentPreview.riskColor}`}>
                    {currentPreview.risk}
                  </span>
                </div>
                <div className="text-xs font-black uppercase text-red-600 dark:text-red-400">
                  {currentPreview.mood}
                </div>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300 leading-snug">
                  {currentPreview.desc}
                </p>
              </div>

              {/* Link to Full Analysis */}
              <Link
                to="/analiz"
                className="w-full h-[38px] bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider border-2 border-black dark:border-white flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <span>6 PARAMETRELİ TAM ANALİZİ BAŞLAT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Mandatory Disclaimer on Home */}
      <div className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <DisclaimerBar variant="compact" />
      </div>

      {/* 4 Core Pillars Grid */}
      <section className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-black dark:border-white pb-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600">
              SİSTEM MİMARİSİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
              KUCHU DÖRT ANA MODÜLÜ
            </h2>
          </div>
          <div className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400">
            DETERMİNİSTİK ANALİZ + R+ EĞİTİM PLANI
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Analiz */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-red-600 text-white border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 border border-black">
                  /analiz
                </span>
              </div>
              <h3 className="text-xl font-black uppercase text-black dark:text-white">
                KÖPEK DAVRANIŞ ANALİZİ
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Kuyruk, kulak, göz, ağız, vücut duruşu ve enerjiyi ağırlıklı algoritmayla hesaplar. 8 ruh hali ve 3 seviyeli risk göstergesi (Yeşil / Sarı / Kırmızı) üretir.
              </p>
            </div>
            <Link
              to="/analiz"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>ANALİZ MOTORUNU AÇ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Sorunlar */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-yellow-400 text-black border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 border border-black">
                  /sorunlar
                </span>
              </div>
              <h3 className="text-xl font-black uppercase text-black dark:text-white">
                DAVRANIŞ SORUNU ÇÖZÜM MERKEZİ
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Ayrılık anksiyetesi, tasma çekme, aşırı havlama, ısırma, tuvalet ve kaynak koruma için adım adım cezasız karşıt koşullandırma (counter-conditioning) protokolleri.
              </p>
            </div>
            <Link
              to="/sorunlar"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>SORUNLARI İNCELE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Eğitim Planları */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <CalendarCheck className="w-5 h-5 text-red-500" />
                </div>
                <span className="font-mono text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 border border-black">
                  /egitim-planlari
                </span>
              </div>
              <h3 className="text-xl font-black uppercase text-black dark:text-white">
                KİŞİSELLEŞTİRİLMİŞ EĞİTİM PLANI
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Köpeğinizin ırkı, yaşı ve enerjisine göre 7 / 14 / 30 günlük gün gün pozitif egzersiz programı, görev onay kutuları ve anlık yüzde ilerleme takibi.
              </p>
            </div>
            <Link
              to="/egitim-planlari"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>PLAN OLUŞTUR & TAKİP ET</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4: PatiAsistan */}
          <div className="p-6 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-red-600 text-white border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <MessageSquareHeart className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 border border-black">
                  /patiasistan
                </span>
              </div>
              <h3 className="text-xl font-black uppercase text-black dark:text-white">
                PATİASİSTAN AI SOHBET
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Bilimsel etoloji ve pozitif pekiştirme ilkeleriyle yanıt veren akışkan (streaming) Türkçe yapay zeka danışmanı.
              </p>
            </div>
            <Link
              to="/patiasistan"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>PATİASİSTAN İLE KONUŞ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Ethological Methodology Explanation Banner */}
      <section className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-black dark:border-white p-6 sm:p-8 bg-zinc-100 dark:bg-zinc-900 shadow-brutal space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-black dark:border-white pb-4">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-1.5">
                <Brain className="w-4 h-4" />
                BİLİMSEL YÖNTEM PRENSİPLERİ
              </span>
              <h3 className="text-2xl font-black uppercase text-black dark:text-white mt-1">
                KUCHU NASIL ÇALIŞIR?
              </h3>
            </div>
            <span className="font-mono text-xs font-black uppercase bg-black text-white dark:bg-white dark:text-black px-3 py-1">
              KURAL TABANLI MOTOR (RULE-BASED)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="font-mono text-xs font-black uppercase text-red-600">01 / DETERMINISTİK HESAPLAMA</div>
              <h4 className="text-base font-black uppercase">AĞIRLIKLI 5 FAKTÖR</h4>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Analiz motoru önyargısızdır. Kuyruk (%30), Duruş (%25), Göz ve Ağız (%20), Kulaklar (%15), Enerji (%10) puanlanarak net risk düzeyi tespit edilir.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs font-black uppercase text-red-600">02 / SIFIR CEZA, SIFIR ŞİDDET</div>
              <h4 className="text-base font-black uppercase">POZİTİF PEKİŞTİRME (R+)</h4>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Boğma tasma, elektrikli şok veya baskınlık (alfa miti) yöntemleri bilimsel olarak reddedilir. İstenen davranış ödülle pekiştirilir.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs font-black uppercase text-red-600">03 / GÜVENLİK VE ETİK</div>
              <h4 className="text-base font-black uppercase">SORUMLULUK BEYANI</h4>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Sistem tıbbi veya veteriner teşhisi yapmaz. Yüksek risk (kırmızı) tespit edildiğinde kullanıcıyı hemen uzman davranış terapistine yönlendirir.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
