import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import MeetAdvisor from './components/MeetAdvisor';
// import InsurancePlans from './components/InsurancePlans';
import WhoGetsInsured from './components/WhoGetsInsured';
import WhyChooseMe from './components/WhyChooseMe';
import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero rating={4.8} />
      <WhatWeOffer />
      <MeetAdvisor />
      {/* <InsurancePlans /> */}
      <WhoGetsInsured />
      <WhyChooseMe />
      <ContactSection />
      {/*
      <Footer /> 
      */}
      <BackToTop />
    </main>
  );
}
