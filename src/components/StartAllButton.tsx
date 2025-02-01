import { Shield } from 'lucide-react';

interface StartAllButtonProps {
  onClick: () => void;
}

export function StartAllButton({ onClick }: StartAllButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white px-6 md:px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <div className="flex items-center justify-center gap-3">
        <Shield className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-semibold text-base md:text-lg">Mulai Simulasi Lengkap</span>
      </div>
    </button>
  );
}