/** @jsxImportSource react */
import { LucideIcon } from 'lucide-react';

interface QuizCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  questionCount: number;
  duration: number;
  onClick: () => void;
}

export function QuizCard({
  title,
  description,
  icon: Icon,
  color,
  questionCount,
  duration,
  onClick
}: QuizCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full text-left group"
    >
      <div className="flex items-start gap-4 md:block">
        <Icon className={`w-10 h-10 md:w-12 md:h-12 md:mb-4 text-${color}-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} />
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className={`px-3 py-1 rounded-full bg-${color}-50 text-${color}-700`}>
              {questionCount} soal
            </span>
            <span className="text-gray-500">{duration} menit</span>
          </div>
        </div>
      </div>
    </button>
  );
}
