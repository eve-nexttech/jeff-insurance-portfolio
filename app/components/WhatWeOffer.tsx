'use client';

import { ServiceCard } from '@/lib/types';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const services: ServiceCard[] = [
  { id: '1', title: 'Personal Pension Plan', url: "/images/offerSection/PensionPlan.png", description: 'Build your retirement your way with an IPP—flexible, tax-smart, and tailored to your goals, with the option to combine all your past pension benefits for maximum growth.' },
  { id: '2', title: 'Education Plan', url: "/images/offerSection/Education.png", description: 'A long-term savings plan with built-in life cover—helping you grow your future while staying protected and financially supported in emergencies. Suitable for you or your nominated child.' },
  { id: '3', title: 'Savings Plan', url: "/images/offerSection/Savings.png", description: 'Grow your long-term savings with Hakika from just KES 3000 monthly, with flexible terms and a guaranteed lump-sum payout at the end.' },
  { id: '4', title: 'Life Insurance', url: "/images/offerSection/LifeInsurance.png", description: 'Greenlight Whole Life Assurance provides financial security for your loved ones, paying a lump sum to beneficiaries if you pass away—whether naturally or accidentally.' },
];

export default function WhatWeOffer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="container-custom">
        <h2 className={`text-4xl lg:text-5xl font-medium text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          What we offer
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl p-4 flex flex-row justify-start items-satrt text-center card-hover cursor-pointer border border-primary-light/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={service.url} alt={service.title} className="w-16 h-16 object-cover rounded-full" />
              {/* column */}
              <div className="flex flex-col text-start mx-4 mb-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-sm text-white font-normal font-weight-regular">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
