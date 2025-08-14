import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  // Initialize scroll reveal animations
  useScrollReveal('.skills-title', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    origin: 'top'
  });
  
  useScrollReveal('.skills-category', {
    delay: 400,
    distance: '60px',
    duration: 1200,
    origin: 'bottom',
    interval: 300
  });
  
  useScrollReveal('.tech-cloud-title', {
    delay: 600,
    distance: '30px',
    duration: 800,
    origin: 'top'
  });
  
  useScrollReveal('.tech-tag', {
    delay: 800,
    distance: '20px',
    duration: 600,
    origin: 'bottom',
    interval: 50
  });

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-cyan-400 to-blue-500' },
        { name: 'TypeScript', level: 92, color: 'from-blue-400 to-indigo-500' },
        { name: 'Vue.js/Nuxt.js', level: 88, color: 'from-green-400 to-emerald-500' },
        { name: 'Three.js/WebGL', level: 85, color: 'from-purple-400 to-pink-500' },
        { name: 'WebAssembly', level: 80, color: 'from-yellow-400 to-orange-500' }
      ]
    },
    {
      title: 'Server Architecture & APIs',
      skills: [
        { name: 'Node.js/Deno', level: 93, color: 'from-green-400 to-cyan-500' },
        { name: 'Python/FastAPI', level: 90, color: 'from-blue-400 to-purple-500' },
        { name: 'Rust/Go', level: 85, color: 'from-orange-400 to-red-500' },
        { name: 'Database Design', level: 88, color: 'from-yellow-400 to-orange-500' },
        { name: 'Server Architecture', level: 82, color: 'from-indigo-400 to-purple-500' }
      ]
    },
    {
      title: 'AI & Next-Gen Solutions',
      skills: [
        { name: 'Machine Learning', level: 90, color: 'from-purple-400 to-pink-500' },
        { name: 'Blockchain/Web3', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'IoT Systems', level: 82, color: 'from-green-400 to-teal-500' },
        { name: 'Quantum Computing', level: 75, color: 'from-indigo-400 to-purple-500' },
        { name: 'AR/VR Development', level: 80, color: 'from-pink-400 to-red-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0, 255, 255, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 skills-title">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Core Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expertise in modern development technologies and emerging digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group skills-category">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 w-full h-full min-h-[400px] flex flex-col">
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3 sm:mb-4 lg:mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300 truncate pr-2 flex-1">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm lg:text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold flex-shrink-0 ml-2">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-sm`}
                            style={{ width: `${skill.level}%` }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                          </div>
                        </div>
                        
                        {/* Glowing effect */}
                        <div 
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover/skill:opacity-30 blur-sm transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies Cloud */}
        <div className="mt-12 sm:mt-16 text-center w-full">
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4 sm:mb-6 lg:mb-8 tech-cloud-title">
            Technology Ecosystem
          </h3>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 px-2 sm:px-4 max-w-full">
            {[
              'GraphQL', 'Redis', 'Elasticsearch', 'TensorFlow', 'PyTorch',
              'Solidity', 'IPFS', 'WebRTC', 'Socket.io', 'Prisma',
              'Supabase', 'Vercel', 'Cloudflare', 'Stripe', 'OpenAI API',
              'Figma', 'Blender', 'Unity', 'Unreal Engine', 'Arduino'
            ].map((tech, index) => (
              <span 
                key={index}
                className="group px-2 sm:px-3 py-1 sm:py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-default tech-tag text-xs sm:text-sm whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;