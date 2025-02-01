import { useState } from 'react';
import { Lock } from 'lucide-react';
import { generateQuizQuestions, GenerateQuizParams } from '../services/gemini';
import { useNavigate } from 'react-router-dom';

export function AdminPage() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [questionCount, setQuestionCount] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setError('');
      const params: GenerateQuizParams = { topic, difficulty, questionCount };
      const questions = await generateQuizQuestions(params);
      
      const quiz = {
        id: `${topic}-${Date.now()}`,
        title: `${topic} Quiz`,
        description: `Test your knowledge about ${topic}`,
        timeLimit: questionCount * 60,
        questions
      };
      
      const existingQuizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
      localStorage.setItem('quizzes', JSON.stringify([...existingQuizzes, quiz]));
      
      // Redirect to the quiz page immediately
      navigate('/', { replace: true });
    } catch (err) {
      setError('Failed to generate quiz. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-5 h-5 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Quiz Generator</h1>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., JavaScript Basics"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Questions
              </label>
              <input
                type="number"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                min="1"
                max="20"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !topic}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Generate Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}