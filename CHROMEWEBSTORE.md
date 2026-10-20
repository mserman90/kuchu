# Chrome Web Store – Kuchu Extension Metadata

> Bu dosya; Chrome Web Store gönderimi için gerekli tüm metaveri, izin gerekçeleri, mağaza açıklamaları ve gizlilik politikasını içerir.
> Kuchu şu an bir **PWA** olarak dağıtılmaktadır; ileride Chrome Uzantısı olarak paketlenecek yapıya hazır tutulmaktadır.

---

## 1. Temel Kimlik Bilgileri

| Alan | Değer |
|---|---|
| **Uzantı Adı** | Kuchu — Köpek Psikolojisi & Pozitif Eğitim |
| **Kısa Ad** | Kuchu |
| **Sürüm** | 1.0.0 |
| **Manifest Sürümü** | V3 |
| **Kategori** | Education / Lifestyle |
| **Dil** | Türkçe (tr) |
| **Hedef Kitle** | 13+ yaş, köpek sahipleri ve eğiticiler |

---

## 2. Mağaza Kısa Açıklaması (≤ 132 karakter)

```
Köpeğinizi anın. Merck klinik protokolleri + AI ile beden dili analizi, davranış çözümü ve zehirli gıda rehberi.
```

---

## 3. Mağaza Uzun Açıklaması (≤ 16.000 karakter)

```
🐾 KUCHU — TÜRKİYE'NİN İLK MERKVETERİNARY STANDARTLI KÖPEK DAVRANIŞ PLATFORMU

Köpeğiniz size bir şey anlatmaya çalışıyor. Aşırı havlama, tasma çekiştirme, yalnız kalamama veya ani
agresyon... Bunların hiçbiri inatçılık değil; birer iletişim mesajıdır.

Eski ceza mitlerini (alpha roll, elektrikli şok, boğma tasma) bir kenara bırakın.
Kuchu; Merck Veterinary Manual Klinik Protokolleri ve Yapay Zeka desteğiyle köpeğinizin
gerçek ruh halini ve ihtiyaçlarını saniyeler içinde keşfetmenizi sağlar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔬 BİLİMSEL TEMEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Merck 3M Modeli: Çevresel Yönetim (Management) + Pozitif Modifikasyon (Modification) + Medikal Destek (Medication)
• Vallortigara & Quaranta Kuyruk Lateralitesi: Sağa = pozitif yaklaşım, Sola = tehdit algısı
• Turid Rugaas Calming Signals: 30+ yatıştırıcı sinyal haritası
• DISHAA Demans Kriterleri: 8+ yaş köpeklerde bilişsel işlev kaybı taraması

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ 7 ANA MODÜL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. HIZLI ÇÖZÜM SİHİRBAZI (1 dakika)
   5 soruluk klinik karar ağacı; aciliyet derecesi + Merck 3M reçetesi üretir.

2. CANINE VİSİON AI TARAYICI
   Fotoğraf yükleyin; postür, kulak açısı ve Balina Gözü stres sinyallerini AI ile haritalandırın.

3. DAVRANIŞ SORUNU ÇÖZÜM MERKEZİ (14+ protokol)
   - Aşırı havlama, tasma çekme, ısırma
   - Ayrılık anksiyetesi, kaynak koruma
   - Tavuk/koyun kovalama (çiftlik köpekleri)
   - Evcil hayvan yeme (koprofaji dahil)
   - Tırnak kesim fobisi, fırtına korkusu

4. ZEHİRLİ GIDA DEDEKTÖRÜ
   Çikolata, üzüm, soğan, ksilitol, kafein — teobromin dozu hesaplayıcı + acil ilk yardım adımları.

5. KİŞİSELLEŞTİRİLMİŞ EĞİTİM PLANLAYICI
   7 / 14 / 30 günlük pozitif pekiştirme programları, görev takibi ve yüzde ilerleme.

6. PATİASİSTAN AI SOHBET
   Etoloji ve veteriner davranış tıbbı ilkeleriyle yanıt veren Türkçe streaming AI.

7. BİLGİ KÜTÜPHANESİ
   Merck klinik serisi, hakemli makaleler ve sahadaki uygulamalı vaka çalışmaları.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ NEDEN KUCHU?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• %100 Ücretsiz — Hesap veya kredi kartı şartı yok
• Çevrimdışı Çalışır (PWA/Service Worker)
• Hiçbir verini üçüncü taraflarla paylaşmaz (KVKK uyumlu)
• Sıfır reklam, sıfır izleme
• Açık kaynak (MIT Lisansı) — GitHub: https://github.com/mserman90/kuchu

⚠️ YASAL UYARI: Kuchu veteriner tıp teşhis aracı değildir. Yüksek risk tespitinde lütfen ruhsatlı
veteriner hekime veya uzman davranış terapistine başvurun.
```

---

## 4. İzinler ve Gerekçeler

> Şu an Kuchu bir Chrome Uzantısı değil, PWA olarak çalışmaktadır. Uzantı dönüşümünde kullanılacak izin gerekçeleri:

| İzin | Gerekçe |
|---|---|
| `storage` | Köpek profili, analiz geçmişi ve eğitim planı verilerini kullanıcının yerel tarayıcısında saklamak için. Sunucuya gönderilmez. |
| `offscreen` | Service Worker üzerinden offline destek ve PWA önbellekleme için. |

**Hassas izin yok.** Kamera, mikrofon, konum, sekme veya gezinme geçmişine erişim talep edilmemektedir.

---

## 5. Veri Gizliliği Beyanı

### Toplanan Veriler
| Veri Türü | Toplanıyor mu? | Sunucuya Gönderiliyor mu? | Üçüncü Taraf ile Paylaşılıyor mu? |
|---|---|---|---|
| Köpek profili (isim, ırk, yaş) | ✅ Kullanıcı girişiyle | ❌ Hayır | ❌ Hayır |
| Analiz geçmişi | ✅ localStorage | ❌ Hayır | ❌ Hayır |
| Eğitim planı verileri | ✅ localStorage | ❌ Hayır | ❌ Hayır |
| Kişisel kimlik bilgisi | ❌ Hayır | ❌ Hayır | ❌ Hayır |
| Konum verisi | ❌ Hayır | ❌ Hayır | ❌ Hayır |
| Gezinme/sekme geçmişi | ❌ Hayır | ❌ Hayır | ❌ Hayır |

**Tüm veriler yalnızca kullanıcının yerel `localStorage` alanında saklanır. KVKK ilkelerine uygun olarak hiçbir kişisel veri işlenmez veya aktarılmaz.**

---

## 6. Mağaza Görselleri Gereksinimleri

| Görsel | Boyut | Durum |
|---|---|---|
| İkon (mağaza) | 128×128 px PNG | ⚠️ Hazırlanacak |
| Ekran görüntüsü 1 | 1280×800 px | ⚠️ Hazırlanacak |
| Ekran görüntüsü 2 | 1280×800 px | ⚠️ Hazırlanacak |
| Ekran görüntüsü 3 | 1280×800 px | ⚠️ Hazırlanacak |
| Promosyon afişi (küçük) | 440×280 px | ⚠️ Hazırlanacak |
| Promosyon afişi (büyük) | 920×680 px | ⚠️ Hazırlanacak |

---

## 7. Kategori ve Etiketler

- **Ana Kategori:** Education
- **İkincil Kategori:** Lifestyle
- **Etiketler:** köpek, dog training, etoloji, pozitif pekiştirme, davranış analizi, pet behavior, dog psychology, merck veterinary, canine body language

---

## 8. Destek ve İletişim

| Alan | Değer |
|---|---|
| **Canlı Demo** | https://mserman90.github.io/kuchu/ |
| **Kaynak Kodu** | https://github.com/mserman90/kuchu |
| **Hata Bildirimi** | https://github.com/mserman90/kuchu/issues |
| **Lisans** | MIT |

---

## 9. Geliştirme Yol Haritası (Chrome Uzantısı için)

- [ ] `manifest.json` (V3) hazırla — popup, background service worker, content script
- [ ] PWA → Uzantı paket dönüşümü (`web_accessible_resources` tanımla)
- [ ] Chrome Web Store geliştirici hesabı kaydı (\$5 tek seferlik ücret)
- [ ] Mağaza görselleri üret (128px ikon, 1280×800 ekran görüntüleri)
- [ ] `pnpm run build` çıktısını uzantı olarak test et
- [ ] Chrome Web Store'a gönder ve inceleme bekle (1-7 iş günü)
