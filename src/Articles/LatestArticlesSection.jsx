import React from 'react';
import { motion } from 'framer-motion';
import { IconCalendar, IconArrowRight } from '@tabler/icons-react';

const LatestArticlesSection = () => {
  const articles = [
    {
      category: "AI & Automation",
      date: "Jun 2025",
      title: "How UK SMEs are using AI to cut operating costs",
      description: "Practical ways small and mid-sized businesses are deploying automation today.",
      link: "#"
    },
    {
      category: "Web Development",
      date: "May 2025",
      title: "Core Web Vitals: why speed is now a growth lever",
      description: "Performance directly impacts conversion. Here's what actually moves the needle.",
      link: "#"
    },
    {
      category: "Branding",
      date: "Apr 2025",
      title: "Building a premium brand on a startup budget",
      description: "Strategy-first branding principles that punch far above their weight.",
      link: "#"
    }
  ];

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
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#FE5211] mb-2"
          >
            INSIGHTS
          </motion.p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Latest <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">articles</span>
          </h2>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {articles.map((article, index) => {
            // Directional entry setup for cards
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
                className="bg-[#0D0B0B] border border-neutral-800/80 rounded-2xl p-6 relative flex flex-col justify-between backdrop-blur-md transition-colors duration-300 group shadow-xl shadow-black/50 cursor-pointer"
              >
                {/* Top Red Glow Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div>
                  {/* Top Meta: Category Tag & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-neutral-900 border border-neutral-800 text-[#FE5211] text-[10px] font-medium px-2.5 py-1 rounded-lg">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-neutral-400 text-[10px]">
                      <IconCalendar className="w-3 h-3 text-neutral-500" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#FE5211] transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Article Description */}
                  <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed mb-6">
                    {article.description}
                  </p>
                </div>

                {/* Read Article Link */}
                <div>
                  <a
                    href={article.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FE5211] hover:text-white transition-colors group/link"
                  >
                    <span>Read article</span>
                    <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LatestArticlesSection;