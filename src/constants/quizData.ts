import { Brain, Code, FileCode, Package } from 'lucide-react';
import { Quiz } from '../types';

export interface QuizWithMeta extends Quiz {
  icon: typeof Brain;
  color: string;
}

export const QUIZ_SOURCES = {
  JAVASCRIPT: 'javascript-quiz',
  REACT: 'react-quiz',
  TYPESCRIPT: 'typescript-quiz',
} as const;