/**
 * CaloFit — LocalStorage Persistence Service
 */

export class StorageService {
  constructor(storageKey = 'calofit_app_data_v1') {
    this.storageKey = storageKey;
  }

  loadState(defaultState) {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) return defaultState;

    try {
      const parsed = JSON.parse(saved);
      return { ...defaultState, ...parsed };
    } catch (e) {
      console.error('StorageService: Error parsing state from localStorage', e);
      return defaultState;
    }
  }

  saveState(state) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(state));
      return true;
    } catch (e) {
      console.error('StorageService: Error saving state to localStorage', e);
      return false;
    }
  }

  clearState() {
    localStorage.removeItem(this.storageKey);
  }
}
