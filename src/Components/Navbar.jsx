import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconX, 
  IconMenu2, 
  IconArrowRight, 
  IconChevronDown,
  IconCode, 
  IconCalculator, 
  IconPalette, 
  IconRobot, 
  IconSpeakerphone, 
  IconHeadset,
  IconDeviceMobile,
  IconServer
} from '@tabler/icons-react';
import navbarLogo from '../assets/Navbar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const servicesList = [
    {
      title: "Web Development",
      description: "Bespoke sites, apps & platforms",
      icon: <IconCode className="w-5 h-5 text-red-500" />,
      path: "/services/web-development"
    },
    {
      title: "Mobile App Development",
      description: "Mobile App Development Support",
      icon: <IconDeviceMobile className="w-5 h-5 text-red-500" />,
      path: "/services/app-development"
    },
    {
      title: "Software Development & SaaS CRMs",
      description: "Custom SaaS, CRMs & scalable systems",
      icon: <IconServer className="w-5 h-5 text-red-500" />,
      path: "/services/software-sas"
    },
    {
      title: "AI & BPO",
      description: "Automation & outsourced operations",
      icon: <IconRobot className="w-5 h-5 text-red-500" />,
      path: "/services/ai-bpo"
    },
    {
      title: "Financial Reporting & Tax",
      description: "Reporting & tax advisory",
      icon: <IconCalculator className="w-5 h-5 text-red-500" />,
      path: "/services/financial-reporting"
    },
    {
      title: "Digital Marketing",
      description: "SEO, PPC & growth",
      icon: <IconSpeakerphone className="w-5 h-5 text-red-500" />,
      path: "/services/digital-marketing"
    },
    {
      title: "Branding & Graphic Designing",
      description: "Identity & UI/UX design",
      icon: <IconPalette className="w-5 h-5 text-red-500" />,
      path: "/services/creative-branding"
    },
    {
      title: "Back-Office Support",
      description: "Admin & workflow support",
      icon: <IconHeadset className="w-5 h-5 text-red-500" />,
      path: "/services/back-office"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Hover with slight delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full bg-[#000000]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      
      {/* Brand Logo Only (Navbar.png) */}
      <Link to="/" className="flex items-center">
        <img 
          src={navbarLogo} 
          alt="Maystone Digital" 
          className="h-8 w-auto object-contain" 
        />
      </Link>

      {/* Navigation Menu */}
      <nav
        id="menu"
        className={`max-md:fixed max-md:inset-0 max-md:bg-[#000000]/98 max-md:backdrop-blur-2xl max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:p-8 max-md:overflow-y-auto transition-all duration-300 flex-row flex items-center gap-8 text-neutral-300 text-sm font-medium ${
          isOpen ? 'max-md:opacity-100 max-md:pointer-events-auto' : 'max-md:opacity-0 max-md:pointer-events-none'
        }`}
      >
        
        {/* Services Dropdown Container - Perfectly Aligned */}
        <div 
          className="relative group flex items-center h-full"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            onClick={() => setIsServicesOpen(prev => !prev)}
            className="flex items-center gap-1.5 hover:text-red-500 transition focus:outline-none cursor-pointer py-1"
          >
            <span>Services</span>
            <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-red-500' : ''}`} />
          </button>

          {/* Lovable Style Glassmorphism Dropdown Card (2 Columns Layout) */}
          {isServicesOpen && (
            <div className="absolute top-full left-0 md:-left-20 w-[90vw] sm:w-[680px] bg-[#000000]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-left z-50 animate-in fade-in zoom-in-95 duration-200">
              {servicesList.map((service, index) => (
                <Link 
                  to={service.path}
                  key={index}
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsOpen(false);
                  }}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.07] hover:border-red-500/30 border border-transparent transition-all group/item"
                >
                  <div className="p-2.5 rounded-xl border border-white/10 bg-[#000000] group-hover/item:border-red-500/60 group-hover/item:bg-red-500/10 flex items-center justify-center shrink-0 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover/item:text-red-400 transition-colors text-xs sm:text-sm">
                      {service.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/about/aboutpage" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition py-1">About</Link>
        <Link to="/about/processpage" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition py-1">Process</Link>
        <Link to="/casestudy/casestudiepage" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition py-1">Case Studies</Link>
        <Link to="/pricing/pricingpage" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition py-1">Pricing</Link>
        <Link to="/blogs/blogspage" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition py-1">Blog</Link>
        
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="md:hidden text-neutral-400 hover:text-white focus:outline-none absolute top-6 right-6 p-2 bg-white/5 rounded-full"
          aria-label="Close Menu"
        >
          <IconX className="w-6 h-6" />
        </button>
      </nav>

      {/* Right Start Project CTA */}
      <div className="hidden md:flex items-center">
        <Link
          to="/contact/startproject"
          className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:from-red-500 hover:to-red-600 transition shadow-lg shadow-red-600/20"
        >
          <span>Start a Project</span>
          <IconArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Mobile Hamburger Menu Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="md:hidden text-neutral-300 hover:text-white focus:outline-none p-1"
        aria-label="Open Menu"
      >
        <IconMenu2 className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Navbar;