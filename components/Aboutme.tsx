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
    <section id='Resume' className="py-24 lg:py-40 bg-transparent font-sans relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">

          {/* Left Column: Image & Stats */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden glass p-3 lg:p-4 border border-foreground/5 transition-transform duration-700 hover:rotate-2">
              <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-muted">
                <Image
                  src="/imges/1767716468021.jpg"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-110 grayscale-[0.1] dark:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>

                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 lg:right-10 text-foreground">
                  <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.3em] mb-2 lg:mb-4 text-primary">Years of Experience</p>
                  <div className="flex items-baseline gap-2 lg:gap-3">
                    <span className="text-5xl lg:text-7xl font-black tracking-tighter">2+</span>
                    <span className="text-sm lg:text-lg font-bold text-muted-foreground uppercase">SUCCESSFUL YEARS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background aura */}
            <div className="absolute -top-10 -left-10 lg:-top-20 lg:-left-20 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] lg:blur-[120px] -z-10 animate-pulse-glow"></div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 space-y-10 lg:space-y-12">
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full glass border border-foreground/10 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-primary">About Me</span>
              <h2 className="text-4xl md:text-7xl font-black text-foreground leading-tight uppercase tracking-tighter">
                Crafting <span className="text-primary italic">Digital</span> <br /> Experiences
              </h2>
              <div className="h-1.5 w-20 lg:w-24 bg-primary rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-muted-foreground font-medium leading-[1.8] text-center lg:text-left">
              <p>
                I am a results-driven <strong className="text-foreground font-black">Full-Stack Developer</strong> and <strong className="text-foreground font-black">Digital Strategist</strong> driven by a passion for solving complex problems. I engineer robust web applications that bridge the gap between technical excellence and user-centric design.
              </p>
              <p>
                With a toolkit that spans <strong className="text-primary font-black">JavaScript, React, Next.js, and Node.js</strong>, I build scalable systems that power modern businesses.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-10 group">
              <h3 className="text-xl lg:text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-4 justify-center lg:justify-start">
                Technical Proficiency
                <div className="h-px bg-foreground/10 flex-grow hidden lg:block"></div>
              </h3>

              <div className="grid grid-cols-1 gap-6 lg:gap-8">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 lg:space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xs lg:text-sm font-black uppercase tracking-widest text-foreground/90">{skill.name}</span>
                      <span className="text-[10px] lg:text-xs font-black text-primary font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-primary relative transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 skew-x-12 translate-x-full animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 lg:pt-6 flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <a href="/CV.pdf" download="Guiled_Hussein_CV.pdf" className="group relative px-10 lg:px-12 py-5 lg:py-6 bg-foreground text-background font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center">
                Download Resume
              </a>
              <a href="#contact" className="px-10 lg:px-12 py-5 lg:py-6 border-2 border-foreground/10 text-foreground font-black uppercase tracking-widest rounded-full hover:bg-foreground/5 transition-all duration-500 text-center">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
