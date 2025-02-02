import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FlickeringGrid } from './ui/flickering-grid';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ShiningFavicon } from './ShiningFavicon';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (location.pathname === '/quiz') {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <ShiningFavicon />
      <FlickeringGrid
        className="fixed inset-0 z-0"
        color="#6B7280"
        maxOpacity={0.15}
        flickerChance={0.1}
      />
      <Navbar />
      <div className="relative z-10 flex flex-col flex-grow">
        <main className="container mx-auto px-4 py-8 flex-grow mb-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
