import React from 'react';
import { Code, Smartphone, Bot, Award, Users, Clock, Zap, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  // Initialize scroll reveal animations
  useScrollReveal('.about-title', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    origin: 'top'
  });
  
  useScrollReveal('.about-content', {
    delay: 400,
    distance: '60px',
    duration: 1200,
    origin: 'left'
  });
  
  useScrollReveal('.about-image', {
    delay: 600,
    distance: '60px',
    duration: 1200,
    origin: 'right'
  });
  
  useScrollReveal('.about-stat', {
    delay: 800,
    distance: '30px',
    duration: 800,
    origin: 'bottom',
    interval: 150
  });
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '150+', color: 'from-cyan-400 to-blue-500' },
    { icon: Smartphone, label: 'Apps Developed', value: '50+', color: 'from-purple-400 to-pink-500' },
    { icon: Bot, label: 'Automations Created', value: '200+', color: 'from-green-400 to-cyan-500' },
    { icon: Users, label: 'Happy Clients', value: '100+', color: 'from-yellow-400 to-orange-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 about-title">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that push the boundaries of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 max-w-none">
          <div className="space-y-6 about-content">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Digital Innovation
            </h3>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a full-stack developer specializing in cutting-edge web technologies, mobile applications, and intelligent automation systems. My passion lies in creating solutions that seamlessly blend functionality with futuristic design.
              </p>
              <p>
                With expertise spanning React, Node.js, React Native, and advanced automation frameworks, I help businesses transform their digital presence and streamline their operations through innovative technology solutions.
              </p>
              <p>
                My journey in software development began with a fascination for solving complex problems through elegant code. Over the years, I've evolved from building simple websites to architecting sophisticated enterprise applications that serve millions of users worldwide.
              </p>
              <p>
                What sets me apart is my holistic approach to development - I don't just write code, I craft digital experiences. Whether it's implementing AI-powered chatbots, developing real-time collaborative platforms, or creating immersive mobile applications, I ensure every project pushes the boundaries of what's possible.
              </p>
              <p>
                I'm particularly passionate about emerging technologies like machine learning integration, blockchain applications, and IoT ecosystems. My goal is to bridge the gap between cutting-edge innovation and practical business solutions, helping organizations stay ahead in an increasingly digital world.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-6 py-3 rounded-lg backdrop-blur-sm">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium">Certified Expert</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-6 py-3 rounded-lg backdrop-blur-sm">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 px-6 py-3 rounded-lg backdrop-blur-sm">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-medium">Innovation Focused</span>
              </div>
            </div>
          </div>

          <div className="relative about-image">
            <div className="relative group">
              {/* Main image container with better proportions */}
              <div className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-500">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent z-10"></div>
                
                {/* Main image */}
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Developer workspace" 
                  className="w-full h-80 lg:h-96 object-cover filter brightness-105 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-20"></div>
                
                {/* Tech badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-cyan-300 font-bold text-lg">Full Stack Developer</div>
                        <div className="text-gray-400 text-sm">Building the Future</div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group about-stat">
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;