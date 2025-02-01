export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeLimit: number;
  questions: Question[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: number[];
  score: number;
  timeRemaining: number;
  isFinished: boolean;
  showExplanation: boolean;
  isTimerPaused: boolean;
}