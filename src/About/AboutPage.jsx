import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconTarget, IconEye, IconShieldCheck, IconUsers, IconSparkles, IconAward, IconCode, IconDeviceLaptop, IconServer, IconRocket } from '@tabler/icons-react';
import OurTeam from '../OurTeam/OurTeam';

export default function AboutPage() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Dedicated Support" }
  ];

  const milestones = [
    { year: "2021", title: "The Foundation", desc: "Initiated small-scale freelance web development and creative design operations." },
    { year: "2023", title: "Full-Stack Expansion", desc: "Integrated React, Node.js, and comprehensive mobile app development services." },
    { year: "2024", title: "Digital Agency Scaling", desc: "Onboarded performance marketing, UI/UX systems, and enterprise support teams." },
    { year: "2026", title: "Global Digital Partner", desc: "Successfully delivered 150+ projects while establishing international quality standards." }
  ];

  const expertises = [
    { icon: <IconCode className="w-6 h-6 text-[#FE083B]" />, title: "Full-Stack Web Dev", desc: "High-performing web applications built with React, Next.js, Node.js, Python, and modern cloud databases." },
    { icon: <IconDeviceLaptop className="w-6 h-6 text-[#FE083B]" />, title: "Creative Branding & UI/UX", desc: "Figma design systems, custom vector logos, brand manuals, and intuitive user interfaces." },
    { icon: <IconServer className="w-6 h-6 text-[#FE083B]" />, title: "Back-Office & Automation", desc: "Zapier workflows, Notion workspaces, CRM data management, and administrative assistance." },
    { icon: <IconRocket className="w-6 h-6 text-[#FE083B]" />, title: "Performance Marketing", desc: "Google Ads (PPC), Meta Ads, and targeted campaigns designed to generate direct ROI." }
  ];

  const values = [
    {
      icon: <IconTarget className="w-6 h-6 text-[#FE083B]" />,
      title: "Result-Driven Focus",
      description: "We go beyond standard code and aesthetics to build solutions that directly boost your business growth and revenue."
    },
    {
      icon: <IconShieldCheck className="w-6 h-6 text-[#FE083B]" />,
      title: "Uncompromising Quality",
      description: "From code architecture to UI/UX execution, we maintain the highest industry standards for long-term reliability."
    },
    {
      icon: <IconSparkles className="w-6 h-6 text-[#FE083B]" />,
      title: "Innovation & Speed",
      description: "Leveraging cutting-edge tech stacks and smart workflows to deliver fast, scalable, and future-ready products."
    },
    {
      icon: <IconUsers className="w-6 h-6 text-[#FE083B]" />,
      title: "Client-Centric Partnership",
      description: "We act as your long-term technological partner, transforming your vision into reality with dedication."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-20">
        <div className="inline-block">
          <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
            About Maystone Digital 
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>Engineering Digital Success</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> With Passion & Precision</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          We are a passionate full-stack engineering and creative digital agency transforming complex business challenges into high-performing web applications, stunning UI/UX, and scalable solutions.
        </p>
      </div>

      {/* 2. STATS GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-[#141211] border border-white/10 rounded-3xl p-6 text-center space-y-2 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">
              {stat.number}
            </h3>
            <p className="text-sm text-neutral-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 3. OUR STORY / MISSION & VISION */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        
        <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center text-[#FE083B]">
              <IconTarget className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Our mission is to empower businesses within the modern digital landscape. Whether it is an enterprise web application, targeted performance marketing, or seamless back-office operations—we deliver excellence at every step.
            </p>
          </div>
          <div className="pt-4 border-t border-white/5 text-xs text-[#FE083B] font-semibold tracking-wider uppercase">
            Empowering Growth Through Code & Design
          </div>
        </div>

        <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center text-[#FE083B]">
              <IconEye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              To become a globally recognized digital agency where cutting-edge technology, creative branding, and strategic execution merge seamlessly to build future-proof products generating long-term value.
            </p>
          </div>
          <div className="pt-4 border-t border-white/5 text-xs text-[#FE083B] font-semibold tracking-wider uppercase">
            Shaping The Digital Future
          </div>
        </div>

      </div>

      {/* 4. OUR JOURNEY / MILESTONES TIMELINE */}
      <div className="max-w-5xl mx-auto mb-24 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
            Our Evolution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            The Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">So Far</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Tracing our path from modest beginnings to establishing a trusted full-scale digital agency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {milestones.map((item, idx) => (
            <div key={idx} className="bg-[#141211] border border-white/10 rounded-3xl p-6 space-y-3 shadow-xl hover:border-[#FE083B]/40 transition">
              <span className="text-xs font-bold text-[#FE083B] font-mono tracking-widest">{item.year}</span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. WHAT WE BRING TO THE TABLE (EXPERTISE) */}
      <div className="max-w-5xl mx-auto mb-24 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">& Creative Expertise</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Providing multidimensional services under one roof so you never have to coordinate across multiple vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {expertises.map((exp, idx) => (
            <div key={idx} className="bg-[#141211] border border-white/10 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#FE083B]/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center">
                {exp.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. CORE VALUES SECTION */}
      <div className="max-w-5xl mx-auto space-y-12 mb-20">
        <div className="text-center space-y-3">
          <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
            Our Principles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            What Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">Our Work</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            The fundamental core principles that shape our projects, decisions, and client interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-[#141211] border border-white/10 rounded-3xl p-8 space-y-4 shadow-xl hover:border-[#FE083B]/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{val.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      <OurTeam />

      {/* 7. CALL TO ACTION / BOTTOM BANNER */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#141211] to-[#1c1918] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Bring Your Idea to Life?
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
          Let's discuss what's on your mind. We love exploring new concepts, ensuring clear and transparent communication every step of the way. Reach out to us today—we look forward to hearing from you!
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