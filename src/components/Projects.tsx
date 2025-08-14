import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Smartphone, Bot, Shield, Cpu, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  // Initialize scroll reveal animations
  useScrollReveal('.projects-title', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    origin: 'top'
  });
  
  useScrollReveal('.projects-filters', {
    delay: 400,
    distance: '30px',
    duration: 800,
    origin: 'top'
  });
  
  useScrollReveal('.project-card', {
    delay: 600,
    distance: '60px',
    duration: 1200,
    origin: 'bottom',
    interval: 200
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'CyberCommerce Platform',
      category: 'web',
      description: 'Next-gen e-commerce platform with AI-powered recommendations and blockchain payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'AI/ML', 'Blockchain'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Neural Fitness App',
      category: 'mobile',
      description: 'AI-powered fitness tracking with biometric analysis and personalized workout generation.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'TensorFlow', 'IoT', 'Cloud AI'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Quantum CRM System',
      category: 'automation',
      description: 'Advanced CRM with quantum computing algorithms for predictive customer behavior analysis.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Quantum AI', 'Python', 'Machine Learning', 'Big Data'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-cyan-600'
    },
    {
      id: 4,
      title: 'MetaVerse Real Estate',
      category: 'web',
      description: 'Virtual reality real estate platform with 3D property tours and NFT ownership certificates.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Three.js', 'WebXR', 'NFT', 'Ethereum'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Drone Delivery Network',
      category: 'mobile',
      description: 'Autonomous drone delivery system with real-time tracking and AI route optimization.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'IoT', 'AI Navigation', 'Real-time'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      id: 5,
      title: 'MetaVerse Real Estate',
      category: 'web',
      description: 'Virtual reality real estate platform with 3D property tours and NFT ownership certificates.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Three.js', 'WebXR', 'NFT', 'Ethereum'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-yellow-500 to-orange-600'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'automation', label: 'AI Systems', icon: Bot },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 projects-title">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge digital solutions that push the boundaries of technology and innovation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
            >
              <filter.icon className="w-5 h-5" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative project-card">
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
              
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a 
                        href={project.liveUrl}
                        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-lg backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;