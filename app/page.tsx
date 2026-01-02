import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import MeetAdvisor from './components/MeetAdvisor';
import InsurancePlans from './components/InsurancePlans';
import WhoGetsInsured from './components/WhoGetsInsured';
import WhyChooseMe from './components/WhyChooseMe';
import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import { client } from './sanity/client';
import { type SanityDocument } from "next-sanity";

const PORTFOLIO_QUERY = `*[_type == "portfolio"]`;
const options = {
  next: {
    revalidate: 60,
  },
};


export default async function Home() {
  let portfolio = await client.fetch<SanityDocument>(PORTFOLIO_QUERY, {}, options);
  portfolio = portfolio[0];
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero description={portfolio.hero?.description} restHeadline={portfolio.hero?.restHeadline} taggedHeadline={portfolio.hero?.taggedHeadline} rating={portfolio.hero?.rating} />
      <WhatWeOffer services={portfolio?.services} />
      <MeetAdvisor advisor={portfolio.about} />
      <InsurancePlans insurancePlans={portfolio?.insurancePlans} />
      <WhoGetsInsured whogetsinsured={portfolio?.whogetsinsured} />
      <WhyChooseMe whychooseme={portfolio?.whychooseme} />
      <ContactSection contact={portfolio?.contact} plans={portfolio?.insurancePlans?.plans} />
      {/*
      <Footer /> 
      */}
      <BackToTop />
    </main>
  );
}
