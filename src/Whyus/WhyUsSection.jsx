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
      
      {/* Container - Made Wider (max-w-6xl) */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {items.map((item, index) => {
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
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                className="bg-[#0D0B0B] border border-neutral-800/80 hover:border-[#FA0E33] rounded-2xl p-7 relative overflow-hidden backdrop-blur-md transition-colors duration-300 group shadow-xl cursor-pointer"
              >
                {/* Standardized Consistent Top Gradient Border Accent */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#FA0E33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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