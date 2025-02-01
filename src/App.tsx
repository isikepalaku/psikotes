import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Quiz } from './pages/Quiz';
import { AdminPage } from './pages/AdminPage';
import { QuizSelection } from './pages/QuizSelection';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Layout>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<QuizSelection />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </Layout>
        <Footer />
      </div>
    </BrowserRouter>
  );
}