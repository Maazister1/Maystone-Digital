import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconMessageCircle, IconSearch, IconBulb, IconCode, IconRocket, IconShieldCheck } from '@tabler/icons-react';

export default function ProcessPage() {
  const processSteps = [
    {
      step: "01",
      icon: <IconMessageCircle className="w-6 h-6 text-[#FE083B]" />,
      title: "Discovery & Requirement Analysis",
      subtitle: "Listening & Understanding Your Vision",
      description: "We begin by deeply understanding your business goals, target audience, and exact requirements. By listening to your current bottlenecks and challenges, we establish a clear direction."
    },
    {
      step: "02",
      icon: <IconSearch className="w-6 h-6 text-[#FE083B]" />,
      title: "Research & Strategic Planning",
      subtitle: "Market Analysis & Roadmap",
      description: "We analyze your industry competitors and market trends to craft a comprehensive strategy. This is where project timelines, technology stacks, and key deliverables are finalized."
    },
    {
      step: "03",
      icon: <IconBulb className="w-6 h-6 text-[#FE083B]" />,
      title: "UI/UX Prototyping & Design",
      subtitle: "Visualizing The Solution",
      description: "Using Figma and modern design tools, we create user-friendly wireframes and high-fidelity prototypes so you can visualize the final look and feel in advance."
    },
    {
      step: "04",
      icon: <IconCode className="w-6 h-6 text-[#FE083B]" />,
      title: "Development & Engineering",
      subtitle: "Building With Precision",
      description: "Our expert full-stack team (React, Next.js, Node.js, and modern databases) writes clean, scalable, and optimized code. Every component goes through rigorous testing."
    },
    {
      step: "05",
      icon: <IconShieldCheck className="w-6 h-6 text-[#FE083B]" />,
      title: "Quality Assurance & Testing",
      subtitle: "Zero-Error Guarantee",
      description: "Before deployment, we conduct thorough testing of website or application speed, responsiveness, security, and cross-browser compatibility."
    },
    {
      step: "06",
      icon: <IconRocket className="w-6 h-6 text-[#FE083B]" />,
      title: "Launch & Post-Support",
      subtitle: "Going Live & Scaling",
      description: "Even after a successful live launch, we provide continuous monitoring, maintenance, and support to ensure your business grows without interruptions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-20">
        <div className="inline-block">
         <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
   How We Work
  </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>A Transparent & Proven</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> Development Process</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          From the initial idea to the final launch, we ensure absolute clarity, professional communication, and top-tier execution at every single step.
        </p>
      </div>

      {/* 2. PROCESS STEPS GRID / TIMELINE */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {processSteps.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#FE083B]/50 transition group shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-6 right-8 text-4xl sm:text-5xl font-extrabold text-white/5 group-hover:text-[#FE083B]/10 transition font-mono">
              {item.step}
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition">
                {item.icon}
              </div>

              <div>
                <span className="text-xs font-bold text-[#FE083B] uppercase tracking-wider font-mono">
                  Phase {item.step}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 font-medium">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
                {item.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 relative z-10 flex items-center justify-between text-xs text-neutral-400">
              <span>Client Collaboration</span>
              <span className="text-[#FE083B] font-semibold">100% Transparent</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. WHY OUR PROCESS WORKS SECTION */}
      <div className="max-w-4xl mx-auto bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Why Clients Trust Our Workflow
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We understand that every business is unique. Therefore, rather than using rigid templates, we adapt our process to match your specific needs to deliver maximum value and timely results.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {["On-Time Delivery", "Daily Updates", "Direct Developer Access", "Post-Launch Warranty"].map((badge, i) => (
            <div key={i} className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-neutral-300 font-medium">
              ✓ {badge}
            </div>
          ))}
        </div>
      </div>

      {/* 4. CALL TO ACTION */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#141211] to-[#1c1918] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Start Your Project With Us?
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
          Share your idea with us, and see how we transform it into reality through this proven process.
        </p>
        <div className="pt-2">
          <Link 
            to="/start-project" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition shadow-lg shadow-[#FE083B]/30"
          >
            <span>Start Your Project Now</span>
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

    </div>
  );
}