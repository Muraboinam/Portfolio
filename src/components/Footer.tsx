import React from 'react';
import { Code, Github, Instagram, Mail, Youtube, Heart, Zap, Globe, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  // Initialize scroll reveal animations
  useScrollReveal('.footer-content', {
    delay: 200,
    distance: '40px',
    duration: 1000,
    origin: 'bottom'
  });

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', gradient: 'from-gray-600 to-gray-800' },
    { icon: Instagram, href: '#', label: 'Instagram', gradient: 'from-pink-600 to-purple-800' },
    { icon: Youtube, href: '#', label: 'YouTube', gradient: 'from-red-500 to-red-600' },
    { icon: Mail, href: '#', label: 'Email', gradient: 'from-purple-500 to-pink-600' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'AI Automation',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 footer-content">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Code className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Portfolio
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Full-stack specialist in cutting-edge technologies, AI automation, 
              and cybersecurity solutions. Building the future, one line of code at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`group w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Portfolio. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secured & Encrypted</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React, TypeScript & Tailwind CSS</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;