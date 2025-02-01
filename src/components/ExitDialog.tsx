import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ExitDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ExitDialog({ isOpen, onClose, onConfirm }: ExitDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <h2 className="text-xl font-semibold text-gray-800">Keluar dari Tes?</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Jika Anda keluar sekarang, progres tes akan hilang dan tidak dapat dipulihkan.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Lanjutkan Tes
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}