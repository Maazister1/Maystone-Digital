import React from 'react';
import logoImage from '../assets/Navbar.png'; // Adjust path if your assets folder is located elsewhere

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#000000] text-neutral-400 pt-16 pb-8 px-4 sm:px-6 border-t border-neutral-800/80">
      
      {/* Same Compact Container Width (max-w-4xl) */}
      <div className="max-w-4xl mx-auto flex flex-col">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Logo & Description Column (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              {/* Imported Logo from assets */}
              <img 
                src={logoImage} 
                alt="Maystone Digital" 
                className="h-6 w-auto object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center gap-1.5 text-white font-extrabold tracking-wider text-sm">
                <div className="w-5 h-5 bg-[#FA0E33] rounded flex items-center justify-center text-white text-[10px] font-black">M</div>
                <span>MAYSTONE DIGITAL</span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-neutral-400 max-w-sm">
              Premium digital solutions for ambitious UK businesses — web, AI & BPO, marketing, branding and back-office support.
            </p>
          </div>

          {/* Links Columns (Span 7 divided into 3 columns) */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            
            {/* Services */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xs font-bold tracking-wide">Services</h4>
              <ul className="flex flex-col gap-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI & BPO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Reporting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Back-Office Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xs font-bold tracking-wide">Company</h4>
              <ul className="flex flex-col gap-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-xs font-bold tracking-wide">Resources</h4>
              <ul className="flex flex-col gap-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-800/80 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 Maystone Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;