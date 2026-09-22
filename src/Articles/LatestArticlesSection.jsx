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
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FE5211] mb-2"
          >
            INSIGHTS
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Latest <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">articles</span>
          </h2>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {articles.map((article, index) => {
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
                className="bg-[#000000] border border-neutral-800/80 hover:border-[#FA0E33] rounded-2xl p-7 relative flex flex-col justify-between backdrop-blur-md transition-colors duration-300 group shadow-xl cursor-pointer overflow-hidden"
              >
                {/* Standardized Consistent Top Gradient Border Accent */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#FA0E33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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