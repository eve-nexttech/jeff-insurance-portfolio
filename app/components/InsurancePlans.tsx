'use client';

import { useState } from 'react';

const plans = [
  { id: '1', title: 'Retirement Plans', color: 'bg-teal-500' },
  { id: '2', title: 'Market Securities', color: 'bg-teal-600' },
  { id: '3', title: 'Life Education Plan', color: 'bg-yellow-500' },
  { id: '4', title: 'Personal Pension Plan', color: 'bg-white text-primary-green' },
];

export default function InsurancePlans() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-primary-green/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cards */}
          <div className="grid grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`${plan.color} rounded-3xl p-6 h-80 relative overflow-hidden cursor-pointer transition-all duration-500 ${hoveredId === plan.id ? 'scale-105 shadow-2xl' : ''
                  }`}
                onMouseEnter={() => setHoveredId(plan.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Logo/Icon at top */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-xl">🍀</span>
                </div>

                {/* Title at bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>

                  {/* Expanded content on hover */}
                  <div className={`transition-all duration-300 ${hoveredId === plan.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                    <p className="text-sm mb-3">
                      Comprehensive coverage designed to secure your financial future and protect what matters most.
                    </p>
                    <button className="text-sm underline hover:text-primary-light transition cursor-pointer">
                      Learn More →
                    </button>
                  </div>
                </div>

                {/* Background image placeholder */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-br from-transparent to-black/20"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Insurance</span>
              <br />
              Plans
            </h2>

            <p className="text-gray-300 text-lg">
              Protect your future and your loved ones with our comprehensive insurance solutions.
              From <span className="text-primary-light font-semibold">IPP, Annuities, Kubeka, Jiinue</span>,
              and <span className="text-primary-light font-semibold">Elimu Policy</span>. We offer everything
              your family will need to thrive in <span className="text-primary-light font-semibold">Overnight Whole Life Assurance.</span>
            </p>

            <button className="bg-primary-light text-primary-green px-6 py-3 rounded-full font-semibold hover:bg-white transition cursor-pointer">
              Explore All Plans →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
