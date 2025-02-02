import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePreventNavigation } from '../hooks/usePreventNavigation';
import { ExitDialog } from './ExitDialog';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Materi', href: '/materi' },
  { name: 'Simulasi Tes', href: '/' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    showExitDialog,
    handleNavigation,
    handleConfirmNavigation,
    handleCancelNavigation
  } = usePreventNavigation();

  const handleClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (handleNavigation(href)) {
      navigate(href);
    }
  };

  return (
    <>
      <nav className="sticky top-0 bg-gray-100/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
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
            
            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleClick(item.href, e)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="sm:hidden mt-4 pb-3 border-t border-gray-200">
              <div className="space-y-1 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleClick(item.href, e);
                    }}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <ExitDialog
        isOpen={showExitDialog}
        onClose={handleCancelNavigation}
        onConfirm={handleConfirmNavigation}
      />
    </>
  );
}; 