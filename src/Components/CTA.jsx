import React from 'react';
import { IconPlus } from '@tabler/icons-react';

export default function CTA() {
  return (
    <div className="w-full bg-[#0a0a0a] py-16 px-6 md:px-12 font-['Outfit'] relative overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 via-transparent to-red-950/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto bg-[#141211] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl flex flex-col items-center text-center">
        
        {/* Main Heading & Subtitle */}
        <div className="space-y-3 max-w-xl z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Ready to Build Something Great?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Let's turn your ideas into a powerful digital product.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 z-10">
          
          {/* Primary Gradient Button */}
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition shadow-lg shadow-red-600/25"
          >
            <span>Start Your Project</span>
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
              <IconPlus className="w-3 h-3 text-white" />
            </span>
          </a>

          {/* Secondary Outline Button */}
          <a 
            href="#consultation" 
            className="bg-[#0a0a0a] hover:border-red-500/50 text-white border border-white/10 px-6 py-3 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 transition"
          >
            <span>Book a Free Consultation</span>
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
              <IconPlus className="w-3 h-3 text-white" />
            </span>
          </a>

        </div>

        {/* Right-Side Handwritten Style Note (Adjusted for compact box) */}
        <div className="hidden lg:block absolute right-8 bottom-8 text-right pointer-events-none opacity-80">
          <p className="text-neutral-300 font-serif italic text-sm leading-snug tracking-wide">
            Your next <br />
            big idea starts here.
          </p>
          <div className="flex justify-end mt-1 mr-2">
            <svg className="w-8 h-5 text-red-500 transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

      </div>

    </div>
  );
}