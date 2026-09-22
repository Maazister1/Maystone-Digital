import React from 'react';
import { 
  IconBrandLinkedin, 
  IconBrandTwitter, 
  IconWorld, 
  IconArrowRight 
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Marcus Levine",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      bio: "Visionary leader driving innovation, enterprise expansion, and global digital transformation strategies."
    },
    {
      name: "Alex Rivera",
      role: "Lead Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      bio: "Expert in architecting high-performance web applications, SaaS platforms, and robust cloud infrastructures."
    },
    {
      name: "Elena Rostova",
      role: "Data Scraper & Automation Engineer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      bio: "Specializes in complex data extraction, proxy networks, web harvesting, and automated workflow pipelines."
    },
    {
      name: "David Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      bio: "Overseeing agile delivery schedules, client communications, and cross-functional engineering milestones."
    },
    {
      name: "Sophia Martinez",
      role: "BPO & Client Caller Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      bio: "Directing high-conversion client support operations, communication workflows, and outbound engagements."
    },
    {
      name: "Liam O'Connor",
      role: "Senior Software Engineer",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
      bio: "Passionate coder focusing on backend microservices, API integrations, and system scalability."
    }
  ];

  return (
    <section className="min-h-screen bg-[#000000] text-neutral-100 py-20 px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FE083B]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="text-[#FE5211] font-bold uppercase text-xs sm:text-sm tracking-[0.25em]">
              [Our Leadership & Experts]
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Meet the Minds Shaping <span className=" bg-clip-text bg-gradient-to-r   text-[#FE083B] ">What's Next</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Learn from trailblazers who’ve built scalable systems, automated workflows, and driven global digital impact.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-[#000000] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FE083B] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Image Container with Grayscale Effect */}
              <div className="relative h-80 w-full overflow-hidden bg-neutral-900">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" 
                />
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/20 to-transparent" />
              </div>

              {/* Content Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FE5211] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#FE083B] uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-3 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Icons Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-neutral-400">
                    <a href="#linkedin" className="hover:text-[#FE083B] transition-colors p-1 bg-white/5 rounded-lg border border-white/5 hover:border-[#FE083B]">
                      <IconBrandLinkedin className="w-4 h-4" />
                    </a>
                    <a href="#twitter" className="hover:text-[#FE083B] transition-colors p-1 bg-white/5 rounded-lg border border-white/5 hover:border-[#FE083B]">
                      <IconBrandTwitter className="w-4 h-4" />
                    </a>
                    <a href="#website" className="hover:text-[#FE083B] transition-colors p-1 bg-white/5 rounded-lg border border-white/5 hover:border-[#FE083B]">
                      <IconWorld className="w-4 h-4" />
                    </a>
                  </div>

                  <span className="text-[11px] text-neutral-500 font-medium group-hover:text-neutral-300 transition">
                    Expert Profile
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact/startproject"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:from-red-500 hover:to-red-600 transition shadow-lg shadow-red-600/20"
          >
            <span>Work With Our Team</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default OurTeam;