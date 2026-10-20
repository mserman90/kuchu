import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { lang, t } = useLanguage();
  const [heroMood, setHeroMood] = useState<'relaxed' | 'stress' | 'play' | 'alert'>('relaxed');

  const heroShowcaseData = {
    relaxed: {
      label: lang === 'tr' ? '🟢 SAKİN & GÜVENDE' : '🟢 CALM & SAFE',
      score: lang === 'tr' ? 'RİSK: %8 (GÜVENLİ)' : 'RISK: 8% (SAFE)',
      scoreBg: 'bg-green-600 text-white',
      ear: { 
        text: lang === 'tr' ? 'KULAK: Gevşek & Doğal' : 'EAR: Relaxed & Natural', 
        status: 'positive', 
        top: '24%', 
        left: '36%' 
      },
      eye: { 
        text: lang === 'tr' ? 'GÖZ: Yumuşak Badem Bakış' : 'EYE: Soft Almond Gaze', 
        status: 'positive', 
        top: '34%', 
        left: '48%' 
      },
      mouth: { 
        text: lang === 'tr' ? 'AĞIZ: Açık & Rahat Nefes' : 'MOUTH: Open & Easy Pant', 
        status: 'positive', 
        top: '56%', 
        left: '50%' 
      },
      summary: lang === 'tr' 
        ? 'Köpeğiniz tamamen konfor alanında; öğrenmeye ve pozitif pekiştirme eğitimine en açık zihinsel durum.'
        : 'Your dog is fully in their comfort zone; the most receptive mental state for learning and positive reinforcement.'
    },
    stress: {
      label: lang === 'tr' ? '🟡 KAYGILI (BALİNA GÖZÜ)' : '🟡 ANXIOUS (WHALE EYE)',
      score: lang === 'tr' ? 'RİSK: %78 (YÜKSEK GERİLİM)' : 'RISK: 78% (HIGH TENSION)',
      scoreBg: 'bg-yellow-400 text-black',
      ear: { 
        text: lang === 'tr' ? 'KULAK: Geriye Çekilmiş' : 'EAR: Pinned Backwards', 
        status: 'warning', 
        top: '22%', 
        left: '33%' 
      },
      eye: { 
        text: lang === 'tr' ? 'GÖZ: Balina Gözü (Whale Eye)' : 'EYE: Whale Eye (Sclera Visible)', 
        status: 'alert', 
        top: '34%', 
        left: '48%' 
      },
      mouth: { 
        text: lang === 'tr' ? 'AĞIZ: Gergin Kapalı Dudak' : 'MOUTH: Tense Closed Lips', 
        status: 'warning', 
        top: '56%', 
        left: '50%' 
      },
      summary: lang === 'tr'
        ? 'Köpek baskı altında ve huzursuz. Üzerine gidilirse savunma ısırığı tetiklenebilir; derhal mesafe tanıyın.'
        : 'Dog is uneasy and stressed. Pressuring may provoke a defensive snap; increase distance immediately.'
    },
    play: {
      label: lang === 'tr' ? '🔵 OYUN ÇAĞRISI (PLAY BOW)' : '🔵 PLAY INVITATION (PLAY BOW)',
      score: lang === 'tr' ? 'RİSK: %15 (POZİTİF ENERJİ)' : 'RISK: 15% (POSITIVE DRIVE)',
      scoreBg: 'bg-blue-600 text-white',
      ear: { 
        text: lang === 'tr' ? 'KULAK: Dik & İleri Odaklı' : 'EAR: Pricked & Forward', 
        status: 'positive', 
        top: '20%', 
        left: '38%' 
      },
      eye: { 
        text: lang === 'tr' ? 'GÖZ: Parlak & Neşeli' : 'EYE: Bright & Playful', 
        status: 'positive', 
        top: '33%', 
        left: '48%' 
      },
      mouth: { 
        text: lang === 'tr' ? 'AĞIZ: Gülümseyen Çene' : 'MOUTH: Relaxed Smile Jaw', 
        status: 'positive', 
        top: '54%', 
        left: '50%' 
      },
      summary: lang === 'tr'
        ? 'Dostça bir oyun daveti! Ön patiler yerde, kuyruk sallanıyor; enerjiyi ödüllü oyunla deşarj edin.'
        : 'Friendly play invitation! Forelegs down, tail wagging; channel energy with rewarding interactive play.'
    },
    alert: {
      label: lang === 'tr' ? '🔴 DONMA (STIFF FREEZE)' : '🔴 FREEZE (STIFF POSTURE)',
      score: lang === 'tr' ? 'RİSK: %92 (KRİTİK ALARM)' : 'RISK: 92% (CRITICAL ALERT)',
      scoreBg: 'bg-red-600 text-white animate-pulse',
      ear: { 
        text: lang === 'tr' ? 'KULAK: Kilitlenmiş Dik' : 'EAR: Locked Rigid', 
        status: 'alert', 
        top: '18%', 
        left: '38%' 
      },
      eye: { 
        text: lang === 'tr' ? 'GÖZ: Sert Tehdit Bakışı' : 'EYE: Hard Threat Stare', 
        status: 'alert', 
        top: '34%', 
        left: '48%' 
      },
      mouth: { 
        text: lang === 'tr' ? 'AĞIZ: Kaskatı Hareketsiz' : 'MOUTH: Clenched Motionless', 
        status: 'alert', 
        top: '55%', 
        left: '50%' 
      },
      summary: lang === 'tr'
        ? 'Kritik uyarı! Köpek eşiği aşmış durumda (Over-threshold). Göz temasını kesin ve yan adımlarla uzaklaşın.'
        : 'Critical warning! Dog is over threshold. Break direct eye contact and step away sideways calmly.'
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
              <span>{t('hero.eyebrow')}</span>
            </div>

            {/* Giant High-Contrast Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tightest text-black dark:text-white leading-[0.96]">
                {t('hero.headline1')} <br />
                {t('hero.headline2')} <br />
                <span className="inline-block bg-red-600 text-white px-3 py-0.5 mt-1 border-2 border-black dark:border-white shadow-brutal">
                  {t('hero.headline3')}
                </span> {t('hero.headline4')}
              </h1>
              
              <p 
                className="text-base sm:text-lg font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl"
                dangerouslySetInnerHTML={{ __html: t('hero.sub') }}
              />
            </div>

            {/* Primary & Secondary Action Buttons (High Conversion) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/hizli-cozum"
                className="h-[52px] sm:h-[48px] px-8 bg-red-600 text-white font-mono text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutal-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Zap className="w-5 h-5 fill-yellow-300 text-yellow-300 group-hover:scale-110 transition-transform" />
                <span>{t('hero.cta.primary')}</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>

              <Link
                to="/analiz"
                className="h-[52px] sm:h-[48px] px-6 bg-white dark:bg-zinc-900 text-black dark:text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Camera className="w-4 h-4 text-red-600" />
                <span>{t('hero.cta.secondary')}</span>
              </Link>
            </div>

            {/* Friction Killers (Friction reduction badges) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 text-black dark:text-white">
                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                {t('hero.badge.free')}
              </span>
              <span className="flex items-center gap-1.5 text-black dark:text-white">
                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                {t('hero.badge.noCard')}
              </span>
              <span className="flex items-center gap-1.5 text-black dark:text-white">
                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                {t('hero.badge.pwa')}
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
                <span>{t('hero.hud.live')}</span>
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
                  {t('hero.mood.interactive')}
                </span>
                <span className="font-mono text-[10px] text-red-600 font-bold uppercase">
                  {t('hero.mood.label')}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 font-mono text-[11px] font-black uppercase">
                {[
                  { id: 'relaxed' as const, label: t('hero.mood.relaxed') },
                  { id: 'stress' as const, label: t('hero.mood.stress') },
                  { id: 'play' as const, label: t('hero.mood.play') },
                  { id: 'alert' as const, label: t('hero.mood.alert') }
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
                  1 {lang === 'tr' ? 'DAKİKA' : 'MIN'}
                </span>
              </div>
              <h3 className="text-base font-black uppercase text-black dark:text-white group-hover:text-red-600 transition-colors">
                {t('cards.quickSolution.title')}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('cards.quickSolution.desc')}
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>{t('cards.quickSolution.cta')}</span>
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
                {t('cards.visionAi.title')}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('cards.visionAi.desc')}
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>{t('cards.visionAi.cta')}</span>
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
                  14+ {lang === 'tr' ? 'PROTOKOL' : 'PROTOCOLS'}
                </span>
              </div>
              <h3 className="text-base font-black uppercase text-black dark:text-white group-hover:text-red-600 transition-colors">
                {t('cards.problems.title')}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('cards.problems.desc')}
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>{t('cards.problems.cta')}</span>
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
                  {lang === 'tr' ? 'ACİL TOKSİN' : 'TOXIN ALERT'}
                </span>
              </div>
              <h3 className="text-base font-black uppercase text-black dark:text-white group-hover:text-red-600 transition-colors">
                {t('cards.toxic.title')}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('cards.toxic.desc')}
              </p>
            </div>
            <div className="font-mono text-xs font-black uppercase text-red-600 flex items-center gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span>{t('cards.toxic.cta')}</span>
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
              {t('modules.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white mt-1">
              {t('modules.title')}
            </h2>
          </div>
          <div className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400">
            {t('modules.sub')}
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
                {lang === 'tr' ? 'KÖPEK DAVRANIŞ ANALİZİ' : 'CANINE BEHAVIOR ANALYSIS'}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {lang === 'tr' 
                  ? 'Kuyruk, kulak, göz, ağız, vücut duruşu ve enerjiyi ağırlıklı algoritmayla hesaplar. 8 ruh hali ve 3 seviyeli risk göstergesi (Yeşil / Sarı / Kırmızı) üretir.'
                  : 'Calculates tail, ear, eye, mouth, body posture and energy via weighted algorithm. Yields 8 emotional states and 3-tier risk meter.'}
              </p>
            </div>
            <Link
              to="/analiz"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>{lang === 'tr' ? 'ANALİZ MOTORUNU AÇ' : 'OPEN ANALYSIS ENGINE'}</span>
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
                {lang === 'tr' ? 'DAVRANIŞ SORUNU ÇÖZÜM MERKEZİ' : 'BEHAVIOR PROBLEM SOLUTION HUB'}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {lang === 'tr'
                  ? 'Ayrılık anksiyetesi, tasma çekme, aşırı havlama, ısırma, tuvalet ve kaynak koruma için adım adım cezasız karşıt koşullandırma (counter-conditioning) protokolleri.'
                  : 'Step-by-step punishment-free counter-conditioning protocols for separation anxiety, leash pulling, barking, biting, and resource guarding.'}
              </p>
            </div>
            <Link
              to="/sorunlar"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>{lang === 'tr' ? 'SORUNLARI İNCELE' : 'EXPLORE PROBLEMS'}</span>
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
                {lang === 'tr' ? 'KİŞİSELLEŞTİRİLMİŞ EĞİTİM PLANI' : 'CUSTOMIZED TRAINING PLANNER'}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {lang === 'tr'
                  ? 'Köpeğinizin ırkı, yaşı ve enerjisine göre 7 / 14 / 30 günlük gün gün pozitif egzersiz programı, görev onay kutuları ve anlık yüzde ilerleme takibi.'
                  : 'Tailored 7 / 14 / 30 day daily positive routines according to breed, age and drive, with checklists and progress tracking.'}
              </p>
            </div>
            <Link
              to="/egitim-planlari"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>{lang === 'tr' ? 'PLAN OLUŞTUR & TAKİP ET' : 'BUILD & TRACK PLAN'}</span>
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
                {lang === 'tr' ? 'PATİASİSTAN AI SOHBET' : 'PATIASISTAN AI CHAT'}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {lang === 'tr'
                  ? 'Bilimsel etoloji ve pozitif pekiştirme ilkeleriyle yanıt veren akışkan (streaming) Türkçe yapay zeka danışmanı.'
                  : 'Streaming AI assistant answering with clinical ethology and humane positive reinforcement foundations.'}
              </p>
            </div>
            <Link
              to="/patiasistan"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-red-600 hover:text-black dark:hover:text-white transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
            >
              <span>{lang === 'tr' ? 'PATİASİSTAN İLE KONUŞ' : 'CHAT WITH PATIASISTAN'}</span>
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
                {t('how.tag')}
              </span>
              <h3 className="text-2xl font-black uppercase text-black dark:text-white mt-1">
                {t('how.title')}
              </h3>
            </div>
            <span className="font-mono text-xs font-black uppercase bg-black text-white dark:bg-white dark:text-black px-3 py-1">
              {t('how.badge')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="font-mono text-xs font-black uppercase text-red-600">{t('how.01.tag')}</div>
              <h4 className="text-base font-black uppercase">{t('how.01.title')}</h4>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('how.01.desc')}
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs font-black uppercase text-red-600">{t('how.02.tag')}</div>
              <h4 className="text-base font-black uppercase">{t('how.02.title')}</h4>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('how.02.desc')}
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs font-black uppercase text-red-600">{t('how.03.tag')}</div>
              <h4 className="text-base font-black uppercase">{t('how.03.title')}</h4>
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('how.03.desc')}
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
              {t('manifesto.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              {t('manifesto.title')}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-zinc-400 max-w-3xl leading-relaxed">
              {t('manifesto.sub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">01 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">{t('manifesto.01.title')}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t('manifesto.01.desc')}
              </p>
            </div>

            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">02 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">{t('manifesto.02.title')}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t('manifesto.02.desc')}
              </p>
            </div>

            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">03 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">{t('manifesto.03.title')}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t('manifesto.03.desc')}
              </p>
            </div>

            <div className="p-4 border-2 border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-2xl font-black text-red-500 font-mono">04 ■</span>
              <h4 className="font-mono text-xs font-black uppercase text-white">{t('manifesto.04.title')}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t('manifesto.04.desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-zinc-800">
            <div className="font-mono text-xs font-bold text-zinc-400 uppercase">
              {t('manifesto.cta.desc')}
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/hizli-cozum"
                className="px-5 py-2.5 bg-red-600 text-white font-mono text-xs font-black uppercase border-2 border-white shadow-brutal-white-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                {t('manifesto.cta.quick')}
              </Link>
              <Link
                to="/kutuphane"
                className="px-5 py-2.5 bg-white text-black font-mono text-xs font-black uppercase border-2 border-white shadow-brutal-white-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                {t('manifesto.cta.library')}
              </Link>
              <Link
                to="/zehirli-gidalar"
                className="px-5 py-2.5 bg-yellow-400 text-black font-mono text-xs font-black uppercase border-2 border-white shadow-brutal-white-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                {t('manifesto.cta.toxic')}
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
