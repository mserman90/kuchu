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
