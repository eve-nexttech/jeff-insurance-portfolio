'use client';

import Image from 'next/image';

interface HeroProps {
  rating?: number;
  totalReviews?: number;
}

export default function Hero({ rating = 4.8, totalReviews = 1000 }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-16 pb-20 overflow-hidden">
      {/* Decorative SVG curves in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="absolute top-0 right-0 w-1/2 h-full" viewBox="0 0 500 800">
          <path d="M250,0 Q400,200 250,400 T250,800" stroke="currentColor" fill="none" strokeWidth="2" className="text-primary-light" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
        <div className="flex flex-col items-center justify-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            {/* <div className="flex items-center space-x-2">
              <span className="text-2xl">👑</span>
              <span className="text-sm uppercase tracking-wider">Best Insurance Company</span>
            </div> */}

            <div className="flex items-center space-x-2 mt-4 px-4 py-2 rounded-full w-[400px] justify-center items-center backdrop-blur-sm border border-white/10 shadow-lg mx-auto">
              <span className="text-white text-lg">powered by</span>
              <Image
                src="/images/logo-main.png"
                alt="Jeff Muthuri Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>

            <h1 className="text-8xl lg:text-7xl font-bold leading-tight w-full text-center">
              <span><span className="gradient-text">Secure Your Future,</span>One, </span>
              <br />
              <span className="text-white">Smart Decision at a Time!</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-4xl mt-4 text-center mx-auto">
              <span>I help individuals and families choose the right insurance solutions that protect their goals,</span>
              <br />
              <span>
                safeguard their income, and ensure a secure future as their families grow.
              </span>
            </p>

            {/* <button className="bg-primary-light text-primary-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition transform hover:scale-105 cursor-pointer">
              Get Started Today →
            </button> */}
          </div>

          {/* Image Cards */}
          <div className="relative h-[500px] animate-slide-up flex items-center justify-center">
            {/* Card 1 - Handshake */}
            <img src="/images/handshake.png" alt="Handshake representing agreement and trust" className="object-cover w-96 h-96 z-10" />

            {/* Card 2 - Family */}
            <img src="/images/family.png" alt="Happy family looking forward" className="object-cover w-84 h-84 mx-[-60px]" />

            {/* Card 3 - Satisfaction Badge */}
            <img src="/images/satisfaction.png" alt="Customer satisfaction badge" className="object-cover w-96 h-96 z-10" />

            {/* Rating Badge */}
            {/* <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-lg animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green">{rating}</div>
                <div className="text-xs text-gray-600">{totalReviews} Reviews</div>
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mt-2 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
