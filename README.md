# Kuchu — Köpek Psikolojisi ve Eğitimi Web Uygulaması
### Swiss Modernism & Pozitif Etoloji Platformu

Köpek sahiplerinin köpek psikolojisini anlamasına ve bilimsel temelli, pozitif pekiştirme odaklı eğitim yapmasına yardımcı olan interaktif web uygulaması. Birincil dil Türkçe’dir.

---

## 🌐 Canlı Yayın ve Bağlantılar

- **Canlı Web Uygulaması (GitHub Pages):** [https://mserman90.github.io/kuchu/](https://mserman90.github.io/kuchu/)
- **GitHub Kaynak Kod Deposu:** [https://github.com/mserman90/kuchu](https://github.com/mserman90/kuchu)
- **CI/CD:** GitHub Actions otomatik derleme ve dağıtım iş akışı (`.github/workflows/deploy.yml`) aktif.

---

## 🎨 Tasarım Dili (Swiss Modernism & Neo-Brutalism)
Görsel dil `DESIGN.md` içinde tanımlanmıştır:
- **900 ağırlıkta üst-simge tipografi** (`font-black uppercase tracking-tight`)
- **2px siyah çerçeveler** (`border-2 border-black dark:border-white`)
- **Sert offset gölgeler** (`shadow-[4px_4px_0px_0px_#000000]`)
- **Sıfır köşe yarıçapı** (`rounded-none`)
- **Kırmızı birincil vurgu** (`#dc2626`)
- Renk, tipografi ve gölgeler `src/index.css` içindeki semantik CSS değişkenleri ve `tailwind.config.ts` üzerinden yönetilir.

---

## 🧭 Uygulama Rotaları ve Özellikler

### ⚡ 1. Akıllı Hızlı Çözüm ve Klinik Triyaj (`/hizli-cozum`) [YENİ]
- **5 Aşamalı Klinik Karar Ağacı:** Temel belirti, başlangıç zamanı, yaş grubu, beden dili ve sahibin mevcut tepkisi analiz edilir.
- **Kişiselleştirilmiş Çözüm Reçetesi:**
  - Aciliyet seviyesi (`DÜŞÜK`, `ORTA`, `YÜKSEK`, `KRİTİK`)
  - Merck 3M Eylem Planı (Management, Modification, Response Substitution DRI, Medical Threshold)
  - Bugün uygulanacak 3 acil adım ve durdurulması gereken hatalı tepkiler
  - İlgili rehber ve makale kısayolları

### 🐾 2. Köpek Davranış Analizi (`/analiz`)
- **Girdiler:** Kuyruk (pozisyon, sallama hızı/genişliği/yönü, gerginlik), kulaklar, gözler, ağız-yüz, vücut duruşu ve genel enerji sinyalleri adım adım seçilir.
- **Deterministik Motor:** Kural tabanlı ağırlıklı puanlama motoru:
  - Kuyruk %30 (Vallortigara sağ/sol hemisfer asimetrisi)
  - Duruş %25
  - Göz + Ağız %20 (Turid Rugaas sakinleşme sinyalleri)
  - Kulaklar %15
  - Enerji %10
- **Çıktılar:**
  - 8 ruh hali kategorisi (*Rahat/Mutlu, Meraklı, Oyun İstiyor, Belirsiz/Temkinli, Stresli, Korkmuş, Aşırı Uyarılmış, Tehditkâr/Agresif*)
  - 3 kademeli risk seviyesi (*Yeşil, Sarı, Kırmızı*)
  - Güven düzeyi (%88 - %98)
  - Puan dağılımı (Score Breakdown)
  - Merck gizli fiziksel ağrı dışlama uyarısı
  - "Ne yapmalısınız / Ne yapmamalısınız" listeleri
- **Eğitim Modu Anahtarı:** Her seçeneğin yanında etolojik bilimsel açıklamayı anında görüntüler.

### 🩺 3. Davranış Sorunu Çözüm Merkezi (`/sorunlar`)
Aşırı havlama, ısırma, ayrılık anksiyetesi, tasma çekme, tuvalet eğitimi, korku, kaynak koruma/agresyon ve zıplama başlıkları için:
- **Merck Veterinary Manual 3M Protokolü:** 1. Çevresel Yönetim, 2. Pozitif Modifikasyon, 3. Tepki İkamesi (DRI), 4. Tıbbi & Ağrı Taraması
- Olası kök nedenler ve adım adım pozitif çözüm yöntemleri
- Yapılmaması gerekenler (mitler ve cezalar)
- Ne zaman profesyonel yardım alınması gerektiği

### 📅 4. Eğitim Planı Oluşturucu (`/egitim-planlari`)
- Köpek bilgileri (ırk, yaş, boyut, enerji, bilinen sorunlar)
- Hedef seçimi (temel itaat, gevşek tasma, ayrılık anksiyetesi, sosyalleşme, reaktivite, zihinsel zenginleştirme)
- 7 / 14 / 30 gün + Seviye seçimi (Başlangıç, Orta, İleri)
- Gün gün plan üretimi; günlük görev onay kutusu ve yüzde ilerleme takibi
- Yazdırma ve köpeğin profiline kaydetme

### 📚 5. Bilgi Kütüphanesi (`/kutuphane`)
- **Merck Vet Klinik Rehberi (5 Özel Klinik Makale):**
  - Agresyon Taksonomisi ve Ayırt Edici Tanı
  - Yaşlı Köpeklerde DISHAA Modeli ve Demans (CDS)
  - Tepki İkamesi (Response Substitution / DRI)
  - Normal Sosyal Davranış, İletişim ve Alfa Miti
  - 3M Davranış Tedavi Modeli (Management, Modification, Medication)
- Sakinleşme Sinyalleri (Turid Rugaas)
- Kuyruk Asimetrisi ve Beyin Yarıküreleri (Vallortigara & Quaranta)
- Alfa Miti ve Kurt Sürü Dinamikleri (Dr. David Mech)
- Edimsel Koşullanma (+R / -P)
- Yavruluk ve Ergenlik Korku Dönemleri (Fear Periods)

### 💬 6. PatiAsistan (`/patiasistan`)
- Köpek psikolojisi ve eğitimi hakkında AI destekli Türkçe sohbet asistanı
- Yanıtlar akış (*streaming*) hâlinde gelir
- Merck Veterinary Manual ilkeleriyle (Ağrı dışlama, 3M, DISHAA, pozitif pekiştirme) yanıt üretimi
- Zorunlu veteriner hekim ve davranış uzmanı sorumluluk reddi uyarısı

### 👤 7. Hesap Paneli (`/panel`)
- Köpek profilleri (ekle, düzenle, sil, aktif seç)
- Analiz geçmişi
- **Analiz Karşılaştırma:** İki geçmiş analizi yan yana koyarak gelişim farkını ve gerilim skoru değişimini inceleme
- Eğitim planı ilerlemesi ve günlük görev kutucukları
- Favoriler (yıldızlanan makaleler ve sorunlar)
- Kişisel notlar ve gözlem günlüğü

---

## 🛠️ Teknoloji & Mimari

- **Frontend:** React + Vite + TypeScript + Tailwind CSS + Lucide Icons + next-themes + sonner
- **Backend Entegrasyonu:** Atoms Cloud — `@metagptx/web-sdk` üzerinden:
  - `client.auth` (e-posta tabanlı kimlik doğrulama)
  - `client.entities` (`dog_profiles`, `behavior_analyses`, `training_plans`, `favorites`, `assistant_messages`)
  - `client.ai` (streaming AI asistanı)
  - Çevrimdışı / LocalStorage ayna katmanı (kesintisiz veri sürekliliği)
- **Analiz Motoru:** Tamamen istemci tarafında çalışan deterministik ve kural tabanlıdır; aynı seçimler her zaman aynı sonucu üretir. AI yalnızca PatiAsistan sohbetinde kullanılır.

---

## ⚖️ Yasal Sorumluluk Reddi (Disclaimer)

Uygulama tıbbi veya veteriner teşhis ve tedavi hizmeti sunmaz. Analiz sonuçları genel bir rehberdir; ciddi davranış sorunlarında profesyonel köpek eğitmeni veya veteriner davranış uzmanına danışılmalıdır. Kişisel veriler KVKK kapsamında yalnızca hesap, profil ve eğitim kayıtlarını saklamak amacıyla işlenir.
