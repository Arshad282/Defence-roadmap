
// Adaptive Difficulty Engine
export const calculateAccuracy = (correct, total) => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

export const getNextDifficulty = (accuracy, currentDifficulty) => {
  if (accuracy > 75) {
    if (currentDifficulty === 'easy') return 'medium';
    if (currentDifficulty === 'medium') return 'hard';
    return 'hard';
  } else if (accuracy < 40) {
    if (currentDifficulty === 'hard') return 'medium';
    if (currentDifficulty === 'medium') return 'easy';
    return 'easy';
  }
  return currentDifficulty;
};

export const calculateISSBReadiness = (scores) => {
  const weights = {
    iq: 0.25, math: 0.15, english: 0.15, gk: 0.15, issb: 0.30
  };
  let total = 0;
  let weightSum = 0;
  Object.entries(scores).forEach(([key, score]) => {
    if (weights[key] !== undefined && score !== null) {
      total += score * weights[key];
      weightSum += weights[key];
    }
  });
  if (weightSum === 0) return 0;
  return Math.round(total / weightSum);
};

export const getWeakTopics = (history) => {
  const topicMap = {};
  history.forEach(item => {
    if (!topicMap[item.topic]) topicMap[item.topic] = { correct: 0, total: 0 };
    topicMap[item.topic].total++;
    if (item.correct) topicMap[item.topic].correct++;
  });
  return Object.entries(topicMap)
    .map(([topic, data]) => ({
      topic,
      accuracy: calculateAccuracy(data.correct, data.total),
      attempts: data.total
    }))
    .filter(t => t.accuracy < 60)
    .sort((a, b) => a.accuracy - b.accuracy);
};

export const getImprovementSuggestions = (weakTopics, examType) => {
  const suggestions = [];
  weakTopics.slice(0, 3).forEach(({ topic, accuracy }) => {
    if (accuracy < 30) {
      suggestions.push(`🔴 ${topic}: Critical - Review fundamentals immediately`);
    } else if (accuracy < 60) {
      suggestions.push(`🟡 ${topic}: Needs improvement - Practice more problems`);
    }
  });
  if (suggestions.length === 0) {
    suggestions.push("✅ Excellent performance! Maintain your current pace.");
  }
  return suggestions;
};

export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export const getReadinessLabel = (score) => {
  if (score >= 85) return { label: 'Excellent', color: '#00ff88', emoji: '🏆' };
  if (score >= 70) return { label: 'Good', color: '#00cfff', emoji: '⭐' };
  if (score >= 50) return { label: 'Average', color: '#ffd700', emoji: '📈' };
  if (score >= 30) return { label: 'Below Average', color: '#ff8c00', emoji: '⚠️' };
  return { label: 'Needs Work', color: '#ff4444', emoji: '🔄' };
};

export const getBranchRecommendation = (iqScore, mathScore, englishScore, gkScore) => {
  const avg = (iqScore + mathScore + englishScore + gkScore) / 4;
  if (mathScore > 80 && iqScore > 80) return { branch: 'Bangladesh Air Force', reason: 'Strong analytical and reasoning skills', emoji: '✈️' };
  if (englishScore > 75 && gkScore > 75) return { branch: 'Bangladesh Navy', reason: 'Excellent knowledge and communication', emoji: '⚓' };
  return { branch: 'Bangladesh Army', reason: 'Well-rounded performance across subjects', emoji: '🪖' };
};
