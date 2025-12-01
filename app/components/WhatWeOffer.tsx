'use client';

import { ServiceCard } from '@/lib/types';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const services: ServiceCard[] = [
  { id: '1', title: 'Personal Pension Plan', icon: '👤' },
  { id: '2', title: 'Education Plan', icon: '🎓' },
  { id: '3', title: 'Savings Plan', icon: '💰' },
  { id: '4', title: 'Life Insurance', icon: '🔒' },
];

export default function WhatWeOffer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-primary-green/50" ref={ref}>
      <div className="container-custom">
        <h2 className={`text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          What we <span className="gradient-text">offer</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center card-hover cursor-pointer border border-primary-light/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
