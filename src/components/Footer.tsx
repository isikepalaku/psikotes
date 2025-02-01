export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 bg-gray-100/80 backdrop-blur-sm border-t border-gray-200">
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
          {currentYear} Project of {' '}
          <span className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Reserse Ai
          </span>
        </p>
      </div>
    </footer>
  );
}
