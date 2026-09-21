import React from 'react';
import { 
  IconArrowRight, IconPhone, IconMail, IconMapPin, 
  IconCode, IconDeviceMobile, IconPalette, IconVideo, IconDeviceLaptop, IconShare3,
  IconHome, IconMessage, IconInfoCircle, IconBriefcase,
  IconFileText, IconShieldCheck, IconLock, IconChevronUp
} from '@tabler/icons-react';

// Assets import (4 Active Flags + Footer Image + Social PNGs)
import footerLogo from '../assets/footer.png';
import usaFlag from '../assets/usa-icon.png';
import ukFlag from '../assets/uk-icon.png';
import pakistanFlag from '../assets/pakistan-icon.png';
import canadaFlag from '../assets/canada-icon.png';
import maystoneFooterImg from '../assets/MAYSTONE FOOTER.png';

import instagramPng from '../assets/instagram.png';
import youtubePng from '../assets/youtube.png';
import xPng from '../assets/x.png';
import linkPng from '../assets/link.png';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#000000] text-neutral-400 pt-16 pb-12 px-6 md:px-16 border-t border-neutral-800/80 font-['Outfit']">
      
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Column 1: Logo, Description & Deck Button (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center">
              <img 
                src={footerLogo} 
                alt="Maystone Digital" 
                className="h-10 w-auto object-contain"
              />
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 max-w-sm">
              We design and build scalable digital products that elevate brands and create real impact.
            </p>

            <a 
              href="/start-project" 
              className="inline-flex items-center justify-between w-full max-w-[220px] bg-black border border-[#FE083B]/60 hover:border-[#FE083B] text-white px-5 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-[0_0_20px_rgba(254,8,59,0.15)] group"
            >
              <span>Our Company Deck</span>
              <span className="w-6 h-6 rounded-full bg-[#FE083B] flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                <IconArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <IconPhone className="w-4 h-4 text-[#FE083B] shrink-0" />
                <span>+1 (406) 209-8706</span>
              </div>
              <div className="flex items-center gap-3">
                <IconMail className="w-4 h-4 text-[#FE083B] shrink-0" />
                <span>support@maystonedigital.com</span>
              </div>
              <div className="flex items-start gap-3">
                <IconMapPin className="w-4 h-4 text-[#FE083B] shrink-0 mt-0.5" />
                <span>1001 S Main St, Kalispell, MT 59901</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 8 divided into 3 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Services</h4>
              <ul className="flex flex-col gap-3 text-xs text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconCode className="w-3.5 h-3.5" /></span> Website Dev</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconDeviceMobile className="w-3.5 h-3.5" /></span> Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconPalette className="w-3.5 h-3.5" /></span> Logo Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconVideo className="w-3.5 h-3.5" /></span> Animation</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconDeviceLaptop className="w-3.5 h-3.5" /></span> UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconShare3 className="w-3.5 h-3.5" /></span> SMM Service</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-xs text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconHome className="w-3.5 h-3.5" /></span> Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconMessage className="w-3.5 h-3.5" /></span> Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconInfoCircle className="w-3.5 h-3.5" /></span> About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconBriefcase className="w-3.5 h-3.5" /></span> Portfolio</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Legal</h4>
              <ul className="flex flex-col gap-3 text-xs text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconFileText className="w-3.5 h-3.5" /></span> Legal Requirements</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconShieldCheck className="w-3.5 h-3.5" /></span> Our Policies</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconFileText className="w-3.5 h-3.5" /></span> Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#FE083B]"><IconLock className="w-3.5 h-3.5" /></span> Privacy Policy</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-800 mb-12"></div>

        {/* GLOBAL PRESENCE SECTION (4 Flags with vertical separators) */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Our Global Presence</h3>
            <div className="h-[2px] w-12 bg-[#FE083B]"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800/80">
            
            {/* USA */}
            <div className="flex flex-col gap-2 pt-4 lg:pt-0 lg:px-4 first:pl-0">
              <div className="flex items-center gap-2.5">
                <img src={usaFlag} alt="USA" className="w-8 h-6 object-cover rounded shadow-sm" />
                <span className="text-white text-sm font-bold">USA</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                1001 S Main St, Kalispell, MT 59901
              </p>
            </div>

            {/* UK */}
            <div className="flex flex-col gap-2 pt-4 lg:pt-0 lg:px-4">
              <div className="flex items-center gap-2.5">
                <img src={ukFlag} alt="UK" className="w-8 h-6 object-cover rounded shadow-sm" />
                <span className="text-white text-sm font-bold">UK</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                71-75 Shelton Street, London, WC2H 9JQ
              </p>
            </div>

            {/* Pakistan */}
            <div className="flex flex-col gap-2 pt-4 lg:pt-0 lg:px-4">
              <div className="flex items-center gap-2.5">
                <img src={pakistanFlag} alt="Pakistan" className="w-8 h-6 object-cover rounded shadow-sm" />
                <span className="text-white text-sm font-bold">Pakistan</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Gulberg III, Lahore 54660
              </p>
            </div>

            {/* Canada */}
            <div className="flex flex-col gap-2 pt-4 lg:pt-0 lg:px-4">
              <div className="flex items-center gap-2.5">
                <img src={canadaFlag} alt="Canada" className="w-8 h-6 object-cover rounded shadow-sm" />
                <span className="text-white text-sm font-bold">Canada</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Toronto, ON M5V 2T6, Canada
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Back to top, Copyright & Social Icons (Using user PNGs with red border & transparent bg) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-900 text-xs text-neutral-500 mb-12">
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#FE083B] transition-colors cursor-pointer font-bold tracking-wider uppercase text-[11px]"
          >
            <span className="text-[#FE083B]"><IconChevronUp className="w-4 h-4" /></span>
            <span>Back to top</span>
          </button>

          <p>© 2026 Maystone Digital. All Right Reserved.</p>

          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-xl border border-[#FE083B] flex items-center justify-center bg-transparent hover:bg-[#FE083B]/10 transition p-2">
              <img src={instagramPng} alt="Instagram" className="w-full h-full object-contain" />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl border border-[#FE083B] flex items-center justify-center bg-transparent hover:bg-[#FE083B]/10 transition p-2">
              <img src={youtubePng} alt="YouTube" className="w-full h-full object-contain" />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl border border-[#FE083B] flex items-center justify-center bg-transparent hover:bg-[#FE083B]/10 transition p-2">
              <img src={xPng} alt="X" className="w-full h-full object-contain" />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl border border-[#FE083B] flex items-center justify-center bg-transparent hover:bg-[#FE083B]/10 transition p-2">
              <img src={linkPng} alt="Link" className="w-full h-full object-contain" />
            </a>
          </div>

        </div>

        {/* LAST RESPONSIVE MAYSTONE FOOTER IMAGE */}
        <div className="w-full text-center pt-6 pb-2 overflow-hidden select-none">
          <img 
            src={maystoneFooterImg} 
            alt="Maystone Footer" 
            className="w-full h-auto object-contain max-h-[180px] sm:max-h-[250px] mx-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

      </div>
    </footer>
  );
};

FooterSection.displayName = 'FooterSection';

export default FooterSection;