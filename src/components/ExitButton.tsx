import React from 'react';
import { LogOut } from 'lucide-react';

interface ExitButtonProps {
  onClick: () => void;
}

export function ExitButton({ onClick }: ExitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span className="font-medium">Keluar</span>
    </button>
  );
}