import React from 'react';
import { motion } from 'framer-motion';
import { IconTrendingUp } from '@tabler/icons-react';
import port1 from '../assets/port-1.jpg';
import port2 from '../assets/port-2.jpg';
import port3 from '../assets/port-3.jpg';

const CaseStudiesSection = () => {
  const cases = [
    {
      category: "Fintech - Web App",
      image: port1,
      stat: "+180% qualified sign-ups",
      title: "Scaling a UK fintech platform",
      description: "Rebuilt the onboarding experience and automated KYC, cutting drop-off dramatically."
    },
    {
      category: "Retail - E-commerce",
      image: port2,
      stat: "+64% conversion rate",
      title: "Premium DTC store rebuild",
      description: "A high-performance headless store with a refined brand and blazing checkout."
    },
    {
      category: "Operations - AI & BPO",
      image: port3,
      stat: "40% cost reduction",
      title: "Automating back-office ops",
      description: "AI workflows plus a dedicated BPO team removed thousands of manual hours."
    }
  ];

  return (
    <section className="relative w-full bg-[#000000] py-24 px-4 sm:px-6 overflow-hidden border-t border-neutral-800/80">
      
      {/* VIP Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-[500px] h-[250px] bg-gradient-to-r from-[#FA0E33]/35 to-[#FE5211]/25 rounded-full blur-[120px]"></div>
      </motion.div>

      {/* Container - Made Wider (max-w-6xl) */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header with Fade & Rise */}
        <motion.div 
          initial={{ opacity: 0, y: -25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center mb-12 flex flex-col items-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#FE5211] mb-2"
          >
            PROOF
          </motion.p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            Featured <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">case studies</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Real outcomes for real UK businesses.
          </p>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cases.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.08 
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.01,
                  borderColor: "rgba(250, 14, 51, 0.5)",
                  backgroundColor: "rgba(17, 15, 15, 0.95)"
                }}
                className="bg-[#0D0B0B] border border-neutral-800/80 hover:border-[#FA0E33] rounded-2xl overflow-hidden relative flex flex-col backdrop-blur-md transition-colors duration-300 group shadow-xl shadow-black/50 cursor-pointer"
              >
                {/* Standardized Consistent Top Gradient Border Accent */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#FA0E33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Image Container - Made Taller & Larger */}
                <div className="relative w-full h-48 overflow-hidden bg-neutral-950 flex items-center justify-center">
                  <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md border border-neutral-800 px-2.5 py-1 rounded-lg text-[10px] font-medium text-[#FE5211]">
                    {item.category}
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Stat Badge */}
                  <div className="flex items-center gap-1.5 text-[#FE5211] text-[11px] sm:text-xs font-semibold mb-2">
                    <IconTrendingUp className="w-4 h-4" />
                    <span>{item.stat}</span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 tracking-tight group-hover:text-[#FE5211] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;