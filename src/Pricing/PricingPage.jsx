import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck, IconX, IconSparkles } from '@tabler/icons-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or annual

  const plans = [
    {
      name: "Starter / MVP",
      tagline: "Perfect for startups and small businesses launching their digital presence.",
      monthlyPrice: "$999",
      annualPrice: "$799",
      popular: false,
      features: [
        "Custom Responsive Landing Page",
        "React / Next.js Frontend Architecture",
        "Tailwind CSS Styling & Custom Branding",
        "Basic Contact / Inquiry Form Integration",
        "Mobile & Tablet Optimization",
        "1 Month Post-Launch Support"
      ],
      notIncluded: [
        "Advanced Database Integration",
        "Custom Backend & API Development",
        "Performance Marketing Campaigns",
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Professional Agency",
      tagline: "Ideal for growing brands needing full-stack power and scaling tools.",
      monthlyPrice: "$2,499",
      annualPrice: "$1,999",
      popular: true,
      features: [
        "Full-Stack Web App or Multi-Page Site",
        "React / Node.js / Database Integration",
        "Advanced UI/UX Figma Design Systems",
        "Interactive Dashboards & User Portals",
        "Cloudinary Video & Media Galleries",
        "SEO Optimization & Fast Load Speeds",
        "3 Months Priority Support & Warranty"
      ],
      notIncluded: [
        "Enterprise Dedicated DevOps & Security Audit"
      ]
    },
    {
      name: "Enterprise & Custom",
      tagline: "Custom engineering, automation, and dedicated team support for large operations.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      popular: false,
      features: [
        "Custom Full-Stack Architecture & Microservices",
        "Advanced AI & BPO Workflow Automation",
        "CRM & Back-Office System Integration",
        "Google Ads & Meta Ads Growth Campaigns",
        "Comprehensive Financial Reporting Integration",
        "24/7 Dedicated Support & SLA Guarantee",
        "Full Source Code Ownership & Transfer"
      ],
      notIncluded: []
    }
  ];

  const faqs = [
    {
      question: "How does the project billing and payment structure work?",
      answer: "We typically work on a milestone-based structure: 50% upfront to initiate the development process, and 50% upon successful project delivery and deployment."
    },
    {
      question: "What is the typical turnaround time for a project?",
      answer: "Starter landing pages usually take 1 to 2 weeks, while full-stack professional web apps or multi-page systems range between 3 to 6 weeks depending on scope complexity."
    },
    {
      question: "Will I own the source code of my application?",
      answer: "Yes, absolutely! Once the project is completed and final payments are cleared, 100% of the source code and repository ownership belongs to you."
    },
    {
      question: "Do you provide maintenance and support after launch?",
      answer: "Yes, every plan includes dedicated post-launch warranty and support. We also offer long-term monthly maintenance packages for continuous scaling."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-16">
        <div className="inline-block">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Transparent Investment
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>Simple, Fair Pricing</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> For High-Impact Results</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          No hidden fees or surprise charges. Choose the right engineering tier for your business growth and scale with confidence.
        </p>

        {/* Billing Toggle Switch */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-neutral-400'}`}>Monthly billing</span>
          <button 
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-8 bg-[#141211] border border-white/10 rounded-full p-1 relative transition cursor-pointer"
          >
            <div className={`w-6 h-6 bg-gradient-to-r from-[#FE083B] to-[#F72531] rounded-full transition-transform ${billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-sm font-medium flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-white' : 'text-neutral-400'}`}>
            Annual billing <span className="text-[10px] bg-[#FE083B]/20 text-[#FE083B] border border-[#FE083B]/30 px-2 py-0.5 rounded-full font-semibold">Save 20%</span>
          </span>
        </div>
      </div>

      {/* 2. PRICING CARDS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {plans.map((plan, idx) => (
          <div 
            key={idx}
            className={`bg-[#141211] border rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative transition duration-300 ${
              plan.popular 
                ? 'border-[#FE083B] shadow-[#FE083B]/10 lg:-translate-y-2' 
                : 'border-white/10 hover:border-white/30'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <IconSparkles className="w-3.5 h-3.5" /> Most Popular Choice
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-neutral-400 min-h-[36px]">{plan.tagline}</p>
              </div>

              <div className="py-4 border-y border-white/5 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  {plan.monthlyPrice === "Custom" ? "Custom" : (billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice)}
                </span>
                {plan.monthlyPrice !== "Custom" && (
                  <span className="text-xs text-neutral-400">/ project</span>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FE083B]">What's Included:</span>
                <ul className="space-y-2.5">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5">
                      <IconCheck className="w-4 h-4 text-[#FE083B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((notFeat, i) => (
                    <li key={i} className="text-xs sm:text-sm text-neutral-500 flex items-start gap-2.5 line-through">
                      <IconX className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                      <span>{notFeat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <Link 
                to="/start-project" 
                className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition cursor-pointer shadow-lg ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white shadow-[#FE083B]/30 hover:opacity-90' 
                    : 'bg-black/50 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                <span>Get Started Now</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <div className="max-w-4xl mx-auto space-y-10 mb-20">
        <div className="text-center space-y-3">
          <span className="text-[#FE083B] font-serif italic text-xl tracking-wide">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#141211] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
              <h3 className="text-lg font-bold text-white">{faq.question}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CALL TO ACTION BANNER */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#141211] to-[#1c1918] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Need a Custom Solution Tailored to Your Enterprise?
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
          Agar aapki requirements standard packages se alag hain, toh humse contact karein. Hum aapke mutabiq custom scope aur budget tayar karenge.
        </p>
        <div className="pt-2">
          <Link 
            to="/start-project" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition shadow-lg shadow-[#FE083B]/30"
          >
            <span>Talk to Our Team</span>
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

    </div>
  );
}