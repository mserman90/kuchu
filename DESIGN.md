# Kuchu Tasarım Sistemi (DESIGN.md)
## Swiss Modernism & Neo-Brutalist Ethology System

Kuchu platformunun görsel dili, İsviçre Tipografisi (Swiss Modernism / International Typographic Style) ve Neo-Brutalist prensiplere dayanır. Bu estetik, sevimli ama amatör duran basmakalıp evcil hayvan sitelerinden ayrışarak bilimsellik, ciddiyet, kararlılık ve yüksek kontrastlı okunabilirlik sunar.

### 1. Temel Kurallar
1. **Sıfır Köşe Yarıçapı (Zero Radius):**
   - Tüm butonlar, kartlar, pencereler, girdi alanları ve etiketler kesinlikle `rounded-none` (0px) köşelidir. Yuvarlak köşe kullanılmaz.
2. **2px Siyah Çerçeveler (Hard Black Borders):**
   - Her modül, kart, buton ve ayırıcı `border-2 border-black` (koyu modda `border-2 border-white` veya `border-zinc-300`) ile çevrelenir.
3. **Sert Offset Gölgeler (Hard Box Shadows):**
   - Yumuşak bulanık gölgeler yerine sert açılı offset gölgeler kullanılır:
     - Standart: `shadow-[4px_4px_0px_0px_#000000]`
     - Küçük öğeler: `shadow-[2px_2px_0px_0px_#000000]`
     - Büyük ve öne çıkan paneller: `shadow-[6px_6px_0px_0px_#000000]`
     - Hover durumlarında: `translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_0px_#000000]` veya sıfırlanarak basılma hissi verilir.
4. **Kırmızı Birincil Vurgu (Primary Red Accent):**
   - İsviçre grafik tasarımının imzası olan saf kırmızı (`#dc2626` / `rgb(220, 38, 38)`) birincil eylemlerde, rozetlerde ve kritik uyarılarda kullanılır.
   - İkincil renkler: Saf Siyah (`#000000`), Kirli Beyaz / Kemik (`#fafaf9`), Nötr Gri (`#71717a`), Sarı Uyarı (`#f59e0b`), Güvenli Yeşil (`#16a34a`).
5. **Ağırlıklı Tipografi (900 Weight Typography):**
   - Başlıklar ve buton metinleri `font-black` (900 ağırlık) ve genellikle büyük harf (`uppercase`, `tracking-tight` veya `tracking-wider`) kullanılır.
   - Sayısal göstergeler ve indeksler üst-simge veya belirgin monospaced tarzda sunulur.

### 2. Bileşen Şablonları
- **Buton (Primary):** `bg-red-600 text-white font-black uppercase border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all`
- **Kart (Card):** `bg-white dark:bg-zinc-900 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#ffffff] p-6`
- **Etiket / Badge:** `border-2 border-black text-xs font-black uppercase px-2.5 py-0.5 shadow-[2px_2px_0px_0px_#000000]`
