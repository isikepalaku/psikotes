import { Quiz } from '../types';

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function prepareQuizQuestions(quiz: Quiz, maxQuestions?: number): Quiz {
  const shuffledQuestions = shuffleArray(quiz.questions);
  const selectedQuestions = maxQuestions 
    ? shuffledQuestions.slice(0, maxQuestions)
    : shuffledQuestions;

  return {
    ...quiz,
    questions: selectedQuestions,
    timeLimit: 1800, // 30 minutes
  };
}