import React from 'react';

interface QuizProgressProps {
  current: number;
  total: number;
  score: number;
}

export function QuizProgress({ current, total, score }: QuizProgressProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">Soal</span>
          <span className="text-lg font-bold text-blue-600">{current + 1}</span>
          <span className="text-sm font-medium text-gray-500">dari {total}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">Nilai:</span>
          <span className="text-lg font-bold text-green-600">{score}</span>
        </div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}