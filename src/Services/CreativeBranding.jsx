import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconPalette, IconBrush, IconLayout, IconSparkles, IconDeviceDesktop, IconChevronDown, IconStar, IconArrowLeft, IconArrowRight, IconCheck } from '@tabler/icons-react';
import CTA from '../Components/CTA';

export default function CreativeBranding() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital ne hamari brand identity ko bilkul transform kardiya. Logo, color palette aur UI/UX design ne hamare startup ko ek world-class premium look de diya.",
      name: "Zainab Ahmed",
      role: "Founder, Modern Apparel",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Inka graphic design aur brand style guide ka kaam behtareen hai. Hamari social media aur marketing channels par visual consistency bilkul professional ho gayi hai.",
      name: "Bilal Khan",
      role: "Creative Director, Media House",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "UI/UX aur visual branding ke absolute masters hain. Inke redesign ke baad hamare app interface aur web layouts ki user engagement double ho gayi.",
      name: "Daniyal Sheikh",
      role: "Product Lead, Tech Solutions",
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

  const techStack = [
    { name: "Figma", text: "Figma UI/UX Design" },
    { name: "Adobe Illustrator", text: "Vector & Logo Design" },
    { name: "Adobe Photoshop", text: "Visual Graphics & Editing" },
    { name: "Canva Pro", text: "Brand Kit & Social Assets" },
    { name: "Cinema 4D", text: "3D Motion & Assets" },
    { name: "DaVinci Resolve", text: "Color Grading & Video" },
    { name: "Adobe After Effects", text: "Motion Graphics & UI FX" },
    { name: "Typography", text: "Font Pairing & Systems" },
  ];

  const faqs = [
    {
      question: "Complete Brand Identity package mein kya kya milta hai?",
      answer: "Hamare brand identity package mein custom logo design, color palette selection, typography guidelines, brand style guide manuals, aur custom social media visual kits shamil hote hain."
    },
    {
      question: "Websites aur Mobile Apps ke liye UI/UX design ka kya process hota hai?",
      answer: "Hum user research aur wireframing se start karte hain, Figma mein interactive high-fidelity prototypes banate hain, aur developer-ready UI design systems deliver karte hain."
    },
    {
      question: "Kya aap social media aur marketing ke liye graphic design assets banate hain?",
      answer: "Haan bilkul! Hum custom post templates, Instagram feed layouts, ad creatives, brochures, banners, aur presentation decks aapki brand guidelines ke mutabiq design karte hain."
    },
    {
      question: "Project complete hone par kaunse file formats milte hain?",
      answer: "Hum saare industry-standard vector aur raster formats provide karte hain jisme AI, EPS, SVG, PDF, high-res PNG/JPG, aur fully organized Figma source files shamil hain."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] pt-8 pb-16 overflow-hidden">
      
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
      <div className="px-6 md:px-16 lg:px-24 pt-6 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Creative Branding & Graphic Design
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>Build Iconic Brand Identity</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> & Stunning UI/UX Design <br /> & Graphic Designing</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Apne business ko professional look dein unforgettable graphic design, brand identity systems, aur user-friendly digital interfaces ke sath.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[
              { label: 'Brand Identity & Logos', icon: IconPalette },
              { label: 'UI/UX Design Systems', icon: IconLayout },
              { label: 'Graphic Design Assets', icon: IconBrush },
              { label: 'Visual Storytelling', icon: IconSparkles },
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

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-[#FE083B]/25"
            >
              <span>Start Your Brand Project</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3.5 rounded-full text-sm font-medium bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 transition text-white"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* STATS COUNTER BAR */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-6 rounded-3xl bg-[#141211]/80 border border-white/10 backdrop-blur-md text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FE083B]">150+</div>
            <div className="text-xs md:text-sm text-neutral-400 mt-1">Brands Transformed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FE083B]">99%</div>
            <div className="text-xs md:text-sm text-neutral-400 mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FE083B]">3x</div>
            <div className="text-xs md:text-sm text-neutral-400 mt-1">Higher User Engagement</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-[#FE083B]">4.9</div>
            <div className="text-xs md:text-sm text-neutral-400 mt-1">Average Rating</div>
          </div>
        </div>
      </div>

      {/* 2. WHY BRANDING MATTERS SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center space-y-6">
        <div className="inline-block">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Why Maystone Digital
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
          A Stronger Design Presence Solves Real Business Problems
        </h2>

        <p className="text-neutral-300 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          Aapka brand wohi hota hai jo log aapke peeche baat hain. Hum appealing visual identities aur seamless digital interfaces banate hain jo lambi yaadgar chhorhte hain.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {[
            { title: "Instant Trust", desc: "Professional aesthetics build immediate credibility with new customers." },
            { title: "Market Recall", desc: "Distinctive logo and visual style make your business memorable." },
            { title: "Higher Conversions", desc: "Optimized UI/UX layouts drive better user actions and retention." },
            { title: "Brand Equity", desc: "Cohesive style guides build long-term enterprise value." }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#141211] border border-white/10 text-left space-y-2 hover:border-[#FE083B]/40 transition">
              <div className="w-10 h-10 rounded-xl bg-[#FE083B]/10 flex items-center justify-center text-[#FE083B] font-bold">
                0{i+1}
              </div>
              <h3 className="text-white font-bold text-lg">{card.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. THE CORE SERVICES SECTION */}
      <div id="services" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10 mt-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Core Service Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Graphic Design, Brand Identity & UI/UX Suite
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Har creative asset aur interface detail aapke business ki kamyabi ke liye perfection ke sath design ki jati hai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconPalette className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Brand Identity & Logos</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Logo Design & Style Guides</p>
              <ul className="text-neutral-400 text-sm space-y-3 mb-6 leading-relaxed">
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Custom logo design & vector variations</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Brand color palettes & typography systems</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Complete brand style guide manuals</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Business cards, letterheads & stationery</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Explore Branding</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconLayout className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. UI/UX Design Systems</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Web & Mobile Interfaces</p>
              <ul className="text-neutral-400 text-sm space-y-3 mb-6 leading-relaxed">
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> User research, wireframes & user flows</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> High-fidelity Figma prototypes & UI</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Modern SaaS dashboards & mobile apps</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Developer-ready component libraries</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Explore UI/UX Design</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconBrush className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Graphic Design & Assets</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Marketing & Social Graphics</p>
              <ul className="text-neutral-400 text-sm space-y-3 mb-6 leading-relaxed">
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Custom social media post templates & kits</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> High-converting ad creatives & banners</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Pitch decks, brochures & presentations</li>
                <li className="flex items-center gap-2"><IconCheck className="w-4 h-4 text-[#FE083B]" /> Vector illustrations & custom icons</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Explore Graphics</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 4. INFINITE MARQUEE SECTION */}
      <div className="border-t border-b border-white/10 py-12 bg-[#0c0a09]/60 backdrop-blur-md my-16">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Powered by industry-standard design tools and creative software
          </p>
        </div>
        <div className="relative overflow-hidden w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="animate-custom-marquee flex items-center gap-16 whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 text-neutral-400 hover:text-white transition duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                <span className="text-lg md:text-xl font-bold tracking-wider font-mono uppercase">
                  {tech.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. PORTFOLIO / CASE STUDIES SECTION */}
      <div id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Creative Branding & UI/UX Portfolio
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Projects</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", tag: "Brand Identity", title: "Luxury Fashion Rebrand", desc: "Complete brand identity system and packaging guidelines." },
            { img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop", tag: "UI/UX Design", title: "SaaS Analytics Dashboard", desc: "Clean, modern Figma UI/UX system for enterprise." },
            { img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop", tag: "Graphic Design", title: "Tech Startup Social Kit", desc: "High-converting social marketing templates & banners." }
          ].map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#141211] border border-white/10 p-4 hover:border-[#FE083B]/50 transition">
              <div className="h-64 rounded-2xl bg-gradient-to-br from-neutral-900 to-black overflow-hidden relative border border-white/5">
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

      {/* 6. TEAM / ABOUT CREATIVE AGENCY SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              A Team That Turns Ideas Into Digital Experiences
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Hum sirf designs nahi banate, hum aisi visual stories create karte hain jo aapke audience ke sath connect karti hain aur business growth ko accelerate karti hain.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-6 h-6 rounded-full bg-[#FE083B]/20 flex items-center justify-center text-[#FE083B]">✓</div>
                <span>Strategic brand positioning & competitor analysis</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-6 h-6 rounded-full bg-[#FE083B]/20 flex items-center justify-center text-[#FE083B]">✓</div>
                <span>Pixel-perfect Figma UI/UX design systems</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <div className="w-6 h-6 rounded-full bg-[#FE083B]/20 flex items-center justify-center text-[#FE083B]">✓</div>
                <span>End-to-end vector asset handover</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80 border border-white/10">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Design team collaboration" className="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-xs text-neutral-300 font-mono">
                <span className="text-[#FE083B] font-bold">MAYSTONE STUDIO</span> — CREATIVE WORKSPACE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. PRICING / PLANS SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Flexible Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Choose a Plan That Fits Your Goals
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Transparent pricing packages designed for startups, growing brands, and established enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {[
            {
              name: "Brand Starter",
              price: "$799",
              desc: "Ideal for early-stage startups needing a solid identity foundation.",
              features: ["Custom Logo Design", "Color Palette & Typography", "Basic Brand Guidelines", "Stationery Kit", "Vector Source Files (AI, EPS)"]
            },
            {
              name: "UI/UX Suite",
              price: "$1,499",
              desc: "Perfect for SaaS apps and modern websites needing top-tier interfaces.",
              features: ["Complete Brand Identity", "Wireframes & User Flows", "Figma High-Fi Prototypes", "Developer Design System", "Unlimited Revisions"],
              popular: true
            },
            {
              name: "Enterprise Rebrand",
              price: "$2,999",
              desc: "Comprehensive creative suite for established companies scaling up.",
              features: ["Full Brand Transformation", "Web & Mobile UI/UX Design", "Social Media Asset Kit", "Pitch Deck & Marketing Banners", "Dedicated Design Director"]
            }
          ].map((plan, i) => (
            <div key={i} className={`rounded-3xl p-8 flex flex-col justify-between transition relative ${plan.popular ? 'bg-[#141211] border-2 border-[#FE083B] shadow-2xl shadow-[#FE083B]/10' : 'bg-[#141211] border border-white/10'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-neutral-400 mb-6">{plan.desc}</p>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  {plan.price} <span className="text-xs text-neutral-400 font-normal">/ project</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-neutral-300">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <IconCheck className="w-4 h-4 text-[#FE083B]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className={`w-full py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition ${plan.popular ? 'bg-[#FE083B] text-white hover:bg-[#F72531] shadow-lg shadow-[#FE083B]/25' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                <span>Get Started</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 8. CLIENT FEEDBACK SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="space-y-3 mb-10">
          <span className="text-[#FE083B] font-bold uppercase tracking-widest text-xs">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Founders Say About Our Design Work
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

      {/* 9. FAQ SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Everything you need to know about our brand identity, graphic design, and UI/UX services.
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

      {/* 10. OUR PROCESS SECTION */}
      <div id="process-section" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            A Creative & Collaborative Design Process
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Moodboarding se lekar final design system handover tak, hum har step par aapki vision ko zinda rakhte hain.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative space-y-12 md:space-y-16">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-10 w-[2px] bg-[#FE083B] -translate-x-1/2 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(254,8,59,0.8)]" style={{ height: `${scrollProgress}%` }}></div>

          {[
            {
              step: "01",
              title: "Discovery & Moodboarding",
              desc: "Hum target audience research karte hain, competitors analyze karte hain aur visual direction define karne ke liye moodboards banate hain."
            },
            {
              step: "02",
              title: "Concept Design & Sketching",
              desc: "Multiple logo concepts, color schemes aur web/mobile app interface ke wireframe layouts explore kiye jaate hain."
            },
            {
              step: "03",
              title: "Refinement & Prototyping",
              desc: "Figma aur Illustrator mein selected designs ko polish kiya jata hai, interactive prototypes aur brand style guides banate hain."
            },
            {
              step: "04",
              title: "Client Review & Feedback",
              desc: "Aapke sath close collaboration mein designs review kiye jate hain, adjustments incorporate kiye jate hain taake 100% satisfaction ho."
            },
            {
              step: "05",
              title: "Final Delivery & Handover",
              desc: "Saare source files, brand assets, vector formats aur development ke liye design system documentation export ki jati hai."
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