import React from 'react';
import { Globe, Smartphone, Bot } from 'lucide-react';
import { SpotlightCard } from './ui/spotlight-card';
import ShinyText from './ShinyText';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  // Initialize scroll reveal animations
  useScrollReveal('.services-title', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    origin: 'top'
  });
  
  useScrollReveal('.service-card', {
    delay: 400,
    distance: '60px',
    duration: 1200,
    origin: 'bottom',
    interval: 200
  });
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Cutting-edge web applications built with modern frameworks and futuristic design principles.',
      features: ['Responsive Design', 'Performance Optimized', 'SEO Enhanced', 'Progressive Web Apps'],
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan',
      intensity: 'high'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications with seamless user experiences.',
      features: ['Cross-Platform', 'Native Performance', 'Cloud Integration', 'Real-time Features'],
      gradient: 'from-purple-500 to-pink-600',
      glowColor: 'purple',
      intensity: 'high'
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent workflow automation and AI-powered solutions for business optimization.',
      features: ['Smart Workflows', 'AI Integration', 'Process Automation', 'Data Analytics'],
      gradient: 'from-green-500 to-cyan-600',
      glowColor: 'green',
      intensity: 'high'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 services-title">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions powered by cutting-edge technology and innovative design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SpotlightCard 
              key={index}
              glowColor={service.glowColor}
              intensity={service.intensity}
              animationSpeed="normal"
              customSize={true}
              className="group w-full h-auto min-h-[450px] service-card"
            >
              <div className="flex flex-col h-full p-8 relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.1) 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}></div>
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 relative z-10">
                  <ShinyText text={service.title} speed={4} />
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-3 relative z-10 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-1">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:shadow-sm group-hover:shadow-cyan-400/50 transition-all duration-300 group-hover:scale-125`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <div className="w-3 h-3 border-2 border-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;