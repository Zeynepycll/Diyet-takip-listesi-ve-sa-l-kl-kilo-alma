# CaloFit — Sistem Mimarisi Dokümantasyonu (ARCHITECTURE.md)

## 1. Genel Bakış

**CaloFit**, istemci tarafında (Client-Side) çalışan, sunucu bağımsız bir Tek Sayfa Uygulamasıdır (Single Page Application - SPA). Uygulama, modern JavaScript (ES6+ OOP), HTML5 semantik bileşenleri ve responsive CSS3 mimarisi kullanılarak inşa edilmiştir.

---

## 2. Mimari Katmanlar

```text
+-------------------------------------------------------------------+
|                        Kullanıcı Arayüzü (UI)                     |
|          HTML5 Layout & Component Tabs & Modal Manager            |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                      Core Application Logic                       |
|               NutriGainApp Class (app.js) & Controllers           |
+-------------------------------------------------------------------+
         |                        |                        |
         v                        v                        v
+------------------+    +-------------------+    +------------------+
| Hesaplama Motoru |    | Menü & Veri Seti  |    |  Olay Yöneticisi |
| (BMR, TDEE, Macro|    |  (mealOptions)    |    |  (Event Binding) |
+------------------+    +-------------------+    +------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                      Kalıcılık Katmanı (Storage)                  |
|                   Browser LocalStorage (JSON Data)                |
+-------------------------------------------------------------------+
```

### A. Sunum Katmanı (Presentation Layer)
- `index.html`: Sayfa yapısı ve görünüm bölümlerini (`#sec-dashboard`, `#sec-calculator`, `#sec-meal-options`, `#sec-daily-exercise`, `#sec-progress`, `#sec-guide`) barındırır. Tab tabanlı yönlendirme mantığı ile çalışır.
- `style.css`: Tüm tema renk değişkenlerini (`:root`), kart tasarımlarını, flex/grid düzenlerini, dark/light tema geçişlerini ve animasyonları içerir.

### B. İş Mantığı Katmanı (Business Logic Layer - `app.js`)
- **`NutriGainApp` Sınıfı:** Tüm uygulamanın yaşam döngüsünü yönetir.
  - `init()`: Sayfa yüklendiğinde verileri getirir, UI dinleyicilerini bağlar, menü ve grafikleri çizer.
  - `bindEvents()`: Sekme geçişleri, form gönderimleri, su ekleme, egzersiz ekleme ve tema değiştirme olaylarını dinler.
  - `calculateMacros()`: Kullanıcının boy, kilo, yaş ve aktivite seviyesine göre BMR (Mifflin-St Jeor formülü) ve TDEE hesaplar.
  - `renderDashboard()`, `renderProgressChart()`: Verilerin UI tarafına dinamik olarak basılmasını sağlar.

### C. Veri Kalıcılığı Katmanı (Persistence Layer)
- **LocalStorage Key:** `calofit_app_data_v1`
- **Veri Yapısı (JSON Schema):**
  ```json
  {
    "user": {
      "gender": "male",
      "age": 25,
      "height": 178,
      "weight": 64,
      "targetWeight": 72,
      "activity": 1.375,
      "goalRate": 0.5
    },
    "waterIntake": 0.75,
    "consumedCalories": 0,
    "theme": "dark",
    "exerciseLog": [],
    "weightHistory": []
  }
  ```

---

## 3. Gelecek Modüler Genişletme Planı (`src/` Yapısı)

Proje büyüdükçe `app.js` içerisindeki modüller `src/js/` altına ayrıştırılacaktır:
- `src/js/services/storageService.js`: LocalStorage okuma/yazma yönetimi.
- `src/js/services/nutritionCalculator.js`: BMR/TDEE ve makro matematik motoru.
- `src/js/components/dashboardComponent.js`: Kontrol paneli UI çizicisi.
- `src/js/data/mealsData.js`: Menü ve tarif veri setleri.
