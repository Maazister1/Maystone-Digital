import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCode, IconShoppingCart, IconDevices, IconServer, IconChevronDown, IconStar, IconArrowLeft } from '@tabler/icons-react';
import shopify from '../assets/shopify.png';
import wordpress from '../assets/wordpress.png';
import code from '../assets/code.png';
import CTA from '../Components/CTA';

export default function WebsiteDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital delivered our platform beyond expectations. The team was professional, responsive and truly understood our vision. Highly recommended!",
      name: "Sarah Ahmed",
      role: "Founder, Retail Brand",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The custom web app architecture they implemented completely automated our operations. Absolute game-changer for our business scaling.",
      name: "Zain Malik",
      role: "CTO, TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Incredible attention to detail and lightning-fast delivery. Our e-commerce conversion rates doubled within the first month of launch.",
      name: "Ayesha Khan",
      role: "Director, Alissa Retail",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('process-section');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollHeight = rect.height - windowHeight;
      const currentScroll = windowHeight - rect.top;
      
      let progress = (currentScroll / totalScrollHeight) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const brands = [
    { name: "Alissa", text: "ALISSA" },
    { name: "Bytes", text: "bytes" },
    { name: "SightSync", text: "SightSync" },
    { name: "Loop", text: "Loop" },
    { name: "Walla", text: "walla" },
    { name: "Tivly", text: "Tivly" },
    { name: "Beinkm", text: "Beinkm" },
    { name: "AutoReach", text: "AutoReach" },
  ];

  const faqs = [
    {
      question: "How long does it typically take to build a website?",
      answer: "Standard business websites or Shopify stores usually take around 2 to 4 weeks depending on the design complexity and requirements. Custom web applications or SaaS platforms may take 6 to 8 weeks."
    },
    {
      question: "Will my website be mobile-friendly and fully responsive?",
      answer: "100% yes! Every single project we build is rigorously optimized for smartphones, tablets, and desktop displays to ensure a seamless user experience across all devices."
    },
    {
      question: "Do you provide ongoing support and maintenance after launch?",
      answer: "Yes, we offer ongoing maintenance packages to keep your plugins updated, secure your infrastructure, and make continuous content updates as your business grows."
    },
    {
      question: "Can you help optimize my website for Google Search (SEO)?",
      answer: "Absolutely. All our websites are developed following best-practice technical SEO guidelines, fast loading speeds, clean semantic code structure, and meta optimizations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 overflow-hidden">
      
      {/* Infinite Marquee Animation Style */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .animate-custom-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Website Development
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>High-Performance Web Solutions</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> For Real Business Growth</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            We design and develop scalable websites, custom web applications, and immersive digital platforms that help you launch faster, operate efficiently, and dominate your niche.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {[
              { label: 'React & Next.js', icon: IconCode },
              { label: 'E-Commerce Stores', icon: IconShoppingCart },
              { label: 'Fully Responsive', icon: IconDevices },
              { label: 'Robust Backend', icon: IconServer },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141211] border border-white/10 text-xs text-neutral-300 font-medium shadow-md">
                  <IconComp className="w-4 h-4 text-[#FE083B]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-[#FE083B]/25"
            >
              <span>Start Your Project</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#case-studies" 
              className="px-8 py-3.5 rounded-full text-sm font-medium bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 transition text-white"
            >
              Explore Work
            </a>
          </div>
        </div>
      </div>

      {/* 2. INFINITE MARQUEE SECTION */}
      <div className="mt-24 border-t border-b border-white/10 py-10 bg-[#0c0a09]/60 backdrop-blur-md relative">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Trusted by growing brands worldwide
          </p>
        </div>
        <div className="relative overflow-hidden w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="animate-custom-marquee flex items-center gap-16 whitespace-nowrap">
            {[...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-3 text-neutral-400 hover:text-white transition duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                <span className="text-lg md:text-xl font-bold tracking-wider font-mono uppercase">
                  {brand.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. WHY WEB DEVELOPMENT MATTERS SECTION */}
      <div className="max-w-4xl mx-auto px-6 pt-24 text-center space-y-8">
        <div className="inline-block">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Why Web Development Matters
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
          More than a website — a stronger business engine engineered for absolute impact.
        </h2>

        <p className="text-neutral-300 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          Your website is often the first impression of your brand. We build digital experiences that are fast, secure, scalable, and tailored to your goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-8">
          <div className="p-6 rounded-2xl bg-[#141211] border border-white/5 text-center shadow-lg">
            <div className="text-[#FE083B] font-bold text-2xl">3x</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Average Conversion Boost</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#141211] border border-white/5 text-center shadow-lg">
            <div className="text-[#FE083B] font-bold text-2xl">99.9%</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Uptime & Reliability</div>
          </div>
        </div>

        <div className="pt-6 flex justify-center">
          <a 
            href="#contact" 
            className="group bg-[#FE083B] text-white px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#F72531] transition shadow-lg shadow-[#FE083B]/30 whitespace-nowrap"
          >
            <span>Have a query or feeling stuck? Let's talk!</span>
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 4. WEBSITE DEVELOPMENT SERVICES SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 mt-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Our Development Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Tailored Stack For Your Business
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            We select the right platform and tech stack tailored to your exact business objectives and growth scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Shopify */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <img src={shopify} alt="Shopify" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Shopify Development</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Best For E-Commerce</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Ideal for online stores. High-converting checkout, secure payment gateways, inventory management, and smooth customer experience.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Let's Chat</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: WordPress */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <img src={wordpress} alt="WordPress" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WordPress & CMS</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Best For Content Sites</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Ideal for corporate websites, blogs, portfolios, and content platforms. Easy to manage and optimized for SEO.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Let's Connect</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3: Custom Code */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <img src={code} alt="Custom Code" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Web Apps</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Best For SaaS Platforms</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Built using React, Next.js, and Node.js. Ideal for unique digital products, complex dashboards, and high performance.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Let's Chat</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5. PORTFOLIO WEBSITES SECTION */}
      <div id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Our Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Featured Portfolio Websites
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Projects</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop", tag: "Shopify E-Commerce", title: "Alissa Fashion & Retail Store", desc: "High-end conversion optimized store design" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", tag: "Custom Web App / SaaS", title: "AutoReach Marketing Dashboard", desc: "React-powered automated platform infrastructure" },
            { img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop", tag: "WordPress Corporate", title: "SightSync Global Agency Site", desc: "SEO optimized corporate presentation platform" },
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", tag: "Next.js Web Portal", title: "Tivly FinTech Portal", desc: "High speed enterprise client transaction portal" }
          ].map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#141211] border border-white/10 p-4">
              <div className="h-72 rounded-2xl bg-gradient-to-br from-neutral-900 to-black overflow-hidden relative border border-white/5">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#FE083B] border border-white/10">
                  {project.tag}
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{project.desc}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FE083B] group-hover:border-[#FE083B] transition">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. CLIENT FEEDBACK SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="space-y-3 mb-10">
          <span className="text-[#FE083B] font-bold uppercase tracking-widest text-xs">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="bg-[#141211] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-4 md:gap-6 flex-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FE083B]/10 border border-[#FE083B]/20 flex-shrink-0 flex items-center justify-center text-[#FE083B] shadow-inner">
                <span className="text-2xl md:text-3xl font-serif font-bold">“</span>
              </div>
              <div className="space-y-6">
                <p className="text-neutral-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10" />
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-neutral-400 text-xs md:text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between lg:justify-end gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-5 h-5 fill-[#FE083B] text-[#FE083B]" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button onClick={prevTestimonial} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#FE083B]/50 flex items-center justify-center text-white transition hover:bg-white/10" aria-label="Previous">
                  <IconArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#FE083B]/50 flex items-center justify-center text-white transition hover:bg-white/10" aria-label="Next">
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. FAQ SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Everything you need to know about our web development process, timelines, and deliverables.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-[#141211] border border-white/10 rounded-2xl overflow-hidden transition">
                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none">
                  <span className="font-semibold text-white text-base md:text-lg">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FE083B]/20 text-[#FE083B] border-[#FE083B]/30' : ''}`}>
                    <IconChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-neutral-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 8. OUR PROCESS SECTION */}
      <div id="process-section" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            A Clear, Collaborative Process
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            From discovery to launch, we keep things transparent and efficient.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative space-y-12 md:space-y-16">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-10 w-[2px] bg-[#FE083B] -translate-x-1/2 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(254,8,59,0.8)]" style={{ height: `${scrollProgress}%` }}></div>

          {[
            {
              step: "01",
              title: "Discovery & Strategy",
              desc: "We dive deep into your business goals, target audience, and project scope to formulate a winning blueprint."
            },
            {
              step: "02",
              title: "UI/UX & Wireframing",
              desc: "Our designers build interactive wireframes and high-fidelity mockups tailored for seamless user experiences."
            },
            {
              step: "03",
              title: "Development & Coding",
              desc: "We write clean, scalable, high-performance code using modern stacks like React, Next.js, and robust backends."
            },
            {
              step: "04",
              title: "Testing & QA",
              desc: "Rigorous checks across all screen sizes, browsers, and devices to ensure lightning-fast speeds and zero bugs."
            },
            {
              step: "05",
              title: "Launch & Scale",
              desc: "We deploy your project live to production, configure custom domains, and hand over a ready-to-scale powerhouse."
            }
          ].map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-[#141211] border border-white/10 p-8 rounded-3xl hover:border-[#FE083B]/50 transition group shadow-xl">
                    <span className="text-xs font-bold text-[#FE083B] uppercase tracking-wider font-mono">
                      Phase {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[#FE083B] transition">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center Badge Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#141211] border-2 border-[#FE083B] items-center justify-center text-[#FE083B] font-bold text-sm shadow-[0_0_15px_rgba(254,8,59,0.4)] z-10">
                  {item.step}
                </div>

                {/* Empty Spacer for Layout balance */}
                <div className="hidden md:block w-1/2"></div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Global CTA Component */}
      <CTA />

    </div>
  );
}