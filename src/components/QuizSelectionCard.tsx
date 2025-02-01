import { motion } from 'framer-motion';
import { Clock, Play } from 'lucide-react';
import { QuizWithMeta } from '../constants/quizTypes';

interface QuizSelectionCardProps {
  quiz: QuizWithMeta;
  onStart: () => void;
}

const colorClasses = {
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    button: 'bg-red-600 hover:bg-red-700'
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700'
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    button: 'bg-green-600 hover:bg-green-700'
  }
} as const;

export function QuizSelectionCard({ quiz, onStart }: QuizSelectionCardProps) {
  const Icon = quiz.icon;
  const questionCount = quiz.questions.length;
  const durationInMinutes = Math.ceil(quiz.timeLimit / 60);
  const colors = colorClasses[quiz.color as keyof typeof colorClasses];

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{durationInMinutes} menit</span>
          </div>
          <div>•</div>
          <div>{questionCount} soal</div>
        </div>
        <button
          onClick={onStart}
          className={`w-full py-2 px-4 ${colors.button} text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}
        >
          <span>Mulai Tes</span>
          <Play className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}