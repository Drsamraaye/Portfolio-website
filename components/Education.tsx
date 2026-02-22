// components/Education.tsx
import React from 'react';

const educationData = [
  {
    year: '2019 - 2022',
    degree: 'Secondary Education',
    school: 'Abdalla Golo Secondary School',
    description: 'Focused on sciences and technology. Developed critical thinking and analytical problem-solving abilities that complement technical expertise.'
  },
  {
    year: '2021 - 2023',
    degree: 'Diploma in ICT',
    school: 'TISQAAD COMPUTER AND SCEINCE COLLEGE',
    description: 'Completed comprehensive ICT training covering software development, database management, networking, and system administration. Gained hands-on experience with foundational development tools.'
  },
  {
    year: '2024 - 2025',
    degree: 'Diploma in Web Development',
    school: 'TIIGSI COLLEGE',
    description: 'Specializing in full-stack technologies including React, Next.js, Node.js, and modern CSS frameworks. Building production-ready applications with best practices in responsive design and API integration.'
  },
  {
    year: '2025 - 2026',
    degree: 'MOBILE APP DEVELOPMENT',
    school: 'TELESOM ACADEMY',
    description: 'Completed comprehensive Mobile App Development training covering software development, database management, networking, and system administration. Gained hands-on experience with foundational development tools.'
  },


];

const Education = () => {
  return (
    <section id='Education' className="py-24 lg:py-40 bg-transparent font-sans relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full glass border border-foreground/10 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Trajectory</span>
          <h2 className="text-4xl md:text-7xl font-black text-foreground leading-tight uppercase tracking-tighter">
            Education & <span className="text-primary italic">Growth</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line with Glow */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-foreground/10 overflow-hidden">
            <div className="absolute inset-0 bg-primary animate-pulse-glow opacity-30"></div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {educationData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                {/* Timeline Dot with Intense Glow */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-full h-full rounded-full bg-primary/20 blur-md absolute group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary border-2 lg:border-4 border-background relative z-20 shadow-[0_0_20px_rgba(255,0,72,0.8)] group-hover:scale-125 transition-transform duration-500"></div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-16 lg:pl-20 text-left' : 'md:pr-16 lg:pr-20 md:text-right'}`}>
                  <div className="space-y-3 lg:space-y-4">
                    <span className="inline-block px-4 py-1.5 text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20">
                      {item.year}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-black text-foreground uppercase tracking-tight">{item.degree}</h3>
                    <p className="text-xs lg:text-sm font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">{item.school}</p>
                    <p className="text-muted-foreground leading-[1.8] font-medium text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty Side (Spacer) */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
