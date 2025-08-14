import React, { useEffect, useRef, ReactNode, useState, useCallback } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  animationSpeed?: 'slow' | 'normal' | 'fast';
}

const glowColorMap = {
  blue: { 
    primary: 'rgba(59, 130, 246, 0.6)',
    secondary: 'rgba(147, 197, 253, 0.4)',
    accent: 'rgba(219, 234, 254, 0.2)',
    border: 'rgba(59, 130, 246, 0.8)',
    shadow: 'rgba(59, 130, 246, 0.3)'
  },
  purple: { 
    primary: 'rgba(147, 51, 234, 0.6)',
    secondary: 'rgba(196, 181, 253, 0.4)',
    accent: 'rgba(237, 233, 254, 0.2)',
    border: 'rgba(147, 51, 234, 0.8)',
    shadow: 'rgba(147, 51, 234, 0.3)'
  },
  green: { 
    primary: 'rgba(34, 197, 94, 0.6)',
    secondary: 'rgba(134, 239, 172, 0.4)',
    accent: 'rgba(220, 252, 231, 0.2)',
    border: 'rgba(34, 197, 94, 0.8)',
    shadow: 'rgba(34, 197, 94, 0.3)'
  },
  cyan: { 
    primary: 'rgba(6, 182, 212, 0.6)',
    secondary: 'rgba(103, 232, 249, 0.4)',
    accent: 'rgba(207, 250, 254, 0.2)',
    border: 'rgba(6, 182, 212, 0.8)',
    shadow: 'rgba(6, 182, 212, 0.3)'
  },
  red: { 
    primary: 'rgba(239, 68, 68, 0.6)',
    secondary: 'rgba(252, 165, 165, 0.4)',
    accent: 'rgba(254, 226, 226, 0.2)',
    border: 'rgba(239, 68, 68, 0.8)',
    shadow: 'rgba(239, 68, 68, 0.3)'
  },
  orange: { 
    primary: 'rgba(249, 115, 22, 0.6)',
    secondary: 'rgba(251, 191, 36, 0.4)',
    accent: 'rgba(254, 243, 199, 0.2)',
    border: 'rgba(249, 115, 22, 0.8)',
    shadow: 'rgba(249, 115, 22, 0.3)'
  }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const intensityMap = {
  low: { spotlightSize: 200, borderSize: 150, glowStrength: 0.3 },
  medium: { spotlightSize: 300, borderSize: 200, glowStrength: 0.5 },
  high: { spotlightSize: 400, borderSize: 250, glowStrength: 0.7 }
};

const speedMap = {
  slow: '0.6s',
  normal: '0.3s',
  fast: '0.15s'
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
  intensity = 'medium',
  animationSpeed = 'normal'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const animationFrameRef = useRef<number>();

  const colorConfig = glowColorMap[glowColor];
  const intensityConfig = intensityMap[intensity];
  const transitionSpeed = speedMap[animationSpeed];

  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Smooth mouse tracking with requestAnimationFrame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setMousePosition({ x, y });
    });
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setCardDimensions({ width: rect.width, height: rect.height });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      updateDimensions();
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', updateMousePosition);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      // Initial dimensions
      updateDimensions();
      
      // Update dimensions on resize
      window.addEventListener('resize', updateDimensions);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', updateMousePosition);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', updateDimensions);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateMousePosition]);

  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const getInlineStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  // Main spotlight effect
  const spotlightStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: isHovered ? intensityConfig.glowStrength : 0,
    background: `
      radial-gradient(
        ${intensityConfig.spotlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px,
        ${colorConfig.primary} 0%,
        ${colorConfig.secondary} 25%,
        ${colorConfig.accent} 50%,
        transparent 70%
      )
    `,
    transition: `opacity ${transitionSpeed} cubic-bezier(0.4, 0, 0.2, 1)`,
    pointerEvents: 'none',
    zIndex: 1,
  };

  // Secondary glow layer for depth
  const secondaryGlowStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: isHovered ? intensityConfig.glowStrength * 0.6 : 0,
    background: `
      radial-gradient(
        ${intensityConfig.spotlightSize * 1.5}px circle at ${mousePosition.x}px ${mousePosition.y}px,
        ${colorConfig.accent} 0%,
        transparent 60%
      )
    `,
    transition: `opacity ${transitionSpeed} cubic-bezier(0.4, 0, 0.2, 1)`,
    pointerEvents: 'none',
    zIndex: 0,
  };

  // Animated border with gradient following mouse
  const borderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '1px',
    background: isHovered 
      ? `
          radial-gradient(
            ${intensityConfig.borderSize}px circle at ${mousePosition.x}px ${mousePosition.y}px,
            ${colorConfig.border} 0%,
            ${colorConfig.primary} 30%,
            rgba(255, 255, 255, 0.1) 70%,
            rgba(255, 255, 255, 0.05) 100%
          )
        `
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'xor',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    transition: `background ${transitionSpeed} cubic-bezier(0.4, 0, 0.2, 1)`,
    pointerEvents: 'none',
    zIndex: 3,
  };

  // Outer glow effect
  const outerGlowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    borderRadius: 'inherit',
    opacity: isHovered ? intensityConfig.glowStrength * 0.8 : 0,
    background: `
      radial-gradient(
        ${intensityConfig.spotlightSize * 0.8}px circle at ${mousePosition.x + 2}px ${mousePosition.y + 2}px,
        ${colorConfig.shadow} 0%,
        transparent 70%
      )
    `,
    filter: 'blur(8px)',
    transition: `opacity ${transitionSpeed} cubic-bezier(0.4, 0, 0.2, 1)`,
    pointerEvents: 'none',
    zIndex: -1,
  };

  // Particle effect overlay
  const particleStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: isHovered ? 0.3 : 0,
    background: `
      radial-gradient(
        1px 1px at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.9}px,
        ${colorConfig.primary} 0%,
        transparent 50%
      ),
      radial-gradient(
        1px 1px at ${mousePosition.x * 1.2}px ${mousePosition.y * 0.7}px,
        ${colorConfig.secondary} 0%,
        transparent 50%
      ),
      radial-gradient(
        1px 1px at ${mousePosition.x * 0.6}px ${mousePosition.y * 1.1}px,
        ${colorConfig.accent} 0%,
        transparent 50%
      )
    `,
    backgroundSize: '100px 100px, 80px 80px, 120px 120px',
    transition: `opacity ${transitionSpeed} ease-out`,
    pointerEvents: 'none',
    zIndex: 2,
  };

  return (
    <div
      ref={cardRef}
      className={`
        ${getSizeClasses()}
        ${!customSize ? 'aspect-[3/4]' : ''}
        rounded-2xl 
        relative 
        backdrop-blur-sm
        border-0
        bg-gray-900/60
        shadow-2xl
        transition-all
        duration-300
        transform-gpu
        hover:scale-[1.02]
        ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
        ${className}
      `}
      style={{
        ...getInlineStyles(),
        boxShadow: isHovered 
          ? `0 25px 50px -12px ${colorConfig.shadow}, 0 0 0 1px rgba(255,255,255,0.05)`
          : '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Outer glow */}
      <div style={outerGlowStyle} />
      
      {/* Border gradient */}
      <div style={borderStyle} />
      
      {/* Secondary glow layer */}
      <div style={secondaryGlowStyle} />
      
      {/* Main spotlight effect */}
      <div style={spotlightStyle} />
      
      {/* Particle overlay */}
      <div style={particleStyle} />
      
      {/* Content */}
      <div className="relative z-10 h-full p-1">
        <div className="h-full bg-gray-900/40 backdrop-blur-sm rounded-[15px] border border-white/5">
          {children}
        </div>
      </div>
    </div>
  );
};

export { SpotlightCard };