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
          'Evin diğer ucuna geçin. Neşeli ve tiz bir sesle "Milo, Gel!" deyin.',
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

export function generatePersonalizedPlan(params: PlanGenerationParams): TrainingPlanEntity {
  const template = TEMPLATES[params.category] || TEMPLATES.basic_obedience;
  const exercises: TrainingExerciseItem[] = [];

  for (let day = 1; day <= params.durationDays; day++) {
    const templateIndex = (day - 1) % template.baseExercises.length;
    const base = template.baseExercises[templateIndex];

    const cycle = Math.floor((day - 1) / template.baseExercises.length) + 1;
    let dayTitle = base.title;
    let duration = base.durationMinutes;

    if (cycle > 1) {
      dayTitle = `${base.title} (Aşama ${cycle} - Dikkat Dağıtıcı Eklenmiş)`;
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

  return {
    id: 'plan_' + Date.now().toString(),
    dogId: params.dogId,
    dogName: params.dogName,
    category: params.category,
    planTitle: `${params.dogName.toUpperCase()} İÇİN ${template.title}`,
    durationDays: params.durationDays,
    level: params.level,
    createdAt: new Date().toISOString(),
    completedDays: [],
    exercises
  };
}
