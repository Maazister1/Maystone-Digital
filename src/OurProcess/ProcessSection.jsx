import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discover & strategise",
      description: "We dig into your goals, users and challenges to define a clear roadmap."
    },
    {
      number: "02",
      title: "Design & build",
      description: "Our teams craft, engineer and iterate — keeping you involved at every stage."
    },
    {
      number: "03",
      title: "Launch & optimise",
      description: "We ship, measure and continuously improve to maximise long-term impact."
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
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FE5211] mb-2"
          >
            HOW WE WORK
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-lg leading-tight">
            A simple, proven <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">3-step process</span>
          </h2>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {steps.map((step, index) => {
            // Directional entry setup
            let initialPos = { opacity: 0, x: 0, y: 30, scale: 0.95 };
            if (index === 0) initialPos = { opacity: 0, x: -50, y: 20, scale: 0.95 };
            else if (index === 1) initialPos = { opacity: 0, x: 0, y: 50, scale: 0.9 };
            else if (index === 2) initialPos = { opacity: 0, x: 50, y: 20, scale: 0.95 };

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
                  delay: index * 0.15 
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  borderColor: "rgba(250, 14, 51, 0.5)",
                  backgroundColor: "rgba(17, 15, 15, 0.95)"
                }}
                className="bg-[#000000] border border-neutral-800/80 rounded-2xl p-6 sm:p-7 relative overflow-hidden backdrop-blur-md transition-colors duration-300 group shadow-xl shadow-black/50 cursor-pointer flex flex-col items-start"
              >
                {/* Top Red Glow Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent block mb-4 inline-block"
                >
                  {step.number}
                </motion.span>

                <h3 className="text-xs sm:text-sm font-bold text-white mb-2 tracking-tight group-hover:text-[#FE5211] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;