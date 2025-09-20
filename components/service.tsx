// src/components/Service.tsx
import React from 'react';

// Define the type for a single service item.
interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Data for each service, including SVG icons.
const services: ServiceItem[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="/imges/marketing_64px.png" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 2C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 22L14 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Digital Marketing',
    description: 'I am a professional in Digital Marketing, experienced in strategies that boost online presence and growth.'
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C13.6569 4 15 5.34315 15 7H9C9 5.34315 10.3431 4 12 4ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full-stack Developer',
    description: 'As a Full-Stack Developer, I have hands-on experience building complete web applications from front-end to back-end.'
  },
  {
    id: 3,
    icon: (
      <svg xmlns="/imges/code_48px.png" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 22H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 14L8 10L12 14L16 10L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 10L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Graphic Design',
    description: 'I am an experienced Graphic Designer with a strong eye for creativity and detail. I specialize in creating visually appealing designs such as logos, posters, banners, and social media. '
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 11.08V12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C13.25 2 14.47 2.29 15.61 2.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 11L11.5 13L15.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Content Creation',
    description: 'I am skilled in Content Creation, with experience in writing, storytelling, and developing engaging digital content.'
  },
];

const Service: React.FC = () => {
  return (
    <section id='Work' className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headings */}
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase text-gray-400 tracking-wider">SERVICES</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Work experience
          </p>
        </div>
        
        {/* Responsive Grid for Service Cards */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-white rounded-lg shadow-lg border-2 border-transparent transition-all duration-300
              hover:shadow-xl hover:border-purple-500"
            >
              {/* Icon Container */}
              <div className="w-fit p-3 bg-purple-100 text-purple-600 rounded-lg">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="mt-2 text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* "Know More" Link */}
              <a href="#" className="mt-4 inline-flex items-center text-purple-600 font-semibold text-sm group">
                Know More
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;