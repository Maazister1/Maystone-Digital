import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconDeviceMobile, IconBrandApple, IconBrandAndroid, IconServer, IconChevronDown, IconStar, IconArrowLeft } from '@tabler/icons-react';
import shopify from '../assets/shopify.png'; // Aap chahe toh mobile-specific assets se replace kar sakte hain
import wordpress from '../assets/wordpress.png';
import code from '../assets/code.png';
import CTA from '../Components/CTA';

export default function MobileDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital built our cross-platform mobile app seamlessly. User engagement has skyrocketed since the launch!",
      name: "Daniyal Sheikh",
      role: "Founder, FinTech Startup",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The app performance and smooth UI animations feel completely native. Absolute game-changer for our scaling business.",
      name: "Hassan Raza",
      role: "CTO, Delivery App Co.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Incredible attention to detail from wireframes to App Store deployment. Our users love the intuitive experience.",
      name: "Mariam Noor",
      role: "Product Manager, HealthTech",
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
    { name: "SwiftPay", text: "SwiftPay" },
    { name: "FitPulse", text: "FitPulse" },
    { name: "DeliverGo", text: "DeliverGo" },
    { name: "ZestApp", text: "ZestApp" },
    { name: "Vibe", text: "Vibe" },
    { name: "Taskify", text: "Taskify" },
    { name: "Nomad", text: "Nomad" },
    { name: "UrbanEat", text: "UrbanEat" },
  ];

  const faqs = [
    {
      question: "How long does it take to develop a mobile application?",
      answer: "Standard cross-platform apps typically take around 4 to 8 weeks depending on the complexity of features and backend integrations. Highly complex native apps can take 10 to 12 weeks."
    },
    {
      question: "Do you build apps for both iOS and Android?",
      answer: "Yes! Using modern frameworks like React Native and Flutter, we build high-performance cross-platform apps that run smoothly on both iOS and Android from a single codebase."
    },
    {
      question: "Will you help us publish the app on App Store and Google Play?",
      answer: "Absolutely. We handle the complete deployment pipeline, including configuring developer accounts, compliance checks, and publishing your app to the Apple App Store and Google Play Store."
    },
    {
      question: "Do you provide maintenance and updates after launch?",
      answer: "Yes, we offer ongoing support packages to monitor performance, fix bugs, release new updates, and adapt to new iOS and Android OS updates."
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
              Mobile App Development
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>High-Performance Mobile Apps</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> For iOS & Android</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            We design and develop scalable cross-platform and native mobile applications with slick UI/UX, robust performance, and seamless backend integration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {[
              { label: 'React Native & Flutter', icon: IconDeviceMobile },
              { label: 'iOS App Store Ready', icon: IconBrandApple },
              { label: 'Android Play Store', icon: IconBrandAndroid },
              { label: 'Secure Backend & APIs', icon: IconServer },
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
              <span>Start Your App</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#case-studies" 
              className="px-8 py-3.5 rounded-full text-sm font-medium bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 transition text-white"
            >
              Explore Apps
            </a>
          </div>
        </div>
      </div>

      {/* 2. INFINITE MARQUEE SECTION */}
      <div className="mt-24 border-t border-b border-white/10 py-10 bg-[#0c0a09]/60 backdrop-blur-md relative">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Trusted by innovative mobile startups worldwide
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

      {/* 3. WHY MOBILE APP DEVELOPMENT MATTERS SECTION */}
      <div className="max-w-4xl mx-auto px-6 pt-24 text-center space-y-8">
        <div className="inline-block">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Why Mobile Apps Matter
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
          Bring your brand directly to users' pockets with an engaging, high-performance mobile app.
        </h2>

        <p className="text-neutral-300 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          Mobile apps drive higher retention, instant push notification reach, and offer unmatched fluid experiences compared to standard browsers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-8">
          <div className="p-6 rounded-2xl bg-[#141211] border border-white/5 text-center shadow-lg">
            <div className="text-[#FE083B] font-bold text-2xl">4.5+</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Average App Store Rating Target</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#141211] border border-white/5 text-center shadow-lg">
            <div className="text-[#FE083B] font-bold text-2xl">3x</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Higher User Engagement</div>
          </div>
        </div>

        <div className="pt-6 flex justify-center">
          <a 
            href="#contact" 
            className="group bg-[#FE083B] text-white px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#F72531] transition shadow-lg shadow-[#FE083B]/30 whitespace-nowrap"
          >
            <span>Have an app idea? Let's build it!</span>
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 4. MOBILE DEVELOPMENT SERVICES SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 mt-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Our App Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineered For iOS & Android
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            We use robust frameworks to build secure, scalable, and ultra-responsive mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Cross-Platform */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconDeviceMobile className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cross-Platform Apps</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">React Native & Flutter</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Build once, deploy seamlessly to both iOS and Android with near-native performance and reduced time-to-market.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Let's Chat</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Native App Dev */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconBrandApple className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Native App Development</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Swift & Kotlin</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Designed specifically for iOS and Android hardware. Ideal for high-performance apps requiring heavy animations and native sensor access.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Let's Connect</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3: Backend & APIs */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconServer className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">App Backend & Cloud</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Node.js, Firebase & APIs</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Secure user authentication, real-time databases, push notifications setup, and high-speed scalable cloud architecture.
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

      {/* 5. PORTFOLIO APPS SECTION */}
      <div id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Our Recent Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Featured Mobile Applications
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Apps</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop", tag: "FinTech App", title: "SwiftPay Digital Wallet", desc: "Secure multi-currency mobile banking platform" },
            { img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop", tag: "E-Commerce & Delivery", title: "DeliverGo On-Demand App", desc: "Real-time order tracking and logistics app" },
            { img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop", tag: "Health & Fitness", title: "FitPulse Workout Tracker", desc: "Interactive health monitoring & routines app" },
            { img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop", tag: "Productivity SaaS", title: "Taskify Team Companion", desc: "Cross-platform mobile workspace manager" }
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
            What Our App Founders Say
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
            Everything you need to know about our mobile app development process and store launches.
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
            From discovery to store launch, we keep things transparent and efficient.
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
              desc: "We analyze your app concept, target users, core features, and monetization roadmap to craft a solid blueprint."
            },
            {
              step: "02",
              title: "UI/UX & App Wireframing",
              desc: "Our designers build high-fidelity interactive prototypes focused on intuitive mobile gestures and smooth navigation."
            },
            {
              step: "03",
              title: "App Coding & Integration",
              desc: "We write clean cross-platform code using React Native or Flutter alongside robust backend APIs and databases."
            },
            {
              step: "04",
              title: "Testing & QA",
              desc: "Rigorous testing across multiple iOS and Android devices to guarantee zero crashes, fast loading, and flawless UI."
            },
            {
              step: "05",
              title: "App Store Launch & Scale",
              desc: "We manage your submission to Apple App Store and Google Play Store, ensuring successful approval and scaling."
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