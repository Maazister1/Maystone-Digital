import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin, IconArrowRight, IconChevronDown, IconCheck } from '@tabler/icons-react';

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubServices, setSelectedSubServices] = useState([]);
  const dropdownRef = useRef(null);

  // Categories and their respective sub-services for checkboxes
  const serviceCategories = {
    "Web Development & Apps": [
      "Frontend Development",
      "Backend & APIs",
      "E-commerce Store",
      "Full Web App",
      "UI/UX Implementation",
      "Performance & Speed"
    ],
    "SaaS & Custom CRMs": [
      "SaaS Product Build",
      "Custom CRM Development",
      "Subscription Billing Setup",
      "Multi-tenant Architecture",
      "User Dashboard & Analytics",
      "API Integrations & Webhooks"
    ],
    "Digital Marketing & Growth": [
      "SEO & Organic Growth",
      "Paid Ads (Meta & Google)",
      "Conversion Rate Optimization",
      "Social Media Management",
      "Email Marketing Automation",
      "Funnel Building & Strategy"
    ],
    "AI & Automation Workflows": [
      "AI Chatbots",
      "Workflow Automation",
      "Custom LLM Integrations",
      "Data Scraping & Bots",
      "CRM Automations",
      "Back-office AI"
    ],
    "Branding & UI/UX Design": [
      "Brand Identity & Logo",
      "Figma Wireframes",
      "Design Systems",
      "Marketing Creatives",
      "Pitch Decks",
      "Landing Page Design"
    ],
    "BPO & Back-office Support": [
      "Customer Support",
      "Data Entry & Ops",
      "Virtual Assistants",
      "Content Moderation",
      "Lead Generation",
      "QA Testing"
    ]
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckboxChange = (subService) => {
    if (selectedSubServices.includes(subService)) {
      setSelectedSubServices(selectedSubServices.filter(item => item !== subService));
    } else {
      setSelectedSubServices([...selectedSubServices, subService]);
    }
  };

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
            className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FA0E33] mb-2"
          >
            CONTACT US
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            We are <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">here</span>
          </h2>
        </motion.div>

        {/* Main Card Container with exact #000000 background */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 75, damping: 18 }}
          className="w-full bg-[#000000] border border-neutral-800/80 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/70"
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
                  className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FA0E33] mb-2"
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
                  <div className="w-8 h-8 rounded-xl bg-[#000000] border border-neutral-800/80 flex items-center justify-center text-[#FA0E33] shrink-0 group-hover:border-[#FA0E33]/50 transition-colors">
                    <IconMail className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs font-medium group-hover:text-white transition-colors">hello@maystonedigital.co.uk</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#000000] border border-neutral-800/80 flex items-center justify-center text-[#FA0E33] shrink-0 group-hover:border-[#FA0E33]/50 transition-colors">
                    <IconPhone className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs font-medium group-hover:text-white transition-colors">+44 20 3000 0000</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#000000] border border-neutral-800/80 flex items-center justify-center text-[#FA0E33] shrink-0 group-hover:border-[#FA0E33]/50 transition-colors">
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
              className="lg:col-span-7 flex flex-col gap-4" >     
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-neutral-300">Full name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="text" 
                    placeholder="Jane Smith"
                    className="bg-[#000000] border border-neutral-800/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-neutral-300">Email</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01 }}
                    type="email" 
                    placeholder="jane@company.com"
                    className="bg-[#000000] border border-neutral-800/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner"
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
                    className="bg-[#000000] border border-neutral-800/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner"
                  />
                </div>

                {/* Creative Service Category Dropdown */}
                <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
                  <label className="text-[11px] font-medium text-neutral-300">Service Category</label>
                  
                  <div 
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#000000] border border-neutral-800/80 hover:border-[#FA0E33]/60 rounded-xl px-3.5 py-2.5 text-xs text-white flex items-center justify-between cursor-pointer transition-all shadow-inner select-none"
                  >
                    <span className={selectedCategory ? "text-white font-medium" : "text-neutral-500"}>
                      {selectedCategory || "Select a service category"}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <IconChevronDown className="w-4 h-4 text-[#FA0E33]" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 4, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 z-50 bg-[#000000] border border-neutral-800 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden backdrop-blur-xl p-1.5 max-h-64 overflow-y-auto"
                      >
                        {Object.keys(serviceCategories).map((category, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedCategory(category);
                              setSelectedSubServices([]); // Reset sub-services when category changes
                              setIsOpen(false);
                            }}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs cursor-pointer transition-all ${
                              selectedCategory === category 
                                ? "bg-[#FA0E33]/15 text-[#FA0E33] font-semibold" 
                                : "text-neutral-300 hover:bg-neutral-900 hover:text-white"}`}>
                            <span>{category}</span>
                            {selectedCategory === category && <IconCheck className="w-3.5 h-3.5 text-[#FA0E33]" />}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* Dynamic Checkboxes for Sub-services (Appears when a category is selected) */}
              <AnimatePresence>
                {selectedCategory && serviceCategories[selectedCategory] && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-2 pt-1 pb-1 overflow-hidden">
                    <label className="text-[11px] font-medium text-[#FE5211] flex items-center justify-between">
                      <span>Select specific requirements for {selectedCategory}:</span>
                      <span className="text-[10px] text-neutral-500 font-normal">Multiple selection allowed</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#000000]/60 border border-neutral-800/80 rounded-xl p-3.5">
                      {serviceCategories[selectedCategory].map((sub, idx) => {
                        const isChecked = selectedSubServices.includes(sub);
                        return (
                          <div 
                            key={idx}
                            onClick={() => handleCheckboxChange(sub)}
                            className={`flex items-center gap-2.5 p-2 rounded-lg cursor-pointer transition-all border ${
                              isChecked 
                                ? "bg-[#FA0E33]/10 border-[#FA0E33]/50 text-white" 
                                : "bg-neutral-900/50 border-neutral-800/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"
                            }`}
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                              isChecked ? "bg-[#FA0E33] border-[#FA0E33] text-white" : "border-neutral-700 bg-neutral-950"
                            }`}>
                              {isChecked && <IconCheck className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="text-[11px] font-medium">{sub}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Project Details */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-neutral-300">Project details</label>
                <motion.input 
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Tell us what you're looking to achieve..."
                  className="bg-[#000000] border border-neutral-800/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FA0E33] focus:ring-1 focus:ring-[#FA0E33]/50 transition-all shadow-inner"
                />
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