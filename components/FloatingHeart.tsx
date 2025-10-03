import React, { useEffect, useState } from 'react';

interface FloatingElementProps {
    emoji: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ emoji }) => {
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [animationKeyframes, setAnimationKeyframes] = useState('');

    useEffect(() => {
        const size = Math.random() * 2.5 + 1.5; // 1.5rem to 3.5rem
        // Constrain to prevent appearing at the very edges horizontally
        const left = Math.random() * 90 + 5; // 5vw to 95vw
        const duration = Math.random() * 5 + 7; // 7s to 12s
        const delay = Math.random() * 5; // 0s to 5s
        const animationName = `floatUp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
        
        // This makes the animation travel far enough to clear the top of the screen
        const travelDistance = `-250vh`;

        setAnimationKeyframes(`
            @keyframes ${animationName} {
                0% {
                    transform: translateY(0);
                    opacity: 0.8;
                }
                90% {
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(${travelDistance});
                    opacity: 0;
                }
            }
        `);

        setStyle({
            fontSize: `${size}rem`,
            left: `${left}vw`,
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 105, 180, 0.5)',
            // Play the animation once and keep the final state
            animation: `${animationName} ${duration}s linear ${delay}s forwards`,
        });
    }, [emoji]);

    return (
        // Start the element off-screen, set z-index to 50 to be above content, and disable pointer events
        <div className="absolute bottom-[-5rem] z-50 pointer-events-none" style={style}>
            <style>{animationKeyframes}</style>
            {emoji}
        </div>
    );
};

export default FloatingElement;
