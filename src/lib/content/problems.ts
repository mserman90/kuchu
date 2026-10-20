export interface SolutionStep {
  stepNumber: number;
  title: string;
  instruction: string;
  scientificTip?: string;
}

export interface MerckProtocol {
  management: string;
  modification: string;
  responseSubstitution: string;
  medicalRuleOut: string;
}

export interface BehaviorProblem {
  id: string;
  slug: string;
  title: string;
  category: 'reactivity' | 'anxiety' | 'puppy' | 'habits' | 'fear' | 'predatory' | 'compulsive';
  severity: 'low' | 'medium' | 'high';
  shortDescription: string;
  rootCauses: string[];
  positiveProtocol: {
    protocolName: string;
    overview: string;
    steps: SolutionStep[];
  };
  merckProtocol: MerckProtocol;
  whatNotToDo: string[];
  whenToCallProfessional: string[];
}

export const BEHAVIOR_PROBLEMS: BehaviorProblem[] = [
  {
    id: 'barking-reactivity',
    slug: 'asiri-havlama-kapi-zil-sokak',
    title: 'AŞIRI HAVLAMA (KAPI ZİLİ, PENCERE & SOKAK)',
    category: 'reactivity',
    severity: 'medium',
    shortDescription: 'Kapı çaldığında, pencereden geçenlere veya sokakta diğer canlılara karşı durdurulamayan alarm havlaması.',
    rootCauses: [
      'Bölge koruma refleksi ve aşırı uyarılma (Arousal)',
      'Korku ve bilinmeze karşı mesafeyi artırma isteği',
      'Geçmişte havlayarak tehlikeyi uzaklaştırdığı yanılgısı (Postacı etkisi)'
    ],
    positiveProtocol: {
      protocolName: 'Desensitizasyon ve Karşıt Koşullandırma (CC/DS)',
      overview: 'Havlamayı susturmak yerine zilin anlamını "tehlike"den "yere ödül saçılması"na çevirin.',
      steps: [
        {
          stepNumber: 1,
          title: 'Tetikleyici Ses Seviyesini Düşürün',
          instruction: 'Telefonunuzdan düşük sesle zil sesi açın. Köpek tepkisiz kaldığı anda "Evet!" deyip yüksek değerli ödül maması verin.',
          scientificTip: 'Eşiğin altında (sub-threshold) çalışma şarttır; köpek havlamaya başladıysa kortizol salgılanmış demektir.'
        },
        {
          stepNumber: 2,
          title: 'Zil ile "Mata Git" Davranışını Eşleştirin',
          instruction: 'Zil çaldığı an köpeğinizi kapı yerine belirli bir mindere/yatağa koşmaya koşullandırın (Alternatif Uyumsuz Davranış - DRI).',
          scientificTip: 'Ağzında oyuncak veya yatağında bekleyen bir köpeğin kapıya atılması fiziken zordur.'
        },
        {
          stepNumber: 3,
          title: 'Kademeli Gerçek Hayat Provokasyonu',
          instruction: 'Bir aile üyesinin dışarıdan zili çalmasını sağlayın. Köpek minderde sakin kalana kadar kapıyı açmayın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Pencerelere buzlu cam filmi çekin veya perdeleri kapalı tutun; kapı zilinin sesini kısın. Köpeğin gün içinde cama koşarak bu davranışı "pratik etmesine" kesinlikle izin vermeyin.',
      modification: 'Kademeli duyarsızlaştırma: Zil sesini en düşük desibelden başlatıp ödülle eşleştirin (Merck DS/CC protokolü).',
      responseSubstitution: 'Tepki İkamesi (DRI): Zil çaldığı an kapıya havlamak yerine, mutfaktaki matına gidip oturma ve çenesini mata koyma davranışını ödüllendirin.',
      medicalRuleOut: 'İşitme kaybı başlangıcı yaşayan köpekler sesleri aniden algılayıp irkilerek aşırı havlayabilir. Kulak enfeksiyonu veya duyusal gerileme muayenesi önerilir.'
    },
    whatNotToDo: [
      'Köpeğe "Sus!" diye bağırmayın (Köpek sizin de ona eşlik edip havladığınızı düşünür).',
      'Havlama önleyici şok, sprey veya titreşimli tasmalar kullanmayın (Sorunu bastırıp agresyona dönüştürür).',
      'Havladığı anda sakinleştirmek için kafasını okşayıp konuşmayın.'
    ],
    whenToCallProfessional: [
      'Günde 2 saatten fazla kesintisiz havlama krizleri yaşanıyorsa',
      'Havlamanın ardından kapıya veya insana yönelik diş geçirme hamlesi geliyorsa'
    ]
  },
  {
    id: 'livestock-predation',
    slug: 'ciftlik-ve-kumes-hayvanlarini-avlama',
    title: 'ÇİFTLİK & EV HAYVANLARINI AVLAMA (TAVUK, KOYUN, KEDİ - PREDATORY DRIFT)',
    category: 'predatory',
    severity: 'high',
    shortDescription: 'Çiftlikte veya kırsalda tavuk, koyun, kuzu, kedi veya ördekleri kovalama, yakalama ve öldürme/yeme refleksi.',
    rootCauses: [
      'Evrimsel Avlanma Motor Sekansı (Gözlem -> Takip -> Kovalama -> Yakalama -> Öldürme Isırığı -> Tüketme)',
      'Predatory Drift (Oyun olarak başlayan kovalamanın aniden gerçek öldürücü av refleksine dönüşmesi)',
      'Bir kez dahi tavuk veya küçük hayvan yakalayıp yemiş olmanın beyinde yarattığı devasa dopamin patlaması',
      'Çiftlikte can sıkıntısı, yalnızlık ve genetik av/çoban enerjisinin boşaltılamaması'
    ],
    positiveProtocol: {
      protocolName: 'Güdü Deşarjı, Premack İlkesi ve Eşik Altı Koşullandırma',
      overview: 'Avlanma enerjisini flört sopası (kamçı oyuncak) ile tatmin edip, çiftlik hayvanlarının varlığını "sahibe dönüp yere yatma" kuralına bağlayın.',
      steps: [
        {
          stepNumber: 1,
          title: 'Flirt Pole (Kamçı Oyuncak) ile Av Güdüsünü Deşarj Edin',
          instruction: 'Ucunda pelüş veya deri bağlı uzun bir eğitim kamçısını yerde hızla hareket ettirerek kovalamasına izin verin. Köpek yakalamak üzereyken "Bırak!" ve "Bekle!" diyerek dürtü kontrolü inşa edin.',
          scientificTip: 'Genetik av enerjisi bir baraj gibi birikir; bu enerjiyi oyuncakla boşaltmazsanız canlı hayvana patlar.'
        },
        {
          stepNumber: 2,
          title: '15 Metrelik Uzun Takip Tasması ile Eşik Altı Çalışma',
          instruction: 'Kümesin veya koyun ağılının 30 metre uzağında durun. Köpek tavuklara baktığı salisede adını söyleyin; başını size çevirdiği an süper ödül (ciğer/kaşar) verin.',
          scientificTip: 'Köpek hedefe kilitlenip kaskatı kesilmeden (Eye-Stalk evresi) araya girmelisiniz.'
        },
        {
          stepNumber: 3,
          title: 'Premack İlkesi (Büyükanne Kuralı): Sakin Kalırsan Keşfedersin',
          instruction: 'Köpek tasmada gerilmeden, sakin ve başı yerde yürüdükçe çiftlik arazisinde serbest koklama molası kazanmasını sağlayın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Kümes ve ağıl etrafını çift katmanlı sağlam tel örgüyle izole edin. Köpeğin hayvanları tek başına gözetimsiz kovalamasına ASLA izin vermeyin; çiftlikte serbestken 15 metrelik uzun takip tasması (long line) takılı olmalıdır. Bir tek başarılı av, aylar süren eğitimi sıfırlar.',
      modification: 'Karşıt Koşullanma: Canlı hayvanın hareketi = Yüksek değerli yiyeceğin sahibin elinden gelmesi eşleştirmesi.',
      responseSubstitution: 'Tepki İkamesi (DRI): Tavuk, kedi veya koyun gördüğü anda öne fırlamak yerine, derhal yere yatıp çenesini yere koyma ("Down / Yat") davranışı.',
      medicalRuleOut: 'Protein/mineral yetersizliği, bağırsak parazitleri veya B12 vitamini emilim bozukluğu nedeniyle oluşan kemirgen ve hayvan yeme açlığı hekimce elenmelidir.'
    },
    whatNotToDo: [
      'Öldürdüğü tavukla köpeğe vurmayın veya boynuna ölü hayvan bağlamayın (İlkel, zalim ve sonuç vermeyen bir hurafedir; köpekte korku agresyonu yaratır).',
      'Elektrikli şok tasması kullanmayın (Şok acısını hayvanla bağdaştırıp hayvana daha büyük bir öfkeyle saldırabilir).',
      'Köpeği 24 saat zincire bağlamayın (Zincir hüsranı ve saldırganlığı katlar).'
    ],
    whenToCallProfessional: [
      'Köpek komşu çiftliklerin koyun veya büyükbaş hayvanlarını telef etme aşamasına geldiyse profesyonel çalışma köpeği etoloğu zorunludur.'
    ]
  },
  {
    id: 'separation-anxiety',
    slug: 'ayrilik-anksiyetesi-yalnizlik-korkusu',
    title: 'AYRILIK ANKSİYETESİ VE YALNIZ KALAMAMA',
    category: 'anxiety',
    severity: 'high',
    shortDescription: 'Sahibi evden ayrıldığı an başlayan uluma, kapıları tırmalama, salya akıtma ve tuvalet kaçırma.',
    rootCauses: [
      'Aşırı bağlanma ve tek başına güvende hissetmeme',
      'Sosyal izolasyon paniği (Köpekler evrimsel olarak gevşek sosyal gruplarla yaşar)',
      'Rutin değişimleri, barınaktan sahiplenilme travması'
    ],
    positiveProtocol: {
      protocolName: 'Mikro Ayrılık Seansları (Sub-Threshold Protocol)',
      overview: 'Köpeği asla panik eşiğine sokmadan saniyelerle başlayan yalnızlık antrenmanı.',
      steps: [
        {
          stepNumber: 1,
          title: 'Ayrılık İpuçlarını Nötrleştirin',
          instruction: 'Anahtarları elinize alın, montunuzu giyin ama kapıdan çıkmayıp televizyon izleyin. Bu nesnelerin yarattığı ön kaygıyı kırın.',
          scientificTip: 'Köpekler evden çıkış sinyallerini 15 dakika önceden okur ve nabızları yükselir.'
        },
        {
          stepNumber: 2,
          title: '1 Saniyelik Kapı Kapanma Egzersizi',
          instruction: 'Dış kapıyı kapatın ve 2 saniye sonra geri dönün. Sakin bir sesle ödül vermeden hayatınıza devam edin.'
        },
        {
          stepNumber: 3,
          title: 'Süreleri Kademeli Olarak Artırın (5sn, 15sn, 1dk, 5dk)',
          instruction: 'Asla köpeğin ağlama noktasına gelmesine izin vermeyin. Ağlarsa bir önceki adıma dönün.'
        }
      ]
    },
    merckProtocol: {
      management: 'Eğitim süresince köpeği tek başına evde asla eşik üstü sürelerde bırakmayın; köpek kreşi, evde bakıcı veya güvenilir bir arkadaş desteğiyle yalnızlık paniğinin nörolojik olarak pekişmesini engelleyin.',
      modification: 'Mikro ayrılık eşik protokolü: Ayrılık ipuçlarını (anahtar, mont, ayakkabı) nötrleştirin; 2-5 saniyelik çıkışlarla beyne "geri dönecek" güvencesi kazandırın.',
      responseSubstitution: 'Ayrılık anında donmuş Lickimat veya Kong oyuncağını yalama davranışına odaklama (Yalama eylemi endorfin salgılatır).',
      medicalRuleOut: 'Kronik ağrı (osteoartrit) veya tiroid disfonksiyonu anksiyeteyi ciddi oranda artırır. 7 yaş üstünde DISHAA demans taraması yapılmalıdır.'
    },
    whatNotToDo: [
      'Evden çıkarken ve eve dönerken uzun duygusal vedalar veya coşkulu sarılmalar yapmayın.',
      'Yalnızken eşyalara zarar verdiği için eve geldiğinizde geçmişe yönelik ceza vermeyin.',
      'Kafese kapatıp ağlaya ağlaya alışmasını ("Cry it out") beklemeyin (Travmatik panik krizine yol açar).'
    ],
    whenToCallProfessional: [
      'Köpek kapıları veya camları kırarak kendine fiziksel zarar veriyorsa',
      'Ayrılık anında kalp çarpıntısı, hiperventilasyon ve kusma görülüyorsa (Merck farmakoterapi protokolü gerekebilir).'
    ]
  },
  {
    id: 'coprophagia',
    slug: 'diski-yeme-koprofaji-aliskanligi',
    title: 'DIŞKI YEME (KOPROFAJİ - KENDİ VE DİĞER CANLILARIN DIŞKISI)',
    category: 'habits',
    severity: 'medium',
    shortDescription: 'Kendi dışkısını, diğer köpeklerin veya kedi/çiftlik hayvanlarının dışkısını arayıp tüketme davranışı.',
    rootCauses: [
      'Sindirim enzimi yetersizliği (Ekzokrin Pankreas Yetersizliği - EPI) veya bağırsak emilim bozukluğu',
      'Yavrulukta eve pislediğinde burnu pisliğe sürtülmüş köpeklerde "cezadan kaçmak için kanıtı yok etme" refleksi',
      'Kedi mamalarının yüksek proteinli olması nedeniyle kedi dışkısının lezzetli bir besin olarak algılanması',
      'Yetersiz zihinsel uyarılma, can sıkıntısı ve dikkat çekme isteği'
    ],
    positiveProtocol: {
      protocolName: 'Dışkı Yönetimi, Ananas/Enzim Desteği ve "Bırak" (Leave It) Protokolü',
      overview: 'Dışkıya ulaşımı sıfırlayıp, bağırsak florasını güçlendirin ve dışkıyı gördüğü an sahibine koşmasını ödüllendirin.',
      steps: [
        {
          stepNumber: 1,
          title: 'Dışkı Düştüğü Saniyede Alanı Temizleyin',
          instruction: 'Köpek tuvaletini bitirir bitirmez henüz dönüp koklayamadan önüne ödül maması atın ve dışkıyı derhal poşetleyin.',
          scientificTip: 'Alışkanlığın kırılmasındaki ilk kural, köpeğin bu davranışı pratik etme fırsatını sıfıra indirmektir.'
        },
        {
          stepNumber: 2,
          title: 'Mamasına Taze Ananas veya Kabak Püresi Ekleyin',
          instruction: 'Veteriner hekim onayıyla mamasına günde 1 tatlı kaşığı taze ananas ekleyin. Ananastaki bromelain enzimi dışkının kokusunu köpek için son derece itici hale getirir.',
        },
        {
          stepNumber: 3,
          title: 'Otomatik "Bırak ve Bana Dön" Eğitimi',
          instruction: 'Yürüyüşte yerdeki bir pisliğe yaklaştığında "Bırak!" deyin; burnunu çektiği anda yere en sevdiği et parçasını atın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Bahçeyi her gün pisliklerden arındırın; evdeki kedi kumunu köpeğin giremeyeceği kapaklı/yüksek alanlara taşıyın. Yürüyüşlerde sepet burunluk (basket muzzle) ile dışkı kapmasını engelleyin.',
      modification: 'Yerdeki dışkı = Sahibin gözünün içine bakma (Look at that / Check-in) işaretine dönüştürülür.',
      responseSubstitution: 'Tepki İkamesi (DRI): Yerde yabancı bir dışkı kokladığı an derhal durup sahibinin önünde oturma davranışı.',
      medicalRuleOut: 'Ekzokrin Pankreas Yetersizliği (EPI), bağırsak parazitleri, B-kompleks vitamin eksiklikleri hekimce tam dışkı ve kan tahliliyle elenmelidir.'
    },
    whatNotToDo: [
      'Dışkı yerken bağıra çağıra köpeğin üzerine koşmayın (Köpek dışkıyı sizden kaçırmak için daha hızlı yutacaktır).',
      'Burnunu dışkıya sürtmeyin (Dışkı yeme hastalığını tetikleyen birincil travmadır).'
    ],
    whenToCallProfessional: [
      'Beslenme ve enzim takviyelerine rağmen günde birden fazla kez yabancı dışkı yiyip parazit veya zehirlenme riski oluşuyorsa.'
    ]
  },
  {
    id: 'compulsive-licking-tail-chasing',
    slug: 'kompulsif-pati-yalama-kuyruk-kovalama',
    title: 'KOMPULSİF BOZUKLUKLAR (AŞIRI PATİ YALAMA & KUYRUK KOVALAMA - OKB)',
    category: 'compulsive',
    severity: 'high',
    shortDescription: 'Patilerini kanatana kadar aralıksız yalama (Yalama Granülomu), kendi kuyruğunu saatlerce dönerek kovalama veya boşluğa diş geçirme.',
    rootCauses: [
      'Kronik stres, kaygı ve hüsranın kompulsif stereotipiye (Köpek OKB\'si) evrilmesi',
      'Sürekli yalama eyleminin beyinde endorfin salgılatması ve köpeğin bu uyuşturucu etkiye bağımlı hale gelmesi',
      'Atopik dermatit, pati arası alerji veya omurga/eklem ağrıları',
      'Genetik yatkınlık (Bull Terrier gibi ırklarda kuyruk kovalama genetik nörolojik temellidir)'
    ],
    positiveProtocol: {
      protocolName: 'Duyusal Zenginleştirme, Stres Azaltma ve Davranış Kırma',
      overview: 'Yalama transına girmesine izin vermeden dikkatini koklama ve zihinsel bulmacalara yönlendirin.',
      steps: [
        {
          stepNumber: 1,
          title: 'Yalama Başladığı An Bağırmadan Dikkatini Dağıtın',
          instruction: 'Patisini yalamaya başladığı ilk 5 saniyede sakin bir sesle adını söyleyin ve yere koklama matı veya çiğneme boynuzu uzatın.',
          scientificTip: 'Davranış trans haline geçtikten sonra müdahale etmek imkansızlaşır; erken kesmek şarttır.'
        },
        {
          stepNumber: 2,
          title: 'Günlük Zihinsel Enerjiyi İkiye Katlayın',
          instruction: 'Günde 2 kez 15 dakikalık koku arama oyunları (burun işi) yaptırın. Burun çalışması beyindeki dopamin ve serotonin dengesini düzenler.'
        }
      ]
    },
    merckProtocol: {
      management: 'Yaralı patileri korumak için yumuşak medikal koruyucu çorap veya şişme boyunluk kullanın. Köpeğin stresini artıran tetikleyicileri evden uzaklaştırın.',
      modification: 'Yalamaya yöneldiği anda alternatif bir zihinsel görev verme; sakin yatış anlarını ödüllendirme.',
      responseSubstitution: 'Tepki İkamesi: Patisini yalama dürtüsü geldiğinde, dondurulmuş Lickimat veya KONG oyuncağını yalamaya yönlendirme.',
      medicalRuleOut: 'Merck Veterinary Manual uyarınca alerjik dermatit, gıda intoleransı veya nöropatik ağrı dışlanmalıdır. İleri vakalarda veteriner hekim reçeteli Fluoxetine (SSRI) farmakoterapisi beyin nörokimyasını dengelemek için gereklidir.'
    },
    whatNotToDo: [
      'Yalarken köpeğe bağırmayın veya eline vurmayın (Stresini artırıp yalamayı daha da şiddetlendirir).',
      'Yarayı sadece bandajla kapatıp psikolojik kök nedeni görmezden gelmeyin.'
    ],
    whenToCallProfessional: [
      'Pati derisi açılıp kemik enfeksiyonu (osteomiyelit) riski doğduysa derhal veteriner klinik tedavisi başlatılmalıdır.'
    ]
  },
  {
    id: 'puppy-biting',
    slug: 'yavru-kopek-isirmasi-paca-el',
    title: 'YAVRU KÖPEK ISIRMASI VE PAÇA ÇEKİŞTİRME',
    category: 'puppy',
    severity: 'low',
    shortDescription: 'Oyun sırasında elleri, ayak bileklerini jilet gibi süt dişleriyle can yakıcı şekilde ısırma.',
    rootCauses: [
      'Diş kaşıntısı ve çene kaslarını tanıma evresi',
      'Isırık İnhibisyonu (Bite Inhibition) eğitiminin henüz tamamlanmamış olması (Merck 3-8 hafta süreci)',
      'Aşırı yorgunluk ve aşırı uyarılma (Yavrular yoruldukça huysuzlaşıp daha çok ısırır)'
    ],
    positiveProtocol: {
      protocolName: 'Isırık İnhibisyonu ve Yönlendirme (Redirection)',
      overview: 'İnsan derisinin aşırı hassas olduğunu öğretip ısırma enerjisini doğru çiğneme materyallerine aktarın.',
      steps: [
        {
          stepNumber: 1,
          title: 'Canınız Yandığında Yüksek Sesle İrkilin ("OUCH!")',
          instruction: 'Kardeşlerinin oyun sırasında yaptığı gibi ani tiz bir ses çıkarın ve oyunu 10 saniye boyunca durdurup ellerinizi saklayın.',
          scientificTip: 'Köpekler sosyal geri bildirimi kardeşlerinden bu ses ile öğrenir (Merck Normal Social Behavior).'
        },
        {
          stepNumber: 2,
          title: 'Alternatif Çiğneme Oyuncağı Sunun',
          instruction: 'Elinizi ısırmaya yeltendiği anda hemen dişlerinin arasına uygun sertlikte bir kauçuk oyuncak sokun ve onunla oynayın.'
        },
        {
          stepNumber: 3,
          title: 'Yorulma Molası Verin',
          instruction: 'Isırma delicesine artıyorsa yavru aşırı uyarılmıştır; sakin bir odada uykuya geçmesi için ortam hazırlayın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Yavrunun etrafta serbestçe paçalara saldırmasını önlemek için oyun çiti (playpen) kullanın; elleri hızlıca sallayarak av dürtüsünü provoke etmeyin.',
      modification: 'Diş temasında etkileşimi dondurma (negatif ceza -P), doğru oyuncağı ısırdığında oyunu coşkuyla sürdürme.',
      responseSubstitution: 'Tepki İkamesi (DRI): Size doğru koştuğunda ağzında pelüş veya ip oyuncağını taşıyarak gelmesi davranışını ödüllendirin.',
      medicalRuleOut: 'Süt dişlerinin dökülme döneminde diş eti iltihabı veya çift diş (persiste süt dişi) ağrısı olup olmadığını kontrol ettirin.'
    },
    whatNotToDo: [
      'Ağzını elle tutup sıkmayın veya diline basmayın (Şiddeti artırır ve el korkusu yaratır).',
      'Ellerinizle hızlı hareketler yaparak köpeği tahrik etmeyin.',
      'Isırdığında bağıra çağıra kaçışmayın (Köpek bunu harika bir kovalamaca oyunu sanır).'
    ],
    whenToCallProfessional: [
      '6 aylık olduktan ve yetişkin dişleri çıktıktan sonra da derin yaralayıcı ısırma devam ediyorsa'
    ]
  },
  {
    id: 'leash-pulling',
    slug: 'tasma-cekistirme-gevsek-tasma',
    title: 'TASMA ÇEKİŞTİRME VE REAKTİF YÜRÜYÜŞ',
    category: 'habits',
    severity: 'medium',
    shortDescription: 'Yürüyüş boyunca sahibini peşinden sürükleme, nefes nefese kalana kadar tasmaya asılma.',
    rootCauses: [
      'Köpeğin doğal yürüyüş hızının insandan hızlı olması',
      'Çekmenin işe yaradığını öğrenmiş olması (Çekince hedefine ulaşıyor)',
      'Karşıt Refleks (Opposition Reflex - Canlı çekildiğinde ters yöne direnç gösterir)'
    ],
    positiveProtocol: {
      protocolName: 'Kırmızı Işık - Yeşil Işık ve Odak Çalışması',
      overview: 'Tasma gerildiği an ilerlemenin durduğu, gevşediği an yolun açıldığı basit neden-sonuç kuralı.',
      steps: [
        {
          stepNumber: 1,
          title: 'Tasma Gerildiği An Heykel Olun',
          instruction: 'Tasma bir santim bile gerildiğinde bir adım daha atmayın. Asla tasmayı geri çekmeyin; sadece durun.',
          scientificTip: 'Çekmenin ödülü ileriye doğru adımdır; adım durduğunda çekme davranışının anlamı kaybolur.'
        },
        {
          stepNumber: 2,
          title: 'Size Baktığında Yürümeye Devam Edin',
          instruction: 'Köpek durup "Neden gitmiyoruz?" diye dönüp size baktığı anda "Evet!" deyip diz hizanızda ödül verin ve yürüyün.'
        },
        {
          stepNumber: 3,
          title: 'U Dönüşleri Yapın',
          instruction: 'Köpek öne fırladığında aniden ters yöne dönüp neşeyle yürüyün. Sizi sürekli takip etmek zorunda kalsın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Boyun tasması yerine ön göğüsten takılan (front-clip) ergonomik Y-göğüs tasması kullanın; çekildiğinde köpeğin ağırlık merkezini size çevirir.',
      modification: 'Gevşek tasma yürüyüşü: Tasma U harfi şeklini aldığında diz yanından ödül verme; gerildiği anda durma.',
      responseSubstitution: 'Tepki İkamesi: Yolda başka bir köpek gördüğünde öne atılmak yerine, durup sahibine bakma ("Watch me / Look at that") davranışı.',
      medicalRuleOut: 'Sürekli çekmeye bağlı trakea (soluk borusu) zedelenmesi, boyun fıtığı veya kalça ağrısı varlığı hekimce değerlendirilmelidir.'
    },
    whatNotToDo: [
      'Boğma zincir (choke chain) veya dikenli tasma (prong collar) takmayın (Gırtlak ve tiroid hasarı yapar).',
      'Tasmayı sürekli sertçe silkelemeyin (Köpek boyun fıtığı olabilir).',
      'Flexi (uzayan otomatik tasma) kullanmayın (Çekmeyi pekiştiren bir mekanizmadır).'
    ],
    whenToCallProfessional: [
      'Sahibini düşürüp yaralayacak düzeyde kontrolsüz çekme vakalarında'
    ]
  },
  {
    id: 'resource-guarding',
    slug: 'kaynak-koruma-mama-oyuncak-agresyonu',
    title: 'KAYNAK KORUMA (MAMA KABI, KEMİK & OYUNCAK)',
    category: 'reactivity',
    severity: 'high',
    shortDescription: 'Mama yerken veya oyuncağını kemirirken yaklaşan kişiye hırlama, donup kalma veya ısırma.',
    rootCauses: [
      'Evrimsel hayatta kalma mekanizması (Avını kaybetmeme dürtüsü)',
      'Çatışma Kaynaklı Agresyon (Merck: Conflict-related aggression)',
      'Geçmişte elinden zorla eşyalarının alınmış olması güvensizliği'
    ],
    positiveProtocol: {
      protocolName: 'Takas Oyunu ve Değer Yükseltme (Trade Up Protocol)',
      overview: 'İnsanın elinin eşya çalan bir tehdit değil; daha lezzetli bir sürpriz getiren piyango olduğunu öğretin.',
      steps: [
        {
          stepNumber: 1,
          title: 'Güvenli Mesafeden Ödül Atma',
          instruction: 'Köpek kemik kemirirken ona dokunmayın; 2 metre mesafeden yanından geçerken ön kısımlarına peynir/tavuk parçası fırlatıp uzaklaşın.',
          scientificTip: 'Yaklaşan adımların anlamını "elimden alacak"tan "daha iyisini bırakacak"a dönüştürürsünüz.'
        },
        {
          stepNumber: 2,
          title: 'Eşit Değerle Takas Yapın',
          instruction: 'Bir nesneyi almak zorundaysanız asla zorla çekmeyin; elinizde daha harika bir ödülle dikkatini dağıtıp takas edin.'
        }
      ]
    },
    merckProtocol: {
      management: 'Köpek mama yerken veya kemik kemirirken çocukları ve misafirleri kesinlikle uzak tutun; köpeği rahatsız edilmeyeceği ayrı bir odada besleyin.',
      modification: 'Klasik Karşıt Koşullanma: İnsanın yaklaşması = Ekstra yüksek değerli et parçalarının havadan düşmesi eşleştirmesi.',
      responseSubstitution: 'Tepki İkamesi: Eşyayı ağzında sıkıp hırlamak yerine, "Bırak" (Drop it) komutuyla eşyayı bırakıp 2 adım geri çekilme davranışı.',
      medicalRuleOut: 'Ağız/diş çürüğü, diş kırığı veya çiğneme ağrısı yaşayan köpekler kemiklerini çiğneyemediklerinde aşırı agresif kaynak koruma gösterebilir.'
    },
    whatNotToDo: [
      'Yemek yerken köpeğin mamasına elinizi sokup "Bana saygı duyuyor mu?" testi yapmayın.',
      'Hırladığı için köpeğe vurmayın veya bağırmayın (Hırlama uyarısını bastırırsanız köpek uyarmadan direkt ısırır).',
      'Ağzındaki nesneyi zorla çekiştirip sökmeyin.'
    ],
    whenToCallProfessional: [
      'Köpek aile üyelerinden birine veya çocuklara kaynak koruma amaçlı saldırdıysa derhal profesyonel etolog çağrılmalıdır.'
    ]
  },
  {
    id: 'car-travel-anxiety',
    slug: 'araba-yolculugu-ve-arac-tutmasi',
    title: 'ARABA YOLCULUĞU ANKSİYETESİ VE ARAÇ TUTMASI (MOTION SICKNESS)',
    category: 'anxiety',
    severity: 'medium',
    shortDescription: 'Arabayı gördüğü an titreme, araca binmeyi reddetme, yolculuk boyunca salya akıtma veya kusma.',
    rootCauses: [
      'Yavrulukta iç kulak vestibüler dengesinin henüz tam gelişmemesi nedeniyle yaşanan mide bulantısının koşullanması',
      'Arabanın yalnızca veteriner kliniği veya aşı gibi stresli deneyimlerle eşleşmiş olması',
      'Aracın motor sesi, titreşimi ve camdan hızla akan nesnelerin yarattığı duyusal aşırı yükleme'
    ],
    positiveProtocol: {
      protocolName: 'Duran Araçta Kademeli Desensitizasyon ve Güven İnşası',
      overview: 'Motor çalışmazken arabada lezzetli ödüller yiyerek başlayıp, 100 metrelik keyifli park sürüşlerine geçin.',
      steps: [
        {
          stepNumber: 1,
          title: 'Park Halindeki Arabada Piknik Yapın',
          instruction: 'Motoru çalıştırmayın, kapıları açık tutun. Arabanın bagajında veya arka koltuğunda oturup köpeğinize en sevdiği ödül mamasını verin ve inin.',
          scientificTip: 'Araba binilen ve hemen kapatılan bir tuzak olmaktan çıkıp pozitif bir mekana dönüşmelidir.'
        },
        {
          stepNumber: 2,
          title: 'Motor Sesine Alıştırma',
          instruction: 'Araba hareket etmeden sadece motoru çalıştırın, 1 dakika sakin bekleyince ödüllendirip arabadan indirin.',
        },
        {
          stepNumber: 3,
          title: 'Çok Kısa Mesafe ve Eğlenceli Varış Noktası',
          instruction: 'Mahalle etrafında 2 dakikalık bir tur atıp doğrudan köpeğin çok sevdiği bir yeşil alana varın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Yolculuktan en az 3 saat önce mama vermeyi kesin. Güvenlik kemerli oto göğüs tasması ile köpeği sabitleyin; camı 2 parmak aralayarak temiz hava ve koku akışı sağlayın.',
      modification: 'Araca yaklaşım ve biniş hareketini yüksek değerli ciğer ödülleriyle klasik koşullama.',
      responseSubstitution: 'Tepki İkamesi: Koltuğa oturduğunda yatarak güvenli emniyet kemeri pozisyonunda bekleme.',
      medicalRuleOut: 'Vestibüler iç kulak hassasiyeti (Motion Sickness) için veteriner hekim reçeteli Maropitant (Cerenia) bulantı önleyici ilaç kullanımı anksiyete döngüsünü kırar.'
    },
    whatNotToDo: [
      'Arabada kustuğu veya salya akıttığı için köpeğe kızmayın (Fizyolojik bir bulantı refleksidir).',
      'Köpeği zorla kucaklayıp arabanın içine fırlatmayın.'
    ],
    whenToCallProfessional: [
      'Araba hareket ettiği anda kendini camdan atmaya çalışacak veya sahibine saldıracak düzeyde panik krizleri varsa.'
    ]
  },
  {
    id: 'handling-vet-grooming-fear',
    slug: 'veteriner-tirnak-ve-bakim-korkusu',
    title: 'VETERİNER MUAYENESİ, TIRNAK KESİMİ VE BAKIM FOBİSİ',
    category: 'fear',
    severity: 'medium',
    shortDescription: 'Tırnak makası, fırça veya kulak damlası gördüğünde kaçma, masaya konulduğunda hırlama veya panik krizine girme.',
    rootCauses: [
      'Geçmişte tırnağın canlı pembe dokusuna (quick) basılıp derin acı yaşatılmış olması',
      'Fiziksel kısıtlanma (restraint) paniği ve hareket edememe çaresizliği',
      'Kooperatif bakım (rıza temelli yaklaşım) yerine zorla tutularak işlem yapılması travması'
    ],
    positiveProtocol: {
      protocolName: 'Kooperatif Bakım ve Çene Hedefleme Protokolü (Cooperative Care)',
      overview: 'Köpeğe "Dur" deme yetkisi vererek güven inşa edin; rıza gösterdikçe milim milim bakım uygulayın.',
      steps: [
        {
          stepNumber: 1,
          title: 'Tırnak Makası Yerdeyken Ödül Saçın',
          instruction: 'Makası elinize almayın; yere koyun ve etrafına ödül maması saçın. Aletin görüntüsünü pozitifleştirin.',
          scientificTip: 'Aletin kendisi nötrleşmeden patiye dokundurulamaz.'
        },
        {
          stepNumber: 2,
          title: 'Çenesini Elinize Koyma Rızası (Chin Rest)',
          instruction: 'Köpek çenesini avucunuza koyduğunda tırnağına dokunun; çenesini çekerse bakımı derhal durdurun.',
          scientificTip: 'Kontrolün kendisinde olduğunu bilen köpeklerin stres seviyesi %80 oranında düşer.'
        },
        {
          stepNumber: 3,
          title: 'Günde Yalnızca 1 Tırnak Kuralı',
          instruction: 'Tek bir seansta tüm patileri bitirmeye çalışmayın. Günde 1 tırnak kesip dev bir ödülle günü bitirin.'
        }
      ]
    },
    merckProtocol: {
      management: 'Köpeğin üzerine 3 kişinin çullanarak zorla işlem yapmasını durdurun. Fıstık ezmeli Lickimat\'ı duvara yapıştırarak dikkatini odağa toplayın.',
      modification: 'Dokunma desensitizasyonu: Patiye 1 saniye dokunma = Lezzetli ödül döngüsü.',
      responseSubstitution: 'Tepki İkamesi: Çenesini mindere veya ele yaslayarak sakin durma davranışı.',
      medicalRuleOut: 'Kulak enfeksiyonu (otit), tırnak batığı veya pati yastığı apsesi gibi acı veren lezyonlar hekimce tedavi edilmelidir.'
    },
    whatNotToDo: [
      'Köpeği kündeye getirip hareketsiz kılarak zorla tırnak kesmeyin (Veteriner fobisinin ana sebebidir).',
      'Tırnak makasıyla köpeği kovalamayın.'
    ],
    whenToCallProfessional: [
      'Rutin muayenede veya tırnak bakımında veteriner hekimi ısıracak seviyede savunma agresyonu varsa hekim kontrollü hafif sedasyon gereklidir.'
    ]
  },
  {
    id: 'door-dashing-escape',
    slug: 'kapi-acildiginda-evden-bahceden-kacma',
    title: 'KAPI AÇILDIĞINDA EVDEN / BAHÇEDEN KAÇMA (DOOR DASHING)',
    category: 'habits',
    severity: 'medium',
    shortDescription: 'Sokak kapısı veya bahçe kapısı açıldığı an fırlayıp kaçma, çağrıldığında dönmeme ve yakalamaca oynama.',
    rootCauses: [
      'Dış dünyadaki uyarım ve kokuların ev ortamından katbekat cazip olması',
      'Kapı aralığının doğrudan "özgürlük ve koşma oyunu" ile koşullanmış olması',
      'Sahibin arkasından koşarak köpeğe kovalama oyunu oynattığı yanılgısı yaratması'
    ],
    positiveProtocol: {
      protocolName: 'Görünmez Kapı Bariyeri ve "Otur-Bekle" Protokolü',
      overview: 'Kapı tamamen açıkken bile sahibinden izin komutu gelmeden eşikten tek adım atılmayacağını öğretin.',
      steps: [
        {
          stepNumber: 1,
          title: 'Kapı Koluna El Değdiğinde Oturma',
          instruction: 'Kapı koluna dokunun; köpek oturana kadar kapıyı açmayın. Oturduğu an kapıyı 5 cm aralayın.',
          scientificTip: 'Köpek fırlamaya yeltenir yeltenmez kapıyı hemen geri kapatarak "acele edersen kapı kapanır" kuralını öğretin.'
        },
        {
          stepNumber: 2,
          title: 'Kapı Tam Açıkken Bekleme Egzersizi',
          instruction: 'Tasmayı tutarak kapıyı sonuna kadar açın. Köpek kapı eşiğinde beklerken içeriye doğru ödül atın.',
        },
        {
          stepNumber: 3,
          title: 'İzin Kelimesi ile Geçiş: "Hadi / Serbest"',
          instruction: 'Dışarı çıkış ödülünü yalnızca sizin verdiğiniz izin kelimesine bağlayın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Dış kapının önüne bebek güvenlik bariyeri (baby gate) takın; bahçe kapısını daima kilitli tutun. Kapı açılırken köpeği tasmayla kontrol altında tutun.',
      modification: 'Kapı açılması = Sahibin gözünün içine bakıp oturma koşullanması.',
      responseSubstitution: 'Tepki İkamesi (DRI): Kapı zili çaldığında veya kapı açıldığında kapıdan 2 metre uzaktaki matında oturup bekleme.',
      medicalRuleOut: 'Kısırlaştırılmamış erkek köpeklerde kilometrelerce öteden dişi kokusu alarak kaçma hormonal dürtüsü hekimle değerlendirilmelidir.'
    },
    whatNotToDo: [
      'Kaçtığında arkasından bağırarak koşmayın (Köpek bunu harika bir kovalamaca oyunu sanıp daha da hızlanır).',
      'Geri geldiğinde kaçtığı için köpeğe kızmayın (Geri gelmeyi cezalandırmış olursunuz).'
    ],
    whenToCallProfessional: [
      'Köpek ana caddelere fırlayıp araba çarpması hayati tehlikesi yaratıyorsa acil etolojik müdahale şarttır.'
    ]
  },
  {
    id: 'jumping-on-people',
    slug: 'insanlarin-uzerine-ziplama-selamlama',
    title: 'İNSANLARIN ÜZERİNE ZIPLAMA (COŞKULU SELAMLAMA)',
    category: 'habits',
    severity: 'low',
    shortDescription: 'Eve birisi geldiğinde veya sokakta yürürken sevinçten insanların üzerine atlayıp kıyafetleri kirletme.',
    rootCauses: [
      'Köpeklerin doğal selamlama ritüeli yüz yüze temastır; yüze ulaşmaya çalışırlar.',
      'İnsanların zıplayınca köpeği iterek veya gülerek ödüllendirmiş olması (İstemsiz pekiştirme).'
    ],
    positiveProtocol: {
      protocolName: 'Dört Pati Yerde Kuralı (Four on the Floor)',
      overview: 'Zıplamanın iletişimi tamamen kestiği, 4 patinin yerde olmasının ilgi getirdiği kuralı.',
      steps: [
        {
          stepNumber: 1,
          title: 'Zıpladığı An Arkasını Dönün ve Göz Temasını Kesin',
          instruction: 'Kollarınızı göğsünüzde bağlayın, sırtınızı dönün ve köpeği tamamen yok sayın (Negatif Ceza -P).',
        },
        {
          stepNumber: 2,
          title: '4 Pati Yere Değdiği Salisede Ödüllendirin',
          instruction: 'Pati yere bastığı anda yere doğru eğilip sakin bir sesle ödüllendirin.'
        }
      ]
    },
    merckProtocol: {
      management: 'Misafir geldiğinde köpeği tasmayla kontrol altında tutun veya kapı arkasında bariyer arkasında karşılatın; misafire zıplamasını pekiştirmeyin.',
      modification: 'Dört pati yerde (Four on the Floor) ödüllendirmesi ve zıplama anında ilgiyi anında sıfırlama.',
      responseSubstitution: 'Tepki İkamesi (DRI - En etkili Merck yöntemi): Kapı açıldığı anda "Otur" (Sit) davranışı. Köpek aynı anda hem oturup hem de bir insanın üzerine zıplayamaz.',
      medicalRuleOut: 'Arka bacaklarda veya kalçada patella luksasyonu veya eklem ağrısı olan köpekler zıplarken veya inerken ani acı duyup agresyon gösterebilir.'
    },
    whatNotToDo: [
      'Zıplayınca diziyle köpeğin göğsüne vurmayın (Eski moda ve kaburga zedeleyici bir yöntemdir).',
      'Zıplayınca elleriyle sevmeyin (Köpek zıplamanın ödül getirdiğini sanır).'
    ],
    whenToCallProfessional: [
      'Büyük ırk köpek çocukları veya yaşlıları devirip yaralanmaya sebep oluyorsa.'
    ]
  },
  {
    id: 'fear-thunder-fireworks',
    slug: 'gok-gurultusu-ve-havai-fisek-korkusu',
    title: 'GÖK GÜRÜLTÜSÜ VE HAVAİ FİŞEK FOBİSİ',
    category: 'fear',
    severity: 'medium',
    shortDescription: 'Fırtına, şimşek veya silah/patlama seslerinde tir tir titreme, banyoya saklanma ve nefes darlığı.',
    rootCauses: [
      'Hassas köpek işitme duyusu (İnsan kulağının 4 katı frekans algısı)',
      'Barometrik basınç değişimlerini hissetme ve kaçış refleksi',
      'Genetik korku yatkınlığı ve erken dönem ses desensitizasyonu eksikliği'
    ],
    positiveProtocol: {
      protocolName: 'Akustik Desensitizasyon ve Güvenli Mağara',
      overview: 'Sakin günlerde düşük sesle alıştırma ve fırtına anında güvenli bir sığınak yaratma.',
      steps: [
        {
          stepNumber: 1,
          title: 'Güvenli Sığınak (Mağara) Hazırlayın',
          instruction: 'Pencereleri kapatın, perdeleri çekin, banyo veya koridor gibi iç mekanlara battaniyelerle sığınak kurun.'
        },
        {
          stepNumber: 2,
          title: 'Beyaz Gürültü veya Klasik Müzik Açın',
          instruction: 'Dışarıdan gelen frekans patlamalarını maskelemek için ritmik müzik açın.'
        }
      ]
    },
    merckProtocol: {
      management: 'Fırtına başlamadan önce perdeleri kapatın, beyaz gürültü makinesi veya vantilatör çalıştırın; köpeğin karanlık güvenli bir odaya (banyo, gardırop) geçişine izin verin.',
      modification: 'Fırtına ses kayıtlarıyla mikro desensitizasyon: Fırtına sesi en düşük volümdeyken oyun oynama ve ciğer ödülü verme.',
      responseSubstitution: 'Tepki İkamesi: Sakinleşme battaniyesine geçip çiğneme oyuncağı kemirme davranışını pekiştirme.',
      medicalRuleOut: 'Gürültü fobisi aniden başlayan yetişkin köpeklerde kas-iskelet sistemi ağrısı veya orta kulak iltihabı araştırması yapılmalıdır. Şiddetli panik krizlerinde veteriner hekim reçeteli Trazodone vb. anksiyolitikler Merck tarafından önerilir.'
    },
    whatNotToDo: [
      'Korktuğunda köpeği dışarı zorla çıkarmayın (Taşma / Flooding felakete yol açar).',
      'Korkusunu "Şımarıklık yapıyor" diyerek azarlamayın.'
    ],
    whenToCallProfessional: [
      'Fırtına anında kendine zarar verme veya camdan atlama girişimi varsa veteriner hekim reçeteli anksiyolitik desteği şarttır.'
    ]
  },
  {
    id: 'potty-regression',
    slug: 'tuvalet-egitimi-gerilemesi-eve-yapma',
    title: 'TUVALET EĞİTİMİ GERİLEMESİ VE EVE YAPMA',
    category: 'habits',
    severity: 'low',
    shortDescription: 'Önceden dışarı yapan köpeğin eve, halılara veya yatağa aniden idrar/dışkı bırakmaya başlaması.',
    rootCauses: [
      'Öncelikle idrar yolu enfeksiyonu, sistit veya böbrek sorunları (Tıbbi sebep)',
      'Yaşlı köpeklerde DISHAA Demans belirtisi (H - House Soiling)',
      'Evde stres faktörü (yeni bebek, yeni eşya, taşınma)',
      'Hatalı temizlik (Çamaşır suyu amonyak içerir ve köpeğe tekrar buraya yap sinyali verir)'
    ],
    positiveProtocol: {
      protocolName: 'Enzimatik Temizlik ve Rutin Sıfırlama',
      overview: 'Tıbbi kontrol sonrası yavru köpek tuvalet rutinine 1 hafta geri dönme.',
      steps: [
        {
          stepNumber: 1,
          title: 'Önce Veteriner İdrar Tahlili',
          instruction: 'Ani tuvalet kaçırma vakalarının %60\'ı sistit veya böbrek sorunudur.'
        },
        {
          stepNumber: 2,
          title: 'Enzimatik Temizleyici ile Kokuyu Moleküler Yok Edin',
          instruction: 'Halılardaki kokuyu amonyaksız enzimatik sprey ile nötrleştirin.'
        },
        {
          stepNumber: 3,
          title: 'Dışarı Yaptığında Yüksek Coşkuyla Ödüllendirin',
          instruction: 'Dışarıda tuvaletini bitirdiği an son damlası düşer düşmez en sevdiği ödülü verin.'
        }
      ]
    },
    merckProtocol: {
      management: 'Kaza yapılan alanları enzimatik temizleyici ile temizleyin; dışarı çıkarma sıklığını geçici olarak 2-3 saatte bire yükseltin.',
      modification: 'Dışarıda tuvaletini yapar yapmaz 3 saniye içinde yüksek değerli ödül ile pekiştirme.',
      responseSubstitution: 'Tepki İkamesi: Kapı önündeki zili çalarak dışarı çıkma isteğini haber verme (Pati zili eğitimi).',
      medicalRuleOut: 'İdrar yolu enfeksiyonu (Sistit), böbrek taşı, diyabet, Cushing sendromu ve 8 yaş üstü köpeklerde Merck DISHAA Kognitif Disfonksiyon Sendromu (CDS) hekimce mutlaka dışlanmalıdır.'
    },
    whatNotToDo: [
      'Burnunu pisliğe sürtmeyin (İğrenç, bilim dışı ve travmatik bir harekettir; dışkı yeme hastalığına yol açar).',
      'Eve yaptığını saatler sonra görüp bağırmayın (Köpek cezayı o anki davranışınızla bağdaştırır).'
    ],
    whenToCallProfessional: [
      'Tıbbi sorun olmadığı halde 1 aydan uzun süren inatçı tuvalet kaçırmalarda.'
    ]
  },
  {
    id: 'pet-food-stealing',
    slug: 'evcil-hayvan-mamasi-calma-ve-kaynaktan-uzaklastirma',
    title: 'EVCİL HAYVAN MAMASI ÇALMA (KEDİ/TAVŞAN MAMASI & SU KABI GAZİLEME)',
    category: 'habits',
    severity: 'medium',
    shortDescription: 'Köpeğin evdeki diğer evcil hayvanların (kedi, tavşan, muhabbet kuşu) mama kabını, su kaplarını veya ödüllerini sürekli çalması ve tüketmesi.',
    rootCauses: [
      'Kedi mamalarının yüksek protein ve yağ içeriğinin köpeklere son derece çekici gelmesi (Besin çekim etkisi)',
      'Pekiştirilen kaynak koruma güdüsü: Bir kez mama çalıp yiyen köpek bunu tekrarlar',
      'Yetersiz porsiyon veya sindirim enzimi sorunu nedeniyle süregelen açlık hissi',
      'Evdeki diğer hayvanın beslenme saatiyle köpeğin beslenme saatinin örtüşmesi'
    ],
    positiveProtocol: {
      protocolName: 'Çevre Yönetimi, "Terk Et" (Leave It) Protokolü ve Beslenme Ayrımı',
      overview: 'Kedi mamasına erişimi fiziksel olarak engelleyin; aynı zamanda "Terk Et" komutunu güçlendirip köpeğin kendi mamasında tatminini artırın.',
      steps: [
        {
          stepNumber: 1,
          title: 'Beslenme Alanlarını Fiziksel Olarak Ayırın',
          instruction: 'Kedi mamasını köpeğin ulaşamayacağı yüksek bir tezgah, raf veya kilitli bir odaya taşıyın. Kedi kapısı (cat door) kurarak köpeğin geçemeyeceği bir besleme bölgesi oluşturun.',
          scientificTip: 'Davranışı deneme imkânı kalmadığında pekişme zinciri kendiliğinden söner. Çevre yönetimi her zaman ilk adımdır.'
        },
        {
          stepNumber: 2,
          title: '"Terk Et" (Leave It) Komutunu Düşük Değerli Nesnelerle İnşa Edin',
          instruction: 'Yere bir bisküvi koyun, köpek koklarken elinizle kapatın. Geri çekildiği anda "Terk Et!" ile süper ödül (ciğer, peynir) verin. Günde 3 kez, 5 tekrar.',
          scientificTip: 'Leave It hiçbir zaman birden kedi maması gibi yüksek değerli nesnelerle başlayamaz; köpek önce düşük değerli nesnelerle 95% güvenilirliğe ulaşmalıdır.'
        },
        {
          stepNumber: 3,
          title: 'Genelleme: Kedi Maması Kabına "Terk Et" Uygulayın',
          instruction: 'Kedi mamasını kapalı bir kap içinde gözetim altında köpeğin önüne getirin. "Terk Et" ve başarıyla çekilirse coşkuyla ödüllendirin. Kademeli olarak gerçek beslenme ortamına taşıyın.',
          scientificTip: 'Her uygarlık ortamında 10 tekrar başarıya ulaştıktan sonra bir sonraki zorluğa geçin.'
        }
      ]
    },
    merckProtocol: {
      management: 'Kedi/tavşan mama kabını köpeğin erişemeyeceği yüksek bir zemine kaldırın. Kedi kapısı veya kilitli kapı ile beslenme odası ayrımı yapın. Kedi maması tüketiminden şüpheleniliyorsa köpeğin günlük kalori alımını hesaba katın.',
      modification: 'Leave It komutu kademeli genelleme: Önce düşük değerli yiyecek → Orta değer → Kedi maması. Her aşamada 95% güvenilirlik hedefleyin.',
      responseSubstitution: 'Tepki İkamesi: Diğer hayvanın beslenmesi sırasında köpeğe eş zamanlı olarak kendi ödüllü doldurma oyuncağını (Kong veya Lickimat) verin.',
      medicalRuleOut: 'Ekzokrin Pankreas Yetersizliği (EPI), hipotiroidizm veya bağırsak parazitleri nedeniyle doymayan köpekler yüksek açlık güdüsüyle başkalarının mamasını yer. Sindirim muayenesi önerilir.'
    },
    whatNotToDo: [
      'Köpeğe mama çalarken bağırıp ceza vermeyin; sadece geri çekilmesini sağlar, dürtüyü ortadan kaldırmaz.',
      'Kedi mamasını yere bırakıp köpeğin "Hayır!" öğrenmesini kendi kendine beklemek ciddi sağlık risklerine yol açar.',
      'Köpeği kedi mamasına eriştikten sonra dövmek/sert vurmak kaynağa saldırganlık davranışını tetikleyebilir.'
    ],
    whenToCallProfessional: [
      'Mama çalmayı engellemek istediğinizde köpek dişini gösteriyor veya ısırma girişiminde bulunuyorsa (Kaynak Koruma Agresyonu).',
      'Kedi maması düzenli tüketimi sonucunda köpekte pankreatit belirtileri (kusma, halsizlik, karın ağrısı) görülüyorsa acilen veterinere başvurun.'
    ]
  },
  {
    id: 'garden-escape',
    slug: 'bahce-ve-cit-kacisi',
    title: 'BAHÇE VE ÇİT KAÇIŞI (KAÇMA \u0026 ÖZGÜRLÜK ARAYIŞI)',
    category: 'predatory',
    severity: 'high',
    shortDescription: 'Köpeğin bahçe çitini aşarak, tünelerek veya kapıyı açarak sürekli kaçmaya çalışması; trafik ve kaybolma riski.',
    rootCauses: [
      'Boşaltılamamış av/keşif enerjisi ve kronik can sıkıntısı',
      'Bahçenin köpek için yeterli zenginleştirme (enrichment) sunmaması',
      'Dişilerde hormonal dürtü (kızgınlık) veya erkeklerde eşleşme güdüsü',
      'Dışarıdaki sesler veya koku izlerinin yoğun merak çekmesi'
    ],
    positiveProtocol: {
      protocolName: 'Bahçe Zenginleştirme ve "Sınır" (Boundary) Eğitimi',
      overview: 'Kaçış motivasyonunu içeride karşılayarak çitin anlamsızlaşmasını sağlayın; ardından çit sınırını ödülle şartlandırın.',
      steps: [
        {
          stepNumber: 1,
          title: 'Günlük Enerji Bütçesini Bahçe İçinde Tüketin',
          instruction: 'Her sabah en az 20 dakika flirt pole (kamçı oyuncak) veya frisbee ile yüksek tempolu oyun yapın. Koklama ödevleri: Bahçeye yiyecekler saklayın ve köpeğin burnuyla aramasını sağlayın.',
          scientificTip: '10 dakikalık koklama egzersizi 30 dakika koşmaya eşdeğer zihinsel yorgunluk yaratır.'
        },
        {
          stepNumber: 2,
          title: 'Çit Sınırını "Harika Şeyler Oluyor" Yeri Yapın',
          instruction: 'Uzun takip tasmasıyla çit kenarına yaklaşmasına izin verin; çite değmeden geri döndüğünde yüksek değerli ödül. Çite ellemek = hiçbir şey olmuyor, geri dönmek = parti.',
          scientificTip: 'Ceza yerine geri dönme davranışını seçmek için çitin anlamsız, sahibinin yanı ödüllü olmasını sağlayın.'
        },
        {
          stepNumber: 3,
          title: 'Altyapı İyileştirmesi: Kaçış Rotasını Fiziksel Kapatın',
          instruction: 'Kazı yapıyorsa çitin dibine L şeklinde gömülü tel örgü döşeyin. Zıplayarak geçiyorsa çit yüksekliğini artırın veya köpeğe dönük eğimli çit ekleyin.',
          scientificTip: 'Fiziksel engel her zaman eğitim tekniğiyle birlikte uygulanmalıdır; ikisi birbirinin tamamlayıcısıdır.'
        }
      ]
    },
    merckProtocol: {
      management: 'Köpeği bahçede gözetimsiz yalnız bırakmayın. Kaçış noktalarını (tünel başlangıçları, kopuk çit gözleri) tespit edip fiziksel olarak kapatın. Hormonal köpeklerde kısırlaştırma kaçış güdüsünü belirgin biçimde azaltır.',
      modification: 'Sınır Eğitimi (Boundary Training): Uzun takip tasmasıyla çit kenarına kontrollü yaklaşma; geri dönüşleri yüksek değerli ödülle pekiştirme.',
      responseSubstitution: 'Tepki İkamesi (DRI): Çite doğru yürümek yerine sahibe bakıp geri dönme davranışı pekiştirilir.',
      medicalRuleOut: 'Kısırlaştırılmamış köpeklerde cinsel hormon düzeyleri (testosteron, östrojen) kaçış dürtüsünü dramatik biçimde artırır. Kısırlaştırma prosedürü uygulanması veteriner tarafından değerlendirilmelidir.'
    },
    whatNotToDo: [
      'Yakaladıktan sonra ceza vermeyin; köpek eve dönmenin kötü sonuç doğurduğunu öğrenir ve bir daha gelmez.',
      'Elektrikli şok (invisible fence) sistemleri köpeklerde ciddi korku ve agresyon yaratabilir.',
      'Zincire bağlamak kaçış enerjisini çözmez; hayal kırıklığını ve reaktiviteyi artırır.'
    ],
    whenToCallProfessional: [
      'Köpek trafiğe atlayıp kayboluyorsa ve temel sınır eğitimi işe yaramıyorsa profesyonel çalışma köpeği etoloğu gereklidir.',
      'Kaçış davranışı ayrılık anksiyetesiyle (uluma, yıkım) birleşiyorsa çift tanılı tedavi planlanmalıdır.'
    ]
  },
  {
    id: 'nail-trimming-phobia',
    slug: 'tirnak-kesim-fobisi-ve-vucut-bakim-direnci',
    title: 'TIRNAK KESİM FOBİSİ \u0026 VÜCUT BAKIM DİRENCİ (FIRÇA, KULAK, DİŞ)',
    category: 'fear',
    severity: 'medium',
    shortDescription: 'Tırnak kesimi, fırçalama, kulak temizliği veya diş fırçalama sırasında donma, ısırma girişimi ve şiddetli direnç.',
    rootCauses: [
      'Geçmişte hızlı ve zorla uygulanan tırnak kesiminin acı kaydı bırakması (Quick – damarın kesilmesi)',
      'Tutulma ve hareket kısıtlanmasının köpekte "kaçış mümkün değil" panik tepkisi yaratması',
      'Bakım aletlerinin (makasın tıklaması, fırça dokunuşu) koşullu korku uyarıcısına dönüşmesi',
      'Daha önce veteriner veya groomerde uygulanan kaba müdahale travması'
    ],
    positiveProtocol: {
      protocolName: 'Kooperatif Bakım (Cooperative Care) - Alet Desensitizasyonu ve Yalama Tahtası',
      overview: 'Köpeğin bakım sürecini kendisi "seçmesini" sağlayan gönüllü katılım modeli; tırnak makasını önce görüp koklayan, sonra dokunulan, sonra kullanan şeklinde kademeli alıştırma.',
      steps: [
        {
          stepNumber: 1,
          title: 'Tırnak Makasını Nötr Bir Nesneye Dönüştürün',
          instruction: 'Makası yere bırakın ve köpeğin özgürce koklamasına izin verin. Her koklama anında "Evet!" ve ödül. 3-5 günü bu adıma ayırın. Makası henüz tutmayın.',
          scientificTip: 'Alet günlük hayatın bir parçasına dönüşmeli; "makasın görünmesi = kötü şey geliyor" çağrışımını kırmak önce gelir.'
        },
        {
          stepNumber: 2,
          title: 'Yalama Tahtası veya Dondurulmuş Kong ile Dikkat Bölme',
          instruction: 'Fıstık ezmesi veya haşlanmış tatlı patates ezilmiş bir Lickimat\'ı duvara veya buzdolabına yapıştırın. Köpek yaslarken patilerini sırayla hızla tutup bırakın; yalarken ödülü tüketiyor olması koşullu güvenlik sağlar.',
          scientificTip: 'Yalama eylemi endorfin ve serotonin salgılar; stres tepkisiyle doğrudan antagonistir.'
        },
        {
          stepNumber: 3,
          title: 'Pati Manipülasyonu Önce Oyun, Sonra Makas',
          instruction: 'Önce patiyi tutun, tırnak makasıyla sadece dokunun (kesmeden), hemen ödül. 5 seans sonra yalnızca 1 tırnağı kesin ve büyük kutlama yapın. Bir seansta tüm tırnakları kesmeye çalışmayın.',
          scientificTip: '"Bir ve Bitti" kuralı: Her seans tek bir tırnak veya tek bir bakım adımıyla bitmeli; bütün bir oturumu bitirmeye zorlamak en büyük hatadır.'
        }
      ]
    },
    merckProtocol: {
      management: 'Tırnak kesimleri arasındaki süreyi kısaltarak tırnakların çok uzamamasını sağlayın; kısa tırnak daha az hassas dokuda çalışılması anlamına gelir. İlk seansları evinizde, tanıdık bir alanda gerçekleştirin.',
      modification: 'Kooperatif Bakım Protokolü: Alet duyarsızlaştırması → Pati dokunuş duyarsızlaştırması → Tek tırnak kesimi → Tüm tırnaklar. Her adım 95% sakinlikle tamamlanmadan bir sonrakine geçilmez.',
      responseSubstitution: 'Tepki İkamesi: Makasın görünmesi = Yalama tahtasına koşarak başını oraya koyma davranışı (köpek kendi isteğiyle bakım istasyonuna gelir).',
      medicalRuleOut: 'Tırnak yatağı enfeksiyonu, parmak arası fungal oluşum veya artrit nedeniyle dokunan tırnak gerçekten acıtıyor olabilir. Tüm pati ve tırnak yataklarını veteriner gözlemlemeden önce zorlama eğitim yapılmamalıdır.'
    },
    whatNotToDo: [
      'Köpeği iki kişi tutarken zorla devirmek ve hızla tırnakları kesmek en büyük travma kaynağıdır; fobiye dönüşür.',
      '"Alışır" diye birden tüm tırnakları kesmek için ısrar etmeyin; bir "quick" (damar) kesilmesi aylarca kazanılan güveni yok eder.',
      'Direniş anında ödül vermeyin; hareketsiz ve sakin olduğu tek anda ödüllendirin.'
    ],
    whenToCallProfessional: [
      'Tırnak kesimi sırasında köpek ısırma girişiminde bulunuyorsa sertifikalı köpek eğiticisi ve mümkünse sertifikalı groomer birlikte çalışmalıdır.',
      'Vejetatif semptomlar (aşırı salya, titriye titriye donma) görülüyorsa veteriner kanalıyla hafif sedatif destekli bakım seansları değerlendirilebilir.'
    ]
  }
];
