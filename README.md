# 🥗 CaloFit — Sağlıklı Kilo Alma & Kişisel Beslenme Portalı

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](#)
[![Architecture](https://img.shields.io/badge/Architecture-SPA-8B5CF6)](#)

**CaloFit**, sağlıklı kilo almak, günlük kalori ve makro besin dengesini (protein, karbonhidrat, yağ) takip etmek, kişiselleştirilmiş egzersiz, sıvı beslenme (shake) ve beslenme programları oluşturmak isteyen kullanıcılar için tasarlanmış modern, dinamik ve estetik bir dijital sağlık portalıdır.

---

## 🌟 Öne Çıkan Özellikler

- 📊 **Dinamik Kontrol Paneli (Dashboard):** Günlük alınan/hedeflenen kalori, makro besin dağılımı (protein, karbonhidrat, yağ), su tüketimi, kilo hedefi ve günün öğün özeti.
- 🧮 **Gelişmiş Kalori & Makro Hesaplayıcı:** BMR (Bazal Metabolizma Hızı - Mifflin-St Jeor) ve TDEE (Toplam Günlük Enerji Harcaması) hesaplamaları ile kişiye özel kilo alma kalori fazlası (*surplus*) ve makro dağılımı.
- 🍲 **Zengin Öğün & Menü Kütüphanesi:** Kahvaltı, öğle, akşam ve ara öğünler için kalori ve makro değerleri hesaplanmış menü alternatifleri, arama ve filtreleme seçenekleri.
- 🥤 **Smoothie & Shake Lab (Sıvı Beslenme Stüdyosu):** Yüksek kalorili shake tarifleri, malzeme bazlı özel shake oluşturucu ve eksik malzemeleri panoya kopyalama (WhatsApp/Notlar uyumlu).
- 📦 **Tedarik & Firma Sipariş Yönetimi:** Shake ve öğünler için eksik malzemeleri doğrudan tedarikçi firmalara (Firma A, Firma B, Firma C) sipariş verme, sipariş durumu takibi (Sipariş Alındı / Teslim Edildi).
- 🏋️ **Egzersiz & Aktivite Takibi:** MET değerlerine göre günlük yapılan egzersizlerin harcadığı kaloriyi hesaplama ve günlük kalori dengesine otomatik yansıtma.
- 🎯 **Hedef Kilo & Zaman Çizelgesi Tahmincisi (Goal Weight & Timeline Forecaster):** Haftalık kilo alma hızına (kg/hafta) göre hedefe ulaşılacak tahmini tarih, kalan hafta/gün hesabı ve ideal kilo alma durum analizleri.
- 📈 **Kilo & Beden Ölçüsü Takip Grafikleri:** Tarih bazlı kilo kaydı, kol, göğüs, bel beden ölçüleri değişim geçmişi ve grafiksel takibi.
- 💧 **Akıllı Su Hatırlatıcı:** Günlük su ihtiyacı hesaplama, geri sayımlı hatırlatıcı zamanlayıcı ve anlık su içme takibi.
- 🌓 **Açık / Koyu Tema Desteği (Dark / Light Mode):** Adaçayı yeşili & krem tonlarında göz yormayan modern responsive tasarım.
- 💾 **Yerel Veri Kalıcılığı (LocalStorage):** Tüm profil, öğün, egzersiz, sipariş ve kilo geçmişi verilerinin sunucusuz, tarayıcıda güvenle saklanması (`calofit_app_data_v1`).

---

## 🏗️ Proje Mimarisi ve Klasör Yapısı

CaloFit, modüler ve sürdürülebilir sektör standartlarına uygun bir klasör mimarisine sahiptir:

```text
diyet/
├── .github/                  # GitHub workflow ve CI/CD yapılandırmaları
│   └── workflows/
│       └── deploy.yml        # Otomatik dağıtım şablonu
├── assets/                   # Medya ve görsel bileşenler
│   ├── icons/                # İkon varlıkları
│   ├── images/               # İllüstrasyonlar ve arka planlar
│   ├── hero.jpg              # Hero bölümü ana görseli
│   ├── smoothie.jpg          # Beslenme & smoothie örneği
│   └── workout.jpg           # Egzersiz rehberi görseli
├── config/                   # Proje ve ortam konfigürasyonları
├── docs/                     # Detaylı mimari ve teknik dokümantasyon
│   └── ARCHITECTURE.md       # Sistem mimarisi ve veri akış dokümanı
├── src/                      # Kaynak kodlar (Modüler genişletme alanı)
│   ├── css/                  # Modüler stil dosyaları
│   │   ├── base/             # Temel stiller ve resetler
│   │   ├── components/       # Bileşen bazlı CSS parçaları
│   │   └── themes/           # Tema değişkenleri ve renk paletleri
│   └── js/                   # Modüler JavaScript mantığı
│       ├── components/       # UI Bileşen yöneticileri
│       ├── data/             # Veri setleri ve menü kütüphaneleri
│       ├── services/         # Storage ve hesaplama servisleri
│       └── utils/            # Yardımcı matematiksel fonksiyonlar
├── tests/                    # Test senaryoları ve doğrulama kodları
│   ├── unit/                 # Birim testleri
│   └── e2e/                  # Uçtan uca testler
├── .antigravityrules         # AI Asistanı çalıştırma prensipleri
├── .env.example              # Örnek ortam değişkenleri yapılandırması
├── .gitignore                # Git tarafında izlenmeyecek dosyalar
├── app.js                    # Ana uygulama sınıfı (NutriGainApp Core JS)
├── index.html                # Ana HTML yapısı (Semantic SPA)
├── PROJE_KURALLARI.md        # Mimari standartlar ve kodlama kuralları
├── README.md                 # Proje tanıtım kılavuzu
└── style.css                 # Ana tasarım sistemi ve CSS stilleri
```

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5:** Semantik etiket yapısı, ARIA erişilebilirlik standartları, Single Page Application (SPA) sekmeli görünüm yapısı.
- **CSS3:** Custom Properties (CSS Değişkenleri), CSS Grid, Flexbox, Glassmorphism efektleri, animasyonlar ve responsive tasarım.
- **JavaScript (ES6+):** Nesne Yönelimli Mimari (`NutriGainApp`), Event Delegation, LocalStorage API, Clipboard API.
- **Font & İkonlar:** Google Fonts (Outfit & Plus Jakarta Sans), FontAwesome 6 Pro/Free simgeleri.

---

## 🚀 Kurulum ve Çalıştırma

Proje tamamen bağımsız bir istemci tarafı (*client-side*) web uygulamasıdır. Çalıştırmak için ekstra bir derleme (*build*) veya bağımlılık kurulumuna gerek yoktur.

### 1. Yöntem: Doğrudan Çalıştırma
`index.html` dosyasına çift tıklayarak varsayılan web tarayıcınızda açabilirsiniz.

### 2. Yöntem: Yerel Sunucu (Tavsiye Edilen)
Geliştirme yaparken veya tarayıcı önbellek sorunlarını önlemek için yerel bir sunucu kullanabilirsiniz:

#### VS Code Live Server ile:
1. VS Code içerisinde `index.html` dosyasına sağ tıklayın.
2. **"Open with Live Server"** seçeneğini tıklayın.

#### Python ile:
```bash
# Proje kök dizininde çalıştırın:
python -m http.server 8000
```
Ardından tarayıcınızda `http://localhost:8000` adresine gidin.

#### Node.js `npx http-server` ile:
```bash
npx http-server -p 3000
```
Ardından tarayıcınızda `http://localhost:3000` adresine gidin.

---

## 📋 Geliştirme ve Kodlama Standartları

Projede katkıda bulunurken ve kod yazarken lütfen aşağıdaki dokümanlara dikkat ediniz:
- [PROJE_KURALLARI.md](PROJE_KURALLARI.md) — Mimari ilkeler ve kodlama kuralları.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — Sistem mimarisi ve veri akış detayları.

---

## 📄 Lisans

Bu proje MIT Lisansı altında sunulmaktadır.
