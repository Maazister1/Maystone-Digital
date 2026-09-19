
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconSearch, IconCalendar, IconClock, IconBook, IconChevronDown, IconChevronUp } from '@tabler/icons-react';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState({});

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Performance Marketing', 'Tech & AI'];

  const blogPosts = [
    {
      id: 1,
      title: "Building High-Performance Web Apps with React, Next.js & Modern Stacks in 2026",
      excerpt: "Discover the architectural patterns, state management strategies, and optimization techniques required to scale enterprise-grade web applications seamlessly.",
      content: "Modern web applications require more than just clean UI; they demand robust architecture. By leveraging React and Next.js server-side rendering, combined with optimized state management and edge caching, developers can cut down load times by over 60%. In this article, we dive deep into modular component structuring, minimizing JavaScript payloads, and integrating high-performance databases like PostgreSQL and MongoDB to guarantee smooth scaling under heavy enterprise traffic.",
      category: "Web Development",
      date: "Sep 12, 2026",
      readTime: "6 min read",
      imageBg: "from-[#FE083B]/20 via-black to-[#141211]"
    },
    {
      id: 2,
      title: "Why UI/UX Design is the Real Game Changer for E-Commerce Conversions",
      excerpt: "How intuitive user journeys, micro-interactions, and modern design systems drastically reduce bounce rates and maximize user engagement.",
      content: "Design isn't just about how things look—it's about how they work and how they guide the user's wallet. E-commerce platforms with streamlined checkout flows, instant feedback micro-interactions, and accessible typography see immediate spikes in conversion rates. We explore how Figma design systems, dark-mode optimization, and strategic placement of call-to-action buttons eliminate friction and build instant trust with online shoppers.",
      category: "UI/UX Design",
      date: "Sep 08, 2026",
      readTime: "4 min read",
      imageBg: "from-purple-900/20 via-black to-[#141211]"
    },
    {
      id: 3,
      title: "Google Ads vs. Meta Ads: Where Should You Allocate Your Budget in 2026?",
      excerpt: "A comprehensive breakdown of PPC intent traffic versus social media targeting to help your business achieve maximum ROAS.",
      content: "Choosing between Google Ads and Meta Ads depends entirely on your product's buyer intent lifecycle. Google captures high-intent search traffic ready to purchase right now, whereas Meta builds demand through visual storytelling and precise demographic targeting. This guide breaks down attribution models, budget splitting strategies, and how to scale Return on Ad Spend (ROAS) efficiently across both platforms.",
      category: "Performance Marketing",
      date: "Sep 03, 2026",
      readTime: "5 min read",
      imageBg: "from-blue-900/20 via-black to-[#141211]"
    },
    {
      id: 4,
      title: "The Future of AI Integration in Full-Stack Software Engineering",
      excerpt: "Exploring how developers leverage AI tools, automated pipelines, and intelligent workflows to cut down deployment times by 50%.",
      content: "Artificial Intelligence has transformed from a mere assistant into an active core participant in software development lifecycle pipelines. From automated unit testing and real-time code refactoring to generating intelligent database migrations, full-stack engineers are leveraging AI-driven workflows to slash product delivery cycles in half without ever compromising code maintainability or security standards.",
      category: "Tech & AI",
      date: "Aug 28, 2026",
      readTime: "7 min read",
      imageBg: "from-emerald-900/20 via-black to-[#141211]"
    },
    {
      id: 5,
      title: "Optimizing Database Performance with MongoDB and PostgreSQL",
      excerpt: "Best practices for indexing, query structuring, and choosing the right database infrastructure for your scaling web project.",
      content: "Database bottlenecks are the primary silent killer of growing web applications. Whether you choose the flexible document architecture of MongoDB or the strict relational consistency of PostgreSQL, correct indexing strategies and query profiling are crucial. We discuss connection pooling, caching layers with Redis, and horizontal scaling strategies to keep your data operations lightning fast.",
      category: "Web Development",
      date: "Aug 20, 2026",
      readTime: "5 min read",
      imageBg: "from-amber-900/20 via-black to-[#141211]"
    },
    {
      id: 6,
      title: "Designing Conversion-Focused Landing Pages That Actually Convert",
      excerpt: "Key copywriting hooks, visual hierarchy, and CTA placement secrets used by top digital agencies worldwide.",
      content: "A high-converting landing page is a precise scientific formula combining psychology, persuasive copywriting, and clean visual hierarchy. Every element—from the hero section hook to the supporting social proof and frictionless contact forms—must be engineered to guide the visitor toward a single objective. Learn the exact wireframing principles our agency uses to maximize lead generation.",
      category: "UI/UX Design",
      date: "Aug 15, 2026",
      readTime: "4 min read",
      imageBg: "from-rose-900/20 via-black to-[#141211]"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-16">
        <div className="inline-block">
       <span className="text-[#FE083B] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
Insights and Knowledge
  </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>Our Latest Blogs</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> & Tech Articles</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Web development, UI/UX design, performance marketing, aur modern tech trends par hamare expert insights aur guides explore karein.
        </p>

        {/* Search Bar (Perfect Flex Layout Fix) */}
        <div className="max-w-md mx-auto pt-4">
          <div className="flex items-center bg-[#141211] border border-white/10 rounded-2xl px-4 py-3.5 focus-within:border-[#FE083B] transition shadow-lg">
            <IconSearch className="w-5 h-5 text-neutral-400 shrink-0 mr-3" />
            <input 
              type="text"
              placeholder="Search articles, topics, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-neutral-500"
            />
          </div>
        </div>
      </div>

      {/* 2. CATEGORY FILTER TABS */}
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#FE083B] text-white shadow-lg shadow-[#FE083B]/30'
                : 'bg-[#141211] border border-white/10 text-neutral-300 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. BLOG POSTS LIST */}
      <div className="max-w-4xl mx-auto space-y-8 mb-20">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
            const isExpanded = !!expandedIds[post.id];
            return (
              <div 
                key={post.id}
                className={`bg-gradient-to-br ${post.imageBg} border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-[#FE083B]/50 transition duration-300`}
              >
                <div className="absolute -right-16 -bottom-16 w-60 h-60 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-6 relative z-10">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-400">
                    <span className="px-3 py-1 rounded-full bg-[#FE083B]/20 border border-[#FE083B]/40 text-[#FE083B] font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5"><IconCalendar className="w-4 h-4 text-[#FE083B]" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><IconClock className="w-4 h-4 text-[#FE083B]" /> {post.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-[#FE083B] transition">
                    {post.title}
                  </h2>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {post.excerpt}
                  </p>

                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-white/10 text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
                      <p>{post.content}</p>
                      <div className="p-4 bg-black/40 border border-[#FE083B]/30 rounded-2xl text-xs text-neutral-400 flex items-center justify-between">
                        <span>Written by Maystone Digital Tech Team</span>
                        <span className="text-[#FE083B] font-semibold">Verified Article</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button 
                      onClick={() => toggleExpand(post.id)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#FE083B] hover:text-white transition cursor-pointer group-hover:translate-x-1 duration-200"
                    >
                      <span>{isExpanded ? "Show Less" : "Read Full Article"}</span>
                      {isExpanded ? <IconChevronUp className="w-4 h-4" /> : <IconArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 space-y-4 bg-[#141211] border border-white/10 rounded-3xl">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto text-neutral-400">
              <IconBook className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">No articles found</h3>
            <p className="text-neutral-400 text-sm">Aapke search query ya category se match karta koi article nahi mila.</p>
          </div>
        )}
      </div>

      {/* 4. NEWSLETTER / SUBSCRIBE SECTION */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#141211] to-[#1c1918] border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FE083B]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Subscribe to Our Tech Newsletter
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-lg mx-auto">
          Latest web development tips, design systems, aur marketing strategies seedhe apne inbox mein prapt karein. No spam ever!
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
          <input 
            type="email" 
            required 
            placeholder="Enter your email address" 
            className="flex-1 bg-black/50 border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FE083B] transition"
          />
          <button 
            type="submit" 
            className="bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:opacity-90 transition shadow-lg shadow-[#FE083B]/30 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  );
}