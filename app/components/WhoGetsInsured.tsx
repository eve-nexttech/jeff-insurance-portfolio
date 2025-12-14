'use client';

export default function WhoGetsInsured() {
  return (
    <section id="insurance" className="py-20 px-4 lg:px-0">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Who get&apos;s <span className="gradient-text">insured?</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Main image container with rounded corners */}
          <div className="relative sm:rounded-3xl sm:overflow-hidden lg:overflow-none sm:shadow-2xl md:rounded-3xl md:overflow-hidden md:shadow-2xl lg:rounded-none lg:overflow-visible lg:shadow-none">
            <img
              src="/images/whogetsInsured.png" // Placeholder image URL
              alt="Diverse group of people smiling, including families, young professionals, and seniors"
              className="w-full h-96 object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-green/60 to-transparent pointer-events-none"></div>
            {/* Info text */}
            <div className="absolute hidden md:block top-0 left-1/3 w-full max-w-2xl z-100">
              <WhoGetsInsuredInfo />
            </div>
          </div>

          {/* Decorative stars */}
          <div className="absolute -top-4 -left-4 text-yellow-400 text-2xl animate-float">⭐</div>
          <div className="absolute -bottom-4 -right-4 text-yellow-400 text-2xl animate-float" style={{ animationDelay: '1s' }}>✨</div>

          <div className="block md:hidden">
            <WhoGetsInsuredInfo />
          </div>

        </div>
      </div>
    </section>
  );
};

const WhoGetsInsuredInfo = () => {
  return (
    <div className="flex flex-row text-center max-w-2xl p-6 bg-gradient-to-r from-[#009A7B] via-[#24A656] via-[#3CAD3E] to-[#45B035]">
      <img src="/images/logo.png" alt="Company Logo" className="hidden sm:hidden md:block mx-auto mb-6 h-16 w-auto " />
      <p className="text-lg text-white mx-4">
        Our insurance plans are designed to protect you, your family, and your loved ones. Whether it&apos;s securing your retirement, saving for a child&apos;s education, or ensuring financial protection in case of life&apos;s unexpected events, we make sure the people who matter most are covered.
      </p>
    </div>
  );
};