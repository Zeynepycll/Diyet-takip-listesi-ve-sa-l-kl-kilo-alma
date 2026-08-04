/**
 * CaloFit — Core Application Logic
 */

class NutriGainApp {
  constructor() {
    this.storageKey = 'calofit_app_data_v1';
    
    // Comprehensive Meal Options Dataset (Öğün Seçenekleri)
    // Clean & Curated Essential Meal Options Dataset (4 Temel Dengeli Öğün)
    this.mealOptions = [
      // 1. Kahvaltı (Breakfast)
      {
        id: 'opt_b1',
        category: 'breakfast',
        categoryName: 'Kahvaltı',
        title: 'Klasik Zengin Kilo Alma Kahvaltısı',
        tag: 'En Popüler',
        calories: 750,
        protein: 42,
        carbs: 70,
        fat: 30,
        prepTime: '15 dk',
        icon: 'fa-egg',
        ingredients: [
          '3 adet sahanda yumurta (tereyağlı & baharatlı)',
          '70g ince yulaf ezmesi + 250ml tam yağlı süt',
          '2 yemek kaşığı doğal fıstık ezmesi (32g)',
          '1 adet olgun muz + 1 dilim tam yağlı peynir'
        ],
        description: 'Güne yüksek kalori ve dengeli makro ile başlamak isteyenler için mükemmel tam kahvaltı menüsü.'
      },

      // 2. Öğle Yemeği (Lunch)
      {
        id: 'opt_l1',
        category: 'lunch',
        categoryName: 'Öğle Yemeği',
        title: 'Tavuk Göğsü, Basmati Pirinç Pilavı & Brokoli',
        tag: 'En Popüler',
        calories: 780,
        protein: 52,
        carbs: 90,
        fat: 20,
        prepTime: '25 dk',
        icon: 'fa-drumstick-bite',
        ingredients: [
          '200g ızgara veya tavada pişmiş tavuk göğsü',
          '250g pişmiş zeytinyağlı basmati pirinç pilavı',
          '100g buharda brokoli + 1 YK sızma zeytinyağı'
        ],
        description: 'Sporcuların 1 numaralı kilo alma ve kas inşa etme menüsü. Temiz kalori ve yüksek protein deposu.'
      },

      // 3. Akşam Yemeği (Dinner)
      {
        id: 'opt_d1',
        category: 'dinner',
        categoryName: 'Akşam Yemeği',
        title: 'Ev Yapımı Izgara Köfte & Pirinç Pilavı',
        tag: 'En Popüler',
        calories: 820,
        protein: 50,
        carbs: 80,
        fat: 34,
        prepTime: '20 dk',
        icon: 'fa-burger',
        ingredients: [
          '180g dana cızbız köfte (6 adet)',
          '200g şehriyeli pirinç pilavı',
          '3 yemek kaşığı zeytinyağlı humus + 1 bardak ayran'
        ],
        description: 'Sindiriminin kolay olması ve yüksek kalori barındırması sayesinde ideal akşam yemeği.'
      },

      // 4. Ara Öğün / Shake (Snack)
      {
        id: 'opt_s1',
        category: 'snack',
        categoryName: 'Ara Öğün / Shake',
        title: 'Mega Kalori Yulaf Shake & Çiğ Çerez Tabak',
        tag: 'Sıvı Kalori',
        calories: 650,
        protein: 30,
        carbs: 75,
        fat: 26,
        prepTime: '3 dk',
        icon: 'fa-blender',
        ingredients: [
          '250ml tam yağlı süt + 40g yulaf ezmesi',
          '1 YK fıstık ezmesi + 1 muz + 1 YK bal',
          '30g karışık çiğ badem ve ceviz'
        ],
        description: 'Öğün aralarında mideyi şişirmeden tam 650 kalori kazandıran 1 numaralı ara öğün seçeneği.'
      }
    ];

    // Smart Grocery Base Dataset (Akıllı Market Alışveriş Veri Seti)
    this.groceryBaseDataset = [
      { id: 'g_milk', category: '🥛 Süt & Şarküteri', name: 'Tam Yağlı Süt', baseQty: 0.5, unit: 'Litre', estUnitPriceTL: 38 },
      { id: 'g_yogurt', category: '🥛 Süt & Şarküteri', name: 'Tam Yağlı Süzme Yoğurt', baseQty: 0.2, unit: 'kg', estUnitPriceTL: 85 },
      { id: 'g_cheese', category: '🥛 Süt & Şarküteri', name: 'Tam Yağlı Beyaz Peynir', baseQty: 0.08, unit: 'kg', estUnitPriceTL: 180 },
      
      { id: 'g_oats', category: '🌾 Tahıl & Kuru Gıda', name: 'İnce Öğütülmüş Yulaf Ezmesi', baseQty: 0.1, unit: 'kg', estUnitPriceTL: 60 },
      { id: 'g_rice', category: '🌾 Tahıl & Kuru Gıda', name: 'Basmati Pirinç / Şehriye', baseQty: 0.15, unit: 'kg', estUnitPriceTL: 95 },
      { id: 'g_pasta', category: '🌾 Tahıl & Kuru Gıda', name: 'Tam Buğday Makarna', baseQty: 0.12, unit: 'kg', estUnitPriceTL: 35 },
      { id: 'g_bread', category: '🌾 Tahıl & Kuru Gıda', name: 'Tam Buğday Ekmeği', baseQty: 0.2, unit: 'Paket', estUnitPriceTL: 30 },

      { id: 'g_peanut_butter', category: '🥜 Kuruyemiş & Ezmeler', name: 'Doğal Fıstık Ezmesi (%100)', baseQty: 0.05, unit: 'kg', estUnitPriceTL: 280 },
      { id: 'g_nuts', category: '🥜 Kuruyemiş & Ezmeler', name: 'Çiğ Badem & Ceviz İçi', baseQty: 0.04, unit: 'kg', estUnitPriceTL: 420 },
      { id: 'g_honey', category: '🥜 Kuruyemiş & Ezmeler', name: 'Süzme Çam/Çiçek Balı', baseQty: 0.03, unit: 'kg', estUnitPriceTL: 220 },

      { id: 'g_eggs', category: '🍗 Et & Yumurta', name: 'Organik / Gezen Tavuk Yumurtası', baseQty: 3, unit: 'Adet', estUnitPriceTL: 4.5 },
      { id: 'g_chicken', category: '🍗 Et & Yumurta', name: 'Taze Tavuk Göğsü (Fileto)', baseQty: 0.2, unit: 'kg', estUnitPriceTL: 195 },
      { id: 'g_meat', category: '🍗 Et & Yumurta', name: 'Dana Kıyma / Cızbız Köfte', baseQty: 0.15, unit: 'kg', estUnitPriceTL: 440 },

      { id: 'g_bananas', category: '🍌 Meyve & Sebze', name: 'Olgun İthal/Yerli Muz', baseQty: 2, unit: 'Adet', estUnitPriceTL: 8 },
      { id: 'g_broccoli', category: '🍌 Meyve & Sebze', name: 'Taze Brokoli / Yeşillik', baseQty: 0.1, unit: 'kg', estUnitPriceTL: 50 },
      { id: 'g_avocado', category: '🍌 Meyve & Sebze', name: 'Yumuşak Avokado', baseQty: 0.5, unit: 'Adet', estUnitPriceTL: 25 }
    ];

    this.currentCategoryFilter = 'all';
    this.currentTagFilter = 'all';
    this.currentSearchTerm = '';

    // Water Reminder Countdown Timer Properties
    this.waterReminderTimer = null;
    this.waterSecondsLeft = 45 * 60; // default 45 mins

    // Default Initial State
    this.state = {
      profile: {
        gender: 'male',
        age: 24,
        height: 178,
        weight: 64.0,
        targetWeight: 72.0,
        activity: 1.55,
        surplus: 500,
        bmr: 1635,
        tdee: 2534,
        targetCalories: 3034,
        proteinTarget: 128,
        carbTarget: 379,
        fatTarget: 101,
        waterTargetLiters: 3.5
      },
      waterReminder: {
        enabled: true,
        intervalMinutes: 45
      },
      todayLogs: {
        waterLiters: 0.75,
        meals: [
          {
            id: 'm1',
            name: 'Kahvaltı: 3 Yumurta + Yulaf + Tam Yağlı Süt + Fıstık Ezmesi',
            meal: 'Kahvaltı',
            calories: 720,
            protein: 38,
            carbs: 65,
            fat: 32
          },
          {
            id: 'm2',
            name: 'Ara Öğün: Karışık Çiğ Çerez & Kuru Kayısı',
            meal: 'Ara Öğün / Shake',
            calories: 340,
            protein: 10,
            carbs: 25,
            fat: 22
          }
        ],
        exercises: [
          {
            id: 'ex1',
            name: 'Tempolu Yürüyüş',
            duration: 30,
            calories: 125,
            met: 3.8
          }
        ]
      },
      weightHistory: [
        { date: '2026-07-01', weight: 62.5, arm: 32.0, chest: 93.0, waist: 75.0 },
        { date: '2026-07-08', weight: 62.9, arm: 32.2, chest: 93.5, waist: 75.2 },
        { date: '2026-07-15', weight: 63.3, arm: 32.5, chest: 94.0, waist: 75.5 },
        { date: '2026-07-22', weight: 63.7, arm: 32.8, chest: 94.5, waist: 75.8 },
        { date: '2026-07-29', weight: 64.0, arm: 33.0, chest: 95.0, waist: 76.0 }
      ]
    };

    this.currentTheme = 'dark';
    this.init();
  }

  init() {
    this.loadState();
    this.initTheme();
    this.bindNavigation();
    this.bindForms();
    this.initMealOptions();
    this.startWaterTimer();
    this.render();
  }

  // Theme Management (Açık / Koyu Tema)
  initTheme() {
    const savedTheme = localStorage.getItem('calofit_theme_pref');
    this.currentTheme = savedTheme || 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('calofit_theme_pref', this.currentTheme);
    this.applyTheme();
    this.showToast(this.currentTheme === 'light' ? '☀️ Açık tema aktif edildi.' : '🌙 Koyu tema aktif edildi.');
  }

  applyTheme() {
    const icon = document.getElementById('theme-toggle-icon');
    const label = document.getElementById('theme-toggle-label');

    if (this.currentTheme === 'light') {
      document.body.setAttribute('data-theme', 'light');
      if (icon) icon.className = 'fa-solid fa-sun';
      if (label) label.textContent = 'Açık';
    } else {
      document.body.removeAttribute('data-theme');
      if (icon) icon.className = 'fa-solid fa-moon';
      if (label) label.textContent = 'Koyu';
    }
  }

  // LocalStorage handling
  loadState() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.state = { ...this.state, ...parsed };
      } catch (e) {
        console.error('Error loading saved state', e);
      }
    }
  }

  saveState() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    this.render();
  }

  // Navigation Logic
  bindNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetId = tab.dataset.target;
        this.switchTab(targetId);
      });
    });
  }

  switchTab(targetId) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));

    const activeTab = document.querySelector(`.nav-tab[data-target="${targetId}"]`);
    const activeSec = document.getElementById(targetId);

    if (activeTab) activeTab.classList.add('active');
    if (activeSec) activeSec.classList.add('active');

    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh tab specific components
    if (targetId === 'sec-progress') {
      this.renderWeightChart();
    } else if (targetId === 'sec-meal-options') {
      this.renderMealOptions();
      this.updatePackageSummary();
      this.renderGroceryList();
    } else if (targetId === 'sec-shake-lab') {
      this.renderMissingList();
      this.renderCompanyOrders();
    } else if (targetId === 'sec-daily-exercise') {
      this.updateExerciseCalorieEstimate();
      this.renderExerciseLogs();
    }
  }

  // MEAL OPTIONS & PACKAGE BUILDER METHODS
  initMealOptions() {
    const populateSelect = (elementId, category) => {
      const el = document.getElementById(elementId);
      if (!el) return;
      const opts = this.mealOptions.filter(m => m.category === category);
      el.innerHTML = opts.map(o => `
        <option value="${o.id}">${o.title} — ${o.calories} kcal (${o.protein}g Protein)</option>
      `).join('');
    };

    populateSelect('select-pkg-breakfast', 'breakfast');
    populateSelect('select-pkg-lunch', 'lunch');
    populateSelect('select-pkg-dinner', 'dinner');
    populateSelect('select-pkg-snack', 'snack');

    this.renderMealOptions();
    this.updatePackageSummary();
  }

  setMealCategoryFilter(category, btnEl) {
    this.currentCategoryFilter = category;
    if (btnEl) {
      document.querySelectorAll('#meal-category-tabs .cat-tab').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
    }
    this.renderMealOptions();
  }

  filterMealOptions() {
    const searchInput = document.getElementById('meal-search-input');
    const tagSelect = document.getElementById('meal-tag-filter');

    if (searchInput) this.currentSearchTerm = searchInput.value.toLowerCase().trim();
    if (tagSelect) this.currentTagFilter = tagSelect.value;

    this.renderMealOptions();
  }

  renderMealOptions() {
    const container = document.getElementById('meal-cards-container');
    if (!container) return;

    let filtered = this.mealOptions.filter(opt => {
      // Category filter
      if (this.currentCategoryFilter !== 'all' && opt.category !== this.currentCategoryFilter) {
        return false;
      }
      // Tag filter
      if (this.currentTagFilter !== 'all') {
        if (this.currentTagFilter === 'Sıvı Kalori' && !opt.tag.includes('Sıvı') && !opt.title.includes('Shake')) return false;
        else if (!opt.tag.includes(this.currentTagFilter) && this.currentTagFilter !== 'Sıvı Kalori') return false;
      }
      // Search term
      if (this.currentSearchTerm) {
        const text = (opt.title + ' ' + opt.description + ' ' + opt.ingredients.join(' ')).toLowerCase();
        if (!text.includes(this.currentSearchTerm)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card glass-card text-center" style="grid-column: 1 / -1; padding: 3rem;">
          <i class="fa-solid fa-utensils fa-3x text-muted mb-3 d-block"></i>
          <h4>Aradığınız kriterlere uygun öğün seçeneği bulunamadı.</h4>
          <p class="text-muted">Lütfen arama teriminizi değiştirin veya filtreleri sıfırlayın.</p>
          <button class="btn btn-outline-cyan mt-3" onclick="app.resetMealFilters()">Filtreleri Sıfırla</button>
        </div>
      `;
      return;
    }

    const badgeClassMap = {
      breakfast: 'badge-amber',
      lunch: 'badge-emerald',
      dinner: 'badge-cyan',
      snack: 'badge-purple'
    };

    container.innerHTML = filtered.map(opt => `
      <div class="glass-card meal-option-card">
        <div class="card-top-bar">
          <span class="meal-cat-badge ${badgeClassMap[opt.category]}">
            <i class="fa-solid ${opt.icon}"></i> ${opt.categoryName}
          </span>
          <span class="meal-tag-badge"><i class="fa-solid fa-tag"></i> ${opt.tag}</span>
        </div>

        <div class="meal-card-title-wrap mt-2">
          <h3>${opt.title}</h3>
          <span class="meal-prep-time"><i class="fa-regular fa-clock"></i> ${opt.prepTime}</span>
        </div>

        <p class="meal-desc mt-2">${opt.description}</p>

        <!-- Macro Pills -->
        <div class="meal-macros-pills">
          <div class="macro-pill pill-cal">
            <i class="fa-solid fa-fire text-amber"></i>
            <span><strong>${opt.calories}</strong> kcal</span>
          </div>
          <div class="macro-pill pill-prot">
            <i class="fa-solid fa-drumstick-bite text-amber"></i>
            <span><strong>${opt.protein}g</strong> Prot</span>
          </div>
          <div class="macro-pill pill-carb">
            <i class="fa-solid fa-bowl-rice text-emerald"></i>
            <span><strong>${opt.carbs}g</strong> Karb</span>
          </div>
          <div class="macro-pill pill-fat">
            <i class="fa-solid fa-avocado text-cyan"></i>
            <span><strong>${opt.fat}g</strong> Yağ</span>
          </div>
        </div>

        <!-- Ingredients Details -->
        <details class="ingredients-details">
          <summary><i class="fa-solid fa-list-check text-emerald"></i> Malzemeler & Porsiyon Detayı (${opt.ingredients.length} Kalem)</summary>
          <ul class="ingredients-list">
            ${opt.ingredients.map(ing => `<li><i class="fa-solid fa-check text-emerald"></i> ${ing}</li>`).join('')}
          </ul>
        </details>

        <button class="btn btn-emerald btn-block mt-3" onclick="app.logMealOption('${opt.id}')">
          <i class="fa-solid fa-plus-circle"></i> Bu Öğünü Günlüğe Ekle
        </button>
      </div>
    `).join('');
  }

  resetMealFilters() {
    this.currentCategoryFilter = 'all';
    this.currentTagFilter = 'all';
    this.currentSearchTerm = '';

    const searchInput = document.getElementById('meal-search-input');
    const tagSelect = document.getElementById('meal-tag-filter');
    if (searchInput) searchInput.value = '';
    if (tagSelect) tagSelect.value = 'all';

    document.querySelectorAll('#meal-category-tabs .cat-tab').forEach((b, idx) => {
      if (idx === 0) b.classList.add('active');
      else b.classList.remove('active');
    });

    this.renderMealOptions();
  }

  updatePackageSummary() {
    const getSelected = (id) => {
      const el = document.getElementById(id);
      if (!el || !el.value) return null;
      return this.mealOptions.find(o => o.id === el.value);
    };

    const b = getSelected('select-pkg-breakfast');
    const l = getSelected('select-pkg-lunch');
    const d = getSelected('select-pkg-dinner');
    const s = getSelected('select-pkg-snack');

    const updateSlot = (slotCalId, slotMacroId, item) => {
      const calEl = document.getElementById(slotCalId);
      const macEl = document.getElementById(slotMacroId);
      if (item) {
        if (calEl) calEl.innerText = item.calories + ' kcal';
        if (macEl) macEl.innerText = `${item.protein}g Protein | ${item.carbs}g Karb | ${item.fat}g Yağ`;
      }
    };

    updateSlot('slot-b-cal', 'slot-b-macros', b);
    updateSlot('slot-l-cal', 'slot-l-macros', l);
    updateSlot('slot-d-cal', 'slot-d-macros', d);
    updateSlot('slot-s-cal', 'slot-s-macros', s);

    const items = [b, l, d, s].filter(Boolean);
    const totalCal = items.reduce((acc, i) => acc + i.calories, 0);
    const totalProt = items.reduce((acc, i) => acc + i.protein, 0);
    const totalCarb = items.reduce((acc, i) => acc + i.carbs, 0);
    const totalFat = items.reduce((acc, i) => acc + i.fat, 0);

    const targetCal = this.state.profile.targetCalories || 3034;
    const diff = totalCal - targetCal;

    const targetDisplay = document.getElementById('pkg-target-cal-display');
    if (targetDisplay) targetDisplay.innerText = targetCal.toLocaleString('tr-TR') + ' kcal';

    const totCalEl = document.getElementById('pkg-total-cal');
    if (totCalEl) totCalEl.innerText = totalCal.toLocaleString('tr-TR') + ' kcal';

    const diffEl = document.getElementById('pkg-diff-status');
    if (diffEl) {
      if (Math.abs(diff) <= 100) {
        diffEl.innerHTML = `<span class="text-emerald">(Hedefe Tam Uyumlu! Fark: ${diff >= 0 ? '+' : ''}${diff} kcal)</span>`;
      } else if (diff > 100) {
        diffEl.innerHTML = `<span class="text-amber">(Hedefin +${diff} kcal Üzerinde)</span>`;
      } else {
        diffEl.innerHTML = `<span class="text-cyan">(Hedefin ${diff} kcal Altında)</span>`;
      }
    }

    const pEl = document.getElementById('pkg-total-prot');
    const cEl = document.getElementById('pkg-total-carb');
    const fEl = document.getElementById('pkg-total-fat');

    if (pEl) pEl.innerText = totalProt + 'g';
    if (cEl) cEl.innerText = totalCarb + 'g';
    if (fEl) fEl.innerText = totalFat + 'g';
  }

  randomizePackage() {
    const getRandomOpt = (cat) => {
      const opts = this.mealOptions.filter(m => m.category === cat);
      return opts[Math.floor(Math.random() * opts.length)];
    };

    const b = getRandomOpt('breakfast');
    const l = getRandomOpt('lunch');
    const d = getRandomOpt('dinner');
    const s = getRandomOpt('snack');

    if (b) document.getElementById('select-pkg-breakfast').value = b.id;
    if (l) document.getElementById('select-pkg-lunch').value = l.id;
    if (d) document.getElementById('select-pkg-dinner').value = d.id;
    if (s) document.getElementById('select-pkg-snack').value = s.id;

    this.updatePackageSummary();
    this.showToastNotification('Yeni rastgele menü kombinasyonu oluşturuldu!', 'fa-shuffle');
  }

  logMealOption(optionId) {
    const item = this.mealOptions.find(o => o.id === optionId);
    if (!item) return;

    this.addMeal(item.title, item.categoryName, item.calories, item.protein, item.carbs, item.fat);
    this.showToastNotification(`"${item.title}" (${item.calories} kcal) günlüğe eklendi!`, 'fa-circle-check');
  }

  logFullPackageToTracker() {
    const getSelected = (id) => {
      const el = document.getElementById(id);
      if (!el || !el.value) return null;
      return this.mealOptions.find(o => o.id === el.value);
    };

    const b = getSelected('select-pkg-breakfast');
    const l = getSelected('select-pkg-lunch');
    const d = getSelected('select-pkg-dinner');
    const s = getSelected('select-pkg-snack');

    const items = [b, l, d, s].filter(Boolean);
    if (items.length === 0) return;

    items.forEach(item => {
      const newMeal = {
        id: 'm_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        name: item.title,
        meal: item.categoryName,
        calories: item.calories,
        protein: item.protein,
        carbs: item.carbs,
        fat: item.fat
      };
      this.state.todayLogs.meals.push(newMeal);
    });

    this.saveState();
    this.showToastNotification('Tüm menü paketi (4 öğün) günlüğünüze aktarıldı!', 'fa-calendar-check');
    this.switchTab('sec-dashboard');
  }

  applyCalcAndShowOptions() {
    this.applyCalcToTracker();
    this.switchTab('sec-meal-options');
    this.showToastNotification('Hesaplanan kalorinize uygun öğün seçenekleri listelendi!', 'fa-utensils');
  }

  showToastNotification(message, icon = 'fa-circle-check') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Form Binding
  bindForms() {
    // 1. Food Log Form
    const foodForm = document.getElementById('food-log-form');
    if (foodForm) {
      foodForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('food-name').value;
        const meal = document.getElementById('food-meal').value;
        const calories = parseInt(document.getElementById('food-calories').value) || 0;
        const protein = parseInt(document.getElementById('food-protein').value) || 0;
        const carbs = parseInt(document.getElementById('food-carbs').value) || 0;
        const fat = parseInt(document.getElementById('food-fat').value) || 0;

        this.addMeal(name, meal, calories, protein, carbs, fat);
        foodForm.reset();
      });
    }

    // 2. BMR Calculator Form
    const bmrForm = document.getElementById('bmr-form');
    if (bmrForm) {
      bmrForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.calculateBMRFromInputs();
      });
    }

    // 3. Progress Weight Form
    const progForm = document.getElementById('progress-log-form');
    if (progForm) {
      // Set current date input default
      const dateInput = document.getElementById('prog-date');
      if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

      progForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = document.getElementById('prog-date').value;
        const weight = parseFloat(document.getElementById('prog-weight').value);
        const arm = parseFloat(document.getElementById('prog-arm').value) || null;
        const chest = parseFloat(document.getElementById('prog-chest').value) || null;
        const waist = parseFloat(document.getElementById('prog-waist').value) || null;

        if (weight) {
          this.addWeightLog(date, weight, arm, chest, waist);
          progForm.reset();
          if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
        }
      });
    }

    // 4. Exercise Log Form
    const exForm = document.getElementById('exercise-log-form');
    if (exForm) {
      exForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const typeSelect = document.getElementById('ex-type-select');
        const durationInput = document.getElementById('ex-duration');
        if (!typeSelect || !durationInput) return;

        const name = typeSelect.options[typeSelect.selectedIndex].text.split('(')[0].trim();
        const met = parseFloat(typeSelect.options[typeSelect.selectedIndex].dataset.met) || 4.0;
        const duration = parseInt(durationInput.value) || 30;
        const weight = this.state.profile.weight || 64.0;
        const calories = Math.round((met * 3.5 * weight / 200) * duration);

        this.addExercise(name, duration, calories, met);
      });
    }
  }

  // Meal Operations
  addMeal(name, meal, calories, protein, carbs, fat) {
    const newMeal = {
      id: 'm_' + Date.now(),
      name,
      meal,
      calories,
      protein,
      carbs,
      fat
    };
    this.state.todayLogs.meals.push(newMeal);
    this.saveState();
  }

  deleteMeal(id) {
    this.state.todayLogs.meals = this.state.todayLogs.meals.filter(m => m.id !== id);
    this.saveState();
  }

  clearTodayLogs() {
    if (confirm('Bugünkü yemek günlüğünü temizlemek istediğinizden emin misiniz?')) {
      this.state.todayLogs.meals = [];
      this.state.todayLogs.waterLiters = 0;
      this.saveState();
    }
  }

  addPresetFood(name, calories, protein, carbs, fat) {
    this.addMeal(name, 'Ara Öğün / Shake', calories, protein, carbs, fat);
  }

  // Water Hydration
  addWater(liters) {
    this.state.todayLogs.waterLiters = Math.min(6.0, (this.state.todayLogs.waterLiters || 0) + liters);
    this.saveState();
  }

  resetWater() {
    this.state.todayLogs.waterLiters = 0;
    this.saveState();
  }

  // BMR & TDEE Calculation (Mifflin-St Jeor Equation)
  calculateBMRFromInputs() {
    const gender = document.getElementById('calc-gender').value;
    const age = parseInt(document.getElementById('calc-age').value) || 24;
    const height = parseFloat(document.getElementById('calc-height').value) || 178;
    const weight = parseFloat(document.getElementById('calc-weight').value) || 64.0;
    const targetWeight = parseFloat(document.getElementById('calc-target-weight').value) || 72.0;
    const activity = parseFloat(document.getElementById('calc-activity').value) || 1.55;
    const surplus = parseInt(document.getElementById('calc-surplus-mode').value) || 500;

    // BMR Calculation: 10*weight + 6.25*height - 5*age + (+5 for male, -161 for female)
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr += (gender === 'male') ? 5 : -161;
    bmr = Math.round(bmr);

    const tdee = Math.round(bmr * activity);
    const targetCalories = tdee + surplus;

    // Macro split: Protein 2.0g/kg, Fat 25-30% of total calories, Carbs remainder
    const proteinGrams = Math.round(weight * 2.0);
    const proteinCal = proteinGrams * 4;

    const fatCal = targetCalories * 0.28;
    const fatGrams = Math.round(fatCal / 9);

    const carbCal = targetCalories - proteinCal - fatCal;
    const carbGrams = Math.round(carbCal / 4);

    this.calcResultTemp = {
      gender, age, height, weight, targetWeight, activity, surplus,
      bmr, tdee, targetCalories, proteinTarget: proteinGrams, carbTarget: carbGrams, fatTarget: fatGrams
    };

    // Update Result UI Card
    document.getElementById('res-bmr').innerText = bmr.toLocaleString('tr-TR') + ' kcal';
    document.getElementById('res-tdee').innerText = tdee.toLocaleString('tr-TR') + ' kcal';
    document.getElementById('res-target-cal').innerText = targetCalories.toLocaleString('tr-TR') + ' kcal';

    document.getElementById('res-prot').innerText = proteinGrams + ' g';
    document.getElementById('res-prot-cal').innerText = proteinCal + ' kcal';

    document.getElementById('res-carb').innerText = carbGrams + ' g';
    document.getElementById('res-carb-cal').innerText = Math.round(carbCal) + ' kcal';

    document.getElementById('res-fat').innerText = fatGrams + ' g';
    document.getElementById('res-fat-cal').innerText = Math.round(fatCal) + ' kcal';

    // Timeline estimation: 1kg = ~7700 kcal surplus
    const weightDiff = Math.max(0, targetWeight - weight);
    const dailySurplus = surplus;
    const totalDays = Math.round((weightDiff * 7700) / dailySurplus);
    const weeks = Math.ceil(totalDays / 7);
    const weeklyRate = ((dailySurplus * 7) / 7700).toFixed(2);

    document.getElementById('res-timeline-text').innerHTML = 
      `Haftada yaklaşık <strong>${weeklyRate} kg</strong> alarak ${weightDiff.toFixed(1)} kg hedefinize <strong>~${weeks} haftada</strong> ulaşmanız öngörülüyor.`;
  }

  applyCalcToTracker() {
    if (this.calcResultTemp) {
      this.state.profile = { ...this.state.profile, ...this.calcResultTemp };
      this.saveState();
      alert('Tebrikler! Yeni kalori ve makro hedefleriniz kontrol panelinize uygulandı.');
      this.switchTab('sec-dashboard');
    } else {
      this.calculateBMRFromInputs();
      if (this.calcResultTemp) this.applyCalcToTracker();
    }
  }

  // Water Reminder Timer & Sound Logic
  startWaterTimer() {
    if (this.waterReminderTimer) clearInterval(this.waterReminderTimer);

    const rem = this.state.waterReminder || { enabled: true, intervalMinutes: 45 };
    this.waterSecondsLeft = (rem.intervalMinutes || 45) * 60;

    this.waterReminderTimer = setInterval(() => {
      if (this.state.waterReminder && this.state.waterReminder.enabled) {
        this.waterSecondsLeft--;
        if (this.waterSecondsLeft <= 0) {
          this.triggerWaterAlert();
          this.waterSecondsLeft = (this.state.waterReminder.intervalMinutes || 45) * 60;
        }
      }
      this.updateWaterTimerDisplay();
    }, 1000);
  }

  updateWaterTimerDisplay() {
    const el = document.getElementById('water-countdown-str');
    const mins = Math.floor(Math.max(0, this.waterSecondsLeft) / 60);
    const secs = Math.max(0, this.waterSecondsLeft) % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (el) {
      if (!this.state.waterReminder || !this.state.waterReminder.enabled) {
        el.innerText = 'Hatırlatıcı Kapalı';
      } else {
        el.innerText = formatted;
      }
    }

    const hdrWater = document.getElementById('hdr-water-status');
    if (hdrWater) {
      const waterLiters = this.state.todayLogs.waterLiters || 0;
      const targetLiters = this.state.profile.waterTargetLiters || 3.5;
      const statusStr = (this.state.waterReminder && this.state.waterReminder.enabled) ? ` (${formatted})` : ' (🔕 Kapalı)';
      hdrWater.innerText = `${waterLiters.toFixed(2)} / ${targetLiters.toFixed(1)} L${statusStr}`;
    }
  }

  toggleWaterReminder() {
    if (!this.state.waterReminder) this.state.waterReminder = { enabled: true, intervalMinutes: 45 };
    this.state.waterReminder.enabled = !this.state.waterReminder.enabled;
    this.saveState();

    const btn = document.getElementById('water-reminder-toggle-btn');
    if (btn) {
      if (this.state.waterReminder.enabled) {
        btn.className = 'btn btn-sm btn-emerald';
        btn.innerHTML = '<i class="fa-solid fa-bell"></i> Hatırlatıcı: Açık (🔔)';
        this.showToastNotification('Su hatırlatıcı alarmı açıldı!', 'fa-bell');
      } else {
        btn.className = 'btn btn-sm btn-outline-danger';
        btn.innerHTML = '<i class="fa-solid fa-bell-slash"></i> Hatırlatıcı: Kapalı (🔕)';
        this.showToastNotification('Su hatırlatıcı alarmı kapatıldı.', 'fa-bell-slash');
      }
    }
    this.updateWaterTimerDisplay();
  }

  setWaterReminderInterval(minutes) {
    const mins = parseInt(minutes) || 45;
    if (!this.state.waterReminder) this.state.waterReminder = { enabled: true, intervalMinutes: mins };
    else this.state.waterReminder.intervalMinutes = mins;

    this.waterSecondsLeft = mins * 60;
    this.saveState();
    this.showToastNotification(`Hatırlatma sıklığı ${mins} dakikaya ayarlandı.`, 'fa-clock');
    this.updateWaterTimerDisplay();
  }

  testWaterReminderAlert() {
    this.playWaterAlertSound();
    this.showToastNotification('💧 SU İÇME VAKTİ! Test uyarısı başarıyla çalışıyor.', 'fa-droplet');
  }

  triggerWaterAlert() {
    this.playWaterAlertSound();
    this.showToastNotification('💧 SU İÇME VAKTİ! Sağlığınız ve kas gelişiminiz için 1 bardak su için.', 'fa-droplet');
  }

  playWaterAlertSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {
      console.log('Audio Context Error', e);
    }
  }

  // Daily Exercise Operations
  updateExerciseCalorieEstimate() {
    const typeSelect = document.getElementById('ex-type-select');
    const durationInput = document.getElementById('ex-duration');
    const estBox = document.getElementById('ex-est-cal-box');

    if (!typeSelect || !durationInput || !estBox) return;

    const met = parseFloat(typeSelect.options[typeSelect.selectedIndex].dataset.met) || 4.0;
    const duration = parseInt(durationInput.value) || 30;
    const weight = this.state.profile.weight || 64.0;

    const burned = Math.round((met * 3.5 * weight / 200) * duration);
    estBox.innerText = `~${burned} kcal`;
  }

  addExercise(name, duration, calories, met) {
    if (!this.state.todayLogs.exercises) {
      this.state.todayLogs.exercises = [];
    }

    const newEx = {
      id: 'ex_' + Date.now(),
      name,
      duration,
      calories,
      met
    };

    this.state.todayLogs.exercises.push(newEx);
    this.saveState();
    this.renderExerciseLogs();
    this.showToastNotification(`"${name}" (${duration} dk - ${calories} kcal) egzersizi kaydedildi!`, 'fa-person-running');
  }

  deleteExercise(id) {
    if (!this.state.todayLogs.exercises) return;
    this.state.todayLogs.exercises = this.state.todayLogs.exercises.filter(e => e.id !== id);
    this.saveState();
    this.renderExerciseLogs();
  }

  logQuickRoutine(name, duration, calories) {
    this.addExercise(name, duration, calories, 5.0);
  }

  renderExerciseLogs() {
    const container = document.getElementById('today-exercises-list');
    if (!container) return;

    const exercises = this.state.todayLogs.exercises || [];
    if (exercises.length === 0) {
      container.innerHTML = `
        <p class="text-sm text-muted">Henüz bugün için kaydedilmiş egzersiz bulunmuyor.</p>
      `;
      return;
    }

    const totalMin = exercises.reduce((acc, e) => acc + (e.duration || 0), 0);
    const totalCal = exercises.reduce((acc, e) => acc + (e.calories || 0), 0);

    container.innerHTML = `
      <div class="exercise-summary-badge mb-2">
        <span>Toplam: <strong>${exercises.length} Aktivite</strong></span> | 
        <span>Süre: <strong>${totalMin} Dk</strong></span> | 
        <span>Harcanan: <strong class="text-amber">${totalCal} kcal</strong></span>
      </div>
      <ul class="exercise-logged-items">
        ${exercises.map(e => `
          <li class="ex-log-item">
            <div>
              <strong>${e.name}</strong>
              <small class="d-block text-muted">${e.duration} Dakika | MET: ${e.met || '-'}</small>
            </div>
            <div class="ex-right">
              <span class="text-amber font-weight-bold">-${e.calories} kcal</span>
              <button class="btn btn-sm btn-outline-danger" onclick="app.deleteExercise('${e.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        `).join('')}
      </ul>
    `;
  }

  // Weight Log Operations
  addWeightLog(date, weight, arm, chest, waist) {
    this.state.weightHistory.push({ date, weight, arm, chest, waist });
    // Sort by date ascending
    this.state.weightHistory.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Update profile current weight if last entry
    const latest = this.state.weightHistory[this.state.weightHistory.length - 1];
    if (latest) {
      this.state.profile.weight = latest.weight;
    }
    
    this.saveState();
  }

  deleteWeightLog(index) {
    this.state.weightHistory.splice(index, 1);
    this.saveState();
  }

  resetSampleProgress() {
    this.state.weightHistory = [
      { date: '2026-07-01', weight: 62.5, arm: 32.0, chest: 93.0, waist: 75.0 },
      { date: '2026-07-08', weight: 62.9, arm: 32.2, chest: 93.5, waist: 75.2 },
      { date: '2026-07-15', weight: 63.3, arm: 32.5, chest: 94.0, waist: 75.5 },
      { date: '2026-07-22', weight: 63.7, arm: 32.8, chest: 94.5, waist: 75.8 },
      { date: '2026-07-29', weight: 64.0, arm: 33.0, chest: 95.0, waist: 76.0 }
    ];
    this.saveState();
  }

  // Mood, Appetite & Energy Tracking
  setAppetite(val, btnEl) {
    if (!this.state.todayLogs.mood) this.state.todayLogs.mood = {};
    this.state.todayLogs.mood.appetite = val;
    this.saveState();

    if (btnEl && btnEl.parentElement) {
      btnEl.parentElement.querySelectorAll('.mood-chip').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
    }
    this.showToastNotification(`İştah durumunuz "${val}" olarak kaydedildi.`, 'fa-utensils');
  }

  setEnergy(val, btnEl) {
    if (!this.state.todayLogs.mood) this.state.todayLogs.mood = {};
    this.state.todayLogs.mood.energy = val;
    this.saveState();

    if (btnEl && btnEl.parentElement) {
      btnEl.parentElement.querySelectorAll('.mood-chip').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
    }
    this.showToastNotification(`Enerji durumunuz "${val}" olarak kaydedildi.`, 'fa-bolt');
  }

  saveDailyNote(text) {
    if (!this.state.todayLogs.mood) this.state.todayLogs.mood = {};
    this.state.todayLogs.mood.note = text;
    this.saveState();
    this.showToastNotification('Günlük notunuz kaydedildi!', 'fa-floppy-disk');
  }

  // Backup Data Export & Import (JSON)
  exportAppData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `calofit_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToastNotification('CaloFit verileriniz JSON dosyası olarak indirildi!', 'fa-download');
  }

  importAppData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedState = JSON.parse(e.target.result);
        if (importedState && importedState.profile) {
          this.state = { ...this.state, ...importedState };
          this.saveState();
          alert('Yedek verileriniz başarıyla CaloFit sistemine yüklendi!');
          location.reload();
        } else {
          alert('Geçersiz yedek dosyası formatı!');
        }
      } catch (err) {
        alert('Yedek dosyası okunurken hata oluştu: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  resetAllData() {
    if (confirm('TÜM veriler sıfırlanacak. Emin misiniz?')) {
      localStorage.removeItem(this.storageKey);
      location.reload();
    }
  }

  // RENDER UI STATE
  render() {
    const prof = this.state.profile;
    const meals = this.state.todayLogs.meals;

    // Calculate totals
    const consumedCal = meals.reduce((acc, m) => acc + (m.calories || 0), 0);
    const consumedProt = meals.reduce((acc, m) => acc + (m.protein || 0), 0);
    const consumedCarb = meals.reduce((acc, m) => acc + (m.carbs || 0), 0);
    const consumedFat = meals.reduce((acc, m) => acc + (m.fat || 0), 0);

    const targetCal = prof.targetCalories || 2850;
    const remainingCal = Math.max(0, targetCal - consumedCal);

    // 1. Header Bar
    document.getElementById('hdr-target-calories').innerText = targetCal.toLocaleString('tr-TR') + ' kcal';
    document.getElementById('hdr-consumed-calories').innerText = consumedCal.toLocaleString('tr-TR') + ' kcal';
    document.getElementById('hdr-weight-status').innerText = `${prof.weight.toFixed(1)} kg / ${prof.targetWeight.toFixed(1)} kg`;

    // 2. Dashboard Rings & Macro Bars
    document.getElementById('dash-remaining-calories').innerText = remainingCal.toLocaleString('tr-TR');
    document.getElementById('dash-total-target').innerText = `Hedef: ${targetCal.toLocaleString('tr-TR')} kcal`;

    // Calorie Ring SVG (stroke-dasharray="440")
    const ringBar = document.getElementById('calorie-ring-bar');
    if (ringBar) {
      const pct = Math.min(1.0, consumedCal / targetCal);
      const offset = 440 - (440 * pct);
      ringBar.style.strokeDashoffset = offset;
    }

    // Macro Values
    document.getElementById('val-protein-curr').innerText = consumedProt;
    document.getElementById('val-protein-tgt').innerText = prof.proteinTarget || 140;
    const protPct = Math.min(100, (consumedProt / (prof.proteinTarget || 140)) * 100);
    document.getElementById('bar-protein').style.width = protPct + '%';

    document.getElementById('val-carbs-curr').innerText = consumedCarb;
    document.getElementById('val-carbs-tgt').innerText = prof.carbTarget || 360;
    const carbPct = Math.min(100, (consumedCarb / (prof.carbTarget || 360)) * 100);
    document.getElementById('bar-carbs').style.width = carbPct + '%';

    document.getElementById('val-fat-curr').innerText = consumedFat;
    document.getElementById('val-fat-tgt').innerText = prof.fatTarget || 95;
    const fatPct = Math.min(100, (consumedFat / (prof.fatTarget || 95)) * 100);
    document.getElementById('bar-fat').style.width = fatPct + '%';

    // Hydration Text & Visual Gauges
    const waterLiters = this.state.todayLogs.waterLiters || 0;
    const waterTarget = prof.waterTargetLiters || 3.5;
    const glasses = Math.round(waterLiters / 0.25);
    const waterPct = Math.min(100, Math.round((waterLiters / waterTarget) * 100));

    const mainWaterText = document.getElementById('water-log-text-main');
    if (mainWaterText) mainWaterText.innerText = `${waterLiters.toFixed(2)} / ${waterTarget.toFixed(1)} Litre`;

    const waterGlassesCount = document.getElementById('water-glasses-count');
    if (waterGlassesCount) waterGlassesCount.innerText = `(${glasses} Bardak İçildi)`;

    const waterPctNum = document.getElementById('water-pct-num');
    if (waterPctNum) waterPctNum.innerText = `%${waterPct}`;

    const waterFill = document.getElementById('water-cylinder-fill');
    if (waterFill) waterFill.style.height = `${waterPct}%`;

    const oldWaterText = document.getElementById('water-log-text');
    if (oldWaterText) oldWaterText.innerText = `${waterLiters.toFixed(2)} / ${waterTarget.toFixed(1)} Litre (${glasses} Bardak)`;

    this.updateWaterTimerDisplay();
    this.renderExerciseLogs();

    // 3. Meals Table
    const tbody = document.getElementById('meals-tbody');
    const countBadge = document.getElementById('logged-count');

    if (countBadge) countBadge.innerText = `${meals.length} Yemek`;

    if (tbody) {
      if (meals.length === 0) {
        tbody.innerHTML = `
          <tr class="empty-row">
            <td colspan="7" class="text-center text-muted">
              <i class="fa-solid fa-utensils fa-2x mb-2 d-block"></i>
              Henüz bugün için bir yemek eklemediniz. Hızlı butonları veya formu kullanabilirsiniz!
            </td>
          </tr>
        `;
      } else {
        tbody.innerHTML = meals.map(m => `
          <tr>
            <td><span class="meal-type-tag">${m.meal}</span></td>
            <td><strong>${m.name}</strong></td>
            <td><strong class="text-amber">${m.calories} kcal</strong></td>
            <td>${m.protein} g</td>
            <td>${m.carbs} g</td>
            <td>${m.fat} g</td>
            <td>
              <button class="btn btn-sm btn-outline-danger" onclick="app.deleteMeal('${m.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        `).join('');
      }
    }

    // 4. Render Weight Table & Charts
    this.renderWeightHistoryTable();
    this.renderWeightChart();
  }

  renderWeightHistoryTable() {
    const tbody = document.getElementById('progress-tbody');
    const history = this.state.weightHistory;

    if (tbody) {
      if (history.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">Kayıt bulunamadı.</td></tr>`;
      } else {
        tbody.innerHTML = history.slice().reverse().map((item, idx) => {
          const originalIdx = history.length - 1 - idx;
          return `
            <tr>
              <td>${item.date}</td>
              <td><strong class="text-emerald">${item.weight.toFixed(1)} kg</strong></td>
              <td>${item.arm ? item.arm + ' cm' : '-'}</td>
              <td>${item.chest ? item.chest + ' cm' : '-'}</td>
              <td>${item.waist ? item.waist + ' cm' : '-'}</td>
              <td>
                <button class="btn btn-sm btn-outline-danger" onclick="app.deleteWeightLog(${originalIdx})">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    // Feedback Rate Analysis
    const fbBox = document.getElementById('gain-rate-feedback-box');
    if (fbBox && history.length >= 2) {
      const first = history[0];
      const last = history[history.length - 1];
      const diff = last.weight - first.weight;
      const weeks = Math.max(1, Math.round((new Date(last.date) - new Date(first.date)) / (1000 * 60 * 60 * 24 * 7)));
      const ratePerWeek = (diff / weeks).toFixed(2);

      let msg = '';
      if (ratePerWeek >= 0.2 && ratePerWeek <= 0.6) {
        msg = `<strong><i class="fa-solid fa-circle-check text-emerald"></i> Mükemmel İlerleme!</strong> Haftalık ortalama <strong>${ratePerWeek} kg</strong> alıyorsunuz. Bu oran temiz kas kazanımı (Clean Bulking) için idealdir.`;
      } else if (ratePerWeek > 0.6) {
        msg = `<strong><i class="fa-solid fa-triangle-exclamation text-amber"></i> Hızlı Kilo Alma Uyarısı:</strong> Haftalık <strong>${ratePerWeek} kg</strong> alıyorsunuz. Yağlanmayı önlemek için kalori fazlasını biraz düşürebilirsiniz.`;
      } else if (ratePerWeek < 0) {
        msg = `<strong><i class="fa-solid fa-circle-exclamation text-danger"></i> Kilo Kaybı Tespit Edildi:</strong> Son dönemde ${Math.abs(diff).toFixed(1)} kg kaybettiniz. Günlük kalori alımınızı en az +300 kcal artırın.`;
      } else {
        msg = `<strong><i class="fa-solid fa-circle-info text-cyan"></i> Sabit Durum:</strong> Kilonuz stabil seyrediyor. Kilo alma sürecini başlatmak için kalori hedefinizi +300 kcal artırın.`;
      }

      fbBox.innerHTML = msg;
    }
  }

  renderWeightChart() {
    const canvas = document.getElementById('weight-chart-canvas');
    const svg = document.getElementById('weight-chart-svg');
    const data = this.state.weightHistory || [];

    if (!data || data.length === 0) return;

    if (window.Chart && canvas) {
      if (svg) svg.style.display = 'none';
      canvas.style.display = 'block';

      const labels = data.map(d => d.date);
      const weights = data.map(d => d.weight);
      const arms = data.map(d => d.arm || null);
      const chests = data.map(d => d.chest || null);

      if (this.weightChartInstance) {
        this.weightChartInstance.destroy();
      }

      const isLight = document.body.getAttribute('data-theme') === 'light';
      const textColor = isLight ? '#0B1911' : '#F4FAF6';
      const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)';

      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.45)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.01)');

      this.weightChartInstance = new Chart(canvas, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Kilo (kg)',
              data: weights,
              borderColor: '#10B981',
              backgroundColor: gradient,
              borderWidth: 3.5,
              fill: true,
              tension: 0.35,
              pointBackgroundColor: '#84CC16',
              pointBorderColor: '#09130D',
              pointBorderWidth: 2,
              pointRadius: 6,
              pointHoverRadius: 9
            },
            {
              label: 'Kol Ölçüsü (cm)',
              data: arms,
              borderColor: '#84CC16',
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderDash: [5, 5],
              tension: 0.35,
              pointRadius: 4,
              hidden: false
            },
            {
              label: 'Göğüs Ölçüsü (cm)',
              data: chests,
              borderColor: '#06B6D4',
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderDash: [3, 3],
              tension: 0.35,
              pointRadius: 4,
              hidden: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: textColor,
                font: { family: 'Plus Jakarta Sans', size: 12, weight: '600' },
                padding: 15,
                usePointStyle: true
              }
            },
            tooltip: {
              backgroundColor: 'rgba(9, 19, 13, 0.92)',
              titleColor: '#84CC16',
              bodyColor: '#F4FAF6',
              borderColor: '#10B981',
              borderWidth: 1,
              padding: 12,
              displayColors: true,
              callbacks: {
                label: function(context) {
                  return ` ${context.dataset.label}: ${context.parsed.y} ${context.dataset.label.includes('Kilo') ? 'kg' : 'cm'}`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { color: gridColor },
              ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
            },
            y: {
              grid: { color: gridColor },
              ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
            }
          }
        }
      });
    } else {
      if (canvas) canvas.style.display = 'none';
      if (svg) svg.style.display = 'block';
      this.renderSvgWeightChartFallback();
    }
  }

  renderSvgWeightChartFallback() {
    const svg = document.getElementById('weight-chart-svg');
    if (!svg) return;

    const data = this.state.weightHistory || [];
    if (!data || data.length < 2) {
      svg.innerHTML = `<text x="300" y="150" fill="#86E3CE" text-anchor="middle">Grafik için en az 2 tartı kaydı gereklidir.</text>`;
      return;
    }

    const width = 600;
    const height = 300;
    const padding = 50;

    const weights = data.map(d => d.weight);
    const minW = Math.min(...weights) - 1.0;
    const maxW = Math.max(...weights) + 1.0;

    const getX = (i) => padding + (i / (data.length - 1)) * (width - 2 * padding);
    const getY = (w) => height - padding - ((w - minW) / (maxW - minW)) * (height - 2 * padding);

    let pathD = `M ${getX(0)} ${getY(data[0].weight)}`;
    let areaD = `M ${getX(0)} ${height - padding} L ${getX(0)} ${getY(data[0].weight)}`;

    for (let i = 1; i < data.length; i++) {
      const x = getX(i);
      const y = getY(data[i].weight);
      pathD += ` L ${x} ${y}`;
      areaD += ` L ${x} ${y}`;
    }

    areaD += ` L ${getX(data.length - 1)} ${height - padding} Z`;

    svg.innerHTML = `
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.0" />
        </linearGradient>
      </defs>
      <path d="${areaD}" fill="url(#chartGrad)" />
      <path d="${pathD}" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" />
      ${data.map((d, i) => {
        const cx = getX(i);
        const cy = getY(d.weight);
        return `
          <g class="chart-point">
            <circle cx="${cx}" cy="${cy}" r="6" fill="#10b981" stroke="#061e12" stroke-width="2" />
            <text x="${cx}" y="${cy - 12}" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">${d.weight.toFixed(1)}kg</text>
            <text x="${cx}" y="${height - padding + 20}" fill="#94a3b8" font-size="10" text-anchor="middle">${d.date.slice(5)}</text>
          </g>
        `;
      }).join('')}
    `;
  }

  // --- SMOOTHIE & SHAKE LAB METHODS ---
  logPresetShake(name, calories, protein, carbs, fat) {
    const meal = {
      id: 'm_' + Date.now(),
      name: `Shake Lab: ${name}`,
      meal: 'Ara Öğün / Shake',
      calories: calories,
      protein: protein,
      carbs: carbs,
      fat: fat
    };

    if (!this.state.todayLogs.meals) this.state.todayLogs.meals = [];
    this.state.todayLogs.meals.push(meal);
    this.saveState();
    this.showToastNotification(`🥤 ${name} (${calories} kcal) günlük yemek günlüğünüze eklendi!`, 'fa-blender');
  }

  toggleShakeIngredient(id, name, cal, prot, carb, fat, btnElement) {
    if (!this.currentShakeIngredients) this.currentShakeIngredients = [];
    const index = this.currentShakeIngredients.findIndex(item => item.id === id);

    if (index > -1) {
      this.currentShakeIngredients.splice(index, 1);
      if (btnElement) btnElement.classList.remove('active');
    } else {
      this.currentShakeIngredients.push({ id, name, cal, prot, carb, fat });
      if (btnElement) btnElement.classList.add('active');
    }

    this.updateShakeSummary();
  }

  toggleIngredientMissingStatus(id) {
    if (!this.missingIngredientIds) this.missingIngredientIds = new Set();
    
    if (this.missingIngredientIds.has(id)) {
      this.missingIngredientIds.delete(id);
    } else {
      this.missingIngredientIds.add(id);
    }

    this.updateShakeSummary();
  }

  updateShakeSummary() {
    if (!this.currentShakeIngredients) this.currentShakeIngredients = [];
    if (!this.missingIngredientIds) this.missingIngredientIds = new Set();

    const totalCal = this.currentShakeIngredients.reduce((sum, i) => sum + i.cal, 0);
    const totalProt = this.currentShakeIngredients.reduce((sum, i) => sum + i.prot, 0);
    const totalCarb = this.currentShakeIngredients.reduce((sum, i) => sum + i.carb, 0);
    const totalFat = this.currentShakeIngredients.reduce((sum, i) => sum + i.fat, 0);

    const countElem = document.getElementById('selected-ingredients-count');
    const calElem = document.getElementById('shake-total-calories');
    const protElem = document.getElementById('shake-total-protein');
    const carbElem = document.getElementById('shake-total-carbs');
    const fatElem = document.getElementById('shake-total-fat');
    const listElem = document.getElementById('shake-ingredients-list');

    if (countElem) countElem.textContent = `${this.currentShakeIngredients.length} Malzeme Seçildi`;
    if (calElem) calElem.innerHTML = `${Math.round(totalCal)} <small>kcal</small>`;
    if (protElem) protElem.textContent = `${Math.round(totalProt)}g`;
    if (carbElem) carbElem.textContent = `${Math.round(totalCarb)}g`;
    if (fatElem) fatElem.textContent = `${Math.round(totalFat)}g`;

    if (listElem) {
      if (this.currentShakeIngredients.length === 0) {
        listElem.innerHTML = '<li class="empty-ing-msg text-muted">Henüz malzeme seçilmedi. Sol taraftan malzeme ekleyin.</li>';
      } else {
        listElem.innerHTML = this.currentShakeIngredients.map(item => {
          const isMissing = this.missingIngredientIds.has(item.id);
          return `
            <li class="shake-ing-item">
              <div>
                <span>${item.name}</span>
                <small class="text-muted d-block">${item.cal} kcal</small>
              </div>
              <button type="button" class="shake-ing-status-btn ${isMissing ? 'is-missing' : 'is-present'}" onclick="app.toggleIngredientMissingStatus('${item.id}')">
                ${isMissing ? '<i class="fa-solid fa-basket-shopping"></i> Eksik' : '<i class="fa-solid fa-circle-check"></i> Evde Var'}
              </button>
            </li>
          `;
        }).join('');
      }
    }

    this.renderMissingList();
  }

  addCustomShakeToMeals() {
    if (!this.currentShakeIngredients || this.currentShakeIngredients.length === 0) {
      this.showToastNotification('⚠️ Lütfen önce karıştırıcıya malzeme ekleyin!', 'fa-triangle-exclamation');
      return;
    }

    const nameInput = document.getElementById('custom-shake-name');
    const shakeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Özel Power Shake';

    const totalCal = Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.cal, 0));
    const totalProt = Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.prot, 0));
    const totalCarb = Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.carb, 0));
    const totalFat = Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.fat, 0));

    this.logPresetShake(shakeName, totalCal, totalProt, totalCarb, totalFat);
  }

  saveCustomShakeRecipe() {
    if (!this.currentShakeIngredients || this.currentShakeIngredients.length === 0) {
      this.showToastNotification('⚠️ Lütfen önce karıştırıcıya malzeme ekleyin!', 'fa-triangle-exclamation');
      return;
    }

    const nameInput = document.getElementById('custom-shake-name');
    const shakeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Özel Power Shake';

    const recipe = {
      id: 'sr_' + Date.now(),
      name: shakeName,
      ingredients: [...this.currentShakeIngredients],
      totalCal: Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.cal, 0)),
      totalProt: Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.prot, 0)),
      totalCarb: Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.carb, 0)),
      totalFat: Math.round(this.currentShakeIngredients.reduce((sum, i) => sum + i.fat, 0))
    };

    if (!this.state.savedShakes) this.state.savedShakes = [];
    this.state.savedShakes.push(recipe);
    this.saveState();
    this.renderSavedShakes();
    this.showToastNotification(`⭐ "${shakeName}" tarifiniz favorilere kaydedildi!`, 'fa-star');
  }

  clearCustomShakeBuilder() {
    this.currentShakeIngredients = [];
    if (this.missingIngredientIds) this.missingIngredientIds.clear();
    document.querySelectorAll('.ing-chip.active').forEach(chip => chip.classList.remove('active'));
    this.updateShakeSummary();
    this.showToastNotification('🔄 Karıştırıcı ve malzeme seçimi sıfırlandı.', 'fa-rotate-left');
  }

  // --- EKSİK LİSTE (MISSING INGREDIENTS SHOPPING LIST) METHODS ---
  addCustomMissingItem(text) {
    if (!text || !text.trim()) {
      this.showToastNotification('⚠️ Lütfen eklenecek eksik malzemeyi veya notu yazın.', 'fa-triangle-exclamation');
      return;
    }

    if (!this.state.customMissingItems) {
      this.state.customMissingItems = [];
    }

    const newItem = {
      id: 'cmi_' + Date.now(),
      name: text.trim()
    };

    this.state.customMissingItems.push(newItem);
    this.saveState();
    this.renderMissingList();
    this.showToastNotification(`🛒 "${text.trim()}" eksik listesine eklendi!`, 'fa-plus');
  }

  deleteCustomMissingItem(id) {
    if (!this.state.customMissingItems) return;
    this.state.customMissingItems = this.state.customMissingItems.filter(i => i.id !== id);
    this.saveState();
    this.renderMissingList();
    this.showToastNotification('🗑️ Not silindi.', 'fa-trash');
  }

  renderMissingList() {
    const ul = document.getElementById('missing-ingredients-ul');
    const badge = document.getElementById('missing-items-count');
    if (!this.currentShakeIngredients) this.currentShakeIngredients = [];
    if (!this.missingIngredientIds) this.missingIngredientIds = new Set();
    if (!this.state.customMissingItems) this.state.customMissingItems = [];

    const missingShakeItems = this.currentShakeIngredients.filter(i => this.missingIngredientIds.has(i.id));
    const customItems = this.state.customMissingItems;

    const totalMissingCount = missingShakeItems.length + customItems.length;

    if (badge) badge.textContent = `${totalMissingCount} Eksik Malzeme`;

    if (!ul) return;
    if (totalMissingCount === 0) {
      ul.innerHTML = '<li class="empty-missing-msg text-muted" style="grid-column: 1/-1;">🎉 Harika! Tüm malzemeleriniz hazır veya henüz eksik malzeme eklenmedi.</li>';
      return;
    }

    let html = '';

    // Render custom notes/items first
    if (customItems.length > 0) {
      html += customItems.map(item => `
        <li class="missing-ing-item custom-missing-item" style="border-color: hsla(160, 84%, 39%, 0.4);">
          <div>
            <strong>📝 ${item.name}</strong>
            <small class="d-block text-amber">Kullanıcı Notu</small>
          </div>
          <button class="btn btn-sm btn-outline-danger" onclick="app.deleteCustomMissingItem('${item.id}')">
            <i class="fa-solid fa-trash"></i> Sil
          </button>
        </li>
      `).join('');
    }

    // Render auto-detected missing ingredients
    if (missingShakeItems.length > 0) {
      html += missingShakeItems.map(item => `
        <li class="missing-ing-item">
          <div>
            <strong>🛒 ${item.name}</strong>
            <small class="d-block text-muted">${item.cal} kcal</small>
          </div>
          <button class="btn btn-sm btn-outline-cyan" onclick="app.toggleIngredientMissingStatus('${item.id}')">
            <i class="fa-solid fa-check"></i> Temin Edildi
          </button>
        </li>
      `).join('');
    }

    ul.innerHTML = html;
  }

  copyMissingListToClipboard() {
    if (!this.currentShakeIngredients) this.currentShakeIngredients = [];
    if (!this.missingIngredientIds) this.missingIngredientIds = new Set();
    if (!this.state.customMissingItems) this.state.customMissingItems = [];

    const missingShakeItems = this.currentShakeIngredients.filter(i => this.missingIngredientIds.has(i.id));
    const customItems = this.state.customMissingItems;

    if (missingShakeItems.length === 0 && customItems.length === 0) {
      this.showToastNotification('⚠️ Eksik malzeme listeniz boş.', 'fa-triangle-exclamation');
      return;
    }

    let allItems = [];
    customItems.forEach(i => allItems.push(i.name));
    missingShakeItems.forEach(i => allItems.push(i.name));

    const listText = "🥤 *CaloFit - Eksik Malzeme Alışveriş Listesi*\n" + 
      allItems.map((name, idx) => `${idx + 1}. ${name}`).join('\n') + 
      "\n\n_CaloFit Sağlıklı Beslenme Portalı_";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(listText).then(() => {
        this.showToastNotification('📋 Eksik listesi panoya kopyalandı! (WhatsApp/Notlara Yapıştırabilirsiniz)', 'fa-copy');
      }).catch(() => {
        this.showToastNotification('📋 Eksik malzeme listeniz hazırlandı!', 'fa-copy');
      });
    } else {
      this.showToastNotification('📋 Eksik malzeme listeniz hazırlandı!', 'fa-copy');
    }
  }

  clearMissingList() {
    if (!this.missingIngredientIds) this.missingIngredientIds = new Set();
    this.missingIngredientIds.clear();
    this.state.customMissingItems = [];
    this.saveState();
    this.updateShakeSummary();
    this.showToastNotification('🗑️ Eksik listesi ve notlar temizlendi.', 'fa-trash');
  }

  deleteSavedShake(id) {
    if (!this.state.savedShakes) return;
    this.state.savedShakes = this.state.savedShakes.filter(s => s.id !== id);
    this.saveState();
    this.renderSavedShakes();
    this.showToastNotification('🗑️ Tarif silindi.', 'fa-trash');
  }

  renderSavedShakes() {
    const container = document.getElementById('saved-shakes-container');
    const countBadge = document.getElementById('saved-shakes-count');
    const saved = this.state.savedShakes || [];

    if (countBadge) countBadge.textContent = `${saved.length} Tarif`;
    if (!container) return;

    if (saved.length === 0) {
      container.innerHTML = '<p class="text-muted text-sm" style="grid-column: 1/-1;">Henüz kaydedilmiş özel shake tarifiniz bulunmuyor.</p>';
      return;
    }

    container.innerHTML = saved.map(s => `
      <div class="saved-shake-card">
        <div>
          <h4><i class="fa-solid fa-blender text-amber"></i> ${s.name}</h4>
          <div class="preset-macros mt-2">
            <span><strong>${s.totalCal}</strong> kcal</span>
            <span><strong>${s.totalProt}g</strong> P</span>
            <span><strong>${s.totalCarb}g</strong> C</span>
            <span><strong>${s.totalFat}g</strong> Y</span>
          </div>
          <p class="text-xs text-muted mt-2">${s.ingredients.map(i => i.name).join(', ')}</p>
        </div>
        <div class="mt-3 flex gap-2">
          <button class="btn btn-sm btn-emerald flex-1" onclick="app.logPresetShake('${s.name}', ${s.totalCal}, ${s.totalProt}, ${s.totalCarb}, ${s.totalFat})">
            <i class="fa-solid fa-plus"></i> Ekle
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="app.deleteSavedShake('${s.id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  // --- GOAL WEIGHT & TIMELINE FORECASTER METHOD ---
  updateGoalForecaster() {
    const prof = this.state.profile || {};
    const history = this.state.weightHistory || [];
    
    const currW = prof.weight || (history.length > 0 ? history[history.length - 1].weight : 64.0);
    const targetW = prof.targetWeight || 72.0;
    const startW = history.length > 0 ? history[0].weight : (currW - 1.5);

    const diffToGoal = Math.max(0, targetW - currW);

    // Calculate velocity (kg per week) from history
    let weeklyRate = 0.35; // default fallback
    if (history.length >= 2) {
      const firstEntry = history[0];
      const lastEntry = history[history.length - 1];
      const daysDiff = (new Date(lastEntry.date) - new Date(firstEntry.date)) / (1000 * 60 * 60 * 24);
      const weightDiff = lastEntry.weight - firstEntry.weight;
      if (daysDiff > 0 && weightDiff > 0) {
        weeklyRate = (weightDiff / daysDiff) * 7;
      }
    }

    weeklyRate = Math.max(0.1, Math.min(1.5, weeklyRate)); // bound reasonably

    const weeksNeeded = diffToGoal > 0 ? Math.ceil(diffToGoal / weeklyRate) : 0;
    const daysNeeded = weeksNeeded * 7;

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysNeeded);
    const formattedDate = targetDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

    // Progress percentage
    const totalGoalSpan = Math.max(0.1, targetW - startW);
    const currentGained = Math.max(0, currW - startW);
    const pct = Math.min(100, Math.round((currentGained / totalGoalSpan) * 100));

    // Update UI elements
    const wProg = document.getElementById('fc-weight-progress');
    const wDiff = document.getElementById('fc-weight-diff');
    const wRate = document.getElementById('fc-weekly-rate');
    const rStatus = document.getElementById('fc-rate-status');
    const dRem = document.getElementById('fc-days-remaining');
    const tDate = document.getElementById('fc-target-date');
    const pctText = document.getElementById('fc-progress-pct-text');
    const barFill = document.getElementById('fc-progress-bar-fill');

    if (wProg) wProg.innerText = `${currW.toFixed(1)} kg → ${targetW.toFixed(1)} kg`;
    if (wDiff) wDiff.innerText = diffToGoal > 0 ? `Kalan: +${diffToGoal.toFixed(1)} kg` : '🎉 Hedefe Ulaşıldı!';
    if (wRate) wRate.innerText = `+${weeklyRate.toFixed(2)} kg / hafta`;
    
    if (rStatus) {
      if (weeklyRate >= 0.25 && weeklyRate <= 0.5) {
        rStatus.innerHTML = '<span class="text-emerald">💪 İdeal Temiz Kas Kazanımı</span>';
      } else if (weeklyRate > 0.5) {
        rStatus.innerHTML = '<span class="text-amber">⚠️ Hızlı Kilo Alma (Yağlanma Riski)</span>';
      } else {
        rStatus.innerHTML = '<span class="text-cyan">🐢 Yavaş Kilo Alma (Kalori Artırın)</span>';
      }
    }

    if (dRem) dRem.innerText = diffToGoal > 0 ? `~${weeksNeeded} Hafta (${daysNeeded} Gün)` : 'Tamamlandı!';
    if (tDate) tDate.innerText = diffToGoal > 0 ? `Tahmini Bitiş: ${formattedDate}` : 'Hedef Kilodasınız';

    if (pctText) pctText.innerText = `İlerleme: %${pct}`;
    if (barFill) barFill.style.width = `${pct}%`;
  }

  // --- FIRMA A, B, C SIPARIS YONETIMI METHODS ---
  submitCompanyOrder() {
    if (!this.currentShakeIngredients) this.currentShakeIngredients = [];
    if (!this.missingIngredientIds) this.missingIngredientIds = new Set();
    if (!this.state.customMissingItems) this.state.customMissingItems = [];

    const missingShakeItems = this.currentShakeIngredients.filter(i => this.missingIngredientIds.has(i.id));
    const customItems = this.state.customMissingItems;

    if (missingShakeItems.length === 0 && customItems.length === 0) {
      this.showToastNotification('⚠️ Eksik listeniz boş! Lütfen önce malzeme ekleyin veya eksik olarak işaretleyin.', 'fa-triangle-exclamation');
      return;
    }

    const selectEl = document.getElementById('company-select-dropdown');
    const companyName = selectEl ? selectEl.value : 'Firma B';

    let orderItems = [];
    customItems.forEach(i => orderItems.push(i.name));
    missingShakeItems.forEach(i => orderItems.push(`${i.name} (${i.cal} kcal)`));

    const newOrder = {
      id: 'ord_' + Date.now(),
      company: companyName,
      items: orderItems,
      date: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) + ' — ' + new Date().toLocaleDateString('tr-TR'),
      status: 'pending' // 'pending' or 'delivered'
    };

    if (!this.state.companyOrders) this.state.companyOrders = [];
    this.state.companyOrders.unshift(newOrder);
    this.saveState();
    this.renderCompanyOrders();

    this.showToastNotification(`📦 ${companyName}'e ${orderItems.length} kalem malzeme siparişi iletildi!`, 'fa-paper-plane');
  }

  toggleCompanyOrderStatus(id) {
    if (!this.state.companyOrders) return;
    const order = this.state.companyOrders.find(o => o.id === id);
    if (order) {
      order.status = order.status === 'delivered' ? 'pending' : 'delivered';
      this.saveState();
      this.renderCompanyOrders();
      this.showToastNotification(order.status === 'delivered' ? '✅ Sipariş teslim alındı olarak işaretlendi.' : '📦 Sipariş tekrar aktif duruma getirildi.', 'fa-boxes-packing');
    }
  }

  deleteCompanyOrder(id) {
    if (!this.state.companyOrders) return;
    this.state.companyOrders = this.state.companyOrders.filter(o => o.id !== id);
    this.saveState();
    this.renderCompanyOrders();
    this.showToastNotification('🗑️ Sipariş kaydı silindi.', 'fa-trash');
  }

  renderCompanyOrders() {
    const container = document.getElementById('company-orders-container');
    const countBadge = document.getElementById('active-orders-count');
    const orders = this.state.companyOrders || [];

    if (countBadge) countBadge.textContent = `${orders.length} Sipariş`;
    if (!container) return;

    if (orders.length === 0) {
      container.innerHTML = `<p class="text-xs text-muted" style="grid-column: 1/-1;">Henüz verilmiş bir firma siparişiniz bulunmuyor. Yukarıdan firmanızı seçip sipariş girebilirsiniz.</p>`;
      return;
    }

    container.innerHTML = orders.map(ord => {
      const isDelivered = ord.status === 'delivered';
      return `
        <div class="company-order-card">
          <div class="order-card-header flex justify-between items-center mb-2">
            <div>
              <h5 class="text-sm font-weight-bold text-emerald"><i class="fa-solid fa-building"></i> ${ord.company}</h5>
              <small class="text-xs text-muted">${ord.date}</small>
            </div>
            <span class="order-badge-status ${isDelivered ? 'delivered' : ''}">
              ${isDelivered ? '<i class="fa-solid fa-circle-check"></i> Teslim Edildi' : '<i class="fa-solid fa-truck-ramp-box"></i> Sipariş Alındı'}
            </span>
          </div>

          <div class="order-items-tags">
            ${ord.items.map(item => `<span class="order-item-tag">🛒 ${item}</span>`).join('')}
          </div>

          <div class="order-actions flex gap-2 mt-3">
            <button class="btn btn-sm ${isDelivered ? 'btn-outline-amber' : 'btn-emerald'} flex-1" onclick="app.toggleCompanyOrderStatus('${ord.id}')">
              ${isDelivered ? '<i class="fa-solid fa-rotate-left"></i> Aktife Al' : '<i class="fa-solid fa-check-double"></i> Teslim Alındı'}
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="app.deleteCompanyOrder('${ord.id}')">
              <i class="fa-solid fa-trash"></i> Sil
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- PDF REPORT EXPORT MODULE ---
  openPdfModal() {
    const modal = document.getElementById('pdf-modal');
    const container = document.getElementById('pdf-report-paper');
    if (!modal || !container) return;

    container.innerHTML = this.buildPdfReportHtml();
    modal.style.display = 'flex';
  }

  closePdfModal() {
    const modal = document.getElementById('pdf-modal');
    if (modal) modal.style.display = 'none';
  }

  buildPdfReportHtml() {
    const prof = this.state.profile;
    const meals = this.state.todayLogs.meals || [];
    const history = this.state.weightHistory || [];
    const dateStr = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

    const totalCal = meals.reduce((acc, m) => acc + (m.calories || 0), 0);
    const totalProt = meals.reduce((acc, m) => acc + (m.protein || 0), 0);
    const totalCarb = meals.reduce((acc, m) => acc + (m.carbs || 0), 0);
    const totalFat = meals.reduce((acc, m) => acc + (m.fat || 0), 0);

    const targetCal = prof.targetCalories || 2850;
    const diffCal = totalCal - targetCal;

    return `
      <div class="pdf-template-wrapper">
        <div class="pdf-header">
          <div class="pdf-brand">
            <h2 class="pdf-brand-title">CaloFit Pro</h2>
            <p class="pdf-brand-sub">Sağlıklı Kilo Alma & Kişisel Beslenme Portalı Raporu</p>
          </div>
          <div class="pdf-meta">
            <div><strong>Tarih:</strong> ${dateStr}</div>
            <div><strong>Program:</strong> Clean Bulking (Kalori Fazlası)</div>
          </div>
        </div>

        <div class="pdf-section-title">📊 Profil ve Günlük Kalori Özeti</div>
        <div class="pdf-summary-grid">
          <div class="pdf-box">
            <small>Kilo / Hedef Kilo</small>
            <strong>${prof.weight.toFixed(1)} kg / ${prof.targetWeight.toFixed(1)} kg</strong>
          </div>
          <div class="pdf-box">
            <small>Günlük Hedef Kalori</small>
            <strong>${targetCal.toLocaleString('tr-TR')} kcal</strong>
          </div>
          <div class="pdf-box">
            <small>Bugün Alınan Kalori</small>
            <strong>${totalCal.toLocaleString('tr-TR')} kcal</strong>
          </div>
          <div class="pdf-box">
            <small>Net Kalori Denge</small>
            <strong class="${diffCal >= 0 ? 'text-emerald' : 'text-amber'}">${diffCal >= 0 ? '+' : ''}${diffCal} kcal</strong>
          </div>
        </div>

        <div class="pdf-section-title">🥩 Makro Besin Dağılım İlerlemesi</div>
        <table class="pdf-table">
          <thead>
            <tr>
              <th>Makro Besin Öğesi</th>
              <th>Hedef Miktar</th>
              <th>Gerçekleşen Tüketim</th>
              <th>Uyum Yüzdesi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Protein</strong></td>
              <td>${prof.proteinTarget || 140} g</td>
              <td>${totalProt} g</td>
              <td>%${Math.min(100, Math.round((totalProt / (prof.proteinTarget || 140)) * 100))}</td>
            </tr>
            <tr>
              <td><strong>Karbonhidrat</strong></td>
              <td>${prof.carbTarget || 360} g</td>
              <td>${totalCarb} g</td>
              <td>%${Math.min(100, Math.round((totalCarb / (prof.carbTarget || 360)) * 100))}</td>
            </tr>
            <tr>
              <td><strong>Sağlıklı Yağlar</strong></td>
              <td>${prof.fatTarget || 95} g</td>
              <td>${totalFat} g</td>
              <td>%${Math.min(100, Math.round((totalFat / (prof.fatTarget || 95)) * 100))}</td>
            </tr>
          </tbody>
        </table>

        <div class="pdf-section-title">🍲 Bugün Tüketilen Öğün Detayları (${meals.length} Adet)</div>
        <table class="pdf-table">
          <thead>
            <tr>
              <th>Öğün Kategori</th>
              <th>Yemek / Besin Adı</th>
              <th>Kalori</th>
              <th>Protein</th>
              <th>Karb</th>
              <th>Yağ</th>
            </tr>
          </thead>
          <tbody>
            ${meals.length === 0 ? '<tr><td colspan="6" style="text-align:center; padding:12px;">Henüz kaydedilmiş öğün bulunmuyor.</td></tr>' : meals.map(m => `
              <tr>
                <td>${m.meal}</td>
                <td><strong>${m.name}</strong></td>
                <td>${m.calories} kcal</td>
                <td>${m.protein} g</td>
                <td>${m.carbs} g</td>
                <td>${m.fat} g</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="pdf-section-title">📈 Son Kilo & Beden Ölçüsü Değişim Kayıtları</div>
        <table class="pdf-table">
          <thead>
            <tr>
              <th>Kayıt Tarihi</th>
              <th>Kilo (kg)</th>
              <th>Kol (cm)</th>
              <th>Göğüs (cm)</th>
              <th>Bel (cm)</th>
            </tr>
          </thead>
          <tbody>
            ${history.slice().reverse().slice(0, 5).map(h => `
              <tr>
                <td>${h.date}</td>
                <td><strong>${h.weight.toFixed(1)} kg</strong></td>
                <td>${h.arm ? h.arm + ' cm' : '-'}</td>
                <td>${h.chest ? h.chest + ' cm' : '-'}</td>
                <td>${h.waist ? h.waist + ' cm' : '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="pdf-footer-note">
          <p>⚠️ <strong>Not:</strong> Bu belge CaloFit Kişisel Beslenme Portalı tarafından dijital olarak üretilmiştir. Sağlıklı kilo alma ve kalori takibi rehberidir.</p>
        </div>
      </div>
    `;
  }

  downloadPdfReport() {
    const element = document.getElementById('pdf-report-paper');
    if (!element) return;

    if (window.html2pdf) {
      this.showToastNotification('📄 PDF belgeniz hazırlanıyor ve indiriliyor...', 'fa-file-pdf');

      // Temporarily remove max-height and overflow scroll constraints for html2canvas
      const prevMaxHeight = element.style.maxHeight;
      const prevOverflow = element.style.overflow;
      element.style.maxHeight = 'none';
      element.style.overflow = 'visible';

      const dateStr = new Date().toISOString().slice(0, 10);
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `CaloFit_Beslenme_Raporu_${dateStr}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      window.html2pdf().set(opt).from(element).save().then(() => {
        element.style.maxHeight = prevMaxHeight;
        element.style.overflow = prevOverflow;
        this.showToastNotification('✅ PDF raporu başarıyla indirildi!', 'fa-circle-check');
      }).catch((err) => {
        console.error('html2pdf error, fallback to print:', err);
        element.style.maxHeight = prevMaxHeight;
        element.style.overflow = prevOverflow;
        window.print();
      });
    } else {
      window.print();
    }
  }

  // --- SMART GROCERY LIST & BUDGET PLANNER MODULE ---
  renderGroceryList() {
    const grid = document.getElementById('grocery-items-grid');
    if (!grid) return;

    const daysSelect = document.getElementById('grocery-days-select');
    const daysMultiplier = parseInt(daysSelect ? daysSelect.value : '7', 10) || 7;

    if (!this.checkedGroceryIds) {
      this.checkedGroceryIds = new Set(this.state.checkedGroceryIds || []);
    }

    const categoriesMap = {};
    let totalEstCostTL = 0;
    let totalItemsCount = 0;

    (this.groceryBaseDataset || []).forEach(item => {
      totalItemsCount++;
      const qty = item.baseQty * daysMultiplier;
      let qtyStr = '';
      if (item.unit === 'kg') {
        qtyStr = qty >= 1 ? `${qty.toFixed(1)} kg` : `${Math.round(qty * 1000)} g`;
      } else if (item.unit === 'Litre') {
        qtyStr = qty >= 1 ? `${qty.toFixed(1)} Litre` : `${Math.round(qty * 1000)} ml`;
      } else {
        qtyStr = `${Math.round(qty)} ${item.unit}`;
      }

      const cost = Math.round(qty * item.estUnitPriceTL);
      totalEstCostTL += cost;

      if (!categoriesMap[item.category]) {
        categoriesMap[item.category] = [];
      }

      categoriesMap[item.category].push({
        ...item,
        totalQtyStr: qtyStr,
        costTL: cost,
        isChecked: this.checkedGroceryIds.has(item.id)
      });
    });

    const checkedCount = this.checkedGroceryIds.size;
    const progressPct = totalItemsCount > 0 ? Math.round((checkedCount / totalItemsCount) * 100) : 0;

    // Update Stats Bar
    const elCount = document.getElementById('g-total-items-count');
    const elCost = document.getElementById('g-total-estimated-cost');
    const elProgress = document.getElementById('g-progress-status');

    if (elCount) elCount.innerText = `${totalItemsCount} Çeşit Ürün`;
    if (elCost) elCost.innerText = `~${totalEstCostTL.toLocaleString('tr-TR')} TL (${daysMultiplier} Gün)`;
    if (elProgress) elProgress.innerText = `%${progressPct} Alındı (${checkedCount}/${totalItemsCount})`;

    // Render Categorized Grid
    grid.innerHTML = Object.keys(categoriesMap).map(catName => {
      const items = categoriesMap[catName];
      return `
        <div class="grocery-category-card glass-card">
          <h4 class="g-cat-title">${catName}</h4>
          <ul class="grocery-checklist">
            ${items.map(item => `
              <li class="grocery-check-row ${item.isChecked ? 'checked' : ''}" onclick="app.toggleGroceryItem('${item.id}')">
                <div class="g-check-left">
                  <input type="checkbox" ${item.isChecked ? 'checked' : ''} onclick="event.stopPropagation(); app.toggleGroceryItem('${item.id}')">
                  <span class="g-item-name">${item.name}</span>
                </div>
                <div class="g-check-right">
                  <span class="g-item-qty">${item.totalQtyStr}</span>
                  <span class="g-item-price">~${item.costTL} TL</span>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }).join('');
  }

  toggleGroceryItem(id) {
    if (!this.checkedGroceryIds) {
      this.checkedGroceryIds = new Set(this.state.checkedGroceryIds || []);
    }

    if (this.checkedGroceryIds.has(id)) {
      this.checkedGroceryIds.delete(id);
    } else {
      this.checkedGroceryIds.add(id);
    }

    this.state.checkedGroceryIds = Array.from(this.checkedGroceryIds);
    this.saveState();
    this.renderGroceryList();
  }

  resetGroceryChecklist() {
    if (this.checkedGroceryIds) this.checkedGroceryIds.clear();
    this.state.checkedGroceryIds = [];
    this.saveState();
    this.renderGroceryList();
    this.showToastNotification('🛒 Alışveriş listenizdeki işaretler sıfırlandı.', 'fa-rotate-left');
  }

  copyGroceryListToWhatsApp() {
    const daysSelect = document.getElementById('grocery-days-select');
    const daysMultiplier = parseInt(daysSelect ? daysSelect.value : '7', 10) || 7;

    const categoriesMap = {};
    let totalEstCostTL = 0;

    (this.groceryBaseDataset || []).forEach(item => {
      const qty = item.baseQty * daysMultiplier;
      let qtyStr = '';
      if (item.unit === 'kg') {
        qtyStr = qty >= 1 ? `${qty.toFixed(1)} kg` : `${Math.round(qty * 1000)} g`;
      } else if (item.unit === 'Litre') {
        qtyStr = qty >= 1 ? `${qty.toFixed(1)} Litre` : `${Math.round(qty * 1000)} ml`;
      } else {
        qtyStr = `${Math.round(qty)} ${item.unit}`;
      }

      const cost = Math.round(qty * item.estUnitPriceTL);
      totalEstCostTL += cost;

      if (!categoriesMap[item.category]) categoriesMap[item.category] = [];
      categoriesMap[item.category].push(`[ ] ${qtyStr} ${item.name} (~${cost} TL)`);
    });

    let msg = `🛒 *CaloFit - Akıllı Market Alışveriş Listesi (${daysMultiplier} Günlük Paket)*\n\n`;

    Object.keys(categoriesMap).forEach(cat => {
      msg += `*${cat.toUpperCase()}*\n`;
      msg += categoriesMap[cat].join('\n') + '\n\n';
    });

    msg += `💰 *Tahmini Toplam Bütçe:* ~${totalEstCostTL.toLocaleString('tr-TR')} TL\n`;
    msg += `_CaloFit Kişisel Beslenme Portalı_`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(msg).then(() => {
        this.showToastNotification('📋 WhatsApp market listeniz panoya kopyalandı! (Mesaj olarak yapıştırabilirsiniz)', 'fa-brands fa-whatsapp');
      }).catch(() => {
        this.showToastNotification('📋 Market listeniz hazırlandı!', 'fa-copy');
      });
    } else {
      this.showToastNotification('📋 Market listeniz hazırlandı!', 'fa-copy');
    }
  }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new NutriGainApp();
});
