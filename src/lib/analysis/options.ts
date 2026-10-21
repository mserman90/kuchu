import { 
  OptionItem, 
  TailPosition, 
  TailSpeed, 
  TailSpread, 
  TailDirection, 
  TailTension,
  EarPosition,
  EyeGaze,
  MouthFace,
  BodyPosture,
  EnergyMovement,
  EnvironmentContext,
  TriggerContext
} from './types';

export const TAIL_POSITIONS: OptionItem<TailPosition>[] = [
  {
    id: 'high_stiff',
    label: 'Yüksek / Dik (Sırt Çizgisinin Üstünde)',
    desc: 'Yüksek uyarılma, alarm durumu veya baskınlık değil, dikkat/özgüven/meydan okuma sinyali.',
    scientificInsight: 'Koku bezlerinin feromon salınımını maksimize eder.'
  },
  {
    id: 'neutral',
    label: 'Orta (Yere Paralel, Omurga Hizası)',
    desc: 'Rahat, dengeli ve huzurlu doğal kuyruk taşıma pozisyonu.',
    scientificInsight: 'Parasempatik sinir sisteminin devrede olduğunu gösterir.'
  },
  {
    id: 'low',
    label: 'Düşük (Aşağı Sarkık)',
    desc: 'Temkinli, sakin veya hafif güvensiz bir durumu yansıtabilir.',
    scientificInsight: 'Köpeğin çevresel uyarıcıları tarttığı geçiş pozisyonudur.'
  },
  {
    id: 'tucked',
    label: 'Bacakların Arasına Sıkışmış',
    desc: 'Korku, yoğun güvensizlik veya teslimiyet göstergesi. Tehdidi yatıştırmaya çalışıyor.',
    scientificInsight: 'Koku bezlerini örterek kendini görünmez kılma evrimsel refleksidir.'
  }
];

export const TAIL_SPEEDS: OptionItem<TailSpeed>[] = [
  { id: 'none', label: 'Sallanmıyor (Hareketsiz / Donuk)' },
  { id: 'slow_rhythmic', label: 'Yavaş Ritmik' },
  { id: 'medium', label: 'Orta Hızda' },
  { id: 'fast_frantic', label: 'Çok Hızlı / Telaşlı' }
];

export const TAIL_SPREADS: OptionItem<TailSpread>[] = [
  { id: 'narrow_tight', label: 'Dar / Kısa Salınımlı' },
  { id: 'broad_loose', label: 'Geniş Salınımlı (Kalça Katılıyor)' },
  { id: 'circular_helicopter', label: 'Dairesel / Helikopter Gibi' }
];

export const TAIL_DIRECTIONS: OptionItem<TailDirection>[] = [
  {
    id: 'biased_right',
    label: 'Daha Çok Sağa Doğru',
    desc: 'Vallortigara & Quaranta Bulgusu: Sol beyin yarıküresi aktif. Pozitif yaklaşım, tanıdık ve sevilen kişi/canlıya yönelim.',
    scientificInsight: 'Sol hemisfer pozitif duyguları ve yaklaşma motivasyonunu yönetir.'
  },
  {
    id: 'biased_left',
    label: 'Daha Çok Sola Doğru',
    desc: 'Vallortigara & Quaranta Bulgusu: Sağ beyin yarıküresi aktif. Çekingenlik, kaygı veya tehdit algısı olan durumlara eğilim.',
    scientificInsight: 'Sağ hemisfer korku, çekilme ve alarm durumlarını yönetir.'
  },
  {
    id: 'balanced',
    label: 'Eşit / Nötr Salınım',
    desc: 'İki yöne simetrik veya belirgin bir asimetri taşımayan nötr hareket.',
    scientificInsight: 'Dengeli uyarılma düzeyini temsil eder.'
  }
];

export const TAIL_TENSIONS: OptionItem<TailTension>[] = [
  { id: 'relaxed_fluid', label: 'Gevşek ve Akışkan' },
  { id: 'stiff_vibrating', label: 'Sert, Kaskatı veya Titreşimli' }
];

export const EAR_POSITIONS: OptionItem<EarPosition>[] = [
  {
    id: 'pricked_forward',
    label: 'Dik ve Öne Dönük',
    desc: 'Yoğun dikkat, odaklanma, potansiyel tehdit veya ilgi odağını tarama.'
  },
  {
    id: 'relaxed_side',
    label: 'Yana Yatık / Yanlara Açık (Doğal)',
    desc: 'Rahat, nötr ve güvende olduğunu gösteren standart kulak pozisyonu.'
  },
  {
    id: 'pulled_back',
    label: 'Geriye Yatık (Hafif)',
    desc: 'Sosyal selamlama, yatıştırma sinyali veya hafif çekingenlik.'
  },
  {
    id: 'pinned_flat',
    label: 'Tamamen Kafaya Yapışık (Basık)',
    desc: 'Yüksek korku, savunma veya derin stres durumu.'
  }
];

export const EYE_GAZES: OptionItem<EyeGaze>[] = [
  {
    id: 'soft_squint',
    label: 'Yumuşak, Kısık, "Gülümseyen" Gözler',
    desc: 'Tamamen rahat, güvende ve dostane sosyal bağ kurma hali.'
  },
  {
    id: 'relaxed_normal',
    label: 'Normal, Rahat Bakış',
    desc: 'Sakin çevre gözlemi, gerilimsiz doğal göz bebekleri.'
  },
  {
    id: 'hard_stare',
    label: 'Dik, Sert ve Sabit Bakış (Göz Kırpmadan)',
    desc: 'Doğrudan tehdit veya meydan okuma; alan/kaynak koruma sinyali.'
  },
  {
    id: 'whale_eye',
    label: 'Balina Gözü (Göz Akı / Beyazı Görünüyor)',
    desc: 'Kritik stres, savunma hazırlığı veya köşeye sıkışmışlık hissi.'
  },
  {
    id: 'avoidant',
    label: 'Bakışları Kaçırma / Başını Çevirme',
    desc: 'Klasik Turid Rugaas yatıştırma sinyali: "Seninle bir kavgam yok, lütfen sakin ol".'
  }
];

export const MOUTH_FACES: OptionItem<MouthFace>[] = [
  {
    id: 'closed_relaxed',
    label: 'Ağız Kapalı, Dudaklar Gevşek',
    desc: 'Sakin, dingin ve dinlenme modunda.'
  },
  {
    id: 'open_panting_gentle',
    label: 'Ağız Hafif Açık, Dil Dışarıda (Sakin Nefes)',
    desc: 'Mutlu köpek gülümsemesi, termoregülasyon ve keyifli ruh hali.'
  },
  {
    id: 'lip_licking_stress',
    label: 'Dudak/Burun Yalama (Sık Sık)',
    desc: 'Yatıştırma ve içsel stres sinyali (yemek yemediği halde burun yalama).'
  },
  {
    id: 'teeth_baring_snarl',
    label: 'Diş Gösterme / Dudakları Yukarı Çekme',
    desc: 'Açık mesafe uyarısı: "Daha fazla yaklaşma, savunmaya geçeceğim".'
  },
  {
    id: 'yawning_stress',
    label: 'Esneme (Stres Esnemesi)',
    desc: 'Uykusuzluk değil; kortizol düşürme amaçlı sakinleşme refleksi.'
  }
];

export const BODY_POSTURES: OptionItem<BodyPosture>[] = [
  {
    id: 'balanced_relaxed',
    label: 'Gevşek, Ağırlık 4 Ayağa Eşit Dağılmış',
    desc: 'Mükemmel fizyolojik ve duygusal denge hali.'
  },
  {
    id: 'weight_forward_tense',
    label: 'Ağırlık Ön Ayaklarda, Gövde Öne Eğik',
    desc: 'Müdahale, atılma veya baskı uygulama eğilimi; alarm pozisyonu.'
  },
  {
    id: 'cowering_crouched',
    label: 'Geriye Çekilmiş / Yere Yakınlaşmış',
    desc: 'Güvensizlik ve kaçış yolu arama davranışı.'
  },
  {
    id: 'arched_small',
    label: 'Kamburlaşmış / Vücudu Küçültmeye Çalışıyor',
    desc: 'Derin korku ve savunmasızlık hissi.'
  },
  {
    id: 'piloerection_hackles',
    label: 'Tüyler Kabarık (Piloereksiyon)',
    desc: 'Otonom sempatik sinir sistemi deşarjı (yoğun sürpriz, korku veya aşırı uyarılma).'
  },
  {
    id: 'play_bow',
    label: 'Oyun Pozisyonu (Ön Kollar Yerde, Arka Havada)',
    desc: 'Evrensel oyun daveti: "Sonraki hareketlerim ciddiye alınmamalı, oyun oynayalım".'
  }
];

export const ENERGY_MOVEMENTS: OptionItem<EnergyMovement>[] = [
  { id: 'calm', label: 'Sakin ve Dingin' },
  { id: 'explorative', label: 'Meraklı / Çevreyi Koklayan ve Keşfeden' },
  { id: 'hyperactive_agitated', label: 'Aşırı Heyecanlı / Zıplayan / Durulmayan' },
  { id: 'frozen_still', label: 'Donup Kalmış (Freeze - Hareket Sıfır)' },
  { id: 'fleeing', label: 'Kaçmaya / Saklanmaya Çalışıyor' },
  { id: 'approach_retreat', label: 'Yaklaşıp Aniden Geri Çekiliyor (İkilem)' }
];

export const ENVIRONMENTS: OptionItem<EnvironmentContext>[] = [
  { id: 'home', label: 'Ev / Güvenli İç Mekan' },
  { id: 'street', label: 'Sokak / Yürüyüş' },
  { id: 'vet_clinic', label: 'Veteriner Kliniği' },
  { id: 'dog_park', label: 'Köpek Parkı / Açık Alan' },
  { id: 'guest_arrival', label: 'Eve Misafir Gelmesi' },
  { id: 'other', label: 'Diğer / Bilinmeyen Ortam' }
];

export const TRIGGERS: OptionItem<TriggerContext>[] = [
  { id: 'none', label: 'Belirgin Bir Tetikleyici Yok' },
  { id: 'stranger_human', label: 'Yabancı İnsan / Çocuk' },
  { id: 'other_dog', label: 'Başka Bir Köpek / Kedi' },
  { id: 'loud_noise', label: 'Ani / Yüksek Ses (Gök gürültüsü, korna)' },
  { id: 'food_toy', label: 'Mama / Oyuncak / Kaynak Koruma' },
  { id: 'handling_touch', label: 'Tırnak Kesimi / Dokunma / Sarılma' }
];

// ENGLISH LOCALIZATION MAP
export const OPTIONS_EN_MAP: Record<string, { label: string; desc?: string; scientificInsight?: string }> = {
  // Tail Position
  high_stiff: {
    label: 'High / Upright (Above Spine Line)',
    desc: 'High arousal, alert state or confidence/challenge signal rather than simple dominance.',
    scientificInsight: 'Maximizes scent gland pheromone dispersion.'
  },
  neutral: {
    label: 'Neutral (Parallel to Ground, Spine Level)',
    desc: 'Relaxed, balanced, and peaceful natural carriage position.',
    scientificInsight: 'Indicates active parasympathetic nervous system engagement.'
  },
  low: {
    label: 'Low (Hanging Downward)',
    desc: 'May reflect cautiousness, calmness, or mild uncertainty.',
    scientificInsight: 'A transitional stance as the dog evaluates ambient environmental stimuli.'
  },
  tucked: {
    label: 'Tucked Tightly Between Hind Legs',
    desc: 'Intense fear, severe insecurity, or appeasement. Attempting to de-escalate perceived threat.',
    scientificInsight: 'Evolutionary reflex to mask anal scent glands and appear small/invisible.'
  },

  // Tail Speeds
  speed_none: { label: 'Stationary (Motionless / Frozen)' },
  slow_rhythmic: { label: 'Slow Rhythmic' },
  medium: { label: 'Moderate Speed' },
  fast_frantic: { label: 'Very Rapid / Frantic' },

  // Tail Spreads
  narrow_tight: { label: 'Narrow / Short Oscillation' },
  broad_loose: { label: 'Broad / Loose Sweep (Involves Hips)' },
  circular_helicopter: { label: 'Circular / Helicopter Motion' },

  // Tail Directions
  biased_right: {
    label: 'Predominantly to the Right',
    desc: 'Vallortigara & Quaranta Finding: Left brain hemisphere active. Positive approach motivation toward familiar/beloved beings.',
    scientificInsight: 'Left hemisphere governs positive emotions and approach motivation.'
  },
  biased_left: {
    label: 'Predominantly to the Left',
    desc: 'Vallortigara & Quaranta Finding: Right brain hemisphere active. Tendency toward avoidance, anxiety, or threat appraisal.',
    scientificInsight: 'Right hemisphere governs fear, withdrawal, and vigilance alarms.'
  },
  balanced: {
    label: 'Symmetric / Neutral Wagging',
    desc: 'Symmetric oscillation without noticeable lateral bias.',
    scientificInsight: 'Reflects balanced arousal without strong lateralized bias.'
  },

  // Tail Tensions
  relaxed_fluid: { label: 'Relaxed and Fluid' },
  stiff_vibrating: { label: 'Stiff, Rigid, or Vibrating' },

  // Ear Positions
  pricked_forward: {
    label: 'Erect & Pointed Forward',
    desc: 'Intense alertness, focused attention, scanning potential threats or targets.'
  },
  relaxed_side: {
    label: 'Relaxed / Spread to Sides (Natural)',
    desc: 'Comfortable, neutral ear carriage indicating feeling safe.'
  },
  pulled_back: {
    label: 'Pulled Backward (Mild)',
    desc: 'Social greeting, polite appeasement signal, or mild hesitancy.'
  },
  pinned_flat: {
    label: 'Pinned Flat Against Head',
    desc: 'Severe fear, acute defense readiness, or deep stress.'
  },

  // Eye Gazes
  soft_squint: {
    label: 'Soft, Squinting, "Smiling" Eyes',
    desc: 'Completely relaxed, safe, and engaging in friendly social bonding.'
  },
  relaxed_normal: {
    label: 'Normal, Relaxed Gaze',
    desc: 'Calm environmental observation with unconstricted, natural pupils.'
  },
  hard_stare: {
    label: 'Direct, Hard, Fixed Stare (Unblinking)',
    desc: 'Direct challenge or threat; spatial or resource guarding indicator.'
  },
  whale_eye: {
    label: 'Whale Eye (Sclera / Eye White Clearly Visible)',
    desc: 'Critical stress threshold, defensive preparation, or feeling cornered.'
  },
  avoidant: {
    label: 'Averting Gaze / Turning Head Away',
    desc: 'Classic Turid Rugaas calming signal: "I mean no harm, please remain calm".'
  },

  // Mouth Faces
  closed_relaxed: {
    label: 'Mouth Closed, Lips Soft & Slack',
    desc: 'Peaceful, serene, and resting mode.'
  },
  open_panting_gentle: {
    label: 'Mouth Slightly Open, Tongue Out (Gentle Panting)',
    desc: 'Classic happy canine smile, thermoregulation, and content mood.'
  },
  lip_licking_stress: {
    label: 'Lip / Nose Licking (Frequent)',
    desc: 'Appeasement and internal stress signal (licking nose without eating).'
  },
  teeth_baring_snarl: {
    label: 'Teeth Bared / Snarl (Vertical Lip Retraction)',
    desc: 'Explicit distance warning: "Do not come closer, I will defend myself".'
  },
  yawning_stress: {
    label: 'Yawning (Stress Yawn)',
    desc: 'Not drowsiness; an autonomic calming reflex intended to lower cortisol.'
  },

  // Body Postures
  balanced_relaxed: {
    label: 'Relaxed, Weight Evenly Distributed on 4 Paws',
    desc: 'Optimal physiological and emotional equilibrium.'
  },
  weight_forward_tense: {
    label: 'Weight Forward, Torso Leaning Ahead',
    desc: 'Tendency to intervene, charge, or exert pressure; alert stance.'
  },
  cowering_crouched: {
    label: 'Cowering / Crouched Low to Ground',
    desc: 'Insecurity, fear, and actively seeking an escape route.'
  },
  arched_small: {
    label: 'Hunched Spine / Attempting to Shrink Body',
    desc: 'Profound fear and intense vulnerability.'
  },
  piloerection_hackles: {
    label: 'Hackles Raised (Piloerection along Spine)',
    desc: 'Sympathetic nervous system surge (intense startle, fear, or extreme arousal).'
  },
  play_bow: {
    label: 'Play Bow (Elbows on Ground, Rump in Air)',
    desc: 'Universal play invitation: "My next actions are not serious; let\'s play".'
  },

  // Energy & Movements
  calm: { label: 'Calm and Peaceful' },
  explorative: { label: 'Inquisitive / Sniffing and Exploring' },
  hyperactive_agitated: { label: 'Hyperactive / Frantic / Unable to Settle' },
  frozen_still: { label: 'Frozen Still (Freeze - Zero Motion)' },
  fleeing: { label: 'Attempting to Flee / Hide' },
  approach_retreat: { label: 'Approaching and Abruptly Darting Back (Conflict)' },

  // Environments
  home: { label: 'Home / Familiar Indoor Space' },
  street: { label: 'Street / Neighborhood Walk' },
  vet_clinic: { label: 'Veterinary Clinic' },
  dog_park: { label: 'Dog Park / Open Field' },
  guest_arrival: { label: 'Guest Arriving at Door' },
  other: { label: 'Other / Unfamiliar Setting' },

  // Triggers
  none: { label: 'No Evident Trigger' },
  stranger_human: { label: 'Unfamiliar Person / Child' },
  other_dog: { label: 'Another Dog / Cat' },
  loud_noise: { label: 'Sudden / Loud Noise (Thunder, car horn, fireworks)' },
  food_toy: { label: 'Food / Toy / Resource Guarding' },
  handling_touch: { label: 'Nail Trim / Restraint / Hugging' }
};

export function getLocalizedOptions<T extends string>(
  options: OptionItem<T>[],
  lang: 'tr' | 'en'
): OptionItem<T>[] {
  if (lang === 'tr') return options;
  return options.map((opt) => {
    if (opt.id === 'none') {
      const isTail = opt.label.includes('Sallanmıyor');
      return {
        ...opt,
        label: isTail ? 'Stationary (Motionless / Frozen)' : 'No Evident Trigger'
      };
    }
    const en = OPTIONS_EN_MAP[opt.id];
    if (!en) return opt;
    return {
      ...opt,
      label: en.label || opt.label,
      desc: en.desc !== undefined ? en.desc : opt.desc,
      scientificInsight: en.scientificInsight !== undefined ? en.scientificInsight : opt.scientificInsight
    };
  });
}

