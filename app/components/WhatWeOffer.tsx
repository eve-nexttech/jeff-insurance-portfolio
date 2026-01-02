'use client';

import React from 'react';
import { ServiceCard } from '@/lib/types';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { urlFor } from "@/lib/sanity";

interface WhatWeOfferProps {
  services: ServiceCard[];
}

export default function WhatWeOffer({ services }: WhatWeOfferProps) {
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
              key={index}
              className={`w-full h-[200px] rounded-3xl p-4 flex flex-row justify-start items-start text-center card-hover cursor-pointer border border-primary-light/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image src={urlFor(service.image).width(64).height(64).url()} alt={service.title} width={64} height={64} className="object-cover rounded-3xl" />
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
                  key={index}
                  className={`w-[250px] h-[350px] mx-auto my-8 rounded-3xl p-4 flex flex-col justify-center items-center text-center card-hover cursor-pointer border border-primary-light/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isCentered ? 'scale-115' : 'scale-100'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Image src={urlFor(service.image).width(32).height(32).url()} alt={service.title} width={32} height={32} className="object-contain rounded-full w-24 h-24" />
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
