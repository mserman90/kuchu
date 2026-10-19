import { 
  BehaviorInputState, 
  BehaviorAnalysisResult, 
  ScoreBreakdown, 
  RiskLevel 
} from './types';

export function analyzeDogBehavior(input: BehaviorInputState): BehaviorAnalysisResult {
  const dog = input.dogName || 'Dostunuz';

  // 1. Kuyruk Skoru (Max 30 Puan)
  let tailScore = 5; // Taban rahatlık
  const calmingSignals: string[] = [];
  const scientificInsights: string[] = [];

  if (input.tailPosition === 'tucked') {
    tailScore += 25; // Yoğun korku
    calmingSignals.push('Kuyruğu bacak arasına sıkıştırma (Görünmez olma çabası)');
  } else if (input.tailPosition === 'high_stiff') {
    tailScore += 20; // Yüksek uyarılma / gerginlik
    scientificInsights.push('Dik kuyruk: Feromon yayılımı ve çevresel meydan okuma');
  } else if (input.tailPosition === 'low') {
    tailScore += 10;
  } else {
    tailScore += 0; // neutral
  }

  if (input.tailTension === 'stiff_vibrating') {
    tailScore += 5;
    scientificInsights.push('Kaskatı / titreşimli kuyruk: Otonom sinir sistemi uyarısı');
  }

  if (input.tailDirection === 'biased_left') {
    tailScore += 4;
    scientificInsights.push('Vallortigara & Quaranta: Sola meyilli salınım sağ beyin (alarm/çekinme) aktivitesidir.');
  } else if (input.tailDirection === 'biased_right') {
    tailScore = Math.max(0, tailScore - 4);
    scientificInsights.push('Vallortigara & Quaranta: Sağa meyilli salınım sol beyin (pozitif/yaklaşım) aktivitesidir.');
  }

  if (input.tailSpeed === 'fast_frantic' && input.tailSpread === 'narrow_tight') {
    tailScore += 4;
  }
  tailScore = Math.min(30, Math.max(0, tailScore));

  // 2. Vücut Duruşu Skoru (Max 25 Puan)
  let postureScore = 4;
  if (input.bodyPosture === 'piloerection_hackles') {
    postureScore += 20;
    scientificInsights.push('Piloereksiyon: Sempatik sinir sisteminin ani tehlike veya uyarılma deşarjı.');
  } else if (input.bodyPosture === 'weight_forward_tense') {
    postureScore += 18;
  } else if (input.bodyPosture === 'arched_small') {
    postureScore += 16;
    calmingSignals.push('Vücudu küçültme ve kamburlaşma (Yatıştırma ve savunmasızlık)');
  } else if (input.bodyPosture === 'cowering_crouched') {
    postureScore += 12;
  } else if (input.bodyPosture === 'play_bow') {
    postureScore = 2; // Oyun pozisyonu risk düşürür
    scientificInsights.push('Oyun Selamı (Play Bow): Evrensel meta-iletişim sinyali.');
  }
  postureScore = Math.min(25, Math.max(0, postureScore));

  // 3. Yüz, Göz & Ağız Skoru (Max 20 Puan)
  let faceScore = 3;
  if (input.mouthFace === 'teeth_baring_snarl') {
    faceScore += 17;
  } else if (input.mouthFace === 'lip_licking_stress') {
    faceScore += 8;
    calmingSignals.push('Dudak/Burun yalama (Turid Rugaas sakinleşme sinyali)');
  } else if (input.mouthFace === 'yawning_stress') {
    faceScore += 7;
    calmingSignals.push('Stres esnemesi (Kortizol dengeleme refleksi)');
  }

  if (input.eyeGaze === 'hard_stare') {
    faceScore += 10;
  } else if (input.eyeGaze === 'whale_eye') {
    faceScore += 9;
    scientificInsights.push('Balina Gözü: Köpeğin köşeye sıkışmışlık veya panik eşiğinde olduğunu gösterir.');
  } else if (input.eyeGaze === 'avoidant') {
    faceScore += 4;
    calmingSignals.push('Bakışları kaçırma / başı çevirme (Yatıştırma girişimi)');
  }
  faceScore = Math.min(20, Math.max(0, faceScore));

  // 4. Kulaklar Skoru (Max 15 Puan)
  let earScore = 2;
  if (input.earPosition === 'pinned_flat') {
    earScore += 13;
  } else if (input.earPosition === 'pricked_forward') {
    earScore += 7;
  } else if (input.earPosition === 'pulled_back') {
    earScore += 5;
    calmingSignals.push('Kulakları geriye yatırma (Sosyal nezaket / yatıştırma)');
  }
  earScore = Math.min(15, Math.max(0, earScore));

  // 5. Enerji & Hareket Skoru (Max 10 Puan)
  let energyScore = 2;
  if (input.energyMovement === 'frozen_still') {
    energyScore += 8; // En tehlikeli aşama (Freeze)
    scientificInsights.push('Donma (Freeze): 4F modelindeki en kritik eşik; hemen ardından hamle gelebilir.');
  } else if (input.energyMovement === 'fleeing') {
    energyScore += 7;
  } else if (input.energyMovement === 'hyperactive_agitated') {
    energyScore += 6;
  } else if (input.energyMovement === 'approach_retreat') {
    energyScore += 5;
  }
  energyScore = Math.min(10, Math.max(0, energyScore));

  // Toplam Risk Skoru (0 - 100)
  const totalScore = tailScore + postureScore + faceScore + earScore + energyScore;
  const breakdown: ScoreBreakdown = {
    tailScore,
    postureScore,
    faceScore,
    earScore,
    energyScore,
    totalScore
  };

  // Risk Seviyesi Belirleme
  let riskLevel: RiskLevel = 'green';
  let riskTitle = 'DÜŞÜK RİSK (GÜVENLİ)';

  if (totalScore >= 66 || input.mouthFace === 'teeth_baring_snarl' || input.energyMovement === 'frozen_still') {
    riskLevel = 'red';
    riskTitle = 'YÜKSEK RİSK (DİKKAT & ALAN TANIMA)';
  } else if (totalScore >= 36) {
    riskLevel = 'yellow';
    riskTitle = 'ORTA RİSK (TEMKİNLİ YAKLAŞIM)';
  }

  // Ruh Hali Kategorisi (8 Kategori)
  let moodCategory = 'relaxed_happy';
  let moodTitle = 'RAHAT VE MUTLU';
  let moodSubtitle = 'Köpek sosyal ve fizyolojik olarak tam dengede.';
  let summary = `${dog}, çevresini sakin ve güvenli bir şekilde algılıyor. Beden dili son derece gevşek ve açık; sosyal etkileşime uygun bir ruh halinde.`;
  let recommendedPlanCategory = 'mental_enrichment';

  if (input.bodyPosture === 'play_bow') {
    moodCategory = 'playful';
    moodTitle = 'OYUN VE SOSYALLEŞME İSTEĞİ';
    moodSubtitle = 'Enerjik, neşeli ve oyun daveti sunan pozitif mod.';
    summary = `${dog}, ön gövdesini alçaltarak oyun selamı veriyor. Bu hareket, sonrasında yapacağı hamlelerin agresyon değil tamamen oyun amaçlı olduğunu karşı tarafa iletir.`;
    recommendedPlanCategory = 'basic_obedience';
  } else if (riskLevel === 'red' && (input.mouthFace === 'teeth_baring_snarl' || input.eyeGaze === 'hard_stare')) {
    moodCategory = 'threat_aggressive';
    moodTitle = 'TEHDİTKÂR / SAVUNMA ALARMI';
    moodSubtitle = 'Sınır ihlali algısı; savunma amaçlı hamle riski çok yüksek.';
    summary = `${dog}, net bir mesafe uyarısı veriyor. Diş gösterme veya dik bakış, baskınlık değil; mevcut durumdan aşırı rahatsız olduğunu ve geri çekilmeniz gerektiğini bildiren son ikaz sinyalidir.`;
    recommendedPlanCategory = 'reactivity';
  } else if (input.tailPosition === 'tucked' || input.energyMovement === 'fleeing' || input.bodyPosture === 'arched_small') {
    moodCategory = 'fearful';
    moodTitle = 'YOĞUN KORKU VE ÇARESİZLİK';
    moodSubtitle = 'Köpek kendini tehlikede ve savunmasız hissediyor.';
    summary = `${dog}, bedenini küçülterek ve kuyruğunu saklayarak görünmez olmaya çalışıyor. Bu durumdaki bir köpeğin üzerine gitmek savunma amaçlı ısırmayı tetikleyebilir.`;
    recommendedPlanCategory = 'separation_anxiety';
  } else if (input.mouthFace === 'lip_licking_stress' || input.mouthFace === 'yawning_stress' || input.eyeGaze === 'avoidant') {
    moodCategory = 'stressed';
    moodTitle = 'STRESLİ VE BASKI ALTINDA';
    moodSubtitle = 'Yatıştırma sinyalleri devrede; ortam gerginliğini düşürmeye çalışıyor.';
    summary = `${dog}, klasik Turid Rugaas sakinleşme sinyalleri (dudak yalama, esneme, göz kaçırma) veriyor. Sizden veya çevreden gelen baskıyı hafifletmek istiyor.`;
    recommendedPlanCategory = 'socialization';
  } else if (input.energyMovement === 'hyperactive_agitated' && input.tailSpeed === 'fast_frantic') {
    moodCategory = 'overstimulated';
    moodTitle = 'AŞIRI UYARILMIŞ (OVER-AROUSED)';
    moodSubtitle = 'Dopamin ve adrenalin tavan yapmış; fren mekanizması zayıf.';
    summary = `${dog}, yoğun uyarılma eşiğini aşmış durumda. Bu durumda heyecan ve reaktivite birbirine karışabilir; öğrenme kapasitesi kapalıdır.`;
    recommendedPlanCategory = 'loose_leash';
  } else if (input.energyMovement === 'explorative' || input.earPosition === 'pricked_forward') {
    moodCategory = 'curious';
    moodTitle = 'MERAKLI VE KEŞİF MODUNDA';
    moodSubtitle = 'Çevresel kokuları ve uyaranları zihinsel olarak işliyor.';
    summary = `${dog}, dikkatini çevresindeki ilginç bir detaya odaklamış. Korku belirtisi yok; bilişsel tarama yapıyor.`;
    recommendedPlanCategory = 'mental_enrichment';
  } else if (riskLevel === 'yellow') {
    moodCategory = 'cautious_uncertain';
    moodTitle = 'BELİRSİZ VE TEMKİNLİ';
    moodSubtitle = 'Köpek ortamı güvenli mi tehlikeli mi tartıyor.';
    summary = `${dog}, henüz net bir duygu kararı vermemiş. Karşıdan gelecek tepkiye göre korkuya ya da rahatlamaya geçebilir.`;
    recommendedPlanCategory = 'basic_obedience';
  }

  // Ne Yapmalı / Ne Yapmamalı
  const whatToDo: string[] = [];
  const whatNotToDo: string[] = [];

  if (riskLevel === 'red') {
    whatToDo.push('Hemen durun ve hareketsiz kalın; göz temasını derhal kesin.');
    whatToDo.push('Yavaşça yan dönün (köpeğe profilinizi gösterin) ve geriye doğru birkaç adım açılın.');
    whatToDo.push('Ortamdaki tetikleyici unsuru (insan, köpek, oyuncak vb.) sakin bir şekilde uzaklaştırın.');
    whatToDo.push('Köpeğin kaçış yolu varsa önünü kesinlikle kapatmayın.');

    whatNotToDo.push('Asla bağırmayın, köpeğe doğru hızlı adım atmayın veya üzerine eğilmeyin.');
    whatNotToDo.push('Gözlerinin içine dik dik bakmayın (bu doğrudan bir meydan okuma olarak algılanır).');
    whatNotToDo.push('Ceza vermeyin veya tasmayı aniden asılarak çekmeyin; adrenalin patlamasına yol açar.');
    whatNotToDo.push('Diş gösterirken sevmeye veya sakinleştirmek için sarılmaya çalışmayın.');
  } else if (riskLevel === 'yellow') {
    whatToDo.push('Köpeğe kendi hızında inceleme ve geri çekilme alanı tanıyın.');
    whatToDo.push('Yere çömelerek yan durun ve köpeğin size yaklaşmasını bekleyin.');
    whatToDo.push('Eğer sakinleşme sinyali (esneme, göz kaçırma) veriyorsa siz de başınızı hafifçe yana çevirin.');
    whatToDo.push('Ödül mamasını doğrudan ağzına uzatmak yerine yere, birkaç adım uzağına atın.');

    whatNotToDo.push('Köpeğin başının üstünden uzanarak sevmeye çalışmayın (çene altı veya göğüs tercih edin).');
    whatNotToDo.push('Korktuğu nesneye veya canlıya doğru zorla çekiştirmeyin.');
    whatNotToDo.push('Korktuğu için köpeği kucağa alıp aşırı heyecanla teselli etmeye kalkmayın.');
  } else {
    whatToDo.push('Gevşek vücut dilini sakin ses tonuyla ve sevgiyle ödüllendirin.');
    whatToDo.push('Zihinsel oyunlar veya koku arama egzersizleriyle odaklanmasını destekleyin.');
    whatToDo.push('Gevşek tasma yürüyüşü ve temel itaat pratikleri için en ideal andasınız.');

    whatNotToDo.push('Aşırı bağırarak veya sert hareketlerle köpeğin sakinliğini aniden bozmayın.');
    whatNotToDo.push('Diğer canlılarla zoraki burun buruna temasa sokmayın; doğal selamlama yayını koruyun.');
  }

  // Olası Nedenler
  const likelyCauses: string[] = [];
  if (input.trigger && input.trigger !== 'none') {
    const triggerMap: Record<string, string> = {
      stranger_human: 'Yabancı insanın doğrudan yaklaşması veya ani beden dili',
      other_dog: 'Karşıdaki köpeğin sert bakışı veya alan ihlali yapması',
      loud_noise: 'Ani patlama, korna, gök gürültüsü veya inşaat sesi',
      food_toy: 'Kıymetli bir kaynağı (kemik, oyuncak, mama) kaybetme endişesi',
      handling_touch: 'İstenmeyen fiziksel temas, tırnak kesimi veya veteriner manipülasyonu'
    };
    likelyCauses.push(triggerMap[input.trigger] || 'Çevresel bir tetikleyici faktör');
  } else {
    likelyCauses.push('Ortamdaki koku, ses veya enerji değişimi');
  }

  if (input.tailDirection === 'biased_left') {
    likelyCauses.push('Nörolojik sağ hemisfer aktivasyonu: Ortamda tanıdık olmayan bir unsur var');
  }
  if (input.bodyPosture === 'piloerection_hackles') {
    likelyCauses.push('Aşırı heyecan veya sürpriz yaratan beklenmedik bir uyaran');
  }

  // Güven Skoru
  const confidenceScore = Math.min(98, 75 + (scientificInsights.length * 5) + (calmingSignals.length * 4));

  return {
    id: 'ana_' + Date.now().toString(),
    dogName: dog,
    timestamp: new Date().toISOString(),
    moodCategory,
    moodTitle,
    moodSubtitle,
    riskLevel,
    riskScore: totalScore,
    riskTitle,
    confidenceScore,
    summary,
    scoreBreakdown: breakdown,
    calmingSignalsDetected: calmingSignals,
    scientificInsights,
    whatToDo,
    whatNotToDo,
    likelyCauses,
    recommendedPlanCategory,
    inputs: {
      tailPosition: input.tailPosition,
      tailSpeed: input.tailSpeed,
      tailSpread: input.tailSpread,
      tailDirection: input.tailDirection,
      tailTension: input.tailTension,
      earPosition: input.earPosition,
      eyeGaze: input.eyeGaze,
      mouthFace: input.mouthFace,
      bodyPosture: input.bodyPosture,
      energyMovement: input.energyMovement,
      environment: input.environment || 'home',
      trigger: input.trigger || 'none'
    }
  };
}
