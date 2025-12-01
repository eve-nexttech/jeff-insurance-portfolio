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
            <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 w-full flex justify-start pl-4 md:pl-16 lg:pl-32 xl:pl-48">
              <div className="flex flex-col items-start space-y-2 max-w-xs p-4">
                <div className="flex items-start flex-col space-x-2">
                  <Image
                    src="/images/ri_diamond-fill.png"
                    alt="Bruce Gallen Avatar"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <span className="text-sm uppercase tracking-wider text-white">Best</span>
                  <span className="text-sm uppercase tracking-wider text-white">Insurance</span>
                  <span className="text-sm uppercase tracking-wider text-white">Company</span>
                </div>
                <hr className="w-full h-px bg-white/10" />
                <div className="mt-4 flex items-center space-x-3">
                  {/* Placeholder for avatar with first letter */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-bold">
                    B
                  </div>
                  <div>
                    <p className="text-white font-semibold">Bruce Gallen</p>
                    <p className="text-gray-300 text-sm">"Excellent insurance services!"</p>
                  </div>
                </div>
              </div>
            </div>

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

          </div>
          {/* Rating Badge */}
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg animate-float">
            <div className="h-full">
              <div className="w-full flex justify-center mb-2">
                <Image
                  src="/images/mingcute_star-fill.png"
                  alt="Star icon"
                  width={48}
                  height={48}
                />
              </div>
              <div className="text-6xl font-bold text-slate-900 text-center">{rating}</div>
              <div className="text-xs text-slate-900 text-center">Reviews</div>
              <img
                src="/images/rating-image.png"
                alt="Rating icon"
                className="w-32 h-64 mx-auto my-8 object-cover"
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
