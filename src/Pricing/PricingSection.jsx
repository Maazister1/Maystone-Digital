import React from 'react';
import { motion } from 'framer-motion';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Launch",
      price: "£1,950",
      period: "/ project",
      description: "For startups needing a premium presence fast.",
      popular: false,
      features: [
        "Custom website (up to 6 pages)",
        "Responsive design",
        "Basic SEO setup",
        "1 month support"
      ],
      ctaText: "Get started"
    },
    {
      name: "Growth",
      price: "£3,500",
      period: "/ month",
      description: "For scaling businesses that need momentum.",
      popular: true,
      features: [
        "Dedicated project team",
        "Web + marketing",
        "Ongoing SEO & content",
        "AI automation setup",
        "Priority support"
      ],
      ctaText: "Get started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For complex, multi-service engagements.",
      popular: false,
      features: [
        "Full-service partnership",
        "AI & BPO teams",
        "Financial reporting & tax",
        "Dedicated account lead",
        "24/7 SLA support"
      ],
      ctaText: "Get started"
    }
  ];

  return (
    <section className="relative w-full bg-[#000000] py-24 px-4 sm:px-6 overflow-hidden">
      
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

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header with Fade & Rise */}
        <motion.div 
          initial={{ opacity: 0, y: -25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center mb-16 flex flex-col items-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#FA0E33] mb-3"
          >
            PRICING
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 max-w-2xl leading-tight">
            Transparent plans that <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">scale with you</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            Flexible engagements for every stage. No hidden fees — ever.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          {plans.map((plan, index) => {
            // Directional & Staggered entry setup for cards
            let initialPos = { opacity: 0, y: 40, scale: 0.95 };
            if (index === 0) initialPos = { opacity: 0, x: -40, y: 25, scale: 0.95 };
            else if (index === 1) initialPos = { opacity: 0, y: 50, scale: 0.9 };
            else if (index === 2) initialPos = { opacity: 0, x: 40, y: 25, scale: 0.95 };

            return (
              <motion.div
                key={index}
                initial={initialPos}
                whileInView={{ opacity: 1, x: 0, y: plan.popular ? -8 : 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.8, 
                  type: "spring", 
                  stiffness: 75, 
                  damping: 18, 
                  delay: index * 0.15 
                }}
                whileHover={{ 
                  y: plan.popular ? -14 : -6, 
                  scale: 1.02,
                  borderColor: "rgba(250, 14, 51, 0.6)",
                  backgroundColor: "rgba(17, 15, 15, 0.95)"
                }}
                className={`bg-[#0D0B0B] rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between backdrop-blur-md transition-colors duration-300 ${
                  plan.popular 
                    ? 'border-2 border-[#FA0E33] shadow-[0_0_50px_rgba(250,14,51,0.3)]' 
                    : 'border border-neutral-800/80 shadow-xl shadow-black/50'
                }`}
              >
                {/* "Most Popular" Floating Badge with Pulsing Animation */}
                {plan.popular && (
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FA0E33] to-[#FE5211] text-white text-[10px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-lg shadow-[#FA0E33]/50 z-20"
                  >
                    Most popular
                  </motion.div>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-neutral-400 text-xs font-medium">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-400 text-xs leading-relaxed mb-6 pb-5 border-b border-neutral-800/80">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FA0E33]/15 border border-[#FA0E33]/40 flex items-center justify-center shrink-0">
                          <IconCheck className="w-3 h-3 text-[#FA0E33]" />
                        </div>
                        <span className="text-neutral-300 text-xs font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs transition-all duration-300 cursor-pointer group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#FA0E33] to-[#FE5211] text-white shadow-lg shadow-[#FA0E33]/30 hover:shadow-[#FA0E33]/50'
                        : 'bg-neutral-950 border border-neutral-800 text-white hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;