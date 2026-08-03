# CaloFit — Proje Geliştirme & Mimari Kuralları (PROJE_KURALLARI.md)

Bu doküman, **CaloFit** projesinde kod geliştirirken uyulması gereken mimari standartları, dosya adlandırma kurallarını, güvenlik prensiplerini ve kodlama disiplinlerini belirler.

---

## 1. Mimari Prensipler & Genel İlkeler

1. **Modülerlik ve Sorumlulukların Ayrılması (SoC):**
   - HTML strictly yapıyı (structure), CSS sunumu (presentation), JavaScript ise uygulama mantığı ve etkileşimi (behavior) temsil eder.
   - HTML içerisinde inline style (`style="..."`) kullanımından kaçınılmalıdır.
   - JS fonksiyonları ve metotları tek bir sorumluluğa (Single Responsibility Principle) sahip olmalıdır.

2. **Mevcut Çalışan Koda Saygı:**
   - Kök dizindeki `index.html`, `style.css` ve `app.js` dosyaları uygulamanın mevcut çalışan çekirdeğidir. Bu dosyalarda yapılan değişiklikler geriye dönük uyumluluğu bozmamalıdır.
   - Yeni özellikler eklenirken modüler klasör mimarisine (`src/js/`, `src/css/`) uygun şekilde genişletme yapılmalıdır.

3. **Veri Kalıcılığı (LocalStorage):**
   - Kullanıcı verileri `calofit_app_data_v1` anahtarı altında LocalStorage'da tutulur.
   - Veri şeması güncellendiğinde (schema migration), eski verilerin bozulmaması için varsayılan fallback değerler tanımlanmalıdır.

---

## 2. Dosya ve Klasör Adlandırma Standartları

- **Klasör İsimleri:** Küçük harfle ve `kebab-case` formatında olmalıdır (örneğin: `meal-options`, `components`, `water-tracker`).
- **JavaScript Dosyaları:**
  - Sınıf/Class dosyaları: `PascalCase.js` (örneğin: `NutriGainApp.js`, `MealManager.js`).
  - Yardımcı/Utility/Modül dosyaları: `camelCase.js` veya `kebab-case.js` (örneğin: `calculatorUtils.js`, `storage.js`).
- **CSS Dosyaları:** Küçük harf ve `kebab-case.css` (örneğin: `dashboard.css`, `modal.css`, `theme-dark.css`).
- **Görsel & Medya Dosyaları:** Küçük harf, boşluksuz, `kebab-case` (örneğin: `hero-banner.jpg`, `smoothie-bowl.jpg`).

---

## 3. Kodlama Standartları

### A. JavaScript (ES6+)
- **Değişken Tanımlama:** `var` kullanımı **kesinlikle yasaktır**. Sabitler için `const`, değiştirilebilir değişkenler için `let` kullanılmalıdır.
- **Fonksiyonlar:** Mümkün olduğunca ok fonksiyonları (arrow functions) ve es6 method kısa yazımları tercih edilmelidir.
- **DOM İle Etkileşim:**
  - Olay dinleyicileri (event listeners) kurulurken delegasyon (event delegation) veya açıklayıcı metotlar tercih edilmelidir.
  - DOM eleman seçimlerinde benzersiz ID'ler (`document.getElementById`) veya açıklayıcı sınıf seçiciler kullanılmalıdır.
- **Hata Yönetimi (Error Handling):**
  - JSON parse/stringify işlemleri, LocalStorage okuma/yazma ve hesaplama blokları `try...catch` blokları ile korunmalıdır.

### B. CSS3 & Tasarım Sistemi
- **CSS Değişkenleri (Custom Properties):** Tüm renkler, fontlar, border-radius ve gölge değerleri `:root` üzerinde tanımlanan CSS değişkenlerinden (`var(--color-primary)`, `var(--radius-lg)` vb.) çekilmelidir.
- **Renk Paleti:** Adaçayı yeşili (`#2D5A4C`, `#4E7D6F`), Sıcak Krem (`#FDFBF7`, `#F7F4EC`), Amber (`#D97706`) ve Zümrüt Yeşili accent tonları korunmalıdır.
- **Responsive Tasarım:** Mobil öncelikli (Mobile-First) veya esnek responsive grid/flexbox yapıları kullanılmalı; `@media` sorguları standart break-point değerlerine (`768px`, `1024px`, `1280px`) sadık kalmalıdır.

### C. HTML5 & Erişilebilirlik (a11y)
- Semantik HTML5 etiketleri (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) kullanılmalıdır.
- Tüm butonlar ve etkileşimli elemanlarda `aria-label`, `title` ve erişilebilirlik nitelikleri eksiksiz bulunmalıdır.
- Görsellere (`<img>`) anlamlı `alt` metinleri verilmelidir.

---

## 4. Güvenlik & Performans Prensipleri

1. **XSS (Cross-Site Scripting) Koruması:**
   - Kullanıcı girdileri (isim, hedef kilo, günlük notlar) DOM'a yazdırılırken `textContent` veya sanitize edilmiş metotlar kullanılmalıdır (`innerHTML` direkt kullanıcı verisiyle beslenmemelidir).
2. **Girdi Doğrulama (Input Validation):**
   - Kalori, boy, kilo ve yaş girdilerinde negatif sayı veya mantıksız değerlerin (örn. kilo: 0 veya 500+) girilmesi engellenmelidir.
3. **Performans:**
   - Sayfa yüklenme hızını artırmak için harici CSS/JS (Google Fonts, FontAwesome) CDN bağlantıları `preconnect` ile optimize edilmiş şekilde tutulmalıdır.

---

## 5. Git & Versiyon Kontrol Kuralları

- **Commit Mesajı Standartları (Conventional Commits):**
  - `feat:` Yeni bir özellik eklendiğinde (ör. `feat: su takibi grafik modülü eklendi`)
  - `fix:` Bir hata düzeltildiğinde (ör. `fix: makro hesaplayıcı yuvarlama hatası giderildi`)
  - `docs:` Dokümantasyon güncellemelerinde (ör. `docs: README ve mimari kural dosyası güncellendi`)
  - `style:` Kod stilinde veya CSS tasarımlarında yapılan güncellemelerde
  - `refactor:` İşlevselliği değiştirmeden kod yapısı iyileştirildiğinde
- **Ana Dal:** `main` veya `master` dalına doğrudan kırıcı değişiklik commit'lenmemelidir.
