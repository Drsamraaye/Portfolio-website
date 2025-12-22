// components/AboutMe.tsx
import Image from 'next/image';
import React from 'react';

// Define the type for the skill data
interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Full-Stack Development', percentage: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Database Management', percentage: 90, color: 'from-purple-500 to-indigo-500' },
  { name: 'Digital Marketing', percentage: 85, color: 'from-pink-500 to-rose-500' },
  { name: 'UI/UX & Design', percentage: 88, color: 'from-amber-400 to-orange-500' },
];

const AboutMe: React.FC = () => {
  return (
    <section id='Resume' className="container mx-auto py-32 px-4 md:px-8 font-sans relative">
      {/* Background Ambience */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10"></div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Left Column: Image & Stats */}
        <div className="w-full lg:w-5/12 relative group">
          <div className="relative rounded-[2.5rem] overflow-hidden glass p-4 border border-black/5 dark:border-white/10 rotate-3 transition-transform duration-500 group-hover:rotate-0">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-card">
              <Image
                src="/imges/WhatsApp Image 2025-09-18 at 18.12.17_736e82e5.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-light uppercase tracking-widest mb-2 opacity-80">Experience</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">2+</span>
                  <span className="text-xl">Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/30 rounded-[2.5rem] -rotate-3"></div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-7/12 space-y-10">
          <div>
            <h4 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">About Me</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting <span className="text-gradient">Digital Experiences</span> That Matter.
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
            <p>
              I am a results-driven <strong className="text-foreground font-medium">Full-Stack Developer</strong> and <strong className="text-foreground font-medium">Digital Marketing Specialist</strong> driven by a passion for solving complex problems. I engineer robust web applications that bridge the gap between technical excellence and user-centric design.
            </p>
            <p>
              With a toolkit that spans <strong className="text-foreground font-medium">JavaScript, React, Next.js, and Node.js</strong>, I build scalable systems that power modern businesses. My approach combines clean code architecture with creative marketing strategies to ensure every product I build not only functions flawlessly but also reaches its intended audience effectively.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Technical Proficiency</h3>
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                    <span className="font-mono text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <a href="/imges/GreenElegantProfessionalResume(1).pdf" download="Guiled_Hussein_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25 group flex items-center gap-3">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
