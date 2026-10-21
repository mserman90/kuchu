/**
 * Kuchu Canine Toxicology Database
 * Based on Merck Veterinary Manual Toxicology & ASPCA Animal Poison Control Standards
 */

export type ToxicityLevel = 'critical' | 'high' | 'moderate' | 'safe';

export interface ToxicFoodItem {
  id: string;
  name: string;
  aliases: string[];
  level: ToxicityLevel;
  toxicAgent: string; // e.g. "Tartarik Asit", "Teobromin"
  onsetHours: string; // e.g. "2-24 saat"
  lethalThreshold: string; // e.g. "Doz bağımsız - tek bir adet bile böbrek iflası yapabilir"
  symptoms: string[];
  emergencyFirstAid: string[];
  contraindications: string[]; // e.g. "Köpek baygınsa ASLA kusturmayın"
  veterinaryTreatment: string;
  category: 'meyve_sebze' | 'tatli_seker' | 'icecek_kimyasal' | 'atistirmalik' | 'guvenli';
}

export const TOXIC_FOODS_DATABASE: ToxicFoodItem[] = [
  {
    id: 'kuru-uzum-yas-uzum',
    name: 'Kuru Üzüm ve Yaş Üzüm',
    aliases: ['üzüm', 'kuru üzüm', 'frenk üzümü', 'kek üzümü', 'grape', 'raisin'],
    level: 'critical',
    toxicAgent: 'Tartarik Asit & Potasyum Bitartrat',
    onsetHours: '6 - 24 saat',
    lethalThreshold: 'DOZ BAĞIMSIZ! Tek bir kuru üzüm dahi hassas köpeklerde akut böbrek yetmezliğini tetikleyebilir.',
    symptoms: [
      'Aralıksız kusma ve ishal (genellikle üzüm parçaları içerir)',
      'Aşırı halsizlik, ayakta duramama ve titreme',
      'İdrar yapamama (anüri) veya aşırı az idrar (akut böbrek yetmezliği belirtisi)',
      'Karın bölgesinde dokunulduğunda şiddetli ağrı inlemesi'
    ],
    emergencyFirstAid: [
      'Yutma üzerinden 2 saatten az süre geçtiyse ve köpek tamamen bilinçliyse DERHAL veteriner hekim gözetiminde kusturulmalıdır.',
      'Veteriner hekim onaylamadan evde tuz veya kimyasal ile kusturmaya çalışmayın.',
      'Gereksiz su içirmeye zorlamayın; derhal en yakın 7/24 nöbetçi kliniğe nakledin.'
    ],
    contraindications: [
      'Köpek baygınsa, kasılıyorsa veya yutkunamıyorsa ASLA kusturmayın (aspirasyon pnömonisi riski).'
    ],
    veterinaryTreatment: 'İlk 48-72 saat kesintisiz IV sıvı infüzyonu (sıvı diürezi), aktif kömür uygulaması ve seri böbrek biyokimyası (Kreatinin, BUN, Fosfor) takibi şarttır.',
    category: 'meyve_sebze'
  },
  {
    id: 'ksilitol-tatlandirici',
    name: 'Ksilitol (Xylitol / Huş Ağacı Şekeri)',
    aliases: ['sakız', 'ksilitol', 'xylitol', 'şekersiz sakız', 'fıstık ezmesi', 'diyet tatlandırıcı', 'diş macunu'],
    level: 'critical',
    toxicAgent: 'Ksilitol (Aşırı İnsülin Salgılatan Yapay Tatlandırıcı)',
    onsetHours: '15 - 60 dakika (Çok Hızlı!)',
    lethalThreshold: '0.1 g/kg hipoglisemi, >0.5 g/kg akut karaciğer iflası. 1-2 adet sakız küçük bir köpeği dakikalar içinde komaya sokabilir.',
    symptoms: [
      'Ani arka bacak titremesi, sendeleyerek sarhoş gibi yürüme',
      'Akut hipoglisemi (kan şekerinin aniden sıfırlanması)',
      'Bayılma, epileptik nöbetler ve koma',
      '24-48 saat sonra sarılık ve akut karaciğer nekrozu'
    ],
    emergencyFirstAid: [
      'DAKİKALAR HAYATİDİR! Yutma yeni gerçekleştiyse bile hekime giderken diş etlerine parmakla bal veya şeker şurubu sürün.',
      'Köpek bilinç kaybı yaşıyorsa KUSTURMAYIN.',
      'Yenen ürünün ambalajını (sakız kutusu, fıstık ezmesi kavanozu) yanınıza alın.'
    ],
    contraindications: [
      'Hipoglisemik nöbet geçiren köpeği kusturmaya çalışmak boğulmaya yol açar.'
    ],
    veterinaryTreatment: 'Derhal damar içi dekstroz (%50 Glukoz infüzyonu) ile kan şekeri stabilizasyonu, karaciğer koruyucu hepatoprotektif ajanlar (SAMe, N-asetilsistein) ve 72 saat yoğun bakım takibi.',
    category: 'tatli_seker'
  },
  {
    id: 'cikolata-ve-kakao',
    name: 'Çikolata ve Kakao Tozu',
    aliases: ['çikolata', 'kakao', 'bitter çikolata', 'sütlü çikolata', 'çikolatalı pasta', 'nutella'],
    level: 'critical',
    toxicAgent: 'Teobromin ve Kafein (Metilksantin Alkaloidleri)',
    onsetHours: '2 - 12 saat',
    lethalThreshold: 'Bitter çikolata ve saf kakao en tehlikelisidir: 20 mg/kg ajitasyon, 40-50 mg/kg kardiyotoksisite, >60 mg/kg nöbet ve ölüm.',
    symptoms: [
      'Aşırı huzursuzluk, heyecan, panting (hızlı nefes alma)',
      'Taşikardi (kalbin göğüs kafesini parçalayacak gibi hızlı atması) ve ritim bozukluğu',
      'Kas seğirmeleri, hipertermi (vücut ısısının fırlaması)',
      'Nöbetler, kalp yetmezliği ve iç kanama'
    ],
    emergencyFirstAid: [
      'Köpeğinizin yaklaşık kaç gram ve ne tür çikolata yediğini hesaplayın (Bitter mi, sütlü mü?).',
      'Yutmanın ilk 1-2 saati içindeyse derhal veteriner kliniğinde kusturma işlemi yapılmalıdır.',
      'Kalp atışlarını hızlandıracak stres ve gürültüden uzak, serin bir alanda tutun.'
    ],
    contraindications: [
      'Nöbet geçiren veya ritim bozukluğu olan köpeğe evde tuz yedirmeyin.'
    ],
    veterinaryTreatment: 'Mide lavajı, tekrarlayan dozlarda aktif kömür (teobromin enterohepatik dolaşıma girer), beta-blokerler (aritmi kontrolü) ve sedasyon.',
    category: 'tatli_seker'
  },
  {
    id: 'sogan-sarimsak-pirasa',
    name: 'Soğan, Sarımsak, Pırasa & Frenk Soğanı',
    aliases: ['soğan', 'sarımsak', 'pırasa', 'allium', 'kuru soğan', 'soğan tozu', 'sarımsak tozu', 'yemek artığı'],
    level: 'high',
    toxicAgent: 'N-Propil Disülfit ve Tiyosülfat (Alyuvar Yıkıcı)',
    onsetHours: '1 - 5 gün (Gecikmeli Başlangıç)',
    lethalThreshold: 'Vücut ağırlığının %0.5\'i kadar soğan tüketimi alyuvarları parçalamaya yeterlidir. Sarımsak soğandan 3-5 kat daha toksiktir.',
    symptoms: [
      'Heinz Vücut Hemolitik Anemisi (Kırmızı kan hücrelerinin patlaması)',
      'Koyu kırmızı, kahverengi veya çay rengi idrar (Hemoglobinüri)',
      'Diş etlerinde solgunluk veya porselen beyazlığı, halsizlik',
      'Nefes nefese kalma, kalp çarpıntısı ve sarılık'
    ],
    emergencyFirstAid: [
      'Yeni yendiyse (ilk 2 saat) hekim yönlendirmesiyle kusturma yapılabilir.',
      'Belirtiler günler sonra çıkabileceği için "bir şey olmadı" diyerek ihmal etmeyin.',
      'Köpeği yorucu fiziksel aktivitelerden uzak tutun (oksijen taşıma kapasitesi düşmüştür).'
    ],
    contraindications: [
      'Pişmiş, kavrulmuş veya toz haldeki soğan/sarımsak toksisitesini KAYBETMEZ.'
    ],
    veterinaryTreatment: 'Oksijen desteği, IV sıvı tedavisi, antioksidanlar ve ileri evrede kan nakli (eritrosit süspansiyonu).',
    category: 'meyve_sebze'
  },
  {
    id: 'avokado',
    name: 'Avokado (Meyve, Yaprak & Çekirdek)',
    aliases: ['avokado', 'guacamole', 'avocado'],
    level: 'high',
    toxicAgent: 'Persin Toksini ve Büyük Çekirdeğin Mekanik Tıkanma Riski',
    onsetHours: '4 - 12 saat',
    lethalThreshold: 'Çekirdeği yutulduğunda acil cerrahi gerektiren bağırsak obstrüksiyonu; kabuğu ve yaprakları ise kardiyotoksiktir.',
    symptoms: [
      'Şiddetli kusma, ishal ve karın krampları',
      'Akut miyokardiyal hasar (kalp kası nekrozu)',
      'Solunum güçlüğü ve göğüs boşluğunda sıvı birikmesi (efüzyon)'
    ],
    emergencyFirstAid: [
      'Çekirdek yutulduysa bağırsak delinmesi veya tıkanmasını önlemek için ultrason/röntgen için hekime gidin.',
      'Evde kusturmaya çalışmayın; çekirdek yemek borusunu tıkayabilir.'
    ],
    contraindications: [
      'Avokado çekirdeğini kusturmaya çalışmak boğulmaya neden olabilir.'
    ],
    veterinaryTreatment: 'Semptomatik gastrointestinal tedavi, abdominal cerrahi (çekirdek obstrüksiyonu varsa) ve kalp monitörizasyonu.',
    category: 'meyve_sebze'
  },
  {
    id: 'makademya-findigi',
    name: 'Makademya Fındığı (Macadamia)',
    aliases: ['makademya', 'macadamia', 'avustralya fındığı', 'kuruyemiş'],
    level: 'high',
    toxicAgent: 'Bilinmeyen Nörotoksin Bileşen',
    onsetHours: '3 - 12 saat',
    lethalThreshold: '2.4 g/kg (Küçük bir köpek için 4-5 adet fındık nörolojik felç tablosu başlatabilir).',
    symptoms: [
      'Arka bacaklarda ani felç, tutukluk ve ayağa kalkamama',
      'Hipertermi (vücut ateşinde aşırı yükselme)',
      'Kas titremeleri ve şiddetli eklem ağrısı',
      'Kusma ve uyuşukluk'
    ],
    emergencyFirstAid: [
      'İlk 1-2 saatte kusturma ve aktif kömür desteği.',
      'Köpeği serin, yumuşak bir zemine yatırarak ateşini düşürmeye yardımcı olun.'
    ],
    contraindications: [
      'Çikolata kaplı makademya fındıkları çifte zehirlenme riski taşır; aciliyet ikiye katlanır.'
    ],
    veterinaryTreatment: 'IV sıvı infüzyonu, analjezikler (ağrı kesici) ve ateş düşürücü destek tedavisi ile genellikle 48 saatte iyileşme sağlanır.',
    category: 'atistirmalik'
  },
  {
    id: 'mayali-hamur-alkol',
    name: 'Çiğ Mayalı Ekmek Hamuru & Alkol',
    aliases: ['hamur', 'mayalı hamur', 'bira', 'şarap', 'alkol', 'ekmek hamuru'],
    level: 'critical',
    toxicAgent: 'Etanol Üretimi ve Midede Gaz Genleşmesi (Mide Dönmesi - GDV)',
    onsetHours: '15 - 60 dakika',
    lethalThreshold: 'Köpeğin sıcak midesinde mayalanan hamur devasa boyutlara ulaşarak mideyi patlatabilir ve kana ölümcül etanol salar.',
    symptoms: [
      'Karında davul gibi şişkinlik ve öğürme (kusmaya çalışıp kusamama)',
      'Alkol zehirlenmesi: Sarhoş yürüyüşü, solunum depresyonu, hipotermi',
      'Metabolik asidoz, koma ve mide torsiyonu (GDV)'
    ],
    emergencyFirstAid: [
      'HAYATİ ACİLİYET! Soğuk su içirmek mayalanma hızını yavaşlatabilir ancak doğrudan acil cerrahi kliniğine gidilmelidir.'
    ],
    contraindications: [
      'Şişmiş mide durumunda hekimsiz kusturma mideyi yırtabilir.'
    ],
    veterinaryTreatment: 'Mide tüpüyle lavaj, soğuk suyla midenin yıkanması, etanol asidozuna karşı IV bikarbonat ve gerekirse acil gastropeksi cerrahisi.',
    category: 'tatli_seker'
  },
  {
    id: 'pismis-kemikler',
    name: 'Pişmiş Kemikler (Tavuk, Kuzu, Pirzola)',
    aliases: ['kemik', 'tavuk kemiği', 'pirzola kemiği', 'çorba kemiği', 'kılçık'],
    level: 'high',
    toxicAgent: 'Mekanik Kemik Kıymığı & Gastrointestinal Perforasyon',
    onsetHours: '1 - 24 saat',
    lethalThreshold: 'Pişen kemikler elastikiyetini kaybedip cam kıymığı gibi sertleşir; yemek borusu, mide veya bağırsağı deler.',
    symptoms: [
      'Ağızdan kanlı salya gelmesi, boyun ve karın gerginliği',
      'Dışkılayamama veya katran kıvamında siyah/kanlı dışkı (Melena)',
      'Karın zarı iltihabı (Peritonit) ve septik şok'
    ],
    emergencyFirstAid: [
      'ASLA KUSTURMAYIN! Sivri kemik kıymıkları geri çıkarken yemek borusunu boydan boya yırtabilir.',
      'Mideyi tamponlamak için köpeğe birkaç dilim beyaz ekmek veya haşlanmış kabak yedirip derhal röntgen çekimine götürün.'
    ],
    contraindications: [
      'Pişmiş kemik yutmuş köpeği kesinlikle kusturmaya çalışmayın.'
    ],
    veterinaryTreatment: 'Endoskopi ile kemik çıkarma veya acil laparotomi/enterotomi cerrahisi.',
    category: 'atistirmalik'
  },
  {
    id: 'kahve-ve-kafein',
    name: 'Kahve, Çay, Enerji İçecekleri & Kafein',
    aliases: ['kahve', 'türk kahvesi', 'çay', 'enerji içeceği', 'kafein tableti', 'kola'],
    level: 'high',
    toxicAgent: 'Kafein (Metilksantin)',
    onsetHours: '30 - 120 dakika',
    lethalThreshold: '140 mg/kg ölümcül eşiktir. 1 espresso veya 1 kafein hapı küçük bir köpek için ölümcül olabilir.',
    symptoms: [
      'Hiperaktivite, durmaksızın volta atma ve titremeler',
      'Yüksek tansiyon ve kontrolsüz kalp aritmileri',
      'Nöbetler ve ani kardiyak arrest'
    ],
    emergencyFirstAid: [
      'İlk 1 saat içinde kusturma ve sakin, loş bir odaya alma.'
    ],
    contraindications: [
      'Kalp krizi eşiğindeki köpeği heyecanlandırmayın veya koşturmayın.'
    ],
    veterinaryTreatment: 'Aktif kömür, IV sıvılar, tansiyon düşürücüler ve antikonvülzanlar.',
    category: 'icecek_kimyasal'
  },
  {
    id: 'kuflu-gidalar-ve-cop',
    name: 'Küflü Gıdalar, Bayat Peynir & Çöp Toksinleri',
    aliases: ['küf', 'küflü ekmek', 'rokfor', 'çöp', 'bozuk yemek', 'kompost'],
    level: 'high',
    toxicAgent: 'Tremorgenik Mikotoksinler (Penitrem A & Roquefortine C)',
    onsetHours: '30 dakika - 3 saat',
    lethalThreshold: 'Küflü bir somun ekmek veya peynir parçasındaki mikotoksinler aralıksız nöbetlere ve beyin hasarına yol açar.',
    symptoms: [
      'Şiddetli kas seğirmeleri ve aralıksız tüm vücut titremesi ("Çöp Titremesi")',
      'Epileptik nöbetler, aşırı salya ve yüksek ateş',
      'Bilinç kaybı ve koma'
    ],
    emergencyFirstAid: [
      'Hemen nöbet önleyici tedavi için kliniğe yetiştirin; köpeğin dilini ısırmasını önleyin.'
    ],
    contraindications: [
      'Titreyen veya nöbet geçiren köpeğe ağızdan su veya mama vermeyin.'
    ],
    veterinaryTreatment: 'Metokarbamol (kas gevşetici), diazepam/midazolam ve aktif kömür infüzyonu.',
    category: 'atistirmalik'
  },
  {
    id: 'cekirdekli-meyveler-siyanur',
    name: 'Kiraz, Erik, Şeftali & Kayısı Çekirdekleri',
    aliases: ['kiraz çekirdeği', 'erik çekirdeği', 'şeftali çekirdeği', 'kayısı', 'elma çekirdeği'],
    level: 'moderate',
    toxicAgent: 'Amigdalin (Siyanür Salgılayan Glikozit) & Bağırsak Tıkanması',
    onsetHours: '1 - 6 saat',
    lethalThreshold: 'Çekirdek kırılıp çiğnendiğinde hücrelerin oksijen kullanımını bloke eden siyanür açığa çıkar.',
    symptoms: [
      'Parlak kırmızı renkte diş etleri ve diller',
      'Genişlemiş göz bebekleri (midriazis) ve solunum güçlüğü',
      'Şok ve kollaps'
    ],
    emergencyFirstAid: [
      'Meyvenin etli kısımları güvenlidir ancak çekirdekler çiğnendiyse acil oksijen ve hekim desteği gerekir.'
    ],
    contraindications: [
      'Çekirdekleri yutmuş köpeği evde zorlamayın.'
    ],
    veterinaryTreatment: 'Siyanür antidot tedavisi (Sodyum nitrit/tiosülfat) ve obstrüksiyon takibi.',
    category: 'meyve_sebze'
  },
  {
    id: 'insan-agri-kesicileri',
    name: 'İnsan İlaçları (Parasetamol, İbuprofen, Aspirin)',
    aliases: ['parol', 'parasetamol', 'ibuprofen', 'arveles', 'aspirin', 'ağrı kesici', 'majezil'],
    level: 'critical',
    toxicAgent: 'Parasetamol & NSAID Toksisitesi',
    onsetHours: '1 - 4 saat',
    lethalThreshold: 'Köpekler insan ağrı kesicilerini parçalayacak karaciğer enzimlerine sahip DEĞİLDİR! 1 tablet Parol veya İbuprofen ölümcül mide perforasyonu ve karaciğer nekrozu yaratır.',
    symptoms: [
      'Kahverengi kan ve siyanotik (morarmış) mukoza (Methemoglobinemi)',
      'Mide delinmesine bağlı kan kusma ve katran dışkı',
      'Akut böbrek ve karaciğer yetmezliği'
    ],
    emergencyFirstAid: [
      'KESİNLİKLE EVDE İNSAN İLACI VERMEYİN! Kazara yutulduysa ilacın kutusunu alıp ilk 30 dakikada kliniğe koşun.'
    ],
    contraindications: [
      '"Ağrısı var" diyerek köpeğe yarım bebek aspirini veya parasetamol vermek ölümcül bir cinayettir.'
    ],
    veterinaryTreatment: 'N-Asetilsistein (parasetamol antidotu), C vitamini, mide koruyucu omeprazol/sukralfat ve yoğun diürez.',
    category: 'icecek_kimyasal'
  },

  // SAFE FOODS (Pozitif Kontrol & Güvenli Ödüller)
  {
    id: 'havuc',
    name: 'Havuç (Çiğ veya Haşlanmış)',
    aliases: ['havuç', 'carrot'],
    level: 'safe',
    toxicAgent: 'Toksik Değil (Zengin A Vitamini & Lif)',
    onsetHours: 'Zararsız',
    lethalThreshold: 'Güvenli. Düşük kalorili, diş plağını temizleyen harika bir ödül mamasıdır.',
    symptoms: ['Herhangi bir zehirlenme belirtisi yapmaz. Aşırı yenirse dışkıda turuncu parçalar görülebilir.'],
    emergencyFirstAid: ['Müdahale gerekmez.'],
    contraindications: ['Büyük parçaların boğazda tıkanmaması için orta boyutta dilimleyin.'],
    veterinaryTreatment: 'Gerekmez.',
    category: 'guvenli'
  },
  {
    id: 'balkabagi',
    name: 'Balkabağı (Haşlanmış & Baharatsız)',
    aliases: ['balkabağı', 'kabak', 'pumpkin'],
    level: 'safe',
    toxicAgent: 'Toksik Değil (Veteriner Sindirim Dostu)',
    onsetHours: 'Zararsız',
    lethalThreshold: 'Güvenli. İshal veya kabızlık durumunda veteriner hekimlerin önerdiği 1 numaralı lif kaynağıdır.',
    symptoms: ['Zararsızdır.'],
    emergencyFirstAid: ['Müdahale gerekmez.'],
    contraindications: ['Şekerli balkabağı tatlısı veya baharatlı püre vermeyin; saf haşlanmış olmalıdır.'],
    veterinaryTreatment: 'Gerekmez.',
    category: 'guvenli'
  },
  {
    id: 'elma-cekirdeksiz',
    name: 'Elma (Çekirdeksiz & Sapı Alınmış)',
    aliases: ['elma', 'apple'],
    level: 'safe',
    toxicAgent: 'Toksik Değil (Çekirdekleri Çıkarılmalıdır)',
    onsetHours: 'Zararsız',
    lethalThreshold: 'Meyve eti güvenlidir ve C vitamini deposudur. Sadece çekirdeklerindeki amigdalin uzaklaştırılmalıdır.',
    symptoms: ['Zararsızdır.'],
    emergencyFirstAid: ['Müdahale gerekmez.'],
    contraindications: ['Elma çekirdeklerini ve koçanını köpeğe vermeyin.'],
    veterinaryTreatment: 'Gerekmez.',
    category: 'guvenli'
  },
  {
    id: 'yaban-mersini',
    name: 'Yaban Mersini (Blueberry)',
    aliases: ['yaban mersini', 'blueberry', 'mersin'],
    level: 'safe',
    toxicAgent: 'Toksik Değil (Süper Antioksidan)',
    onsetHours: 'Zararsız',
    lethalThreshold: 'Güvenli. Beyin fonksiyonlarını ve yaşlı köpeklerde bilişsel sağlığı destekleyen harika bir ödüldür.',
    symptoms: ['Zararsızdır.'],
    emergencyFirstAid: ['Müdahale gerekmez.'],
    contraindications: ['Aşırı miktarda (avuçlar dolusu) verilirse hafif gevşek dışkı yapabilir.'],
    veterinaryTreatment: 'Gerekmez.',
    category: 'guvenli'
  }
];

/**
 * Chocolate Toxicity Calculator Engine
 * Calculates mg of theobromine per kg of dog weight and returns clinical risk
 */
export interface ChocolateCalcResult {
  totalTheobromineMg: number;
  theobromineDoseMgPerKg: number;
  severity: 'negligible' | 'mild' | 'moderate' | 'severe_critical';
  summary: string;
  actionRequired: string;
}

export function calculateChocolateToxicity(
  dogWeightKg: number,
  chocolateType: 'white' | 'milk' | 'dark' | 'baking_cocoa',
  amountGrams: number,
  lang: 'tr' | 'en' = 'tr'
): ChocolateCalcResult {
  // Approximate theobromine content mg/g:
  // White: ~0.05 mg/g (almost zero, but fat risk)
  // Milk: ~2.0 mg/g
  // Dark (~60-70%): ~6.0 mg/g
  // Baking chocolate / Pure Cocoa powder: ~16.0 mg/g
  const rates = {
    white: 0.05,
    milk: 2.1,
    dark: 6.0,
    baking_cocoa: 16.0
  };

  const mgPerGram = rates[chocolateType];
  const totalTheobromineMg = amountGrams * mgPerGram;
  const dose = dogWeightKg > 0 ? Number((totalTheobromineMg / dogWeightKg).toFixed(1)) : 0;

  if (dose < 10) {
    return {
      totalTheobromineMg: Math.round(totalTheobromineMg),
      theobromineDoseMgPerKg: dose,
      severity: 'negligible',
      summary: lang === 'en'
        ? 'Negligible Low Dose. Life-threatening theobromine toxicity is not expected.'
        : 'İhmal Edilebilir Düşük Doz. Hayati teobromin zehirlenmesi riski beklenmez.',
      actionRequired: lang === 'en'
        ? 'Mild nausea or loose stool may occur due to high fat/sugar content; observe at home and keep fresh water accessible.'
        : 'Çikolatanın yüksek yağ ve şeker içeriği nedeniyle hafif mide bulantısı veya ishal olabilir; evde gözlemleyin, su erişimini açık tutun.'
    };
  }

  if (dose < 20) {
    return {
      totalTheobromineMg: Math.round(totalTheobromineMg),
      theobromineDoseMgPerKg: dose,
      severity: 'mild',
      summary: lang === 'en'
        ? 'Mild Toxicity Threshold. Gastrointestinal stimulation and agitation may develop.'
        : 'Hafif Toksisite Eşiği. Mide-bağırsak uyarımı ve huzursuzluk başlayabilir.',
      actionRequired: lang === 'en'
        ? 'Vomiting, diarrhea, restlessness, and frequent urination may occur. Notify your veterinarian by phone.'
        : 'Köpekte kusma, ishal, huzursuzluk ve sık idrara çıkma görülebilir. Veteriner hekiminizi telefonla bilgilendirin.'
    };
  }

  if (dose < 40) {
    return {
      totalTheobromineMg: Math.round(totalTheobromineMg),
      theobromineDoseMgPerKg: dose,
      severity: 'moderate',
      summary: lang === 'en'
        ? 'MODERATE TO HIGH TOXICITY! Risk of cardiovascular and nervous system stimulation.'
        : 'ORTA - YÜKSEK TOKSİSİTE! Kalp ve kardiyovasküler sistem uyarılması riski.',
      actionRequired: lang === 'en'
        ? 'URGENT VETERINARY ATTENTION REQUIRED! Tachycardia, tremors, and hyperthermia may develop. If ingested in the last 2 hours, emesis at clinic is recommended.'
        : 'ACİL VETERİNER MÜDAHALESİ GEREKİR! Taşikardi (aşırı hızlı kalp atışı), titremeler ve hipertermi gelişebilir. Yutma son 2 saat içindeyse klinikte kusturulmalıdır.'
    };
  }

  return {
    totalTheobromineMg: Math.round(totalTheobromineMg),
    theobromineDoseMgPerKg: dose,
    severity: 'severe_critical',
    summary: lang === 'en'
      ? '🚨 CRITICAL LIFE-THREATENING DOSE! Severe cardiotoxicity, seizures, and fatal risk!'
      : '🚨 HAYATİ KRİTİK DOZ! Şiddetli kardiyotoksisite, epileptik nöbetler ve ölüm riski!',
    actionRequired: lang === 'en'
      ? 'GO TO THE NEAREST 24/7 EMERGENCY VET CLINIC IMMEDIATELY! Call en route with dog weight and chocolate amount. Intensive care and cardiac monitoring required.'
      : 'DERHAL EN YAKIN 7/24 NÖBETÇİ VETERİNER KLİNİĞİNE GİDİN! Yolda kliniği arayarak köpeğin kilosunu ve yediği miktarı bildirin. Yoğun bakım ve kalp monitörizasyonu şarttır.'
  };
}

export const TOXIC_FOODS_EN_MAP: Record<string, Partial<ToxicFoodItem>> = {
  'kuru-uzum-yas-uzum': {
    name: 'Grapes and Raisins (Fresh or Dried)',
    toxicAgent: 'Tartaric Acid & Potassium Bitartrate',
    onsetHours: '6 - 24 hours',
    lethalThreshold: 'DOSE INDEPENDENT! Even a single raisin can trigger acute renal failure in sensitive dogs.',
    symptoms: [
      'Continuous vomiting and diarrhea (often containing grape pieces)',
      'Extreme lethargy, inability to stand, and tremors',
      'Oliguria or anuria (absence of urine - acute kidney failure sign)',
      'Severe abdominal pain upon gentle touch'
    ],
    emergencyFirstAid: [
      'If ingested less than 2 hours ago and the dog is fully conscious, emesis must be induced immediately under veterinary care.',
      'Never attempt to induce emesis with salt or household chemicals at home.',
      'Do not force water; transport immediately to the nearest 24/7 clinic.'
    ],
    contraindications: [
      'NEVER induce vomiting if dog is unconscious, having seizures, or unable to swallow (aspiration pneumonia risk).'
    ],
    veterinaryTreatment: 'Continuous IV fluid diuresis for the first 48-72 hours, activated charcoal administration, and serial kidney panel monitoring.'
  },
  'ksilitol-tatlandirici': {
    name: 'Xylitol (Birch Sugar / Sugar-Free Gum)',
    toxicAgent: 'Xylitol (Massive Insulin Secretion Trigger)',
    onsetHours: '15 - 60 minutes (Extremely Fast!)',
    lethalThreshold: '0.1 g/kg causes hypoglycemia, >0.5 g/kg causes acute hepatic failure. 1-2 sticks of gum can send a small dog into a coma.',
    symptoms: [
      'Sudden hind-leg weakness, ataxia (staggering walk)',
      'Acute severe hypoglycemia (blood sugar collapse)',
      'Collapse, epileptic seizures, and coma'
    ],
    emergencyFirstAid: [
      'Life-threatening emergency! Rub honey or syrup directly onto gums if conscious, and rush to emergency clinic immediately.',
      'Do NOT induce vomiting if the dog is unsteady, weak, or having seizures.'
    ],
    contraindications: [
      'Do not wait for symptoms to appear; liver damage happens very rapidly.'
    ],
    veterinaryTreatment: 'IV dextrose infusion, continuous glucose monitoring, hepatoprotectants (SAMe), and coagulopathy screening.'
  },
  'cikolata-ve-kakao': {
    name: 'Chocolate and Cocoa (Theobromine)',
    toxicAgent: 'Theobromine & Caffeine (Methylxanthines)',
    onsetHours: '1 - 6 hours',
    lethalThreshold: '20 mg/kg causes mild signs; >40 mg/kg cardiotoxic; >60 mg/kg causes seizures. Baking cocoa is 8-10x more concentrated than milk chocolate.',
    symptoms: [
      'High fever, panting, and uncontrollable restlessness',
      'Tachycardia (racing heartbeat) and dangerous arrhythmias',
      'Muscle stiffness, twitches, seizures, and collapse'
    ],
    emergencyFirstAid: [
      'Calculate theobromine dose via the interactive calculator below.',
      'If ingested within 2 hours, proceed to clinic for gastric decontamination.'
    ],
    contraindications: [
      'Never treat vomiting with salt water; salt toxicity can be fatal.'
    ],
    veterinaryTreatment: 'Gastric lavage, repeated activated charcoal (enterohepatic recycling), beta-blockers for arrhythmias, and IV fluid diuresis.'
  },
  'sogan-sarimsak-pirasa': {
    name: 'Onions, Garlic, Leeks & Chives',
    toxicAgent: 'N-Propyl Disulfide & Thiosulfate (Hemolytic)',
    onsetHours: '1 - 5 days (Delayed Onset)',
    lethalThreshold: '0.5% of body weight in onion destroys red blood cells. Garlic is 3-5x more toxic than raw onion.',
    symptoms: [
      'Heinz Body Hemolytic Anemia (red blood cells rupture)',
      'Dark red, brown, or tea-colored urine (hemoglobinuria)',
      'Pale or porcelain-white gums, extreme weakness',
      'Panting, rapid heartbeat, and jaundice'
    ],
    emergencyFirstAid: [
      'If swallowed recently (< 2 hours), clinical emesis is effective.',
      'Never assume safety because signs did not appear on day 1.',
      'Keep the dog rested and avoid strenuous walks (oxygen capacity is compromised).'
    ],
    contraindications: [
      'Cooked, powdered, or fried onion/garlic does NOT lose toxicity.'
    ],
    veterinaryTreatment: 'Oxygen therapy, IV fluids, antioxidants, and blood transfusion in critical hemolytic cases.'
  },
  'avokado': {
    name: 'Avocado (Fruit, Leaves & Large Pit)',
    toxicAgent: 'Persin Toxin & Mechanical Pit Obstruction',
    onsetHours: '4 - 12 hours',
    lethalThreshold: 'Ingested pit causes intestinal obstruction requiring emergency surgery; leaves and skin cause myocardial damage.',
    symptoms: [
      'Severe vomiting, diarrhea, and abdominal cramping',
      'Myocardial necrosis (heart muscle tissue damage)',
      'Respiratory distress and fluid accumulation in chest'
    ],
    emergencyFirstAid: [
      'If pit was swallowed, go immediately for X-ray/ultrasound.',
      'Do NOT induce vomiting at home; the large pit can lodge in esophagus.'
    ],
    contraindications: [
      'Forced vomiting of large pit can cause asphyxiation.'
    ],
    veterinaryTreatment: 'Supportive gastrointestinal care, abdominal surgery if obstructed, and cardiac monitoring.'
  },
  'makademya-findigi': {
    name: 'Macadamia Nuts',
    toxicAgent: 'Unknown Neurotoxic Compound',
    onsetHours: '3 - 12 hours',
    lethalThreshold: '2.4 g/kg (4-5 nuts can paralyze a small dog temporarily).',
    symptoms: [
      'Hind limb paresis, stiffness, and inability to stand',
      'Hyperthermia (elevated body temperature)',
      'Muscle tremors and joint pain',
      'Vomiting and lethargy'
    ],
    emergencyFirstAid: [
      'Clinical emesis and activated charcoal within 1-2 hours.',
      'Keep the dog in a cool, quiet, padded space.'
    ],
    contraindications: [
      'Chocolate-covered macadamias carry double poisoning risk.'
    ],
    veterinaryTreatment: 'IV fluids, analgesics, antipyretics; full recovery usually within 24-48 hours.'
  },
  'mayali-hamur-alkol': {
    name: 'Raw Yeast Bread Dough & Alcohol',
    toxicAgent: 'Ethanol Fermentation & Gastric Torsion (GDV)',
    onsetHours: '15 - 60 minutes',
    lethalThreshold: 'Dough expands in warm stomach, risking gastric rupture and releasing lethal amounts of alcohol into bloodstream.',
    symptoms: [
      'Extreme abdominal distension and non-productive retching',
      'Alcohol poisoning: ataxia, hypothermia, slow breathing',
      'Metabolic acidosis, coma, and gastric torsion (GDV)'
    ],
    emergencyFirstAid: [
      'LIFE THREATENING! Give small amount of cold water to slow fermentation while speeding to emergency surgery clinic.'
    ],
    contraindications: [
      'Never induce vomiting if stomach is visibly bloated (rupture danger).'
    ],
    veterinaryTreatment: 'Cold water gastric lavage, IV sodium bicarbonate, and emergency surgery if stomach is twisted.'
  },
  'pismis-kemikler': {
    name: 'Cooked Bones (Chicken, Lamb, Chops)',
    toxicAgent: 'Mechanical Splintering & Gastrointestinal Perforation',
    onsetHours: '1 - 24 hours',
    lethalThreshold: 'Cooked bones lose flexibility and shatter like glass; sharp shards puncture esophagus, stomach, or intestines.',
    symptoms: [
      'Bloody drool, rigid abdomen, and painful crying',
      'Constipation or tarry black stool (melena)',
      'Peritonitis and septic shock'
    ],
    emergencyFirstAid: [
      'DO NOT INDUCE VOMITING! Bone shards will tear the esophagus coming up.',
      'Feed several slices of white bread or plain boiled pumpkin to cushion shards and go immediately for X-ray.'
    ],
    contraindications: [
      'Never induce vomiting after cooked bone ingestion.'
    ],
    veterinaryTreatment: 'Endoscopy or emergency exploratory surgery (laparotomy/enterotomy).'
  },
  'kahve-ve-kafein': {
    name: 'Coffee, Tea, Energy Drinks & Caffeine',
    toxicAgent: 'Caffeine (Methylxanthine)',
    onsetHours: '30 - 120 minutes',
    lethalThreshold: '140 mg/kg lethal threshold. 1 espresso shot or caffeine pill can be deadly for a small dog.',
    symptoms: [
      'Severe hyperactivity, pacing, and muscle tremors',
      'High blood pressure and dangerous arrhythmias',
      'Seizures and cardiac arrest'
    ],
    emergencyFirstAid: [
      'Clinic emesis within first hour; keep dog in dim, quiet room.'
    ],
    contraindications: [
      'Do not excite or exercise a dog with racing heartbeat.'
    ],
    veterinaryTreatment: 'Activated charcoal, IV fluids, beta-blockers, and anticonvulsants.'
  },
  'kuflu-gidalar-ve-cop': {
    name: 'Moldy Foods, Spoiled Cheese & Compost',
    toxicAgent: 'Tremorgenic Mycotoxins (Penitrem A & Roquefortine C)',
    onsetHours: '30 minutes - 3 hours',
    lethalThreshold: 'Mycotoxins on moldy food cause non-stop seizures and neurological trauma.',
    symptoms: [
      'Violent muscle fasciculations and whole-body shaking ("Garbage Shakes")',
      'Epileptic seizures, profuse drooling, and high fever',
      'Loss of consciousness and coma'
    ],
    emergencyFirstAid: [
      'Rush to clinic for seizure management; prevent dog from injuring itself.'
    ],
    contraindications: [
      'Do not give oral liquids or food during tremors or seizures.'
    ],
    veterinaryTreatment: 'Methocarbamol (muscle relaxant), diazepam/midazolam, and activated charcoal.'
  },
  'cekirdekli-meyveler-siyanur': {
    name: 'Cherry, Plum, Peach & Apricot Pits',
    toxicAgent: 'Amygdalin (Cyanide-Releasing Glycoside) & Obstruction',
    onsetHours: '1 - 6 hours',
    lethalThreshold: 'Crushed pits release cyanide, which prevents cells from using oxygen.',
    symptoms: [
      'Bright red gums and tongue',
      'Dilated pupils (mydriasis) and severe dyspnea',
      'Shock and collapse'
    ],
    emergencyFirstAid: [
      'Fruit pulp is safe, but crushed pits require immediate veterinary oxygen and antidote therapy.'
    ],
    contraindications: [
      'Do not stress an oxygen-deprived dog at home.'
    ],
    veterinaryTreatment: 'Cyanide antidote (Sodium nitrite/thiosulfate) and obstruction monitoring.'
  },
  'insan-agri-kesicileri': {
    name: 'Human Painkillers (Paracetamol, Ibuprofen, Aspirin)',
    toxicAgent: 'Paracetamol & NSAID Hepatotoxicity / Nephrotoxicity',
    onsetHours: '1 - 4 hours',
    lethalThreshold: 'Dogs lack human liver enzymes! 1 pill can cause fatal stomach perforation and liver necrosis.',
    symptoms: [
      'Brown muddy blood and blue gums (methemoglobinemia)',
      'Vomiting blood and black tarry stool',
      'Acute liver and kidney shutdown'
    ],
    emergencyFirstAid: [
      'NEVER GIVE HUMAN PAIN MEDS! If ingested accidentally, bring the medication package to clinic within 30 minutes.'
    ],
    contraindications: [
      'Giving baby aspirin or paracetamol to a dog in pain is a fatal mistake.'
    ],
    veterinaryTreatment: 'N-Acetylcysteine (antidote), Vitamin C, gastroprotectants, and IV diuresis.'
  },
  'havuc': {
    name: 'Carrots (Raw or Boiled)',
    toxicAgent: 'Non-Toxic (Rich in Vitamin A & Fiber)',
    onsetHours: 'Harmless',
    lethalThreshold: 'Safe. Low calorie, excellent dental-cleaning crunchy treat.',
    symptoms: ['Does not cause toxicity. Orange specks may appear in stool if eaten in large amounts.'],
    emergencyFirstAid: ['No intervention required.'],
    contraindications: ['Slice into bite-sized pieces for small dogs to prevent choking.'],
    veterinaryTreatment: 'Not required.'
  },
  'balkabagi': {
    name: 'Pumpkin (Boiled & Unseasoned)',
    toxicAgent: 'Non-Toxic (Digestive Superfood)',
    onsetHours: 'Harmless',
    lethalThreshold: 'Safe. #1 vet-recommended soluble fiber source for both diarrhea and constipation.',
    symptoms: ['Completely safe.'],
    emergencyFirstAid: ['No intervention required.'],
    contraindications: ['Do not feed spiced pie mix or sweetened pumpkin; use 100% plain boiled puree.'],
    veterinaryTreatment: 'Not required.'
  },
  'elma-cekirdeksiz': {
    name: 'Apples (Seedless & Cored)',
    toxicAgent: 'Non-Toxic (Remove Seeds & Core)',
    onsetHours: 'Harmless',
    lethalThreshold: 'Flesh is safe and rich in Vitamin C and fiber. Only seeds should be discarded.',
    symptoms: ['Safe.'],
    emergencyFirstAid: ['No intervention required.'],
    contraindications: ['Do not give central hard core or seeds to dog.'],
    veterinaryTreatment: 'Not required.'
  },
  'yaban-mersini': {
    name: 'Blueberries (Fresh or Frozen)',
    toxicAgent: 'Non-Toxic (Super Antioxidant)',
    onsetHours: 'Harmless',
    lethalThreshold: 'Safe. Rich in antioxidants, supporting canine brain and cognitive health.',
    symptoms: ['Safe.'],
    emergencyFirstAid: ['No intervention required.'],
    contraindications: ['Feed moderate amounts; excessive handfuls can cause transient loose stool.'],
    veterinaryTreatment: 'Not required.'
  }
};

export function getLocalizedToxicFood(item: ToxicFoodItem, lang: 'tr' | 'en'): ToxicFoodItem {
  if (lang !== 'en') return item;
  const enData = TOXIC_FOODS_EN_MAP[item.id];
  if (!enData) return item;
  return {
    ...item,
    ...enData
  };
}
