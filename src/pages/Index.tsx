import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DisclaimerBar } from '@/components/common/Ui';
import { BenchmarkComparison } from '@/components/common/BenchmarkComparison';
import { 
  Compass, 
  HelpCircle, 
  CalendarCheck, 
  MessageSquareHeart, 
  ArrowRight, 
  Activity,
  Brain,
  Zap,
  Camera,
  Check,
  Sparkles,
  ShieldCheck,
  Flame,
  ShieldAlert,
  Award,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import heroDogImage from '@/assets/hero-dog.jpg';

export const Index: React.FC = () => {
  const [heroMood, setHeroMood] = useState<'relaxed' | 'stress' | 'play' | 'alert'>('relaxed');

  const heroShowcaseData = {
    relaxed: {
      label: '🟢 SAKİN & GÜVENDE',
      score: 'RİSK: %8 (GÜVENLİ)',
      scoreBg: 'bg-green-600 text-white',
      ear: { text: 'KULAK: Gevşek & Doğal', status: 'positive', top: '24%', left: '36%' },
      eye: { text: 'GÖZ: Yumuşak Badem Bakış', status: 'positive', top: '34%', left: '48%' },
      mouth: { text: 'AĞIZ: Açık & Rahat Nefes', status: 'positive', top: '56%', left: '50%' },
      summary: 'Köpeğiniz tamamen konfor alanında; öğrenmeye ve pozitif pekiştirme eğitimine en açık zihinsel durum.'
    },
    stress: {
      label: '🟡 KAYGILI (BALİNA GÖZÜ)',
      score: 'RİSK: %78 (YÜKSEK GERİLİM)',
      scoreBg: 'bg-yellow-400 text-black',
      ear: { text: 'KULAK: Geriye Çekilmiş', status: 'warning', top: '22%', left: '33%' },
      eye: { text: 'GÖZ: Balina Gözü (Whale Eye)', status: 'alert', top: '34%', left: '48%' },
      mouth: { text: 'AĞIZ: Gergin Kapalı Dudak', status: 'warning', top: '56%', left: '50%' },
      summary: 'Köpek baskı altında ve huzursuz. Üzerine gidilirse savunma ısırığı tetiklenebilir; derhal mesafe tanıyın.'
    },
    play: {
      label: '🔵 OYUN ÇAĞRISI (PLAY BOW)',
      score: 'RİSK: %15 (POZİTİF ENERJİ)',
      scoreBg: 'bg-blue-600 text-white',
      ear: { text: 'KULAK: Dik & İleri Odaklı', status: 'positive', top: '20%', left: '38%' },
      eye: { text: 'GÖZ: Parlak & Neşeli', status: 'positive', top: '33%', left: '48%' },
      mouth: { text: 'AĞIZ: Gülümseyen Çene', status: 'positive', top: '54%', left: '50%' },
      summary: 'Dostça bir oyun daveti! Ön patiler yerde, kuyruk sallanıyor; enerjiyi ödüllü oyunla deşarj edin.'
    },
    alert: {
      label: '🔴 DONMA (STIFF FREEZE)',
      score: 'RİSK: %92 (KRİTİK ALARM)',
      scoreBg: 'bg-red-600 text-white animate-pulse',
      ear: { text: 'KULAK: Kilitlenmiş Dik', status: 'alert', top: '18%', left: '38%' },
      eye: { text: 'GÖZ: Sert Tehdit Bakışı', status: 'alert', top: '34%', left: '48%' },
      mouth: { text: 'AĞIZ: Kaskatı Hareketsiz', status: 'alert', top: '55%', left: '50%' },
      summary: 'Kritik uyarı! Köpek eşiği aşmış durumda (Over-threshold). Göz temasını kesin ve yan adımlarla uzaklaşın.'
    }
  };

  const currentShowcase = heroShowcaseData[heroMood];

  return (
    <div className="space-y-16 md:space-y-24 py-8 md:py-12">
      
      {/* Hero Section: High-Converting Product Showcase */}
      <section className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): High-Impact Value Pitch & Conversions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 border-2 border-black dark:border-white px-3 py-1 bg-zinc-100 dark:bg-zinc-900 font-mono text-xs font-black uppercase shadow-brutal-sm">
              <span className="w-2 h-2 bg-red-600 animate-ping inline-block" />
              <span>TÜRKİYE'NİN İLK KANITA DAYALI KÖPEK DAVRANIŞ PLATFORMU</span>
            </div>

            {/* Giant High-Contrast Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tightest text-black dark:text-white leading-[0.96]">
                KÖPEĞİNİZİ ANLAYIN. <br />
                SORUNLARI <br />
                <span className="inline-block bg-red-600 text-white px-3 py-0.5 mt-1 border-2 border-black dark:border-white shadow-brutal">
                  CEZASIZ
                </span> ÇÖZÜN.
              </h1>
              
              <p className="text-base sm:text-lg font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl">
                Aşırı havlama, tasma çekiştirme, yalnız kalamama veya agresyon... Köpeğiniz size bir şey anlatmaya çalışıyor. Eski ceza mitlerini unutun; <strong>kanıta dayalı bilimsel protokoller</strong> ve <strong>Yapay Zeka</strong> ile dostunuzun gerçek ruh halini ve ihtiyaçlarını saniyeler içinde keşfedin.
              </p>
            </div>

            {/* Primary & Secondary Action Buttons (High Conversion) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/hizli-cozum"
                className="h-[52px] sm:h-[48px] px-8 bg-red-600 text-white font-mono text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Zap className="w-5 h-5 fill-yellow-300 text-yellow-300 group-hover:scale-110 transition-transform" />
                <span>1 DAKİKADA HIZLI ÇÖZÜMÜ BAŞLAT</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>

              <Link
                to="/analiz"
                className="h-[52px] sm:h-[48px] px-6 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Camera className="w-4 h-4 text-red-600" />
                <span>FOTOĞRAFLA VISION AI TARA</span>
              </Link>
            </div>

            {/* Friction Killers (Friction reduction badges) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 text-black dark:text-white">
                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                %100 ÜCRETSİZ & AÇIK BİLİM
              </span>
              <span className="flex items-center gap-1.5 text-black dark:text-white">
                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                HESAP / KREDİ KARTI ŞARTI YOK
              </span>
              <span className="flex items-center gap-1.5 text-black dark:text-white">
                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                ÇEVRİMDIŞI ÇALIŞIR (PWA)
              </span>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Live Canine Vision AI Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="border-4 border-black dark:border-white aspect-4/3 w-full overflow-hidden shadow-brutal-xl dark:shadow-brutal-white-xl bg-zinc-950 relative group">
              <img 
                src={heroDogImage} 
                alt="Kuçu Etoloji ve Köpek Psikolojisi" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-102 transition-transform duration-500" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80';
                }}
              />

              {/* HUD Header Bar */}
              <div className="absolute top-2 left-2 bg-black text-white px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-widest border border-white flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                <span>CANINE VISION AI // CANLI GÖZLEM</span>
              </div>

              {/* Dynamic Interactive HUD Landmarks */}
              <div 
                style={{ top: currentShowcase.ear.top, left: currentShowcase.ear.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300"
              >
                <div className={`px-2 py-0.5 border-2 font-mono text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-brutal-sm ${
                  currentShowcase.ear.status === 'alert' ? 'bg-red-600 text-white' : currentShowcase.ear.status === 'warning' ? 'bg-yellow-400 text-black' : 'bg-green-600 text-white'
                }`}>
                  <Eye className="w-3 h-3" />
                  <span>{currentShowcase.ear.text}</span>
                </div>
              </div>

              <div 
                style={{ top: currentShowcase.eye.top, left: currentShowcase.eye.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300"
              >
                <div className={`px-2 py-0.5 border-2 font-mono text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-brutal-sm ${
                  currentShowcase.eye.status === 'alert' ? 'bg-red-600 text-white animate-pulse' : currentShowcase.eye.status === 'warning' ? 'bg-yellow-400 text-black' : 'bg-green-600 text-white'
                }`}>
                  <Eye className="w-3 h-3" />
                  <span>{currentShowcase.eye.text}</span>
                </div>
              </div>

              <div 
                style={{ top: currentShowcase.mouth.top, left: currentShowcase.mouth.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300"
              >
                <div className={`px-2 py-0.5 border-2 font-mono text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-brutal-sm ${
                  currentShowcase.mouth.status === 'alert' ? 'bg-red-600 text-white' : currentShowcase.mouth.status === 'warning' ? 'bg-yellow-400 text-black' : 'bg-green-600 text-white'
                }`}>
                  <Eye className="w-3 h-3" />
                  <span>{currentShowcase.mouth.text}</span>
                </div>
              </div>

              {/* Bottom Telemetry Overlay */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/90 text-white p-2.5 border border-white font-mono text-xs flex items-center justify-between">
                <span className="font-bold truncate text-[11px]">{currentShowcase.label}</span>
                <span className={`px-2 py-0.5 font-black uppercase text-[10px] border border-white ${currentShowcase.scoreBg}`}>
                  {currentShowcase.score}
                </span>
              </div>
            </div>

            {/* Quick Interactive Mood Switcher Buttons */}
            <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-black uppercase text-zinc-500">
                  DOKUNUN & ANINDA GÖRSELİ DEĞİŞTİRİN:
                </span>
                <span className="font-mono text-[10px] text-red-600 font-bold uppercase">
                  İNTERAKTİF TEST
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 font-mono text-[11px] font-black uppercase">
                {[
                  { id: 'relaxed' as const, label: '🟢 SAKİN' },
                  { id: 'stress' as const, label: '🟡 STRESLİ' },
                  { id: 'play' as const, label: '🔵 OYUN' },
                  { id: 'alert' as const, label: '🔴 DONMA' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHeroMood(item.id)}
                    className={`py-1.5 px-2 text-center border-2 transition-all cursor-pointer ${
                      heroMood === item.id
                        ? 'bg-red-600 text-white border-black dark:border-white shadow-brutal-sm'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-black dark:border-white hover:bg-zinc-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <p className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 leading-tight pt-1">
                {currentShowcase.summary}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4 Feature Advertisement Cards (Reklam ve Değer Önerisi Şeridi) */}
      <section className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Ad Card 1: Hızlı Çözüm */}
          <Link
            to="/hizli-cozum"
            className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-red-600 text-white border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <Zap className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5">
                  1 DAKİKA
                </span>
              </div>
              <h3 className="text-base font-black uppercase text-black dark:text-white group-hover:text-red-600 transition-colors">
                KLİNİK TRİYAJ MOTORU
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Sorunun adını koyamıyor musunuz? 5 soruyla köpeğinizin aciliyet derecesini ve bilimsel eylem planını anında belirleyin.
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>TESTİ HEMEN DOLDUR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Ad Card 2: Vision AI */}
          <Link
            to="/analiz"
            className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <Camera className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase bg-red-600 text-white px-1.5 py-0.5">
                  AI VISION
                </span>
              </div>
              <h3 className="text-base font-black uppercase text-black dark:text-white group-hover:text-red-600 transition-colors">
                FOTOĞRAFLA VÜCUT DİLİ
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Köpeğinizin fotoğrafını yükleyin; postür, kulak açısı ve 'Balina Gözü' stres sinyallerini yapay zeka ile anında haritalandırın.
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>FOTOĞRAFI TARA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Ad Card 3: 14 Davranış Sorunu */}
          <Link
            to="/sorunlar"
            className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-yellow-400 text-black border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5">
                  14 PROTOKOL
                </span>
              </div>
              <h3 className="text-base font-black uppercase text-black dark:text-white group-hover:text-red-600 transition-colors">
                ÇİFTLİK VE EV SORUNLARI
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Tavuk/koyun avlamaktan koprofajiye, yalnızlık krizinden tırnak kesim fobisine kadar cezasız bilimsel çözümler.
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>SORUNLARI İNCELE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Ad Card 4: Zehirli Gıda Rehberi */}
          <Link
            to="/zehirli-gidalar"
            className="p-5 border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-orange-600 text-white border-2 border-black dark:border-white flex items-center justify-center font-black">
                  <ShieldAlert className="w-5 h-5 text-yellow-300" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase bg-red-600 text-white px-1.5 py-0.5">
                  ACİL TOKSİN
                </span>
              </div>
              <h3 className="text-base font-black uppercase text-black dark:text-white group-hover:text-red-600 transition-colors">
                ZEHİRLİ GIDA DEDEKTÖRÜ
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Köpeğiniz çikolata veya yabancı bir gıda mı yedi? Teobromin dozu ve acil ilk yardım adımlarını saniyeler içinde hesaplayın.
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>HESAPLAYICIYI AÇ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

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

      {/* Manifesto & Platform Presentation Section */}
      <section className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-black dark:border-white p-6 sm:p-10 bg-black text-white dark:bg-zinc-950 dark:text-white shadow-brutal-xl space-y-8">
          <div className="space-y-2 border-b-2 border-zinc-800 pb-4">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-red-500">
              VİZYONUMUZ VE MANİFESTOMUZ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              NEDEN KUCHU? CEZA DEĞİL, BİLİMSEL İLETİŞİM.
            </h2>
            <p className="text-xs sm:text-sm font-medium text-zinc-400 max-w-3xl leading-relaxed">
              Yıllardır televizyonlarda ve sosyal medyada yayılan "alfa olun", "köpeğe hükmedin", "sırt üstü devirin" gibi 
              eski moda ceza mitleri, binlerce köpeğin travmatize olmasına ve savunma ısırıklarının patlamasına yol açtı. 
              Kuchu; modern klinik etoloji ve veteriner davranış tıbbını herkes için anlaşılır, uygulanabilir ve pratik araçlara dönüştürmek için geliştirildi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">01 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">İnatçılık Değil, İletişim</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Köpekler asla "inat olsun" diye davranmaz. Her istenmeyen tepkinin ardında ya korku, ya karşılanmamış enerji ya da fiziksel acı yatar.
              </p>
            </div>

            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">02 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">3M Bütüncül Yaklaşım</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Çevresel Yönetim (Management) + Pozitif Modifikasyon (Modification) + Medikal Destek (Medication). Başarı bu 3 ayağın dengesiyle gelir.
              </p>
            </div>

            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">03 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">Önce Fiziksel Sağlık</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ani reaktivite ve hırçınlaşma vakalarının çoğunda osteoartrit veya diş ağrısı yatar. Tıbbi ağrı dışlanmadan eğitim yapılamaz.
              </p>
            </div>

            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">04 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">Güven Odaklı Ebeveynlik</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Köpeğiniz sizi bir rakip ya da "alfa kurt" olarak görmez; hayatını size emanet eden güvenilir bir rehber ebeveyn arar.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-zinc-800">
            <div className="font-mono text-xs font-bold text-zinc-400 uppercase">
              Köpeğinizin iç dünyasını anlamak için hemen bir araç seçin:
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/hizli-cozum"
                className="px-5 py-2.5 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-white shadow-brutal-white-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                ⚡ HIZLI ÇÖZÜM TESTİ
              </Link>
              <Link
                to="/kutuphane"
                className="px-5 py-2.5 bg-white text-black font-mono text-xs font-black uppercase border-2 border-white shadow-brutal-white-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                📖 BİLGİ KÜTÜPHANESİ
              </Link>
              <Link
                to="/zehirli-gidalar"
                className="px-5 py-2.5 bg-yellow-400 text-black font-mono text-xs font-black uppercase border-2 border-white shadow-brutal-white-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                ☣ ZEHİRLİ GIDA REHBERİ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sektörel Benchmark ve Karşılaştırma Bölümü */}
      <section className="max-w-swiss mx-auto px-4 sm:px-6 lg:px-8">
        <BenchmarkComparison />
      </section>

    </div>
  );
};
