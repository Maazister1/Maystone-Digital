import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconCheck, IconMail, IconUser, IconPhone, IconBriefcase, IconCurrencyDollar, IconMessage } from '@tabler/icons-react';

export default function StartProject() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "Google Ads & PPC",
    "Social Media & Meta Ads",
    "Web Development",
    "Creative Branding & UI/UX",
    "Back-Office Support",
    "Video Animation & Design"
  ];

  const budgetOptions = [
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000+"
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));} else {
      setSelectedServices([...selectedServices, service]);}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna backend API call ya form submission logic laga sakte hain
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Outfit'] py-12 px-6 md:px-16 lg:px-24">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-8 mb-16">
        <div className="inline-block">
          <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
    Let's Build Something Great
  </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          <span>Start Your Project</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE083B] to-[#F72531]"> With Us Today</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Apne business ko next level par le jaane ke liye apni requirements share karein. Hamari expert team aapse jald rabta karegi.
        </p>
      </div>

      {/* 2. FORM CONTAINER */}
      <div className="max-w-3xl mx-auto bg-[#000000] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative mb-12">
        
        {submitted ? (
          <div className="text-center py-16 space-y-6">
            <div className="w-20 h-20 bg-[#FE083B]/20 border border-[#FE083B]/40 rounded-full flex items-center justify-center mx-auto text-[#FE083B] shadow-lg shadow-[#FE083B]/20">
              <IconCheck className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-white">Thank You! Message Received</h2>
            <p className="text-neutral-400 max-w-md mx-auto text-sm md:text-base">
              Aapki details hum tak pohch gayi hain. Hamara representative 24 ghante ke andar aapse rabta karega.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-[#FE083B] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#F72531] transition shadow-lg shadow-[#FE083B]/30 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Step 1: Select Services */}
            <div className="space-y-4">
              <label className="block text-sm font-bold uppercase tracking-wider text-[#FE083B]">
                1. What services do you need? (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((service, idx) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <div 
                      key={idx}
                      onClick={() => toggleService(service)}
                      className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between text-sm font-medium ${
                        isSelected 
                          ? 'bg-[#FE083B]/10 border-[#FE083B] text-white shadow-md' 
                          : 'bg-black/40 border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      <span>{service}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'bg-[#FE083B] border-[#FE083B] text-white' : 'border-white/20'}`}>
                        {isSelected && <IconCheck className="w-3 h-3" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Budget */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <label className="block text-sm font-bold uppercase tracking-wider text-[#FE083B]">
                2. What is your estimated project budget?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {budgetOptions.map((budget, idx) => {
                  const isSelected = selectedBudget === budget;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setSelectedBudget(budget)}
                      className={`p-4 rounded-2xl border cursor-pointer text-center transition text-sm font-medium ${
                        isSelected 
                          ? 'bg-[#FE083B]/10 border-[#FE083B] text-white shadow-md' 
                          : 'bg-black/40 border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                    >
                      <span>{budget}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="space-y-6 pt-4 border-t border-white/5">
              <label className="block text-sm font-bold uppercase tracking-wider text-[#FE083B]">
                3. Tell us about yourself
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium flex items-center gap-2">
                    <IconUser className="w-4 h-4 text-[#FE083B]" /> Your Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Mahim Rana" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FE083B] transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium flex items-center gap-2">
                    <IconMail className="w-4 h-4 text-[#FE083B]" /> Email Address *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="mahim@example.com" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FE083B] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium flex items-center gap-2">
                    <IconPhone className="w-4 h-4 text-[#FE083B]" /> Phone Number / WhatsApp
                  </label>
                  <input 
                    type="text" 
                    placeholder="+92 300 1234567" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FE083B] transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-neutral-400 font-medium flex items-center gap-2">
                    <IconBriefcase className="w-4 h-4 text-[#FE083B]" /> Company / Brand Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Maystone Digital" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#FE083B] transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-neutral-400 font-medium flex items-center gap-2">
                  <IconMessage className="w-4 h-4 text-[#FE083B]" /> Project Details & Goals *
                </label>
                <textarea 
                  required 
                  rows="4"
                  placeholder="Apne project ke baray mein batayein, aapke goals kya hain aur aapko kab tak complete chahiye..." 
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white text-sm focus:outline-none focus:border-[#FE083B] transition resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full group bg-gradient-to-r from-[#FE083B] to-[#F72531] text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg shadow-[#FE083B]/30 cursor-pointer"
              >
                <span>Submit Project Request</span>
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}