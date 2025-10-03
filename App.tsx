import React, { useState, useEffect, useCallback } from 'react';
import BirthdayWish from './components/BirthdayWish';
import SorryLetter from './components/SorryLetter';
import FloatingElement from './components/FloatingHeart';
import MouseTrail from './components/MouseTrail';

const App: React.FC = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [floatingElements, setFloatingElements] = useState<{ id: number; emoji: string }[]>([]);
  const [interactiveHearts, setInteractiveHearts] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

  useEffect(() => {
    const emojis: string[] = ['🫂', '❤️', '😘', '💋', '🫀', '🩷', '💕', '💞', '💓', '💖', '💟', '✨', '♥️', '💌'];
    
    const interval = setInterval(() => {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const newElement = { id: Date.now(), emoji };

      setFloatingElements(prev => [...prev, newElement]);
      
      setTimeout(() => {
        setFloatingElements(prev => prev.filter(el => el.id !== newElement.id));
      }, 18000);
    }, 80);
    
    return () => clearInterval(interval);
  }, []);

  const handleInteraction = useCallback((e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞', '💘'];
    
    const createHeart = (clientX: number, clientY: number) => {
      const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      const newHeart = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
        emoji: emoji,
      };
      setInteractiveHearts(prev => [...prev, newHeart]);

      setTimeout(() => {
        setInteractiveHearts(current => current.filter(h => h.id !== newHeart.id));
      }, 2000); // Animation lasts 2 seconds
    };

    if ('touches' in e) { // Touch event
        Array.from(e.touches).forEach(touch => createHeart(touch.clientX, touch.clientY));
    } else { // Mouse event
        createHeart(e.clientX, e.clientY);
    }
  }, []);

  return (
    <main 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-purple-100 flex items-center justify-center p-4 transition-colors duration-500"
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <MouseTrail />
      {floatingElements.map(el => <FloatingElement key={el.id} emoji={el.emoji} />)}
      
      {interactiveHearts.map(heart => (
        <div
          key={heart.id}
          className="interactive-heart"
          style={{
            left: heart.x,
            top: heart.y,
          }}
        >
          {heart.emoji}
        </div>
      ))}
      
      <div className="z-10 w-full transition-opacity duration-1000">
        {!showLetter ? (
          <BirthdayWish onOpenLetter={() => setShowLetter(true)} />
        ) : (
          <SorryLetter />
        )}
      </div>

      <style>{`
        .interactive-heart {
          position: fixed;
          font-size: 40px;
          text-shadow: 0 0 8px white, 0 0 15px rgba(255, 105, 180, 0.7);
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          animation: interactive-heart-animation 2s ease-out forwards;
        }

        @keyframes interactive-heart-animation {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -150px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default App;