import { Quiz, Question } from '../types';
import { validateQuizAnswers, fixQuizAnswers } from './quizValidator';

export function shuffleArray<T>(array: T[]): T[] {
  if (!array || array.length === 0) return [];
  
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function prepareQuizQuestions(quiz: Quiz, maxQuestions?: number): Quiz {
  if (!quiz || !quiz.questions) {
    console.warn('Invalid quiz data provided to prepareQuizQuestions');
    return quiz;
  }

  try {
    // First validate and fix any answer inconsistencies
    const validation = validateQuizAnswers(quiz);
    if (!validation.isValid) {
      console.warn('Quiz validation errors:', validation.errors);
      quiz = fixQuizAnswers(quiz);
    }

    const shuffledQuestions = shuffleArray(quiz.questions).map((question: Question) => {
      // Skip shuffling for personality tests (where correctAnswer is null)
      if (question.correctAnswer === null) {
        return question;
      }

      // Ensure options array exists
      if (!question.options || !Array.isArray(question.options)) {
        console.warn('Invalid question options:', question);
        return question;
      }

      // Get the correct answer value before shuffling
      const correctAnswerValue = question.options[question.correctAnswer];
      
      if (correctAnswerValue === undefined) {
        console.warn('Invalid correct answer index:', question);
        return question;
      }

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

    const selectedQuestions = maxQuestions && maxQuestions > 0
      ? shuffledQuestions.slice(0, Math.min(maxQuestions, shuffledQuestions.length))
      : shuffledQuestions;

    return {
      ...quiz,
      questions: selectedQuestions,
      timeLimit: quiz.timeLimit || 1800, // 30 minutes default if not set
    };
  } catch (error) {
    console.error('Error preparing quiz questions:', error);
    return quiz;
  }
}