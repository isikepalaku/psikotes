import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = ''; // Add your Gemini API key here

const genAI = new GoogleGenerativeAI(API_KEY);

export interface GenerateQuizParams {
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questionCount: number;
}

export async function generateQuizQuestions({ topic, difficulty, questionCount }: GenerateQuizParams) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `Generate a multiple choice quiz about ${topic} with ${questionCount} questions at ${difficulty} difficulty level. 
    Format the response as a JSON array of questions with the following structure for each question:
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": number (0-3),
      "explanation": "string"
    }`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error('Error generating quiz:', error);
    throw error;
  }
}