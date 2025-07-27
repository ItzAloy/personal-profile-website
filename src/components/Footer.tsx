import React from 'react';
import { Heart, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'My Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
  ];

  const services = [
    { name: 'Simple MV', href: '#services' },
    { name: 'Complex MV', href: '#services' },
    { name: 'Lyric Video', href: '#services' },
    { name: 'Custom Projects', href: '#services' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ItzAloy</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Just someone who likes making AMV. Professional video editor with 2 years of experience 
              in creating music videos, lyric animations, and visual effects using Adobe After Effects, 
              Premiere Pro, and DaVinci Resolve.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/aloykucing1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-lg hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@aloymalang"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg hover:scale-110 transition-transform"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:aloyberkarya@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg hover:scale-110 transition-transform"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Status Banner */}
        <div className="mt-8 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            <span className="text-red-300 font-medium">STATUS: CURRENTLY CLOSED FOR NEW PROJECTS</span>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ItzAloy. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" fill="currentColor" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-500 text-xs">
            <p>Please credit me as "ItzAloy" when using my work. Tag me on YouTube or add my Instagram link.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
