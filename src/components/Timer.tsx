import React from 'react';
import { Timer as TimerIcon, Pause } from 'lucide-react';

interface TimerProps {
  timeRemaining: number;
  isPaused?: boolean;
}

export function Timer({ timeRemaining, isPaused = false }: TimerProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      {isPaused ? (
        <Pause className="w-5 h-5 text-yellow-500" />
      ) : (
        <TimerIcon className="w-5 h-5 text-blue-600" />
      )}
      <span className={isPaused ? 'text-yellow-500' : 'text-blue-600'}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}