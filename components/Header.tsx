import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ראשי', href: '#hero' },
    { name: 'אודות', href: '#about' },
    { name: 'שירותים', href: '#services' },
    { name: 'פרויקטים', href: '#portfolio' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-secondary-900' : 'text-white'}`}>
              אלעזר <span className="text-primary-500">שיפוצים</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-500 ${isScrolled ? 'text-secondary-700' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0501234567"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 flex items-center gap-2"
            >
              <Phone size={18} />
              050-1234567
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-secondary-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-secondary-800 hover:text-primary-600 hover:bg-secondary-50 rounded-md border-b border-secondary-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
             <a
              href="tel:0501234567"
              className="flex justify-center items-center w-full bg-primary-600 text-white py-3 rounded-lg font-bold"
            >
              <Phone size={18} className="ml-2" />
              חייג עכשיו
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
