import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconArrowRight, 
  IconRobot, 
  IconCpu, 
  IconHeadset, 
  IconAutomation, 
  IconChevronDown, 
  IconStar, 
  IconArrowLeft,
  IconCheck,
  IconBuildingArch,
  IconShieldLock,
  IconChartBar,
  IconHelpCircle
} from '@tabler/icons-react';
import CTA from '../Components/CTA';

export default function AiBpo() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital integrated custom AI chatbots and automated our lead workflows. Our response time dropped from hours to seconds!",
      name: "Olivia Grant",
      role: "Operations Director, SaaS Vantage",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The BPO outsourcing team combined with their automation pipelines cut our operational overhead by nearly 65%. Incredible work.",
      name: "Ryan Coleman",
      role: "CEO, Pinnacle Commerce",
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Their AI workflow automation handles our customer queries seamlessly 24/7. Absolute game-changer for our scaling business.",
      name: "Grace Sutherland",
      role: "Founder, BrightPath Digital",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
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
    { name: "OpenAI API", text: "OpenAI GPT-4" },
    { name: "Make.com", text: "Make.com Pipelines" },
    { name: "Zapier", text: "Zapier Automation" },
    { name: "Python", text: "Python Scripts" },
    { name: "Custom LLMs", text: "Custom LLM Agents" },
    { name: "Node.js", text: "Node.js Webhooks" },
    { name: "Pinecone", text: "Vector Databases" },
    { name: "RPA", text: "Robotic Process Automation" },
  ];

  const differenceCards = [
    {
      icon: IconBuildingArch,
      title: "Connected AI & Workflows",
      desc: "We integrate custom AI models, chatbots, and backend pipelines directly with your operations so logic and data stay aligned."
    },
    {
      icon: IconShieldLock,
      title: "Ready For Enterprise Complexity",
      desc: "From secure API webhooks and data encryption to multi-tier BPO squads, we handle the infrastructure robust businesses demand."
    },
    {
      icon: IconRobot,
      title: "Built For Faster Scaling",
      desc: "A streamlined automation setup means fewer manual bottlenecks, quicker response loops, and faster time-to-market."
    },
    {
      icon: IconChartBar,
      title: "Structured For Long-Term Growth",
      desc: "We engineer systems with scalability in mind so your automated workflows and outsourced teams expand smoothly as you grow."
    }
  ];

  const services = [
    {
      icon: IconAutomation,
      title: "AI Workflow Automation",
      subtitle: "Zapier, Make.com & Webhooks",
      desc: "Connect your apps, automate repetitive data entry, streamline lead scoring, and sync your CRMs automatically without human intervention."
    },
    {
      icon: IconRobot,
      title: "Custom AI Agents & LLMs",
      subtitle: "OpenAI GPT & Vector DBs",
      desc: "Train custom AI assistants on your internal documents or product catalogs to handle 24/7 customer support and instant data retrieval."
    },
    {
      icon: IconHeadset,
      title: "Outsourced Operations (BPO)",
      subtitle: "Dedicated Remote Teams",
      desc: "Deploy trained virtual assistants, customer success reps, and content moderators managed professionally to scale your day-to-day output."
    }
  ];

  const faqs = [
    {
      question: "How do AI agents and automation integrate with our existing software?",
      answer: "We connect custom AI models and automation platforms (like Make.com and Zapier) directly to your existing CRMs, communication tools, and databases via secure APIs and webhooks."
    },
    {
      question: "Is our business data secure when using AI and outsourced operations?",
      answer: "Yes, absolutely. We implement strict data privacy protocols, enterprise-grade encryption, and compliant API keys to ensure your internal company data and customer details remain fully protected."
    },
    {
      question: "What types of tasks can be outsourced through your BPO services?",
      answer: "We manage repetitive operational workloads including customer support ticketing, lead qualification, data entry, content moderation, and administrative virtual assistance."
    },
    {
      question: "How long does it take to deploy an AI workflow automation system?",
      answer: "Standard workflow automations and customer support bots typically take 1 to 3 weeks to build, test, and deploy, depending on your system complexity."
    },
    {
      question: "Do you provide ongoing maintenance and monitoring after launch?",
      answer: "Yes, we offer continuous system monitoring, prompt fine-tuning, and workflow maintenance to ensure peak reliability 24/7."
    },
    {
      question: "Can we combine custom AI chatbots with human BPO teams?",
      answer: "Definitely. Our hybrid model routes complex queries directly to your human remote teams while automated bots handle routine questions instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Outfit'] py-12 overflow-hidden relative">
      
      {/* Background Neon Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#FE083B]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[45%] left-[-10%] w-[500px] h-[500px] bg-[#FE083B]/5 blur-[160px] pointer-events-none rounded-full" />

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
      <div className="px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FE5211]">
         AI & BPO Solutions
         </h3>
         </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>Scale Faster & Cut Costs With</span> 
            <span className="text-[#FE083B]"> Intelligent AI & BPO</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Streamline your repetitive workflows, deploy custom AI agents, and delegate operational workloads to expert outsourced teams.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[
              { label: 'Custom AI Agents', icon: IconRobot },
              { label: 'Workflow Automation', icon: IconAutomation },
              { label: '24/7 Operations', icon: IconHeadset },
              { label: 'Smart Analytics', icon: IconCpu },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#000000]/90 border border-white/10 hover:border-[#FE083B] transition text-xs text-neutral-300 font-medium shadow-md backdrop-blur-sm">
                  <IconComp className="w-4 h-4 text-[#FE083B]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-[#FE083B]/30"
            >
              <span>Automate Your Workflow</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3.5 rounded-full text-sm font-medium bg-[#000000]/90 border border-white/10 hover:border-[#FE083B] transition text-white backdrop-blur-sm"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>

      {/* 2. INFINITE MARQUEE SECTION */}
      <div className="mt-20 border-t border-b border-white/10 py-10 bg-[#000000]/80 backdrop-blur-md relative z-10">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Powered by industry-leading AI models and integration tools
          </p>
        </div>
        <div className="relative overflow-hidden w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none"></div>
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

      {/* 3. OUR DIFFERENCE SECTION (Divided by Lines, No Box Cards) */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            <span>Intelligent Architecture Built For</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] via-[#ff4d6d] to-[#F72531] mt-1">Smart Businesses And AI Scaling</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {differenceCards.map((card, idx) => {
            const IconComp = card.icon;
            const isLeftCol = idx % 2 === 0;
            const isTopRow = idx < 2;
            return (
              <div 
                key={idx} 
                className={`p-8 md:p-12 flex flex-col justify-start group transition-all duration-300 
                  ${isLeftCol ? 'md:border-r border-white/10' : ''} 
                  ${isTopRow ? 'border-b border-white/10' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#FE083B] transition">
                  <IconComp className="w-6 h-6 text-[#FE083B] group-hover:text-[#FE5211] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FE5211] transition">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. AI & BPO SERVICES SECTION (Divided by Lines, No Box Cards) */}
      <div id="services" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block">
  <span className=" text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Our Core Offerings
  </span>
</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Smart Automation & Outsourced Growth
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            We build custom AI pipelines and supply managed teams to optimize your business efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            const isNotLastCol = idx < services.length - 1;
            return (
              <div 
                key={idx} 
                className={`p-8 md:p-10 flex flex-col justify-between group transition-all duration-300
                  ${isNotLastCol ? 'md:border-r border-white/10' : ''}`}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 group-hover:border-[#FE083B] transition">
                    <IconComp className="w-8 h-8 text-[#FE083B] group-hover:text-[#FE5211] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FE5211] transition-colors">{service.title}</h3>
                  <p className="text-xs text-[#FE083B] group-hover:text-[#FE5211] font-semibold uppercase tracking-wider mb-4 font-mono transition-colors">{service.subtitle}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE5211] flex items-center gap-2 transition">
                    <span>Let's Chat</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. PORTFOLIO / CASE STUDIES SECTION */}
      <div id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Success Stories
  </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Featured AI & BPO Deployments
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Systems</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", tag: "Real Estate Automation", title: "AI Lead Qualifier Bot", desc: "Automated instant lead intake and CRM synchronization" },
            { img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop", tag: "E-Commerce Support", title: "24/7 Customer Support Agent", desc: "Trained LLM assistant handling returns and order tracking" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", tag: "SaaS Operations", title: "Automated Billing & Onboarding", desc: "Make.com pipeline connecting Stripe, Slack, and HubSpot" },
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", tag: "Outsourced BPO", title: "Dedicated Remote Support Squad", desc: "Managed team of 10+ agents scaling client success operations" }
          ].map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#000000]/90 border border-white/10 hover:border-[#FE083B] hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition-all duration-300 p-4 shadow-xl backdrop-blur-md">
              <div className="h-72 rounded-2xl bg-gradient-to-br from-neutral-900 to-black overflow-hidden relative border border-white/5">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-[#FE083B] border border-white/10 shadow-lg">
                  {project.tag}
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FE5211] transition">{project.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{project.desc}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FE083B] group-hover:border-[#FE083B] transition shadow-md">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. CLIENT FEEDBACK SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10 relative z-10">
        <div className="space-y-3 mb-10">
          <span className="text-[#FE5211] font-bold uppercase tracking-widest text-xs font-mono">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Founders Say About Our AI Systems
          </h2>
        </div>

        <div className="bg-[#000000]/90 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-4 md:gap-6 flex-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FE083B]/10 border border-[#FE083B]/30 flex-shrink-0 flex items-center justify-center text-[#FE083B] shadow-inner">
                <span className="text-2xl md:text-3xl font-serif font-bold">“</span>
              </div>
              <div className="space-y-6">
                <p className="text-neutral-200 text-xs md:text-sm leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-white/10" />
                  <div>
                    <h4 className="text-white font-bold text-xs sm:text-sm">{testimonials[currentTestimonial].name}</h4>
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
                <button onClick={prevTestimonial} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#FE083B] flex items-center justify-center text-white transition hover:bg-white/10 shadow-md" aria-label="Previous">
                  <IconArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#FE083B] flex items-center justify-center text-white transition hover:bg-white/10 shadow-md" aria-label="Next">
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. FAQ SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Booking Card */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Got Questions?<br />
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FE083B] leading-[1.1]">We've Got Answers</span>
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                If you're unsure where to start or want to see how we can help, reach out, and we'll walk you through it.
              </p>
            </div>

         
          </div>

          {/* Right Column: Accordion FAQs */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-[#000000] border border-white/10 rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="flex items-center gap-3 font-semibold text-[#FE083B]">
                      <IconHelpCircle className="w-4 h-4 shrink-0" />
                      {faq.question}
                    </span>
                    <IconChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FE083B]' : 'text-neutral-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-4 text-neutral-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 8. OUR PROCESS SECTION */}
      <div id="process-section" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
Our Process
  </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            A Clear, Collaborative Implementation Process
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            From workflow audit to deployment, we ensure seamless operational scaling.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative space-y-12 md:space-y-16">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-10 w-[2px] bg-[#FE083B] -translate-x-1/2 transition-all duration-75 ease-out shadow-[0_0_15px_rgba(254,8,59,0.9)]" style={{ height: `${scrollProgress}%` }}></div>

          {[
            {
              step: "01",
              title: "Audit & Workflow Mapping",
              desc: "We analyze your current operations, identify manual bottlenecks, and map out repetitive tasks ripe for automation."
            },
            {
              step: "02",
              title: "Strategy & Architecture",
              desc: "We select the right AI models, webhook integrations, or BPO staffing blueprints tailored to your growth goals."
            },
            {
              step: "03",
              title: "Automation & Setup",
              desc: "We build robust Make.com/Zapier pipelines, train custom LLM agents, and onboard your dedicated remote squad."
            },
            {
              step: "04",
              title: "Testing & Fine-Tuning",
              desc: "Rigorous testing of automated triggers, error handling, and agent responses to guarantee 100% accuracy."
            },
            {
              step: "05",
              title: "Deployment & Optimization",
              desc: "We launch your systems live, monitor performance metrics, and continuously refine workflows for maximum output."
            }
          ].map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-[#000000]/90 border border-white/10 p-8 rounded-3xl hover:border-[#FE083B] hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition group shadow-xl backdrop-blur-md">
                    <span className="text-xs font-bold text-[#FE083B] group-hover:text-[#FE5211] uppercase tracking-wider font-mono transition-colors">
                      Phase {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[#FE5211] transition">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center Badge Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#000000] border-2 border-[#FE083B] items-center justify-center text-[#FE083B] font-bold text-sm shadow-[0_0_15px_rgba(254,8,59,0.5)] z-10 font-mono">
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
      <div className="relative z-10 pt-12">
        <CTA />
      </div>

    </div>
  );
}