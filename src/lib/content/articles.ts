export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface LibraryArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'calming_signals' | 'science' | 'training_tips' | 'puppy' | 'behavior_basics' | 'clinical';
  readTimeMinutes: number;
  publishedDate: string;
  author: string;
  tags: string[];
  content: ArticleSection[];
}

export const ARTICLES: LibraryArticle[] = [
  {
    id: 'merck-agresyon-taksonomisi',
    slug: 'merck-kopeklerde-agresyon-taksonomisi',
    title: 'MERCK VET KILAVUZU: KÖPEKLERDE AGRESYON TAKSONOMİSİ VE AYIRT EDİCİ TANI',
    summary: 'Korku agresyonu, kaynak koruma, çatışma kaynaklı ve yönlendirilmiş agresyonun klinik etolojideki ayrımı ve güvenli müdahale prensipleri.',
    category: 'clinical',
    readTimeMinutes: 8,
    publishedDate: '2026-03-20',
    author: 'Merck Veterinary Manual Klinik Davranış Özeti',
    tags: ['Merck Vet Manual', 'Agresyon Taksonomisi', 'Korku Agresyonu', 'Çatışma Agresyonu', 'Klinik Etoloji'],
    content: [
      {
        heading: 'Agresyon Bir Karakter Kusuru Değil, Savunma Mekanizmasıdır',
        paragraphs: [
          'Merck Veterinary Manual\'e göre köpeklerde agresif davranışlar "kötü huylu" olmakla ilgili değildir. Agresyon; korku, tehlike algısı veya kaynak kaybı tehdidi karşısında beynin başvurduğu doğal ve adaptif bir savunma tepkisidir.',
          'Korku kaynaklı agresyon (Fear Aggression), klinik vakaların en büyük bölümünü oluşturur. Köpek kendini köşeye sıkışmış hissettiğinde, kaçış mesafesi (flight distance) tükendiğinde saldırma hamlesi yapar.'
        ],
        callout: 'Korku agresyonu yaşayan bir köpeğe ceza uygulamak, köpeğin "korktuğum şey gerçekten ölümcülmüş" inancını pekiştirir ve ısırık şiddetini artırır.'
      },
      {
        heading: 'Çatışma Kaynaklı Agresyon (Conflict-Related) ve Alfa Miti',
        paragraphs: [
          'Çatışma kaynaklı agresyon, genellikle köpeğin beden dilini okuyamayan sahiplerin köpeği fiziksel olarak zorlaması (yatağından zorla çekme, sarılma, üzerine eğilme veya alfa yuvarlama) ile tetiklenir.',
          'Köpek bu baskı karşısında önce esneme, dudak yalama ve hırlama ile sınır çizer. Bu sinyaller "baskınlık taslıyor" denilerek cezalandırıldığında, köpek sinyal vermeyi bırakıp doğrudan diş geçirmeye başlar.'
        ]
      },
      {
        heading: 'Kaynak Koruma ve Yönlendirilmiş Agresyon (Redirected)',
        paragraphs: [
          'Kaynak koruma (mama, kemik, eşya) evrimsel bir mirastır. Merck kılavuzu, mama kabına el sokmak yerine takas yöntemi (Trade-up) uygulanmasını zorunlu kılar.',
          'Yönlendirilmiş agresyon ise bahçe çitindeki bir yabancıya öfkelenen köpeğin, tasmasından çeken sahibini aniden ısırması gibi asıl tetikleyiciye ulaşamayan enerjinin en yakındaki canlıya patlamasıdır.'
        ],
        callout: 'Merck İlkesi: Hırlayan bir köpeği cezalandırmayın; hırlama, ısırmadan önceki son emniyet kilididir. O kilidi kırarsanız uyarmadan ısıran bir köpek yaratırsınız.'
      }
    ]
  },
  {
    id: 'merck-dishaa-demans',
    slug: 'merck-yasli-kopeklerde-dishaa-ve-demans',
    title: 'MERCK VET KILAVUZU: YAŞLI KÖPEKLERDE DİŞHAA MODELİ VE KOGNİTİF FONKSİYON BOZUKLUĞU (CDS)',
    summary: '8 yaş üstü köpeklerde başlayan yön şaşırma, gece volta atma ve tuvalet kaçırma: Köpek Alzheimer\'ı (Kognitif Disfonksiyon Sendromu) veteriner kılavuzu.',
    category: 'clinical',
    readTimeMinutes: 7,
    publishedDate: '2026-03-21',
    author: 'Merck Veterinary Manual Geriatrik Etoloji',
    tags: ['Merck Vet Manual', 'DISHAA', 'Demans (CDS)', 'Yaşlı Köpek', 'Nöroloji'],
    content: [
      {
        heading: 'Kognitif Disfonksiyon Sendromu (CDS) Nedir?',
        paragraphs: [
          'İnsanlardaki Alzheimer hastalığına benzer şekilde, köpeklerin beyinlerinde de yaşlandıkça beta-amiloid protein plakları birikir ve nöron iletimi zayıflar.',
          '8 yaş ve üzeri köpeklerde başlayan ani kişilik değişimleri, inatçılık veya itaatsizlik değil; nörolojik gerilemenin doğrudan sonucudur.'
        ]
      },
      {
        heading: 'Veteriner Hekimlerin Altın Standart Değerlendirmesi: DISHAA Modeli',
        paragraphs: [
          'Merck Veterinary Manual klinik kılavuzunda yaşlı köpekler şu 6 ana semptomla taranır:',
          '• D - Disorientation (Yön Kaybı): Kapının menteşe tarafında bekleme, odanın köşesinde sıkışıp geri adım atamama, sahibini tanımada gecikme.',
          '• I - Interactions (Sosyal Etkileşim): Aile bireylerine aşırı bağımlı yapışkanlık veya tam tersi sevilmekten kaçınma, donuk bakışlar.',
          '• S - Sleep-wake cycles (Uyku Döngüsü): Gece uyumayıp evde volta atma, karanlıkta uluma, gündüzleri ise derin ve uyanması güç uyku.',
          '• H - House soiling (Tuvalet Bozulması): Yıllardır dışarı yapan köpeğin evin ortasına farkında olmadan idrar/dışkı bırakması.',
          '• A - Anxiety (Sebepsiz Kaygı): Önceden korkmadığı gölgelerden, zeminlerden veya yalnız kalmaktan panik derecesinde korkma.',
          '• A - Activity changes (Aktivite Değişimi): Amaçsız gezinme, etrafta dairesel turlama, oyuncaklara veya koklamaya olan ilginin sıfırlanması.'
        ],
        callout: 'DISHAA belirtilerinden en az 2 tanesini düzenli gözlemliyorsanız, köpeğiniz için mutlaka veteriner hekim kognitif destek protokolü talep edin.'
      },
      {
        heading: 'Klinik Müdahale ve Yaşam Kalitesi',
        paragraphs: [
          'Antioksidan ve omega-3 (DHA/EPA) zengini klinik geriatrik mamalar, zihinsel zenginleştirme koklama matları ve veteriner hekim reçeteli nöroprotektif destekler hastalığın ilerleyişini önemli ölçüde yavaşlatabilir.'
        ]
      }
    ]
  },
  {
    id: 'merck-tepki-ikamesi-dri',
    slug: 'merck-tepki-ikamesi-response-substitution-dri',
    title: 'MERCK VET KILAVUZU: TEPKİ İKAMESİ (RESPONSE SUBSTITUTION) VE DRI YÖNTEMİ',
    summary: 'İstenmeyen bir davranışı cezalandırmak yerine, o davranışla fiziken aynı anda yapılamayacak alternatif pozitif bir davranışı ödüllendirmenin klinik gücü.',
    category: 'clinical',
    readTimeMinutes: 6,
    publishedDate: '2026-03-22',
    author: 'Merck Veterinary Manual Öğrenme Prensipleri',
    tags: ['Merck Vet Manual', 'Tepki İkamesi', 'DRI', 'Edimsel Koşullanma', 'Pozitif Eğitim'],
    content: [
      {
        heading: '"Hayır / Yapma" Demenin Nörolojik Yetersizliği',
        paragraphs: [
          'Merck Kılavuzu açıkça belirtir: Bir köpeğe "Zıplama!", "Havlama!" demek, beyinde bir davranış boşluğu yaratır. Köpek ne yapmaması gerektiğini duysa bile, o anda hissettiği yüksek uyarılma enerjisini nereye kanalize edeceğini bilemez.',
          'Cezalandırma, davranışı yok etmez; sadece sahibin yanında bastırır ve köpeğin stres seviyesini katlar.'
        ]
      },
      {
        heading: 'Tepki İkamesi (Response Substitution / DRI) Nedir?',
        paragraphs: [
          'DRI (Differential Reinforcement of Incompatible Behavior - Uyuşmayan Davranışın Pekiştirilmesi), istenmeyen davranışla anatomik ve mekansal olarak aynı anda icra edilmesi İMKANSIZ olan bir davranışı hedef alır.',
          '1. Zıplama Sorunu: Köpek hem dört patisiyle yerde oturup hem de bir insanın göğsüne zıplayamaz. Çözüm: Zıplamayı yasaklamak yerine, "Otur" davranışını süper ödülle otomatikleştirin.',
          '2. Kapı Ziline Havlama: Köpek hem ağzında büyük bir kauçuk top taşıyıp hem de kesintisiz havlayamaz. Çözüm: Zil çaldığında sepete koşup topunu alma davranışını pekiştirin.',
          '3. Misafirin Paçasına Yapışma: Köpek hem kendi matında göğsü yerde yatar vaziyette bekleyip hem de misafiri kovalayamaz.'
        ],
        callout: 'Klinik Formül: "Köpeğimin ne yapmasını istemiyorum?" diye değil; "Köpeğimin bu tetikleyici anında NE YAPMASINI İSTİYORUM?" diye düşünün.'
      }
    ]
  },
  {
    id: 'merck-sosyal-davranis-suru-miti',
    slug: 'merck-normal-sosyal-davranis-ve-suru-yapisi',
    title: 'MERCK VET KILAVUZU: NORMAL SOSYAL DAVRANIŞ VE EVRİMSEL SÜRÜ MİTİ',
    summary: 'Evcil köpeklerin akraba olmayan esnek sosyal grupları, 3-12 hafta sosyalleşme penceresi ve insan-köpek işbirliği modeli.',
    category: 'clinical',
    readTimeMinutes: 7,
    publishedDate: '2026-03-23',
    author: 'Merck Veterinary Manual Sosyal Etoloji',
    tags: ['Merck Vet Manual', 'Sosyal Davranış', 'Sosyalleşme Penceresi', 'Sürü Miti', 'Evrim'],
    content: [
      {
        heading: 'Evcil Köpekler Kurt Sürüsü Oluşturmaz',
        paragraphs: [
          'Merck Veterinary Manual, evcil köpeklerin (Canis familiaris) vahşi kurtlar gibi katı doğrusal hiyerarşik sürüler oluşturmadığını vurgular.',
          'Serbest yaşayan evcil köpekler genellikle akraba olmayan diğer bireylerle geçici, durumsal ve esnek sosyal koalisyonlar kurarlar. İnsan ailesiyle ilişkileri de "alfa olma kavgası" değil; sosyal öğrenme, bağlanma ve karşılıklı güvene dayalı bir ortaklıktır.'
        ]
      },
      {
        heading: 'Kritik Sosyal Gelişim Pencereleri (3-12 Hafta)',
        paragraphs: [
          '• 3 - 8 Hafta (Köpekler Arası İletişim): Yavru bu dönemde anne ve kardeşleriyle oynayarak çene gücünü ayarlamayı (Isırık İnhibisyonu - Bite Inhibition) ve köpek beden dilini kusursuz okumayı öğrenir. Bu yüzden yavrular 8 haftadan önce anneden ayrılmamalıdır.',
          '• 5 - 12 Hafta (İnsan ve Çevre Sosyalleşmesi): Beynin yeni uyaranlara en açık ve korkusuz olduğu dönemdir. Farklı yaşlardan insanlar, zeminler, sesler ve araçlar pozitif pekiştireçlerle tanıtılmalıdır.',
          '• 14 Hafta Sonrası: Sosyalleşme penceresi kapanır ve neofobi (bilinmeyen her şeye karşı doğal korku) devreye girer. Bu döneme kadar doğru tanıştırılmayan her nesne, gelecekte potansiyel reaktivite tetikleyicisi olabilir.'
        ],
        callout: 'Kritik Not: Aşı takvimi bitene kadar yavruyu steril fanusta izole etmek, ölümcül davranış problemlerine davetiye çıkarır. Güvenli, kontrollü ve temiz ortamlarda erken pozitif sosyalleşme hayati önemdedir.'
      }
    ]
  },
  {
    id: 'merck-3m-protokolu',
    slug: 'merck-3m-davranis-modifikasyon-modeli',
    title: 'MERCK VET KILAVUZU: 3M DAVRANIŞ TEDAVİ MODELİ (MANAGEMENT, MODIFICATION, MEDICATION)',
    summary: 'Klinik veteriner davranış tıbbının altın standardı: 1. Çevresel Yönetim, 2. Pozitif Modifikasyon ve 3. Medikal Destek Eşiği.',
    category: 'clinical',
    readTimeMinutes: 8,
    publishedDate: '2026-03-24',
    author: 'Merck Veterinary Manual Davranış Tedavisi',
    tags: ['Merck Vet Manual', '3M Modeli', 'Duyarsızlaştırma', 'Karşıt Koşullandırma', 'Farmakoterapi'],
    content: [
      {
        heading: '1. Ayak: Çevresel Yönetim (Management)',
        paragraphs: [
          'Köpeğin istenmeyen davranışı her tekrar edişi, beyindeki o nöral otoyolu daha da güçlendirir ("Pratik yapmak mükemmelleştirir").',
          'Yönetim, eğitim sonuç verene kadar köpeğin başarısız olmasına ve tetiğe maruz kalmasına engel olmaktır. Örnek: Cama havlayan köpeğin camına film çekmek, kapıya bariyer koymak, yürüyüşü tenha saatlere kaydırmak.'
        ]
      },
      {
        heading: '2. Ayak: Pozitif Modifikasyon (Modification)',
        paragraphs: [
          'Sistematik Duyarsızlaştırma (Desensitization): Tetikleyici uyaranı, köpeğin tepki eşiğinin (threshold) altında kalacak kadar uzak mesafeden veya düşük sesle sunmak.',
          'Karşıt Koşullanma (Counter-Conditioning): Tetikleyiciyi köpeğin en sevdiği yüksek değerli ödülle (ciğer, tavuk, fıstık ezmesi) eşleştirerek köpeğin duygusal durumunu "Korku/Öfke"den "Beklenti/Neşe"ye çevirmek.',
          'Eğer köpek stres sinyali verirse (donma, esneme, havlama) seans o saniyede DURDURULUR ve güvenli mesafeye çekilinir. Flooding (taşma / korktuğu şeye zorlama) kesinlikle yasaktır.'
        ]
      },
      {
        heading: '3. Ayak: Medikal ve İlaç Desteği (Medication / Pain Rule-Out)',
        paragraphs: [
          'Beyin aşırı uyarılma (arousal) ve panik halindeyken kortizol ve adrenalin seviyeleri hipokampusun öğrenme fonksiyonunu bloke eder. Köpek bu durumdayken en lezzetli bifteği bile yemez.',
          'Böyle vakalarda veteriner hekim gözetiminde başlanan anksiyolitikler (Trazodone, SSRI\'lar) veya feromon/takviyeler köpeği "öğrenebilir zihinsel eşiğe" indirmek için vazgeçilmez bir tıbbi araçtır.',
          'Ayrıca ani başlayan davranış bozukluklarında osteoartrit, diş ve kulak ağrısı hekimce ilk muayenede elenmelidir.'
        ],
        callout: '3M Kuralı: Yönetim olmadan modifikasyon çalışmaz; beyin kimyası kilitliyse modifikasyon tek başına yetmez.'
      }
    ]
  },
  {
    id: 'art-calming',
    slug: 'turid-rugaas-calming-signals',
    title: 'TURİD RUGAAS SAKİNLEŞME SİNYALLERİ (CALMING SIGNALS) PROTOKOLÜ',
    summary: 'Köpeklerin çatışmayı önlemek ve kendi içsel streslerini düşürmek için kullandığı 30\'dan fazla diplomatik vücut dili işareti.',
    category: 'calming_signals',
    readTimeMinutes: 7,
    publishedDate: '2026-03-15',
    author: 'Kuchu Etoloji Laboratuvarı',
    tags: ['Sakinleşme Sinyalleri', 'Turid Rugaas', 'Vücut Dili', 'Stres'],
    content: [
      {
        heading: 'Sakinleşme Sinyalleri Nedir?',
        paragraphs: [
          'Norveçli ünlü etolog Turid Rugaas, köpeklerin çatışmalardan kaçınmak ve içsel streslerini yönetmek için diplomatik bir sinyal dili kullandıklarını ortaya koydu.',
          'İnsanlar genellikle köpeklerin yalnızca hırlama veya ısırma gibi en uç savunma tepkilerini fark eder. Oysa köpek bu aşamaya gelmeden önce onlarca sakinleşme sinyali vermiş ve alan talep etmiştir.'
        ],
        callout: 'Sakinleşme sinyallerini fark edip köpeğe mesafe tanıdığınızda ısırık riskini %90 oranında engellersiniz.'
      },
      {
        heading: 'En Sık Görülen 5 Temel Sinyal',
        paragraphs: [
          '1. Dudak Yalama (Lip Licking): Yemek yokken hızlıca burnunu yalama mikro stres göstergesidir.',
          '2. Bakış Kaçırma ve Baş Çevirme: Doğrudan göz teması köpek dünyasında tehdittir; başını çevirerek "Barışçılım" der.',
          '3. Stres Esnemesi: Gergin anlarda baskıyı düşürme çabasıdır.',
          '4. Yere Eğilip Koklama: Tehditkar köpek geçerken aniden yeri koklamak nötrleşme hareketidir.',
          '5. Yavaş Hareket Etme: Adımlarını bilinçli olarak yavaşlatıp dairesel kavisle yaklaşma.'
        ]
      }
    ]
  },
  {
    id: 'art-tail',
    slug: 'vallortigara-tail-asymmetry',
    title: 'SAĞ-SOL KUYRUK ASİMETRİSİ: VALLORTİGARA & QUARANTA BULGULARI',
    summary: 'Kuyruk sallamak her zaman mutluluk demek değildir. Sallanma yönünün beynin sağ ve sol yarıküreleriyle olan hayati bağlantısı.',
    category: 'science',
    readTimeMinutes: 6,
    publishedDate: '2026-02-10',
    author: 'Prof. G. Vallortigara Çalışması Özeti',
    tags: ['Nöroloji', 'Kuyruk Asimetrisi', 'Beyin Hemisferleri', 'Current Biology'],
    content: [
      {
        heading: 'Kuyruk Sallama Miti',
        paragraphs: [
          'Halk arasındaki en tehlikeli yanılgı: "Kuyruk sallayan köpek mutludur". Gerçekte kuyruk sallamak yalnızca köpeğin uyarılmış olduğunu gösterir. Sert ve dik kuyruk sallaması saldırı uyarısı da olabilir.'
        ]
      },
      {
        heading: 'Sağ vs Sol Beyin Yarıküresi',
        paragraphs: [
          'Current Biology dergisinde yayınlanan çalışmada, köpeklerin tanıdık ve sevilen canlıları gördüklerinde kuyruklarını kendi SAĞ taraflarına daha geniş salladıkları belgelendi (Sol beyin: Pozitif yaklaşım).',
          'Buna karşılık tanımadıkları veya tehdit algıladıkları durumlarda kuyruk salınımı SOLA kayar (Sağ beyin: Korku, çekilme ve kaçınma).'
        ],
        callout: 'Köpeğinizin arkasından baktığınızda salınımın sağa mı sola mı ağırlıklı olduğunu izleyin.'
      }
    ]
  },
  {
    id: 'art-dominance',
    slug: 'dominance-myth-debunked',
    title: 'ALFA KURDU VE BASKINLIK MİTİNİN ÇÖKÜŞÜ: DR. DAVID MECH',
    summary: '"Köpeğinize lider olduğunuzu göstermelisiniz" safsatası neden yanlıştır? Esaret altındaki kurt çalışmaları ve aile dinamikleri.',
    category: 'science',
    readTimeMinutes: 8,
    publishedDate: '2026-01-20',
    author: 'Etoloji Tarihi Derlemesi',
    tags: ['Alfa Miti', 'David Mech', 'Kurt Hiyerarşisi', 'Pozitif Eğitim'],
    content: [
      {
        heading: 'Alfa Kavramı Nereden Çıktı?',
        paragraphs: [
          '1970\'lerde esaret altında, birbirine akraba olmayan kurt grupları gözlemlendi ve şiddet içeren bir hiyerarşi görüldü.',
          'Ancak araştırmayı yapan Dr. L. David Mech, doğadaki vahşi kurtları incelediğinde "alfa" diye bir savaş olmadığını, kurt sürülerinin anne, baba ve yavrulardan oluşan sevgi dolu bir aile olduğunu kanıtladı ve eski kitabını yayından kaldırmaya çalıştı.'
        ]
      },
      {
        heading: 'Köpeğinizi Sırt Üstü Yatırmayın (Alpha Roll Tehlikesi)',
        paragraphs: [
          'Köpeğinizi sırt üstü devirmek (alpha roll) veya kapıdan önce geçmeye zorlamak köpeğe liderlik öğretmez; derin bir ölüm korkusu ve güvensizlik aşılar. Isırıkların %70\'i bu ceza yöntemleri sonucu savunma amaçlı gerçekleşir.'
        ],
        callout: 'Köpeğiniz sizi alfa veya rakip olarak değil; hayatını emanet ettiği rehber ebeveyni olarak görür.'
      }
    ]
  },
  {
    id: 'art-positive',
    slug: 'operant-conditioning-positive-reinforcement',
    title: 'EDİMSEL KOŞULLANMA VE POZİTİF PEKİŞTİRME (+R) DİYALEKTİĞİ',
    summary: 'B.F. Skinner\'ın 4 kadranı: Neden ceza (P+) davranışı söndürmez, yalnızca baskılar?',
    category: 'training_tips',
    readTimeMinutes: 5,
    publishedDate: '2026-02-28',
    author: 'Modern Davranış Bilimleri',
    tags: ['Skinner', 'Pozitif Pekiştirme', 'Ödül Maması', 'Tıklatıcı Eğitimi'],
    content: [
      {
        heading: 'Skinner\'ın 4 Kadranı',
        paragraphs: [
          '+R (Pozitif Pekiştirme): İstenen davranış sonrası ödül vererek davranışın sıklığını artırma.',
          '-P (Negatif Ceza): İstenmeyen davranış anında ödülü/dikkati geri çekme (örn: zıplayınca arkasını dönme).',
          '+P (Pozitif Ceza): Şiddet, bağırma, şok veya boğma tasma kullanma. Bilimsel olarak yan etkisi anksiyete ve travmadır.'
        ],
        callout: 'Korkuyla öğrenilen davranış stres anında çöker; ödülle öğrenilen davranış ise ömür boyu kalıcıdır.'
      }
    ]
  },
  {
    id: 'art-fear-periods',
    slug: 'puppy-development-fear-periods',
    title: 'YAVRU GELİŞİMİNDE KRİTİK KORKU DÖNEMLERİ (FEAR PERIODS)',
    summary: '8-11. hafta ve 6-14. ay arasındaki hassas nörolojik pencereler. Bu dönemlerde yaşanan travmalar neden ömür boyu silinmez?',
    category: 'puppy',
    readTimeMinutes: 6,
    publishedDate: '2026-03-01',
    author: 'Gelişimsel Etoloji',
    tags: ['Yavru Köpek', 'Korku Dönemi', 'Sosyalleşme', 'Nöroloji'],
    content: [
      {
        heading: 'İki Kritik Korku Penceresi',
        paragraphs: [
          '1. Birinci Korku Dönemi (8-11 Hafta): Anne yanından ayrılış ve yeni eve geçiş dönemi. Bu sürede travmatik aşı veya sert eğitimden kaçınılmalıdır.',
          '2. İkinci Korku Dönemi (6-14 Ay - Ergenlik): Dün korkmadığı çöp kutusuna veya şemsiyeye aniden havlama dönemi.'
        ],
        callout: 'Korku döneminde köpeği zorlamak fobi yaratır; güvenli mesafede kalıp ödüllendirmek ise özgüven aşılar.'
      }
    ]
  }
];

export const ARTICLES_EN_MAP: Record<string, Partial<LibraryArticle>> = {
  'merck-agresyon-taksonomisi': {
    title: 'MERCK VET MANUAL: AGGRESSION TAXONOMY & DIFFERENTIAL DIAGNOSIS',
    summary: 'Clinical ethological differentiation of fear aggression, resource guarding, conflict-related, and redirected aggression with safe intervention standards.',
    author: 'Merck Veterinary Manual Clinical Behavior Summary',
    tags: ['Merck Vet Manual', 'Aggression Taxonomy', 'Fear Aggression', 'Conflict Aggression', 'Clinical Ethology'],
    content: [
      {
        heading: 'Aggression is an Adaptive Defense Mechanism, Not a Character Flaw',
        paragraphs: [
          'According to the Merck Veterinary Manual, aggressive canine behaviors do not signify a "bad temperament". Aggression is an evolutionary, adaptive defense reaction initiated when facing perceived danger, fear, or loss of vital resources.',
          'Fear-related aggression accounts for the vast majority of clinical cases. When a dog feels cornered and flight distance is depleted, defensive snaps occur as a last resort.'
        ],
        callout: 'Punishing a dog with fear aggression reinforces the belief that the stimulus is indeed life-threatening, escalating bite severity.'
      },
      {
        heading: 'Conflict-Related Aggression and the Dominance Fallacy',
        paragraphs: [
          'Conflict-related aggression is commonly triggered when handlers misread subtle body language and use physical coercion (dragging from beds, hugging, looming over, or alpha rolling).',
          'Faced with this pressure, the dog first sets boundaries via yawning, lip licking, and low growls. When these warnings are punished as "dominance", the dog ceases warning and bites directly.'
        ]
      },
      {
        heading: 'Resource Guarding and Redirected Aggression',
        paragraphs: [
          'Resource guarding (food, bones, high-value toys) is an evolutionary survival inheritance. Merck protocols mandate the "Trade-up" technique rather than forceful confiscation.',
          'Redirected aggression occurs when an aroused dog behind a fence cannot reach the trigger and redirects built-up adrenaline onto the nearest human or companion dog.'
        ],
        callout: 'Merck Rule: Never punish a growl. A growl is the safety catch before a bite. Disarming the warning creates a dog that bites without signal.'
      }
    ]
  },
  'merck-dishaa-demans': {
    title: 'MERCK VET MANUAL: DISHAA MODEL & CANINE COGNITIVE DYSFUNCTION (CDS)',
    summary: 'Recognizing canine dementia in dogs over age 8: Clinical screening using DISHAA framework and neuroprotective management.',
    author: 'Merck Veterinary Manual Geriatric Behavior',
    tags: ['Merck Vet Manual', 'Canine Dementia', 'DISHAA Model', 'Geriatric Care', 'CDS'],
    content: [
      {
        heading: 'Canine Cognitive Dysfunction Syndrome (CDS)',
        paragraphs: [
          'In dogs over 8 years of age, progressive cognitive decline similar to Alzheimer’s in humans can develop due to beta-amyloid plaque accumulation and oxidative stress.',
          'The Merck Veterinary Manual standardizes clinical evaluation with the DISHAA screening tool.'
        ]
      },
      {
        heading: 'The 6 Pillars of the DISHAA Assessment',
        paragraphs: [
          'D (Disorientation): Getting stuck behind doors or in room corners, unable to back up.',
          'I (Interactions): Social changes — excessive clinginess or aloof withdrawal from family members.',
          'S (Sleep-wake cycles): Restless night pacing and vocalizing, combined with deep daytime sleeping.',
          'H (House soiling): Urinating or defecating indoors despite decades of reliable housetraining.',
          'A (Anxiety): New sudden phobias, separation panic, or fear of shadows/darkness.',
          'A (Activity): Purposeless wandering, repetitive licking, or loss of interest in toys and walks.'
        ],
        callout: 'Early veterinary intervention with antioxidant diets, omega-3 DHA, and neuroprotective supplements significantly slows progression.'
      }
    ]
  },
  'merck-tepki-ikamesi-dri': {
    title: 'MERCK VET MANUAL: RESPONSE SUBSTITUTION (DRI / DRA) PROTOCOLS',
    summary: 'Differential Reinforcement of Incompatible Behavior (DRI): Replacing jumping and lunging with incompatible calm behaviors.',
    author: 'Merck Veterinary Manual Learning Principles',
    tags: ['Merck Vet Manual', 'DRI Protocol', 'Response Substitution', 'Positive Reinforcement'],
    content: [
      {
        heading: 'The Science of Incompatible Behaviors',
        paragraphs: [
          'In operant ethology, telling a dog "No!" or "Don\'t jump!" is ineffective because it fails to communicate what the dog SHOULD do.',
          'Differential Reinforcement of Incompatible Behavior (DRI) focuses on rewarding a physically impossible alternative: a dog cannot jump on a guest while its buttocks remain planted firmly on a training mat.'
        ],
        callout: 'Never punish an unwanted behavior without first teaching and heavily rewarding an incompatible alternative.'
      }
    ]
  },
  'merck-sosyal-davranis-suru-miti': {
    title: 'MERCK VET MANUAL: SOCIAL DYNAMICS & DEBUNKING THE PACK HIERARCHY MYTH',
    summary: 'Scientific ethology proves domestic dogs do not form rigid linear dominance hierarchies with human families.',
    author: 'Merck Veterinary Manual Social Behavior',
    tags: ['Merck Vet Manual', 'Pack Myth', 'Alpha Myth', 'Ethology', 'Dog Psychology'],
    content: [
      {
        heading: 'The Fallacy of the Human Alpha',
        paragraphs: [
          'Modern peer-reviewed behavioral veterinary medicine emphasizes that domestic dogs are an altricial companion species that view human caretakers as parental attachment figures rather than rival pack competitors.',
          'Forced submission and coercive dominance exercises are the primary risk factor for fear-induced defensive bite injuries.'
        ]
      }
    ]
  },
  'merck-3m-protokolu': {
    title: 'MERCK VET MANUAL: THE 3M TREATMENT MODEL (MANAGEMENT, MODIFICATION, MEDICATION)',
    summary: 'The gold standard of veterinary behavioral medicine: 1. Environmental Management, 2. Positive Modification, and 3. Medical Threshold.',
    author: 'Merck Veterinary Manual Behavior Therapy',
    tags: ['Merck Vet Manual', '3M Model', 'Desensitization', 'Counter-Conditioning', 'Pharmacotherapy'],
    content: [
      {
        heading: 'Pillar 1: Environmental Management',
        paragraphs: [
          'Every time a dog repeats an unwanted reactive behavior, that neural pathway is reinforced.',
          'Management prevents failure while training progresses: window films for barking, baby gates at doorways, or walking during low-traffic quiet hours.'
        ]
      },
      {
        heading: 'Pillar 2: Positive Modification',
        paragraphs: [
          'Systematic Desensitization: Presenting the trigger strictly below the reactive threshold.',
          'Counter-Conditioning: Pairing the trigger with high-value rewards (liver, chicken, peanut butter) to transform emotional response from fear to eager anticipation.'
        ]
      },
      {
        heading: 'Pillar 3: Medical Support and Pain Exclusion',
        paragraphs: [
          'When cortisol and adrenaline surge during panic states, hippocampal learning is blocked.',
          'Veterinary-prescribed anxiolytics or supplements lower arousal into a receptive learning state. Hidden physical pain (arthritis, dental disease) must be ruled out first.'
        ],
        callout: '3M Law: Modification fails without management; modification alone cannot overcome severe neurochemical panic.'
      }
    ]
  },
  'art-calming': {
    title: 'TURID RUGAAS CALMING SIGNALS PROTOCOL',
    summary: 'Over 30 diplomatic body language signals dogs use to prevent conflict and regulate internal stress.',
    author: 'Kuchu Ethology Lab',
    tags: ['Calming Signals', 'Turid Rugaas', 'Body Language', 'Stress'],
    content: [
      {
        heading: 'What Are Calming Signals?',
        paragraphs: [
          'Renowned Norwegian ethologist Turid Rugaas discovered that dogs utilize a complex repertoire of calming signals to defuse social tension and self-soothe.',
          'Humans often notice only extreme reactions like lunging or growling, unaware that the dog offered dozens of subtle calming signals prior to escalation.'
        ],
        callout: 'Recognizing calming signals and creating distance prevents over 90% of defensive bites.'
      },
      {
        heading: '5 Most Common Primary Calming Signals',
        paragraphs: [
          '1. Lip Licking: Rapid flick of the tongue over the nose in non-food situations indicates micro-stress.',
          '2. Turning Away / Head Turn: Direct frontal eye contact is perceived as confrontation; looking away signals peaceful intent.',
          '3. Stress Yawning: Yawning in stimulating or tense settings to release internal pressure.',
          '4. Ground Sniffing: Suddenly sniffing the ground when an approaching dog passes by acts as a polite disengagement buffer.',
          '5. Slowing Down: Consciously slowing pace and approaching in a soft curve.'
        ]
      }
    ]
  },
  'art-tail': {
    title: 'LEFT-RIGHT TAIL ASYMMETRY: VALLORTIGARA & QUARANTA FINDINGS',
    summary: 'Tail wagging does not automatically equal happiness. The vital connection between wag direction and the brain hemispheres.',
    author: 'Prof. G. Vallortigara Study Review',
    tags: ['Neurology', 'Tail Asymmetry', 'Brain Hemispheres', 'Current Biology'],
    content: [
      {
        heading: 'The Wagging Tail Myth',
        paragraphs: [
          'One of the most dangerous myths is "a wagging tail means a happy dog." A wagging tail merely indicates arousal. A stiff, rapid, high wag can be an assertive threat display.'
        ]
      },
      {
        heading: 'Right vs. Left Brain Hemispheres',
        paragraphs: [
          'Published in Current Biology, research shows dogs wag predominantly to their RIGHT side when viewing positive, familiar individuals (controlled by the left hemisphere: approach and calm).',
          'Conversely, when encountering intimidating or unfamiliar threats, tail wagging shifts distinctly to their LEFT side (controlled by the right hemisphere: withdrawal and alarm).'
        ],
        callout: 'Observe your dog from behind: is the tail arc biased to the right (positive) or left (caution)?'
      }
    ]
  },
  'art-dominance': {
    title: 'THE FALL OF THE ALPHA WOLF & DOMINANCE MYTH: DR. L. DAVID MECH',
    summary: 'Why "showing your dog who is boss" is scientifically debunked. Captive wolf studies versus natural family dynamics.',
    author: 'History of Ethology Review',
    tags: ['Alpha Myth', 'David Mech', 'Wolf Dynamics', 'Force-Free'],
    content: [
      {
        heading: 'Where Did the Alpha Concept Originate?',
        paragraphs: [
          'In the 1970s, studies of unrelated captive wolves forced into small enclosures showed violent territorial fighting.',
          'However, wildlife biologist Dr. L. David Mech subsequently studied wild packs in natural habitats and proved that wild wolf packs are cooperative families headed by parents, not warlords. Dr. Mech has spent decades urging publishers to stop printing the outdated alpha thesis.'
        ]
      },
      {
        heading: 'Never Alpha Roll Your Dog',
        paragraphs: [
          'Forcibly pinning a dog to the ground (alpha roll) or rushing through doors ahead does not build respect; it inflicts terror and destroys attachment. More than 70% of dog bites occur in self-defense during physical dominance attempts.'
        ],
        callout: 'Your dog does not view you as a pack rival — they look to you as a protective, benevolent guide.'
      }
    ]
  },
  'art-positive': {
    title: 'OPERANT CONDITIONING & POSITIVE REINFORCEMENT (+R) DIALECTIC',
    summary: "B.F. Skinner's 4 quadrants: Why positive punishment (+P) only suppresses behavior instead of extinguishing it.",
    author: 'Modern Behavioral Sciences',
    tags: ['Skinner', 'Positive Reinforcement', 'Reward Marker', 'Clicker Training'],
    content: [
      {
        heading: "Skinner's 4 Quadrants in Dog Training",
        paragraphs: [
          '+R (Positive Reinforcement): Adding a desired reward immediately after behavior to increase its frequency.',
          '-P (Negative Punishment): Removing access to rewards/attention when unwanted behavior happens (e.g. turning back when jumping).',
          '+P (Positive Punishment): Applying physical force, yelling, shock, or choke collars. Scientifically associated with chronic anxiety and fallout.'
        ],
        callout: 'Behaviors learned through fear collapse under high stress; behaviors built through reinforcement endure for a lifetime.'
      }
    ]
  },
  'art-fear-periods': {
    title: 'CRITICAL FEAR PERIODS IN PUPPY DEVELOPMENT',
    summary: 'Sensitive neurological windows at 8-11 weeks and 6-14 months. Why developmental trauma during these phases can leave lifelong scars.',
    author: 'Developmental Ethology',
    tags: ['Puppy', 'Fear Periods', 'Socialization', 'Neurology'],
    content: [
      {
        heading: 'Two Critical Fear Windows',
        paragraphs: [
          '1. First Fear Period (8-11 Weeks): Coincides with weaning and rehoming. Harsh handling or traumatic vet visits during this window must be carefully prevented.',
          '2. Second Fear Period (6-14 Months - Adolescence): Dogs may suddenly spook or bark at everyday objects (like trash cans or umbrellas) they were previously comfortable around.'
        ],
        callout: 'Forcing a dog toward fear triggers creates lifelong phobias; maintaining safe distance and rewarding curiosity builds resilience.'
      }
    ]
  }
};

export function getLocalizedArticle(art: LibraryArticle, lang: 'tr' | 'en'): LibraryArticle {
  if (lang !== 'en') return art;
  const enData = ARTICLES_EN_MAP[art.id];
  if (!enData) return art;
  return {
    ...art,
    ...enData,
    content: enData.content || art.content
  };
}
