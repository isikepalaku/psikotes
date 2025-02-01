import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizHeader } from '../components/QuizHeader';
import { QuestionCard } from '../components/QuestionCard';
import { QuizProgress } from '../components/QuizProgress';
import { QuizResult } from '../components/QuizResult';
import { ExitButton } from '../components/ExitButton';
import { ExitDialog } from '../components/ExitDialog';
import { useQuiz } from '../hooks/useQuiz';
import { Question } from '../types';

export function Quiz() {
  const navigate = useNavigate();
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [quiz] = useState(() => {
    const currentQuiz = localStorage.getItem('currentQuiz');
    if (!currentQuiz) {
      navigate('/');
      return null;
    }
    return JSON.parse(currentQuiz);
  });

  const { 
    quizState, 
    timeRemaining,
    handleAnswer,
    handleSubmitAnswer,
    handleTimeUp,
    handleNextQuestion, 
    currentQuestion, 
    isLastQuestion 
  } = useQuiz(quiz);

  if (!quiz) return null;

  const handleRetry = () => {
    localStorage.removeItem('currentQuiz');
    navigate('/');
  };

  const handleExit = () => {
    setShowExitDialog(true);
  };

  const handleConfirmExit = () => {
    localStorage.removeItem('currentQuiz');
    navigate('/');
  };

  // Explicitly type currentQuestion as Question
  const typedQuestion: Question = currentQuestion;

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-2xl flex justify-between items-center">
            <QuizHeader title={quiz.title} />
            <ExitButton onClick={handleExit} />
          </div>

          <QuizProgress
            current={quizState.currentQuestionIndex}
            total={quiz.questions.length}
            score={quizState.score}
          />

          <div className="w-full transition-all duration-300 transform">
            {!quizState.isFinished ? (
              <QuestionCard
                question={typedQuestion.question}
                options={typedQuestion.options}
                selectedAnswer={quizState.answers[quizState.currentQuestionIndex]}
                correctAnswer={typedQuestion.correctAnswer}
                explanation={typedQuestion.explanation}
                showExplanation={quizState.showExplanation}
                timeRemaining={timeRemaining}
                image={typedQuestion.image}
                category={typedQuestion.category}
                onSelectAnswer={handleAnswer}
                onSubmitAnswer={handleSubmitAnswer}
                onTimeUp={handleTimeUp}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={isLastQuestion}
              />
            ) : (
              <QuizResult
                score={quizState.score}
                personalityScores={quizState.personalityScores}
                onRetry={handleRetry}
              />
            )}
          </div>
        </div>
      </div>

      <ExitDialog
        isOpen={showExitDialog}
        onClose={() => setShowExitDialog(false)}
        onConfirm={handleConfirmExit}
      />
    </div>
  );
}
