import React, { useState, useEffect } from 'react';

const BackgroundAnimations = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, endX, endY;

      switch (side) {
        case 0: // from top
          startX = Math.random() * 100;
          startY = -10;
          endX = startX + (Math.random() - 0.5) * 30;
          endY = 110;
          break;
        case 1: // from right
          startX = 110;
          startY = Math.random() * 100;
          endX = -10;
          endY = startY + (Math.random() - 0.5) * 30;
          break;
        case 2: // from bottom
          startX = Math.random() * 100;
          startY = 110;
          endX = startX + (Math.random() - 0.5) * 30;
          endY = -10;
          break;
        case 3: // from left
          startX = -10;
          startY = Math.random() * 100;
          endX = 110;
          endY = startY + (Math.random() - 0.5) * 30;
          break;
      }

      const bubble = {
        id: Math.random(),
        startX,
        startY,
        endX,
        endY,
        size: Math.random() * 40 + 20,
        maxSize: Math.random() * 80 + 40,
        duration: Math.random() * 15 + 10, // 10-25 seconds for slow floating
        delay: Math.random() * 3,
        opacity: Math.random() * 0.4 + 0.2,
        blur: Math.random() * 1.5 + 0.5,
        createdAt: Date.now()
      };
      return bubble;
    };

    // Create initial bubbles
    const generateInitialBubbles = () => {
      const newBubbles = Array.from({ length: 30 }, createBubble);
      setBubbles(newBubbles);
    };

    generateInitialBubbles();

    // Add new bubbles periodically
    const interval = setInterval(() => {
      setBubbles(prev => {
        // Remove bubbles older than their duration
        const filtered = prev.filter(bubble => 
          Date.now() - bubble.createdAt < (bubble.duration + bubble.delay) * 1000
        );
        // Add new bubbles to maintain count
        const newBubbles = Array.from({ length: 2 }, createBubble);
        return [...filtered, ...newBubbles];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.startX}%`,
            top: `${bubble.startY}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle at 35% 35%, rgba(139, 92, 246, ${bubble.opacity}), rgba(99, 102, 241, ${bubble.opacity * 0.8}), rgba(59, 130, 246, ${bubble.opacity * 0.6}))`,
            filter: `blur(${bubble.blur}px)`,
            animation: `floatBubble ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
            boxShadow: `0 0 30px rgba(99, 102, 241, ${bubble.opacity * 0.2})`,
            '--start-x': `${bubble.startX}%`,
            '--start-y': `${bubble.startY}%`,
            '--end-x': `${bubble.endX}%`,
            '--end-y': `${bubble.endY}%`,
            '--max-size': `${bubble.maxSize}px`
          }}
        />
      ))}
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatBubble {
            0% {
              transform: translate(0, 0) scale(0.3);
              opacity: 0;
            }
            15% {
              opacity: 1;
              transform: translate(calc(var(--end-x) - var(--start-x)) * 0.15, calc(var(--end-y) - var(--start-y)) * 0.15) scale(0.6);
            }
            50% {
              transform: translate(calc(var(--end-x) - var(--start-x)) * 0.5, calc(var(--end-y) - var(--start-y)) * 0.5) scale(1);
              opacity: 1;
            }
            85% {
              transform: translate(calc(var(--end-x) - var(--start-x)) * 0.85, calc(var(--end-y) - var(--start-y)) * 0.85) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(calc(var(--end-x) - var(--start-x)), calc(var(--end-y) - var(--start-y))) scale(0.8);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  );
};

export default BackgroundAnimations;