import { motion } from 'framer-motion';
import { PersonalityScores as PersonalityScoresType } from '../types';
import { PersonalityScores } from './PersonalityScores';

interface QuizResultProps {
  score: number;
  personalityScores?: PersonalityScoresType;
  onRetry: () => void;
}

export function QuizResult({ score, personalityScores, onRetry }: QuizResultProps) {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        {personalityScores ? (
          <PersonalityScores scores={personalityScores} />
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-6">Nilai Anda</h2>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <motion.div
                  className="w-48 h-48 rounded-full border-8 border-blue-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  <span className="text-5xl font-bold text-blue-600">{score}%</span>
                </motion.div>
              </div>
            </div>
          </>
        )}

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={onRetry}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Coba Lagi
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}