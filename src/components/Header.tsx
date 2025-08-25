import React from 'react';
import { Menu, X, Home, BookOpen, HelpCircle, Phone } from 'lucide-react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Boletim', icon: BookOpen, href: '#boletim' },
    { name: 'Quiz', icon: HelpCircle, href: '#quiz' },
    { name: 'Contato', icon: Phone, href: '#contato' },
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-4 border-green-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <img
                src="/public/images/ipbsg_ico (2).png"
                alt="Logo IPB"
                className="w-12 h-15 object-contain"
              />
            </div>
            <span className="text-green-800 font-bold text-xl hidden sm:block">
              Igreja Presbiteriana de Santa Gertrudes
            </span>
            <span className="text-green-800 font-bold text-lg sm:hidden">
              IPB.SG
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.href)}
                  className="flex items-center space-x-2 text-green-800 hover:text-green-600 transition-colors duration-200 font-medium"
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-800 hover:text-green-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <nav className="py-4">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleMenuClick(item.href)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-green-800 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;