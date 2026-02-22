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
    <section id='Work' className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <h2 className="text-sm font-bold uppercase text-primary tracking-[0.2em] mb-3">EXPERTISE</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Services
          </h3>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            I combine technical expertise with creative problem-solving to deliver comprehensive digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-1 rounded-3xl bg-transparent transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative h-full bg-card/40 backdrop-blur-xl border border-border p-8 rounded-3xl overflow-hidden hover:border-primary/30 transition-colors">

                {/* Hover Gradient Bloom */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed text-sm">
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