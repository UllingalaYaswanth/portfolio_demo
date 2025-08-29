import React from 'react';
import { Heart, ArrowUp, Code, Coffee, Star } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Enhanced Logo/Name */}
          <div className="mb-10">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Yaswanth Ullingala
            </h3>
            <p className="text-gray-400 text-lg">Frontend Developer & Software Engineer</p>
            <div className="flex items-center justify-center space-x-2 mt-3 text-gray-500">
              <Code className="w-4 h-4" />
              <span className="text-sm">Building the future, one line of code at a time</span>
              <Coffee className="w-4 h-4" />
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="relative">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Copyright */}
          <div className="flex flex-col lg:flex-row items-center justify-between text-gray-400 text-sm space-y-4 lg:space-y-0">
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 text-red-400 mx-2 animate-pulse" /> by Yaswanth Ullingala
            </p>
            <p className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>&copy; 2025 All rights reserved.</span>
            </p>
          </div>

          {/* Enhanced Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl text-white hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group"
          >
            <ArrowUp className="w-6 h-6 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute bottom-0 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-10 left-1/3 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </footer>
  );
};

export default Footer;