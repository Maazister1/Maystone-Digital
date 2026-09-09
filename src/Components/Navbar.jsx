import React, { useState } from 'react';
import { IconX, IconMenu2, IconArrowRight } from '@tabler/icons-react';
import navbarLogo from '../assets/Navbar.png'; // Navbar.png asset import kar liya hai

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full bg-[#0a0a0a] text-white relative z-50">
      
      {/* Brand Logo Only (Navbar.png) - Text removed */}
      <a href="/" className="flex items-center">
        <img 
          src={navbarLogo} 
          alt="Maystone Digital" 
          className="h-8 w-auto object-contain" 
        />
      </a>

      {/* Navigation Links & Mobile Menu Drawer */}
      <nav
        id="menu"
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-screen transition-[width] duration-300 max-md:bg-[#0a0a0a]/95 max-md:backdrop-blur-md flex-col md:flex-row flex gap-8 text-neutral-300 text-sm font-medium ${
          isOpen ? 'max-md:w-full' : 'max-md:w-0'
        }`}
      >
        <a className="hover:text-red-500 transition" href="#services">
          Services
        </a>
        <a className="hover:text-red-500 transition" href="#about">
          About
        </a>
        <a className="hover:text-red-500 transition" href="#process">
          Process
        </a>
        <a className="hover:text-red-500 transition" href="#case-studies">
          Case Studies
        </a>
        <a className="hover:text-red-500 transition" href="#pricing">
          Pricing
        </a>
        <a className="hover:text-red-500 transition" href="#blog">
          Blog
        </a>
        
        {/* Close Menu Button (Mobile) */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="md:hidden text-neutral-400 hover:text-white focus:outline-none absolute top-6 right-6"
          aria-label="Close Menu"
        >
          <IconX className="w-6 h-6" />
        </button>
      </nav>

      {/* Right Side CTA Button (Desktop) */}
      <div className="hidden md:flex items-center">
        <a
          className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:from-red-500 hover:to-red-600 transition shadow-lg shadow-red-600/20"
          href="#contact"
        >
          <span>Start a Project</span>
          <IconArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Open Menu Button (Mobile) */}
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