/**
 * CaloFit — Nutrition & Energy Calculator Utilities
 */

export class NutritionCalculator {
  /**
   * Calculates Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation.
   */
  static calculateBMR(gender, age, height, weight) {
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr += (gender === 'male') ? 5 : -161;
    return Math.round(bmr);
  }

  /**
   * Calculates Total Daily Energy Expenditure (TDEE) and Target Calories.
   */
  static calculateTDEE(bmr, activityMultiplier, surplusCalories = 500) {
    const tdee = Math.round(bmr * activityMultiplier);
    const targetCalories = tdee + surplusCalories;

    // Macro Split: Protein 2.0g/kg, Fat 28% of total calories, Carbs remainder
    const proteinGrams = Math.round(weight * 2.0);
    const proteinCal = proteinGrams * 4;

    const fatCal = targetCalories * 0.28;
    const fatGrams = Math.round(fatCal / 9);

    const carbCal = targetCalories - proteinCal - fatCal;
    const carbGrams = Math.round(carbCal / 4);

    return {
      tdee,
      targetCalories,
      proteinTarget: proteinGrams,
      carbTarget: carbGrams,
      fatTarget: fatGrams
    };
  }

  /**
   * Calculates estimated weeks to reach target weight.
   */
  static calculateTimeline(currentWeight, targetWeight, dailySurplus = 500) {
    const weightDiff = Math.max(0, targetWeight - currentWeight);
    const totalDays = Math.round((weightDiff * 7700) / dailySurplus);
    const weeks = Math.ceil(totalDays / 7);
    const weeklyRate = ((dailySurplus * 7) / 7700).toFixed(2);

    return {
      weightDiff,
      totalDays,
      weeks,
      weeklyRate
    };
  }
}
