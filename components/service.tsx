// src/components/Service.tsx
import React from 'react';

interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Digital Marketing',
    description: 'Data-driven strategies that amplify your brand. I specialize in SEO, content marketing, and analytics to deliver measurable ROI.'
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Full-Stack Development',
    description: 'Scalable, high-performance applications built with Next.js and Node.js. I deliver robust solutions from database design to pixel-perfect UIs.'
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
      </svg>
    ),
    title: 'UI/UX & Design',
    description: 'Designing intuitive, engaging interfaces. I create visually stunning brand identities and web experiences that captivate users.'
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Content Strategy',
    description: 'Compelling narratives that resonate. I develop content strategies that align with your business goals and engage your target audience.'
  },
];

const Service: React.FC = () => {
  return (
    <section id='Work' className="py-24 lg:py-40 bg-transparent relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 max-w-[1500px]">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24 space-y-4 lg:space-y-6">
          <span className="inline-block px-4 py-1.5 lg:py-2 rounded-full glass border border-foreground/10 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Capabilities</span>
          <h2 className="text-4xl md:text-7xl font-black text-foreground leading-tight uppercase tracking-tighter">
            Professional <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            I combine technical expertise with creative problem-solving to deliver comprehensive digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>

              <div className="h-full bg-card/50 dark:bg-black border border-foreground/5 p-6 sm:p-10 rounded-[2.5rem] overflow-hidden hover:border-primary/40 backdrop-blur-xl transition-all duration-500 flex flex-col items-center text-center lg:items-start lg:text-left">

                {/* Icon */}
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary mb-6 lg:mb-10 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 shadow-xl [&_svg]:w-7 [&_svg]:h-7 lg:[&_svg]:w-10 lg:[&_svg]:h-10">
                  {service.icon}
                </div>

                <h4 className="text-xl lg:text-2xl font-black text-foreground mb-3 lg:mb-4 group-hover:text-primary transition-all duration-500 uppercase tracking-tight">
                  {service.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed font-medium text-xs lg:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;