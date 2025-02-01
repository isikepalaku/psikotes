import { Quiz } from '../types';

const LETTER_OPTIONS = ['A', 'B', 'C', 'D'];

function convertIndexToLetter(index: number): string {
  return LETTER_OPTIONS[index];
}

function convertLetterToIndex(letter: string): number {
  return LETTER_OPTIONS.indexOf(letter.toUpperCase());
}

export function validateQuizAnswers(quiz: Quiz): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  quiz.questions.forEach((question) => {
    // Skip personality tests
    if (question.correctAnswer === null) {
      return;
    }

    // Check if correctAnswer is within valid range
    if (question.correctAnswer < 0 || question.correctAnswer >= question.options.length) {
      errors.push(`Question ${question.id}: correctAnswer index ${question.correctAnswer} is out of range`);
      return;
    }

    // Check if explanation matches the correct answer
    const correctOption = question.options[question.correctAnswer];
    const correctLetter = convertIndexToLetter(question.correctAnswer);
    
    // Check for letter reference in explanation
    const hasLetterReference = question.explanation.includes(`jawaban ${correctLetter}`) || 
                             question.explanation.includes(`opsi ${correctLetter}`) ||
                             question.explanation.includes(`pilihan ${correctLetter}`);
    
    // Check for value reference in explanation
    const hasValueReference = question.explanation.includes(correctOption);
    
    if (!hasLetterReference && !hasValueReference) {
      errors.push(
        `Question ${question.id}: Mismatch between correctAnswer (${correctOption}, option ${correctLetter}) and explanation "${question.explanation}"`
      );
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function fixQuizAnswers(quiz: Quiz): Quiz {
  const fixedQuestions = quiz.questions.map(question => {
    // Skip personality tests
    if (question.correctAnswer === null) {
      return question;
    }

    // First try to find a letter reference (A, B, C, D) in the explanation
    const letterMatch = question.explanation.match(/(?:jawaban|opsi|pilihan)\s+([A-D])/i);
    if (letterMatch) {
      const letterIndex = convertLetterToIndex(letterMatch[1]);
      if (letterIndex !== -1 && letterIndex !== question.correctAnswer) {
        console.log(
          `Fixing question ${question.id}: changing correctAnswer from ${question.correctAnswer} (${convertIndexToLetter(question.correctAnswer)}) to ${letterIndex} (${letterMatch[1]}) based on letter reference`
        );
        return {
          ...question,
          correctAnswer: letterIndex
        };
      }
    }

    // If no letter reference, try to find the value in the explanation
    const correctOptionFromExplanation = question.options.find(opt => 
      question.explanation.toLowerCase().includes(opt.toLowerCase())
    );

    if (correctOptionFromExplanation) {
      const newCorrectAnswer = question.options.indexOf(correctOptionFromExplanation);
      if (newCorrectAnswer !== question.correctAnswer) {
        console.log(
          `Fixing question ${question.id}: changing correctAnswer from ${question.correctAnswer} (${convertIndexToLetter(question.correctAnswer)}) to ${newCorrectAnswer} (${convertIndexToLetter(newCorrectAnswer)}) based on value reference`
        );
        return {
          ...question,
          correctAnswer: newCorrectAnswer
        };
      }
    }

    return question;
  });

  return {
    ...quiz,
    questions: fixedQuestions
  };
}
