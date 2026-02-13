// components/cards.tsx
import Image from 'next/image';
import React from 'react';

interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    image: '/imges/Screenshot 2026-02-13 150924.png',
    title: 'Fikircloud School System',
    category: 'Management System',
    description: 'A comprehensive school management platform designed to streamline administrative tasks, student tracking, and academic reporting with a focus on ease of use.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    link: 'https://fikir-land.vercel.app/'
  },
  {
    image: '/imges/Screenshot 2026-02-13 150700.png',
    title: 'Shaamil Library System',
    category: 'Educational Tool',
    description: 'A modern library management system that handles book borrowing, inventory tracking, and user memberships with an intuitive interface.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://shaamil.vercel.app/'
  },
  {
    image: '/imges/Screenshot 2026-02-13 151202.png',
    title: 'IIBSahal E-commerce',
    category: 'E-commerce',
    description: 'A high-performance e-commerce platform featuring a seamless shopping experience, secure payments, and dynamic product management.',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Redux'],
    link: 'https://iibsahal.vercel.app/'
  },
  {
    image: '/imges/Screenshot 2026-02-13 151314.png',
    title: 'Drought Warning System',
    category: 'Social Impact',
    description: 'A data-driven early warning system for monitoring drought conditions and providing critical alerts to mitigate environmental risks.',
    tech: ['Next.js', 'Mapbox', 'D3.js', 'API Integration'],
    link: 'https://landinpage-dun.vercel.app/'
  }
];

const Cards: React.FC = () => {
  return (
    <section id='Project' className="py-24 lg:py-40 bg-transparent relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 max-w-[1500px]">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 lg:mb-24 gap-8 lg:gap-12 text-center lg:text-left">
          <div className="max-w-3xl space-y-4 lg:space-y-6">
            <span className="inline-block px-4 py-1.5 lg:py-2 rounded-full glass border border-foreground/10 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Portfolio</span>
            <h2 className="text-4xl md:text-7xl font-black text-foreground leading-tight uppercase tracking-tighter">
              Featured <span className="text-primary italic">Projects</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A curated selection of my technical work, demonstrating expertise in full-stack architecture and digital innovation.
            </p>
          </div>

          <a href="https://github.com/Drsamraaye" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-6 lg:px-8 py-3 lg:py-4 glass border border-foreground/10 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest text-foreground hover:bg-foreground/5 transition-all duration-500 hover:scale-105 active:scale-95">
            View Github Profile
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 lg:h-5 w-4 lg:w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const CardContent = (
              <>
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-40"></div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[0.2] dark:grayscale-0"
                  />

                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6 z-20">
                    <span className="px-3 lg:px-4 py-1.5 lg:py-2 bg-background/80 backdrop-blur-md rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-foreground border border-foreground/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-10 flex flex-col flex-grow space-y-4 lg:space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl lg:text-2xl font-black text-foreground group-hover:text-primary transition-all duration-500 uppercase tracking-tight">{project.title}</h3>
                    {project.link && (
                      <div className="p-2 lg:p-2.5 rounded-full border border-foreground/10 group-hover:border-primary/50 transition-colors shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 lg:h-5 w-3.5 lg:w-5 text-muted-foreground group-hover:text-primary transition-colors transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground font-medium text-sm lg:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 lg:gap-3 pt-4 lg:pt-6 border-t border-foreground/5 mt-auto">
                    {project.tech?.map((t) => (
                      <span key={t} className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 bg-foreground/5 px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-lg group-hover:text-primary/70 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.link ? (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2.5rem] lg:rounded-[3rem] bg-card/50 dark:bg-black border border-foreground/5 overflow-hidden hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,0,72,0.1)] flex flex-col cursor-pointer hover:-translate-y-2 backdrop-blur-sm"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="group rounded-[2.5rem] lg:rounded-[3rem] bg-card/50 dark:bg-black border border-foreground/5 overflow-hidden hover:border-primary/50 transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,0,72,0.1)] flex flex-col hover:-translate-y-2 backdrop-blur-sm"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
