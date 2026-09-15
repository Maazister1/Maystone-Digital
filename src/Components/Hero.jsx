import React, { useState, useEffect } from 'react';
import { IconArrowRight, IconPlayerPlay } from '@tabler/icons-react';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

const Hero = () => {
  const slides = [
    {
      eyebrow: "AI-DRIVEN DIGITAL SOLUTIONS",
      titlePart1: "Transform the digital experience that",
      sliderWord: "accelerates growth",
      subtitle: "Intelligent web engineering and creative brand design that cut complexity.",
      image: hero1
    },
    {
      eyebrow: "CREATIVE & DEVELOPMENT AGENCY",
      titlePart1: "Build the robust infrastructure that",
      sliderWord: "scales your brand",
      subtitle: "High-performance web applications built with modern frameworks for exceptional UX.",
      image: hero2
    },
    {
      eyebrow: "UI/UX & MODERN WEB APPS",
      titlePart1: "Craft the high-impact interfaces that",
      sliderWord: "drive high conversion",
      subtitle: "Sleek, responsive design systems that capture user attention and maximize engagement.",
      image: hero3
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFadeAnim(true);
      }, 250);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[calc(100vh-70px)] bg-[#000000] text-white flex flex-col justify-between overflow-hidden px-6 sm:px-12 lg:px-24 py-4">
      
      {/* Background Image with Lighter Overlay & Proper Scaling */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out scale-100"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
        {/* Lighter Gradient Overlay so images remain bright and don't cut off awkwardly */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35 backdrop-blur-[1px]"></div>
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <div className="relative z-10 max-w-5xl my-auto flex flex-col items-start w-full pt-1">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FA0E33] to-[#FE5211]"></span>
          <span className="text-[10px] font-semibold tracking-wider text-neutral-300 uppercase">
            {slides[currentSlide].eyebrow}
          </span>
        </div>

        {/* Heading */}
        <div className="min-h-[100px] md:min-h-[130px] flex items-center w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-4xl text-neutral-100">
            {slides[currentSlide].titlePart1}{' '}
            <span className={`inline-block transition-all duration-300 transform ${fadeAnim ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}>
              <span className="bg-gradient-to-r from-[#FA0E33] to-[#FE5211] bg-clip-text text-transparent">
                {slides[currentSlide].sliderWord}
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-2 text-neutral-200 text-xs md:text-sm max-w-lg font-normal leading-relaxed drop-shadow-md">
          {slides[currentSlide].subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#FA0E33] to-[#FE5211] hover:opacity-95 transition-all shadow-lg shadow-[#FA0E33]/25 text-xs group"
          >
            <span>Book a Free Consultation</span>
            <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800/80 transition-all backdrop-blur-sm text-xs"
          >
            <IconPlayerPlay className="w-3.5 h-3.5 text-[#FE5211] fill-current" />
            <span>Explorerere Services</span>
          </a>
        </div>
      </div>

      {/* --- BOTTOM 3 ANIMATED DOTS / PAGINATION --- */}
      <div className="relative z-10 w-full flex items-center justify-center pb-4 pt-2">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFadeAnim(false);
                setTimeout(() => {
                  setCurrentSlide(idx);
                  setFadeAnim(true);
                }, 150);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? 'w-8 bg-gradient-to-r from-[#FA0E33] to-[#FE5211]' 
                  : 'w-2 bg-neutral-700 hover:bg-neutral-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;