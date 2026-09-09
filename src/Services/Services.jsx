// import React from 'react';
// import { 
//   IconCode, 
//   IconRobot, 
//   IconCalculator, 
//   IconSpeakerphone, 
//   IconPalette, 
//   IconHeadset, 
//   IconArrowRight 
// } from '@tabler/icons-react';

// const Services = () => {
//   const servicesList = [
//     {
//       icon: <IconCode className="w-5 h-5 text-white" />,
//       title: "Digital Solutions",
//       description: "High-performance websites, web apps and platforms engineered for speed, scale and conversion.",
//       link: "#digital-solutions"
//     },
//     {
//       icon: <IconRobot className="w-5 h-5 text-white" />,
//       title: "AI & BPO",
//       description: "AI-driven automation and outsourced back-office operations that cut costs and boost efficiency.",
//       link: "#ai-bpo"
//     },
//     {
//       icon: <IconCalculator className="w-5 h-5 text-white" />,
//       title: "Financial Reporting & Tax Advisory",
//       description: "Accurate management reporting, bookkeeping and expert tax advisory to keep you compliant.",
//       link: "#financial-reporting"
//     },
//     {
//       icon: <IconSpeakerphone className="w-5 h-5 text-white" />,
//       title: "Marketing",
//       description: "SEO, PPC, paid social and content strategy built to generate measurable, sustainable growth.",
//       link: "#marketing"
//     },
//     {
//       icon: <IconPalette className="w-5 h-5 text-white" />,
//       title: "Creative & Branding",
//       description: "Distinctive brand identities, UI/UX design and creative campaigns that make you unforgettable.",
//       link: "#creative-branding"
//     },
//     {
//       icon: <IconHeadset className="w-5 h-5 text-white" />,
//       title: "Back-Office Support",
//       description: "Reliable administrative and operational support so your team can focus on growth.",
//       link: "#back-office"
//     }
//   ];

//   return (
//     <section id="services" className="relative w-full bg-[#000000] py-20 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-neutral-800/80">
      
//       {/* Background Glow Effect */}
//       <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-15">
//         <div className="w-[500px] h-[300px] bg-gradient-to-r from-[#FA0E33]/30 to-[#FE5211]/20 rounded-full blur-[120px]"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#FE5211] mb-3">
//             WHAT WE DO
//           </p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.15]">
//             Everything you need, <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">under one roof</span>
//           </h2>
//           <p className="text-neutral-400 text-xs sm:text-sm mt-4 max-w-xl mx-auto font-normal leading-relaxed">
//             Six connected disciplines that work together to move your business forward.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//           {servicesList.map((service, index) => (
//             <div
//               key={index}
//               className="group relative bg-[#0D0B0B] border border-neutral-800/80 hover:border-[#FA0E33]/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FA0E33]/10 backdrop-blur-sm"
//             >
//               <div>
//                 {/* Icon Box */}
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FA0E33] to-[#FE5211] flex items-center justify-center shadow-md shadow-[#FA0E33]/20 mb-6 transition-transform duration-300 group-hover:scale-110">
//                   {service.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Learn More Link */}
//               <div>
//                 <a
//                   href={service.link}
//                   className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#FE5211] transition-colors"
//                 >
//                   <span>Learn more</span>
//                   <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#FE5211]" />
//                 </a>
//               </div>

//               {/* Top Subtle Border Highlight on Hover */}
//               <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#FA0E33]/0 group-hover:via-[#FA0E33]/60 to-transparent transition-all duration-500"></div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;


import React from 'react';
import { motion } from 'framer-motion';
import { 
  IconCode, 
  IconRobot, 
  IconCalculator, 
  IconSpeakerphone, 
  IconPalette, 
  IconHeadset, 
  IconArrowRight 
} from '@tabler/icons-react';

const Services = () => {
  const servicesList = [
    {
      icon: <IconCode className="w-5 h-5 text-white" />,
      title: "Digital Solutions",
      description: "High-performance websites, web apps and platforms engineered for speed, scale and conversion.",
      link: "#digital-solutions"
    },
    {
      icon: <IconRobot className="w-5 h-5 text-white" />,
      title: "AI & BPO",
      description: "AI-driven automation and outsourced back-office operations that cut costs and boost efficiency.",
      link: "#ai-bpo"
    },
    {
      icon: <IconCalculator className="w-5 h-5 text-white" />,
      title: "Financial Reporting & Tax Advisory",
      description: "Accurate management reporting, bookkeeping and expert tax advisory to keep you compliant.",
      link: "#financial-reporting"
    },
    {
      icon: <IconSpeakerphone className="w-5 h-5 text-white" />,
      title: "Marketing",
      description: "SEO, PPC, paid social and content strategy built to generate measurable, sustainable growth.",
      link: "#marketing"
    },
    {
      icon: <IconPalette className="w-5 h-5 text-white" />,
      title: "Creative & Branding",
      description: "Distinctive brand identities, UI/UX design and creative campaigns that make you unforgettable.",
      link: "#creative-branding"
    },
    {
      icon: <IconHeadset className="w-5 h-5 text-white" />,
      title: "Back-Office Support",
      description: "Reliable administrative and operational support so your team can focus on growth.",
      link: "#back-office"
    }
  ];

  // Parent container variants for smooth staggered children entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual card animation variants (Left, Bottom, Right directional entrance)
  const getCardVariant = (index) => {
    const type = index % 3;
    if (type === 0) {
      // Left card
      return {
        hidden: { opacity: 0, x: -70, y: 30 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
      };
    } else if (type === 1) {
      // Center card (from bottom)
      return {
        hidden: { opacity: 0, x: 0, y: 80 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
      };
    } else {
      // Right card
      return {
        hidden: { opacity: 0, x: 70, y: 30 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
      };
    }
  };

  return (
    <section id="services" className="relative w-full bg-[#000000] py-24 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-neutral-800/80">
      
      {/* Smooth Pulsing Background Glow */}
      <motion.div 
        initial={{ opacity: 0.1, scale: 0.9 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-[650px] h-[350px] bg-gradient-to-r from-[#FA0E33]/35 to-[#FE5211]/25 rounded-full blur-[150px]"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#FE5211] mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.15]">
            Everything you need, <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">under one roof</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-4 max-w-xl mx-auto font-normal leading-relaxed">
            Six connected disciplines that work together to move your business forward.
          </p>
        </motion.div>

        {/* Services Grid with Staggered Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {servicesList.map((service, index) => {
            return (
              <motion.div
                key={index}
                variants={getCardVariant(index)}
                whileHover={{ 
                  y: -8, 
                  scale: 1.01,
                  transition: { duration: 0.25, ease: "easeOut" } 
                }}
                className="group relative bg-[#0D0B0B] border border-neutral-800 hover:border-[#FA0E33] rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-[#FA0E33]/20 backdrop-blur-md transition-colors duration-300 cursor-pointer"
              >
                <div>
                  {/* Icon Box with Smooth Hover Zoom */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FA0E33] to-[#FE5211] flex items-center justify-center shadow-lg shadow-[#FA0E33]/25 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FE5211] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div>
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#FE5211] transition-colors"
                  >
                    <span>Learn more</span>
                    <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#FE5211]" />
                  </a>
                </div>

                {/* Top Glowing Border Accent on Hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FA0E33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;