'use client';

export default function MeetAdvisor() {
  return (
    <section className="py-20 relative overflow-hidden px-4 lg:px-0">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="200" height="600" viewBox="0 0 200 600">
          <path d="M100,0 Q150,150 100,300 T100,600" stroke="currentColor" fill="none" strokeWidth="2" className="text-primary-light" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10 shadow-lg">
              *About me
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold">
              Meet Your <span className="gradient-text">Financial Advisor</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a licensed insurance broker dedicated to guiding you through the best financial and
              protection plans on the market. My goal is to simplify insurance. One human advice at a
              time to protect you with the best products that best match your dreams and lifestyle.
              Whether you&apos;re saving for retirement, investing in your child&apos;s education, or looking to
              secure your family&apos;s future, I&apos;m here to support you every step of the way.
            </p>

            {/* <button className="bg-primary-light text-primary-green px-6 py-3 rounded-full font-semibold hover:bg-white transition cursor-pointer">
              Learn More About Me →
            </button> */}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Green decorative circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-primary-light rounded-full opacity-30"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-primary-light/30 shadow-2xl">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-center">Financial Advisor Photo</span>
                </div>
              </div>

              {/* Decorative element */}
              {/* <div className="absolute bottom-0 right-0 bg-white text-primary-green px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                *Specializes
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
