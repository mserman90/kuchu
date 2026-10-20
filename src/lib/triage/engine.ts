import { TriageQuestion, TriageAnswers, TriageSolution } from './types';

export const TRIAGE_QUESTIONS: TriageQuestion[] = [
  {
    id: 'primarySymptom',
    stepNumber: 1,
    title: 'TEMEL DAVRANIŞ BELİRTİSİ',
    subtitle: 'Köpeğinizde en çok zorlandığınız ve anında çözmek istediğiniz ana davranış nedir?',
    options: [
      {
        id: 'symptom_barking',
        label: 'Aşırı Havlama & Alarm',
        description: 'Kapı ziline, pencereden geçenlere, sokakta veya sebepsiz yere durmayan havlama.',
        icon: '🔊'
      },
      {
        id: 'symptom_biting',
        label: 'Isırma, Hırlama veya Eşya/Mama Koruma',
        description: 'Ellere diş geçirme, mama kabına/oyuncağa yaklaşınca hırlama veya koruma agresyonu.',
        icon: '🦷'
      },
      {
        id: 'symptom_separation',
        label: 'Yalnız Kalamama & Uluma',
        description: 'Evde yalnız kaldığında kapıları tırmalama, uluma, salya akıtma ve eşyaları parçalama.',
        icon: '🚪'
      },
      {
        id: 'symptom_leash',
        label: 'Tasma Çekiştirme & Reaktivite',
        description: 'Yürüyüş boyunca sahibini sürükleme veya yoldaki diğer köpeklere/insanlara atılma.',
        icon: '🦮'
      },
      {
        id: 'symptom_potty',
        label: 'Tuvalet Kaçırma & Eve Yapma',
        description: 'Önceden dışarı yapan köpeğin eve, halılara veya yatağa aniden idrar/dışkı bırakması.',
        icon: '🚽'
      },
      {
        id: 'symptom_fear',
        label: 'Gök Gürültüsü, Havai Fişek & Ses Korkusu',
        description: 'Fırtına, patlama veya ani gürültülerde titreme, banyoya saklanma ve panikleme.',
        icon: '⚡'
      },
      {
        id: 'symptom_jumping',
        label: 'İnsanların Üzerine Çılgınca Zıplama',
        description: 'Eve biri geldiğinde veya yolda sevinçten insanların üzerine atlayıp kıyafetleri kirletme.',
        icon: '🐾'
      },
      {
        id: 'symptom_senior',
        label: 'Yaşlılık, Yön Kaybı & Gece Turlaması',
        description: 'Odada sıkışıp kalma, kapıyı şaşırma, gece uyumayıp volta atma ve boşluğa bakma.',
        icon: '⏳'
      }
    ]
  },
  {
    id: 'timelineOnset',
    stepNumber: 2,
    title: 'BAŞLANGIÇ ZAMANI VE TETİKLEYİCİ ŞEKLİ',
    subtitle: 'Bu davranış ne zaman ve hangi koşullarda ortaya çıkıyor?',
    options: [
      {
        id: 'onset_sudden',
        label: 'Aniden Başladı (Son Günlerde / Haftalarda)',
        description: 'Daha önce hiç yapmadığı halde sebepsizce son günlerde başladı (Kritik Tıbbi/Ağrı Riski).',
        icon: '🚨'
      },
      {
        id: 'onset_puppy',
        label: 'Aylardır / Yavruluktan Beri Var',
        description: 'Uzun süredir devam eden ve kademeli olarak kemikleşen bir alışkanlık.',
        icon: '📅'
      },
      {
        id: 'onset_trigger',
        label: 'Sadece Belirli Bir Tetikleyici Anında',
        description: 'Zil çaldığında, başka bir köpek gördüğünde veya mama yerken ortaya çıkıyor.',
        icon: '🎯'
      },
      {
        id: 'onset_separation',
        label: 'Yalnız Kalınca veya Kapı Kapanınca',
        description: 'Yalnız kaldığı ilk 15 dakika içinde kriz şeklinde tetikleniyor.',
        icon: '🗝️'
      },
      {
        id: 'onset_night',
        label: 'Gece / Karanlık Çöktüğünde Artıyor',
        description: 'Gündüzleri sakin, akşam ve gece saatlerinde belirginleşen huzursuzluk.',
        icon: '🌙'
      }
    ]
  },
  {
    id: 'dogAgeGroup',
    stepNumber: 3,
    title: 'KÖPEĞİNİZİN YAŞ DÖNEMİ',
    subtitle: 'Yaş dönemi beynin gelişim evresini ve olası hormonal/tıbbi zeminleri belirler.',
    options: [
      {
        id: 'age_puppy',
        label: 'Yavru (0 - 6 Ay)',
        description: 'Süt dişleri dönemi, kritik sosyalleşme penceresi ve ısırma inhibisyonu evresi.',
        icon: '🍼'
      },
      {
        id: 'age_adolescent',
        label: 'Ergen / Genç (6 - 24 Ay)',
        description: 'Hormonal dalgalanmalar, sınır deneme, ikinci korku dönemi ve yüksek fiziksel enerji.',
        icon: '⚡'
      },
      {
        id: 'age_adult',
        label: 'Yetişkin (2 - 7 Yaş)',
        description: 'Karakteri oturmuş, sosyal olgunluğa erişmiş dönem.',
        icon: '🐕'
      },
      {
        id: 'age_senior',
        label: 'Kıdemli / Yaşlı (8 Yaş ve Üzeri)',
        description: 'Duyusal azalma (göz/kulak), artrit/eklem ağrıları ve Kognitif Disfonksiyon (CDS) evresi.',
        icon: '🧓'
      }
    ]
  },
  {
    id: 'bodyLanguageStress',
    stepNumber: 4,
    title: 'BEDEN DİLİ VE STRES DÜZEYİ',
    subtitle: 'Köpeğiniz bu davranış anında bedeniyle hangi sinyalleri veriyor?',
    options: [
      {
        id: 'stress_freeze',
        label: 'Kaskatı Kesilme & Sabit Dik Bakış (Donma)',
        description: 'Vücut taş gibi sert, gözlerini hedefe dikmiş, ağız kapalı (Yüksek ısırık/savunma riski).',
        icon: '🧊'
      },
      {
        id: 'stress_fear',
        label: 'Korku & Çekilme (Kuyruk Bacak Arasında)',
        description: 'Kulaklar kafaya yapışık, göz akı görünüyor (Balina gözü), kaçmaya çalışıyor.',
        icon: '😨'
      },
      {
        id: 'stress_hyper',
        label: 'Aşırı Uyarılma & Kontrolsüz Enerji (Arousal)',
        description: 'Ağız açık dil dışarıda, hızlı nefes, yerinde duramama, heyecan patlaması.',
        icon: '🔥'
      },
      {
        id: 'stress_calming',
        label: 'Yatıştırıcı Sinyaller (Dudak Yalama / Esneme)',
        description: 'Yemek yokken burnunu yalama, stres esnemesi, başını yana çevirme.',
        icon: '🕊️'
      },
      {
        id: 'stress_relaxed',
        label: 'Gevşek & Rahat Vücut',
        description: 'Kuyruk orta yükseklikte rahatça sallanıyor, kaslar gevşek, oyun arzusu.',
        icon: '😊'
      }
    ]
  },
  {
    id: 'ownerReaction',
    stepNumber: 5,
    title: 'SİZİN ŞU ANKİ MÜDAHALENİZ',
    subtitle: 'Davranış gerçekleştiğinde genellikle ilk olarak ne yapıyorsunuz?',
    options: [
      {
        id: 'reaction_punish',
        label: '"Hayır / Yapma!" Diye Bağırma veya İtme',
        description: 'Sözlü kızma, tasmasını sertçe çekme veya fiziksel müdahale ile engellemeye çalışma.',
        icon: '🗣️'
      },
      {
        id: 'reaction_comfort',
        label: 'Sakinleştirmek İçin Sevme, Konuşma veya Ödül Verme',
        description: 'Kucağa alma, kafasını okşama veya dikkatini çekmek için mama uzatma.',
        icon: '🤗'
      },
      {
        id: 'reaction_ignore',
        label: 'Arkamı Dönme / Tamamen İletişimi Kesme',
        description: 'Göz temasını kesip hiçbir tepki vermeden beklemek.',
        icon: '🚶'
      },
      {
        id: 'reaction_helpless',
        label: 'Ne Yapacağımı Bilemeyip Bitmesini Bekleme',
        description: 'Olay anında kontrolü kaybetme veya çaresiz kalma.',
        icon: '❓'
      }
    ]
  }
];

function getReactionAdvice(reaction?: string): string[] {
  if (reaction === 'reaction_punish') {
    return ['Mevcut bağırma veya cezalandırma tepkiniz köpekte stres hormonunu (kortizol) yükseltmekte; bunu derhal durdurun.'];
  }
  if (reaction === 'reaction_comfort') {
    return ['Davranış anında köpeği okşamak veya konuşmak köpeğe istemsiz ilgi ödülü vermekte; davranışı pekiştirmeyin.'];
  }
  return [];
}

export function resolveTriageSolution(answers: TriageAnswers, dogName: string = 'Köpeğiniz'): TriageSolution {
  const { primarySymptom, timelineOnset, dogAgeGroup, bodyLanguageStress, ownerReaction } = answers;
  const customMistakes = getReactionAdvice(ownerReaction);

  // RULE 1: Sudden onset in any dog -> High probability of underlying pain / medical issue
  if (timelineOnset === 'onset_sudden' && (primarySymptom === 'symptom_biting' || primarySymptom === 'symptom_barking' || primarySymptom === 'symptom_potty')) {
    if (primarySymptom === 'symptom_potty') {
      return {
        diagnosisTitle: 'Tıbbi Kaynaklı Tuvalet Bozulması (Sistit / Üriner Sistem Şüphesi)',
        category: 'potty_regression',
        urgencyLevel: 'high',
        confidencePercentage: 92,
        clinicalSummary: `${dogName} için daha önce dışarı yaparken aniden eve yapmaya başlaması, vakaların %65'inde idrar yolu enfeksiyonu (sistit), kristal/taş veya diyabet/Cushing gibi endokrin rahatsızlıklara bağlıdır.`,
        rootCause: 'Mesanede yanma veya kontrolsüz idrar tutamama hissi nedeniyle bilinçdışı tuvalet kaçırma.',
        redFlags: [
          'Sık sık az miktarda damlatma veya idrar yaparken sızlanma',
          'İdrarda pembeleşme veya aşırı genital bölge yalama'
        ],
        merck3MPlan: {
          management: 'Halılardaki kokuları kesinlikle amonyaklı temizleyiciler yerine enzimatik spreylerle nötrleştirin; dışarı çıkarma sıklığını geçici olarak 2 saatte bire çıkarın.',
          modification: 'Tıbbi tedavi tamamlanana kadar ceza vermeyin; dışarıda her yapışında son damla düştüğü an ödüllendirin.',
          responseSubstitution: 'Tepki İkamesi: Kapı önünde zil çalarak dışarı çıkma isteğini haber verme eğitimi (Pati Zili).',
          medicalThreshold: 'ACİL: Davranış eğitimi uygulamadan önce derhal veteriner idrar tahlili ve biyokimya yaptırılmalıdır.'
        },
        immediateActionSteps: [
          'İlk 24 saat içinde veteriner kliniğinden idrar tahlili randevusu alın.',
          'Su tüketimini ve idrar sıklığını bir gün boyunca not edin.',
          'Eve kaçırdığında asla kızmayın veya burnunu sürtmeyin.'
        ],
        ownerMistakesToStop: [
          ...customMistakes,
           ...customMistakes,
          'Eve yaptığı için saatler sonra ceza vermek (köpekte derin güvensizlik yaratır).',
          'Suyu kısıtlamak (böbrek hasarına yol açabilir).'
        ],
        recommendedProblemSlug: 'tuvalet-egitimi-gerilemesi-eve-yapma',
        recommendedArticleSlug: 'merck-3m-davranis-modifikasyon-modeli',
        recommendedPlanType: 'basic_obedience'
      };
    }

    // Sudden Biting / Aggression
    return {
      diagnosisTitle: 'Akut Ağrı Kaynaklı Savunma Agresyonu (Pain-Induced Aggression)',
      category: 'pain_medical',
      urgencyLevel: 'critical',
      confidencePercentage: 95,
      clinicalSummary: `Merck Veterinary Manual klinik prensibine göre; daha önce agresif olmayan bir köpekte aniden başlayan hırlama veya ısırma vakalarının büyük çoğunluğunda GİZLİ FİZİKSEL AĞRI (artrit, kulak iltihabı, diş çürüğü veya omurga hassasiyeti) yatmaktadır.`,
      rootCause: 'Köpek acı çeken bölgesine dokunulmasından korkmakta ve savunma amacıyla sınır çizmektedir.',
      redFlags: [
        'Belirli bir bölgeye (kulak, sırt, patiler) dokunulduğunda irkilme veya inleme',
        'Yürümek, kalkmak veya zıplamak istememe',
        'Kaskatı kesilme (Donma) ve dik bakış'
      ],
      merck3MPlan: {
        management: 'Köpeğe fiziksel alan tanıyın; ona sarılmayın, zorla yatağından kaldırmayın ve çocukları derhal uzak tutun.',
        modification: 'Ağrı hekim tarafından dindirilene kadar hiçbir davranış çalışması yapılamaz.',
        responseSubstitution: 'Tepki İkamesi: Köpeğe yaklaşmak yerine, köpeğin kendi isteğiyle size gelip 1 metre uzakta oturmasını bekleyin.',
        medicalThreshold: 'Hayati Kural: Eğitimden önce derhal tam ortopedik muayene ve diş kontrolü şarttır.'
      },
      immediateActionSteps: [
        'Bugün köpeğe gereksiz temaslardan kaçının ve kendi güvenli alanında dinlenmesine izin verin.',
        'Veteriner hekiminizden ağrı taraması talep edin.',
        'Hırladığı an geri çekilin; hırlamayı cezalandırmayın.'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          '"Bana karşı çıkamaz" diyerek köpeği sırt üstü yatırmaya (alpha roll) çalışmak (ısırık garantiler).',
        'Acı çektiğini fark etmeyip köpeği inatçılıkla suçlamak.'
      ],
      recommendedProblemSlug: 'kaynak-koruma-mama-oyuncak-agresyonu',
      recommendedArticleSlug: 'merck-kopeklerde-agresyon-taksonomisi',
      recommendedPlanType: 'reactivity'
    };
  }

  // RULE 2: Senior dog with nighttime pacing or disorientation -> DISHAA / Cognitive Dysfunction
  if (dogAgeGroup === 'age_senior' && (primarySymptom === 'symptom_senior' || timelineOnset === 'onset_night' || primarySymptom === 'symptom_potty')) {
    return {
      diagnosisTitle: 'Köpek Kognitif Disfonksiyon Sendromu (CDS - DISHAA Demans)',
      category: 'senior_dishaa',
      urgencyLevel: 'high',
      confidencePercentage: 90,
      clinicalSummary: `Merck Kılavuzu Geriatrik Etoloji verilerine göre ${dogName}, yaşa bağlı beyin beta-amiloid birikimi ve nörolojik gerileme (Köpek Demansı) belirtileri gösteriyor.`,
      rootCause: 'Beynin yön bulma, zaman algısı ve tuvalet inhibisyonu merkezlerindeki hücresel yaşlanma.',
      redFlags: [
        'Kapının menteşe tarafında şaşkınca bekleme',
        'Gece boyunca evde amaçsızca volta atma ve karanlıkta inleme',
        'Gözlerini duvara dikip dalıp gitme'
      ],
      merck3MPlan: {
        management: 'Evdeki eşyaların yerini asla değiştirmeyin; kaygan zeminlere yolluklar serin; gece lambaları yakarak yön bulmasına yardım edin.',
        modification: 'Hafif koku oyunları (koklama matları) ile zihinsel nöronları canlı tutun.',
        responseSubstitution: 'Tepki İkamesi: Gece volta atmaya başladığında hafifçe yönlendirerek ortopedik hafızalı yatağına yatırma.',
        medicalThreshold: 'Veteriner hekim kognitif koruma protokolü (Antioksidan, DHA/EPA omega-3 ve nöroprotektif diyet) şarttır.'
      },
      immediateActionSteps: [
        'DISHAA kontrol listesiyle belirtileri haftalık olarak kaydedin.',
        'Karanlık odalara gece lambası yerleştirin.',
        'Veteriner hekiminizle geriatrik kognitif destekleri görüşün.'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          'Şaşkınlık ve yön kaybı anlarında köpeğe kızmak (anksiyetesini katlar).',
        'Zihinsel uyarımı tamamen kesip tüm gün uyumasına izin vermek.'
      ],
      recommendedProblemSlug: 'tuvalet-egitimi-gerilemesi-eve-yapma',
      recommendedArticleSlug: 'merck-yasli-kopeklerde-dishaa-ve-demans',
      recommendedPlanType: 'mental_enrichment'
    };
  }

  // RULE 3: Puppy biting -> Bite inhibition & teething
  if (dogAgeGroup === 'age_puppy' && primarySymptom === 'symptom_biting') {
    return {
      diagnosisTitle: 'Yavru Isırık İnhibisyonu Eksikliği ve Diş Kaşıntısı',
      category: 'biting_aggression',
      urgencyLevel: 'low',
      confidencePercentage: 94,
      clinicalSummary: `Bu bir agresyon bozukluğu değildir. 0-6 ay arasındaki yavrular çene gücünü ve insan derisinin hassasiyetini henüz öğrenmemiştir (Merck 3-8 hafta intra-spesifik öğrenim süreci).`,
      rootCause: 'Süt dişlerinin dökülmesi, çene kası keşfi ve aşırı uyarılmada oyun ısırığı.',
      redFlags: [
        'Elleri çekerken av refleksiyle daha hızlı saldırma',
        'Yoruldukça çılgınca paçaya asılma'
      ],
      merck3MPlan: {
        management: 'Yavruyu serbest bırakmak yerine oyun çiti (playpen) ile sınırlandırın; ellerinizi hızla kaçırmayın.',
        modification: 'Canınız yandığı anda "AYK!" sesiyle oyunu 15 saniye dondurun (Negatif Ceza -P).',
        responseSubstitution: 'Tepki İkamesi (DRI): Size koştuğunda ağzına derhal kauçuk veya ip oyuncağı almasını pekiştirin.',
        medicalThreshold: '6 aydan sonra yetişkin dişler çıkınca yaralayıcı ısırma devam ederse hekime danışın.'
      },
      immediateActionSteps: [
        'Elinizi ısırdığında ellerinizi saklayın ve arkanızı dönün.',
        'Daima yanınızda soğutulmuş bir çiğneme oyuncağı bulundurun.',
        'Çok azıttığında sakin bir odaya uyku molasına yatırın.'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          'Ağzını elle sıkmak veya burnuna vurmak (güven yıkımı ve el korkusu yaratır).',
        'Ellerle güreşerek köpeği kışkırtmak.'
      ],
      recommendedProblemSlug: 'yavru-kopek-isirmasi-paca-el',
      recommendedArticleSlug: 'merck-normal-sosyal-davranis-ve-suru-yapisi',
      recommendedPlanType: 'basic_obedience'
    };
  }

  // RULE 4: Separation Anxiety
  if (primarySymptom === 'symptom_separation' || timelineOnset === 'onset_separation') {
    return {
      diagnosisTitle: 'Ayrılık Anksiyetesi & Sosyal İzolasyon Paniği',
      category: 'separation_anxiety',
      urgencyLevel: 'high',
      confidencePercentage: 91,
      clinicalSummary: `Ayrılık anksiyetesi bir yaramazlık değil; köpeğin tek başına kaldığında yaşadığı fizyolojik bir panik atağıdır. Beyinde kortizol ve kalp atışı dakikalar içinde tavan yapar.`,
      rootCause: 'Köpeklerin sosyal doğası gereği tek başına hayatta kalamayacağı içgüdüsel korkusu.',
      redFlags: [
        'Kapı altlarını tırnakları kanayana kadar kazıma',
        'Hiperventilasyon (nefes nefese kalma) ve salya göllenmesi',
        'Sürekli tiz uluma ve komşuları rahatsız etme'
      ],
      merck3MPlan: {
        management: 'Eğitim süresince köpeği asla panik eşiğinde yalnız bırakmayın (köpek kreşi, bakıcı desteği).',
        modification: 'Mikro ayrılıklar (Sub-Threshold): Önce 2 saniye kapıyı kapatıp dönün; sakin kaldıkça süreyi artırın.',
        responseSubstitution: 'Tepki İkamesi: Çıkış anında dondurulmuş fıstık ezmeli Kong oyuncağını yalama davranışı (Yalama endorfin salgılar).',
        medicalThreshold: 'Kendine fiziksel zarar verme eşiğinde veteriner hekim reçeteli anksiyolitik desteği zorunludur.'
      },
      immediateActionSteps: [
        'Evden çıkış ipuçlarını (anahtarlar, ayakkabılar) gün içinde giyip oturarak anlamsızlaştırın.',
        'Çıkışta ve girişte uzun duygusal vedalardan kaçının.',
        'Günde 5 kez 10 saniyelik mikro kapı kapatma egzersizi yapın.'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          'Eve geldiğinde kırılan eşyalar için köpeğe bağırmak (ayrılık korkusunu ikiye katlar).',
        'Kafese kapatıp ağlaya ağlaya susmasını beklemek ("Cry it out" yöntemi travmatiktir).'
      ],
      recommendedProblemSlug: 'ayrilik-anksiyetesi-yalnizlik-korkusu',
      recommendedArticleSlug: 'merck-3m-davranis-modifikasyon-modeli',
      recommendedPlanType: 'separation_anxiety'
    };
  }

  // RULE 5: Resource Guarding / Possessive Aggression
  if (primarySymptom === 'symptom_biting' && bodyLanguageStress === 'stress_freeze') {
    return {
      diagnosisTitle: 'Kaynak Koruma ve Çatışma Agresyonu (Resource Guarding)',
      category: 'biting_aggression',
      urgencyLevel: 'critical',
      confidencePercentage: 96,
      clinicalSummary: `Merck Taksonomisine göre bu tablo klasik "Kaynak Koruma (Possessive Aggression)" ve donma refleksidir. Köpek elindekini kaybetme korkusu yaşarken kaskatı kesilmişse bir sonraki salise savunma ısırığı gelecektir.`,
      rootCause: 'Eşyayı veya mamayı kaybetme korkusu; insanın yaklaşmasını potansiyel hırsızlık olarak algılama.',
      redFlags: [
        'Eşyanın üzerine kapanma ve beyaz gözle dik bakma',
        'Boğazdan gelen derin düşük frekanslı hırıltı',
        'Kasların taş gibi sertleşmesi (Donma)'
      ],
      merck3MPlan: {
        management: 'Köpeği beslerken veya kemik verirken yalnız bırakın; yanına asla kimseyi yaklaştırmayın.',
        modification: 'Takas Protokolü (Trade-Up): Yanından geçerken ona dokunmadan ön kısımlarına süper lezzetli peynir/et parçası fırlatın.',
        responseSubstitution: 'Tepki İkamesi (DRI): "Bırak" (Drop) komutuyla ağzındakini yere bırakıp 2 adım geriye oturma davranışı.',
        medicalThreshold: 'Aile bireylerine veya çocuklara yönelik ısırma gerçekleştiyse derhal profesyonel veteriner davranış uzmanı devreye girmelidir.'
      },
      immediateActionSteps: [
        'Köpeğin ağzından asla bir şeyi zorla çekip almayın.',
        'Yemek yerken yanına yaklaşmayın.',
        'Her yaklaşımı bir "ödül piyangosu" ile eşleştirin.'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          'Saygı testi yapmak için köpeğin mama kabına el sokmak (en büyük ısırma sebebidir).',
        'Hırladığı için köpeğe vurmak (köpeğin uyarı sinyalini yok eder).'
      ],
      recommendedProblemSlug: 'kaynak-koruma-mama-oyuncak-agresyonu',
      recommendedArticleSlug: 'merck-kopeklerde-agresyon-taksonomisi',
      recommendedPlanType: 'reactivity'
    };
  }

  // RULE 6: Leash Pulling & Reactivity
  if (primarySymptom === 'symptom_leash') {
    return {
      diagnosisTitle: 'Tasma Reaktivitesi ve Karşıt Refleks (Opposition Reflex)',
      category: 'leash_reactivity',
      urgencyLevel: 'medium',
      confidencePercentage: 89,
      clinicalSummary: `Köpek çekildiğinde biyolojik olarak ters yöne asılma refleksi (Karşıt Refleks) gösterir. Çekerek ilerlemeyi başardığı her yürüyüşte bu davranış ödüllendirilmiş olur.`,
      rootCause: 'Köpeğin doğal yürüyüş temposunun insandan hızlı olması ve tasmadaki gerginliğin reaktivite yaratması.',
      redFlags: [
        'Boyun tasması takılıyken nefes alamayacak kadar öksürerek çekme',
        'Başka köpek görünce iki ayak üstüne dikilip çığlık atma'
      ],
      merck3MPlan: {
        management: 'Boyun tasması yerine ergonomik Y-tipi ön göğüsten kancalı (front-clip) göğüs tasması kullanın.',
        modification: 'Kırmızı Işık - Yeşil Işık Kuralı: Tasma gerildiği milisaniyede heykel gibi durun; gevşediğinde yürüyün.',
        responseSubstitution: 'Tepki İkamesi (DRI): Yolda başka bir köpek gördüğünde öne fırlamak yerine sahibinin gözüne bakma ("Look at That / Bana Bak").',
        medicalThreshold: 'Şiddetli çekmeye bağlı trakea (soluk borusu) çökmesi veya boyun fıtığı olup olmadığı hekimce kontrol edilmelidir.'
      },
      immediateActionSteps: [
        'Tasma gerildiği an tek bir adım bile atmayıp heykel gibi durun.',
        'Diz hizanızda düzenli aralıklarla ödül vererek yanınızda yürümeyi cazip kılın.',
        'Flexi (otomatik uzayan) tasmaları hemen terk edin.'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          'Boğma veya dikenli tasma takmak (boyun omurlarına ve tiroid bezine kalıcı hasar verir).',
        'Tasmayı sürekli sertçe silkelemek.'
      ],
      recommendedProblemSlug: 'tasma-cekistirme-gevsek-tasma',
      recommendedArticleSlug: 'merck-tepki-ikamesi-response-substitution-dri',
      recommendedPlanType: 'loose_leash'
    };
  }

  // RULE 7: Jumping on people
  if (primarySymptom === 'symptom_jumping') {
    return {
      diagnosisTitle: 'Coşkulu Selamlama ve İstemsizce Pekiştirilen Zıplama',
      category: 'jumping_hyperactivity',
      urgencyLevel: 'low',
      confidencePercentage: 93,
      clinicalSummary: `Köpekler türsel olarak yüz yüze selamlama arzusu taşır. İnsanlar zıplandığında köpeği iterek veya konuşarak farkında olmadan köpeğin dikkat arzusunu ödüllendirirler.`,
      rootCause: 'Doğal selamlama dürtüsü ve geçmişte insanların zıplamayı ilgiyle pekiştirmiş olması.',
      redFlags: [
        'Zıplarken tırnakların çizmesi veya çocukları devirmesi',
        'Aşırı uyarılmadan ağzıyla elleri yakalamaya çalışma'
      ],
      merck3MPlan: {
        management: 'Misafir geldiğinde köpeği tasmayla kontrol altında tutun veya bariyer arkasında karşılatın.',
        modification: 'Dört Pati Yerde Kuralı (Four on the Floor): Zıpladığı an sırtınızı dönün ve kollarınızı bağlayın (Negatif Ceza -P).',
        responseSubstitution: 'Tepki İkamesi (DRI - En Başarılı Merck Örneği): Kapı zili çaldığında veya insan yaklaştığında "OTUR" (Sit). Köpek aynı anda hem oturup hem de zıplayamaz.',
        medicalThreshold: 'Arka bacaklarda patella luksasyonu veya eklem ağrısı olup olmadığı kontrol edilmelidir.'
      },
      immediateActionSteps: [
        'Eve girdiğinizde köpek zıplarsa tek kelime etmeden arkanızı dönün.',
        'Dört patisi yere bastığı saniyede yere eğilip sevin.',
        'Gelen misafirleri köpeği yok saymaları konusunda uyarın.'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          'Zıplayınca diziyle köpeğin göğsüne vurmak (kaburga çatlağı ve güven kırılmasına yol açar).',
        'Zıplayınca konuşup elleriyle köpeği itmek (köpek bunu oyun sanır).'
      ],
      recommendedProblemSlug: 'insanlarin-uzerine-ziplama-selamlama',
      recommendedArticleSlug: 'merck-tepki-ikamesi-response-substitution-dri',
      recommendedPlanType: 'basic_obedience'
    };
  }

  // RULE 8: Thunder / Fireworks fear
  if (primarySymptom === 'symptom_fear') {
    return {
      diagnosisTitle: 'Akustik Fobi & Barometrik Panik Bozukluğu',
      category: 'fear_phobia',
      urgencyLevel: 'medium',
      confidencePercentage: 92,
      clinicalSummary: `Köpek kulağı insan kulağının 4 katı frekans algısına sahiptir. Fırtına anındaki şimşek patlamaları ve barometrik basınç düşüşü köpekte gerçek bir ölüm korkusu yaratır.`,
      rootCause: 'İşitsel aşırı hassasiyet, statik elektriklenme ve genetik korku yatkınlığı.',
      redFlags: [
        'Korkudan tir tir titreme ve nefes alamama',
        'Banyoya, gardıroba saklanma veya camdan atlama girişimi'
      ],
      merck3MPlan: {
        management: 'Perdeleri sıkıca kapatın, beyaz gürültü makinesi veya ritmik müzik açın; karanlık bir sığınak mağara oluşturun.',
        modification: 'Akustik Desensitizasyon: Sakin günlerde fırtına seslerini çok düşük volümde çalıp en sevdiği mamayı verin.',
        responseSubstitution: 'Tepki İkamesi: Korktuğu an güvenli mağarasındaki Lickimat üzerindeki ezmeyi yalamaya odaklanma.',
        medicalThreshold: 'Şiddetli panik durumlarında Merck Kılavuzu uyarınca fırtına öncesi veteriner hekim reçeteli anksiyolitik (Trazodone) kullanımı hayat kurtarır.'
      },
      immediateActionSteps: [
        'Bugün evin en sessiz iç odasında battaniyelerle karanlık bir sığınak kurun.',
        'Fırtına başladığında köpeği yanınıza alıp sakin bir sesle yanında olun.',
        'Asla korktuğu için köpeği dışarı zorlamayın (Flooding yasağı).'
      ],
      ownerMistakesToStop: [
          ...customMistakes,
          '"Korkusunu pekiştiririm" korkusuyla tir tir titreyen köpeğe sarılmaktan kaçınmak (Korku pekiştirilemez, bir duygudur; sevgi güvence verir).',
        'Korktuğunda köpeği azarlamak.'
      ],
      recommendedProblemSlug: 'gok-gurultusu-ve-havai-fisek-korkusu',
      recommendedArticleSlug: 'merck-3m-davranis-modifikasyon-modeli',
      recommendedPlanType: 'mental_enrichment'
    };
  }

  // DEFAULT / BARKING FALLBACK
  return {
    diagnosisTitle: 'Bölge Koruma ve Uyarılma Kaynaklı Alarm Havlaması',
    category: 'barking',
    urgencyLevel: 'medium',
    confidencePercentage: 88,
    clinicalSummary: `Köpeğiniz çevredeki uyaranları potansiyel bir tehlike olarak kodlamış ve havlayarak uzaklaştırmaya çalışıyor (Postacı Sendromu: Havladı ve yabancı gitti = Başardım).`,
    rootCause: 'Bölge koruma içgüdüsü, can sıkıntısı ve uyarana karşı mesafeyi artırma isteği.',
    redFlags: [
      'Günde 2 saatten fazla kesintisiz havlama',
      'Havlama sonrası cama veya kapıya diş geçirme'
    ],
    merck3MPlan: {
      management: 'Pencerelere buzlu cam filmi yapıştırın veya perdeleri kapatın; kapı zilinin sesini kısın. Köpeğin cama koşarak bu davranışı pratik yapmasını önleyin.',
      modification: 'Sub-Threshold Desensitizasyon: Düşük zil sesini ödülle eşleştirerek "Zil = Harika şeyler oluyor" algısı kurun.',
      responseSubstitution: 'Tepki İkamesi (DRI): Zil çaldığında kapıya koşmak yerine mutfaktaki matına gidip bekleme davranışı.',
      medicalThreshold: 'İşitme kaybı veya kulak ağrısı olan köpekler sesleri aniden algılayıp aşırı havlayabilir; kulak kontrolü önerilir.'
    },
    immediateActionSteps: [
      'Pencereleri perde ile kapatarak köpeğin dışarıyı izlemesini kesin.',
      'Köpek havladığında bağırmayın; sessizce arasına geçip görüş açısını kapatın.',
      'Sakinleştiği anda ödül verin.'
    ],
    ownerMistakesToStop: [
          ...customMistakes,
          'Köpeğe "SUS!" diye bağırmak (köpek sizin de havlamaya katıldığınızı düşünür).',
      'Şok veya havlama önleyici spreyli tasmalar kullanmak.'
    ],
    recommendedProblemSlug: 'asiri-havlama-kapi-zil-sokak',
    recommendedArticleSlug: 'merck-tepki-ikamesi-response-substitution-dri',
    recommendedPlanType: 'basic_obedience'
  };
}
