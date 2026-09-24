import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconServer, 
  IconArrowRight, 
  IconCheck, 
  IconDatabase, 
  IconShieldLock, 
  IconCpu, 
  IconCloud, 
  IconChartInfographic 
} from '@tabler/icons-react';

const SoftwareSaaSPage = () => {
  const features = [
    {
      title: "Custom SaaS Product Engineering",
      description: "From MVP to enterprise-grade scalable SaaS platforms built with high-performance architecture.",
      icon: <IconCloud className="w-6 h-6 text-[#FE083B] group-hover:text-[#FE5211] transition-colors" />
    },
    {
      title: "Tailored CRM & ERP Solutions",
      description: "Automate your customer pipelines, sales workflows, and resource management with custom-built CRMs.",
      icon: <IconDatabase className="w-6 h-6 text-[#FE083B] group-hover:text-[#FE5211] transition-colors" />
    },
    {
      title: "Enterprise Security & Compliance",
      description: "Bank-grade data encryption, role-based access control (RBAC), and secure cloud deployment.",
      icon: <IconShieldLock className="w-6 h-6 text-[#FE083B] group-hover:text-[#FE5211] transition-colors" />
    },
    {
      title: "AI-Powered Workflows",
      description: "Integrate smart automations, predictive analytics, and automated decision-making engines into your software.",
      icon: <IconCpu className="w-6 h-6 text-[#FE083B] group-hover:text-[#FE5211] transition-colors" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-neutral-100 selection:bg-[#FE083B] selection:text-white">
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-16 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FE083B]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Section Heading Style */}
          <div className="inline-block mb-4">
            <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
              Software Development & SaaS CRMs
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Scalable Enterprise Software & <span className="text-[#FE083B]">Custom SaaS Platforms</span>
          </h1>

          <p className="mt-6 text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We architect robust, secure, and lightning-fast software solutions, custom CRMs, and scalable cloud systems engineered to accelerate your business growth.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact/startproject"
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:from-red-500 hover:to-red-600 transition shadow-lg shadow-red-600/25"
            >
              <span>Build Your Software</span>
              <IconArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              to="/pricing/pricingpage"
              className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
      {/* Core Capabilities Grid */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 border-t border-white/5 bg-[#000000]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Engineered For High Performance</h2>
            <p className="text-neutral-400 text-sm mt-2">Comprehensive tech stack and robust frameworks tailored to your enterprise needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-[#000000]/80 border border-white/10 hover:border-[#FE083B] hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#000000] border border-white/10 w-fit group-hover:bg-[#FE083B]/10 transition-colors mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FE5211] transition-colors">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-20">
        <div className="group max-w-6xl mx-auto bg-gradient-to-br from-[#000000] to-[#000000] border border-white/10 hover:border-[#FE083B] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-colors">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE083B]/5 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#FE5211] font-bold uppercase text-xs tracking-[0.2em]">Enterprise Grade</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4 group-hover:text-[#FE5211] transition-colors">Why Businesses Trust Our SaaS & CRM Solutions</h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                We don't just write code; we build scalable digital ecosystems designed to optimize your operations, lower overheads, and boost user retention.
              </p>
              <ul className="space-y-3">
                {["Modular & Microservices Architecture", "Real-Time Analytics & Dashboards", "Seamless Third-Party API Integrations", "Dedicated Long-Term Maintenance & Support"].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="p-1 rounded-full bg-red-500/10 text-[#FE083B]">
                      <IconCheck className="w-4 h-4" />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#000000] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-neutral-400 text-sm">System Uptime Target</span>
                <span className="text-green-400 font-semibold text-sm">99.99%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-neutral-400 text-sm">Cloud Infrastructure</span>
                <span className="text-white font-semibold text-sm">AWS / GCP / Supabase</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-sm">Scalability Limit</span>
                <span className="text-[#FE083B] font-semibold text-sm">Infinite Horizontal Scaling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SoftwareSaaSPage;