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
  category: 'reactivity' | 'anxiety' | 'puppy' | 'habits' | 'fear';
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
  }
];
