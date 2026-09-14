import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Performance Marketing', 'Back-Office'];

  const caseStudies = [
    {
      id: 1,
      title: "Maystone Digital Agency Platform – Full-Stack React Architecture",
      category: "Web Development",
      client: "Maystone Digital (Internal Core)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      overview: "Engineered our flagship dark-mode agency platform utilizing React, Tailwind CSS, and Tabler Icons, featuring comprehensive service routing, dynamic blog dropdowns, and interactive project inquiry forms.",
      results: ["Lightning-fast single page application routing", "Unified Outfit typography and custom #FE083B red branding", "Zero-friction client project submission pipeline"],
      techStack: ["React", "Tailwind CSS", "Tabler Icons", "React Router", "Vite"]
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard – High-End UI/UX Design System",
      category: "UI/UX Design",
      client: "FinTech Enterprise",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop",
      overview: "Crafted a complex dark-mode financial reporting and data analytics dashboard in Figma, establishing reusable design tokens and micro-interactions.",
      results: ["Reduced user cognitive load during reporting by 45%", "Delivered developer-ready Figma component library", "Seamless cross-device responsiveness"],
      techStack: ["Figma", "Design Systems", "Prototyping", "Dark Mode UI"]
    },
    {
      id: 3,
      title: "Performance Marketing & Meta Ads Scaler",
      category: "Performance Marketing",
      client: "Global E-Commerce Brand",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      overview: "Executed high-ROAS Google and Meta advertising campaigns with customized landing page funnels to capture high-intent buyer traffic.",
      results: ["Achieved 3.8x average Return on Ad Spend (ROAS)", "Lowered customer acquisition cost (CAC) by 30%", "Scaled monthly ad conversions exponentially"],
      techStack: ["Google Ads", "Meta Ads Manager", "Conversion Tracking", "Analytics"]
    },
    {
      id: 4,
      title: "Enterprise Workflow Automation & CRM Migration",
      category: "Back-Office",
      client: "Logistics & Operations Corp",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop",
      overview: "Streamlined administrative operations by organizing over 15,000 customer records into HubSpot CRM and configuring automated Zapier task triggers.",
      results: ["Saved 40+ administrative hours weekly", "Ensured 100% data confidentiality and secure backups", "Optimized internal team communication workflows"],
      techStack: ["HubSpot CRM", "Zapier", "Notion", "Admin SOPs"]
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? caseStudies 
    : caseStudies.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-16">
        <div className="inline-block">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Maystone Digital Portfolio
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>Our Proven Work</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> & Case Studies</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Explore how Maystone Digital delivers high-performance web engineering, stunning UI/UX design, and scalable business automation.
        </p>
      </div>

      {/* 2. CATEGORY TABS */}
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeTab === cat
                ? 'bg-[#FE083B] text-white shadow-lg shadow-[#FE083B]/30'
                : 'bg-[#141211] border border-white/10 text-neutral-300 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. CASE STUDIES GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-[#141211] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#FE083B]/50 transition duration-300"
          >
            <div>
              {/* Project Image Banner */}
              <div className="h-72 w-full overflow-hidden relative bg-neutral-900 border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80" 
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FE083B] border border-white/10">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-neutral-300 border border-white/10">
                  Client: <span className="text-white font-semibold">{project.client}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#FE083B] transition">
                  {project.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.overview}
                </p>

                {/* Key Results */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FE083B]">Key Outcomes:</span>
                  <ul className="space-y-1.5">
                    {project.results.map((res, i) => (
                      <li key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-[#FE083B] shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech Stack Footer */}
            <div className="p-8 pt-0 mt-auto">
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl bg-black/50 border border-white/10 text-[11px] text-neutral-400 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. CALL TO ACTION BANNER */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#141211] to-[#1c1918] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Build Something Extraordinary With Maystone?
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
          Aayein mil kar aapke project ki requirement discuss karte hain aur ek high-impact digital solution tayar karte hain.
        </p>
        <div className="pt-2">
          <Link 
            to="/start-project" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition shadow-lg shadow-[#FE083B]/30"
          >
            <span>Start Your Project</span>
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

    </div>
  );
}