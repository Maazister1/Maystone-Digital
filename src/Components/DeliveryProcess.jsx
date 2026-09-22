import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const DeliveryProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: "Web Development",
      heading: "Web development that performs",
      description: "We build lightning-fast, secure and scalable digital products — from marketing sites to complex web applications.",
      features: [
        "Custom design & build",
        "Headless & e-commerce",
        "Core Web Vitals optimised",
        "Ongoing maintenance"
      ],
      ctaText: "Discuss your project"
    },
    {
      title: "AI & BPO",
      heading: "AI-driven automation & back-office efficiency",
      description: "We streamline operations and cut overhead costs by integrating custom AI workflows and managed outsourcing.",
      features: [
        "Custom AI agents & LLMs",
        "Workflow automation",
        "24/7 Back-office operations",
        "Data entry & management"
      ],
      ctaText: "Automate your workflow"
    },
    {
      title: "Marketing",
      heading: "Data-driven marketing that scales",
      description: "We execute high-ROI strategies across SEO, paid media, and content to acquire high-value customers.",
      features: [
        "Advanced SEO & technical audits",
        "PPC & paid social campaigns",
        "Conversion rate optimization",
        "Analytics & attribution tracking"
      ],
      ctaText: "Scale your growth"
    },
    {
      title: "Branding",
      heading: "Unforgettable brands & UI/UX systems",
      description: "We craft distinctive brand identities and immersive digital experiences that capture attention and build loyalty.",
      features: [
        "Brand strategy & visual identity",
        "UI/UX design systems",
        "Interactive prototypes",
        "Design guidelines & assets"
      ],
      ctaText: "Redefine your brand"
    },
  {
  title: "Back Office Support",
  heading: "Reliable 24/7 technical & operational support",
  description: "We provide dedicated round-the-clock infrastructure monitoring, troubleshooting, and customer support escalation.",
  features: [
    "24/7 System monitoring & uptime",
    "Incident response & debugging",
    "Dedicated customer support desks",
    "Security patching & backups"
  ],
  ctaText: "Secure your operations"
}
  ];

  return (
    <section className="relative w-full bg-[#000000] py-20 px-4 sm:px-6 overflow-hidden border-t border-neutral-800/80"> 
      {/* Background Glow */}
      <motion.div 
        initial={{ opacity: 0.1, scale: 0.9 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[250px] bg-gradient-to-r from-[#FA0E33]/30 to-[#FE5211]/20 rounded-full blur-[110px]"></div>
      </motion.div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"> 
        {/* Section Header with Fade In Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full text-center mb-10 flex flex-col items-center">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FE5211] mb-2">
            CAPABILITIES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Explore how we <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">deliver</span>
          </h2>
        </motion.div>
        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
          {/* Left Side: Tabs with Smooth Staggered Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col gap-2.5 w-full">
            {tabsData.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors duration-300 border flex items-center justify-between ${
                    isActive
                      ? 'bg-neutral-900/95 border-[#FA0E33] text-white shadow-lg shadow-[#FA0E33]/15'
                      : 'bg-neutral-950/40 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-white'
                  }`}>
                  <span>{tab.title}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="activeDot"
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FA0E33] to-[#FE5211]"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
          {/* Right Side: Dynamic Content Card with Smooth Enter & Switch Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-8 bg-[#000000] border border-neutral-800/80 hover:border-neutral-700 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md shadow-xl"
          >
            
            {/* Top Red Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211]"></div>

            {/* Animated Tab Content Switcher */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {tabsData[activeTab].heading}
                </h4>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {tabsData[activeTab].description}
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {tabsData[activeTab].features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/50"
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FA0E33]/20 to-[#FE5211]/20 border border-[#FA0E33]/40 flex items-center justify-center shrink-0">
                        <IconCheck className="w-2.5 h-2.5 text-[#FE5211]" />
                      </div>
                      <span className="text-neutral-300 text-[11px] sm:text-xs font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#FA0E33] to-[#FE5211] hover:opacity-95 transition-all shadow-lg shadow-[#FA0E33]/25 text-xs group"
                  >
                    <span>{tabsData[activeTab].ctaText}</span>
                    <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>

              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DeliveryProcess;