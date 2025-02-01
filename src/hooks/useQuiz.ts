import { useState } from 'react';
import { Quiz, QuizState, PersonalityScores } from '../types';
import { useQuestionTimer } from './useQuestionTimer';

const QUESTION_TIME_LIMIT = 60; // 60 seconds per question

// Helper function to calculate personality scores
const calculatePersonalityScores = (questions: Quiz['questions'], answers: number[]): PersonalityScores => {
  // Initialize counters for each trait
  const traitCounts: Record<string, { total: number; count: number }> = {
    'Kepemimpinan': { total: 0, count: 0 },
    'Kedisiplinan': { total: 0, count: 0 },
    'Pengendalian Diri': { total: 0, count: 0 },
    'Integritas': { total: 0, count: 0 },
    'Kerja Sama': { total: 0, count: 0 },
  };

  // Calculate scores for each trait
  questions.forEach((question, index) => {
    if (question.trait && answers[index] !== -1) {
      // Map answer index to score (0 to 4 becomes 1 to 5)
      const rawScore = answers[index] + 1;
      
      // For positive traits: keep score as is (5 = Sangat Setuju is highest)
      // For negative traits: reverse the score (1 = Sangat Setuju becomes lowest)
      const score = question.isNegative ? (6 - rawScore) : rawScore;

      // Add to trait total
      if (question.trait in traitCounts) {
        traitCounts[question.trait].total += score;
        traitCounts[question.trait].count++;
      }
    }
  });

  // Calculate average scores and normalize to 0-100 scale
  return {
    kepemimpinan: normalizeScore(traitCounts['Kepemimpinan']),
    kedisiplinan: normalizeScore(traitCounts['Kedisiplinan']),
    pengendalianDiri: normalizeScore(traitCounts['Pengendalian Diri']),
    integritas: normalizeScore(traitCounts['Integritas']),
    kerjaSama: normalizeScore(traitCounts['Kerja Sama']),
  };
};

// Helper function to normalize scores to 0-100 scale
const normalizeScore = (scores: { total: number; count: number }): number => {
  if (scores.count === 0) return 0;
  // Convert from 1-5 scale to 0-100 scale
  return Math.round(((scores.total / scores.count) - 1) / 4 * 100);
};

// Calculate quiz score based on correct answers
const calculateQuizScore = (quiz: Quiz, answers: number[]): number => {
  // For all quizzes, calculate score out of 100
  const correctAnswers = answers.reduce((count, answer, index) => {
    return count + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
  }, 0);
  return Math.round((correctAnswers / answers.length) * 100);
};

export function useQuiz(quiz: Quiz) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: Array(quiz.questions.length).fill(-1),
    score: 0,
    personalityScores: undefined,
    isFinished: false,
    showExplanation: false,
  });

  const { timeRemaining, setTimeRemaining } = useQuestionTimer(
    QUESTION_TIME_LIMIT,
    !quizState.showExplanation
  );

  const handleAnswer = (answerIndex: number) => {
    if (!quizState.showExplanation) {
      setQuizState((prev: QuizState) => ({
        ...prev,
        answers: [
          ...prev.answers.slice(0, prev.currentQuestionIndex),
          answerIndex,
          ...prev.answers.slice(prev.currentQuestionIndex + 1),
        ],
      }));
    }
  };

  const handleSubmitAnswer = () => {
    if (!quizState.showExplanation) {
      setQuizState((prev: QuizState) => ({
        ...prev,
        showExplanation: true,
      }));
    }
  };

  const handleTimeUp = () => {
    if (!quizState.showExplanation) {
      setQuizState((prev: QuizState) => ({
        ...prev,
        showExplanation: true,
      }));
    }
  };

  const handleNextQuestion = () => {
    setQuizState((prev: QuizState) => {
      const isLastQuestion = prev.currentQuestionIndex === quiz.questions.length - 1;
      
      // Calculate scores based on quiz type
      let score = prev.score;
      let personalityScores = prev.personalityScores;

      if (isLastQuestion) {
        // Check if this is a personality test by looking for trait properties
        const hasPersonalityQuestions = quiz.questions.some(q => q.trait);
        
        if (hasPersonalityQuestions) {
          // Calculate personality scores for personality test
          personalityScores = calculatePersonalityScores(quiz.questions, prev.answers);
          score = 100; // Personality tests don't have a traditional score
        } else {
          // Calculate regular quiz score
          score = calculateQuizScore(quiz, prev.answers);
        }
      }

      return {
        ...prev,
        currentQuestionIndex: isLastQuestion ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
        showExplanation: false,
        isFinished: isLastQuestion,
        score,
        personalityScores,
      };
    });
    setTimeRemaining(QUESTION_TIME_LIMIT);
  };

  const isLastQuestion = quizState.currentQuestionIndex === quiz.questions.length - 1;

  return {
    quizState,
    timeRemaining,
    handleAnswer,
    handleSubmitAnswer,
    handleTimeUp,
    handleNextQuestion,
    currentQuestion: quiz.questions[quizState.currentQuestionIndex],
    isLastQuestion,
  };
}