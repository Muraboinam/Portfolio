import React, { useState, useRef } from 'react';
import { ArrowDown, Github, Instagram, Twitter, Youtube } from 'lucide-react';
import Galaxy from './Galaxy';
import LightRays from './LightRays';
import TypeWriter from './TypeWriter';
import ShinyText from './ShinyText';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  // Initialize scroll reveal animations
  useScrollReveal('.hero-title', {
    delay: 300,
    distance: '60px',
    duration: 1200,
    origin: 'top'
  });
  
  useScrollReveal('.hero-subtitle', {
    delay: 500,
    distance: '40px',
    duration: 1000,
    origin: 'left'
  });
  
  useScrollReveal('.hero-cta', {
    delay: 700,
    distance: '30px',
    duration: 800,
    origin: 'bottom'
  });
  
  useScrollReveal('.hero-social', {
    delay: 900,
    distance: '20px',
    duration: 600,
    origin: 'bottom',
    interval: 100
  });
  
  useScrollReveal('.hero-image', {
    delay: 400,
    distance: '80px',
    duration: 1400,
    origin: 'right',
    scale: 0.8
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Galaxy Background */}
      <div className="absolute inset-0 w-full h-full">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.8}
          glowIntensity={0.2}
          saturation={0.1}
          hueShift={200}
          speed={0.8}
          twinkleIntensity={0.2}
          rotationSpeed={0.05}
          repulsionStrength={0}
          transparent={true}
          autoCenterRepulsion={0}
        />
      </div>

      {/* Light Rays */}
      <div className="absolute inset-0 w-full h-full hero-light-rays">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={2.0}
          rayLength={1.8}
          pulsating={true}
          fadeDistance={0.8}
          saturation={0.6}
          followMouse={false}
          mouseInfluence={0.0}
          noiseAmount={0.05}
          distortion={0.1}
        />
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 200, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 200, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-8 text-center lg:text-left order-2 lg:order-1 lg:pr-8">
            <div className="mb-8 hero-title">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 animate-pulse">
                  I Build{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-black">
                      Websites
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-lg rounded-lg opacity-75 animate-pulse"></div>
                  </span>
                  ,{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 font-black">
                      Apps
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-lg rounded-lg opacity-75 animate-pulse delay-300"></div>
                  </span>
                  {' '}&{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 font-black">
                      AI Automations
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-lg rounded-lg opacity-75 animate-pulse delay-500"></div>
                  </span>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 relative">
                  <TypeWriter
                    text="That Work for You"
                    speed={150}
                    delay={1000}
                    className=""
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-400/10 to-emerald-400/10 blur-2xl rounded-lg opacity-50"></div>
                </span>
              </h1>
            </div>

            <div className="space-y-4 mb-8 hero-subtitle">
              <p className="text-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium tracking-wide max-w-5xl mx-auto lg:mx-0">
                From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-semibold">
                  stunning websites
                </span>
                {' '}and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 font-semibold">
                  scalable mobile apps
                </span>
                {' '}to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 font-semibold">
                  powerful AI agents
                </span>
                {' '}built with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400 font-bold">
                  n8n
                </span>
                —I help businesses{' '}
                <span className="text-white font-semibold">go digital</span>,{' '}
                <span className="text-white font-semibold">automate smartly</span>, and{' '}
                <span className="text-white font-semibold">scale faster</span>.
              </p>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-4xl mx-auto lg:mx-0">
                Let's bring your idea to life with{' '}
                <span className="text-cyan-300 font-medium">clean code</span>,{' '}
                <span className="text-purple-300 font-medium">intelligent workflows</span>, and{' '}
                <span className="text-green-300 font-medium">pixel-perfect design</span>.
              </p>
            </div>

            {/* Services Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mb-12 hero-subtitle">
              <div className="group flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl backdrop-blur-sm hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
                <span className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300">💻</span>
                <span className="text-sm lg:text-lg font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                  <ShinyText text="Web Development" speed={3} className="inline" />
                </span>
              </div>
              <div className="group flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25">
                <span className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300">📱</span>
                <span className="text-sm lg:text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                  <ShinyText text="Mobile Development" speed={3} className="inline" />
                </span>
              </div>
              <div className="group flex items-center space-x-2 lg:space-x-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl backdrop-blur-sm hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-300/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25">
                <span className="text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300">🤖</span>
                <span className="text-sm lg:text-lg font-semibold text-green-300 group-hover:text-green-200 transition-colors duration-300">
                  <ShinyText text="AI Automation" speed={3} className="inline" />
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mb-12 hero-cta">
              <button 
                onClick={() => scrollToSection('projects')}
                className="relative group perspective-1000 transform hover:scale-110 transition-all duration-300"
              >
                {/* 3D Button Container */}
                <div className="relative transform-gpu transition-all duration-500 group-hover:scale-105 group-active:scale-95">
                  {/* Button Shadow/Base */}
                  <div className="absolute top-3 left-3 w-full h-full bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl blur-md opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                  
                  {/* Main Button */}
                  <div className="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 text-white px-8 py-4 rounded-2xl text-lg font-bold overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-3px] group-hover:translate-x-[-3px] group-active:translate-y-[2px] group-active:translate-x-[2px] border-2 border-emerald-400/40 group-hover:border-emerald-300/60">
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-2xl"></div>
                    
                    {/* Side highlight */}
                    <div className="absolute top-0 left-0 w-1.5 bottom-0 bg-gradient-to-b from-white/40 to-transparent rounded-l-2xl"></div>
                    
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                    
                    {/* Button text */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">🚀</span>
                      <span className="font-black tracking-wide text-sm lg:text-base">View My Work</span>
                    </span>
                    
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-125"></div>
                </div>
              </button>

              <button 
                onClick={() => scrollToSection('projects')}
                className="relative group perspective-1000 transform hover:scale-110 transition-all duration-300"
              >
                {/* 3D Button Container */}
                <div className="relative transform-gpu transition-all duration-500 group-hover:scale-105 group-active:scale-95">
                  {/* Button Shadow/Base */}
                  <div className="absolute top-3 left-3 w-full h-full bg-gradient-to-br from-purple-800 to-pink-900 rounded-2xl blur-md opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                  
                  {/* Main Button */}
                  <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-bold overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-3px] group-hover:translate-x-[-3px] group-active:translate-y-[2px] group-active:translate-x-[2px] border-2 border-purple-400/40 group-hover:border-purple-300/60">
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-2xl"></div>
                    
                    {/* Side highlight */}
                    <div className="absolute top-0 left-0 w-1.5 bottom-0 bg-gradient-to-b from-white/40 to-transparent rounded-l-2xl"></div>
                    
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                    
                    {/* Button text */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">📂</span>
                      <span className="font-black tracking-wide text-sm lg:text-base">View My Work</span>
                    </span>
                    
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-125"></div>
                </div>
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="relative group perspective-1000 transform hover:scale-110 transition-all duration-300"
              >
                {/* 3D Button Container */}
                <div className="relative transform-gpu transition-all duration-500 group-hover:scale-105 group-active:scale-95">
                  {/* Button Shadow/Base */}
                  <div className="absolute top-3 left-3 w-full h-full bg-gradient-to-br from-cyan-800 to-blue-900 rounded-2xl blur-md opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                  
                  {/* Main Button */}
                  <div className="relative bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-bold overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-3px] group-hover:translate-x-[-3px] group-active:translate-y-[2px] group-active:translate-x-[2px] border-2 border-cyan-400/40 group-hover:border-cyan-300/60">
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-2xl"></div>
                    
                    {/* Side highlight */}
                    <div className="absolute top-0 left-0 w-1.5 bottom-0 bg-gradient-to-b from-white/40 to-transparent rounded-l-2xl"></div>
                    
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                    
                    {/* Button text */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">⚡</span>
                      <span className="font-black tracking-wide text-sm lg:text-base">Contact</span>
                    </span>
                    
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-125"></div>
                </div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 hero-social">
              <a href="#" className="group w-14 h-14 border-2 border-emerald-400/50 hover:border-emerald-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:bg-emerald-400/20 hover:shadow-xl hover:shadow-emerald-400/30 hover:scale-110 backdrop-blur-sm">
                <Github className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group w-14 h-14 border-2 border-emerald-400/50 hover:border-emerald-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:bg-emerald-400/20 hover:shadow-xl hover:shadow-emerald-400/30 hover:scale-110 backdrop-blur-sm">
                <Instagram className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group w-14 h-14 border-2 border-emerald-400/50 hover:border-emerald-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:bg-emerald-400/20 hover:shadow-xl hover:shadow-emerald-400/30 hover:scale-110 backdrop-blur-sm">
                <Twitter className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group w-14 h-14 border-2 border-emerald-400/50 hover:border-emerald-400 rounded-2xl flex items-center justify-center transition-all duration-500 hover:bg-emerald-400/20 hover:shadow-xl hover:shadow-emerald-400/30 hover:scale-110 backdrop-blur-sm">
                <Youtube className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2 lg:pl-4">
            <div className="relative group hero-image">
              {/* Modern Professional Frame */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] lg:w-[22rem] lg:h-[28rem] xl:w-[26rem] xl:h-[32rem]">
                {/* Outer glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/30 via-emerald-400/30 to-teal-400/30 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
                
                {/* Main frame */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-emerald-400/40 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Subtle corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-emerald-400/60 rounded-tl-lg"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-emerald-400/60 rounded-tr-lg"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-emerald-400/60 rounded-bl-lg"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-emerald-400/60 rounded-br-lg"></div>
                  
                  {/* Subtle scanning effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ animation: 'scan 4s ease-in-out infinite' }}></div>
                  
                  {/* Profile image */}
                  <div className="relative w-full h-4/5 overflow-hidden rounded-t-3xl">
                    <img 
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Professional Developer" 
                      className="w-full h-full object-cover object-center filter brightness-105 contrast-105 group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
                    />
                    
                    {/* Subtle color overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Professional vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Clean info panel */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-gray-900/95 to-gray-800/80 backdrop-blur-sm border-t border-emerald-400/20 p-4 rounded-b-3xl">
                    <div className="flex items-center justify-between h-full">
                      <div>
                        <div className="text-emerald-300 font-bold text-base lg:text-lg">Full Stack Developer</div>
                        <div className="text-gray-400 text-xs lg:text-sm">AI & Automation Specialist</div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50"></div>
                          <span className="text-emerald-300 text-xs font-medium">AVAILABLE</span>
                        </div>
                        <div className="text-gray-500 text-xs">Ready for projects</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Minimal tech indicators */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <div className="w-4 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                    <div className="w-5 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                  </div>
                  
                  {/* Subtle performance indicator */}
                  <div className="absolute top-4 right-4 flex flex-col items-end space-y-1 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex space-x-0.5">
                      <div className="w-0.5 h-3 bg-emerald-400/60 rounded-full"></div>
                      <div className="w-0.5 h-4 bg-emerald-400/80 rounded-full"></div>
                      <div className="w-0.5 h-2 bg-emerald-400/40 rounded-full"></div>
                      <div className="w-0.5 h-3.5 bg-emerald-400/70 rounded-full"></div>
                    </div>
                    <div className="text-emerald-400 text-xs font-mono opacity-80">99%</div>
                  </div>
                </div>
                
                {/* Clean floating elements */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-sm border border-cyan-400/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                  <span className="text-cyan-300 text-lg">💻</span>
                </div>
                
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-400/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 delay-100 shadow-lg shadow-purple-500/20">
                  <span className="text-purple-300 text-lg">🤖</span>
                </div>
                
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm border border-green-400/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 delay-200 shadow-lg shadow-green-500/20">
                  <span className="text-green-300 text-lg">📱</span>
                </div>
                
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 backdrop-blur-sm border border-orange-400/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 delay-300 shadow-lg shadow-orange-500/20">
                  <span className="text-orange-300 text-lg">⚡</span>
                </div>
                
                {/* Subtle orbiting elements */}
                <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2 animate-spin-slow origin-bottom shadow-sm shadow-emerald-400/50" style={{ transformOrigin: '50% 80px' }}></div>
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 animate-spin-slow origin-bottom delay-1000 shadow-sm shadow-cyan-400/50" style={{ transformOrigin: '50% 60px', animationDirection: 'reverse' }}></div>
                  <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-purple-400 rounded-full -translate-x-1/2 animate-spin-slow origin-bottom delay-500 shadow-sm shadow-purple-400/50" style={{ transformOrigin: '50% 100px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-emerald-400 hover:text-emerald-300 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;