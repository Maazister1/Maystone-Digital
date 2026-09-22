import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconArrowRight, 
  IconCode, 
  IconStack, 
  IconDeviceLaptop, 
  IconShieldCheck, 
  IconChevronDown, 
  IconStar, 
  IconArrowLeft 
} from '@tabler/icons-react';
import CTA from '../Components/CTA';

export default function WebsiteDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital engineered our entire SaaS platform from scratch. The code quality, performance, and component architecture are world-class.",
      name: "Zainab Alvi",
      role: "CTO, CloudScale Inc.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Nothing was bolted on afterwards. Every layer was specified, built, and tested seamlessly. Our conversion rates doubled within a month.",
      name: "Farhan Qureshi",
      role: "Founder, Apex Commerce",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Clean documented code, full ownership handed over, and blazing-fast loading speeds. They carry your business, not just your brand.",
      name: "Hamza Malik",
      role: "Director of Product, Nexus Labs",
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

  const techGroups = [
    { label: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Vite & Turbopack"] },
    { label: "Backend", items: ["Node.js / Express", "Python / Flask", "REST & GraphQL APIs", "Microservices"] },
    { label: "Data & Cloud", items: ["PostgreSQL / MySQL", "MongoDB & Redis", "AWS / Vercel / Cloudinary", "Docker & Kubernetes"] },
    { label: "DevOps & Quality", items: ["CI/CD Pipelines", "Jest & Cypress", "Performance Audits", "Security Hardening"] }
  ];

  const layers = [
    { label: "Interface", desc: "Responsive front-end engineering built as a component system." },
    { label: "Application logic", desc: "Secure server logic, authentication and business rules." },
    { label: "Data", desc: "Database design with SQL or MongoDB, modelled around real workflows." },
    { label: "Integrations", desc: "APIs, payments and third-party systems connected cleanly." },
    { label: "Deployment", desc: "Cloud deployment with CI pipelines and repeatable releases." },
    { label: "Scale & security", desc: "Performance budgets, monitoring and security hardening." },
  ];

  const faqs = [
    {
      question: "How long does a typical custom web development project take?",
      answer: "Timelines depend on scope and complexity. Standard custom web platforms or applications typically range from 4 to 10 weeks from initial scoping to production launch."
    },
    {
      question: "Do we own the source code and intellectual property upon completion?",
      answer: "Yes, absolutely. You receive 100% ownership of all source code, design assets, and deployment credentials with a complete, clean handover."
    },
    {
      question: "What tech stack do you use for building web applications?",
      answer: "We specialize in modern, high-performance stacks including React, Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, and robust cloud hosting infrastructure."
    },
    {
      question: "Do you provide ongoing support and maintenance after launch?",
      answer: "Yes, we offer flexible post-launch monitoring, performance optimization, security updates, and ongoing feature development retainers."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] selection:bg-[#FE083B] selection:text-white overflow-x-hidden">
      
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
      <section className="pt-20 pb-16 px-6 md:px-16 lg:px-24 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FE083B]/10 blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block">
            <span className="text-[#FE5211]  font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
     Web Development & Digital Platforms
  </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>Bespoke websites, applications and</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> digital platforms</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Engineering high-performance web applications and digital experiences that carry your business forward, not just your brand.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[
              { label: 'Custom Web Apps', icon: IconCode },
              { label: 'Component Systems', icon: IconStack },
              { label: 'Secure Architecture', icon: IconShieldCheck },
              { label: 'Cloud Scalability', icon: IconDeviceLaptop },
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
              <span>Start a project</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#case-studies" 
              className="px-8 py-3.5 rounded-full text-sm font-medium bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 transition text-white"
            >
              See the work
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRO / MOCKUP SECTION */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-white/10 bg-[#0c0a09]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] text-white">
                Engineering that carries your business,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">not just your brand</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                We build scalable, resilient web platforms designed to handle complex business logic, heavy traffic, and seamless user experiences without compromise.
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Every line of code is written with performance budgets, absolute security, and long-term maintainability in mind.
              </p>
              <div className="pt-2">
                <a href="#process-section" className="text-sm font-bold text-[#FE083B] flex items-center gap-2 hover:underline">
                  <span>How we deliver</span>
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141211] p-3 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FE083B]/10 to-transparent pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
                alt="Custom web application interface built by Maystone Digital" 
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-105 transition duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYERS SECTION */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-white/10 bg-[#0c0a09]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
     Architectural Rigor
  </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Every build is assembled in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">layers</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Nothing is bolted on afterwards. Each layer is specified, built, and rigorously tested before the next one depends on it.
            </p>
          </div>

          <ol className="space-y-4">
            {layers.map((l, i) => (
              <li key={l.label} className="group grid items-baseline gap-4 rounded-2xl border border-white/10 bg-[#141211] px-6 py-6 transition-all hover:border-[#FE083B]/50 hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] sm:grid-cols-[4rem_14rem_1fr] sm:px-9 shadow-lg">
                <span className="font-mono text-sm text-[#FE083B]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xl font-semibold text-white group-hover:text-[#FE083B] transition">{l.label}</span>
                <span className="text-sm text-neutral-400 leading-relaxed">{l.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. INFINITE TECH MARQUEE SECTION */}
      <section className="border-t border-b border-white/10 py-10 bg-[#0c0a09]/80 backdrop-blur-md relative overflow-hidden">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Modern technologies and frameworks we engineer with
          </p>
        </div>
        <div className="relative overflow-hidden w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="animate-custom-marquee flex items-center gap-16 whitespace-nowrap">
            {[...techGroups, ...techGroups].map((group, idx) => (
              <div key={idx} className="flex items-center gap-3 text-neutral-300 hover:text-white transition duration-300 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm font-bold tracking-wider font-mono text-[#FE083B]">
                  {group.label}:
                </span>
                <span className="text-sm text-neutral-300">
                  {group.items.join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS & STANDARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Our Commitments
  </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineering standards we hold ourselves to
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Written into the project scope before a single line of code is committed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "99.9%", label: "Uptime SLA Guarantee", desc: "Built for resilience with robust cloud infrastructure and auto-scaling." },
            { value: "< 1.2s", label: "Average Page Load Speed", desc: "Optimized asset delivery, server-side rendering, and strict performance budgets." },
            { value: "100%", label: "Code Ownership & Handover", desc: "Clean, documented codebases handed directly to your internal engineering team." }
          ].map((stat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition group space-y-3">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">
                {stat.value}
              </div>
              <h3 className="text-lg font-bold text-white">{stat.label}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TECH STACK BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10 bg-[#0c0a09]/40">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
           Tech Ecosystem
           </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technologies We Work With
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((g) => (
            <div key={g.label} className="bg-[#141211] p-8 space-y-4 hover:bg-[#1a1716] transition">
              <h3 className="text-sm font-semibold text-[#FE083B] font-mono uppercase tracking-wider">{g.label}</h3>
              <ul className="space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="text-sm text-neutral-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE083B]"></span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7. OUR PROCESS SECTION (WITH SCROLL PROGRESS LINE) */}
      <section id="process-section" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
         <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
           Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            From first conversation to continuous improvement
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            A structured workflow ensuring absolute clarity and excellence at every phase.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative space-y-12 md:space-y-16">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-10 w-[2px] bg-[#FE083B] -translate-x-1/2 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(254,8,59,0.8)]" style={{ height: `${scrollProgress}%` }}></div>

          {[
            {
              step: "01",
              title: "Discovery & Architecture Planning",
              desc: "We analyze your business workflows, define technical requirements, and map out the complete application architecture."
            },
            {
              step: "02",
              title: "Component Design & UI Engineering",
              desc: "Building a modular, responsive design system and front-end interface optimized for speed and accessibility."
            },
            {
              step: "03",
              title: "Backend & Database Integration",
              desc: "Developing secure server logic, API endpoints, authentication, and robust database models."
            },
            {
              step: "04",
              title: "Rigorous Testing & QA",
              desc: "Conducting performance audits, security hardening, end-to-end testing, and cross-device verification."
            },
            {
              step: "05",
              title: "Deployment & Continuous Support",
              desc: "Seamless cloud launch with CI/CD pipelines, complete code handover, and ongoing monitoring."
            }
          ].map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-[#141211] border border-white/10 p-8 rounded-3xl hover:border-[#FE083B]/50 hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition group shadow-xl">
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
      </section>

      {/* 8. GALLERY / PREVIOUS BUILDS */}
      <section id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Portfolio Showcase
  </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Interfaces and platforms we have engineered
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Work</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", tag: "Web Platform", title: "Enterprise Analytics Dashboard", desc: "High-frequency data streaming and custom visualization components." },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", tag: "Component System", title: "Design System & UI Library", desc: "Modular, accessible React component library built for scale." },
            { img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop", tag: "SaaS Application", title: "Cloud Workflow Automation", desc: "Secure multi-tenant architecture with real-time sync." },
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", tag: "Mobile UI / Web", title: "Collaborative Workspace Portal", desc: "Real-time collaboration tools with sub-millisecond latency." }
          ].map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#141211] border border-white/10 p-4 hover:border-[#FE083B]/50 hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition">
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
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="space-y-3 mb-10">
          <span className="text-[#FE5211] font-bold uppercase tracking-widest text-xs">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Founders & CTOs Say About Our Engineering
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
      </section>

      {/* 10. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
         <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
   Got Questions?
  </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Everything you need to know about our web development process, deliverables, and ownership.
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
      </section>

      {/* Global CTA Component */}
      <div id="contact">
        <CTA />
      </div>

    </div>
  );
}