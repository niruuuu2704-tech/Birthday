import React, { useState, useEffect, useCallback } from 'react';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
}

const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailParticle[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle trail creation for performance
    if (trail.length > 50) return;

    const newParticle: TrailParticle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setTrail(prev => [...prev, newParticle]);

    setTimeout(() => {
      setTrail(currentTrail => currentTrail.filter(p => p.id !== newParticle.id));
    }, 1000); // Heart lives for 1 second
  }, [trail.length]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      {trail.map(p => (
        <div
          key={p.id}
          className="mouse-trail-particle"
          style={{
            position: 'fixed',
            left: p.x,
            top: p.y,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            zIndex: 9999,
          }}
        >
          💖
        </div>
      ))}
      <style>{`
        .mouse-trail-particle {
          animation: trail-fade-out 1s ease-out forwards;
          color: #ec4899;
        }
        @keyframes trail-fade-out {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
      `}</style>
    </>
  );
};

export default MouseTrail;