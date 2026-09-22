import React from 'react';
import { motion } from 'framer-motion';
import { IconShieldCheck, IconBolt, IconUsers, IconAward } from '@tabler/icons-react';

const AboutSection = () => {
  const points = [
    { icon: <IconAward className="w-4 h-4 text-[#FE5211]" />, text: "Senior-led delivery" },
    { icon: <IconShieldCheck className="w-4 h-4 text-[#FE5211]" />, text: "Enterprise-grade security" },
    { icon: <IconBolt className="w-4 h-4 text-[#FE5211]" />, text: "Fast, agile execution" },
    { icon: <IconUsers className="w-4 h-4 text-[#FE5211]" />, text: "Dedicated teams" },
  ];

  const cards = [
    {
      title: "Our mission",
      description: "To make premium digital capability accessible to every ambitious UK business."
    },
    {
      title: "Our approach",
      description: "Strategy first, then design, build and optimise — measured against your goals."
    },
    {
      title: "Our promise",
      description: "Transparent communication, senior expertise and work we're proud to sign."
    }
  ];

  return (
    <section className="relative w-full bg-[#000000] py-24 px-4 sm:px-6 overflow-hidden border-t border-neutral-800/80">
      
      {/* VIP Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-[550px] h-[300px] bg-gradient-to-r from-[#FA0E33]/35 to-[#FE5211]/25 rounded-full blur-[130px]"></div>
      </motion.div>

      {/* Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
          {/* Left Side: Heading & Description with Spring Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, type: "spring", stiffness: 80, damping: 20 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FE5211] mb-2"
            >
              ABOUT MAYSTONE
            </motion.p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              A premium digital partner <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">built for UK growth</span>
            </h2>

            <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-4">
              Maystone Digital is a full-service digital solutions agency helping UK businesses modernise, automate and grow. We combine world-class engineering, creative craft and operational expertise to deliver outcomes — not just deliverables.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-6">
              From startups to established enterprises, our multidisciplinary teams act as a true extension of your business, obsessed with quality and measurable results.
            </p>

            {/* Features / Icons Grid with Staggered Pop-In */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {points.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1), type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(23, 23, 23, 0.8)" }}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-neutral-950/40 border border-neutral-800/60 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-neutral-300 text-[11px] sm:text-xs font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Side: Stacked Cards Container with VIP Hover Lift */}
          <motion.div 
            initial={{ opacity: 0, x: 60, scale: 0.95, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="lg:col-span-6 bg-[#000000] border border-neutral-800/80 rounded-2xl p-5 sm:p-6 relative overflow-hidden backdrop-blur-md flex flex-col gap-3.5 shadow-2xl shadow-black/80"
          >
            
            {/* Top Red Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211]"></div>

            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.12), ease: "easeOut" }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.015,
                  borderColor: "rgba(250, 14, 51, 0.5)",
                  backgroundColor: "rgba(17, 15, 15, 0.9)" 
                }}
                className="bg-neutral-950/60 border border-neutral-800/60 rounded-xl p-4 transition-all duration-300 cursor-pointer shadow-md"
              >
                <h3 className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent mb-1">
                  {card.title}
                </h3>
                <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;