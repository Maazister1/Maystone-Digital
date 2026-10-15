import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IconArrowRight, IconMail, IconCalendar, IconClock, IconListNumbers,
  IconScale, IconShieldCheck, IconFileText, IconLock, IconCircleCheckFilled, IconChevronRight
} from '@tabler/icons-react';

const LEGAL_PAGES = [
  { to: '/legal/legal-requirements', label: 'Legal Requirements', icon: IconScale },
  { to: '/legal/our-policies', label: 'Our Policies', icon: IconShieldCheck },
  { to: '/legal/terms-of-service', label: 'Terms of Service', icon: IconFileText },
  { to: '/legal/privacy-policy', label: 'Privacy Policy', icon: IconLock },
];

const NAV_OFFSET = 120;

// Shared layout for the Legal pages (Legal Requirements, Policies, Terms, Privacy)
export default function LegalLayout({ title, highlight, intro, lastUpdated, highlights = [], sections }) {
  const { pathname } = useLocation();
  const [activeId, setActiveId] = useState(sections[0]?.id);

  const readTime = useMemo(() => {
    const words = sections
      .flatMap((s) => [...(s.paragraphs || []), ...(s.list || [])])
      .join(' ')
      .split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }, [sections]);

  // Highlight the section currently in view
  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      let current = sections[0]?.id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= NAV_OFFSET + 40) current = section.id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET + 10;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Outfit'] relative overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 md:px-16 lg:px-24 pt-16 pb-14">

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-neutral-500 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <IconChevronRight className="w-3.5 h-3.5" />
            <span>Legal</span>
            <IconChevronRight className="w-3.5 h-3.5" />
            <span className="text-neutral-300">{title} {highlight}</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FA0E33] to-[#FE5211] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">Legal Center</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
            {title}{' '}
            <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">{highlight}</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            {intro}
          </p>

          {/* Meta chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#000000] px-4 py-2">
              <IconCalendar className="w-4 h-4 text-[#FE083B]" /> Updated {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#000000] px-4 py-2">
              <IconClock className="w-4 h-4 text-[#FE083B]" /> {readTime} min read
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#000000] px-4 py-2">
              <IconListNumbers className="w-4 h-4 text-[#FE083B]" /> {sections.length} sections
            </span>
          </div>
        </div>
      </section>

      {/* 2. LEGAL PAGE SWITCHER */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 mb-16">
        <div className="max-w-4xl mx-auto overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex sm:justify-center gap-2 p-1.5 w-max sm:w-auto mx-auto rounded-full border border-white/10 bg-neutral-950/80 backdrop-blur-md">
            {LEGAL_PAGES.map(({ to, label, icon: Icon }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? 'bg-gradient-to-r from-[#FA0E33] to-[#FE5211] text-white shadow-lg shadow-[#FA0E33]/30'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. AT A GLANCE */}
      {highlights.length > 0 && (
        <section className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-white text-xs font-bold uppercase tracking-[0.2em]">At a glance</h2>
              <div className="h-[2px] w-12 bg-[#FE083B]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {highlights.map(({ icon: Icon, title: cardTitle, desc }) => (
                <div
                  key={cardTitle}
                  className="group relative rounded-3xl border border-white/10 bg-[#000000] p-6 hover:border-[#FE083B] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(254,8,59,0.15)] transition-all duration-300"
                >
                  <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#FA0E33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FE083B]/10 border border-[#FE083B]/30 flex items-center justify-center mb-4 group-hover:bg-[#FE083B]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#FE083B] group-hover:text-[#FE5211] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cardTitle}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. CONTENT */}
      <section className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-5">
              <div className="rounded-3xl border border-white/10 bg-[#000000] p-5">
                <h2 className="text-white text-xs font-bold uppercase tracking-widest px-3 mb-3">On this page</h2>
                <ul className="flex flex-col">
                  {sections.map((section, idx) => {
                    const active = activeId === section.id;
                    return (
                      <li key={section.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          className={`relative w-full text-left flex items-start gap-3 pl-4 pr-3 py-2.5 rounded-xl text-sm transition-all cursor-pointer ${
                            active ? 'text-white bg-white/[0.06]' : 'text-neutral-500 hover:text-neutral-200'
                          }`}
                        >
                          <span
                            className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#FA0E33] to-[#FE5211] transition-opacity ${
                              active ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                          <span className={`font-mono text-xs pt-0.5 ${active ? 'text-[#FE5211]' : 'text-[#FE083B]/60'}`}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span>{section.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <a
                href="mailto:support@maystonedigital.com"
                className="hidden lg:flex group items-center gap-4 rounded-3xl border border-white/10 p-5 hover:border-[#FE083B] transition-colors"
              >
                <span className="w-11 h-11 shrink-0 rounded-2xl bg-gradient-to-r from-[#FA0E33] to-[#FE5211] flex items-center justify-center shadow-lg shadow-[#FA0E33]/30">
                  <IconMail className="w-5 h-5 text-white" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-white">Have a question?</span>
                  <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">support@maystonedigital.com</span>
                </span>
              </a>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-8 flex flex-col">
            {sections.map((section, idx) => {
              const active = activeId === section.id;
              return (
                <article key={section.id} id={section.id} className="group relative py-10 first:pt-0">
                  {idx > 0 && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
                  )}
                  <div className="flex gap-5 sm:gap-8">
                    <span
                      className={`text-4xl sm:text-6xl font-extrabold leading-none select-none transition-colors duration-500 ${
                        active ? 'text-[#FE083B]' : 'text-transparent'
                      }`}
                      style={{ WebkitTextStroke: '1.5px rgba(254,8,59,0.7)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-[#FE5211] transition-colors">
                        {section.title}
                      </h2>
                      <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
                        {section.paragraphs?.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                        {section.list && (
                          <ul className="grid gap-3">
                            {section.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#000000] px-4 py-3 hover:border-[#FE083B]/40 transition-colors"
                              >
                                <IconCircleCheckFilled className="w-5 h-5 text-[#FE083B] shrink-0 mt-0.5" />
                                <span className="text-neutral-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONTACT BANNER */}
      <section className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] p-[1px] bg-gradient-to-r from-[#FA0E33]/70 via-white/10 to-[#FE5211]/70">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#000000] px-6 py-10 sm:px-12 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="relative text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Still have <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">questions?</span>
              </h2>
              <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-md">
                Our team is happy to explain anything on this page. Reach out and we'll get back to you within one business day.
              </p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="mailto:support@maystonedigital.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800/80 transition-all text-sm"
              >
                <IconMail className="w-4 h-4" /> Email Us
              </a>
              <Link
                to="/contact/startproject"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#FA0E33] to-[#FE5211] hover:opacity-95 transition-all shadow-lg shadow-[#FA0E33]/25 text-sm group"
              >
                <span>Contact Us</span>
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
