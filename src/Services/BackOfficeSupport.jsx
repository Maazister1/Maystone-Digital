import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconHeadset, IconSettings, IconDatabase, IconClipboardCheck, IconChevronDown, IconStar, IconArrowLeft, IconArrowRight, IconShieldCheck, IconNetwork, IconCpu, IconChartBar } from '@tabler/icons-react';
import CTA from '../Components/CTA';

export default function BackOfficeSupport() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital ne hamara back-office workflow completely streamline kardiya. Admin tasks automate hone se hamari team ab core business growth par focus karti hai.",
      name: "Tariq Mehmood",
      role: "Operations Head, Enterprise Logistics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Inki data entry, CRM management, aur support services ne hamari daily operational efficiency ko double kardiya. Extremely reliable team!",
      name: "Ayesha Malik",
      role: "Founder, E-Commerce Retail",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "From handling client inquiries to managing internal workflows, their back-office team operates with absolute precision and professionalism.",
      name: "Farhan Qureshi",
      role: "Managing Director, Tech Agency",
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
    { name: "HubSpot", text: "HubSpot CRM Management" },
    { name: "Notion", text: "Notion Workspace Systems" },
    { name: "Excel & Sheets", text: "Advanced Data Management" },
    { name: "Zendesk", text: "Customer Support Ticketing" },
    { name: "Slack", text: "Internal Team Communication" },
    { name: "Zapier", text: "Workflow Automation" },
    { name: "Airtable", text: "Database Organization" },
    { name: "QuickBooks", text: "Financial Record Keeping" },
  ];

  const faqs = [
    {
      question: "Back-Office Support mein kaun kaun c services shamil hain?",
      answer: "Isme administrative tasks, data entry, CRM management, workflow automation, client email support, aur routine reporting poori tarah handle ki jati hain."
    },
    {
      question: "Aap hamare business data ki security aur privacy kaise maintain karte hain?",
      answer: "Hum strict confidentiality agreements (NDAs), secure encrypted databases, aur role-based access controls use karte hain taake aapka data 100% secure rahe."
    },
    {
      question: "Kya aap hamare existing software aur CRM systems ke sath kaam kar sakte hain?",
      answer: "Haan bilkul! Hum HubSpot, Salesforce, Notion, Excel, ya koi bhi custom tool jo aapki company use kar rahi hai, uske sath smoothly integrate ho jate hain."
    },
    {
      question: "Back-Office support team se communication ka kya tareeqa hota hai?",
      answer: "Hum Slack, WhatsApp, ya Email ke zariye daily updates dete hain aur aapke designated project managers ke sath direct coordination rakhte hain."
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
  <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
   Back Office Support
  </span>
</div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>Streamline Operations</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> & Admin Workflow Support</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Apne business ke administrative bojh ko khatam karein aur reliable back-office management aur workflow automation ke sath core growth par focus karein.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {[
              { label: 'Admin Assistance', icon: IconHeadset },
              { label: 'Workflow Automation', icon: IconSettings },
              { label: 'Data & CRM Management', icon: IconDatabase },
              { label: 'Operational Quality', icon: IconClipboardCheck },
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
              <span>Get Support Now</span>
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

      {/* 2. INFINITE MARQUEE SECTION */}
      <div className="mt-24 border-t border-b border-white/10 py-10 bg-[#0c0a09]/60 backdrop-blur-md relative">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Powered by industry-standard CRM, workspace, and automation tools
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

      {/* 3. INTELLIGENT ARCHITECTURE / BPO DIFFERENCE GRID (Style like image_7f8606.png) */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 text-center">
       <div className="inline-block">
  <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Our Difference
  </span>
</div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight mb-20">
          <span>Intelligent Architecture Built For</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">Smart Businesses And BPO Scaling</span>
        </h2>

        {/* Line-grid layout with no rounded box corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10 text-left">
          
          {/* Grid Item 1 */}
          <div className="p-8 md:p-12 border-b border-r border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center mb-6 text-[#FE083B]">
                <IconNetwork className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Connected Workflows & Automations</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We integrate custom CRM pipelines, automated data triggers, and back-office squads directly with your operations so logic and data stay aligned.
              </p>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="p-8 md:p-12 border-b border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center mb-6 text-[#FE083B]">
                <IconShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ready For Enterprise Complexity</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                From secure API webhooks and data encryption to multi-tier BPO squads, we handle the infrastructure robust businesses demand.
              </p>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div className="p-8 md:p-12 border-b md:border-b-0 border-r border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center mb-6 text-[#FE083B]">
                <IconCpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Built For Faster Scaling</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                A streamlined automation setup means fewer manual bottlenecks, quicker response loops, and faster time-to-market.
              </p>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div className="p-8 md:p-12 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center mb-6 text-[#FE083B]">
                <IconChartBar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Structured For Long-Term Growth</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We engineer systems with scalability in mind so your automated workflows and outsourced teams expand smoothly as you grow.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. THE CORE SERVICES SECTION (Line Grid Style) */}
      <div id="services" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Core Service Offerings
  </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Admin Support, CRM & Workflow Solutions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Aapki business operations ko smooth aur error-free chalane ke liye complete back-office suite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          
          {/* Service 1 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 border-r border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FE083B]">
                <IconHeadset className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Admin & Executive Assistance</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-6">Routine Operations & Support</p>
              <ul className="text-neutral-400 text-sm space-y-3 mb-8 leading-relaxed">
                <li>• Calendar management & meeting scheduling</li>
                <li>• Email inbox management & client sorting</li>
                <li>• Document preparation & report generation</li>
                <li>• Routine customer support coordination</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/10">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Explore Admin Support</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 border-r border-white/10 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FE083B]">
                <IconDatabase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. CRM & Data Management</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-6">Database Organization & Tracking</p>
              <ul className="text-neutral-400 text-sm space-y-3 mb-8 leading-relaxed">
                <li>• HubSpot, Salesforce & Airtable data entry</li>
                <li>• Lead pipeline tracking & clean-up</li>
                <li>• Customer database organization</li>
                <li>• Secure spreadsheet & record management</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/10">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Explore CRM Support</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="p-8 md:p-10 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FE083B]">
                <IconSettings className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Workflow Automation</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-6">Zapier, Notion & System Setup</p>
              <ul className="text-neutral-400 text-sm space-y-3 mb-8 leading-relaxed">
                <li>• Zapier integration & task automation</li>
                <li>• Notion workspace setup & documentation</li>
                <li>• Internal communication systems (Slack)</li>
                <li>• Process optimization & SOP creation</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/10">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Explore Automation</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 5. PORTFOLIO / CASE STUDIES SECTION */}
      <div id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Success Stories
  </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Featured Back-Office Projects
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Projects</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
          {[
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", tag: "CRM Migration", title: "Enterprise HubSpot Clean-up", desc: "Organized 15,000+ customer records and optimized sales pipeline tracking." },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", tag: "Workflow Automation", title: "Zapier Automated Onboarding", desc: "Built seamless client onboarding workflows reducing manual data entry by 80%." },
            { img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop", tag: "Admin Support", title: "Logistics Inbox & Schedule Ops", desc: "Managed executive email triage and high-volume meeting schedules daily." },
            { img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop", tag: "Notion Systems", title: "Custom Internal Workspace Setup", desc: "Designed structured Notion databases and SOP manuals for a scaling agency." }
          ].map((project, idx) => (
            <div key={idx} className="group relative p-6 md:p-8 border-b border-r border-white/10 bg-transparent">
              <div className="h-64 rounded-xl bg-neutral-900 overflow-hidden relative border border-white/10 mb-4">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#FE083B] border border-white/10">
                  {project.tag}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{project.desc}</p>
                </div>
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FE083B] group-hover:border-[#FE083B] transition">
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
            What Founders Say About Our Back-Office Support
          </h2>
        </div>

        <div className="border-t border-b border-white/10 py-12 relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-4 md:gap-6 flex-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex-shrink-0 flex items-center justify-center text-[#FE083B]">
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

            <div className="flex items-center justify-between lg:justify-end gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-5 h-5 fill-[#FE083B] text-[#FE083B]" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button onClick={prevTestimonial} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#FE083B]/50 flex items-center justify-center text-white transition hover:bg-white/10" aria-label="Previous">
                  <IconArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#FE083B]/50 flex items-center justify-center text-white transition hover:bg-white/10" aria-label="Next">
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. FAQ SECTION (Line Grid Style) */}
      <div className="max-w-5xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
        <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
   Got Questions?
  </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Everything you need to know about our back-office support and admin workflow services.
          </p>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="border-b border-white/10 transition">
                <button onClick={() => toggleFaq(index)} className="w-full py-6 text-left flex items-center justify-between gap-4 focus:outline-none">
                  <span className="font-semibold text-white text-base md:text-lg">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FE083B]/20 text-[#FE083B] border-[#FE083B]/30' : ''}`}>
                    <IconChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pt-1 text-neutral-400 text-sm md:text-base leading-relaxed">
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
       <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
   OUR PROCESS
  </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            A Structured & Secure Support Process
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Operational audit se lekar seamless daily execution tak, hum har step par absolute precision ensure karte hain.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative space-y-12 md:space-y-16">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-10 w-[2px] bg-[#FE083B] -translate-x-1/2 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(254,8,59,0.8)]" style={{ height: `${scrollProgress}%` }}></div>

          {[
            {
              step: "01",
              title: "Workflow Audit & Mapping",
              desc: "Hum aapke current administrative bottlenecks aur repetitive tasks ko analyze karke optimization plan banate hain."
            },
            {
              step: "02",
              title: "Tool Integration & Security",
              desc: "HubSpot, Notion ya Zapier tools setup kiye jate hain aur strict data privacy & NDA protocols ensure kiye jate hain."
            },
            {
              step: "03",
              title: "SOP Creation & Handover",
              desc: "Standard Operating Procedures (SOPs) document kiye jate hain taake har task standardized tareeqay se execute ho."
            },
            {
              step: "04",
              title: "Daily Execution & Management",
              desc: "Hamari dedicated back-office team routine admin, CRM updates aur support tasks seamlessly execute karti hai."
            },
            {
              step: "05",
              title: "Quality Review & Scaling",
              desc: "Regular performance reports aur feedback sessions ke zariye workflows ko mazeed optimize aur scale kiya jata hai."
            }
          ].map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="border border-white/10 p-8 rounded-xl bg-transparent hover:border-[#FE083B]/50 transition group">
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
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-[#0a0a0a] border-2 border-[#FE083B] items-center justify-center text-[#FE083B] font-bold text-sm shadow-[0_0_15px_rgba(254,8,59,0.4)] z-10">
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