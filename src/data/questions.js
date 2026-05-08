import { iqQuestions } from './iq_questions';
import { mathQuestions } from './math_questions';
import { englishQuestions } from './english_questions';
import { gkQuestions } from './gk_questions';
export { issbData as issb } from './issb_data';

export const questionBank = {
  iq: iqQuestions,
  math: mathQuestions,
  english: englishQuestions,
  gk: gkQuestions,
};

export const getAllQuestions = (types = ['iq','math','english','gk'], difficulty = null) => {
  let questions = [];
  types.forEach(type => {
    if (questionBank[type]) {
      let qs = questionBank[type];
      if (difficulty) qs = qs.filter(q => q.difficulty === difficulty);
      questions = [...questions, ...qs];
    }
  });
  return questions.sort(() => Math.random() - 0.5);
};
