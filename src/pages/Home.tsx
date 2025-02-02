import React from 'react';
import { Card } from "../components/ui/card";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Selamat Datang</h1>
      <Card className="p-6">
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            Selamat datang di aplikasi persiapan tes CPNS. Aplikasi ini dirancang untuk membantu Anda mempersiapkan diri menghadapi tes CPNS dengan materi pembelajaran, latihan soal, dan simulasi tes.
          </p>
          <p>
            Silakan pilih menu di atas untuk memulai pembelajaran Anda:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Materi - Pelajari konsep dan teori</li>
            <li>Latihan Soal - Latihan dengan soal-soal</li>
            <li>Simulasi - Uji kemampuan Anda</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default HomePage; 