// components/AboutMe.tsx
import Image from 'next/image';
import React from 'react';

// Define the type for the skill data
interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: 'Full-stack developer', percentage: 80},
  { name: 'Database management', percentage: 75 },
  { name: 'Digital marketing', percentage: 90 },
  { name: 'Content creation', percentage: 85 },
];

const AboutMe: React.FC = () => {
  return (
    <section id='Resume' className="container bg-white mx-auto py-16 px-4 md:px-8 lg:px-16 font-sans">
      <div className="mb-8 relative  bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-black">About Me</h2>
        <div className="absolute bottom-0 left-0 h-1 w-12  rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12">
        {/* Profile Image Section */}
        <div className="w-full md:w-1/3 max-w-sm md:max-w-none rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/imges/WhatsApp Image 2025-09-18 at 18.12.17_736e82e5.jpg" // Ensure you have this image in your public/images folder
            alt="Profile"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Description & Button Section */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-600 leading-relaxed mb-6 text-base font-medium md:text-lg">
            Hi, my name is Guiled Hussen, I am a passionate and ambitious Full-Stack Developer and Digital Marketer with a strong interest in building modern, responsive, and user-friendly websites. My work focuses on combining technical skills in web development with creative marketing strategies to deliver digital solutions that are both functional and impactful.

I specialize in technologies such as JavaScript, React, Next.js, Node.js, and Tailwind CSS, and I enjoy creating projects that reflect real-world applications—ranging from personal portfolio websites to advanced web platforms.

Beyond coding, I am also dedicated to digital marketing, where I focus on strategies that increase visibility, engagement, and growth for online platforms. My vision is to use my skills to design solutions that not only look good but also solve problems and provide real value to users.
          </p>
          <a href="#contact">
          <button className="bg-black text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-zinc-300 transition duration-300">
            
            Hire Me
          </button>
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-4">
            <span className="font-bold text-gray-700 w-24 flex-shrink-0">{skill.name}</span>
            <div className="flex-1 bg-gray-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-black h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-gray-500 w-10 text-right flex-shrink-0">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;