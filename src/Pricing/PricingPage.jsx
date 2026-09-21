import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconArrowRight, IconCheck, IconSparkles, IconCode, IconServer, 
  IconDeviceMobile, IconSpeakerphone, IconRobot, 
  IconCalculator, IconPalette, IconHeadset, IconChevronDown 
} from '@tabler/icons-react';

export default function PricingPage() {
  // Track expanded category to show sub-options dropdown grid
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Track checked sub-services
  const [selectedSubServices, setSelectedSubServices] = useState({
    // Web Development & Apps
    web_frontend: true,
    web_backend: false,
    web_ecommerce: false,
    web_fullapp: false,
    web_uiux: false,
    web_perf: false,

    // Mobile App Development
    mob_ios: false,
    mob_android: false,
    mob_cross: false,
    mob_uiux: false,

    // Software Development & SaaS CRMs
    saas_custom: false,
    saas_crm: false,
    saas_erp: false,
    saas_cloud: false,

    // AI & BPO
    ai_bot: false,
    ai_voice: false,
    ai_zapier: false,
    ai_bpo: false,

    // Financial Reporting & Tax
    fin_report: false,
    fin_tax: false,
    fin_payroll: false,
    fin_audit: false,

    // Digital Marketing
    mkt_seo: false,
    mkt_ppc: false,
    mkt_meta: false,
    mkt_social: false,

    // Branding & Graphic Designing
    brand_logo: false,
    brand_figma: false,
    brand_guidelines: false,
    brand_social: false,

    // Back-Office Support
    sup_admin: false,
    sup_virtual: false,
    sup_data: false,
    sup_customer: false
  });

  const categories = [
    {
      id: 'web',
      name: 'Web Development & Apps',
      desc: 'Bespoke sites, apps & platforms',
      icon: <IconCode className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'web_frontend', name: 'Frontend Development', price: 400 },
        { id: 'web_backend', name: 'Backend & APIs', price: 500 },
        { id: 'web_ecommerce', name: 'E-commerce Store', price: 600 },
        { id: 'web_fullapp', name: 'Full Web App', price: 800 },
        { id: 'web_uiux', name: 'UI/UX Implementation', price: 450 },
        { id: 'web_perf', name: 'Performance & Speed', price: 300 }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      desc: 'iOS, Android & Cross-platform apps',
      icon: <IconDeviceMobile className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'mob_ios', name: 'iOS App Development', price: 900 },
        { id: 'mob_android', name: 'Android App Development', price: 900 },
        { id: 'mob_cross', name: 'Cross-Platform (Flutter/React Native)', price: 1200 },
        { id: 'mob_uiux', name: 'Mobile UI/UX Design', price: 500 }
      ]
    },
    {
      id: 'saas',
      name: 'Software Development & SaaS CRMs',
      desc: 'Custom SaaS, CRMs & scalable systems',
      icon: <IconServer className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'saas_custom', name: 'Custom SaaS Platform', price: 1500 },
        { id: 'saas_crm', name: 'CRM Integration & Setup', price: 900 },
        { id: 'saas_erp', name: 'Enterprise ERP Systems', price: 2000 },
        { id: 'saas_cloud', name: 'Cloud Infrastructure & DevOps', price: 800 }
      ]
    },
    {
      id: 'ai_bpo',
      name: 'AI & BPO',
      desc: 'Automation & outsourced operations',
      icon: <IconRobot className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'ai_bot', name: 'AI Chatbots & Assistants', price: 700 },
        { id: 'ai_voice', name: 'AI Voice & Caller Systems', price: 1000 },
        { id: 'ai_zapier', name: 'Zapier & Make Automation', price: 500 },
        { id: 'ai_bpo', name: 'BPO Operational Support', price: 800 }
      ]
    },
    {
      id: 'finance',
      name: 'Financial Reporting & Tax',
      desc: 'Reporting & tax advisory',
      icon: <IconCalculator className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'fin_report', name: 'Financial Rate Dashboards', price: 600 },
        { id: 'fin_tax', name: 'Tax Advisory & Filing Support', price: 750 },
        { id: 'fin_payroll', name: 'Payroll Management System', price: 650 },
        { id: 'fin_audit', name: 'Financial Auditing & Analytics', price: 900 }
      ]
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      desc: 'SEO, PPC & growth',
      icon: <IconSpeakerphone className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'mkt_seo', name: 'Advanced SEO Optimization', price: 500 },
        { id: 'mkt_ppc', name: 'Google Ads (PPC Campaigns)', price: 600 },
        { id: 'mkt_meta', name: 'Meta Ads (Facebook & Instagram)', price: 600 },
        { id: 'mkt_social', name: 'Social Media Growth', price: 400 }
      ]
    },
    {
      id: 'branding',
      name: 'Branding & Graphic Designing',
      desc: 'Identity & UI/UX design',
      icon: <IconPalette className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'brand_logo', name: 'Custom Logo & Branding', price: 400 },
        { id: 'brand_figma', name: 'Figma Design System', price: 700 },
        { id: 'brand_guidelines', name: 'Brand Identity Guidelines', price: 500 },
        { id: 'brand_social', name: 'Social Media Graphics', price: 350 }
      ]
    },
    {
      id: 'backoffice',
      name: 'Back-Office Support',
      desc: 'Admin & workflow support',
      icon: <IconHeadset className="w-5 h-5 text-[#FE083B]" />,
      subServices: [
        { id: 'sup_admin', name: 'Administrative Management', price: 450 },
        { id: 'sup_virtual', name: 'Virtual Assistant Services', price: 400 },
        { id: 'sup_data', name: 'Data Entry & Data Cleaning', price: 300 },
        { id: 'sup_customer', name: 'Customer Support Ticketing', price: 550 }
      ]
    }
  ];

  const toggleCategoryExpand = (catId) => {
    setExpandedCategory(prev => prev === catId ? null : catId);
  };

  const toggleSubService = (subId) => {
    setSelectedSubServices(prev => ({
      ...prev,
      [subId]: !prev[subId]
    }));
  };

  // Calculate total price dynamically from all selected sub-services
  const calculatedTotal = categories.reduce((total, cat) => {
    return total + cat.subServices.reduce((subTotal, sub) => {
      return subTotal + (selectedSubServices[sub.id] ? sub.price : 0);
    }, 0);
  }, 0);

  const fixedPlans = [
    {
      name: "Starter / MVP",
      tagline: "Perfect for startups and small businesses launching their digital presence with essential web assets.",
      price: "$999",
      features: [
        "Custom Responsive Landing Page",
        "React / Next.js Frontend Architecture",
        "Tailwind CSS Styling & Custom Branding",
        "Basic Contact / Inquiry Form Integration",
        "Mobile & Tablet Optimization",
        "1 Month Post-Launch Support"
      ],
      popular: false
    },
    {
      name: "Professional Agency",
      tagline: "Ideal for growing brands requiring full-stack power, interactive dashboards, and scaling tools.",
      price: "$2,499",
      features: [
        "Full-Stack Web App or Multi-Page System",
        "React / Node.js / Database Integration",
        "Advanced UI/UX Figma Design Systems",
        "Interactive Dashboards & User Portals",
        "Cloudinary Video & Media Galleries",
        "SEO Optimization & Fast Load Speeds",
        "3 Months Priority Support & Warranty"
      ],
      popular: true
    },
    {
      name: "Enterprise Ecosystem",
      tagline: "Comprehensive engineering, custom SaaS platforms, and dedicated engineering team support.",
      price: "$4,999+",
      features: [
        "Custom Full-Stack Architecture & Microservices",
        "Advanced AI & BPO Workflow Automation",
        "Custom CRM, ERP & Data Scrapers",
        "Performance Marketing Growth Campaigns",
        "Comprehensive Financial & Data Analytics",
        "24/7 Dedicated Support & SLA Guarantee",
        "Full Source Code Ownership & Transfer"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-16">
        <div className="inline-block">
          <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
            Transparent Investment
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>Simple, Fair Pricing</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> For High-Impact Results</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Choose a pre-built professional tier or use our interactive package builder below to customize exact services according to your business roadmap.
        </p>
      </div>

      {/* 2. FIXED PRE-BUILT PRICING CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {fixedPlans.map((plan, idx) => (
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
                  {plan.price}
                </span>
                <span className="text-xs text-neutral-400">/ project</span>
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

      {/* 3. INTERACTIVE CUSTOM PACKAGE BUILDER SECTION */}
      <div className="max-w-5xl mx-auto bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE083B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center space-y-3 mb-10 relative z-10">
          <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
            Custom Solution Builder
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">Custom Scope</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Click on any service category dropdown to view and select specific requirements with multiple selections allowed.
          </p>
        </div>

        <div className="space-y-4 mb-10 relative z-10">
          {categories.map((cat) => {
            const isExpanded = expandedCategory === cat.id;
            const hasCheckedSub = cat.subServices.some(sub => selectedSubServices[sub.id]);

            return (
              <div 
                key={cat.id}
                className={`rounded-2xl border transition overflow-hidden ${
                  hasCheckedSub ? 'bg-[#FE083B]/5 border-[#FE083B]/60' : 'bg-black/40 border-white/10 hover:border-white/30'
                }`}
              >
                {/* Category Header Dropdown Toggle */}
                <div 
                  onClick={() => toggleCategoryExpand(cat.id)}
                  className="p-5 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl border ${hasCheckedSub ? 'bg-[#FE083B]/20 border-[#FE083B]/40' : 'bg-white/5 border-white/10'}`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{cat.name}</h4>
                      <span className="text-xs text-neutral-400">{cat.desc}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {hasCheckedSub && (
                      <span className="text-[10px] bg-[#FE083B]/20 text-[#FE083B] border border-[#FE083B]/30 px-2 py-0.5 rounded-full font-semibold">Selected</span>
                    )}
                    <IconChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${isExpanded ? 'rotate-180 text-[#FE083B]' : ''}`} />
                  </div>
                </div>

                {/* Expanded Grid of Multi-Check Sub-Services */}
                {isExpanded && (
                  <div className="p-6 border-t border-white/10 bg-black/60 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FE083B]">
                        Select specific requirements for {cat.name}:
                      </span>
                      <span className="text-xs text-neutral-400">Multiple selection allowed</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.subServices.map((sub) => {
                        const isSubChecked = selectedSubServices[sub.id];
                        return (
                          <div 
                            key={sub.id}
                            onClick={() => toggleSubService(sub.id)}
                            className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                              isSubChecked 
                                ? 'bg-[#FE083B]/15 border-[#FE083B]' 
                                : 'bg-black/40 border-white/10 hover:border-white/30'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${isSubChecked ? 'bg-[#FE083B] border-[#FE083B] text-white' : 'border-white/20'}`}>
                                {isSubChecked && <IconCheck className="w-3.5 h-3.5" />}
                              </div>
                              <span className="text-xs sm:text-sm text-white font-medium">{sub.name}</span>
                            </div>
                            <span className="text-xs text-[#FE083B] font-semibold">+${sub.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Builder Summary Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <span className="text-xs text-neutral-400 uppercase tracking-wider block">Estimated Total Investment</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">
              ${calculatedTotal.toLocaleString()}
            </span>
          </div>

          <Link 
            to="/start-project" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition shadow-lg shadow-[#FE083B]/30"
          >
            <span>Proceed With Custom Scope</span>
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* 4. CALL TO ACTION BANNER */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#141211] to-[#1c1918] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Bring Your Idea to Life?
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
          Let's discuss your unique project scope in detail. We guarantee clear communication, robust execution, and long-term partnership value.
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