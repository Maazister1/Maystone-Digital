import React, { useState, useEffect } from 'react';

const Stack = () => {
  const statsData = [
    {
      numericValue: 120,
      suffix: "+",
      label: "Projects delivered",
    },
    {
      numericValue: 98,
      suffix: "%",
      label: "Client retention",
    },
    {
      numericValue: 40,
      suffix: "%",
      label: "Avg. cost reduction via BPO",
    },
    {
      numericValue: 24,
      suffix: "/7",
      label: "Support coverage",
    }
  ];

  // Counter Animation State
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 5000; // 5 seconds slow animation duration
    const steps = 100; // Extra smooth and gradual steps
    const intervalTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts(
        statsData.map(item => Math.floor(item.numericValue * progress))
      );

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(statsData.map(item => item.numericValue)); // Ensure final exact value
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#000000] py-10 md:py-14 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-b border-neutral-800/80">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[400px] h-[150px] bg-gradient-to-r from-[#FA0E33]/30 to-[#FE5211]/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Title / Trust Text */}
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 md:mb-8 text-center">
          TRUSTED BY AMBITIOUS UK BUSINESSES ACROSS RETAIL, FINANCE, PROPERTY & SAAS
        </p>

        {/* Stats Grid - Compact & Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-neutral-950/60 border border-neutral-800/80 hover:border-[#FA0E33]/50 rounded-xl p-5 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FA0E33]/10 backdrop-blur-sm"
            >
              {/* Animated Counter Number */}
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent mb-1 transition-transform duration-300 group-hover:scale-105">
                {counts[index]}{item.suffix}
              </h3>

              {/* Label */}
              <p className="text-neutral-400 text-[11px] md:text-xs font-medium tracking-wide">
                {item.label}
              </p>

              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211] transition-all duration-300 group-hover:w-1/2 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stack;