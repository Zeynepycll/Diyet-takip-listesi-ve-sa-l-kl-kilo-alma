/**
 * CaloFit — Smoothie & Shake Lab Component Logic
 */

export class ShakeLabComponent {
  constructor(appInstance) {
    this.app = appInstance;
    this.selectedIngredients = [];
  }

  toggleIngredient(ingredient) {
    const index = this.selectedIngredients.findIndex(i => i.id === ingredient.id);
    if (index > -1) {
      this.selectedIngredients.splice(index, 1);
    } else {
      this.selectedIngredients.push(ingredient);
    }
    return this.calculateTotals();
  }

  calculateTotals() {
    const totalCal = this.selectedIngredients.reduce((sum, i) => sum + i.cal, 0);
    const totalProt = this.selectedIngredients.reduce((sum, i) => sum + i.prot, 0);
    const totalCarb = this.selectedIngredients.reduce((sum, i) => sum + i.carb, 0);
    const totalFat = this.selectedIngredients.reduce((sum, i) => sum + i.fat, 0);

    return {
      count: this.selectedIngredients.length,
      totalCal: Math.round(totalCal),
      totalProt: Math.round(totalProt),
      totalCarb: Math.round(totalCarb),
      totalFat: Math.round(totalFat)
    };
  }

  clear() {
    this.selectedIngredients = [];
  }
}
