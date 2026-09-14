import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconTarget, IconEye, IconShieldCheck, IconUsers, IconSparkles, IconAward, IconCode, IconDeviceLaptop, IconServer, IconRocket } from '@tabler/icons-react';

export default function AboutPage() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Dedicated Support" }
  ];

  const milestones = [
    { year: "2021", title: "The Foundation", desc: "Small freelance web dev and creative design operations start kiye." },
    { year: "2023", title: "Full-Stack Expansion", desc: "React, Node.js, aur mobile app development services add ki gayi." },
    { year: "2024", title: "Digital Agency Scaling", desc: "Performance marketing, UI/UX systems, aur enterprise support teams onboard huin." },
    { year: "2026", title: "Global Digital Partner", desc: "150+ successful projects deliver karte hue international standards establish kiye." }
  ];

  const expertises = [
    { icon: <IconCode className="w-6 h-6 text-[#FE083B]" />, title: "Full-Stack Web Dev", desc: "React, Next.js, Node.js, Python, aur modern cloud databases par high-performing web applications." },
    { icon: <IconDeviceLaptop className="w-6 h-6 text-[#FE083B]" />, title: "Creative Branding & UI/UX", desc: "Figma design systems, custom vector logos, brand manuals, aur intuitive user interfaces." },
    { icon: <IconServer className="w-6 h-6 text-[#FE083B]" />, title: "Back-Office & Automation", desc: "Zapier workflows, Notion workspaces, CRM data management, aur admin assistance." },
    { icon: <IconRocket className="w-6 h-6 text-[#FE083B]" />, title: "Performance Marketing", desc: "Google Ads (PPC), Meta Ads, aur targeted campaigns jo direct ROI generate karte hain." }
  ];

  const values = [
    {
      icon: <IconTarget className="w-6 h-6 text-[#FE083B]" />,
      title: "Result-Driven Focus",
      description: "Hum sirf aesthetic designs ya standard code nahi banate, balki aisi solutions dete hain jo aapke business ki growth aur revenue ko directly boost karein."
    },
    {
      icon: <IconShieldCheck className="w-6 h-6 text-[#FE083B]" />,
      title: "Uncompromising Quality",
      description: "Code quality se lekar UI/UX tak, har project mein highest standards maintain kiye jaate hain taake long-term reliability milti rahe."
    },
    {
      icon: <IconSparkles className="w-6 h-6 text-[#FE083B]" />,
      title: "Innovation & Speed",
      description: "Latest tech stacks aur smart workflows ke zariye fast, scalable aur future-ready products deliver karte hain."
    },
    {
      icon: <IconUsers className="w-6 h-6 text-[#FE083B]" />,
      title: "Client-Centric Partnership",
      description: "Hum clients ko sirf ek project nahi maante, balki long-term tech partner ke tor par unke vision ko reality mein convert karte hain."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-20">
        <div className="inline-block">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            About Maystone Digital
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>Engineering Digital Success</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> With Passion & Precision</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Hum ek passionate full-stack engineering aur creative digital agency hain jo complex business problems ko high-performing web apps, stunning UI/UX, aur scalable solutions mein badalte hain.
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
              Hmara maqsad businesses ko modern digital landscape mein empower karna hai. Chahe wo ek high-end web application ho, targeted performance marketing ho, ya seamless back-office operations—hum har step par excellence deliver karte hain.
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
              Ek aisi global digital agency banna jahan cutting-edge technology, creative branding, aur strategic execution ka perfect fusion milay. Hum future-proof digital products create karne mein believe rakhte hain jo long-term value generate karein.
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
          <span className="text-[#FE083B] font-serif italic text-xl tracking-wide">Our Evolution</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            The Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">So Far</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Chote beginnings se lekar ek trusted full-scale digital agency banne tak ka safar.
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
          <span className="text-[#FE083B] font-serif italic text-xl tracking-wide">Our Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">& Creative Expertise</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Hum multidimensional services provide karte hain taake aapko alag alag vendors ke paas na jana paray.
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
          <span className="text-[#FE083B] font-serif italic text-xl tracking-wide">Our Principles</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            What Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">Our Work</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Ye core principles hain jo hamare har project, decision aur client interaction ki base banate hain.
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

      {/* 7. CALL TO ACTION / BOTTOM BANNER */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#141211] to-[#1c1918] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Bring Your Idea to Life?
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
          Aayein mil kar aapke next big project par kaam shuru karte hain. Hamari team aapki requirements ke mutabiq best solution degi.
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