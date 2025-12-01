'use client';

const reasons = [
  {
    id: '1',
    icon: '🎯',
    title: 'Personalized Approach',
    description: 'Tailored solutions that match your unique needs and goals'
  },
  {
    id: '2',
    icon: '💼',
    title: 'Expert Guidance',
    description: 'Years of experience in financial planning and insurance'
  },
  {
    id: '3',
    icon: '🤝',
    title: 'Trusted Partner',
    description: 'Building long-term relationships based on trust and results'
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-20 bg-primary-green/50">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Why <span className="gradient-text">choose me?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-primary-light/20 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
