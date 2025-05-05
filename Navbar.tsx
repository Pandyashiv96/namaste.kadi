import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Film, Info, Mail, MessageSquare, Instagram } from 'lucide-react';
import { Link } from '../ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Videos', path: '/videos', icon: <Film size={18} /> },
    { name: 'About Kadi', path: '/about', icon: <Info size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
    { name: 'Suggestions', path: '/suggestions', icon: <MessageSquare size={18} /> },
    { name: 'Instagram', path: '/instagram', icon: <Instagram size={18} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif tracking-wider">
              <span className="font-bold text-ochre">Namaste</span> 
              <span className="text-terracotta">Kadi</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="flex items-center gap-1 hover:text-terracotta transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-terracotta transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-beige hover:text-terracotta transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;