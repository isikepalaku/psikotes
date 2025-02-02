import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card } from "../components/ui/card";

const materiData = [
  {
    id: "item-1",
    title: "Pengenalan",
    content: "Selamat datang di bagian materi pembelajaran. Di sini Anda akan menemukan berbagai informasi penting yang akan membantu Anda dalam mempersiapkan diri untuk tes.",
  },
  {
    id: "item-2",
    title: "Tes Karakteristik Pribadi (TKP)",
    content: "TKP adalah tes yang mengukur karakteristik kepribadian seseorang dalam situasi kerja. Tes ini menilai bagaimana seseorang akan bereaksi dan mengambil keputusan dalam berbagai situasi kerja.",
  },
  {
    id: "item-3",
    title: "Tips Mengerjakan Soal",
    content: "1. Baca soal dengan teliti\n2. Pahami konteks situasi yang diberikan\n3. Pilih jawaban yang paling sesuai dengan nilai-nilai positif\n4. Kelola waktu dengan baik\n5. Tetap tenang dan fokus",
  },
];

const MateriPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Materi Pembelajaran</h1>
      <Card className="p-6">
        <Accordion type="single" collapsible className="w-full">
          {materiData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-lg font-semibold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
};

export default MateriPage;
