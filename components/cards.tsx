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
    image: '/imges/translation-app.png',
    title: 'English to Somali Translator',
    category: 'Web Application',
    description: 'A seamless translation tool bridging English and Somali. Features real-time text conversion and an intuitive, clean interface.',
    tech: ['Next.js', 'Tailwind', 'AI Integration'],
    link: 'https://english-to-somali.vercel.app/'
  },
  {
    image: '/imges/Screenshot 2025-09-18 123024.png',
    title: 'Professional Portfolio',
    category: 'Web Development',
    description: 'A high-performance personal portfolio engaging visuals and smooth animations. Built to showcase skills and projects with a premium aesthetic.',
    tech: ['Next.js', 'Tailwind', 'Framer'],
  },
  {
    image: '/imges/today-fashion-free-ecommerce-website-templates.jpg',
    title: 'Luxe E-Commerce',
    category: 'Full Stack',
    description: 'Orchestrating a seamless shopping experience with secure payments and real-time inventory tracking. Features a robust admin dashboard.',
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    image: '/imges/youtube.png',
    title: 'StreamHub',
    category: 'Media Platform',
    description: 'A scalable video streaming solution with high-definition playback dynamics and interactive user engagement features.',
    tech: ['Next.js', 'AWS', 'Socket.io'],
  },
  {
    image: '/imges/Screenshot 2025-09-18 123344.png',
    title: 'TaskMaster Pro',
    category: 'Productivity',
    description: 'Enhancing team collaboration with intuitive Kanban boards and real-time progress visualization.',
    tech: ['React', 'Firebase', 'Redux'],
  },
  {
    image: '/imges/Screenshot 2025-09-18 123131.png',
    title: 'SkyCast Weather',
    category: 'Application',
    description: 'Delivering precise, location-based weather data through a beautifully animated interface.',
    tech: ['API Integration', 'Chart.js'],
  },
  {
    image: '/imges/Screenshot 2025-09-18 123935.png',
    title: 'Social Analytics',
    category: 'Dashboard',
    description: 'Empowering brands with deep insights through comprehensive data visualization of social media performance.',
    tech: ['D3.js', 'Next.js', 'Analytics'],
  },
];

const Cards: React.FC = () => {
  return (
    <section id='Project' className="py-32 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-slide-up">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase text-primary tracking-[0.2em] mb-3">PORTFOLIO</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              A curated selection of my technical work, demonstrating expertise in full-stack architecture and digital innovation.
            </p>
          </div>

          <a href="https://github.com/GuiledHussein" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-foreground border-b border-primary/30 pb-1 hover:border-primary transition-colors">
            View Github Profile
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const CardContent = (
              <>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    {project.link && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6 line-clamp-3 font-light text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground bg-secondary/30 px-2 py-1 rounded">
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
                className="group rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="group rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="https://github.com/GuiledHussein" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground border-b border-primary/30 pb-1 hover:border-primary transition-colors">
            View Github Profile
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cards;
