import { Quiz, Question } from '../types';

// Simple AI quiz generator (can be expanded with more sophisticated logic)
export function generateQuiz(topic: string, questionCount: number = 5): Quiz {
  // This is a placeholder implementation
  // In a real application, this would connect to an AI service
  return {
    id: `${topic}-${Date.now()}`,
    title: `Quiz about ${topic}`,
    description: `Test your knowledge about ${topic}`,
    timeLimit: questionCount * 60,
    questions: Array.from({ length: questionCount }, (_, i) => ({
      id: i + 1,
      question: `Sample question ${i + 1} about ${topic}`,
      options: [
        'Sample option 1',
        'Sample option 2',
        'Sample option 3',
        'Sample option 4'
      ],
      correctAnswer: 0,
      explanation: 'Sample explanation'
    }))
  };
}