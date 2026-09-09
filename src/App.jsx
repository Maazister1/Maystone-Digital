// import React from 'react'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import Stack from './Components/Stack'
// import Services from './Services/Services'
// import DeliveryProcess from './Components/DeliveryProcess'
// import AboutSection from './About/AboutSection'
// import WhyUsSection from './Whyus/WhyUsSection'
// import ProcessSection from './OurProcess/ProcessSection'
// import CaseStudiesSection from './CaseStudy/CaseStudiesSection'
// import PortfolioSection from './Portfolio/PortfolioSection'
// import PricingSection from './Pricing/PricingSection'
// import TestimonialsSection from './Reviews/TestimonialsSection'
// import LatestArticlesSection from './Articles/LatestArticlesSection'
// import ContactSection from './Contact/ContactSection'
// import FooterSection from './Components/Footer'

// function App() {
//   return (


// <>

// <Navbar />
// <Hero />
// <Stack />
// <Services />
// <DeliveryProcess />
// <AboutSection />
// <WhyUsSection />
// <ProcessSection />
// <CaseStudiesSection />
// <PortfolioSection />
// <PricingSection />
// <TestimonialsSection />
// <LatestArticlesSection />
// <ContactSection />
// <FooterSection />


// </>



//   )
// }

// export default App


import React, { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Stack from './Components/Stack';
import Services from './Services/Services';
import DeliveryProcess from './Components/DeliveryProcess';
import AboutSection from './About/AboutSection';
import WhyUsSection from './Whyus/WhyUsSection';
import ProcessSection from './OurProcess/ProcessSection';
import CaseStudiesSection from './CaseStudy/CaseStudiesSection';
import PortfolioSection from './Portfolio/PortfolioSection';
import PricingSection from './Pricing/PricingSection';
import TestimonialsSection from './Reviews/TestimonialsSection';
import LatestArticlesSection from './Articles/LatestArticlesSection';
import ContactSection from './Contact/ContactSection';
import FooterSection from './Components/Footer';

function App() {
  useEffect(() => {
    // Agar screen width 768px se kam hai (Mobile/Tablet), toh Lenis bilkul mat chalao!
    if (window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <Services />
      <DeliveryProcess />
      <AboutSection />
      <WhyUsSection />
      <ProcessSection />
      <CaseStudiesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <LatestArticlesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;