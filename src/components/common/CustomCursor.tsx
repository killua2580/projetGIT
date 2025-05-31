import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverEvents = () => {
      const handleLinkMouseEnter = () => setLinkHovered(true);
      const handleLinkMouseLeave = () => setLinkHovered(false);
      
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', handleLinkMouseEnter);
        el.addEventListener('mouseleave', handleLinkMouseLeave);
      });
      
      return () => {
        document.querySelectorAll('a, button').forEach(el => {
          el.removeEventListener('mouseenter', handleLinkMouseEnter);
          el.removeEventListener('mouseleave', handleLinkMouseLeave);
        });
      };
    };
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    const cleanupLinkEvents = handleLinkHoverEvents();
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cleanupLinkEvents();
    };
  }, []);
  
  if (typeof window === 'undefined') return null;
  
  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ease-out ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '60px' : '20px',
          height: linkHovered ? '60px' : '20px',
          backgroundColor: 'white',
          transform: `translate(-50%, -50%) ${linkHovered ? 'scale(2)' : 'scale(1)'}`,
          transition: 'width 0.3s, height 0.3s, transform 0.1s',
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-white mix-blend-difference transition-transform duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '40px',
          height: '40px',
          transform: 'translate(-50%, -50%)',
          transitionTimingFunction: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
        }}
      />
    </>
  );
};

export default CustomCursor;