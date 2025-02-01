import React from 'react';
import { Shield } from 'lucide-react';

interface QuizHeaderProps {
  title: string;
}

export function QuizHeader({ title }: QuizHeaderProps) {
  return (
    <div className="flex items-center gap-3 text-2xl font-bold text-red-600">
      <Shield className="w-8 h-8" />
      <h1>{title}</h1>
    </div>
  );
}