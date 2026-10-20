<div align="center">

# 🐾 KUCHU — Köpek Psikolojisi & Pozitif Eğitim Platformu
### *Swiss Modernism Estetiği & Kanıta Dayalı Klinik Etoloji Sistemi*

[![Deploy to GitHub Pages](https://github.com/mserman90/kuchu/actions/workflows/deploy.yml/badge.svg)](https://github.com/mserman90/kuchu/actions/workflows/deploy.yml)
[![Canlı Demo](https://img.shields.io/badge/Canlı%20Yayın-GitHub%20Pages-dc2626?style=flat&logo=github)](https://mserman90.github.io/kuchu/)
[![PWA Ready](https://img.shields.io/badge/PWA-Çevrimdışı%20Destekli-black?style=flat&logo=pwa)](https://mserman90.github.io/kuchu/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Köpek sahiplerinin köpek psikolojisini anlamasına, beden dilini doğru okumasına ve bilimsel temelli pozitif pekiştirme (+R) ile şiddetsiz eğitim yapmasına yardımcı olan açık kaynaklı PWA web uygulaması.**

[🌐 Canlı Uygulamayı Aç (PWA)](https://mserman90.github.io/kuchu/) • [⚡ Hızlı Çözüm Sihirbazı](https://mserman90.github.io/kuchu/#/hizli-cozum) • [🧭 Davranış Analizi](https://mserman90.github.io/kuchu/#/analiz) • [🩺 Sorun Çözüm Merkezi](https://mserman90.github.io/kuchu/#/sorunlar)

---

</div>

## 📌 Proje Özeti ve Manifestomuz

Yıllardır televizyon ve sosyal medyada yayılan *"alfa kurt olun"*, *"köpeğe hükmedin"*, *"sırt üstü devirin (alpha roll)"* gibi çağ dışı baskı ve ceza yöntemleri; binlerce köpeğin travmatize olmasına, güvensizlik krizlerine ve savunma amaçlı ısırma vakalarına yol açmıştır.

**Kuchu**, modern hayvan davranışı bilimini (klinik etoloji) ve **Merck Veterinary Manual** standartlarını temel alır:
1. **İnatçılık Değil, İletişim:** Köpekler asla "inat olsun" diye davranmaz; her istenmeyen hareketin ardında ya korku, ya karşılanmamış enerji ya da fiziksel bir acı yatar.
2. **Merck 3M Modeli:** Başarılı davranış tedavisi yalnızca komut öğretmek değildir; **Çevresel Yönetim (Management)**, **Pozitif Modifikasyon (Modification)** ve **Medikal Destek (Medication)** bileşenlerinden oluşur.
3. **Önce Fiziksel Sağlık:** Ani başlayan agresyon, huysuzluk veya tuvalet kaçırma vakalarının büyük çoğunluğunda gizli fiziksel ağrı (artrit, diş çürüğü, kulak iltihabı) yatmaktadır. Tıbbi nedenler dışlanmadan davranış eğitimi yapılamaz.
4. **Güven Odaklı Ebeveynlik:** Köpeğiniz sizi bir rakip değil; hayatını emanet ettiği güvenilir bir rehber ebeveyn olarak görür.

---

## 🎨 Tasarım Sistemi (Swiss Modernism & Neo-Brutalism)

Kuchu'nun görsel dili, basmakalıp sevimli evcil hayvan sitelerinden ayrışarak **Josef Müller-Brockmann** İsviçre grafik poster disiplinini yansıtır:
- **Sıfır Köşe Yarıçapı (`rounded-none`):** Tüm butonlar, kartlar ve pencereler 0px keskin köşelidir.
- **2px Sert Siyah Çerçeveler:** Her modül ve kart `border-2 border-black dark:border-white` ile çevrelenir.
- **Sert Offset Gölgeler:** Yumuşak bulanık gölgeler yerine sert açılı `shadow-[4px_4px_0px_0px_#000000]` kullanılır.
- **Ağırlıklı Tipografi:** Başlıklarda sıkı harf aralıklı devasa **Inter 900**, teknik metin ve göstergelerde **JetBrains Mono**.
- **İsviçre Kırmızısı Vurgusu (`#dc2626`):** Saf kırmızı yalnızca kritik eylemlerde ve risk göstergelerinde odak noktasıdır.

---

## 🧭 Uygulama Modülleri ve Mimari

| Modül | Rota | Açıklama ve Bilimsel Temel |
| :--- | :--- | :--- |
| **⚡ Akıllı Hızlı Çözüm** | `/#/hizli-cozum` | 5 soruluk klinik karar ağacı; köpeğin belirtisini, başlangıç şeklini, yaşını ve sahibin tepkisini değerlendirerek anında **Merck 3M Çözüm Reçetesi** üretir. |
| **🧭 Köpek Davranış Analizi** | `/#/analiz` | Kuyruk (%30), Duruş (%25), Yüz (%20), Kulak (%15) ve Enerji (%10) ağırlıklı deterministik etoloji motoru. Vallortigara lateralitesi ve Turid Rugaas sakinleşme sinyallerini tarar. |
| **🩺 Davranış Sorunları** | `/#/sorunlar` | Havlama, ısırma, ayrılık anksiyetesi, tasma çekme, kaynak koruma, tuvalet gerilemesi ve fırtına korkusu için 3M adımları ve **Tepki İkamesi (DRI)**. |
| **📅 Eğitim Planlayıcı** | `/#/egitim-planlari` | 7, 14 ve 30 günlük pozitif pekiştirme müfredatları, görev onay kutuları ve yüzde ilerleme takipçisi. |
| **📚 Bilgi Kütüphanesi** | `/#/kutuphane` | Merck Veterinary Manual klinik serisi (Agresyon, DISHAA Demans, Tepki İkamesi, Sosyal Sürü Miti, 3M) dahil 10 hakemli makale. |
| **🤖 PatiAsistan AI** | `/#/patiasistan` | Etoloji ve veteriner davranış tıbbı ilkeleriyle konuşan Türkçe akış (streaming) yapay zekâ asistanı. |
| **👤 Hesap & Köpek Paneli** | `/#/panel` | Profil yönetimi, analiz geçmişi, **Yan Yana Analiz Karşılaştırma Modalı**, favoriler ve kişisel eğitim notları. |

---

## 🧬 Bilimsel Literatür Entegrasyonu

- **Merck Veterinary Manual (Canine Behavior Series):**
  - **3M Modeli:** Çevresel Yönetim (Management), Pozitif Modifikasyon (Modification), Medikal Destek (Medication).
  - **DISHAA Kriterleri:** 8 yaş üstü köpeklerde demans taraması (*Disorientation, Interactions, Sleep-wake, House soiling, Anxiety, Activity*).
  - **Tepki İkamesi (Response Substitution / DRI):** İstenmeyen davranışla fiziken uyuşmayan pozitif alternatif davranışın ödüllendirilmesi.
  - **Ağrı Dışlama Kuralı:** Ani davranış değişimlerinde önce altta yatan gizli ağrının hekimce elenmesi zorunluluğu.
- **Giorgio Vallortigara & Marcello Quaranta (2007, 2013 - Current Biology):**
  - Kuyruk sağa salınımı = Sol beyin yarıküresi (Pozitif yaklaşım / Güven).
  - Kuyruk sola salınımı = Sağ beyin yarıküresi (Korku / Çekingenlik / Tehdit algısı).
- **Turid Rugaas (1997 - Calming Signals):**
  - 30'dan fazla yatıştırıcı vücut dili sinyali (dudak yalama, stres esnemesi, baş çevirme, donma).
- **Dr. L. David Mech (1999):**
  - Esaret altındaki kurt çalışmalarına dayanan "alfa kurt" safsatasının doğadaki aile hiyerarşisiyle çürütülmesi.

---

## 📱 PWA (Progressive Web App) Kurulumu

Kuchu, yerel mobil uygulama performansında çalışan tam teşekküllü bir PWA'dır:
- **Çevrimdışı Çalışma:** `sw.js` Service Worker sayesinde çekirdek varlıklar önbelleğe alınır, internet kesildiğinde dahi açılır.
- **Android Kurulumu:** Chrome üzerinden `https://mserman90.github.io/kuchu/` adresini açıp *"Ana Ekrana Ekle"* veya *"Yükle"* butonuna dokunun.
- **iOS Kurulumu:** Safari üzerinden *"Paylaş"* menüsünden *"Ana Ekrana Ekle"* seçeneğini seçin. Tam ekran, çentik uyumlu (notch-safe) olarak çalışır.

---

## 💻 Kurulum ve Geliştirme (Lokal Ortam)

Projeyi bilgisayarınızda yerel olarak çalıştırmak için:

```bash
# 1. Depoyu klonlayın
git clone https://github.com/mserman90/kuchu.git
cd kuchu

# 2. Bağımlılıkları yükleyin (pnpm önerilir)
pnpm install

# 3. Geliştirme sunucusunu başlatın
pnpm run dev

# Tarayıcınızda açın: http://localhost:5173
```

### Derleme ve Doğrulama

```bash
# Statik kod analizi (Linter)
pnpm run lint

# Üretim paketi derleme (TypeScript + Vite)
pnpm run build
```

---

## 🛡️ Yasal Sorumluluk Reddi (Disclaimer) & KVKK

> [!IMPORTANT]
> **Kuchu bir veteriner tıp teşhis ve tedavi aracı değildir.** Uygulamada sunulan analizler, rehberler ve yapay zekâ yanıtları genel bilgilendirme ve pozitif pekiştirme eğitimi amaçlıdır. Köpeğinizde ani başlayan davranış değişikliklerinde, yaralama riski taşıyan şiddetli agresyonda veya şüpheli sağlık sorunlarında mutlaka ruhsatlı bir **veteriner hekim** veya **uzman veteriner davranış terapistine** başvurulmalıdır.

Kişisel veriler KVKK ilkeleri uyarınca yalnızca kullanıcının tarayıcısında ve kendi kullanıcı oturumunda saklanır; üçüncü şahıslarla paylaşılmaz veya satılmaz.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında açık kaynak olarak sunulmaktadır.
Etolojik bilimlerin ve pozitif eğitimin yaygınlaşması adına katkılarınızı memnuniyetle bekliyoruz! 🐾
