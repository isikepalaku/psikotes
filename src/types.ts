export type PersonalityTrait = 'Kepemimpinan' | 'Kedisiplinan' | 'Pengendalian Diri' | 'Integritas' | 'Kerja Sama';

export interface Question {
  id: number;
  category?: string;
  question: string;
  options: string[];
  correctAnswer: number | null;
  explanation: string;
  image?: string;
  trait?: PersonalityTrait;
  isNegative?: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeLimit: number;
  questions: Question[];
}

export interface PersonalityScores {
  kepemimpinan: number;
  kedisiplinan: number;
  pengendalianDiri: number;
  integritas: number;
  kerjaSama: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: number[];
  score: number;
  personalityScores?: PersonalityScores;
  isFinished: boolean;
  showExplanation: boolean;
}
