import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import ScrollProgressBar from './Components/ScrollProgressBar';
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

// Website Development component import from Services folder
import WebsiteDevelopment from './Services/WebsiteDevelopment';
import CTA from './Components/CTA';
import MobileDevelopment from './Services/MobileDevelopment';
import AiBpo from './Services/AiBpo';
import FinancialReporting from './Services/FinancialReporting';
import DigitalMarketing from './Services/DigitalMarketing';
import CreativeBranding from './Services/CreativeBranding';
import BackOfficeSupport from './Services/BackOfficeSupport';
import AboutPage from './About/AboutPage';
import ProcessPage from './OurProcess/ProcessPage';
import BlogsPage from './Blogs/BlogsPage';
import CaseStudiesPage from './CaseStudy/CaseStudiePage';
import StartProject from './Contact/StartProject';
import Pricing from './Pricing/PricingPage';
import SoftwareSaaSPage from './Services/SoftwareSaaSPage';
import OurTeam from './OurTeam/OurTeam';
import LegalRequirements from './LegalRequirements/LegalRequirements';
import OurPolicies from './OurPolicies/OurPolicies';
import TermsOfService from './TermsOfService/TermsOfService';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';


function HomeView() {
  return (
    <>
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
    </>
  );
}

function App() {
  const lenisRef = useRef(null);
  const location = useLocation();

  // On every navigation: jump to the #section if the link has one,
  // otherwise scroll to the top (hero section) of the page
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    let top = 0;
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) top = target.getBoundingClientRect().top + window.scrollY - 80;
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(top, { immediate: true });
    }
    window.scrollTo({ top, behavior: 'instant' });
  }, [location.key, location.hash]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);}
      requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  return (
    <div className="bg-[#000000] min-h-screen text-white font-['Outfit']">
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      {/* Keyed by path so every page change replays the enter animation */}
      <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        {/* Main Home Page */}
        <Route path="/" element={<HomeView />} />
        {/* Dedicated Web Development Page */}
        <Route path="/services/web-development" element={<WebsiteDevelopment />} />
        <Route path="/services/app-development" element={<MobileDevelopment />} /> 
        <Route path="/services/ai-bpo" element={<AiBpo />} />
        <Route path="/services/financial-reporting" element={<FinancialReporting />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/creative-branding" element={<CreativeBranding />} />
        <Route path="/services/back-office" element={<BackOfficeSupport />} />
        <Route path="/components/cta" element={<CTA />} />
        <Route path="/about/aboutpage" element={<AboutPage />} />
        <Route path="/about/processpage" element={<ProcessPage />} />
        <Route path="/blogs/blogspage" element={<BlogsPage />} />
        <Route path="/casestudy/casestudiepage" element={<CaseStudiesPage />} />
        <Route path="/contact/startproject" element={<StartProject />} /> 
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/pricing/pricingpage" element={<Pricing />} />
        <Route path="/services/software-sas" element={<SoftwareSaaSPage />} />  
        <Route path="/ourteam/ourteam" element={<OurTeam />} />  
        <Route path="/legal/legal-requirements" element={<LegalRequirements />} />
        <Route path="/legal/our-policies" element={<OurPolicies />} />
        <Route path="/legal/terms-of-service" element={<TermsOfService />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      </div>
      <FooterSection />
    </div>
  );
}
export default App;

