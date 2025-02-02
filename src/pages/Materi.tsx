import React from 'react';
import ReactMarkdown from 'react-markdown';
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
    title: "Tes Verbal",
    content: `## 1. Tes Sinonim (Persamaan Kata)

Tes ini mengukur kewaspadaan, kecermatan, dan wawasan dalam menemukan kata yang memiliki makna sama atau mirip.

### Tips & Trik:
- Jangan memilih jawaban yang memiliki **bunyi mirip** dengan soal karena biasanya itu **jawaban yang salah**
- **Gunakan logika sinonim**, bukan sekadar bunyi kata
- Jika ragu, cari kata dengan makna yang lebih dekat dengan definisi umum

## 2. Tes Antonim (Lawan Kata)

Tes ini mengukur kemampuan memahami makna kata dengan mencari lawan katanya.

### Tips & Trik:
- **Identifikasi dua kata** dalam pilihan jawaban yang berlawanan
- Untuk kata-kata ilmiah atau Latin, pilih jawaban yang paling mirip dengan istilah soal
- Jangan tertukar dengan sinonim

## 3. Tes Analogi (Hubungan Kata)

Tes ini mengukur kemampuan memahami hubungan antara dua kata.

### Tips & Trik:
- **Cari hubungan spesifik** antara dua kata pertama
- Pastikan hubungan antar kata dalam pasangan logis dan berhubungan erat

## 4. Tes Kelompok Kata

Tes ini menguji kemampuan mengidentifikasi kata yang tidak sesuai dengan kelompoknya.

### Tips & Trik:
- **Cari kategori umum** dari kelompok kata
- Eliminasi yang tidak cocok dengan kategori tersebut

## Strategi Umum:

1. Jangan terjebak dengan bunyi kata yang mirip
2. Gunakan teknik eliminasi
3. Hindari overthinking
4. Pelajari kosakata baru
5. Perbanyak latihan soal`,
  },
  {
    id: "item-2",
    title: "Tes Penalaran",
    content: `## Pengenalan Tes Penalaran

Tes penalaran dalam psikotes kepolisian menguji kemampuan logika, analisis, serta kecermatan dalam menarik kesimpulan berdasarkan informasi yang diberikan. Soal-soal ini umumnya berupa cerita singkat dengan hubungan sebab-akibat yang harus dipecahkan secara logis.

## Poin-Poin Utama dalam Tes Penalaran

### 1. Menganalisis Hubungan Logis
- Setiap soal memberikan serangkaian informasi yang berkaitan
- Kandidat harus menentukan hubungan antar elemen dan menyusun pola logis

### 2. Memahami Pola Urutan dan Hierarki
- Sebagian besar soal melibatkan perbandingan (lebih besar, lebih kecil, lebih dahulu, lebih belakangan)
- Harus mampu menyusun urutan atau tingkatan dari informasi yang diberikan

### 3. Menggunakan Metode Ilustrasi atau Tabel
- Menggambar sketsa sederhana atau membuat tabel dapat membantu memahami hubungan antar elemen lebih cepat

### 4. Menarik Kesimpulan Berdasarkan Fakta
- Jawaban tidak selalu eksplisit dalam soal, sehingga perlu penalaran deduktif atau induktif

### 5. Ketelitian dalam Memilih Jawaban
- Soal seringkali memiliki jawaban jebakan (distraktor) yang mirip dengan jawaban yang benar

## Tips dan Trik Menyelesaikan Soal

### 1. Baca Soal dengan Cermat
- Jangan terburu-buru. Pahami hubungan antar informasi sebelum mencari jawaban
- Identifikasi kata kunci dalam soal, seperti "lebih besar," "sebelum," "setelah," "tidak mungkin"

### 2. Fokus dan Konsentrasi Penuh
- Hindari terpengaruh oleh pilihan jawaban sebelum memahami pola soal
- Biasakan membaca soal secara sistematis, bukan secara acak

### 3. Gunakan Teknik Visualisasi
- Buat tabel perbandingan untuk soal peringkat/urutan
- Gambarkan diagram sederhana untuk memahami relasi antar elemen

### 4. Gunakan Eliminasi Jawaban
- Jika ada jawaban yang jelas salah, langsung coret untuk mempersempit pilihan
- Fokus pada dua opsi yang paling mungkin dan analisis kembali

### 5. Berlatih dengan Soal-Soal Serupa
- Latihan soal secara rutin dapat meningkatkan kecepatan dan akurasi
- Biasakan mencari pola dalam soal-soal penalaran

## Contoh Soal dan Pembahasan

### Contoh 1: Perbandingan Penghasilan

**Soal:**
Penghasilan Ita lebih besar daripada jumlah penghasilan Bela dan Kiki. Penghasilan Bela lebih besar daripada penghasilan Kiki. Penghasilan Dina lebih besar daripada jumlah penghasilan Ita, Bela, dan Kiki.

**Pembahasan:**
- Ita (I) > Bela (B) + Kiki (K)
- Bela (B) > Kiki (K)
- Dina (D) > Ita (I) + Bela (B) + Kiki (K)

Urutan penghasilan: **D > I > B > K**

### Contoh 2: Urutan Kelulusan

**Soal:**
Hesty, Belly, Penky, dan Melly adalah mahasiswa satu angkatan.
- Hesty lulus sebelum Belly tetapi sesudah Penky
- Melly lulus sebelum Hesty

**Pembahasan:**
Urutan: **M > P > H > B**

## Kesimpulan
- Tes penalaran membutuhkan pemahaman logika yang baik
- Menggunakan ilustrasi dan tabel sangat membantu
- Latihan rutin akan meningkatkan akurasi dan kecepatan
- Fokus pada pola soal yang sering muncul`,
  },
  {
    id: "item-3",
    title: "Tes Kecermatan",
    content: `Berikut adalah materi dan penjelasan yang dapat membantu calon perwira Polri dalam memahami serta menjawab soal-soal tes kecermatan dengan mudah. Materi ini disusun dengan bahasa yang sederhana, seolah-olah kita menjelaskan kepada anak TK, agar setiap konsep dan langkah-langkahnya mudah dipahami.

---

# Materi dan Panduan Menjawab Soal Tes Kecermatan

## 1. Mengenali Deret Angka (Angka Hilang)

**Apa itu deret angka?**
Deret angka adalah urutan angka yang disusun dengan pola tertentu. Misalnya, tiap angka bisa didapat dengan cara menambahkan angka yang sama atau yang berubah secara berurutan.

**Cara mudah memahami:**

- **Perhatikan Selisihnya:**
  Misalnya, pada deret *3, 5, 9, 17, …*
  - Dari 3 ke 5: selisihnya 2
  - Dari 5 ke 9: selisihnya 4
  - Dari 9 ke 17: selisihnya 8

  Di sini, selisihnya berlipat ganda (2, 4, 8). Bayangkan kamu sedang bermain susun balok; tiap baloknya lebih tinggi dua kali lipat dari balok sebelumnya. Maka, langkah berikutnya adalah menambahkan 16 (karena 8 × 2 = 16) ke angka 17 sehingga menjadi 33.

- **Pola Perkalian atau Faktorial:**
  Contoh deret *1, 2, 6, 24, 120, …*
  Ini adalah deret faktorial, di mana:
  - 1! = 1
  - 2! = 2
  - 3! = 6
  - 4! = 24
  - 5! = 120
  - Jadi, 6! = 720

Bayangkan kamu memiliki mainan yang setiap kali kamu tambahkan satu angka, kamu mengalikan semua mainan yang sudah ada. Dengan begitu, kamu bisa mendapatkan angka berikutnya dalam deret.

---

## 2. Mengenali Urutan Huruf (Huruf Hilang)

**Apa itu urutan huruf?**
Setiap huruf memiliki posisi tertentu di dalam alfabet (A=1, B=2, …, Z=26). Dalam soal huruf hilang, kita harus mencari pola kenaikan atau penurunan angka posisi huruf.

**Cara mudah memahami:**

- **Hitung Posisi dan Selisihnya:**
  Contoh: Urutan huruf *A, D, H, M, S, …*
  - A berada di posisi 1
  - D di posisi 4 (selisih 3)
  - H di posisi 8 (selisih 4)
  - M di posisi 13 (selisih 5)
  - S di posisi 19 (selisih 6)

  Maka, langkah selanjutnya adalah menambahkan 7 ke posisi 19, menghasilkan 26. Huruf di posisi 26 adalah Z.

Bayangkan urutan huruf seperti deretan mainan yang sudah diberi nomor. Kamu tinggal melihat selisih antar nomor dan menambahkan sesuai pola yang muncul.

---

## 3. Mengenali Pola Simbol (Simbol Hilang)

**Apa itu soal simbol hilang?**
Soal ini menampilkan deretan simbol (seperti ♠, ♣, ♥, ♦, dsb.) yang memiliki pola tertentu. Polanya bisa berupa pergantian atau pengulangan secara teratur.

**Cara mudah memahami:**

- **Amati Pola Pengulangan:**
  Contoh: Urutan simbol *♠, ♣, ♥, ♦, ♠, ♣, ♥, …*
  Di sini, pola yang muncul adalah urutan empat simbol yang diulang. Jika kamu melihat urutannya, simbol keempat adalah ♦. Jadi, setelah ♠, ♣, ♥, simbol berikutnya haruslah ♦.

Bayangkan simbol-simbol itu seperti wajah emoji yang kamu lihat bergantian. Jika kamu melihat pola senyum, sedih, senyum, sedih, maka kamu tahu wajah berikutnya harus mengikuti urutan itu.

---

## 4. Soal Kombinasi Angka dan Huruf

**Apa itu soal kombinasi?**
Soal kombinasi menggabungkan pola angka dan huruf. Di sini, kamu harus memisahkan pola huruf dan pola angka, kemudian menggabungkannya untuk mendapatkan jawaban yang tepat.

**Cara mudah memahami:**

- **Pisahkan Pola Huruf dan Angka:**
  Misalnya, dalam kombinasi *Z1, X3, V6, T10, ?, P21*:
  - **Pola Huruf:** Hurufnya berkurang dua posisi setiap kali (Z, X, V, T, …). Jika Z adalah huruf ke-26, X ke-24, V ke-22, T ke-20, maka huruf berikutnya adalah 20 - 2 = 18, yaitu R.
  - **Pola Angka:** Angka-angkanya bertambah dengan pola yang berubah (selisihnya 2, 3, 4, 5, …). Dari 1 ke 3 (+2), dari 3 ke 6 (+3), dari 6 ke 10 (+4), maka langkah selanjutnya adalah menambahkan 5: 10 + 5 = 15.
  Jadi, kombinasi yang hilang adalah R15.

Bayangkan dua barisan mainan yang berjalan beriringan: satu barisan berupa huruf dan satu barisan berupa angka. Kamu harus menemukan pola di kedua barisan tersebut.

---

## 5. Langkah-langkah Umum dalam Menjawab Soal

1. **Baca Soal dengan Teliti:**
   Pastikan kamu memahami apa yang diminta dalam soal, apakah itu angka, huruf, simbol, atau kombinasi.

2. **Identifikasi Pola:**
   Carilah pola dasar. Apakah angka bertambah, berkurang, dikalikan, atau apakah huruf berpindah sesuai urutan alfabet?

3. **Tuliskan Pola:**
   Tulis pola yang kamu lihat. Misalnya, jika selisih antara angka bertambah, catat selisih tersebut.

4. **Hitung Langkah Berikutnya:**
   Setelah pola dikenali, hitung langkah selanjutnya dengan mengikuti aturan pola itu.

5. **Periksa Kembali:**
   Pastikan pola yang kamu gunakan konsisten dengan seluruh deret atau urutan dalam soal.

6. **Pilih Jawaban yang Sesuai:**
   Cocokkan hasil perhitunganmu dengan opsi jawaban yang tersedia.

---

## 6. Contoh Sederhana

**Contoh Deret Angka:**
Soal: *Tentukan angka yang hilang: 2, 4, 8, 16, ?*
- **Langkah 1:** Amati bahwa setiap angka merupakan hasil perkalian 2 dari angka sebelumnya.
- **Langkah 2:** Setelah 16, kalikan 16 dengan 2 sehingga hasilnya 32.
- **Jawaban:** 32

**Contoh Urutan Huruf:**
Soal: *Tentukan huruf yang hilang: A, D, H, M, ?*
- **Langkah 1:** Ubah huruf ke angka (A=1, D=4, H=8, M=13).
- **Langkah 2:** Selisihnya adalah +3, +4, +5. Jadi, tambahkan 6 ke 13 sehingga menjadi 19.
- **Langkah 3:** Huruf ke-19 adalah S.
- **Jawaban:** S

---

## 7. Tips Sukses Menghadapi Tes

- **Latihan Rutin:**
  Semakin sering kamu berlatih, semakin cepat otakmu mengenali pola. Cobalah mengerjakan beberapa soal latihan sebelum hari H.

- **Istirahat yang Cukup:**
  Otak yang segar akan bekerja lebih optimal. Pastikan kamu beristirahat yang cukup agar tidak mudah lelah.

- **Percaya Diri dan Tenang:**
  Jika suatu soal tampak sulit, tarik napas dalam-dalam dan coba lihat dari sudut lain. Ingat, setiap soal adalah tantangan kecil yang bisa kamu pecahkan dengan langkah-langkah sederhana.

- **Gunakan Alat Bantu Jika Perlu:**
  Kadang menuliskan angka atau huruf pada kertas kecil membantu otak menemukan pola dengan lebih mudah.

- **Bersenang-senanglah:**
  Anggaplah tes ini sebagai permainan puzzle. Semakin kamu menikmati prosesnya, semakin mudah juga pola-pola tersebut untuk dikenali.

---

Dengan memahami materi di atas, diharapkan kamu sebagai calon perwira Polri dapat lebih percaya diri dan cepat dalam mengidentifikasi pola, sehingga mampu menjawab soal dengan tepat. Selamat belajar, dan semoga sukses dalam tes!`,
  },
  {
    id: "item-4",
    title: "Tips Mengerjakan Soal",
    content: "1. Baca soal dengan teliti\n2. Pahami konteks situasi yang diberikan\n3. Pilih jawaban yang paling sesuai dengan nilai-nilai positif\n4. Kelola waktu dengan baik\n5. Tetap tenang dan fokus",
  },
];

const MateriPage: React.FC = () => {
  return (
    <div className="container mx-auto py-4 sm:py-8 px-3 sm:px-4 max-w-5xl">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Materi Pembelajaran</h1>
      <Card className="p-4 sm:p-8">
        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
          {materiData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="prose prose-sm sm:prose-lg max-w-none markdown-content px-4 sm:px-6 py-3 sm:py-4 [&>h1]:text-xl sm:[&>h1]:text-2xl [&>h2]:text-lg sm:[&>h2]:text-xl [&>h3]:text-base sm:[&>h3]:text-lg [&>p]:text-sm sm:[&>p]:text-base [&>ul]:text-sm sm:[&>ul]:text-base [&>ol]:text-sm sm:[&>ol]:text-base [&>*]:leading-relaxed [&>p]:mb-4 sm:[&>p]:mb-6 [&>ul]:space-y-2 [&>ol]:space-y-2">
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
};

export default MateriPage;
