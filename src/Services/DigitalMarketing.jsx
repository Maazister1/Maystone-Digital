import React, { useState } from "react";
import { 
  IconArrowRight, 
  IconChevronDown, 
  IconCode, 
  IconFileText, 
  IconShieldLock, 
  IconCloud,
  IconSpeakerphone,
  IconTarget,
  IconShare3,
  IconDeviceLaptop,
  IconHelpCircle
} from "@tabler/icons-react";

export default function DigitalMarketing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const capabilities = [
    {
      title: "Paid Media & PPC",
      summary: "High-intent acquisition campaigns designed to scale profitably.",
      detail: "Precision-targeted search, social, and display campaigns backed by rigorous continuous A/B testing and first-party attribution tracking.",
      points: ["Google & Meta Ads management", "Custom landing page funnels", "ROAS-focused bidding strategies", "Real-time attribution dashboards"]
    },
    {
      title: "Digital Strategy",
      summary: "Comprehensive roadmaps aligning digital presence with revenue targets.",
      detail: "Deep audits of your current funnel, competitive landscape analysis, and structured execution plans for sustainable growth.",
      points: ["Funnel architecture design", "Competitive positioning audits", "Channel mix optimization", "Quarterly growth roadmaps"]
    },
    {
      title: "Social Media Mastery",
      summary: "Community-driven content engines that build authentic brand loyalty.",
      detail: "Strategic organic and paid social execution across LinkedIn, X, Instagram, and TikTok to capture attention and drive engagement.",
      points: ["Multi-platform content calendars", "Community management systems", "Influencer partnership management", "Viral short-form video production"]
    },
    {
      title: "Content Production",
      summary: "Authoritative, research-backed copywriting and creative assets.",
      detail: "Long-form thought leadership, whitepapers, case studies, and high-conversion ad creatives that position your brand as an industry leader.",
      points: ["Thought leadership articles", "High-converting ad copy", "Interactive case studies", "Brand voice guidelines"]
    }
  ];

  const faqs = [
    {
      q: "How soon can we expect to see results from paid media?",
      a: "Paid campaigns typically generate traffic and initial conversions within the first 14 to 30 days as algorithms optimize, while SEO and content organic engines compound over a 3 to 6-month horizon."
    },
    {
      q: "Do you handle creative production or just media buying?",
      a: "We handle both end-to-end. Our multidisciplinary team creates all ad creatives, copywriting, and landing pages so your messaging stays completely cohesive."
    },
    {
      q: "What does your reporting and attribution process look like?",
      a: "We steer clear of vanity metrics. You receive a custom real-time dashboard tracking qualified pipeline additions, customer acquisition cost (CAC), and return on ad spend (ROAS)."
    },
    {
      q: "How do we get started?",
      a: "Book an introductory call with our team. We'll audit your current digital footprint, discuss your revenue goals, and return with a custom channel plan and written quote."
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Outfit'] selection:bg-[#FE083B] selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#000000] overflow-hidden text-center">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FE083B]/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
            {/* Converted into a Tag/Badge */}
               <div className="inline-block">
  <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
     Digital Marketing & Growth Systems
  </span>
</div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto text-center">
              Campaigns, Content And Channels That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">Earn Attention</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Engineered marketing programs built to acquire high-value customers, compound organic visibility, and protect your margins through data-first attribution.
            </p>

            {/* Feature Badges below Description */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#000000] border border-white/10 text-xs sm:text-sm font-medium text-neutral-300">
                <IconCode className="w-4 h-4 text-[#FE083B]" /> Custom Web Apps
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#000000] border border-white/10 text-xs sm:text-sm font-medium text-neutral-300">
                <IconFileText className="w-4 h-4 text-[#FE083B]" /> Component Systems
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#000000] border border-white/10 text-xs sm:text-sm font-medium text-neutral-300">
                <IconShieldLock className="w-4 h-4 text-[#FE083B]" /> Secure Architecture
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#000000] border border-white/10 text-xs sm:text-sm font-medium text-neutral-300">
                <IconCloud className="w-4 h-4 text-[#FE083B]" /> Cloud Scalability
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white hover:opacity-90 shadow-xl shadow-[#FE083B]/25 transition-all"
              >
                Plan a campaign <IconArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/case-studies" 
                className="inline-flex items-center px-8 py-4 rounded-xl font-semibold bg-[#000000] border border-white/10 hover:border-[#FE083B] text-white transition-all"
              >
                See the work
              </a>
            </div>
          </div>
        </section>

        {/* Marketing Measured Section (Online Images Mosaic) */}
        <section className="py-24 bg-gradient-to-b from-[#000000] to-[#000000] border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                Marketing measured in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">pipeline</span>, not impressions
              </h2>
              <p className="mt-5 text-neutral-400 text-lg">
                We align creative storytelling with rigorous data infrastructure so every dollar spent traces directly to bottom-line revenue.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#000000] h-80">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold">Attribution First</h3>
                  <p className="text-sm text-neutral-400 mt-1">Full-funnel tracking from initial click to closed deal.</p>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#000000] h-80">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Growth Charts" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold">Targeted Scale</h3>
                  <p className="text-sm text-neutral-400 mt-1">Optimizing ad spend for maximum lifetime value.</p>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#000000] h-80">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
                  alt="Strategy Session" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold">Channel Mastery</h3>
                  <p className="text-sm text-neutral-400 mt-1">Multi-platform campaigns executed by senior specialists.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Every Channel We Can Run For You (Rail Section) */}
        <section className="py-24 bg-[#000000]">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-[#FE5211] font-semibold text-sm tracking-wider uppercase">Capabilities</span>
                <h2 className="text-3xl font-bold sm:text-4xl mt-2">Every channel we can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">run for you</span></h2>
              </div>
              <p className="text-neutral-400 max-w-md mt-4 md:mt-0">
                From performance media to organic social growth, we orchestrate cohesive campaigns across your entire digital footprint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((c, i) => (
                <div key={c.title} className="group bg-[#000000] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FE083B] hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FE083B]/10 border border-[#FE083B]/20 flex items-center justify-center text-[#FE083B] mb-6 group-hover:text-[#FE5211] transition-colors">
                      {i === 0 ? <IconSpeakerphone className="w-6 h-6" /> : i === 1 ? <IconTarget className="w-6 h-6" /> : i === 2 ? <IconShare3 className="w-6 h-6" /> : <IconDeviceLaptop className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-[#FE5211] transition-colors">{c.title}</h3>
                    <p className="text-sm text-neutral-400 mt-3 leading-relaxed">{c.summary}</p>
                  </div>
                  <ul className="mt-6 pt-6 border-t border-white/10 space-y-2">
                    {c.points.map((pt) => (
                      <li key={pt} className="text-xs text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FE083B]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content & Social Programme Section */}
        <section className="py-24 bg-[#000000] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Content and social, produced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">as one programme</span>
                </h2>
                <p className="mt-5 text-neutral-400 leading-relaxed">
                  Writing, creative and community management run together, so a single research effort becomes articles, posts, and high-converting campaign assets instead of three disconnected silos.
                </p>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Unified brand voice", "Cross-platform asset repurposing", "Rapid creative iteration", "Built-in audience research"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                      <span className="h-2 w-2 rounded-full bg-[#FE083B]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="/blog" className="text-[#FE083B] hover:underline font-semibold inline-flex items-center gap-2 text-sm">
                    Read our writing <IconArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#000000] p-6 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
                  alt="Creative workspace preview" 
                  className="w-full h-[350px] object-cover rounded-xl opacity-80"
                />
                <div className="absolute bottom-10 left-10 right-10 bg-[#000000]/90 backdrop-blur-md p-5 rounded-xl border border-white/10">
                  <p className="text-xs text-[#FE083B] font-semibold uppercase tracking-wider">Campaign Velocity</p>
                  <p className="text-sm font-medium mt-1">Multi-channel deployment optimized for maximum engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statement Stats Section */}
        <section className="py-20 bg-[#000000] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold">How we judge a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">marketing programme</span></h3>
                <p className="text-sm text-neutral-400 mt-2">Reporting is built around qualified pipeline and revenue, not vanity metrics.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 lg:col-span-2">
                <div className="bg-[#000000] border border-white/10 p-6 rounded-2xl">
                  <p className="text-3xl sm:text-4xl font-extrabold text-[#FE083B]">4x</p>
                  <p className="text-sm text-neutral-400 mt-2">Average ROAS target on paid acquisition channels.</p>
                </div>
                <div className="bg-[#000000] border border-white/10 p-6 rounded-2xl">
                  <p className="text-3xl sm:text-4xl font-extrabold text-[#FE083B]">Data-led</p>
                  <p className="text-sm text-neutral-400 mt-2">Zero guesswork; attribution set up before scaling spend.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-[#000000]">
          <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
              <div>
                <span className="text-[#FE5211] font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
                <h2 className="text-3xl font-bold mt-2">Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]">Questions</span></h2>
                <p className="text-neutral-400 text-sm mt-4">Everything you need to know about how we partner, report, and drive predictable growth.</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={faq.q} className="border border-white/10 rounded-2xl bg-[#000000] overflow-hidden transition-all">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="flex items-center gap-3 font-semibold text-[#FE083B]">
                        <IconHelpCircle className="w-4 h-4 shrink-0" />
                        {faq.q}
                      </span>
                      <IconChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-[#FE083B]" : "text-neutral-400"}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 pt-4 text-sm text-neutral-400 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Banner */}
        <section className="py-20 bg-gradient-to-b from-[#000000] to-[#000000] text-center">
          <div className="group max-w-4xl mx-auto px-6 md:px-16 lg:px-24 bg-[#000000] border border-white/10 hover:border-[#FE083B] rounded-3xl p-12 relative overflow-hidden shadow-2xl transition-colors">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE083B]/10 blur-3xl pointer-events-none rounded-full" />

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight group-hover:text-[#FE5211] transition-colors">Tell us who you need to reach.</h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-base">
              We will come back with a comprehensive channel plan, a structured content rhythm, and a transparent written quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white hover:opacity-90 shadow-lg shadow-[#FE083B]/25 transition-all"
              >
                Start a campaign
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 rounded-xl font-semibold bg-[#000000] border border-white/10 hover:border-[#FE083B] text-white transition-all"
              >
                View pricing
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}