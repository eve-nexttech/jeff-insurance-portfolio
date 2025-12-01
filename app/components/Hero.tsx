'use client';

import Image from 'next/image';

interface HeroProps {
  rating?: number;
  totalReviews?: number;
}

export default function Hero({ rating = 4.8, totalReviews = 1000 }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Decorative SVG curves in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 500 800">
          <path d="M250,0 Q400,200 250,400 T250,800" stroke="currentColor" fill="none" strokeWidth="2" className="text-primary-light" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👑</span>
              <span className="text-sm uppercase tracking-wider">Best Insurance Company</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Secure Your Future,</span>
              <br />
              <span className="text-white">One Smart Decision at a Time!</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl">
              I help individuals and families choose the right insurance solutions that protect their goals,
              safeguard their income, and ensure a secure future as their families grow.
            </p>

            <button className="bg-primary-light text-primary-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition transform hover:scale-105 cursor-pointer">
              Get Started Today →
            </button>
          </div>

          {/* Image Cards */}
          <div className="relative h-[500px] animate-slide-up">
            {/* Card 1 - Handshake */}
            <div className="absolute top-0 left-0 w-64 h-48 bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-6 card-hover">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Handshake Image</span>
              </div>
            </div>

            {/* Card 2 - Family */}
            <div className="absolute top-20 right-0 w-64 h-48 bg-white rounded-3xl overflow-hidden shadow-2xl transform rotate-3 card-hover">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Family Image</span>
              </div>
            </div>

            {/* Card 3 - Purple card with badge */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-56 bg-secondary-purple rounded-3xl shadow-2xl card-hover">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <div className="text-7xl font-bold text-white mb-2">100</div>
                <div className="text-white text-sm">Individuals Ensured</div>
                <span className="text-4xl mt-4">⭐</span>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green">{rating}</div>
                <div className="text-xs text-gray-600">{totalReviews} Reviews</div>
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mt-2 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
