import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Sargas</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <a href="#web-dev" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Web Development</a>
                    <a href="#mobile-dev" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mobile Development</a>
                    <a href="#support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Support & Maintenance</a>
                  </div>
                )}
              </div>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Contacts</a>
            </nav>

            {/* Clutch Rating & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <div className="text-sm">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">4.9</span>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Based on 6 Clutch reviews</div>
                </div>
              </div>
              <button className="btn-secondary">
                Book a Call
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white mobile-menu">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Sargas</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Menu</h3>
                    <div className="space-y-3">
                      <a href="#case-studies" className="block text-gray-600">Case Studies</a>
                      <a href="#blog" className="block text-gray-600">Blog</a>
                      <a href="#contacts" className="block text-gray-600">Contacts</a>
                      <a href="#about" className="block text-gray-600">About Us</a>
                      <a href="#faq" className="block text-gray-600">FAQ</a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
                    <div className="space-y-3">
                      <a href="#web-dev" className="block text-gray-600">Web Development</a>
                      <a href="#mobile-dev" className="block text-gray-600">Mobile Development</a>
                      <a href="#support" className="block text-gray-600">Support and Maintenance</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">💬</span>
                    <span className="text-sm text-gray-600">Feel free to drop us a note:</span>
                  </div>
                  <a href="mailto:contact@sargas.io" className="text-blue-600 font-medium">contact@sargas.io</a>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;