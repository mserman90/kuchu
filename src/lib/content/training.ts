import { TrainingPlanEntity, TrainingExerciseItem } from '../data/types';

export interface PlanGenerationParams {
  dogId: string;
  dogName: string;
  breed: string;
  category: 'basic_obedience' | 'loose_leash' | 'separation_anxiety' | 'socialization' | 'reactivity' | 'mental_enrichment';
  durationDays: 7 | 14 | 30;
  level: 'beginner' | 'intermediate' | 'advanced';
  energyLevel: 'low' | 'medium' | 'high';
  ageYears: number;
}

const TEMPLATES: Record<string, { title: string; baseExercises: Omit<TrainingExerciseItem, 'day' | 'completed'>[] }> = {
  basic_obedience: {
    title: 'POZİTİF TEMEL İTAAT VE ODAK MÜFREDATI',
    baseExercises: [
      {
        title: 'Göz Teması ve İsim Koşullandırma',
        durationMinutes: 8,
        goal: 'Köpeğin ismini duyduğunda çevre dikkatini bırakıp doğrudan gözünüze bakması.',
        steps: [
          'Sessiz bir odada köpeğinizle oturun.',
          'İsmini bir kez söyleyin. Gözünüze baktığı milisaniyede "Evet!" deyip ödülü verin.',
          '10 tekrar yapın ve oyunu bitirin.'
        ],
        rewardTip: 'Tavuk göğsü veya ciğer ezmesi gibi yüksek değerli ödül kullanın.',
        calmingSignalWatch: 'Köpek göz temasından kaçınıyorsa vücudunuzu hafifçe yan çevirin.'
      },
      {
        title: 'Pozitif Otur (Luring Yöntemiyle)',
        durationMinutes: 10,
        goal: 'Kıçını yere zorla bastırmadan ödülle başını yukarı yönlendirip doğal oturma.',
        steps: [
          'Ödülü burnunun önüne koyun, yavaşça başının üstünden geriye doğru kaydırın.',
          'Başını yukarı kaldırdıkça kalçası otomatik yere değecektir. Değdiği an ödüllendirin.',
          'Asla kalçasına bastırmayın.'
        ],
        rewardTip: 'Küçük bezelye büyüklüğünde ödül tercih edin.',
        calmingSignalWatch: 'Dudak yalama görürseniz ödülü burnuna çok yapıştırmayın.'
      },
      {
        title: 'Bekle (Stay) - Mesafe ve Süre Ayrımı',
        durationMinutes: 10,
        goal: 'Otur pozisyonunda 5 saniye boyunca kıpırdamadan bekleme.',
        steps: [
          'Köpeği oturtun. Açık avcunuzu gösterip "Bekle" deyin.',
          'Yarım adım geri çekilin ve 2 saniye bekleyip hemen yanına dönüp ödülü verin.',
          'Süre ve mesafeyi aynı anda artırmayın.'
        ],
        rewardTip: 'Ödülü köpeğe uzatın, köpeğin ödül için ayağa kalkmasına izin vermeyin.',
        calmingSignalWatch: 'Kıpırdanma başlarsa bekleme süresini 1 saniyeye indirin.'
      },
      {
        title: '"Bırak" (Drop It) ve Takas Refleksi',
        durationMinutes: 12,
        goal: 'Ağzındaki bir nesneyi gönüllü ve neşeyle bırakma.',
        steps: [
          'Eline düşük değerli bir oyuncak verin.',
          'Burnuna karşı konulmaz bir peynir parçası uzatın.',
          'Oyuncağı ağzından düşürdüğü anda "Bırak" deyip peyniri verin.',
          'Oyuncağı geri verin (Bırakmanın nesneyi kaybetmek olmadığını anlasın).'
        ],
        rewardTip: 'Her zaman ağzındakinden daha lezzetli bir takas sunun.',
        calmingSignalWatch: 'Sert bakış veya hırlama olursa asla zorlamayın.'
      },
      {
        title: 'Geri Çağırma (Recall - "Gel!")',
        durationMinutes: 10,
        goal: 'Evin içinde çağrıldığında koşarak gelme refleksi.',
        steps: [
          'Evin diğer ucuna geçin. Neşeli ve tiz bir sesle "Kuçu, Gel!" deyin.',
          'Geldiği an parti yapın; coşkuyla sevin ve 3-4 parça ödülü ardı ardına verin.',
          'Asla ceza vermek, banyo yaptırmak veya tırnak kesmek için çağırmayın.'
        ],
        rewardTip: 'Ödül kraker veya sıradan mama olmasın; özel sosis kullanın.',
        calmingSignalWatch: 'Yavaşça esneyerek geliyorsa ses tonunuzu daha yumuşak yapın.'
      },
      {
        title: 'Yat (Down) ve Gevşeme Modu',
        durationMinutes: 10,
        goal: 'Dirseklerini yere koyarak sakin bekleme.',
        steps: [
          'Oturur vaziyetteyken ödülü burnundan iki ön patisinin ortasına doğru yere indirin.',
          'Dirsekleri yere değdiği salisede "Evet!" deyin.',
          'Sakin ses tonu kullanın.'
        ],
        rewardTip: 'Yat komutunda sakin ve yavaş ödülleme tercih edilir.',
        calmingSignalWatch: 'Yatarken derin bir iç çekme gevşeme işaretidir.'
      },
      {
        title: 'Haftalık Pekiştirme ve Mini Parkur',
        durationMinutes: 15,
        goal: 'Otur, Bekle ve Gel komutlarını akıcı bir oyun zincirine dönüştürme.',
        steps: [
          'Evin içinde kısa bir parkur oluşturun.',
          'Her başarılı komuttan sonra coşkulu bir çekiştirme oyunu oynayın.',
          'Seansı her zaman köpek çok mutluyken bitirin.'
        ],
        rewardTip: 'Sevdiği bir halat oyuncağı ile ödüllendirin.',
        calmingSignalWatch: 'Aşırı heyecanlanırsa 2 dakika mola verin.'
      }
    ]
  },
  loose_leash: {
    title: 'GEVŞEK TASMA YÜRÜYÜŞÜ MÜFREDATI',
    baseExercises: [
      {
        title: 'Tasmayı Ev İçinde Sevdirme',
        durationMinutes: 8,
        goal: 'Göğüs tasması takıldığında dona kalma veya kaçma refleksini kırma.',
        steps: [
          'Tasmayı yere koyun, üstüne ödül mamaları saçın.',
          'Tasmayı kokladıkça ödüllendirin.',
          'Tasmayı giydirip hemen çıkarın ve ödül verin.'
        ],
        rewardTip: 'Tasma = Bayram algısı yaratın.',
        calmingSignalWatch: 'Tasmayı görünce esniyorsa alıştırma adımlarını yavaşlatın.'
      },
      {
        title: 'Koridorda Adım Takibi (Tasma Yokken)',
        durationMinutes: 10,
        goal: 'Köpeğin tasmasızken bile sahibinin yanında yürüme motivasyonu.',
        steps: [
          'Koridorda yürüyün, yanınıza her geldiğinde sol diz hizanızda ödül verin.',
          'Ters yöne dönün, sizi takip edince tekrar ödüllendirin.'
        ],
        rewardTip: 'Ödülü mutlaka sol bacağınızın yan hizasında verin (Öne uzatmayın).',
        calmingSignalWatch: 'Yanınızda yürürken size bakıp göz kırpıyorsa harika bağ kurulmuştur.'
      },
      {
        title: 'Kırmızı Işık - Yeşil Işık Egzersizi',
        durationMinutes: 12,
        goal: 'Tasma gerildiğinde ilerlemenin imkansız olduğunu öğretme.',
        steps: [
          'Tasma takın. Köpek tasmayı gerdiği an heykel gibi durun.',
          'Asla köpeği geri çekmeyin. Sadece direk gibi bekleyin.',
          'Geri dönüp tasmayı gevşettiği an yürümeye devam edin.'
        ],
        rewardTip: 'İlerlemenin kendisi köpeğe en büyük ödüldür.',
        calmingSignalWatch: 'Tasma gerilince nefes nefese kalıyorsa göğüs tasmasına geçin.'
      },
      {
        title: 'Bahçede veya Sakin Sokakta 10 Metre Pratiği',
        durationMinutes: 12,
        goal: 'Düşük uyaranlı dış ortamda gevşek tasma ile 10 adım atma.',
        steps: [
          'Sokağa çıkın. İlk 5 adımda her adımda bir ödül verin.',
          'Burnu yerde koklarken izin verin; çekmeye başladığı an durun.'
        ],
        rewardTip: 'Dış ortamda ödülün değeri 2 katına çıkmalıdır (Kaşar peyniri).',
        calmingSignalWatch: 'Karşıdan başka bir köpek geliyorsa güvenli mesafeye kavis çizin.'
      },
      {
        title: 'U Dönüşü Oyunu',
        durationMinutes: 10,
        goal: 'Köpek odak kaybettiğinde yön değiştirerek dikkati taze tutma.',
        steps: [
          'Köpek öne doğru odaklandığında "Hop!" deyip 180 derece ters yöne dönün.',
          'Peşinizden koşup hizalandığında ödüllendirin.'
        ],
        rewardTip: 'Neşeli bir ses tonu kullanın.',
        calmingSignalWatch: 'Ani çekişlerde boyun gerginliğini izleyin.'
      },
      {
        title: 'Koklama Molaları (Sniffari) ile Ödüllendirme',
        durationMinutes: 15,
        goal: 'Düzgün yürüyüşün ardından "Git kokla" serbestisi sunma.',
        steps: [
          '10 adım gevşek yürüdükten sonra "Serbest!" deyip çimlik alana koklamaya bırakın.',
          'Köpekler için koklamak sosyal medyayı taramak gibidir.'
        ],
        rewardTip: 'Koklama serbestisi en güçlü doğal pekiştireçtir.',
        calmingSignalWatch: 'Çimleri koklarken kuyruğun rahatça sallandığını gözlemleyin.'
      },
      {
        title: 'Genel Değerlendirme Yürüyüşü',
        durationMinutes: 15,
        goal: '20 dakikalık standart yürüyüş rotasında gerginlik oranını %80 azaltma.',
        steps: [
          'Rotayı sakin sokaklardan seçin.',
          'Çektiğinde sakin durun; gevşekken yürüyün.'
        ],
        rewardTip: 'Yürüyüş sonunda evde çiğneme kemiği verin.',
        calmingSignalWatch: 'Yürüyüş bitiminde silkinme (shake-off) stres attığını gösterir.'
      }
    ]
  }
};

const TEMPLATES_EN: Record<string, { title: string; baseExercises: Omit<TrainingExerciseItem, 'day' | 'completed'>[] }> = {
  basic_obedience: {
    title: 'POSITIVE BASIC OBEDIENCE & FOCUS CURRICULUM',
    baseExercises: [
      {
        title: 'Eye Contact & Name Conditioning',
        durationMinutes: 8,
        goal: 'Condition the dog to disengage from distractions and make direct eye contact upon hearing their name.',
        steps: [
          'Sit with your dog in a quiet room.',
          'Say their name once. The millisecond they look into your eyes, say "Yes!" and deliver a treat.',
          'Repeat 10 times and end the game on a high note.'
        ],
        rewardTip: 'Use high-value rewards like boiled chicken breast or freeze-dried liver.',
        calmingSignalWatch: 'If the dog averts eye contact, soften your posture by turning slightly sideways.'
      },
      {
        title: 'Positive Sit (Luring Method)',
        durationMinutes: 10,
        goal: 'Guide a natural sit by leading the nose upward without physically forcing the hips down.',
        steps: [
          'Hold a treat at their nose and slowly move it backward over the forehead.',
          'As the head tilts up, the rear naturally lowers to the floor. Reward the moment hips touch.',
          'Never push down on their hips.'
        ],
        rewardTip: 'Use pea-sized soft treats to keep repetitions rapid.',
        calmingSignalWatch: 'If you observe lip licking, hold the lure slightly further away.'
      },
      {
        title: 'Stay - Splitting Duration and Distance',
        durationMinutes: 10,
        goal: 'Hold a sit-stay position for 5 seconds without moving.',
        steps: [
          'Ask for a sit. Show a flat palm and say "Stay".',
          'Take half a step backward, pause for 2 seconds, step back to their side, and reward.',
          'Never increase distance and duration simultaneously.'
        ],
        rewardTip: 'Deliver the treat directly to their mouth so they do not break position.',
        calmingSignalWatch: 'If fidgeting begins, reduce duration to 1 second.'
      },
      {
        title: '"Drop It" & Trade-Up Reflex',
        durationMinutes: 12,
        goal: 'Voluntarily and eagerly release held items from the mouth.',
        steps: [
          'Offer a low-value toy for the dog to hold.',
          'Present an irresistible piece of cheese directly in front of their nose.',
          'The moment the toy drops from their mouth, say "Drop" and feed the cheese.',
          'Return the toy immediately so they learn dropping does not equal losing possessions.'
        ],
        rewardTip: 'Always offer a trade higher in value than the held item.',
        calmingSignalWatch: 'If you notice a stiff unblinking stare or low growl, never force retrieval.'
      },
      {
        title: 'Reliable Recall ("Come!")',
        durationMinutes: 10,
        goal: 'Build an enthusiastic sprint toward you when called inside the home.',
        steps: [
          'Have a partner gently hold the dog while you take 5 steps away with excitement.',
          'Call their name + "Come!" in a cheerful tone. When released, throw a celebration jackpot.',
          'Never call your dog to punish them or give medication.'
        ],
        rewardTip: 'Deliver 3 treats in rapid succession (Jackpot effect).',
        calmingSignalWatch: 'If the dog approaches in a wide arc, they are politely self-calming; praise softly.'
      }
    ]
  },
  loose_leash: {
    title: 'LOOSE LEASH WALKING & CHECK-IN CURRICULUM',
    baseExercises: [
      {
        title: 'Handler Proximity Zone in Living Room',
        durationMinutes: 8,
        goal: 'Condition walking beside your hip indoors before adding outdoor distractions.',
        steps: [
          'Walk around the living room off-leash with treats in hand.',
          'Praise and reward every time the dog voluntarily walks alongside your knee.',
          'Keep sessions short and fun.'
        ],
        rewardTip: 'Deliver treats precisely at your seam-line so the dog stays parallel.',
        calmingSignalWatch: 'Ensure head and tail remain loose and fluid.'
      },
      {
        title: 'Red-Light Green-Light Leash Game',
        durationMinutes: 12,
        goal: 'Teach that leash tension causes movement to freeze instantly.',
        steps: [
          'Attach the leash in a quiet hallway.',
          'The moment the leash tightens, freeze like a tree. Walk forward only when the line is slack.',
          'Never yank the leash back; let environmental feedback do the teaching.'
        ],
        rewardTip: 'Forward motion is the primary reward.',
        calmingSignalWatch: 'Watch for a full-body shake-off after pressure releases.'
      },
      {
        title: '180-Degree Direction Changes',
        durationMinutes: 10,
        goal: 'Encourage constant check-ins by changing direction whenever the dog pulls ahead.',
        steps: [
          'Walk in your driveway or quiet sidewalk.',
          'When the dog pulls forward, say a cheerful "This way!" and turn 180 degrees.',
          'Reward the instant they catch up and match your pace.'
        ],
        rewardTip: 'Use high-value smelly treats for outdoor distraction environments.',
        calmingSignalWatch: 'If the dog pants rapidly, step into a quiet driveway to decompress.'
      }
    ]
  }
};

export function generatePersonalizedPlan(params: PlanGenerationParams, lang: 'tr' | 'en' = 'tr'): TrainingPlanEntity {
  const templateSource = lang === 'en' ? TEMPLATES_EN : TEMPLATES;
  const template = templateSource[params.category] || templateSource.basic_obedience || TEMPLATES.basic_obedience;
  const exercises: TrainingExerciseItem[] = [];

  for (let day = 1; day <= params.durationDays; day++) {
    const templateIndex = (day - 1) % template.baseExercises.length;
    const base = template.baseExercises[templateIndex];

    const cycle = Math.floor((day - 1) / template.baseExercises.length) + 1;
    let dayTitle = base.title;
    let duration = base.durationMinutes;

    if (cycle > 1) {
      dayTitle = lang === 'en'
        ? `${base.title} (Phase ${cycle} - Distractions Added)`
        : `${base.title} (Aşama ${cycle} - Dikkat Dağıtıcı Eklenmiş)`;
      duration = Math.min(20, duration + 2);
    }

    exercises.push({
      day,
      title: dayTitle,
      durationMinutes: duration,
      goal: base.goal,
      steps: base.steps,
      rewardTip: base.rewardTip,
      calmingSignalWatch: base.calmingSignalWatch,
      completed: false
    });
  }

  const titlePrefix = lang === 'en'
    ? `${params.dogName.toUpperCase()} — ${template.title}`
    : `${params.dogName.toUpperCase()} İÇİN ${template.title}`;

  return {
    id: 'plan_' + Date.now().toString(),
    dogId: params.dogId,
    dogName: params.dogName,
    category: params.category,
    planTitle: titlePrefix,
    durationDays: params.durationDays,
    level: params.level,
    createdAt: new Date().toISOString(),
    completedDays: [],
    exercises
  };
}
