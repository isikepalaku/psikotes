import { Quiz } from '../types';
import { validateQuizAnswers, fixQuizAnswers } from './quizValidator';

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function prepareQuizQuestions(quiz: Quiz, maxQuestions?: number): Quiz {
  // First validate and fix any answer inconsistencies
  const validation = validateQuizAnswers(quiz);
  if (!validation.isValid) {
    console.warn('Quiz validation errors:', validation.errors);
    quiz = fixQuizAnswers(quiz);
  }

  const shuffledQuestions = shuffleArray(quiz.questions).map(question => {
    // Skip shuffling for personality tests (where correctAnswer is null)
    if (question.correctAnswer === null) {
      return question;
    }

    // Get the correct answer value before shuffling
    const correctAnswerValue = question.options[question.correctAnswer];

    // Shuffle the options
    const shuffledOptions = shuffleArray(question.options);

    // Find the new index of the correct answer
    const newCorrectAnswerIndex = shuffledOptions.indexOf(correctAnswerValue);

    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswerIndex
    };
  });

  const selectedQuestions = maxQuestions 
    ? shuffledQuestions.slice(0, maxQuestions)
    : shuffledQuestions;

  return {
    ...quiz,
    questions: selectedQuestions,
    timeLimit: 1800, // 30 minutes
  };
}