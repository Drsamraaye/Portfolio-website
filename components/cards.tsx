import React from 'react';
import Image from "next/image";
// Define the type for a single card's data
type CardData = {
  imageUrl: string;
  title: string;
  description: string;
};

// Main Cards component to render the card grid
const Cards: React.FC = () => {
  // Data for the three cards
  const cards: CardData[] = [
    {
      imageUrl: '/imges/Screenshot 2025-09-18 123344.png',
      title: 'PORTFOLIO WEBSITE',
      description: 'A personal website that highlights my skills, projects, and experiences. It is designed with a clean layout and responsive design to showcase my work professionally.',
    },
    {
      imageUrl: '/imges/Screenshot 2025-09-18 123131.png',
      title: 'AIRBNB WEBSITE',
      description: 'A modern clone of Airbnb with property listings, booking features, and a user-friendly interface. It demonstrates my ability to build functional and interactive web applications.',
    },
    {
      imageUrl: '/imges/youtube.png',
      title: 'YOUTUBE WEBSITE',
      description: 'A YouTube-inspired platform with video listings, categories, and a smooth navigation system. It focuses on recreating a familiar video streaming experience with responsive design.',
    },
  ];

  return (

    <section id='#Create' className='bg-zinc-300'>

    
    <div  className=''>
      <div className="relative z-20 mt-30 mx-auto max-w-xl space-y-6 text-center ">
                    <h2 className="text-4xl font-bold lg:text-5xl text-black p-10 ">Created websites</h2>
                    <p className='-mt-10'>I am a passionate Full-Stack Developer and Digital Marketer, dedicated to building modern, responsive, and user-friendly web applications.</p>
                </div>
    
    <div className="flex justify-center items-center min-h-screen bg-zinc-300 p-4 font-[Inter]">
      
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        
        
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Card Image */}
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-500 font-medium text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              
              {/* Learn More Button */}
              <a href="https://github.com/Drsamraaye/Portfolio-website">
              <button
                className="mt-auto px-6 py-4 m-5 rounded-lg font-bold text-white  text-sm transition-all duration-300 transform-gpu
                           bg-black hover:bg-zinc-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                
                Dowload
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section> 
  );
};

export default Cards;
