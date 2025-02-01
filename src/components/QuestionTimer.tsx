import React, { useEffect } from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface QuestionTimerProps {
  duration: number;
  timeRemaining: number;
  onTimeUp: () => void;
}

export function QuestionTimer({ duration, timeRemaining, onTimeUp }: QuestionTimerProps) {
  const progress = (timeRemaining / duration) * 100;
  
  useEffect(() => {
    if (timeRemaining === 0) {
      onTimeUp();
    }
  }, [timeRemaining, onTimeUp]);

  return (
    <div className="relative w-full">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 rounded-full ${
            timeRemaining < 10 ? 'bg-red-500' : timeRemaining < 30 ? 'bg-yellow-500' : 'bg-green-500'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute -top-6 right-0 flex items-center gap-1.5 text-sm font-medium">
        <TimerIcon className="w-4 h-4" />
        <span className={`${timeRemaining < 10 ? 'text-red-600' : 'text-gray-700'}`}>
          {timeRemaining}s
        </span>
      </div>
    </div>
  );
}