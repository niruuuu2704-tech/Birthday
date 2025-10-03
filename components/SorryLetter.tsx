import React, { useEffect, useState } from 'react';

const SorryLetter: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-2xl shadow-pink-300/70 text-slate-800">
        
        {/* Section 1: Birthday Wish */}
        <section className="animate-fade-in-up animation-delay-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 border-b-2 border-pink-200 pb-3 mb-4">My Dearest Belli,</h2>
          <p className="text-lg leading-relaxed mb-4">Happy birthday, my beautiful girl. On your special day, I want to wrap you in all the love and happiness you deserve. You are the brightest star in my sky, the melody in my heart, and my greatest adventure.</p>
          <p className="text-lg leading-relaxed">Today is supposed to be the happiest day of the year—YOUR day. The day the universe blessed me by bringing you into this world. But instead of making you feel like the queen you are, I've made you cry. And that breaks my heart into a million pieces.</p>
        </section>
        
        {/* Section 2: The Apology */}
        <section className="mt-8 animate-fade-in-up animation-delay-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 border-b-2 border-pink-200 pb-3 mb-4">From the Bottom of My Heart...</h2>
          <p className="text-lg leading-relaxed mb-4">I'm writing this with tears streaming down my face because I can't believe I hurt the one person who means everything to me. You—who has loved me unconditionally for four beautiful years. You—who has never once said a cruel word to me. You—who has stood by me through everything. How could I take that pure, precious love and repay it with pain?</p>
          <p className="text-lg leading-relaxed mb-4">There are no excuses for my actions, only a deep, profound regret. I took my stress, my anger, and my frustrations, and I threw them at the safest person in my life—you. And that was so wrong. You're not my punching bag. You're my partner, my love, my everything. You deserve a love that feels safe and cherished, and I am deeply sorry for failing to provide that.</p>
          <p className="text-lg leading-relaxed">Baby, I know I've failed you. I know "sorry" feels like such a small word right now. But I need you to know that I see you. I see your tears. I see your pain. I see how deeply I've hurt you, and it's destroying me from the inside.</p>
        </section>
        
        {/* Section 4: Final Wish */}
        <section className="mt-8 animate-fade-in-up animation-delay-500">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 border-b-2 border-pink-200 pb-3 mb-4">A Wish and a Promise</h2>
          <p className="text-lg leading-relaxed mb-4">My birthday wish for you is not just a day of happiness, but a lifetime of it. And my promise to you is to spend every day trying to be the man who adds to that happiness, not subtracts from it.</p>
          <blockquote className="text-lg leading-relaxed italic border-l-4 border-pink-300 pl-4 my-6">
            "I promise you, on everything I hold sacred, that I am going to change. I am going to work on myself, control my anger, and become the man you deserve. Your love will not be wasted on me."
          </blockquote>
          <p className="text-lg leading-relaxed">I love you more than words can say. I'm sorry, and happy birthday, my everything.</p>
          <div className="text-right mt-8 pr-4">
            <p className="text-xl text-pink-600 italic">
              Forever yours,
            </p>
            <p className="text-2xl text-pink-700 italic mt-1">
              Niranjan
            </p>
          </div>
        </section>

      </div>
        <style>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
          .animation-delay-100 { animation-delay: 0.1s; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-500 { animation-delay: 0.5s; }
        `}</style>
    </div>
  );
};

export default SorryLetter;