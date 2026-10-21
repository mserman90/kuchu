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

export const PROBLEMS_EN_MAP: Record<string, Partial<BehaviorProblem>> = {
  'barking-reactivity': {
    title: 'EXCESSIVE BARKING (DOORBELL, WINDOW & STREET)',
    shortDescription: 'Uncontrollable alarm barking when the doorbell rings, at passersby through windows, or on walks.',
    rootCauses: [
      'Territorial defense reflex and heightened physiological arousal',
      'Desire to increase distance from perceived threats',
      'Postman syndrome: believing barking successfully drove the intruder away'
    ],
    positiveProtocol: {
      protocolName: 'Desensitization and Counter-Conditioning (CC/DS)',
      overview: 'Transform the doorbell sound from an alarm trigger into a predictor of delicious rewards on a mat.',
      steps: [
        {
          stepNumber: 1,
          title: 'Lower Trigger Volume',
          instruction: 'Play recorded chime sounds from your phone at low volume. The split-second the dog stays calm, say "Yes!" and reward with high-value treats.',
          scientificTip: 'Keep training strictly sub-threshold; if barking begins, cortisol is already released.'
        },
        {
          stepNumber: 2,
          title: 'Pair Chime with "Go to Mat"',
          instruction: 'Condition the dog to sprint to a designated training mat upon hearing the doorbell (Differential Reinforcement of Incompatible Behavior - DRI).',
          scientificTip: 'A dog lying calmly on a mat or chewing a toy cannot simultaneously charge the door.'
        },
        {
          stepNumber: 3,
          title: 'Gradual Real-Life Provocation',
          instruction: 'Have a helper ring the actual doorbell while keeping the dog focused on a high-value chew mat at safe distance.',
          scientificTip: 'Never scold when barking happens; quietly block the dog’s line of sight without yelling.'
        }
      ]
    },
    merckProtocol: {
      management: 'Apply frosted window film or close curtains; mute loud chimes to prevent repetitive rehearsal of door-charging.',
      modification: 'Sub-Threshold Desensitization: Pair soft doorbell sounds with high-value treats.',
      responseSubstitution: 'Response Substitution (DRI): Running to a designated station mat instead of charging the front door.',
      medicalRuleOut: 'Rule out hearing loss or chronic ear infections which increase acoustic startle sensitivity.'
    },
    whatNotToDo: [
      'Never yell "QUIET!" or "NO!" — the dog perceives human shouting as barking along.',
      'Do not use citronella spray or electric shock collars; these induce chronic anxiety and redirected aggression.'
    ],
    whenToCallProfessional: [
      'If barking escalates into charging people or snapping at the door threshold, consult a certified behaviorist.',
      'If the dog barks continuously for more than 2 hours daily despite environmental management.'
    ]
  },
  'livestock-predation': {
    title: 'LIVESTOCK & SMALL ANIMAL PREDATION (PREDATORY DRIFT)',
    shortDescription: 'Instinctual chasing, capturing, or harming of chickens, sheep, lambs, cats, or waterfowl in rural settings.',
    rootCauses: [
      'Strong innate predatory motor patterns (Orient -> Stalk -> Chase -> Grab -> Kill)',
      'Sudden flight of prey animals triggering autonomic chase reflexes',
      'Lack of appropriate outlets for channeled instinctual drive'
    ],
    positiveProtocol: {
      protocolName: 'Flirt Pole Channeling & Predatory Impulse Control',
      overview: 'Provide a structured, legal predatory outlet while conditioning impulse control and rock-solid recall.',
      steps: [
        {
          stepNumber: 1,
          title: 'Channel Prey Drive with a Flirt Pole',
          instruction: 'Use a fleece flirt pole lure in the yard for 15 minutes daily. Teach "Wait", "Get it!", and "Drop it!" in high arousal.',
          scientificTip: 'Controlled drive fulfillment reduces opportunistic hunting outbursts.'
        },
        {
          stepNumber: 2,
          title: 'Sub-Threshold Long Line Training',
          instruction: 'Keep the dog on a 15-meter biothane long line near livestock. Reward immediate eye contact away from animals.',
          scientificTip: 'Never allow unsupervised rehearsal around livestock.'
        },
        {
          stepNumber: 3,
          title: 'Premack Principle (Grandma’s Rule)',
          instruction: 'Reward calm disengagement by allowing controlled, calm scent observation from a safe distance.',
          scientificTip: 'Access to natural stimulation is the ultimate reinforcer.'
        }
      ]
    },
    merckProtocol: {
      management: 'Double-fence all livestock perimeters; keep dog strictly on a long line in rural pastures.',
      modification: 'Premack conditioning and impulse release via artificial lures.',
      responseSubstitution: 'Response Substitution (DRI): Dropping into a firm "DOWN" upon visual spotting of animals.',
      medicalRuleOut: 'Rule out exocrine pancreatic insufficiency (EPI) or nutritional deficits in coprophagic/predatory cases.'
    },
    whatNotToDo: [
      'Never tie dead poultry to the dog’s neck or use beatings (cruel folk myths that cause trauma without curbing instinct).',
      'Do not use shock collars, which cause erratic panic and redirected attacks.'
    ],
    whenToCallProfessional: [
      'If the dog has already killed livestock or pets, professional working-dog ethologist guidance is mandatory.',
      'If predatory tunnel vision prevents hearing any voice cues.'
    ]
  },
  'separation-anxiety': {
    title: 'SEPARATION ANXIETY & ISOLATION DISTRESS',
    shortDescription: 'Distressed howling, scratching at doors, heavy salivation, and destructive chewing when left alone.',
    rootCauses: [
      'Primitive survival fear that isolation from the family group equals death',
      'Over-attachment and lack of gradual independence training in puppyhood',
      'Traumatic boarding or sudden routine changes'
    ],
    positiveProtocol: {
      protocolName: 'Sub-Threshold Systematic Desensitization',
      overview: 'Desensitize departure cues and increase alone duration strictly below the panic threshold.',
      steps: [
        {
          stepNumber: 1,
          title: 'Neutralize Departure Cues',
          instruction: 'Pick up keys, put on coat, and handle bags, but sit down and read instead of departing.',
          scientificTip: 'Pre-departure cues trigger anticipatory cortisol release.'
        },
        {
          stepNumber: 2,
          title: '1-Second Micro-Departures',
          instruction: 'Step outside the door for literally 1 second and re-enter calmly before any distress begins.',
          scientificTip: 'Building trust requires hundreds of repetitions where the dog never enters panic.'
        },
        {
          stepNumber: 3,
          title: 'Gradually Extend Duration',
          instruction: 'Expand alone duration systematically (5s, 15s, 1m, 5m, 15m) using randomized duration schedules.',
          scientificTip: 'Always return BEFORE the dog vocalizes or stresses.'
        }
      ]
    },
    merckProtocol: {
      management: 'Never leave the dog alone above threshold during therapy (utilize dog daycares or sitters).',
      modification: 'Sub-threshold departure conditioning with randomized micro-durations.',
      responseSubstitution: 'Response Substitution: Licking a frozen stuffed Kong upon departure (licking releases calming endorphins).',
      medicalRuleOut: 'In severe panic with self-mutilation, veterinary-prescribed anxiolytics are medically mandatory.'
    },
    whatNotToDo: [
      'Never scold the dog upon return for destroyed items (amplifies departure terror).',
      'Never crate an anxious dog and allow them to "cry it out" (causes severe psychological trauma).'
    ],
    whenToCallProfessional: [
      'If the dog injures paw pads or breaks teeth attempting to escape crates or doors.',
      'If howling continues unabated for hours.'
    ]
  },
  'coprophagia': {
    title: 'STOOL EATING (COPROPHAGIA - OWN OR OTHER FECES)',
    shortDescription: 'Seeking out and consuming own feces, other dogs’ feces, or cat/livestock droppings.',
    rootCauses: [
      'Nutritional malabsorption, enzyme deficiencies, or intestinal parasites',
      'Boredom and sensory curiosity in puppies',
      'Attempting to erase evidence after being punished for indoor accidents'
    ],
    positiveProtocol: {
      protocolName: 'Immediate Decontamination & "Leave It" Conditioning',
      overview: 'Combine strict environmental cleanup with enzyme support and an automatic check-in reflex.',
      steps: [
        {
          stepNumber: 1,
          title: 'Immediate Waste Removal',
          instruction: 'Scoop feces immediately the second they hit the ground; prevent all rehearsal.',
          scientificTip: 'Behaviors cannot be reinforced if opportunities are physically eliminated.'
        },
        {
          stepNumber: 2,
          title: 'Digestive Enzymes / Fresh Pumpkin',
          instruction: 'Supplement meals with veterinary digestive enzymes or fresh pineapple chunks to make stool unpalatable.',
          scientificTip: 'Bromelain enzymes alter stool taste, rendering it naturally unappealing.'
        },
        {
          stepNumber: 3,
          title: 'Automatic "Leave It and Return"',
          instruction: 'Reward the dog with chicken the instant they finish eliminating outside and turn toward you.',
          scientificTip: 'Incentivize turning back to the handler rather than turning toward the waste.'
        }
      ]
    },
    merckProtocol: {
      management: 'Maintain pristine yard hygiene; muzzle with stool-guard during group walks if necessary.',
      modification: 'High-value recall conditioning immediately after defecation.',
      responseSubstitution: 'Response Substitution (DRI): Running to the owner for a treat immediately after elimination.',
      medicalRuleOut: 'Conduct fecal flotations and screen for exocrine pancreatic insufficiency (EPI).'
    },
    whatNotToDo: [
      'Never rub the dog’s nose in feces or yell (causes secretive consumption to hide it).',
      'Do not chase the dog when it grabs feces (turns it into a fun game of keep-away).'
    ],
    whenToCallProfessional: [
      'If the dog loses weight or has chronic loose stools alongside coprophagia.',
      'If consumption occurs aggressively accompanied by resource guarding.'
    ]
  },
  'compulsive-licking-tail-chasing': {
    title: 'COMPULSIVE DISORDERS (EXCESSIVE PAW LICKING & TAIL CHASING - OCD)',
    shortDescription: 'Incessant licking of paws causing lick granulomas, spinning in circles chasing the tail, or fly-snapping.',
    rootCauses: [
      'Chronic stress, isolation, and sensory deprivation',
      'Underlying atopic dermatitis, food allergies, or spinal nerve pain',
      'Genetic predisposition to repetitive stereotypical behaviors'
    ],
    positiveProtocol: {
      protocolName: 'Sensory Enrichment & Calm Redirection',
      overview: 'Address physical allergens, double mental stimulation, and interrupt loops without panic.',
      steps: [
        {
          stepNumber: 1,
          title: 'Interrupt Without Reprimand',
          instruction: 'The second licking starts, calmly redirect with an interesting scent toy or frozen treat without scolding.',
          scientificTip: 'Punishing compulsive behaviors increases anxiety and intensifies the compulsion.'
        },
        {
          stepNumber: 2,
          title: 'Double Mental Enrichment',
          instruction: 'Introduce snuffle mats, frozen kongs, and 20 minutes of daily nosework exercises.',
          scientificTip: 'Olfactory work stimulates dopamine and serotonin pathways, reducing anxiety loops.'
        }
      ]
    },
    merckProtocol: {
      management: 'Use soft protective recovery boots or cones temporarily to allow skin healing.',
      modification: 'Environmental enrichment and low-arousal redirection.',
      responseSubstitution: 'Response Substitution: Holding and chewing an antler or dental toy instead of paw licking.',
      medicalRuleOut: 'Dermatological allergy testing and spinal orthopedic evaluation for referred nerve sensations.'
    },
    whatNotToDo: [
      'Never spray bitter apple directly on open skin lesions.',
      'Do not yell or restrain forcibly when spinning or licking.'
    ],
    whenToCallProfessional: [
      'If skin becomes ulcerated or tail is chewed bloody, veterinary pharmacological intervention is essential.',
      'If trance-like episodes cannot be interrupted.'
    ]
  },
  'puppy-biting': {
    title: 'PUPPY TEETHING BITING & PANTS TUGGING',
    shortDescription: 'Painful nipping and biting of hands and ankles with razor-sharp puppy deciduous teeth during play.',
    rootCauses: [
      'Deciduous tooth eruption causing gum irritation and aching',
      'Incomplete bite inhibition learning from littermates',
      'High arousal and fatigue during interactive play'
    ],
    positiveProtocol: {
      protocolName: 'Bite Inhibition & Freeze Redirection',
      overview: 'Teach the puppy human skin fragility through social freezing and chew toy trade-ups.',
      steps: [
        {
          stepNumber: 1,
          title: 'Auditory Feedback & Social Freeze',
          instruction: 'When teeth touch skin, emit a high-pitched "OUCH!", freeze like a statue, and turn away for 15 seconds.',
          scientificTip: 'Puppies learn from littermates that biting terminates fun social play.'
        },
        {
          stepNumber: 2,
          title: 'Offer an Alternative Chew Toy',
          instruction: 'Always have a rubber or frozen teething toy within arm’s reach to offer immediately upon mouthiness.',
          scientificTip: 'Never leave hands empty; always trade for an acceptable target.'
        },
        {
          stepNumber: 3,
          title: 'Enforce Rest Time',
          instruction: 'If nipping becomes frenzied, guide the puppy to a quiet playpen or crate for a restorative nap.',
          scientificTip: 'Hyperactive puppy biting is almost always an indicator of overtiredness.'
        }
      ]
    },
    merckProtocol: {
      management: 'Keep puppies in managed puppy-proofed spaces; wear durable shoes around ankle-biters.',
      modification: 'Negative punishment (-P): immediate withdrawal of social engagement upon hard biting.',
      responseSubstitution: 'Response Substitution (DRI): Grabbing a stuffed toy upon approaching family members.',
      medicalRuleOut: 'Examine gums for retained deciduous teeth or dental abnormalities past 6 months.'
    },
    whatNotToDo: [
      'Never hold the muzzle shut or hit the puppy (destroys trust and causes fear of human hands).',
      'Do not wave hands or play rough wrestling games with bare hands.'
    ],
    whenToCallProfessional: [
      'If bite wounds break adult skin repeatedly after 6 months of age.',
      'If biting is accompanied by hard staring, stiff freezing, or resource guarding.'
    ]
  },
  'leash-pulling': {
    title: 'LEASH PULLING & REACTIVE WALKING',
    shortDescription: 'Dragging the owner continuously during walks, leaning into the collar until coughing and choking.',
    rootCauses: [
      'Natural canine pace is 2-3x faster than human walking speed',
      'Opposition reflex: leaning into pressure when resistance is felt',
      'Past history of pulling successfully earning access to exciting smells'
    ],
    positiveProtocol: {
      protocolName: 'Loose Leash Red-Light Green-Light Protocol',
      overview: 'Turn pulling into an absolute dead end while making the handler’s side a rewarding treat zone.',
      steps: [
        {
          stepNumber: 1,
          title: 'Freeze the Instant Leash Tenses',
          instruction: 'The millisecond the leash is pulled tight, stop dead in your tracks. Never take a single forward step under tension.',
          scientificTip: 'Forward motion is the ultimate reward; never reward pulling with forward progress.'
        },
        {
          stepNumber: 2,
          title: 'Walk Forward When Leash Slackens',
          instruction: 'The moment the dog releases tension or checks in with you, praise and resume walking forward.',
          scientificTip: 'Reinforce the slack J-loop in the leash consistently.'
        },
        {
          stepNumber: 3,
          title: 'Practice Frequent U-Turns',
          instruction: 'Change direction 180 degrees whenever the dog starts forging ahead, encouraging constant check-ins.',
          scientificTip: 'Keep the walk mentally engaging and unpredictable.'
        }
      ]
    },
    merckProtocol: {
      management: 'Switch to a well-fitted Y-shaped front-clip harness to mechanically reduce pulling leverage.',
      modification: 'Variable reinforcement for maintaining proximity beside the handler’s leg.',
      responseSubstitution: 'Response Substitution (DRI): Handler eye contact upon seeing forward distractions.',
      medicalRuleOut: 'Inspect for tracheal collapse or cervical disc damage from historic collar pulling.'
    },
    whatNotToDo: [
      'Never use choke chains or prong collars (inflicts serious neck and thyroid trauma).',
      'Avoid retractable flexi leashes which actively train dogs to pull against constant tension.'
    ],
    whenToCallProfessional: [
      'If pulling is accompanied by explosive lunging and snapping at passing dogs.',
      'If the handler is at physical risk of falls or injury.'
    ]
  },
  'resource-guarding': {
    title: 'RESOURCE GUARDING (FOOD BOWL, BONES & TOYS)',
    shortDescription: 'Growling, freezing, or snapping defensively when humans or other pets approach while eating or chewing.',
    rootCauses: [
      'Evolutionary survival instinct to protect scarce food resources',
      'History of humans forcibly snatching items from the dog',
      'Underlying anxiety and insecurity regarding territorial boundaries'
    ],
    positiveProtocol: {
      protocolName: 'Trade-Up & Approaching-Brings-Jackpots Protocol',
      overview: 'Teach the dog that human approach signals an upgrade in value rather than theft.',
      steps: [
        {
          stepNumber: 1,
          title: 'Keep Distance and Toss Treats',
          instruction: 'While the dog is chewing a bone, walk past at safe distance and toss a piece of roast beef into their space without stopping.',
          scientificTip: 'Shift the dog’s emotional state from defensive fear to eager anticipation.'
        },
        {
          stepNumber: 2,
          title: 'Practice the "Trade-Up" Game',
          instruction: 'Offer a higher-value treat to trade for a toy; give the original toy right back once the trade is accepted.',
          scientificTip: 'The dog learns that letting go of an item does not mean losing it forever.'
        }
      ]
    },
    merckProtocol: {
      management: 'Feed the dog in a separate quiet room; never allow anyone to disturb them while eating.',
      modification: 'Classical counter-conditioning to human approach.',
      responseSubstitution: 'Response Substitution (DRI): Teaching a reliable "Drop It" command paired with stepping back.',
      medicalRuleOut: 'Rule out dental abscesses or digestive pain that makes eating stressful.'
    },
    whatNotToDo: [
      'Never put your hand in the food bowl to "test dominance" (this directly causes resource guarding).',
      'Never punish a growl — growling is the vital early warning system before a bite.'
    ],
    whenToCallProfessional: [
      'If the dog guards low-value items (tissues, wrappers) or snaps at children.',
      'If bites have occurred during past encounters.'
    ]
  },
  'car-travel-anxiety': {
    title: 'CAR TRAVEL ANXIETY & MOTION SICKNESS',
    shortDescription: 'Excessive panting, trembling, motion sickness, vomiting, or refusal to enter the vehicle.',
    rootCauses: [
      'Vestibular motion sickness and nausea in young dogs',
      'Associating the car exclusively with scary destinations like vet clinics',
      'Vibrations, noise, and loss of footing causing panic'
    ],
    positiveProtocol: {
      protocolName: 'Stationary Car Desensitization Protocol',
      overview: 'Transform the parked car into a comforting dining room before taking any moving trips.',
      steps: [
        {
          stepNumber: 1,
          title: 'Feed Meals Near the Parked Car',
          instruction: 'Feed meals 5 meters from the stationary car with the engine off, gradually moving closer over several days.',
          scientificTip: 'Counter-condition the visual sight of the car with mealtime satisfaction.'
        },
        {
          stepNumber: 2,
          title: 'Hang Out Inside the Parked Car',
          instruction: 'Sit in the stationary car with open doors, offering a lickimat or chew toy without turning the engine on.',
          scientificTip: 'De-couple entering the car from the terrifying experience of moving.'
        },
        {
          stepNumber: 3,
          title: 'Take 2-Minute Joy Rides',
          instruction: 'Drive just around the block to a nearby fun park for a play session, then return.',
          scientificTip: 'Ensure the destination is consistently positive.'
        }
      ]
    },
    merckProtocol: {
      management: 'Use a secure crash-tested crate or seatbelt harness; place anti-slip mats on seats.',
      modification: 'Gradual systematic exposure to engine sounds and short trips.',
      responseSubstitution: 'Response Substitution: Resting head on a familiar travel blanket.',
      medicalRuleOut: 'Veterinary prescription of anti-emetics (Maropitant / Cerenia) for motion sickness.'
    },
    whatNotToDo: [
      'Never force or drag a trembling dog into the car.',
      'Do not feed a large meal immediately before driving.'
    ],
    whenToCallProfessional: [
      'If the dog urinates or defecates uncontrollably in the vehicle from extreme terror.',
      'If motion sickness persists despite anti-nausea medications.'
    ]
  },
  'handling-vet-grooming-fear': {
    title: 'VET CLINIC & GROOMING HANDLING PHOBIA',
    shortDescription: 'Panicking, trembling, snapping, or attempting to flee during examinations, nail trims, or grooming.',
    rootCauses: [
      'Past painful or coercive restraint experiences during medical procedures',
      'Sensory overload from chemical odors, bright lights, and slippery metal tables',
      'Lack of cooperative care conditioning in early puppyhood'
    ],
    positiveProtocol: {
      protocolName: 'Cooperative Care & Bucket Game Protocol',
      overview: 'Give the dog agency and consent signals during grooming and veterinary care.',
      steps: [
        {
          stepNumber: 1,
          title: 'Chin Rest Consent Signal',
          instruction: 'Train the dog to rest their chin on your palm or a cushion. Handling occurs ONLY while the chin remains grounded.',
          scientificTip: 'Granting the dog the power to say "Pause" drastically lowers defensive fight-or-flight reflexes.'
        },
        {
          stepNumber: 2,
          title: 'Touch and Reward Micro-Steps',
          instruction: 'Briefly touch a paw or ear for 1 second, release, and offer a jackpot reward.',
          scientificTip: 'Keep touch sessions well below the discomfort threshold.'
        }
      ]
    },
    merckProtocol: {
      management: 'Use fear-free certified veterinary clinics; schedule "happy visits" solely for treats and weighing.',
      modification: 'Cooperative care protocols and positive conditioning to stethoscopes and clippers.',
      responseSubstitution: 'Response Substitution: Focusing on a silicone lickimat mounted on the wall.',
      medicalRuleOut: 'Pre-visit pharmaceutical protocols (Gabapentin / Trazodone) for high-stress veterinary visits.'
    },
    whatNotToDo: [
      'Never allow four clinic staff members to pin the dog down by force (creates permanent trauma).',
      'Never withhold water or treats during non-fasting visits.'
    ],
    whenToCallProfessional: [
      'If the dog requires muzzling and attempts to bite vet staff during basic physical exams.',
      'If grooming is completely impossible due to severe thrashing.'
    ]
  },
  'door-dashing-escape': {
    title: 'DOOR DASHING & BOLTING OUTSIDE',
    shortDescription: 'Dashing out the moment an exterior door opens, ignoring recall commands, and initiating games of chase.',
    rootCauses: [
      'High environmental curiosity and unmet outdoor exploration needs',
      'Lack of impulse control at threshold boundaries',
      'Owner inadvertently turning escapes into exciting games of chase'
    ],
    positiveProtocol: {
      protocolName: 'Doorway Boundary & Wait-for-Release Protocol',
      overview: 'Teach the dog that open doors are invisible barriers that can only be crossed on cue.',
      steps: [
        {
          stepNumber: 1,
          title: 'Hand on Door Handle = Sit',
          instruction: 'Condition the dog to sit the moment your hand touches the exterior door handle.',
          scientificTip: 'Make the door handle the visual cue for the incompatible behavior of sitting.'
        },
        {
          stepNumber: 2,
          title: 'Door Crack Opens: Close if Dog Moves',
          instruction: 'Crack the door open 5 cm. If the dog moves forward, close it gently. Open again only when calm.',
          scientificTip: 'The door itself acts as the environmental feedback mechanism.'
        },
        {
          stepNumber: 3,
          title: 'Release Cue: "Let’s Go!"',
          instruction: 'Allow exit only after giving the verbal release word while the dog waits calmly.',
          scientificTip: 'Control is maintained through voluntary choice rather than physical restraint.'
        }
      ]
    },
    merckProtocol: {
      management: 'Install baby gates at entry vestibules; use an double-door entry system.',
      modification: 'Impulse control conditioning at all exterior doorways.',
      responseSubstitution: 'Response Substitution (DRI): Sitting 2 meters back on an entryway mat when doors open.',
      medicalRuleOut: 'Screen for intact male mating wanderlust or cognitive disorientation in seniors.'
    },
    whatNotToDo: [
      'Never sprint after a bolting dog yelling their name (they perceive it as a thrilling game of chase).',
      'Never scold the dog when they finally return (this punishes coming back).'
    ],
    whenToCallProfessional: [
      'If the dog bolts into heavy traffic corridors repeatedly.',
      'If recall is completely non-functional outside.'
    ]
  },
  'jumping-on-people': {
    title: 'JUMPING ON PEOPLE (OVER-ENTHUSIASTIC GREETINGS)',
    shortDescription: 'Jumping frantically onto incoming guests or strangers on walks to seek attention and greet face-to-face.',
    rootCauses: [
      'Innate greeting drive to reach human facial level',
      'Humans rewarding jumping with touch, eye contact, and vocalizations',
      'Lack of impulse control during high social excitement'
    ],
    positiveProtocol: {
      protocolName: 'Four-on-the-Floor & Incompatible Sitting Protocol',
      overview: 'Make jumping completely unrewarding while making all four paws on the floor a treat magnet.',
      steps: [
        {
          stepNumber: 1,
          title: 'Turn Back and Cross Arms Instantly',
          instruction: 'The split-second front paws leave the ground, turn completely around, fold your arms, and look at the ceiling.',
          scientificTip: 'Removing all eye contact and attention is the most potent negative punishment (-P).'
        },
        {
          stepNumber: 2,
          title: 'Reward Four Paws on the Floor',
          instruction: 'The millisecond all four paws touch the floor, bend down and praise calmly with treats at knee level.',
          scientificTip: 'Reward at floor level to keep the dog’s center of gravity downward.'
        }
      ]
    },
    merckProtocol: {
      management: 'Keep the dog on leash or behind a barrier when visitors arrive.',
      modification: 'Extinction of attention-seeking jumping behavior.',
      responseSubstitution: 'Response Substitution (DRI): "SIT" before greetings occur — a dog cannot sit and jump simultaneously.',
      medicalRuleOut: 'Check for joint stiffness or spinal pain that causes awkward jumping landings.'
    },
    whatNotToDo: [
      'Never knee the dog in the chest (can cause rib fractures and severe fear).',
      'Do not push with hands or speak to the dog while it jumps (it perceives this as roughhouse play).'
    ],
    whenToCallProfessional: [
      'If jumping knocks down toddlers or elderly family members causing injury.',
      'If jumping is accompanied by frantic arousal biting.'
    ]
  },
  'fear-thunder-fireworks': {
    title: 'THUNDERSTORM & FIREWORKS NOISE PHOBIA',
    shortDescription: 'Violent trembling, hyperventilation, and attempting to hide in bathtubs or closets during storms and fireworks.',
    rootCauses: [
      'Extreme canine auditory sensitivity and barometric pressure drops',
      'Electrostatic buildup in pet fur during lightning storms',
      'Genetic predisposition to sound sensitivities'
    ],
    positiveProtocol: {
      protocolName: 'Acoustic Sanctuary & Counter-Conditioning Protocol',
      overview: 'Create an electrostatic-safe sound bunker and pair low-volume sounds with gourmet feasts.',
      steps: [
        {
          stepNumber: 1,
          title: 'Build a Den Sanctuary',
          instruction: 'Set up blankets in an interior windowless room or closet with heavy bedding and a white noise machine.',
          scientificTip: 'Dark, tight dens provide instinctual security during storms.'
        },
        {
          stepNumber: 2,
          title: 'Play Classical Music or White Noise',
          instruction: 'Turn on through-a-dog’s-ear psychoacoustic music or a loud box fan to mask acoustic peaks.',
          scientificTip: 'Consistent auditory masking prevents sudden startle reactions.'
        }
      ]
    },
    merckProtocol: {
      management: 'Keep curtains tightly drawn; install grounding anti-static mats in the safe den.',
      modification: 'Acoustic desensitization using low-volume storm tracks during calm seasons.',
      responseSubstitution: 'Response Substitution: Licking a high-value frozen treat mat in the bunker.',
      medicalRuleOut: 'Veterinary pre-storm anxiolytics (e.g. Sileo, Trazodone) prevent severe neurochemical panic.'
    },
    whatNotToDo: [
      'Never withhold comfort out of fear of "reinforcing fear" — fear is an involuntary emotion that is soothed by comfort.',
      'Never force a terrified dog out of its chosen hiding spot.'
    ],
    whenToCallProfessional: [
      'If the dog breaks through glass windows or causes self-injury in panic.',
      'If noise phobia expands to everyday household sounds (blenders, vacuum cleaners).'
    ]
  },
  'potty-regression': {
    title: 'POTTY TRAINING REGRESSION & INDOOR ACCIDENTS',
    shortDescription: 'Suddenly urinating or defecating indoors on carpets or beds after previously being reliably trained.',
    rootCauses: [
      'Underlying urinary tract infection (cystitis), bladder stones, or diabetes',
      'Incomplete past housetraining and residual scent markers on rugs',
      'Sudden environmental stress or changes in household routine'
    ],
    positiveProtocol: {
      protocolName: 'Back-to-Basics Housetraining & Enzymatic Cleanup',
      overview: 'Rule out medical infections, eliminate scent markers with enzymes, and reward outside elimination.',
      steps: [
        {
          stepNumber: 1,
          title: 'Veterinary Urinalysis First',
          instruction: 'Have a veterinarian analyze a urine sample to rule out bacterial cystitis or crystals before behavioral steps.',
          scientificTip: 'Over 65% of sudden potty regressions are caused by active urinary tract infections.'
        },
        {
          stepNumber: 2,
          title: 'Enzymatic Molecular Odor Removal',
          instruction: 'Clean all accident sites with enzymatic cleaners that break down uric acid crystals permanently.',
          scientificTip: 'Standard household cleaners leave scent traces that smell like a bathroom to canine noses.'
        },
        {
          stepNumber: 3,
          title: 'Jackpot Praise Outside',
          instruction: 'Accompany the dog outside on leash; the exact second elimination finishes, praise enthusiastically with chicken.',
          scientificTip: 'Timing is crucial; reward within 1 second of completion.'
        }
      ]
    },
    merckProtocol: {
      management: 'Confine dog to easy-to-clean spaces when unsupervised; take outside on a strict 2-hour schedule.',
      modification: 'High-frequency outdoor reinforcement schedules.',
      responseSubstitution: 'Response Substitution: Ringing a potty bell at the exit door to announce urgency.',
      medicalRuleOut: 'Urinalysis, urine culture, and endocrine blood panels (Cushing’s, diabetes).'
    },
    whatNotToDo: [
      'Never rub the dog’s nose in accidents or scold after the fact (destroys trust and causes hidden urination).',
      'Never restrict fresh drinking water.'
    ],
    whenToCallProfessional: [
      'If blood is visible in urine or the dog strains painfully without producing urine.',
      'If accidents continue despite clean medical test results and strict schedules.'
    ]
  },
  'pet-food-stealing': {
    title: 'PET FOOD STEALING (CAT/RABBIT FOOD & WATER BOWL GUZZLING)',
    shortDescription: 'Raiding and consuming food or water bowls belonging to other pets in the household.',
    rootCauses: [
      'Cat food has higher protein and fat content, making it biologically irresistible',
      'Opportunistic scavenging instinct in domestic canines',
      'Lack of clear physical separation during multi-pet feeding times'
    ],
    positiveProtocol: {
      protocolName: 'Physical Separation & "Leave It" Conditioning',
      overview: 'Separate feeding stations physically while building a rock-solid default "Leave It" command.',
      steps: [
        {
          stepNumber: 1,
          title: 'Elevate or Isolate Cat Bowls',
          instruction: 'Place cat food bowls on elevated counters or behind door-strap gates accessible only to cats.',
          scientificTip: 'Environmental management prevents repetitive self-rewarding habits.'
        },
        {
          stepNumber: 2,
          title: 'Build the "Leave It" Cue',
          instruction: 'Practice "Leave It" with low-value kibble, rewarding eye contact with a piece of hot dog from your other hand.',
          scientificTip: 'The dog learns that ignoring food in the environment yields better food from the handler.'
        }
      ]
    },
    merckProtocol: {
      management: 'Physical barriers, microchip-activated pet feeders, and separate feeding rooms.',
      modification: 'Conditioning voluntary disengagement from pet feeding zones.',
      responseSubstitution: 'Response Substitution: Waiting on a station mat while other animals eat.',
      medicalRuleOut: 'Screen for metabolic polyphagia or dietary caloric deficiencies.'
    },
    whatNotToDo: [
      'Never leave bowls accessible on the floor expecting the dog to resist temptation indefinitely.',
      'Never scold the dog after they have already swallowed the stolen food.'
    ],
    whenToCallProfessional: [
      'If food raiding leads to fights or resource guarding attacks toward other household pets.',
      'If the dog consumes dangerous non-food items or cat litter obsessively.'
    ]
  },
  'garden-escape': {
    title: 'FENCE ESCAPING & DIGGING UNDER ENCLOSURES',
    shortDescription: 'Climbing over fences, digging escape tunnels, or darting through garden gates; severe runaway and traffic risk.',
    rootCauses: [
      'Boredom and lack of stimulation during extended solitary yard confinement',
      'Intact reproductive drive seeking neighborhood mates',
      'Separation distress seeking human family members'
    ],
    positiveProtocol: {
      protocolName: 'Sensory Yard Enrichment & Fence Fortification',
      overview: 'Transform the yard into an enriching wonderland while physically sealing escape vulnerabilities.',
      steps: [
        {
          stepNumber: 1,
          title: 'Fulfill Energy Needs Inside the Yard',
          instruction: 'Never leave the dog alone in the yard with nothing to do. Scatter treats in the grass and provide frozen marrow bones.',
          scientificTip: 'A mentally engaged dog does not search for escape avenues.'
        },
        {
          stepNumber: 2,
          title: 'Make Fence Borders Rewarding',
          instruction: 'Walk perimeter fences together and reward frequently for turning away from boundary lines.',
          scientificTip: 'Change the fence boundary into a check-in zone rather than an escape route.'
        },
        {
          stepNumber: 3,
          title: 'Physical Fortification (L-Footers)',
          instruction: 'Bury wire L-footers horizontally along fence bottoms to prevent digging underneath.',
          scientificTip: 'Physical containment must be foolproof while training progresses.'
        }
      ]
    },
    merckProtocol: {
      management: 'Install coyote rollers on fence tops, bury wire footers, and keep dog on a tether when unsupervised.',
      modification: 'Boundary recall and impulse conditioning.',
      responseSubstitution: 'Response Substitution: Digging exclusively in a designated sandbox filled with buried toys.',
      medicalRuleOut: 'Consider neutering intact males exhibiting reproductive wandering behaviors.'
    },
    whatNotToDo: [
      'Never rely on invisible electric underground fences (dogs charge through in high drive and fear returning).',
      'Never scold the dog when they return home after escaping.'
    ],
    whenToCallProfessional: [
      'If the dog jumps 2-meter fences and endangers itself in traffic corridors.',
      'If escape is driven by severe acoustic panic or separation anxiety.'
    ]
  },
  'nail-trimming-phobia': {
    title: 'NAIL TRIMMING PHOBIA & BODY GROOMING RESISTANCE',
    shortDescription: 'Severe thrashing, freezing, and biting attempts when nails are clipped, paws handled, or ears cleaned.',
    rootCauses: [
      'Past history of having the quick (sensitive blood vessel) painfully cut',
      'Canine instinctual sensitivity regarding paw restraint and vulnerability',
      'Coercive physical pinning during previous grooming sessions'
    ],
    positiveProtocol: {
      protocolName: 'Cooperative Care & "One-and-Done" Nail Protocol',
      overview: 'Rebuild paw handling trust using desensitization, lick mats, and trimming just one nail per session.',
      steps: [
        {
          stepNumber: 1,
          title: 'Neutralize the Clipper Tool',
          instruction: 'Place nail clippers on the floor next to a pile of roast chicken without attempting to cut.',
          scientificTip: 'Recondition the visual sight of clippers from threat to positive predictor.'
        },
        {
          stepNumber: 2,
          title: 'Lick Mat Distraction',
          instruction: 'Smear peanut butter on a silicone lick mat mounted at eye level. Handle paws while the dog licks voluntarily.',
          scientificTip: 'Continuous licking stimulates dopamine and lowers muscle tension.'
        },
        {
          stepNumber: 3,
          title: 'The "One and Done" Rule',
          instruction: 'Clip exactly ONE nail per day followed by massive praise. Never attempt all four paws in one sitting.',
          scientificTip: 'Ending sessions on a high note builds lasting confidence.'
        }
      ]
    },
    merckProtocol: {
      management: 'Trim nails frequently to keep quicks short; switch to a quiet rotary grinder or scratch board.',
      modification: 'Systematic desensitization: tool sight -> paw touch -> tool touch -> single clip.',
      responseSubstitution: 'Response Substitution: Scratching a sandpaper scratchboard voluntarily with paws to file nails.',
      medicalRuleOut: 'Check for nail bed fungal infections or arthritic digit pain that makes paw pressure hurt.'
    },
    whatNotToDo: [
      'Never allow two people to pin the dog down forcibly to clip nails (creates severe lasting trauma).',
      'Never rush to do all nails in one go.'
    ],
    whenToCallProfessional: [
      'If the dog growls or snaps at the mere sight of clippers.',
      'If paws are completely unhandled due to past trauma.'
    ]
  }
};

export function getLocalizedProblem(problem: BehaviorProblem, lang: 'tr' | 'en'): BehaviorProblem {
  if (lang !== 'en') return problem;
  const enData = PROBLEMS_EN_MAP[problem.id];
  if (!enData) return problem;
  return {
    ...problem,
    ...enData,
    rootCauses: enData.rootCauses || problem.rootCauses,
    positiveProtocol: enData.positiveProtocol || problem.positiveProtocol,
    merckProtocol: enData.merckProtocol || problem.merckProtocol,
    whatNotToDo: enData.whatNotToDo || problem.whatNotToDo,
    whenToCallProfessional: enData.whenToCallProfessional || problem.whenToCallProfessional
  };
}
