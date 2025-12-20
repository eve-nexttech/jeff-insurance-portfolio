'use client';

import React from 'react';
import { ServiceCard } from '@/lib/types';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
  }, []); // Empty dependency array - services is a constant

  // Scroll to current slide
  React.useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.scrollWidth / services.length; // Actual width of one item if all were visible
      const scrollPosition = currentSlide * itemWidth - (carousel.offsetWidth / 2) + (itemWidth / 2);

      carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="container-custom">
        <h2 className={`text-4xl lg:text-5xl font-medium text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          What we offer
        </h2>

        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`w-full h-[200px] rounded-3xl p-4 flex flex-row justify-start items-start text-center card-hover cursor-pointer border border-primary-light/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image src={service.url} alt={service.title} width={64} height={64} className="object-cover rounded-3xl" />
              <div className="flex flex-col text-start mx-4 mb-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-white font-normal font-weight-regular">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for small/medium screens - Shows 3 items */}
        <div className="lg:hidden relative w-full py-12 px-4">
          <Carousel
            showArrows={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover={true}
            centerMode={true}
            centerSlidePercentage={80}
            selectedItem={currentSlide}
            onChange={(index) => setCurrentSlide(index)}
          >
            {services.map((service, index) => {
              const isCentered = index === currentSlide;
              return (
                <div
                  key={service.id}
                  className={`w-[250px] h-[350px] mx-auto my-8 rounded-3xl p-4 flex flex-col justify-center items-center text-center card-hover cursor-pointer border border-primary-light/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isCentered ? 'scale-115' : 'scale-100'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image src={service.url} alt={service.title} width={32} height={32} className="object-contain rounded-full w-24 h-24" />
                  <div className="flex flex-col text-start mx-4 my-4 items-center">
                    <h3 className="text-xl font-bold text-center">{service.title}</h3>
                    <p className="text-xs text-white font-normal font-weight-light text-center">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section >
  );
}
