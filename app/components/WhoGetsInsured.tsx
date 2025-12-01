'use client';

export default function WhoGetsInsured() {
  return (
    <section id="insurance" className="py-20">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Who get's <span className="gradient-text">insured?</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Main image container with rounded corners */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder for diverse group photo */}
            <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-center px-4">
                Diverse Group of People Image
                <br />
                (Families, Young Professionals, Seniors)
              </span>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-green/60 to-transparent pointer-events-none"></div>
          </div>

          {/* Decorative stars */}
          <div className="absolute -top-4 -left-4 text-yellow-400 text-2xl animate-float">⭐</div>
          <div className="absolute -bottom-4 -right-4 text-yellow-400 text-2xl animate-float" style={{ animationDelay: '1s' }}>✨</div>

          {/* Info text below */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg">
              Everyone deserves financial security. Whether you're a young professional starting out,
              a parent planning for your children's education, or someone looking towards retirement,
              our insurance solutions are designed for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
