/**
 * CaloFit — Goal Timeline & Weight Velocity Forecaster Component Logic
 */

export class GoalForecasterComponent {
  static calculateForecast(currentWeight, targetWeight, history = []) {
    const diffToGoal = Math.max(0, targetWeight - currentWeight);

    let weeklyRate = 0.35; // Default ideal rate
    if (history.length >= 2) {
      const firstEntry = history[0];
      const lastEntry = history[history.length - 1];
      const daysDiff = (new Date(lastEntry.date) - new Date(firstEntry.date)) / (1000 * 60 * 60 * 24);
      const weightDiff = lastEntry.weight - firstEntry.weight;
      if (daysDiff > 0 && weightDiff > 0) {
        weeklyRate = (weightDiff / daysDiff) * 7;
      }
    }

    weeklyRate = Math.max(0.1, Math.min(1.5, weeklyRate));

    const weeksNeeded = diffToGoal > 0 ? Math.ceil(diffToGoal / weeklyRate) : 0;
    const daysNeeded = weeksNeeded * 7;

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysNeeded);

    return {
      diffToGoal,
      weeklyRate,
      weeksNeeded,
      daysNeeded,
      targetDate
    };
  }
}
