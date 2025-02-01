import { useNavigate } from 'react-router-dom';
import { Shield, Brain, Users } from 'lucide-react';
import { Quiz } from '../types';
import { QuizWithMeta } from '../constants/quizTypes';
import { Hero } from '../components/Hero';
import { QuizSelectionCard } from '../components/QuizSelectionCard';
import { StartAllButton } from '../components/StartAllButton';
import { prepareQuizQuestions, shuffleArray } from '../utils/quizUtils';
import { createQuizWithMeta } from '../utils/quizTypeUtils';
import twkQuiz from '../data/quiz-sources/twk-quiz.json';
import tiuQuiz from '../data/quiz-sources/tiu-quiz.json';
import tkpQuiz from '../data/quiz-sources/tkp-quiz.json';

const QUIZ_ICONS = {
  TWK: Shield,
  TIU: Brain,
  TKP: Users,
} as const;

const QUIZ_COLORS = {
  TWK: 'red',
  TIU: 'blue',
  TKP: 'green',
} as const;

export function QuizSelection() {
  const navigate = useNavigate();

  const quizzes: QuizWithMeta[] = [
    createQuizWithMeta(twkQuiz as Quiz, QUIZ_ICONS.TWK, QUIZ_COLORS.TWK),
    createQuizWithMeta(tiuQuiz as Quiz, QUIZ_ICONS.TIU, QUIZ_COLORS.TIU),
    createQuizWithMeta(tkpQuiz as Quiz, QUIZ_ICONS.TKP, QUIZ_COLORS.TKP)
  ];

  const startQuiz = (quiz: Quiz) => {
    const preparedQuiz = prepareQuizQuestions(quiz);
    localStorage.setItem('currentQuiz', JSON.stringify(preparedQuiz));
    navigate('/quiz');
  };

  const startAllQuizzes = () => {
    // Get all questions from each quiz without limiting the count
    const [twk, tiu, tkp] = quizzes.map(quiz => prepareQuizQuestions(quiz));

    // Combine all questions
    const combinedQuestions = [
      ...twk.questions,  // All TWK questions
      ...tiu.questions,  // All TIU questions
      ...tkp.questions,  // All TKP questions
    ];

    // Shuffle the combined questions
    const shuffledQuestions = shuffleArray(combinedQuestions);

    const combinedQuiz: Quiz = {
      id: 'combined',
      title: 'Simulasi CAT SKD',
      description: 'Simulasi lengkap SKD yang mencakup TWK, TIU, dan TKP',
      timeLimit: 1800, // 30 minutes
      questions: shuffledQuestions,
    };

    localStorage.setItem('currentQuiz', JSON.stringify(combinedQuiz));
    navigate('/quiz');
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {quizzes.map((quiz) => (
            <QuizSelectionCard
              key={quiz.id}
              quiz={quiz}
              onStart={() => startQuiz(quiz)}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <StartAllButton onClick={startAllQuizzes} />
        </div>
      </div>
    </div>
  );
}
