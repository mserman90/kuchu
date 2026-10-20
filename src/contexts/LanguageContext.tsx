import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ─── Dil Tipi ────────────────────────────────────────────────────────────────
export type Lang = 'tr' | 'en';

// ─── Çeviri Sözlüğü ──────────────────────────────────────────────────────────
const translations = {
  tr: {
    // Header nav
    'nav.quickSolution': 'HIZLI ÇÖZÜM',
    'nav.clicker': 'CLİCKER',
    'nav.analysis': 'ANALİZ',
    'nav.problems': 'SORUNLAR',
    'nav.toxicFoods': 'ZEHİRLİ GIDALAR',
    'nav.plans': 'PLANLAR',
    'nav.library': 'KÜTÜPHANE',
    'nav.patiasistan': 'PATİASİSTAN',
    'nav.panel': 'PANEL',
    'nav.badge.new': 'YENİ',
    'nav.badge.audio': 'SESLİ',
    'nav.badge.motor': 'MOTOR',
    'nav.badge.emergency': 'ACİL',
    'nav.badge.ai': 'AI',
    // Header controls
    'header.login': 'GİRİŞ',
    'header.logout.title': 'Çıkış yapmak için tıklayın',
    'header.theme.light': 'GÜNDÜZ',
    'header.theme.dark': 'GECE',
    'header.theme.toLight': 'Gündüz Moduna Geç',
    'header.theme.toDark': 'Gece Moduna Geç',
    'header.quickAnalysis': 'HIZLI ANALİZ',
    'header.activeDog': 'AKTİF KÖPEK',
    'header.theme.label': 'GÖRÜNÜM / TEMA',
    'header.lang.label': 'DİL / LANGUAGE',
    // Hero
    'hero.eyebrow': "TÜRKİYE'NİN İLK KANITA DAYALI KÖPEK DAVRANIŞ PLATFORMU",
    'hero.headline1': 'KÖPEĞİNİZİ ANLAYIN.',
    'hero.headline2': 'SORUNLARI',
    'hero.headline3': 'CEZASIZ',
    'hero.headline4': 'ÇÖZÜN.',
    'hero.sub': 'Aşırı havlama, tasma çekiştirme, yalnız kalamama veya agresyon... Köpeğiniz size bir şey anlatmaya çalışıyor. Eski ceza mitlerini unutun; <strong>kanıta dayalı bilimsel protokoller</strong> ve <strong>Yapay Zeka</strong> ile dostunuzun gerçek ruh halini ve ihtiyaçlarını saniyeler içinde keşfedin.',
    'hero.cta.primary': '1 DAKİKADA HIZLI ÇÖZÜMÜ BAŞLAT',
    'hero.cta.secondary': 'FOTOĞRAFLA VISION AI TARA',
    'hero.badge.free': '%100 ÜCRETSİZ & AÇIK BİLİM',
    'hero.badge.noCard': 'HESAP / KREDİT KARTI ŞARTI YOK',
    'hero.badge.pwa': 'ÇEVRİMDIŞI ÇALIŞIR (PWA)',
    'hero.hud.live': 'CANİNE VİSİON AI // CANLI GÖZLEM',
    'hero.mood.interactive': 'DOKUNUN & ANINDA GÖRSELİ DEĞİŞTİRİN:',
    'hero.mood.label': 'İNTERAKTİF TEST',
    'hero.mood.relaxed': '🟢 SAKİN',
    'hero.mood.stress': '🟡 STRESLİ',
    'hero.mood.play': '🔵 OYUN',
    'hero.mood.alert': '🔴 DONMA',
    // Feature cards
    'cards.quickSolution.title': 'KLİNİK TRİYAJ MOTORU',
    'cards.quickSolution.desc': 'Sorunun adını koyamıyor musunuz? 5 soruyla köpeğinizin aciliyet derecesini ve bilimsel eylem planını anında belirleyin.',
    'cards.quickSolution.cta': 'TESTİ HEMEN DOLDUR',
    'cards.visionAi.title': 'FOTOĞRAFLA VÜCUT DİLİ',
    'cards.visionAi.desc': 'Köpeğinizin fotoğrafını yükleyin; postür, kulak açısı ve "Balina Gözü" stres sinyallerini yapay zeka ile anında haritalandırın.',
    'cards.visionAi.cta': 'FOTOĞRAFI TARA',
    'cards.problems.title': 'ÇİFTLİK VE EV SORUNLARI',
    'cards.problems.desc': 'Tavuk/koyun avlamaktan koprofajiye, yalnızlık krizinden tırnak kesim fobisine kadar cezasız bilimsel çözümler.',
    'cards.problems.cta': 'SORUNLARI İNCELE',
    'cards.toxic.title': 'ZEHİRLİ GIDA DEDEKTÖRÜ',
    'cards.toxic.desc': 'Köpeğiniz çikolata veya yabancı bir gıda mı yedi? Doz hesaplayıcı ve acil ilk yardım adımlarını saniyeler içinde görün.',
    'cards.toxic.cta': 'HESAPLAYICIYI AÇ',
    // Modules section
    'modules.tag': 'SİSTEM MİMARİSİ',
    'modules.title': 'KUÇU DÖRT ANA MODÜLÜ',
    'modules.sub': 'DETERMİNİSTİK ANALİZ + R+ EĞİTİM PLANI',
    // How it works
    'how.tag': 'BİLİMSEL YÖNTEM PRENSİPLERİ',
    'how.title': 'KUÇU NASIL ÇALIŞIR?',
    'how.badge': 'KURAL TABANLI MOTOR (RULE-BASED)',
    'how.01.tag': '01 / DETERMINISTİK HESAPLAMA',
    'how.01.title': 'AĞIRLIKLI 5 FAKTÖR',
    'how.01.desc': 'Analiz motoru önyargısızdır. Kuyruk (%30), Duruş (%25), Göz ve Ağız (%20), Kulaklar (%15), Enerji (%10) puanlanarak net risk düzeyi tespit edilir.',
    'how.02.tag': '02 / SIFIR CEZA, SIFIR ŞİDDET',
    'how.02.title': 'POZİTİF PEKİŞTİRME (R+)',
    'how.02.desc': 'Boğma tasma, elektrikli şok veya baskınlık (alfa miti) yöntemleri bilimsel olarak reddedilir. İstenen davranış ödülle pekiştirilir.',
    'how.03.tag': '03 / GÜVENLİK VE ETİK',
    'how.03.title': 'SORUMLULUK BEYANI',
    'how.03.desc': 'Sistem tıbbi veya veteriner teşhisi yapmaz. Yüksek risk (kırmızı) tespit edildiğinde kullanıcıyı hemen uzman davranış terapistine yönlendirir.',
    // Manifesto
    'manifesto.tag': 'VİZYONUMUZ VE MANİFESTOMUZ',
    'manifesto.title': 'NEDEN KUÇU? CEZA DEĞİL, BİLİMSEL İLETİŞİM.',
    'manifesto.sub': 'Yıllardır televizyonlarda ve sosyal medyada yayılan "alfa olun", "köpeğe hükmedin", "sırt üstü devirin" gibi eski moda ceza mitleri, binlerce köpeğin travmatize olmasına ve savunma ısırıklarının patlamasına yol açtı. Kuçu; modern klinik etoloji ve veteriner davranış tıbbını herkes için anlaşılır, uygulanabilir ve pratik araçlara dönüştürmek için geliştirildi.',
    'manifesto.01.title': 'İnatçılık Değil, İletişim',
    'manifesto.01.desc': 'Köpekler asla "inat olsun" diye davranmaz. Her istenmeyen tepkinin ardında ya korku, ya karşılanmamış enerji ya da fiziksel acı yatar.',
    'manifesto.02.title': '3M Bütüncül Yaklaşım',
    'manifesto.02.desc': 'Çevresel Yönetim (Management) + Pozitif Modifikasyon (Modification) + Medikal Destek (Medication). Başarı bu 3 ayağın dengesiyle gelir.',
    'manifesto.03.title': 'Önce Fiziksel Sağlık',
    'manifesto.03.desc': 'Ani reaktivite ve hırçınlaşma vakalarının çoğunda osteoartrit veya diş ağrısı yatar. Tıbbi ağrı dışlanmadan eğitim yapılamaz.',
    'manifesto.04.title': 'Güven Odaklı Ebeveynlik',
    'manifesto.04.desc': 'Köpeğiniz sizi bir rakip ya da "alfa kurt" olarak görmez; hayatını size emanet eden güvenilir bir rehber ebeveyn arar.',
    'manifesto.cta.desc': 'Köpeğinizin iç dünyasını anlamak için hemen bir araç seçin:',
    'manifesto.cta.quick': '⚡ HIZLI ÇÖZÜM TESTİ',
    'manifesto.cta.library': '📖 BİLGİ KÜTÜPHANESİ',
    'manifesto.cta.toxic': '☣ ZEHİRLİ GIDA REHBERİ',
  },

  en: {
    // Header nav
    'nav.quickSolution': 'QUICK FIX',
    'nav.clicker': 'CLICKER',
    'nav.analysis': 'ANALYSIS',
    'nav.problems': 'PROBLEMS',
    'nav.toxicFoods': 'TOXIC FOODS',
    'nav.plans': 'PLANS',
    'nav.library': 'LIBRARY',
    'nav.patiasistan': 'PATIASISTAN',
    'nav.panel': 'PANEL',
    'nav.badge.new': 'NEW',
    'nav.badge.audio': 'AUDIO',
    'nav.badge.motor': 'ENGINE',
    'nav.badge.emergency': 'URGENT',
    'nav.badge.ai': 'AI',
    // Header controls
    'header.login': 'LOGIN',
    'header.logout.title': 'Click to log out',
    'header.theme.light': 'LIGHT',
    'header.theme.dark': 'DARK',
    'header.theme.toLight': 'Switch to Light Mode',
    'header.theme.toDark': 'Switch to Dark Mode',
    'header.quickAnalysis': 'QUICK ANALYSIS',
    'header.activeDog': 'ACTIVE DOG',
    'header.theme.label': 'APPEARANCE / THEME',
    'header.lang.label': 'LANGUAGE / DİL',
    // Hero
    'hero.eyebrow': "TURKEY'S FIRST EVIDENCE-BASED CANINE BEHAVIOR PLATFORM",
    'hero.headline1': 'UNDERSTAND YOUR DOG.',
    'hero.headline2': 'SOLVE ISSUES',
    'hero.headline3': 'WITHOUT',
    'hero.headline4': 'PUNISHMENT.',
    'hero.sub': 'Excessive barking, leash pulling, separation anxiety, or aggression... Your dog is trying to tell you something. Forget outdated punishment myths — discover your companion\'s true emotional state and needs in seconds with <strong>evidence-based scientific protocols</strong> and <strong>AI</strong>.',
    'hero.cta.primary': 'START QUICK FIX IN 1 MINUTE',
    'hero.cta.secondary': 'VISION AI PHOTO SCAN',
    'hero.badge.free': '100% FREE & OPEN SCIENCE',
    'hero.badge.noCard': 'NO ACCOUNT / CREDIT CARD NEEDED',
    'hero.badge.pwa': 'WORKS OFFLINE (PWA)',
    'hero.hud.live': 'CANINE VISION AI // LIVE OBSERVATION',
    'hero.mood.interactive': 'TAP TO SWITCH VIEWS INSTANTLY:',
    'hero.mood.label': 'INTERACTIVE DEMO',
    'hero.mood.relaxed': '🟢 CALM',
    'hero.mood.stress': '🟡 STRESSED',
    'hero.mood.play': '🔵 PLAY',
    'hero.mood.alert': '🔴 FREEZE',
    // Feature cards
    'cards.quickSolution.title': 'CLINICAL TRIAGE ENGINE',
    'cards.quickSolution.desc': "Can't name the problem? 5 questions determine your dog's urgency level and scientific action plan instantly.",
    'cards.quickSolution.cta': 'FILL THE TEST NOW',
    'cards.visionAi.title': 'BODY LANGUAGE BY PHOTO',
    'cards.visionAi.desc': 'Upload your dog\'s photo; AI instantly maps posture, ear angle, and "Whale Eye" stress signals.',
    'cards.visionAi.cta': 'SCAN PHOTO',
    'cards.problems.title': 'FARM & HOME PROBLEMS',
    'cards.problems.desc': 'From chicken chasing to coprophagia, from separation crises to nail-trimming phobia — science-based punishment-free solutions.',
    'cards.problems.cta': 'EXPLORE PROBLEMS',
    'cards.toxic.title': 'TOXIC FOOD DETECTOR',
    'cards.toxic.desc': 'Did your dog eat chocolate or an unknown food? See dosage calculator and emergency first-aid steps in seconds.',
    'cards.toxic.cta': 'OPEN CALCULATOR',
    // Modules section
    'modules.tag': 'SYSTEM ARCHITECTURE',
    'modules.title': 'FOUR CORE MODULES',
    'modules.sub': 'DETERMINISTIC ANALYSIS + R+ TRAINING PLAN',
    // How it works
    'how.tag': 'SCIENTIFIC METHOD PRINCIPLES',
    'how.title': 'HOW KUÇU WORKS',
    'how.badge': 'RULE-BASED ENGINE',
    'how.01.tag': '01 / DETERMINISTIC CALCULATION',
    'how.01.title': 'WEIGHTED 5 FACTORS',
    'how.01.desc': 'The analysis engine is bias-free. Tail (30%), Posture (25%), Eyes & Mouth (20%), Ears (15%), Energy (10%) are scored to determine net risk level.',
    'how.02.tag': '02 / ZERO PUNISHMENT, ZERO VIOLENCE',
    'how.02.title': 'POSITIVE REINFORCEMENT (R+)',
    'how.02.desc': 'Choke collars, shock collars, and dominance (alpha myth) methods are scientifically rejected. Desired behaviors are reinforced with rewards.',
    'how.03.tag': '03 / SAFETY & ETHICS',
    'how.03.title': 'DISCLAIMER',
    'how.03.desc': 'The system does not perform medical or veterinary diagnoses. When high risk (red) is detected, users are immediately referred to a certified behavior therapist.',
    // Manifesto
    'manifesto.tag': 'OUR VISION & MANIFESTO',
    'manifesto.title': 'WHY KUÇU? SCIENCE, NOT PUNISHMENT.',
    'manifesto.sub': 'For years, outdated punishment myths like "be the alpha," "dominate your dog," or "alpha roll" spread through TV and social media, traumatizing thousands of dogs and causing defensive bites. Kuçu was built to transform modern clinical ethology and veterinary behavioral medicine into understandable, practical tools for everyone.',
    'manifesto.01.title': 'Communication, Not Stubbornness',
    'manifesto.01.desc': 'Dogs never act out of spite. Behind every unwanted behavior lies fear, unmet energy, or physical pain.',
    'manifesto.02.title': '3M Holistic Approach',
    'manifesto.02.desc': 'Environmental Management + Positive Modification + Medical Support. Success comes from balancing all three pillars.',
    'manifesto.03.title': 'Physical Health First',
    'manifesto.03.desc': 'Most sudden reactive or aggressive episodes stem from underlying pain such as osteoarthritis or dental issues. Training cannot begin before medical causes are ruled out.',
    'manifesto.04.title': 'Trust-Based Guardianship',
    'manifesto.04.desc': "Your dog doesn't see you as a rival or \"alpha wolf\" — they seek a trustworthy guide they can rely on.",
    'manifesto.cta.desc': 'Choose a tool right now to understand your dog better:',
    'manifesto.cta.quick': '⚡ QUICK FIX TEST',
    'manifesto.cta.library': '📖 KNOWLEDGE LIBRARY',
    'manifesto.cta.toxic': '☣ TOXIC FOOD GUIDE',
  }
} as const;

export type TranslationKey = keyof typeof translations['tr'];

// ─── Context ─────────────────────────────────────────────────────────────────
interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// ─── Provider ────────────────────────────────────────────────────────────────
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('kuchu-lang');
      if (stored === 'tr' || stored === 'en') return stored;
      // Browser dil tercihine göre varsayılan
      return navigator.language.startsWith('en') ? 'en' : 'tr';
    } catch {
      return 'tr';
    }
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try { localStorage.setItem('kuchu-lang', newLang); } catch { /* ignore */ }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'tr' ? 'en' : 'tr');
  }, [lang, setLang]);

  const t = useCallback((key: TranslationKey): string => {
    return (translations[lang] as Record<string, string>)[key]
      ?? (translations['tr'] as Record<string, string>)[key]
      ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ─── Hook ────────────────────────────────────────────────────────────────────
export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
