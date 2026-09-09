import React from 'react';
import { motion } from 'framer-motion';
import { IconArrowUpRight } from '@tabler/icons-react';
import port1 from '../assets/port-1.jpg';
import port2 from '../assets/port-2.jpg';
import port3 from '../assets/port-3.jpg';
import port4 from '../assets/port-4.jpg';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "E-commerce",
      image: port1,
      link: "#"
    },
    {
      title: "Fintech App",
      image: port2,
      link: "#"
    },
    {
      title: "Branding",
      image: port3,
      link: "#"
    },
    {
      title: "AI Dashboard",
      image: port4,
      link: "#"
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

      {/* Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
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
            SELECTED WORK
          </motion.p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            A glimpse of our <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">portfolio</span>
          </h2>
        </motion.div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {portfolioItems.map((item, index) => {
            // Directional entry setup for 4 items
            let initialPos = { opacity: 0, y: 30, scale: 0.95 };
            if (index === 0) initialPos = { opacity: 0, x: -40, y: 20, scale: 0.95 };
            else if (index === 1) initialPos = { opacity: 0, x: -20, y: 40, scale: 0.92 };
            else if (index === 2) initialPos = { opacity: 0, x: 20, y: 40, scale: 0.92 };
            else if (index === 3) initialPos = { opacity: 0, x: 40, y: 20, scale: 0.95 };

            return (
              <motion.a
                key={index}
                href={item.link}
                initial={initialPos}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 75, 
                  damping: 18, 
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  borderColor: "rgba(250, 14, 51, 0.5)",
                  backgroundColor: "rgba(17, 15, 15, 0.95)"
                }}
                className="bg-[#0D0B0B] border border-neutral-800/80 rounded-2xl overflow-hidden relative flex flex-col backdrop-blur-md transition-colors duration-300 group shadow-xl shadow-black/50 cursor-pointer"
              >
                {/* Top Red Glow Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Image / Mockup Container */}
                <div className="relative w-full h-36 overflow-hidden bg-neutral-950 flex items-center justify-center p-2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                </div>

                {/* Title & Arrow Link */}
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FE5211] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-7 h-7 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-[#FA0E33] transition-all shadow-sm">
                    <IconArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;