'use client';

import React from 'react';
import { ServiceCard } from '@/lib/types';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import Image from 'next/image';

const services: ServiceCard[] = [
  { id: '1', title: 'Personal Pension Plan', url: "/images/offerSection/PensionPlan.png", description: 'Build your retirement your way with an IPP—flexible, tax-smart, and tailored to your goals, with the option to combine all your past pension benefits for maximum growth.' },
  { id: '2', title: 'Education Plan', url: "/images/offerSection/Education.png", description: 'A long-term savings plan with built-in life cover—helping you grow your future while staying protected and financially supported in emergencies. Suitable for you or your nominated child.' },
  { id: '3', title: 'Savings Plan', url: "/images/offerSection/Savings.png", description: 'Grow your long-term savings with Hakika from just KES 3000 monthly, with flexible terms and a guaranteed lump-sum payout at the end.' },
  { id: '4', title: 'Life Insurance', url: "/images/offerSection/LifeInsurance.png", description: 'Greenlight Whole Life Assurance provides financial security for your loved ones, paying a lump sum to beneficiaries if you pass away—whether naturally or accidentally.' },
];

export default function WhatWeOffer() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [services]);

  // Scroll to current slide
  React.useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      // Calculate scroll position to center the currentSlide item
      // Assuming each item takes 1/3 of the carousel width for display
      const itemWidth = carousel.scrollWidth / services.length; // Actual width of one item if all were visible
      const scrollPosition = currentSlide * itemWidth - (carousel.offsetWidth / 2) + (itemWidth / 2);

      carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentSlide, services.length]); // Added services.length to dependency array

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="container-custom">
        <h2 className={`text-4xl lg:text-5xl font-medium text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          What we offer
        </h2>

        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl p-4 flex flex-row justify-start items-start text-center card-hover cursor-pointer border border-primary-light/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image src={service.url} alt={service.title} width={64} height={64} className="object-cover rounded-full" />
              <div className="flex flex-col text-start mx-4 mb-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-sm text-white font-normal font-weight-regular">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for small/medium screens - Shows 3 items */}
        <div className="lg:hidden relative w-full py-12">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-sm bg-primary/80 hover:bg-primary border-none text-white shadow-lg"
            aria-label="Previous slide"
          >
            ❮
          </button>

          {/* Carousel Container - Shows 3 items */}
          <div className="relative w-full overflow-hidden px-2">
            <div
              ref={carouselRef}
              className="flex items-center justify-start transition-transform duration-500 ease-out gap-3"
              style={{
                transform: `translateX(calc(50% - ${currentSlide * 33}% - ${currentSlide * 0.75}rem))`,
              }}
            >
              {services.map((service, index) => {
                const isCenterItem = index === currentSlide;

                return (
                  <div
                    key={service.id}
                    className="flex-shrink-0 transition-all duration-500 ease-out"
                    style={{
                      width: '30vw',
                      minWidth: '200px',
                      maxWidth: '280px',
                      transform: isCenterItem ? 'scale(1.25)' : 'scale(0.85)',
                      opacity: 1,
                      zIndex: isCenterItem ? 10 : 1,
                    }}
                  >
                    <div
                      className={`rounded-3xl p-4 flex flex-col justify-start items-center text-center cursor-pointer border transition-all duration-500 h-full min-h-[320px] ${isCenterItem
                        ? 'border-primary-light/40 bg-gradient-to-br from-primary/10 to-transparent shadow-xl'
                        : 'border-primary-light/20 bg-transparent opacity-60'
                        }`}
                    >
                      <Image
                        src={service.url}
                        alt={service.title}
                        width={96}
                        height={96}
                        className={`object-cover rounded-full mb-3 transition-all duration-500 ${isCenterItem ? 'w-24 h-24' : 'w-16 h-16'
                          }`}
                      />
                      <h3
                        className={`font-bold mb-2 transition-all duration-500 ${isCenterItem ? 'text-xl' : 'text-base'
                          }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-white font-normal transition-all duration-500 leading-relaxed ${isCenterItem ? 'text-sm opacity-100' : 'text-xs opacity-80'
                          }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-sm bg-primary/80 hover:bg-primary border-none text-white shadow-lg"
            aria-label="Next slide"
          >
            ❯
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center w-full py-4 gap-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setCurrentSlide(index)}
                className={`btn btn-xs transition-all duration-300 ${currentSlide === index
                  ? 'btn-primary'
                  : 'btn-outline btn-primary opacity-50 hover:opacity-100'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
