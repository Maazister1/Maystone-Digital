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
  IconDeviceMobile
} from '@tabler/icons-react';
import navbarLogo from '../assets/Navbar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full bg-[#0a0a0a] text-white relative z-50">
      
      {/* Brand Logo Only (Navbar.png) */}
      <a href="/" className="flex items-center">
        <img 
          src={navbarLogo} 
          alt="Maystone Digital" 
          className="h-8 w-auto object-contain" 
        />
      </a>

      <nav
        id="menu"
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-screen transition-[width] duration-300 max-md:bg-[#0a0a0a]/95 max-md:backdrop-blur-md flex-col md:flex-row flex gap-8 text-neutral-300 text-sm font-medium ${
          isOpen ? 'max-md:w-full' : 'max-md:w-0'
        }`}>
        
        {/* Services Dropdown Container */}
        <div 
          className="relative"
          ref={dropdownRef}
        >
          <button 
            onClick={() => setIsServicesOpen(prev => !prev)}
            className="flex items-center gap-1 hover:text-red-500 transition py-2 focus:outline-none cursor-pointer">
            Services 
            <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Card (2 Columns Layout) */}
          {isServicesOpen && (
            <div className="absolute top-full left-0 w-[620px] bg-[#141211] border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-4 mt-2 text-left z-50">
              {servicesList.map((service, index) => (
                <Link 
                  to={service.path}
                  key={index}
                  onClick={() => {
                    setIsServicesOpen(false);
                    setIsOpen(false);
                  }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="p-3 rounded-xl border border-white/10 bg-[#1c1917] group-hover:border-red-500/50 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors text-sm">
                      {service.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <a className="hover:text-red-500 transition" href="/about/aboutpage">About</a>
        <a className="hover:text-red-500 transition" href="/about/processpage">Process</a>
        <a className="hover:text-red-500 transition" href="/casestudy/casestudiepage">Case Studies</a>
        <a className="hover:text-red-500 transition" href="/pricing/pricingpage">Pricing</a>
        <a className="hover:text-red-500 transition" href="/blogs/blogspage">Blog</a>
        
        <button 
          onClick={() => setIsOpen(false)} 
            className="md:hidden text-neutral-400 hover:text-white focus:outline-none absolute top-6 right-6"
          aria-label="Close Menu"
        >
          <IconX className="w-6 h-6" />
        </button>
      </nav>

      <div className="hidden md:flex items-center">
        <a
          className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:from-red-500 hover:to-red-600 transition shadow-lg shadow-red-600/20"
          href="/contact/startproject"
        >
          <span>Start a Project</span>
          <IconArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      <button 
        onClick={() => setIsOpen(true)} 
        className="md:hidden text-neutral-300 hover:text-white focus:outline-none"
        aria-label="Open Menu"
      >
        <IconMenu2 className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Navbar;