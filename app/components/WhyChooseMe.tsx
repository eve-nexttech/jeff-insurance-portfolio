'use client';

import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const reasons = [
  {
    id: '1',
    image_path: '/images/image_8.png',
    title: 'Personalized Approach',
    description: 'Personalized insurance recommendations'
  },
  {
    id: '2',
    image_path: '/images/image_9.png',
    title: 'Expert Guidance',
    description: 'Access to trusted, reputable insurance provider'
  },
  {
    id: '3',
    image_path: '/images/image_10.png',
    title: 'Trusted Partner',
    description: 'A commitment to long-term client support and financial wellness'
  },
];

interface WhyChooseMeProps {
  whychooseme: {
    description: string;
    reasons: {
      image: string;
      title: string;
      description: string;
    }[];
  };
}

export default function WhyChooseMe({ whychooseme }: WhyChooseMeProps) {
  return (
    <section className="py-20 px-4 lg:px-0">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Why <span className="gradient-text">choose me?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {whychooseme.reasons && whychooseme.reasons.map((reason, index) => (
            <div
              key={index}
              className="backdrop-blur-sm rounded-3xl p-8 border border-primary-light/20 card-hover items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={urlFor(reason.image).url()}
                  alt={reason.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
