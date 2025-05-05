import React from 'react';
import { Link } from '../ui/Link';
import { Instagram, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige/30 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Namaste Kadi</h3>
            <p className="text-gray-600 mb-4">
              Showcasing the beauty and culture of Kadi, Gujarat through aesthetic videos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/namaste.kadi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:contact@namastekadi.com" 
                className="text-gray-700 hover:text-terracotta transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-terracotta transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-terracotta transition-colors">Videos</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-terracotta transition-colors">About Kadi</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-terracotta transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/suggestions" className="hover:text-terracotta transition-colors">Suggestions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive the latest updates about Kadi.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta"
                required
              />
              <button 
                type="submit" 
                className="bg-ochre hover:bg-terracotta text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Namaste Kadi. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center mt-2 sm:mt-0">
            Made with <Heart size={14} className="mx-1 text-terracotta" /> in Kadi, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;