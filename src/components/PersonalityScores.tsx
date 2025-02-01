import { motion } from 'framer-motion';
import { PersonalityScores as PersonalityScoresType } from '../types';

interface PersonalityScoresProps {
  scores: PersonalityScoresType;
}

export function PersonalityScores({ scores }: PersonalityScoresProps) {
  const traits = [
    { name: 'Kepemimpinan', score: scores.kepemimpinan, color: 'blue' },
    { name: 'Kedisiplinan', score: scores.kedisiplinan, color: 'green' },
    { name: 'Pengendalian Diri', score: scores.pengendalianDiri, color: 'purple' },
    { name: 'Integritas', score: scores.integritas, color: 'yellow' },
    { name: 'Kerja Sama', score: scores.kerjaSama, color: 'pink' },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Hasil Penilaian Kepribadian</h3>
      <div className="grid gap-6">
        {traits.map((trait, index) => (
          <motion.div
            key={trait.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-medium text-gray-700">{trait.name}</h4>
              <span className="text-lg font-semibold text-gray-800">{trait.score}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className={`h-2.5 rounded-full bg-${trait.color}-500`}
                initial={{ width: 0 }}
                animate={{ width: `${trait.score}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {getScoreDescription(trait.name, trait.score)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getScoreDescription(trait: string, score: number): string {
  if (score >= 80) {
    switch (trait) {
      case 'Kepemimpinan':
        return 'Sangat baik dalam memimpin dan mengambil inisiatif.';
      case 'Kedisiplinan':
        return 'Sangat disiplin dan patuh pada aturan.';
      case 'Pengendalian Diri':
        return 'Sangat baik dalam mengendalikan emosi dan tindakan.';
      case 'Integritas':
        return 'Memiliki integritas dan kejujuran yang sangat tinggi.';
      case 'Kerja Sama':
        return 'Sangat baik dalam bekerja sama dengan tim.';
    }
  } else if (score >= 60) {
    switch (trait) {
      case 'Kepemimpinan':
        return 'Memiliki potensi kepemimpinan yang baik.';
      case 'Kedisiplinan':
        return 'Memiliki kedisiplinan yang baik.';
      case 'Pengendalian Diri':
        return 'Mampu mengendalikan diri dengan baik.';
      case 'Integritas':
        return 'Memiliki integritas yang baik.';
      case 'Kerja Sama':
        return 'Mampu bekerja sama dengan baik.';
    }
  } else {
    switch (trait) {
      case 'Kepemimpinan':
        return 'Perlu meningkatkan kemampuan kepemimpinan.';
      case 'Kedisiplinan':
        return 'Perlu meningkatkan kedisiplinan.';
      case 'Pengendalian Diri':
        return 'Perlu meningkatkan pengendalian diri.';
      case 'Integritas':
        return 'Perlu meningkatkan integritas.';
      case 'Kerja Sama':
        return 'Perlu meningkatkan kemampuan kerja sama.';
    }
  }
  return '';
}
