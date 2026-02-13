// components/Hackathon.tsx
import React from 'react';
import Image from 'next/image';
import { Trophy } from 'lucide-react';

const Hackathon = () => {
    return (
        <section id='Hackathon' className="py-24 lg:py-40 bg-transparent font-sans relative overflow-hidden transition-colors duration-500">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/10 rounded-full blur-[100px] lg:blur-[120px] -z-10 animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px] lg:blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24 space-y-4">
                    <span className="inline-block px-4 py-1.5 lg:py-2 rounded-full glass border border-foreground/10 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Recognition</span>
                    <h2 className="text-4xl md:text-7xl font-black text-foreground leading-tight uppercase tracking-tighter">
                        Hackathon <span className="text-primary italic">Success</span>
                    </h2>
                </div>

                {/* Main Hackathon Card */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Feature Image & Award */}
                    <div className="lg:col-span-7 relative group rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden glass p-3 lg:p-4 border border-foreground/5">
                        <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-muted">
                            <Image
                                src="/hackathon-award.jpg"
                                alt="Award Ceremony"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[0.2] dark:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>

                            <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 space-y-2 lg:space-y-3">
                                <div className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 glass rounded-xl lg:rounded-2xl border border-foreground/10 backdrop-blur-md">
                                    <Trophy className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                                    <span className="text-[10px] lg:text-sm font-black text-foreground uppercase tracking-widest">3rd Place Overall</span>
                                </div>
                                <h3 className="text-2xl lg:text-4xl font-black text-foreground uppercase tracking-tighter">XALKA DOON 2025</h3>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats & Impact */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="glass p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-foreground/5 flex-grow space-y-6 lg:space-y-8 backdrop-blur-xl">
                            <div className="space-y-3 lg:space-y-4">
                                <h4 className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em]">The Achievement</h4>
                                <p className="text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed">
                                    Compete against 50+ elite developer teams to build scalable social impact solutions. Awarded for technical innovation and project viability.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="space-y-1 lg:space-y-2">
                                    <p className="text-3xl lg:text-4xl font-black text-foreground">$2,000</p>
                                    <p className="text-[9px] lg:text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">Grand Prize</p>
                                </div>
                                <div className="space-y-1 lg:space-y-2">
                                    <p className="text-3xl lg:text-4xl font-black text-foreground">Kaydso</p>
                                    <p className="text-[9px] lg:text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">Project Name</p>
                                </div>
                            </div>

                            <div className="pt-6 lg:pt-8 border-t border-foreground/5">
                                <h4 className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-[0.3em] mb-4 lg:mb-6">Core Contributions</h4>
                                <ul className="space-y-3 lg:space-y-4">
                                    {[
                                        "Technical Lead & System Architecture",
                                        "Frontend Performance Optimization",
                                        "Product Pitch & Strategic Presentation"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 lg:gap-4 text-xs lg:text-sm font-bold text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Highlights Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        { img: "/hackathon-presentation.jpg", label: "Final Presentation" },
                        { img: "/hackathon-team.jpg", label: "Development Phase" },
                        { img: "/hackathon-portrait.jpg", label: "Team Recognition" }
                    ].map((item, i) => (
                        <div key={i} className="group relative aspect-[4/3] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden glass p-2 lg:p-3 border border-foreground/5">
                            <div className="relative w-full h-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-muted">
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    fill
                                    className="object-cover transition-all duration-700 opacity-50 group-hover:opacity-100 group-hover:scale-110 grayscale-[0.3] dark:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-[9px] lg:text-[10px] font-black text-foreground uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathon;
