# Kuchu — Köpek Psikolojisi ve Eğitimi Web Uygulaması
### Swiss Modernism & Pozitif Etoloji Platformu

Köpek sahiplerinin köpek psikolojisini anlamasına ve bilimsel temelli, pozitif pekiştirme odaklı eğitim yapmasına yardımcı olan interaktif web uygulaması. Birincil dil Türkçe’dir.

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

## 🚀 Komutlar

```bash
pnpm i          # bağımlılıkları yükle
pnpm run dev    # geliştirme sunucusu (http://localhost:5173)
pnpm run lint   # eslint / oxlint
pnpm run build  # üretim derlemesi
```

---

## 🧭 Uygulama Rotaları ve Özellikler

### 1. Köpek Davranış Analizi (`/analiz`)
- **Girdiler:** Kuyruk (pozisyon, sallama hızı/genişliği/yönü, gerginlik), kulaklar, gözler, ağız-yüz, vücut duruşu ve genel enerji sinyalleri adım adım seçilir.
- **Deterministik Motor:** Kural tabanlı ağırlıklı puanlama motoru:
  - Kuyruk %30
  - Duruş %25
  - Göz + Ağız %20
  - Kulaklar %15
  - Enerji %10
- **Çıktılar:**
  - 8 ruh hali kategorisi (*Rahat/Mutlu, Meraklı, Oyun İstiyor, Belirsiz/Temkinli, Stresli, Korkmuş, Aşırı Uyarılmış, Tehditkâr/Agresif*)
  - 3 kademeli risk seviyesi (*Yeşil, Sarı, Kırmızı*)
  - Güven düzeyi (%88 - %98)
  - Puan dağılımı (Score Breakdown)
  - Detaylı açıklama ve olası nedenler
  - "Ne yapmalısınız / Ne yapmamalısınız" listeleri
  - İlgili makale ve eğitim planı önerileri
  - Kaydet / Yeni Analiz akışları
- **Eğitim Modu Anahtarı:** Her seçeneğin yanında etolojik bilimsel açıklamayı anında görüntüler.

### 2. Davranış Sorunu Çözüm Merkezi (`/sorunlar`)
Aşırı havlama, ısırma, ayrılık anksiyetesi, tasma çekme, tuvalet eğitimi, korku, kaynak koruma/agresyon ve zıplama başlıkları için:
- Olası kök nedenler
- Adım adım pozitif çözüm yöntemleri
- Yapılmaması gerekenler (mitler ve cezalar)
- Ne zaman profesyonel yardım alınması gerektiği
- Favorilere ekleme

### 3. Eğitim Planı Oluşturucu (`/egitim-planlari`)
- Köpek bilgileri (ırk, yaş, boyut, enerji, bilinen sorunlar)
- Hedef seçimi (temel itaat, gevşek tasma, ayrılık anksiyetesi, sosyalleşme, reaktivite, zihinsel zenginleştirme)
- 7 / 14 / 30 gün + Seviye seçimi (Başlangıç, Orta, İleri)
- Gün gün plan üretimi; günlük görev onay kutusu ve yüzde ilerleme takibi
- Yazdırma ve köpeğin profiline kaydetme

### 4. Bilgi Kütüphanesi (`/kutuphane`)
- Temel psikoloji
- Vücut dili
- Pozitif pekiştirme
- Irk eğilimleri
- Yaş dönemleri (yavruluk, ergenlik, kıdemli)
- Kategori filtreleme, arama ve modal okuma sayfaları

### 5. PatiAsistan (`/patiasistan`)
- Köpek psikolojisi ve eğitimi hakkında AI destekli Türkçe sohbet asistanı
- Yanıtlar akış (*streaming*) hâlinde gelir
- Her ekranda ve her AI yanıtında profesyonel destek uyarısı

### 6. Hesap Paneli (`/panel`)
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
