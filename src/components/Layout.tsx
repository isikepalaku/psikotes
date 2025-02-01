import React from 'react';
import { FlickeringGrid } from './ui/flickering-grid';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <FlickeringGrid
        className="fixed inset-0 z-0"
        color="#6B7280"
        maxOpacity={0.15}
        flickerChance={0.1}
      />
      <nav className="sticky top-0 bg-gray-100/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="CAT POLRI Logo" 
              className="h-8 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-700 bg-clip-text text-transparent">
                PSIKOTES CALON PERWIRA
              </span>
              <span className="text-xs text-gray-500 tracking-wider font-medium">
                Simulasi Psikologi SIP 54
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative z-10 flex flex-col flex-grow">
        <main className="container mx-auto px-4 py-8 flex-grow mb-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
