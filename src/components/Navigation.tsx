import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MoreHorizontal, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-50 flex justify-between items-center p-6 bg-black shadow-md">
      <Link to="/" className="flex items-center text-white hover:text-gray-300 transition-colors">
        <Camera className="w-10 h-10 mr-3" />
        <div className="flex flex-col">
          <span className="font-druk text-2xl font-bold tracking-tight">Dolbnev.ru</span>
          <span className="text-xs tracking-wider text-gray-300">студия видеомонтажа</span>
        </div>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-white font-druk font-bold tracking-tight">
        <Link to="/" className="hover:text-gray-300 transition-colors">Главная</Link>
        <Link to="/portfolio" className="hover:text-gray-300 transition-colors">Портфолио</Link>
        <a href="#contact" className="hover:text-gray-300 transition-colors">Контакты</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white hover:text-gray-300 transition-colors p-2"
        aria-label="Открыть меню"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MoreHorizontal className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex justify-end p-6">
          <button
            onClick={closeMobileMenu}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Закрыть меню"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 text-white font-druk font-bold tracking-tight text-lg">
          <Link 
            to="/" 
            className="hover:text-gray-300 transition-colors py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            Главная
          </Link>
          <Link 
            to="/portfolio" 
            className="hover:text-gray-300 transition-colors py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            Портфолио
          </Link>
          <a 
            href="#contact" 
            className="hover:text-gray-300 transition-colors py-2 border-b border-gray-700"
            onClick={closeMobileMenu}
          >
            Контакты
          </a>
        </div>
      </div>
    </nav>
  );
}