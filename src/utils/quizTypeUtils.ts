import { LucideIcon } from 'lucide-react';
import { Quiz, PersonalityTrait } from '../types';
import { QuizWithMeta } from '../constants/quizTypes';

export function createQuizWithMeta(
  quiz: Quiz,
  icon: LucideIcon,
  color: string
): QuizWithMeta {
  return {
    ...quiz,
    icon,
    color,
    questions: quiz.questions.map(q => ({
      ...q,
      trait: q.trait as PersonalityTrait | undefined
    }))
  };
}
