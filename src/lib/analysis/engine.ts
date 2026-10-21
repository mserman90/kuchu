import { 
  BehaviorInputState, 
  BehaviorAnalysisResult, 
  ScoreBreakdown, 
  RiskLevel 
} from './types';

export function analyzeDogBehavior(
  input: BehaviorInputState,
  lang: 'tr' | 'en' = 'tr'
): BehaviorAnalysisResult {
  const isEn = lang === 'en';
  const dog = input.dogName || (isEn ? 'Your Dog' : 'Dostunuz');

  // 1. Kuyruk Skoru (Max 30 Puan)
  let tailScore = 5; // Taban rahatlık
  const calmingSignals: string[] = [];
  const scientificInsights: string[] = [];

  if (input.tailPosition === 'tucked') {
    tailScore += 25; // Yoğun korku
    calmingSignals.push(
      isEn
        ? 'Tucking tail tightly between legs (Attempting to appear small/invisible)'
        : 'Kuyruğu bacak arasına sıkıştırma (Görünmez olma çabası)'
    );
  } else if (input.tailPosition === 'high_stiff') {
    tailScore += 20; // Yüksek uyarılma / gerginlik
    scientificInsights.push(
      isEn
        ? 'Erect tail: Pheromone dispersion and environmental challenge signal'
        : 'Dik kuyruk: Feromon yayılımı ve çevresel meydan okuma'
    );
  } else if (input.tailPosition === 'low') {
    tailScore += 10;
  } else {
    tailScore += 0; // neutral
  }

  if (input.tailTension === 'stiff_vibrating') {
    tailScore += 5;
    scientificInsights.push(
      isEn
        ? 'Rigid / vibrating tail: Autonomic sympathetic nervous system arousal'
        : 'Kaskatı / titreşimli kuyruk: Otonom sinir sistemi uyarısı'
    );
  }

  if (input.tailDirection === 'biased_left') {
    tailScore += 4;
    scientificInsights.push(
      isEn
        ? 'Vallortigara & Quaranta: Left-biased tail wagging reflects right-hemisphere (alarm/avoidance) activation.'
        : 'Vallortigara & Quaranta: Sola meyilli salınım sağ beyin (alarm/çekinme) aktivitesidir.'
    );
  } else if (input.tailDirection === 'biased_right') {
    tailScore = Math.max(0, tailScore - 4);
    scientificInsights.push(
      isEn
        ? 'Vallortigara & Quaranta: Right-biased tail wagging reflects left-hemisphere (positive/approach) activation.'
        : 'Vallortigara & Quaranta: Sağa meyilli salınım sol beyin (pozitif/yaklaşım) aktivitesidir.'
    );
  }

  if (input.tailSpeed === 'fast_frantic' && input.tailSpread === 'narrow_tight') {
    tailScore += 4;
  }
  tailScore = Math.min(30, Math.max(0, tailScore));

  // 2. Vücut Duruşu Skoru (Max 25 Puan)
  let postureScore = 4;
  if (input.bodyPosture === 'piloerection_hackles') {
    postureScore += 20;
    scientificInsights.push(
      isEn
        ? 'Piloerection (Hackles): Sympathetic nervous system autonomic discharge due to sudden threat or arousal.'
        : 'Piloereksiyon: Sempatik sinir sisteminin ani tehlike veya uyarılma deşarjı.'
    );
  } else if (input.bodyPosture === 'weight_forward_tense') {
    postureScore += 18;
  } else if (input.bodyPosture === 'arched_small') {
    postureScore += 16;
    calmingSignals.push(
      isEn
        ? 'Hunched body posture / shrinking (Appeasement and acute vulnerability)'
        : 'Vücudu küçültme ve kamburlaşma (Yatıştırma ve savunmasızlık)'
    );
  } else if (input.bodyPosture === 'cowering_crouched') {
    postureScore += 12;
  } else if (input.bodyPosture === 'play_bow') {
    postureScore = 2; // Oyun pozisyonu risk düşürür
    scientificInsights.push(
      isEn
        ? 'Play Bow: Universal meta-communicative signal ("What follows is play, not aggression").'
        : 'Oyun Selamı (Play Bow): Evrensel meta-iletişim sinyali.'
    );
  }
  postureScore = Math.min(25, Math.max(0, postureScore));

  // 3. Yüz, Göz & Ağız Skoru (Max 20 Puan)
  let faceScore = 3;
  if (input.mouthFace === 'teeth_baring_snarl') {
    faceScore += 17;
  } else if (input.mouthFace === 'lip_licking_stress') {
    faceScore += 8;
    calmingSignals.push(
      isEn
        ? 'Lip / nose licking (Turid Rugaas calming signal)'
        : 'Dudak/Burun yalama (Turid Rugaas sakinleşme sinyali)'
    );
  } else if (input.mouthFace === 'yawning_stress') {
    faceScore += 7;
    calmingSignals.push(
      isEn
        ? 'Stress yawning (Autonomic cortisol balancing reflex)'
        : 'Stres esnemesi (Kortizol dengeleme refleksi)'
    );
  }

  if (input.eyeGaze === 'hard_stare') {
    faceScore += 10;
  } else if (input.eyeGaze === 'whale_eye') {
    faceScore += 9;
    scientificInsights.push(
      isEn
        ? 'Whale Eye: Sclera visibility indicates dog feels cornered or is near acute panic threshold.'
        : 'Balina Gözü: Köpeğin köşeye sıkışmışlık veya panik eşiğinde olduğunu gösterir.'
    );
  } else if (input.eyeGaze === 'avoidant') {
    faceScore += 4;
    calmingSignals.push(
      isEn
        ? 'Averting gaze / turning head away (Appeasement attempt)'
        : 'Bakışları kaçırma / başı çevirme (Yatıştırma girişimi)'
    );
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
    calmingSignals.push(
      isEn
        ? 'Pulling ears backward (Social politeness / appeasement)'
        : 'Kulakları geriye yatırma (Sosyal nezaket / yatıştırma)'
    );
  }
  earScore = Math.min(15, Math.max(0, earScore));

  // 5. Enerji & Hareket Skoru (Max 10 Puan)
  let energyScore = 2;
  if (input.energyMovement === 'frozen_still') {
    energyScore += 8; // En tehlikeli aşama (Freeze)
    scientificInsights.push(
      isEn
        ? 'Freezing (Freeze): Most critical threshold in 4F model; an active strike may follow immediately.'
        : 'Donma (Freeze): 4F modelindeki en kritik eşik; hemen ardından hamle gelebilir.'
    );
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
  let riskTitle = isEn ? 'LOW RISK (SAFE)' : 'DÜŞÜK RİSK (GÜVENLİ)';

  if (totalScore >= 66 || input.mouthFace === 'teeth_baring_snarl' || input.energyMovement === 'frozen_still') {
    riskLevel = 'red';
    riskTitle = isEn ? 'HIGH RISK (CAUTION & GIVE SPACE)' : 'YÜKSEK RİSK (DİKKAT & ALAN TANIMA)';
  } else if (totalScore >= 36) {
    riskLevel = 'yellow';
    riskTitle = isEn ? 'MODERATE RISK (CAUTIOUS APPROACH)' : 'ORTA RİSK (TEMKİNLİ YAKLAŞIM)';
  }

  // Ruh Hali Kategorisi (8 Kategori)
  let moodCategory = 'relaxed_happy';
  let moodTitle = isEn ? 'RELAXED & HAPPY' : 'RAHAT VE MUTLU';
  let moodSubtitle = isEn
    ? 'Dog is socially and physiologically in complete equilibrium.'
    : 'Köpek sosyal ve fizyolojik olarak tam dengede.';
  let summary = isEn
    ? `${dog} perceives the surroundings calmly and securely. Body language is loose, fluid, and open to positive social interaction.`
    : `${dog}, çevresini sakin ve güvenli bir şekilde algılıyor. Beden dili son derece gevşek ve açık; sosyal etkileşime uygun bir ruh halinde.`;
  let recommendedPlanCategory = 'mental_enrichment';

  if (input.bodyPosture === 'play_bow') {
    moodCategory = 'playful';
    moodTitle = isEn ? 'PLAYFUL & SOCIAL INVITATION' : 'OYUN VE SOSYALLEŞME İSTEĞİ';
    moodSubtitle = isEn
      ? 'Energetic, joyful, and extending an unmistakable play invitation.'
      : 'Enerjik, neşeli ve oyun daveti sunan pozitif mod.';
    summary = isEn
      ? `${dog} lowers the forequarters into a classic play bow. This meta-communicative stance confirms that upcoming rapid moves are recreational, not aggressive.`
      : `${dog}, ön gövdesini alçaltarak oyun selamı veriyor. Bu hareket, sonrasında yapacağı hamlelerin agresyon değil tamamen oyun amaçlı olduğunu karşı tarafa iletir.`;
    recommendedPlanCategory = 'basic_obedience';
  } else if (riskLevel === 'red' && (input.mouthFace === 'teeth_baring_snarl' || input.eyeGaze === 'hard_stare')) {
    moodCategory = 'threat_aggressive';
    moodTitle = isEn ? 'THREATENING / DEFENSE ALARM' : 'TEHDİTKÂR / SAVUNMA ALARMI';
    moodSubtitle = isEn
      ? 'Boundary violation perceived; defensive strike risk is acutely elevated.'
      : 'Sınır ihlali algısı; savunma amaçlı hamle riski çok yüksek.';
    summary = isEn
      ? `${dog} is issuing an unmistakable distance warning. Teeth baring or fixed staring is not "dominance"; it is an urgent boundary signal indicating severe distress and demanding immediate space.`
      : `${dog}, net bir mesafe uyarısı veriyor. Diş gösterme veya dik bakış, baskınlık değil; mevcut durumdan aşırı rahatsız olduğunu ve geri çekilmeniz gerektiğini bildiren son ikaz sinyalidir.`;
    recommendedPlanCategory = 'reactivity';
  } else if (input.tailPosition === 'tucked' || input.energyMovement === 'fleeing' || input.bodyPosture === 'arched_small') {
    moodCategory = 'fearful';
    moodTitle = isEn ? 'INTENSE FEAR & HELPLESSNESS' : 'YOĞUN KORKU VE ÇARESİZLİK';
    moodSubtitle = isEn
      ? 'Dog feels acutely threatened, insecure, and vulnerable.'
      : 'Köpek kendini tehlikede ve savunmasız hissediyor.';
    summary = isEn
      ? `${dog} attempts to become invisible by shrinking its posture and tucking its tail. Pressuring a dog in this state risks triggering defensive biting.`
      : `${dog}, bedenini küçülterek ve kuyruğunu saklayarak görünmez olmaya çalışıyor. Bu durumdaki bir köpeğin üzerine gitmek savunma amaçlı ısırmayı tetikleyebilir.`;
    recommendedPlanCategory = 'separation_anxiety';
  } else if (input.mouthFace === 'lip_licking_stress' || input.mouthFace === 'yawning_stress' || input.eyeGaze === 'avoidant') {
    moodCategory = 'stressed';
    moodTitle = isEn ? 'STRESSED & UNDER PRESSURE' : 'STRESLİ VE BASKI ALTINDA';
    moodSubtitle = isEn
      ? 'Calming signals activated; actively attempting to de-escalate ambient tension.'
      : 'Yatıştırma sinyalleri devrede; ortam gerginliğini düşürmeye çalışıyor.';
    summary = isEn
      ? `${dog} is displaying classic Turid Rugaas calming signals (lip licking, yawning, gaze aversion). It is asking for human or environmental pressure to be relieved.`
      : `${dog}, klasik Turid Rugaas sakinleşme sinyalleri (dudak yalama, esneme, göz kaçırma) veriyor. Sizden veya çevreden gelen baskıyı hafifletmek istiyor.`;
    recommendedPlanCategory = 'socialization';
  } else if (input.energyMovement === 'hyperactive_agitated' && input.tailSpeed === 'fast_frantic') {
    moodCategory = 'overstimulated';
    moodTitle = isEn ? 'OVERSTIMULATED (OVER-AROUSED)' : 'AŞIRI UYARILMIŞ (OVER-AROUSED)';
    moodSubtitle = isEn
      ? 'Dopamine and adrenaline are surging; cognitive impulse control is compromised.'
      : 'Dopamin ve adrenalin tavan yapmış; fren mekanizması zayıf.';
    summary = isEn
      ? `${dog} has exceeded its sensory arousal threshold. Excitement and reactivity easily blur; cognitive learning capacity is temporarily offline.`
      : `${dog}, yoğun uyarılma eşiğini aşmış durumda. Bu durumda heyecan ve reaktivite birbirine karışabilir; öğrenme kapasitesi kapalıdır.`;
    recommendedPlanCategory = 'loose_leash';
  } else if (input.energyMovement === 'explorative' || input.earPosition === 'pricked_forward') {
    moodCategory = 'curious';
    moodTitle = isEn ? 'CURIOUS & EXPLORATORY' : 'MERAKLI VE KEŞİF MODUNDA';
    moodSubtitle = isEn
      ? 'Mentally processing olfactory and environmental stimuli.'
      : 'Çevresel kokuları ve uyaranları zihinsel olarak işliyor.';
    summary = isEn
      ? `${dog} is keenly focused on an intriguing environmental detail without fear; engaged in healthy cognitive scanning.`
      : `${dog}, dikkatini çevresindeki ilginç bir detaya odaklamış. Korku belirtisi yok; bilişsel tarama yapıyor.`;
    recommendedPlanCategory = 'mental_enrichment';
  } else if (riskLevel === 'yellow') {
    moodCategory = 'cautious_uncertain';
    moodTitle = isEn ? 'UNCERTAIN & CAUTIOUS' : 'BELİRSİZ VE TEMKİNLİ';
    moodSubtitle = isEn
      ? 'Dog is evaluating whether the environment is secure or threatening.'
      : 'Köpek ortamı güvenli mi tehlikeli mi tartıyor.';
    summary = isEn
      ? `${dog} has not yet settled on an emotional state. Depending on external reactions, it may de-escalate into relaxation or escalate into fear.`
      : `${dog}, henüz net bir duygu kararı vermemiş. Karşıdan gelecek tepkiye göre korkuya ya da rahatlamaya geçebilir.`;
    recommendedPlanCategory = 'basic_obedience';
  }

  // Ne Yapmalı / Ne Yapmamalı
  const whatToDo: string[] = [];
  const whatNotToDo: string[] = [];

  if (riskLevel === 'red') {
    if (isEn) {
      whatToDo.push('Halt immediately and freeze; sever direct eye contact at once.');
      whatToDo.push('Turn your torso sideways (show your profile) and take slow steps backward.');
      whatToDo.push('Calmly and smoothly remove the triggering factor (person, dog, toy, etc.).');
      whatToDo.push('Ensure the dog has an unobstructed escape route; never corner it.');

      whatNotToDo.push('Never shout, lunge forward, or lean over the dog.');
      whatNotToDo.push('Do not stare directly into its eyes (perceived as direct intimidation/challenge).');
      whatNotToDo.push('Do not issue physical corrections or jerk the leash; this sparks adrenaline surges.');
      whatNotToDo.push('Never attempt to pet or hug the dog to calm it while teeth are bared.');
    } else {
      whatToDo.push('Hemen durun ve hareketsiz kalın; göz temasını derhal kesin.');
      whatToDo.push('Yavaşça yan dönün (köpeğe profilinizi gösterin) ve geriye doğru birkaç adım açılın.');
      whatToDo.push('Ortamdaki tetikleyici unsuru (insan, köpek, oyuncak vb.) sakin bir şekilde uzaklaştırın.');
      whatToDo.push('Köpeğin kaçış yolu varsa önünü kesinlikle kapatmayın.');

      whatNotToDo.push('Asla bağırmayın, köpeğe doğru hızlı adım atmayın veya üzerine eğilmeyin.');
      whatNotToDo.push('Gözlerinin içine dik dik bakmayın (bu doğrudan bir meydan okuma olarak algılanır).');
      whatNotToDo.push('Ceza vermeyin veya tasmayı aniden asılarak çekmeyin; adrenalin patlamasına yol açar.');
      whatNotToDo.push('Diş gösterirken sevmeye veya sakinleştirmek için sarılmaya çalışmayın.');
    }
  } else if (riskLevel === 'yellow') {
    if (isEn) {
      whatToDo.push('Grant the dog ample space to inspect and retreat at its own pace.');
      whatToDo.push('Crouch sideways and wait for the dog to approach voluntarily.');
      whatToDo.push('If the dog displays calming signals (yawning, lip licking), mirror by slightly turning your head.');
      whatToDo.push('Toss treats onto the ground a few paces away rather than extending your hand directly.');

      whatNotToDo.push('Do not reach over the top of the dog\'s head (gently touch chest or under chin instead).');
      whatNotToDo.push('Do not drag or force the dog toward the feared object or animal.');
      whatNotToDo.push('Do not frantically scoop the dog up into your arms with excessive excitement.');
    } else {
      whatToDo.push('Köpeğe kendi hızında inceleme ve geri çekilme alanı tanıyın.');
      whatToDo.push('Yere çömelerek yan durun ve köpeğin size yaklaşmasını bekleyin.');
      whatToDo.push('Eğer sakinleşme sinyali (esneme, göz kaçırma) veriyorsa siz de başınızı hafifçe yana çevirin.');
      whatToDo.push('Ödül mamasını doğrudan ağzına uzatmak yerine yere, birkaç adım uzağına atın.');

      whatNotToDo.push('Köpeğin başının üstünden uzanarak sevmeye çalışmayın (çene altı veya göğüs tercih edin).');
      whatNotToDo.push('Korktuğu nesneye veya canlıya doğru zorla çekiştirmeyin.');
      whatNotToDo.push('Korktuğu için köpeği kucağa alıp aşırı heyecanla teselli etmeye kalkmayın.');
    }
  } else {
    if (isEn) {
      whatToDo.push('Reinforce loose, calm body language with calm vocal praise and gentle affection.');
      whatToDo.push('Stimulate focus with cognitive scent games or puzzle activities.');
      whatToDo.push('Optimal moment for loose-leash walking practice and positive reinforcement training.');

      whatNotToDo.push('Avoid loud shouts or abrupt erratic movements that disturb calm equilibrium.');
      whatNotToDo.push('Do not force frontal nose-to-nose contact with strange dogs; allow natural curve approaches.');
    } else {
      whatToDo.push('Gevşek vücut dilini sakin ses tonuyla ve sevgiyle ödüllendirin.');
      whatToDo.push('Zihinsel oyunlar veya koku arama egzersizleriyle odaklanmasını destekleyin.');
      whatToDo.push('Gevşek tasma yürüyüşü ve temel itaat pratikleri için en ideal andasınız.');

      whatNotToDo.push('Aşırı bağırarak veya sert hareketlerle köpeğin sakinliğini aniden bozmayın.');
      whatNotToDo.push('Diğer canlılarla zoraki burun buruna temasa sokmayın; doğal selamlama yayını koruyun.');
    }
  }

  // Olası Nedenler
  const likelyCauses: string[] = [];
  if (input.trigger && input.trigger !== 'none') {
    const triggerMapTR: Record<string, string> = {
      stranger_human: 'Yabancı insanın doğrudan yaklaşması veya ani beden dili',
      other_dog: 'Karşıdaki köpeğin sert bakışı veya alan ihlali yapması',
      loud_noise: 'Ani patlama, korna, gök gürültüsü veya inşaat sesi',
      food_toy: 'Kıymetli bir kaynağı (kemik, oyuncak, mama) kaybetme endişesi',
      handling_touch: 'İstenmeyen fiziksel temas, tırnak kesimi veya veteriner manipülasyonu'
    };
    const triggerMapEN: Record<string, string> = {
      stranger_human: 'Direct approach or abrupt body language from an unfamiliar person',
      other_dog: 'Direct stare or spatial encroachment by another dog',
      loud_noise: 'Sudden loud noise, horn, thunder, or construction sound',
      food_toy: 'Anxiety over losing a high-value resource (bone, toy, food bowl)',
      handling_touch: 'Unwanted physical contact, restraint, or veterinary handling'
    };
    const mapped = isEn ? triggerMapEN[input.trigger] : triggerMapTR[input.trigger];
    likelyCauses.push(mapped || (isEn ? 'Environmental trigger factor' : 'Çevresel bir tetikleyici faktör'));
  } else {
    likelyCauses.push(
      isEn
        ? 'Ambient shift in environmental scent, sound, or emotional energy'
        : 'Ortamdaki koku, ses veya enerji değişimi'
    );
  }

  if (input.tailDirection === 'biased_left') {
    likelyCauses.push(
      isEn
        ? 'Neurological right-hemisphere activation: Unfamiliar or apprehension-inducing element in environment'
        : 'Nörolojik sağ hemisfer aktivasyonu: Ortamda tanıdık olmayan bir unsur var'
    );
  }
  if (input.bodyPosture === 'piloerection_hackles') {
    likelyCauses.push(
      isEn
        ? 'Unexpected startling stimulus inducing acute autonomic arousal'
        : 'Aşırı heyecan veya sürpriz yaratan beklenmedik bir uyaran'
    );
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
