import { CheckCircle, XCircle, ArrowRight, Send } from 'lucide-react';
import { QuestionTimer } from './QuestionTimer';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  correctAnswer: number | null;
  explanation: string;
  showExplanation: boolean;
  timeRemaining: number;
  image?: string;
  category?: string;
  onSelectAnswer: (index: number) => void;
  onSubmitAnswer: () => void;
  onTimeUp: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export function QuestionCard({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  explanation,
  showExplanation,
  timeRemaining,
  image,
  category,
  onSelectAnswer,
  onSubmitAnswer,
  onTimeUp,
  onNextQuestion,
  isLastQuestion,
}: QuestionCardProps) {
  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <QuestionTimer
          duration={60}
          timeRemaining={timeRemaining}
          onTimeUp={onTimeUp}
        />
        
        {category && (
          <motion.div
            className="mt-8 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          </motion.div>
        )}
        
        <motion.h2 
          className="font-display text-xl font-semibold mt-6 mb-4 text-gray-800 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {question}
        </motion.h2>

        {image && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img 
              src={`/images/${image}`} 
              alt="Question illustration" 
              className="w-full rounded-lg shadow-md"
            />
          </motion.div>
        )}
        
        <div className="space-y-4">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isPersonalityTest = correctAnswer === null;
            const isCorrect = !isPersonalityTest && showExplanation && correctAnswer === index;
            const isWrong = !isPersonalityTest && showExplanation && isSelected && correctAnswer !== index;

            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => !showExplanation && onSelectAnswer(index)}
                disabled={showExplanation}
                className={`w-full text-left p-5 rounded-lg transition-all duration-300
                  ${isSelected ? 'translate-x-2' : 'hover:translate-x-1'}
                  ${!showExplanation && 'hover:bg-gray-50 hover:shadow-md'}
                  ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'border border-gray-200'} 
                  ${isCorrect ? 'ring-2 ring-green-500 bg-green-50' : ''}
                  ${isWrong ? 'ring-2 ring-red-500 bg-red-50' : ''}
                  flex items-center justify-between group font-medium`}
              >
                <span className={`${isSelected ? 'font-semibold' : ''} flex-1`}>{option}</span>
                <AnimatePresence>
                  {showExplanation && !isPersonalityTest && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="ml-4"
                    >
                      {isCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                      {isWrong && <XCircle className="w-6 h-6 text-red-500" />}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {!showExplanation && selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <motion.button
              onClick={onSubmitAnswer}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg font-semibold"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Submit Jawaban</span>
              <Send className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        )}

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 space-y-6"
            >
              <motion.div 
                className="p-6 bg-blue-50 rounded-lg border border-blue-100"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display font-semibold mb-3 text-blue-900">Penjelasan:</h3>
                <p className="text-blue-800 leading-relaxed">{explanation}</p>
              </motion.div>
              
              <motion.button
                onClick={onNextQuestion}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg font-semibold"
              >
                <span>{isLastQuestion ? 'Selesai' : 'Soal Berikutnya'}</span>
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}