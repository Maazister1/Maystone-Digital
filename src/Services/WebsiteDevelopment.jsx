// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   IconArrowRight, 
//   IconCode, 
//   IconChevronDown, 
//   IconStar, 
//   IconPalette, 
//   IconArrowUpRight,
//   IconCheck, 
//   IconServer, 
//   IconCloud, 
//   IconRocket, 
//   IconTrendingUp,
//   IconEyeOff, 
//   IconUserExclamation, 
//   IconHistory, 
//   IconGlobe, 
//   IconDeviceLaptop, 
//   IconLayoutGrid, 
//   IconApps, 
//   IconCpu, 
//   IconDatabase, 
//   IconWorldWww, 
//   IconTerminal
// } from '@tabler/icons-react';
// import CTA from '../Components/CTA';

// export default function WebsiteDevelopment() {
//   const [openFaq, setOpenFaq] = useState(null);
//   const [billingCycle, setBillingCycle] = useState('monthly');
//   const [currentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       quote: "Maystone Digital delivered a platform beyond expectations. The team was professional, responsive and truly understood our vision. Highly recommended!",
//       name: "Aleeza Khan",
//       role: "Founder, Alissa Retail",
//       avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
//     },
//     {
//       quote: "The custom web app architecture they implemented completely automated our operations. Absolute game-changer for our business scaling.",
//       name: "Zain Malik",
//       role: "CTO, TechFlow Inc.",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
//     }
//   ];

//   const faqs = [
//     { question: "How long does it typically take to build a website?", answer: "Standard business websites or Shopify stores usually take around 2 to 4 weeks depending on requirements." },
//     { question: "Will my website be mobile-friendly and fully responsive?", answer: "100% yes! Every project we build is rigorously optimized for smartphones, tablets, and desktop displays." },
//     { question: "Do you provide ongoing support and maintenance?", answer: "Yes, we offer ongoing maintenance packages to keep your platform secure and updated." },
//     { question: "Can you help with content, branding or copywriting?", answer: "Absolutely. Our creative team handles complete brand identity, UI/UX design, and conversion copywriting." },
//     { question: "Do you build custom features like booking or membership systems?", answer: "Yes, we engineer custom web applications with complex user logic, booking engines, and database connections." },
//     { question: "Can you optimize my website for Google Search (SEO)?", answer: "All our builds follow best-practice technical SEO guidelines, lightning-fast speeds, and clean semantic code." }
//   ];

//   const platforms = [
//     { name: 'Webflow', icon: IconWorldWww },
//     { name: 'WordPress', icon: IconGlobe },
//     { name: 'Shopify', icon: IconApps },
//     { name: 'Figma', icon: IconLayoutGrid },
//     { name: 'AWS', icon: IconCloud },
//     { name: 'Google Cloud', icon: IconServer },
//     { name: 'Vercel', icon: IconTerminal },
//     { name: 'Laravel', icon: IconCpu }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 overflow-hidden space-y-24">
      
//       {/* 01. HERO HEADER SECTION */}
//       <section className="px-6 md:px-16 lg:px-24 py-12 bg-[#0a0a0a] text-white">
//         <div className="max-w-4xl mx-auto text-center space-y-6">
          
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141211] border border-white/10 text-neutral-300 text-xs font-medium shadow-inner">
//             <IconCode className="w-4 h-4 text-[#FE083B]" />
//             <span>Website Development Services</span>
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.2]">
//             Website Development Services for
//             <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] via-[#FF3358] to-[#F72531]">
//               {" "}SaaS and AI Products
//             </span>
//           </h1>

//           <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//             We engineer high-performance, responsive, and beautifully crafted digital platforms tailored specifically for modern startups, enterprises, and high-growth technology brands looking to scale their digital footprint.
//           </p>

//           <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
//             <Link 
//               to="/start-project" 
//               className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-transparent border border-white/20 text-white hover:border-[#FE083B] hover:bg-[#141211] transition-all duration-300 shadow-xl"
//             >
//               <span>Let's Talk</span>
//               <div className="w-6 h-6 rounded-full bg-[#FE083B] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
//                 <IconArrowUpRight className="w-3.5 h-3.5" />
//               </div>
//             </Link>

//             <a 
//               href="#portfolio" 
//               className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-[#141211] border border-white/10 text-white hover:border-white/30 hover:bg-black transition-all duration-300 shadow-xl"
//             >
//               <span>View Our Work</span>
//               <span className="text-[#FE083B]">→</span>
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* 02. TRUSTED BY */}
//       <section className="px-6 md:px-16 lg:px-24">
//         <div className="max-w-6xl mx-auto bg-transparent border-0 rounded-none p-0"> 
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pb-12 mb-12 border-b border-white/10">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider leading-snug">
//                 WHY MAYSTONE <br />
//                 <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] via-[#FF3358] to-[#F72531] normal-case text-3xl sm:text-4xl">
//                   Digital
//                 </span>
//               </h2>
//             </div>
//             <div>
//               <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
//                 We bring design, logic, and system thinking into one development process built for launch and scale.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-6 md:gap-0 text-center md:text-left">
//             <div className="md:px-6 first:pl-0 space-y-2 flex flex-col justify-center">
//               <div className="text-3xl sm:text-4xl font-serif italic font-bold text-white">140+</div>
//               <p className="text-xs text-neutral-400 font-medium">Custom web app projects delivered</p>
//             </div>

//             <div className="md:px-6 space-y-2 flex flex-col justify-center">
//               <div className="text-3xl sm:text-4xl font-serif italic font-bold text-white">105+</div>
//               <p className="text-xs text-neutral-400 font-medium">Product teams supported</p>
//             </div>

//             <div className="md:px-6 space-y-2 flex flex-col justify-center pt-6 md:pt-0">
//               <div className="text-3xl sm:text-4xl font-serif italic font-bold text-white">06+</div>
//               <p className="text-xs text-neutral-400 font-medium">Years in product development</p>
//             </div>

//             <div className="md:px-6 last:pr-0 space-y-2 flex flex-col justify-center pt-6 md:pt-0">
//               <div className="text-3xl sm:text-4xl font-serif italic font-bold text-white">4.9</div>
//               <p className="text-xs text-neutral-400 font-medium">Average client rating</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 03. COMMON PROBLEMS */}
//       <section className="px-6 md:px-16 lg:px-24">
//         <div className="max-w-6xl mx-auto space-y-12">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/10">
//             <div>
//               <span className="text-[#FE083B] font-serif italic text-lg">Why Web Development Matters</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">A Stronger Digital Presence Solves Real Business Problems</h2>
//             </div>
//             <p className="text-neutral-400 text-sm max-w-sm">Your website is often the first impression. We help you turn it into a powerful business asset.</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 gap-6 sm:gap-0">
//             {[
//               { title: "Low Online Visibility", desc: "Get found by the right audience.", icon: IconEyeOff },
//               { title: "Poor User Experience", desc: "Turn visitors into customers.", icon: IconUserExclamation },
//               { title: "Outdated Technology", desc: "Stay ahead with modern solutions.", icon: IconHistory },
//               { title: "Lack of Scalability", desc: "Build a platform that grows with you.", icon: IconTrendingUp }
//             ].map((item, idx) => {
//               const IconComponent = item.icon;
//               return (
//                 <div key={idx} className="sm:px-6 first:pl-0 last:pr-0 space-y-3 pt-6 sm:pt-0">
//                   <div className="w-12 h-12 rounded-2xl bg-[#141211] border border-white/10 text-[#FE083B] flex items-center justify-center shadow-lg">
//                     <IconComponent className="w-6 h-6" />
//                   </div>
//                   <h3 className="font-bold text-white text-base">{item.title}</h3>
//                   <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 04. PRODUCT / DASHBOARD SHOWCASE */}
//       <section className="px-6 md:px-16 lg:px-24 py-16">
//         <div className="max-w-6xl mx-auto space-y-16">
//           <div className="text-center space-y-4 max-w-2xl mx-auto">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141211] border border-white/10 text-neutral-300 text-xs font-medium shadow-inner">
//               <IconCheck className="w-4 h-4 text-[#FE083B]" />
//               <span>Our Difference</span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
//               Full-Stack Development Built 
//               <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] via-[#FF3358] to-[#F72531]">
//                 <br />   B2B SaaS And AI Products
//               </span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-y-12 md:gap-y-0">
//             <div className="md:pr-12 md:pb-12 space-y-4 flex flex-col items-start">
//               <div className="w-12 h-12 rounded-2xl bg-[#141211] border border-white/10 text-[#FE083B] flex items-center justify-center shadow-lg">
//                 <IconServer className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-bold text-white tracking-tight">Connected Front End And Back End</h3>
//               <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
//                 We build the full product as one system, so design, logic, and data stay aligned from day one.
//               </p>
//             </div>

//             <div className="md:pl-12 md:pb-12 pt-12 md:pt-0 space-y-4 flex flex-col items-start">
//               <div className="w-12 h-12 rounded-2xl bg-[#141211] border border-white/10 text-[#FE083B] flex items-center justify-center shadow-lg">
//                 <IconCloud className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-bold text-white tracking-tight">Ready For Real Product Complexity</h3>
//               <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
//                 From permissions and dashboards to workflows and integrations, we handle the layers B2B and AI products depend on.
//               </p>
//             </div>

//             <div className="md:pr-12 md:pt-12 pt-12 border-t md:border-t border-white/10 space-y-4 flex flex-col items-start">
//               <div className="w-12 h-12 rounded-2xl bg-[#141211] border border-white/10 text-[#FE083B] flex items-center justify-center shadow-lg">
//                 <IconRocket className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-bold text-white tracking-tight">Built For Faster Launches</h3>
//               <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
//                 A more connected process means fewer blockers, quicker iteration, and a shorter path from idea to working product.
//               </p>
//             </div>

//             <div className="md:pl-12 md:pt-12 pt-12 border-t md:border-t border-white/10 space-y-4 flex flex-col items-start">
//               <div className="w-12 h-12 rounded-2xl bg-[#141211] border border-white/10 text-[#FE083B] flex items-center justify-center shadow-lg">
//                 <IconTrendingUp className="w-6 h-6" />
//               </div>
//               <h3 className="text-xl font-bold text-white tracking-tight">Structured For Long-Term Growth</h3>
//               <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
//                 We build with scale in mind so your product is easier to improve, expand, and support as the business grows.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 05. FEATURED PORTFOLIO */}
//       <section id="portfolio" className="px-6 md:px-16 lg:px-24">
//         <div className="max-w-6xl mx-auto space-y-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
//             <div>
//               <span className="text-[#FE083B] font-serif italic text-lg">Our Recent Work</span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Websites That Make an Impact</h2>
//             </div>
//             <Link to="/casestudy/casestudiepage" className="text-sm font-semibold text-neutral-300 hover:text-white flex items-center gap-1">
//               <span>View All Projects</span> →
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { tag: "E-COMMERCE", title: "Alissa Fashion & Retail", desc: "Shopify • UI/UX • Development", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800" },
//               { tag: "WEB APPLICATION", title: "Autoreach Dashboard", desc: "SaaS • Custom Development", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
//               { tag: "REAL ESTATE", title: "Beierce Real Estate", desc: "WordPress • Real Estate • UI/UX", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800" }
//             ].map((p, i) => (
//               <div key={i} className="bg-[#141211] border border-white/10 rounded-3xl overflow-hidden p-4 group hover:border-[#FE083B]/50 transition">
//                 <div className="h-60 rounded-2xl overflow-hidden bg-neutral-900 mb-4 relative">
//                   <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80" />
//                   <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#FE083B] border border-white/10">{p.tag}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
//                 <p className="text-xs text-neutral-400">{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 06. TEAM / EXPERTISE */}
//       <section className="px-6 md:px-16 lg:px-24">
//         <div className="max-w-6xl mx-auto bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <span className="text-[#FE083B] font-serif italic text-xl">Meet The Experts</span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white">A Team That Turns Ideas Into Digital Experiences</h2>
//             <p className="text-neutral-300 text-sm leading-relaxed">
//               We're a team of designers, developers, and strategists passionate about building digital products that create real business value.
//             </p>
//             <div className="space-y-2.5">
//               {['Experienced & Dedicated Team', 'Clear Communication', 'On-Time Delivery', 'Long-Term Support'].map((txt, i) => (
//                 <div key={i} className="flex items-center gap-3 text-sm text-neutral-200">
//                   <div className="w-5 h-5 rounded-full bg-[#FE083B]/20 text-[#FE083B] flex items-center justify-center">
//                     <IconCheck className="w-3.5 h-3.5" />
//                   </div>
//                   <span>{txt}</span>
//                 </div>
//               ))}
//             </div>
//             <Link to="/start-project" className="inline-block bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-[#FE083B]/30">
//               Get to Know Us
//             </Link>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="h-64 rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden col-span-2">
//               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" alt="Team" className="w-full h-full object-cover opacity-80" />
//             </div>
//             <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-center">
//               <div className="text-2xl font-bold text-[#FE083B]">5+</div>
//               <div className="text-[10px] text-neutral-400 mt-1">Years of Experience</div>
//             </div>
//             <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-center flex flex-col justify-center">
//               <div className="text-xs font-bold text-white">15+ Experts</div>
//               <div className="text-[10px] text-neutral-400 mt-1">Ready to build</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 07. PRICING / PACKAGES */}
//       <section className="px-6 md:px-16 lg:px-24">
//         <div className="max-w-6xl mx-auto space-y-12">
//           <div className="text-center space-y-4 max-w-2xl mx-auto">
//             <span className="text-[#FE083B] font-serif italic text-xl">Flexible Plans</span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose a Plan That Fits Your Goals</h2>
//             <div className="inline-flex items-center gap-3 bg-[#141211] border border-white/10 p-1.5 rounded-full">
//               <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${billingCycle === 'monthly' ? 'bg-[#FE083B] text-white' : 'text-neutral-400'}`}>Monthly</button>
//               <button onClick={() => setBillingCycle('annual')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1 ${billingCycle === 'annual' ? 'bg-[#FE083B] text-white' : 'text-neutral-400'}`}>
//                 Yearly <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-full">Save 20%</span>
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {[
//               { name: "Essential", desc: "Perfect for small businesses", price: "$1,499", popular: false, feats: ["5 Page Website", "Responsive Design", "Basic SEO Setup", "Contact Form", "1 Month Support"] },
//               { name: "Business", desc: "Ideal for growing businesses", price: "$2,499", popular: true, feats: ["Up to 10 Pages", "Custom Design", "Advanced SEO", "Analytics Integration", "3 Months Support"] },
//               { name: "Enterprise", desc: "For large scale businesses", price: "$4,999", popular: false, feats: ["Custom Functionality", "Web Application", "API Integrations", "Performance Optimization", "6 Months Support"] }
//             ].map((plan, i) => (
//               <div key={i} className={`bg-[#141211] border rounded-3xl p-8 flex flex-col justify-between relative ${plan.popular ? 'border-[#FE083B] shadow-2xl shadow-[#FE083B]/20 lg:-translate-y-2' : 'border-white/10'}`}>
//                 {plan.popular && (
//                   <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FE083B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
//                 )}
//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
//                     <p className="text-xs text-neutral-400 mt-1">{plan.desc}</p>
//                   </div>
//                   <div className="text-4xl font-extrabold text-white">{plan.price}</div>
//                   <ul className="space-y-3 pt-2">
//                     {plan.feats.map((f, idx) => (
//                       <li key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
//                         <IconCheck className="w-4 h-4 text-[#FE083B]" />
//                         <span>{f}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="pt-8">
//                   <Link to="/start-project" className={`w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition ${plan.popular ? 'bg-[#FE083B] text-white shadow-lg shadow-[#FE083B]/30' : 'bg-black/50 border border-white/10 text-white hover:bg-white/10'}`}>
//                     Get Started →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* 08. PLATFORMS / TOOLS */}
//       <section className="px-6 md:px-16 lg:px-24">
//         <div className="max-w-6xl mx-auto bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-8">
//           <div>
//             <span className="text-[#FE083B] font-serif italic text-lg">Present On Top Platforms</span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Where Great Ideas Come to Life</h2>
//             <p className="text-neutral-400 text-sm max-w-xl mx-auto mt-2">
//               We work with the best tools and platforms to ensure modern, scalable, and high-performing solutions.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             {platforms.map((item, i) => {
//               const IconComponent = item.icon;
//               return (
//                 <div 
//                   key={i} 
//                   className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center gap-3 text-neutral-300 hover:border-[#FE083B]/50 transition group"
//                 >
//                   <IconComponent className="w-5 h-5 text-neutral-400 group-hover:text-[#FE083B] transition" />
//                   <span className="font-mono text-sm font-bold">{item.name}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 09. CLIENT TESTIMONIALS */}
//       <section className="px-6 md:px-16 lg:px-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="space-y-2 mb-8">
//             <span className="text-[#FE083B] font-bold uppercase tracking-widest text-xs">Client Testimonials</span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
//           </div>
//           <div className="bg-[#141211] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-full bg-[#FE083B]/20 text-[#FE083B] flex items-center justify-center font-bold text-xl">“</div>
//               <div className="space-y-4">
//                 <p className="text-neutral-200 text-base sm:text-lg">{testimonials[currentTestimonial].quote}</p>
//                 <div className="flex items-center gap-3">
//                   <img src={testimonials[currentTestimonial].avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
//                   <div>
//                     <h4 className="font-bold text-white text-sm">{testimonials[currentTestimonial].name}</h4>
//                     <p className="text-neutral-400 text-xs">{testimonials[currentTestimonial].role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, i) => <IconStar key={i} className="w-5 h-5 fill-[#FE083B] text-[#FE083B]" />)}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 10. FAQS SECTION */}
     
//     {/* FAQ SECTION (MATCHING REFERENCE DESIGN) */}
//     <section className="px-6 md:px-16 lg:px-24 py-16">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* LEFT COLUMN: Title & Book Call Card */}
//           <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
//             <div className="space-y-4">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
//                 Got Questions? <br />
//                 <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] via-[#FF3358] to-[#F72531]">
//                   We've Got Answers
//                 </span>
//               </h2>
//               <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
//                 If you're unsure where to start or want to see how we can help, reach out, and we'll walk you through it.
//               </p>
//             </div>

//             {/* Book an Intro Call Card */}
//             <div className="bg-[#141211] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
//               <div className="flex items-center gap-4">
//                 <img 
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
//                   alt="Founder" 
//                   className="w-12 h-12 rounded-full object-cover border border-white/20"
//                 />
//                 <div>
//                   <h4 className="font-bold text-white text-base">Book an Intro Call</h4>
//                   <p className="text-neutral-400 text-xs">Let's talk through your goals and timeline.</p>
//                 </div>
//               </div>

//               {/* Updated Dark Theme Button */}
//               <Link 
//                 to="/start-project" 
//                 className="w-full py-3.5 px-6 rounded-2xl bg-black/60 border border-white/10 text-white font-bold text-xs flex items-center justify-between hover:border-[#FE083B]/50 hover:bg-[#1a1716] transition-all shadow-lg group"
//               >
//                 <span>Book a Call</span>
//                 <div className="w-6 h-6 rounded-full bg-[#FE083B] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
//                   <IconArrowUpRight className="w-3.5 h-3.5" />
//                 </div>
//               </Link>

//               <div className="pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-neutral-400">
//                 <IconWorldWww className="w-4 h-4 text-[#FE083B]" />
//                 <span>Prefer email? <a href="mailto:hello@maystone.digital" className="text-white underline hover:text-[#FE083B]">hello@maystone.digital</a></span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: FAQ Accordions */}
//           <div className="lg:col-span-7 space-y-4">
//             {faqs.map((faq, index) => {
//               const isOpen = openFaq === index;
//               return (
//                 <div 
//                   key={index} 
//                   className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
//                     isOpen ? 'bg-[#141211] border-[#FE083B]/50 shadow-lg' : 'bg-[#141211] border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button 
//                     onClick={() => setOpenFaq(isOpen ? null : index)} 
//                     className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 font-semibold text-white text-sm sm:text-base"
//                   >
//                     <span>{faq.question}</span>
//                     <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
//                       isOpen ? 'bg-[#FE083B] border-[#FE083B] text-white rotate-45' : 'bg-black/40 border-white/10 text-neutral-400'
//                     }`}>
//                       <span className="text-lg font-light leading-none">+</span>
//                     </div>
//                   </button>
                  
//                   {isOpen && (
//                     <div className="px-6 pb-5 text-neutral-400 text-xs sm:text-sm border-t border-white/5 pt-3 leading-relaxed">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </section>
//       {/* FINAL CTA SECTION */}
//       <CTA />

//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconArrowRight, 
  IconCode, 
  IconStack, 
  IconDeviceLaptop, 
  IconShieldCheck, 
  IconChevronDown, 
  IconStar, 
  IconArrowLeft 
} from '@tabler/icons-react';
import CTA from '../Components/CTA';

export default function WebsiteDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Maystone Digital engineered our entire SaaS platform from scratch. The code quality, performance, and component architecture are world-class.",
      name: "Zainab Alvi",
      role: "CTO, CloudScale Inc.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Nothing was bolted on afterwards. Every layer was specified, built, and tested seamlessly. Our conversion rates doubled within a month.",
      name: "Farhan Qureshi",
      role: "Founder, Apex Commerce",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Clean documented code, full ownership handed over, and blazing-fast loading speeds. They carry your business, not just your brand.",
      name: "Hamza Malik",
      role: "Director of Product, Nexus Labs",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('process-section');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollHeight = rect.height - windowHeight;
      const currentScroll = windowHeight - rect.top;
      
      let progress = (currentScroll / totalScrollHeight) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const techGroups = [
    { label: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Vite & Turbopack"] },
    { label: "Backend", items: ["Node.js / Express", "Python / Flask", "REST & GraphQL APIs", "Microservices"] },
    { label: "Data & Cloud", items: ["PostgreSQL / MySQL", "MongoDB & Redis", "AWS / Vercel / Cloudinary", "Docker & Kubernetes"] },
    { label: "DevOps & Quality", items: ["CI/CD Pipelines", "Jest & Cypress", "Performance Audits", "Security Hardening"] }
  ];

  const layers = [
    { label: "Interface", desc: "Responsive front-end engineering built as a component system." },
    { label: "Application logic", desc: "Secure server logic, authentication and business rules." },
    { label: "Data", desc: "Database design with SQL or MongoDB, modelled around real workflows." },
    { label: "Integrations", desc: "APIs, payments and third-party systems connected cleanly." },
    { label: "Deployment", desc: "Cloud deployment with CI pipelines and repeatable releases." },
    { label: "Scale & security", desc: "Performance budgets, monitoring and security hardening." },
  ];

  const faqs = [
    {
      question: "How long does a typical custom web development project take?",
      answer: "Timelines depend on scope and complexity. Standard custom web platforms or applications typically range from 4 to 10 weeks from initial scoping to production launch."
    },
    {
      question: "Do we own the source code and intellectual property upon completion?",
      answer: "Yes, absolutely. You receive 100% ownership of all source code, design assets, and deployment credentials with a complete, clean handover."
    },
    {
      question: "What tech stack do you use for building web applications?",
      answer: "We specialize in modern, high-performance stacks including React, Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, and robust cloud hosting infrastructure."
    },
    {
      question: "Do you provide ongoing support and maintenance after launch?",
      answer: "Yes, we offer flexible post-launch monitoring, performance optimization, security updates, and ongoing feature development retainers."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] selection:bg-[#FE083B] selection:text-white overflow-x-hidden">
      
      {/* Infinite Marquee Animation Style */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .animate-custom-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 px-6 md:px-16 lg:px-24 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FE083B]/10 blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block">
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Web Development & Digital Platforms
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            <span>Bespoke websites, applications and</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> digital platforms</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Engineering high-performance web applications and digital experiences that carry your business forward, not just your brand.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {[
              { label: 'Custom Web Apps', icon: IconCode },
              { label: 'Component Systems', icon: IconStack },
              { label: 'Secure Architecture', icon: IconShieldCheck },
              { label: 'Cloud Scalability', icon: IconDeviceLaptop },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141211] border border-white/10 text-xs text-neutral-300 font-medium shadow-md">
                  <IconComp className="w-4 h-4 text-[#FE083B]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-8 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-[#FE083B]/25"
            >
              <span>Start a project</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#case-studies" 
              className="px-8 py-3.5 rounded-full text-sm font-medium bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 transition text-white"
            >
              See the work
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRO / MOCKUP SECTION */}
      <section className="py-20 px-6 md:px-16 lg:px-24 border-t border-white/10 bg-[#0c0a09]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] text-white">
                Engineering that carries your business,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">not just your brand</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                We build scalable, resilient web platforms designed to handle complex business logic, heavy traffic, and seamless user experiences without compromise.
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                Every line of code is written with performance budgets, absolute security, and long-term maintainability in mind.
              </p>
              <div className="pt-2">
                <a href="#process-section" className="text-sm font-bold text-[#FE083B] flex items-center gap-2 hover:underline">
                  <span>How we deliver</span>
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141211] p-3 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FE083B]/10 to-transparent pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
                alt="Custom web application interface built by Maystone Digital" 
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-105 transition duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYERS SECTION */}
      <section className="py-24 px-6 md:px-16 lg:px-24 border-t border-white/10 bg-[#0c0a09]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Architectural Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Every build is assembled in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">layers</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Nothing is bolted on afterwards. Each layer is specified, built, and rigorously tested before the next one depends on it.
            </p>
          </div>

          <ol className="space-y-4">
            {layers.map((l, i) => (
              <li key={l.label} className="group grid items-baseline gap-4 rounded-2xl border border-white/10 bg-[#141211] px-6 py-6 transition-all hover:border-[#FE083B]/50 sm:grid-cols-[4rem_14rem_1fr] sm:px-9 shadow-lg">
                <span className="font-mono text-sm text-[#FE083B]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xl font-semibold text-white group-hover:text-[#FE083B] transition">{l.label}</span>
                <span className="text-sm text-neutral-400 leading-relaxed">{l.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. INFINITE TECH MARQUEE SECTION */}
      <section className="border-t border-b border-white/10 py-10 bg-[#0c0a09]/80 backdrop-blur-md relative overflow-hidden">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
            Modern technologies and frameworks we engineer with
          </p>
        </div>
        <div className="relative overflow-hidden w-full flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="animate-custom-marquee flex items-center gap-16 whitespace-nowrap">
            {[...techGroups, ...techGroups].map((group, idx) => (
              <div key={idx} className="flex items-center gap-3 text-neutral-300 hover:text-white transition duration-300 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm font-bold tracking-wider font-mono text-[#FE083B]">
                  {group.label}:
                </span>
                <span className="text-sm text-neutral-300">
                  {group.items.join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS & STANDARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Our Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineering standards we hold ourselves to
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Written into the project scope before a single line of code is committed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "99.9%", label: "Uptime SLA Guarantee", desc: "Built for resilience with robust cloud infrastructure and auto-scaling." },
            { value: "< 1.2s", label: "Average Page Load Speed", desc: "Optimized asset delivery, server-side rendering, and strict performance budgets." },
            { value: "100%", label: "Code Ownership & Handover", desc: "Clean, documented codebases handed directly to your internal engineering team." }
          ].map((stat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#141211] border border-white/10 hover:border-[#FE083B]/50 transition group space-y-3">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">
                {stat.value}
              </div>
              <h3 className="text-lg font-bold text-white">{stat.label}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TECH STACK BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10 bg-[#0c0a09]/40">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#FE083B] font-serif italic text-xl">
            Tech Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technologies We Work With
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((g) => (
            <div key={g.label} className="bg-[#141211] p-8 space-y-4 hover:bg-[#1a1716] transition">
              <h3 className="text-sm font-semibold text-[#FE083B] font-mono uppercase tracking-wider">{g.label}</h3>
              <ul className="space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="text-sm text-neutral-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE083B]"></span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7. OUR PROCESS SECTION (WITH SCROLL PROGRESS LINE) */}
      <section id="process-section" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 border-t border-white/10 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            From first conversation to continuous improvement
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            A structured workflow ensuring absolute clarity and excellence at every phase.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative space-y-12 md:space-y-16">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-white/10 -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-10 w-[2px] bg-[#FE083B] -translate-x-1/2 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(254,8,59,0.8)]" style={{ height: `${scrollProgress}%` }}></div>

          {[
            {
              step: "01",
              title: "Discovery & Architecture Planning",
              desc: "We analyze your business workflows, define technical requirements, and map out the complete application architecture."
            },
            {
              step: "02",
              title: "Component Design & UI Engineering",
              desc: "Building a modular, responsive design system and front-end interface optimized for speed and accessibility."
            },
            {
              step: "03",
              title: "Backend & Database Integration",
              desc: "Developing secure server logic, API endpoints, authentication, and robust database models."
            },
            {
              step: "04",
              title: "Rigorous Testing & QA",
              desc: "Conducting performance audits, security hardening, end-to-end testing, and cross-device verification."
            },
            {
              step: "05",
              title: "Deployment & Continuous Support",
              desc: "Seamless cloud launch with CI/CD pipelines, complete code handover, and ongoing monitoring."
            }
          ].map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-8`}>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-[#141211] border border-white/10 p-8 rounded-3xl hover:border-[#FE083B]/50 transition group shadow-xl">
                    <span className="text-xs font-bold text-[#FE083B] uppercase tracking-wider font-mono">
                      Phase {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[#FE083B] transition">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center Badge Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#141211] border-2 border-[#FE083B] items-center justify-center text-[#FE083B] font-bold text-sm shadow-[0_0_15px_rgba(254,8,59,0.4)] z-10">
                  {item.step}
                </div>

                {/* Empty Spacer for Layout balance */}
                <div className="hidden md:block w-1/2"></div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 8. GALLERY / PREVIOUS BUILDS */}
      <section id="case-studies" className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              Interfaces and platforms we have engineered
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition">
              <span>View All Work</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", tag: "Web Platform", title: "Enterprise Analytics Dashboard", desc: "High-frequency data streaming and custom visualization components." },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", tag: "Component System", title: "Design System & UI Library", desc: "Modular, accessible React component library built for scale." },
            { img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop", tag: "SaaS Application", title: "Cloud Workflow Automation", desc: "Secure multi-tenant architecture with real-time sync." },
            { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", tag: "Mobile UI / Web", title: "Collaborative Workspace Portal", desc: "Real-time collaboration tools with sub-millisecond latency." }
          ].map((project, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-[#141211] border border-white/10 p-4">
              <div className="h-72 rounded-2xl bg-gradient-to-br from-neutral-900 to-black overflow-hidden relative border border-white/5">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#FE083B] border border-white/10">
                  {project.tag}
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{project.desc}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FE083B] group-hover:border-[#FE083B] transition">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
        <div className="space-y-3 mb-10">
          <span className="text-[#FE083B] font-bold uppercase tracking-widest text-xs">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Founders & CTOs Say About Our Engineering
          </h2>
        </div>

        <div className="bg-[#141211] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-4 md:gap-6 flex-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FE083B]/10 border border-[#FE083B]/20 flex-shrink-0 flex items-center justify-center text-[#FE083B] shadow-inner">
                <span className="text-2xl md:text-3xl font-serif font-bold">“</span>
              </div>
              <div className="space-y-6">
                <p className="text-neutral-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10" />
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-neutral-400 text-xs md:text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between lg:justify-end gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-5 h-5 fill-[#FE083B] text-[#FE083B]" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button onClick={prevTestimonial} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#FE083B]/50 flex items-center justify-center text-white transition hover:bg-white/10" aria-label="Previous">
                  <IconArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:border-[#FE083B]/50 flex items-center justify-center text-white transition hover:bg-white/10" aria-label="Next">
                  <IconArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[#FE083B] font-serif italic text-xl md:text-2xl tracking-wide">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Everything you need to know about our web development process, deliverables, and ownership.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-[#141211] border border-white/10 rounded-2xl overflow-hidden transition">
                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none">
                  <span className="font-semibold text-white text-base md:text-lg">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FE083B]/20 text-[#FE083B] border-[#FE083B]/30' : ''}`}>
                    <IconChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-neutral-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Global CTA Component */}
      <div id="contact">
        <CTA />
      </div>

    </div>
  );
}