'use client';

import Image from 'next/image';
import { useState } from 'react';

export const plans = [
  {
    id: 1,
    label: 'Greenlight Whole Life Assurance',
    title: 'Personal Pension Plan',
    description: 'An Individual Pension Plan (IPP) is a personal retirement savings plan you set up yourself, offering tax benefits and flexible investment options.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    label: 'Hakika Savings Plan',
    title: 'Personal Pension Plan',
    description: 'An Individual Pension Plan (IPP) is a personal retirement savings plan you set up yourself, offering tax benefits and flexible investment options.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    label: 'Lehio Education Plan',
    title: 'Personal Pension Plan',
    description: 'An Individual Pension Plan (IPP) is a personal retirement savings plan you set up yourself, offering tax benefits and flexible investment options.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop'
  },
  {
    id: 4,
    label: 'CMMUO',
    title: 'Personal Pension Plan',
    description: 'An Individual Pension Plan (IPP) is a personal retirement savings plan you set up yourself, offering tax benefits and flexible investment options.',
    image: 'https://images.unsplash.com/photo-1579621970563-430f63602d4b?w=400&h=500&fit=crop'
  }
];

export default function InsurancePlans() {
  const [expandedCard, setExpandedCard] = useState<number | null>(4);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);


  const isCardActive = (cardId: number) => expandedCard === cardId || focusedCard === cardId;

  return (
    <div className="py-4 px-4 sm:px-4 lg:px-6">
      <div className="max-w-full mx-auto flex flex-col-reverse lg:flex-row gap-8 container-custom">
        {/* Cards Horizontal Container */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 px-0 sm:px-4 lg:px-0 justify-start lg:justify-center scrollbar-hide">
          {plans.map((plan) => {
            const isActive = isCardActive(plan.id);

            return (
              <article
                key={plan.id}
                className={`
                  group relative rounded-3xl overflow-visible cursor-pointer 
                  transition-all duration-500 ease-in-out flex-shrink-0
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
                  ${isActive ? 'w-[300px] h-[500px] sm:w-[350px] sm:h-[500px]' : 'w-[175px] h-[500px] sm:w-[175px] sm:h-[500px]'}
                `}
                onMouseEnter={() => setExpandedCard(plan.id)}
                onMouseLeave={() => setExpandedCard(plan.id)}
                onFocus={() => setFocusedCard(plan.id)}
                onBlur={() => setFocusedCard(null)}
                tabIndex={0}
                role="region"
                aria-label={`${plan.label} - ${plan.title}`}
              >
                {/* Card Inner Container - Rounded overflow */}
                <div className="relative rounded-3xl overflow-hidden h-full">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      width={100}
                      height={100}
                      src={plan.image}
                      alt={plan.label}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/50 to-slate-950/90 z-5 group-hover:from-slate-900/10 group-hover:via-slate-900/40 group-hover:to-slate-950/80 transition-all duration-500" />

                  {/* Content Container */}
                  <div className="relative z-20 h-full flex flex-col p-0 sm:p-0">
                    {/* Content Area - Hidden/Shown on Hover */}
                    <div className="flex-1" />

                    {/* Bottom Content - Expanded State */}
                    <div
                      className={`
                        flex-shrink-0 transition-all duration-500 overflow-hidden
                        ${isActive ? 'opacity-100 max-h-80' : 'opacity-0 max-h-0'}
                      `}
                    >
                      <div className="space-y-3 sm:space-y-4 p-6 sm:p-8 bg-gradient-to-t from-slate-950/95 to-slate-950/40">
                        <div>
                          <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3 leading-tight">
                            {plan.title}
                          </h3>
                          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                            {plan.description}
                          </p>
                        </div>

                        {/* CTA Button */}
                        <button
                          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all duration-300 font-medium text-sm group/btn"
                          aria-label={`Learn more about ${plan.label}`}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fixed Label Strip - At Top */}
                <div
                  className={`
                    absolute top-0 transition-all duration-500 ease-in-out flex flex-col items-center justify-between bg-[linear-gradient(to_bottom,#009A7B,#24A656,#3CAD3E,#45B035)]
                    ${isActive
                      ? 'left-auto right-10 w-18 h-1/2 sm:h-1/2 px-2 sm:px-2 py-4 sm:py-4'
                      : 'left-1/2 -translate-x-1/2 w-18 h-2/3 sm:h-2/3 px-2 sm:px-2 py-2 sm:py-2'
                    }
                    z-30
                  `}
                >
                  {/* Logo/Badge */}
                  <Image
                    src="/images/logo.png"
                    alt="Old Mutual Logo"
                    width={150}
                    height={30}
                    className="h-10 w-16 sm:w-24 md:w-32 lg:w-36 object-contain"
                  />

                  {/* Label Text */}
                  <div className="flex-1 flex items-center justify-center">
                    {isActive ? (
                      /* Active State - Horizontal "Old Mutual" */
                      <p
                        className="text-white text-center my-2 font-bold text-md mx-2 sm:text-2xl leading-tight whitespace-normal max-w-12"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          transform: 'rotate(180deg)'
                        }}
                      >
                        Old Mutual
                      </p>
                    ) : (
                      /* Inactive State - Vertical Label */
                      <p
                        className="text-white text-center my-4 font-bold text-lg mx-4 sm:text-xl leading-tight whitespace-normal max-w-12"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          transform: 'rotate(180deg)'
                        }}
                      >
                        {plan.label}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {/* Header Section */}
        <div className="text-center lg:text-right mb-16 max-w-4xl mx-auto lg:mr-0 md:mr-">
          <h1 className="text-5xl sm:text-6xl font-normal mb-6">
            <span className="text-emerald-400">Insurance </span>
            <span className="text-white">Plans</span>
          </h1>
          <p className="text-gray-300 max-w-3xl lg:max-w-md mx-auto text-lg sm:text-lg leading-relaxed lg:text-right">
            Protect your future and your loved ones with our insurance solutions—grow your retirement with an <span className="text-white font-semibold">IPP</span>, save with <span className="text-white font-semibold">Hakika</span>, enjoy long-term savings with life cover, and secure your family with <span className="text-white font-semibold">Greenlight Whole Life Assurance</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}