import React from 'react';
import { motion } from 'framer-motion';
import { IconAward, IconBolt, IconUsers, IconShieldCheck, IconClock, IconTarget } from '@tabler/icons-react';

const WhyUsSection = () => {
  const items = [
    {
      icon: <IconAward className="w-5 h-5 text-[#FE5211]" />,
      title: "Premium quality",
      description: "Meticulous craft on every project, from pixels to performance."
    },
    {
      icon: <IconBolt className="w-5 h-5 text-[#FE5211]" />,
      title: "Speed & agility",
      description: "Lean teams and clear process mean we ship fast without cutting corners."
    },
    {
      icon: <IconUsers className="w-5 h-5 text-[#FE5211]" />,
      title: "True partnership",
      description: "We embed with your team and share accountability for outcomes."
    },
    {
      icon: <IconShieldCheck className="w-5 h-5 text-[#FE5211]" />,
      title: "Trust & security",
      description: "Enterprise-grade standards, transparency and full data protection."
    },
    {
      icon: <IconClock className="w-5 h-5 text-[#FE5211]" />,
      title: "Always-on support",
      description: "24/7 coverage across development, operations and marketing."
    },
    {
      icon: <IconTarget className="w-5 h-5 text-[#FE5211]" />,
      title: "Results-driven",
      description: "Every engagement is tied to measurable business goals."
    }
  ];

  return (
    <section className="relative w-full bg-[#000000] py-24 px-4 sm:px-6 overflow-hidden border-t border-neutral-800/80">
      
      {/* VIP Pulsing Background Glow */}
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
            WHY MAYSTONE
          </motion.p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white max-w-lg leading-tight">
            Why leading businesses <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">choose us</span>
          </h2>
        </motion.div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {items.map((item, index) => {
            // Directional positioning: Index 0,3 (Left), Index 1,4 (Bottom/Center), Index 2,5 (Right)
            const posType = index % 3;
            let initialPos = { opacity: 0, x: 0, y: 30, scale: 0.95 };
            
            if (posType === 0) {
              initialPos = { opacity: 0, x: -50, y: 20, scale: 0.95 }; // Left se aayega
            } else if (posType === 1) {
              initialPos = { opacity: 0, x: 0, y: 50, scale: 0.9 };   // Neechay se aayega
            } else {
              initialPos = { opacity: 0, x: 50, y: 20, scale: 0.95 };  // Right se aayega
            }

            return (
              <motion.div
                key={index}
                initial={initialPos}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 75, 
                  damping: 18, 
                  delay: (index % 3) * 0.12 
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  borderColor: "rgba(250, 14, 51, 0.5)",
                  backgroundColor: "rgba(17, 15, 15, 0.95)"
                }}
                className="bg-[#0D0B0B] border border-neutral-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md transition-colors duration-300 group shadow-xl shadow-black/50 cursor-pointer"
              >
                {/* Top Red Glow Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                  {item.icon}
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white mb-2 tracking-tight group-hover:text-[#FE5211] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;