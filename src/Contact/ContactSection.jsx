import React from 'react';
import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin, IconArrowRight } from '@tabler/icons-react';

const ContactSection = () => {
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
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-[#FA0E33]/35 to-[#FE5211]/25 rounded-full blur-[130px]"></div>
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
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#FA0E33] mb-2"
          >
            CONTACT US
          </motion.p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            We are <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">here</span>
          </h2>
        </motion.div>

        {/* Main Card Container with exact #1C1313 background */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 75, damping: 18 }}
          className="w-full bg-[#1C1313] border border-neutral-800/80 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/70"
        >
          
          {/* Top Red Glow Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FA0E33] to-[#FE5211]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Side: Info & Heading */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#FA0E33] mb-2"
                >
                  LET'S TALK
                </motion.p>

                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-3 leading-tight">
                  Start your next project with <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">us</span>
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Tell us about your goals and we'll get back within one business day with a tailored plan and quote.
                </p>
              </div>

              {/* Contact Details List with Hover Effects */}
              <div className="flex flex-col gap-3.5 pt-6 border-t border-neutral-800/80">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#140D0D] border border-neutral-800/80 flex items-center justify-center text-[#FA0E33] shrink-0 group-hover:border-[#FA0E33]/50 transition-colors">
                    <IconMail className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs font-medium group-hover:text-white transition-colors">hello@maystonedigital.co.uk</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#140D0D] border border-neutral-800/80 flex items-center justify-center text-[#FA0E33] shrink-0 group-hover:border-[#FA0E33]/50 transition-colors">
                    <IconPhone className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs font-medium group-hover:text-white transition-colors">+44 20 3000 0000</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#140D0D] border border-neutral-800/80 flex items-center justify-center text-[#FA0E33] shrink-0 group-hover:border-[#FA0E33]/50 transition-colors">
                    <IconMapPin className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs font-medium group-hover:text-white transition-colors">London, United Kingdom</span>
                </motion.div>
              </div>

            </motion.div>

            {/* Right Side: Form Fields */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-7 flex flex-col gap-4"
            >
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-neutral-300">Full name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="text" 
                    placeholder="Jane Smith"
                    className="bg-[#140D0D] border border-neutral-800/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-neutral-300">Email</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="email" 
                    placeholder="jane@company.com"
                    className="bg-[#140D0D] border border-neutral-800/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-neutral-300">Company</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="text" 
                    placeholder="Company Ltd"
                    className="bg-[#140D0D] border border-neutral-800/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-neutral-300">Service</label>
                  <motion.select 
                    whileFocus={{ scale: 1.01 }}
                    className="bg-[#140D0D] border border-neutral-800/80 rounded-xl px-3 py-2.5 text-xs text-neutral-400 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="ai">AI & Automation</option>
                    <option value="branding">Branding & Design</option>
                    <option value="marketing">Growth Marketing</option>
                  </motion.select>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-neutral-300">Project details</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.01 }}
                  rows="3"
                  placeholder="Tell us what you're looking to achieve..."
                  className="bg-[#140D0D] border border-neutral-800/80 rounded-xl p-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all resize-none shadow-inner"
                ></motion.textarea>
              </div>

              {/* Submit Button with Framer Motion Physics */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#FA0E33] to-[#FE5211] shadow-lg shadow-[#FA0E33]/30 hover:shadow-[#FA0E33]/50 transition-all cursor-pointer group"
              >
                <span>Send inquiry</span>
                <IconArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;