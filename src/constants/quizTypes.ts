import { LucideIcon } from 'lucide-react';
import { Quiz, Question } from '../types';

export interface QuizWithMeta extends Omit<Quiz, 'questions'> {
  icon: LucideIcon;
  color: string;
  questions: Question[];
}

export const QUIZ_TYPES = {
  TWK: 'twk',
  TIU: 'tiu',
  TKP: 'tkp',
} as const;