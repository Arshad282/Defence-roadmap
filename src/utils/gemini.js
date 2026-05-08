import { GoogleGenerativeAI } from '@google/generative-ai';

const STORAGE_KEY = 'antigravity_gemini_key';

export const getApiKey = () => localStorage.getItem(STORAGE_KEY) || '';
export const setApiKey = (key) => localStorage.setItem(STORAGE_KEY, key);
export const clearApiKey = () => localStorage.removeItem(STORAGE_KEY);

const SUBJECT_PROMPTS = {
  iq: "IQ and logical reasoning (number series, pattern recognition, analogies, odd one out, spatial reasoning)",
  math: "Mathematics (algebra, arithmetic, geometry, speed-distance, percentage, word problems relevant to military scenarios)",
  english: "English language (grammar, vocabulary, sentence correction, idioms, comprehension)",
  gk: "General Knowledge focused on Bangladesh Armed Forces, Bangladesh history, international affairs, and defence knowledge",
  full: "mixed subjects: IQ reasoning, Mathematics, English, and General Knowledge about Bangladesh and Defence",
};

export const generateQuestionsWithAI = async (type, difficulty, count = 5) => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('NO_API_KEY');

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const subject = SUBJECT_PROMPTS[type] || SUBJECT_PROMPTS.full;

  const prompt = `You are an exam question generator for Bangladesh Armed Forces (Army, Navy, Air Force) candidates.

Generate exactly ${count} multiple-choice questions about ${subject} at ${difficulty} difficulty level.

STRICT RULES:
- Each question must have exactly 4 options
- Exactly 1 correct answer
- Questions must be appropriate for ${difficulty} level
- All questions must be solvable and have clear correct answers
- No repeated questions

Return ONLY a valid JSON array. No extra text, no markdown, no code blocks. Example format:
[
  {
    "type": "IQ",
    "difficulty": "${difficulty}",
    "question": "What comes next: 2, 4, 8, 16, __?",
    "options": ["24", "32", "28", "20"],
    "correct_answer": "32",
    "explanation": "Each number is doubled. 16×2=32.",
    "topic": "Number Series"
  }
]`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  // Strip markdown code fences if present
  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();

  const questions = JSON.parse(cleaned);

  // Validate and tag with unique IDs
  return questions.map((q, i) => ({
    id: `ai_${type}_${difficulty}_${Date.now()}_${i}`,
    type: q.type || type.toUpperCase(),
    difficulty: q.difficulty || difficulty,
    question: q.question,
    options: q.options,
    correct_answer: q.correct_answer,
    explanation: q.explanation || 'No explanation provided.',
    topic: q.topic || type,
    isAIGenerated: true,
  }));
};

// Try AI first, fall back to static bank
export const getSmartQuestions = async (types, difficulty, count, staticFallback) => {
  const apiKey = getApiKey();

  if (apiKey) {
    try {
      const typeStr = types.length === 1 ? types[0] : 'full';
      const aiQuestions = await generateQuestionsWithAI(typeStr, difficulty, count);
      if (aiQuestions && aiQuestions.length > 0) {
        return { questions: aiQuestions, source: 'ai' };
      }
    } catch (err) {
      if (err.message === 'NO_API_KEY') {
        // fall through to static
      } else {
        console.warn('Gemini AI failed, using static bank:', err.message);
      }
    }
  }

  // Static fallback
  const fallback = staticFallback(types, difficulty);
  return { questions: fallback.slice(0, count), source: 'static' };
};
