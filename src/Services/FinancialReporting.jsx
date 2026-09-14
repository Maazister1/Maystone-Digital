import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCalculator, IconFileSpreadsheet, IconReceiptTax, IconChartBar, IconChevronDown, IconStar, IconArrowLeft } from '@tabler/icons-react';
import CTA from '../Components/CTA';

export default function FinancialReporting() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital streamlined our monthly financial reporting and handled our corporate tax filings flawlessly. Absolute peace of mind!",
      name: "Tariq Mahmood",
      role: "CFO, Tech Ventures",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Their meticulous bookkeeping and tax advisory saved us thousands in overhead and ensured 100% regulatory compliance.",
      name: "Ayesha Siddiqui",
      role: "Managing Director, Enterprise Corp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Professional, accurate, and always on time. Their financial dashboards give us crystal-clear clarity on our cash flow.",
      name: "Bilal Hashmi",
      role: "Founder, Growth Scaleup",
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
    { name: "QuickBooks", text: "QuickBooks Online" },
    { name: "Xero", text: "Xero Accounting" },
    { name: "Excel", text: "Advanced Financial Modeling" },
    { name: "Stripe", text: "Stripe & PayPal Reconciliation" },
    { name: "PowerBI", text: "PowerBI Dashboards" },
    { name: "GAAP", text: "GAAP / IFRS Standards" },
    { name: "TaxSoft", text: "Automated Tax Filing" },
    { name: "AuditTools", text: "Internal Audit Pipelines" },
  ];

  const faqs = [
    {
      question: "What financial reporting services do you provide for businesses?",
      answer: "We prepare comprehensive monthly balance sheets, income statements, cash flow statements, and custom financial dashboards to track performance and profitability."
    },
    {
      question: "Do you handle corporate tax preparation and compliance filings?",
      answer: "Yes, our experts manage corporate tax computations, filing documentation, local and international regulatory compliance, and advisory to legally minimize tax liabilities."
    },
    {
      question: "How do you ensure data security for our financial records?",
      answer: "We utilize bank-grade encryption, secure cloud bookkeeping software (like QuickBooks and Xero), and strict confidentiality agreements to protect all your sensitive financial data."
    },
    {
      question: "Can you clean up historical bookkeeping and backlog data?",
      answer: "Absolutely. We specialize in retroactive bookkeeping cleanup, bank reconciliation, and straightening out disorganized ledgers to get your financials investor-ready."
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
              Financial Reporting & Tax
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>Precision Financial Reporting</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> & Strategic Tax Advisory</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Gain crystal-clear visibility into your cash flow, ensure absolute regulatory compliance, and optimize your taxes with expert financial professionals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {[
              { label: 'Financial Statements', icon: IconFileSpreadsheet },
              { label: 'Tax Advisory & Filing', icon: IconReceiptTax },
              { label: 'Cash Flow Analytics', icon: IconChartBar },
              { label: 'Bookkeeping & Audit', icon: IconCalculator },
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
              <span>Schedule Financial Audit</span>
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
            Trusted accounting standards and software tools utilized
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

      {/* 3. WHY FINANCIAL REPORTING & TAX MATTERS SECTION */}
      <div className="max-w-4xl mx-auto px-6 pt-24 text-center space-y-8">
        <div className="inline-block">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Why Clean Financials Matter
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
          Make data-driven business decisions and eliminate tax season anxiety with expert management.
        </h2>

        <p className="text-neutral-300 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          Accurate bookkeeping and proactive tax planning protect your enterprise from compliance penalties while maximizing net profitability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-8">
          <div className="p-6 rounded-2xl bg-[#141211] border border-white/5 text-center shadow-lg">
            <div className="text-[#FE083B] font-bold text-2xl">100%</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Regulatory & Tax Compliance Accuracy</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#141211] border border-white/5 text-center shadow-lg">
            <div className="text-[#FE083B] font-bold text-2xl">Zero</div>
            <div className="text-xs text-neutral-400 mt-1 font-medium">Surprises During Tax Filing Season</div>
          </div>
        </div>

        <div className="pt-6 flex justify-center">
          <a 
            href="#contact" 
            className="group bg-[#FE083B] text-white px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#F72531] transition shadow-lg shadow-[#FE083B]/30 whitespace-nowrap"
          >
            <span>Talk to a Financial Expert</span>
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 4. FINANCIAL SERVICES SECTION */}
      <div id="services" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 mt-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Our Core Financial Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Comprehensive Accounting & Tax Solutions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            We handle the numbers so you can focus entirely on scaling your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Financial Reporting */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconFileSpreadsheet className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Financial Reporting</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Balance Sheets & P&L Statements</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Detailed monthly income statements, balance sheets, and cash flow projections structured professionally for investors and stakeholders.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Let's Chat</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Tax Advisory & Filing */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconReceiptTax className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tax Advisory & Filing</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">Corporate & Local Compliance</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Proactive tax planning, deduction optimization, and accurate computation and filing of corporate taxes to minimize legal liabilities.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5">
              <a href="#contact" className="text-xs font-bold text-white group-hover:text-[#FE083B] flex items-center gap-2 transition">
                <span>Let's Connect</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3: Bookkeeping & Audit */}
          <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FE083B]/50 transition group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden p-3 group-hover:scale-110 transition">
                <IconCalculator className="w-8 h-8 text-[#FE083B]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bookkeeping & Cleanups</h3>
              <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider mb-4">QuickBooks & Xero Experts</p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Regular ledger maintenance, bank reconciliations, expense tracking, and retroactive cleanup of historical financial backlog.
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

      {/* 5. PORTFOLIO / CASE STUDIES SECTION */}
      <div id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Featured Financial Engagements
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Reports</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop", tag: "Tax Optimization", title: "Tech Startup Tax Strategy", desc: "Saved 30% in corporate tax liabilities through legal deductions" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", tag: "Bookkeeping Cleanup", title: "Retroactive Ledger Overhaul", desc: "Cleaned 2 years of chaotic multi-currency financial backlog" },
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", tag: "Investor Reporting", title: "Series A Financial Dashboards", desc: "Built GAAP-compliant financial models for venture capital raising" },
            { img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", tag: "Cash Flow Audit", title: "E-Commerce Profitability Audit", desc: "Identified overhead leaks and improved net operating margins by 22%" }
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
            What Executives Say About Our Financial Services
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
            Everything you need to know about our financial reporting, bookkeeping, and tax advisory services.
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
            A Clear, Streamlined Financial Process
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            From initial financial audit to accurate tax filing, we maintain total transparency.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative space-y-12 md:space-y-16">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-10 w-[2px] bg-[#FE083B] -translate-x-1/2 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(254,8,59,0.8)]" style={{ height: `${scrollProgress}%` }}></div>

          {[
            {
              step: "01",
              title: "Financial Audit & Onboarding",
              desc: "We review your existing accounts, software setup, and historical records to establish a clean financial baseline."
            },
            {
              step: "02",
              title: "Bookkeeping & Reconciliation",
              desc: "Our team manages routine expense tracking, bank reconciliations, and categorizes ledgers accurately."
            },
            {
              step: "03",
              title: "Reporting & Statement Prep",
              desc: "We generate comprehensive monthly income statements, balance sheets, and customized performance dashboards."
            },
            {
              step: "04",
              title: "Tax Planning & Strategy",
              desc: "Proactive calculation of corporate liabilities, reviewing legal write-offs and credits to optimize your tax position."
            },
            {
              step: "05",
              title: "Filing & Continuous Advisory",
              desc: "We complete secure tax filings on schedule and provide continuous financial insights to scale your net profit."
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