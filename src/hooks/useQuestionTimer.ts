import { useState, useEffect } from 'react';

export function useQuestionTimer(duration: number, isActive: boolean = true) {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    setTimeRemaining(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isActive]);

  return {
    timeRemaining,
    setTimeRemaining,
  };
}