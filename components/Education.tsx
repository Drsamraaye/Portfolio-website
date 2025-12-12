// components/Education.tsx
import React from 'react';

const educationData = [
  {
    year: '2024 - Present',
    degree: 'Diploma in Web Development',
    school: 'Advanced Tech Institute',
    description: 'Specializing in full-stack technologies including React, Next.js, Node.js, and modern CSS frameworks. Building production-ready applications with best practices in responsive design and API integration.'
  },
  {
    year: '2021 - 2023',
    degree: 'Diploma in ICT',
    school: 'Tech Valley College',
    description: 'Completed comprehensive ICT training covering software development, database management, networking, and system administration. Gained hands-on experience with foundational development tools.'
  },
  {
    year: '2019 - 2022',
    degree: 'Secondary Education',
    school: 'Abdalla Golo Secondary School',
    description: 'Focused on sciences and technology. Developed critical thinking and analytical problem-solving abilities that complement technical expertise.'
  }
];

const Education = () => {
  return (
    <section id='Education' className="py-24 bg-transparent font-sans relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-sm font-bold uppercase text-primary tracking-[0.2em] mb-3">JOURNEY</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education & <span className="text-gradient">Growth</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-full h-full rounded-full bg-primary animate-ping opacity-20 absolute"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-card border border-primary relative"></div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{item.degree}</h3>
                  <p className="text-sm font-medium text-muted-foreground/80 mb-4">{item.school}</p>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">
                    {item.description}
                  </p>
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
