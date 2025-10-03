import React, { useEffect, useState } from 'react';

interface BirthdayWishProps {
  onOpenLetter: () => void;
}

const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

const BirthdayWish: React.FC<BirthdayWishProps> = ({ onOpenLetter }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-2xl mx-auto text-center bg-white/50 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl shadow-pink-300/50">
        <h1 className="text-4xl sm:text-6xl font-bold text-pink-700 tracking-tight">
          Happy Birthday, My Love
        </h1>
        <p className="mt-6 text-lg text-slate-700 leading-8">
          Though miles may keep us apart, you're closer to my heart than ever.
          Today is all about celebrating the wonderful, incredible person you
          are. I wish I was there to celebrate with you.
        </p>
        <div className="mt-10">
          {/* Glowing button with white border */}
          <button
            onClick={onOpenLetter}
            className="group relative inline-flex items-center justify-center rounded-full focus:outline-none"
          >
            {/* Glow edge */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 
                             opacity-70 blur-md group-hover:opacity-100 transition duration-500"></span>

            {/* Button content with white border */}
            <span className="relative z-10 flex items-center gap-3 px-8 py-4 bg-pink-500 text-white font-semibold 
                             rounded-full shadow-lg hover:bg-pink-600 border-2 border-white 
                             transition-all duration-300 transform group-hover:scale-105">
              <EnvelopeIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[-10deg]" />
              A Letter For You 🙂
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish;
