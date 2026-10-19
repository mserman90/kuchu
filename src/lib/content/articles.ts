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
  category: 'calming_signals' | 'science' | 'training_tips' | 'puppy' | 'behavior_basics';
  readTimeMinutes: number;
  publishedDate: string;
  author: string;
  tags: string[];
  content: ArticleSection[];
}

export const ARTICLES: LibraryArticle[] = [
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
          '-P (Negatif Ceza): İstenmeyen davranış anında ödülü/dikkatı geri çekme (örn: zıplayınca arkasını dönme).',
          '+P (Pozitif Ceza): Şiddet, bağırma, şok veya boğma tasma kullanma. Bilimsel olarak yan etkisi anksiyete ve travmadır.'
        ],
        callout: 'Korkuyla öğrenilen davranış, stres anında çöker; ödülle öğrenilen davranış ise ömür boyu kalıcıdır.'
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
