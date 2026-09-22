import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconQuote, IconStar, IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Maystone rebuilt our platform and automated half our operations. They feel like part of our own team — sharp, fast and genuinely invested.",
      name: "Sarah Whitmore",
      role: "COO, Northgate Retail"
    },
    {
      quote: "Their senior-led execution is unmatched. They delivered our fintech web app ahead of schedule with zero quality compromises.",
      name: "Jonathan Pierce",
      role: "CTO, Sterling Pay UK"
    },
    {
      quote: "The level of transparency and technical prowess they bring is incredible. Our conversions jumped 64% right after launch.",
      name: "Charlotte Bennett",
      role: "Founder, Aura DTC"
    },
    {
      quote: "From enterprise security to agile execution, Maystone transformed how our back-office handles scale. Highly recommended!",
      name: "Michael Donovan",
      role: "Managing Director, BPO Global"
    },
    {
      quote: "An absolute powerhouse of digital capability. They didn't just build a product; they built a reliable growth engine for our business.",
      name: "Rebecca Hayes",
      role: "CEO, Innovate London"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full bg-[#000000] py-24 px-4 sm:px-6 overflow-hidden border-t border-neutral-800/80">
      
      {/* VIP Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
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
            TESTIMONIALS
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            What our clients <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 75, damping: 18 }}
          className="w-full max-w-2xl bg-[#000000] border border-neutral-800/80 rounded-3xl p-6 sm:p-9 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/60"
        >
          
          {/* Top Red Glow Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211]"></div>

          <div className="flex flex-col justify-between min-h-[190px]">
            <div>
              {/* Quote Icon & Stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-[#FA0E33]">
                  <IconQuote className="w-7 h-7 rotate-180 opacity-90" />
                </div>
                <div className="flex items-center gap-1 text-[#FE5211]">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Animated Review Text Content */}
              <div className="relative overflow-hidden min-h-[75px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.p
                    key={currentIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-neutral-200 text-xs sm:text-sm leading-relaxed italic"
                  >
                    &ldquo;{current.quote}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Author Info & Controls */}
            <div className="flex items-end justify-between pt-5 border-t border-neutral-800/80 mt-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex + "-author"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    {current.name}
                  </h3>
                  <p className="text-neutral-400 text-xs">
                    {current.role}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows with Framer Interactions */}
              <div className="flex items-center gap-2.5">
                <motion.button 
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1, borderColor: "rgba(250, 14, 51, 0.6)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <IconArrowLeft className="w-3.5 h-3.5" />
                </motion.button>
                <motion.button 
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FA0E33] to-[#FE5211] text-white flex items-center justify-center shadow-lg shadow-[#FA0E33]/30 hover:shadow-[#FA0E33]/50 transition-shadow cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <IconArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;