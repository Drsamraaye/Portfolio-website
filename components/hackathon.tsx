// components/Hackathon.tsx
import React from 'react';
import Image from 'next/image';
import { Trophy, Users, Target, Lightbulb, TrendingUp, Award } from 'lucide-react';

const Hackathon = () => {
    return (
        <section id='Hackathon' className="py-24 bg-transparent font-sans relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-sm font-bold uppercase text-primary tracking-[0.2em] mb-3">COMPETITION</h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Hackathon <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Building the future through social impact at XALKA DOON 2025
                    </p>
                </div>

                {/* Main Hackathon Card */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="glass-card rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        <div className="grid md:grid-cols-2 gap-0">

                            {/* Left: Image Gallery */}
                            <div className="relative h-[400px] md:h-auto overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Image
                                    src="/hackathon-award.jpg"
                                    alt="Team Kaydso receiving 3rd place award at XALKA DOON"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 right-4 z-20 glass px-4 py-2 rounded-full">
                                    <span className="text-sm font-bold text-primary">3rd Place 🏆</span>
                                </div>
                            </div>

                            {/* Right: Info */}
                            <div className="p-8 md:p-12 space-y-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                            <Trophy className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-foreground">XALKA DOON 2025</h3>
                                            <p className="text-sm text-muted-foreground">Building the Future Through Social Impact</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="glass p-4 rounded-2xl border border-border/50">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Award className="w-4 h-4 text-primary" />
                                            <span className="text-xs font-medium text-muted-foreground uppercase">Achievement</span>
                                        </div>
                                        <p className="text-2xl font-bold text-foreground">3rd Place</p>
                                    </div>
                                    <div className="glass p-4 rounded-2xl border border-border/50">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Trophy className="w-4 h-4 text-accent" />
                                            <span className="text-xs font-medium text-muted-foreground uppercase">Prize</span>
                                        </div>
                                        <p className="text-2xl font-bold text-foreground">$2,000</p>
                                    </div>
                                </div>

                                {/* Team Info */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users className="w-5 h-5 text-primary" />
                                        <h4 className="text-lg font-bold text-foreground">Team Kaydso</h4>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        A collaborative team of passionate developers and innovators dedicated to creating solutions with meaningful social impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Role & Contributions */}
                <div className="max-w-6xl mx-auto mb-16">
                    <div className="glass-card p-8 md:p-12 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Target className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">My Role & Contributions</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    Technical Lead & Developer
                                </h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>Led the development of the core application architecture using modern web technologies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>Implemented responsive UI components with focus on user experience and accessibility</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>Collaborated with team members to integrate frontend and backend systems seamlessly</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    Presentation & Strategy
                                </h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1.5">•</span>
                                        <span>Presented our solution to judges, highlighting social impact and technical innovation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1.5">•</span>
                                        <span>Contributed to strategic planning and feature prioritization during the hackathon</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent mt-1.5">•</span>
                                        <span>Facilitated team communication and ensured alignment with project goals</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Challenges & Solutions + Skills */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">

                    {/* Challenges */}
                    <div className="glass-card p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                                <Lightbulb className="w-5 h-5 text-destructive" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Challenges & Solutions</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="border-l-2 border-primary pl-4">
                                <h4 className="font-semibold text-foreground mb-2">Time Constraints</h4>
                                <p className="text-sm text-muted-foreground">
                                    Developed an agile workflow with clear milestones, enabling rapid prototyping and iterative development within tight deadlines.
                                </p>
                            </div>

                            <div className="border-l-2 border-accent pl-4">
                                <h4 className="font-semibold text-foreground mb-2">Team Coordination</h4>
                                <p className="text-sm text-muted-foreground">
                                    Implemented daily standups and used collaborative tools to maintain clear communication and task distribution across the team.
                                </p>
                            </div>

                            <div className="border-l-2 border-secondary pl-4">
                                <h4 className="font-semibold text-foreground mb-2">Technical Complexity</h4>
                                <p className="text-sm text-muted-foreground">
                                    Leveraged existing frameworks and libraries strategically, focusing on delivering core functionality with high impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Applied */}
                    <div className="glass-card p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Skills Applied & Gained</h3>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 glass rounded-xl border border-border/30">
                                <span className="text-sm font-medium text-foreground">React & Next.js Development</span>
                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Advanced</span>
                            </div>

                            <div className="flex items-center justify-between p-3 glass rounded-xl border border-border/30">
                                <span className="text-sm font-medium text-foreground">Team Collaboration</span>
                                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Applied</span>
                            </div>

                            <div className="flex items-center justify-between p-3 glass rounded-xl border border-border/30">
                                <span className="text-sm font-medium text-foreground">Public Presentation</span>
                                <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">Gained</span>
                            </div>

                            <div className="flex items-center justify-between p-3 glass rounded-xl border border-border/30">
                                <span className="text-sm font-medium text-foreground">Rapid Prototyping</span>
                                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Advanced</span>
                            </div>

                            <div className="flex items-center justify-between p-3 glass rounded-xl border border-border/30">
                                <span className="text-sm font-medium text-foreground">Problem Solving</span>
                                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">Applied</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact & Learnings */}
                <div className="max-w-6xl mx-auto">
                    <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Impact & Key Learnings</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-4">Project Impact</h4>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Our solution focused on addressing real-world social challenges through technology. By placing 3rd among competitive teams, we demonstrated that innovative thinking combined with technical execution can drive meaningful change.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The recognition validated our approach to building technology with purpose, reinforcing the importance of user-centered design and social impact in modern development.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-4">Personal Growth</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-primary text-xs font-bold">1</span>
                                            </div>
                                            <span className="text-muted-foreground text-sm">Enhanced ability to work under pressure and deliver quality results within tight timeframes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-accent text-xs font-bold">2</span>
                                            </div>
                                            <span className="text-muted-foreground text-sm">Improved communication skills through collaborative development and presentation to judges</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-secondary text-xs font-bold">3</span>
                                            </div>
                                            <span className="text-muted-foreground text-sm">Deeper understanding of social impact technology and its potential to create positive change</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="max-w-6xl mx-auto mt-16">
                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Event Highlights</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative h-72 rounded-2xl overflow-hidden glass-card group">
                            <Image
                                src="/hackathon-presentation.jpg"
                                alt="Team presentation at XALKA DOON"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">Presenting our solution</p>
                            </div>
                        </div>

                        <div className="relative h-72 rounded-2xl overflow-hidden glass-card group">
                            <Image
                                src="/hackathon-team.jpg"
                                alt="Team Kaydso members at the event"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">Team Kaydso ready to innovate</p>
                            </div>
                        </div>

                        <div className="relative h-72 rounded-2xl overflow-hidden glass-card group">
                            <Image
                                src="/hackathon-portrait.jpg"
                                alt="Team member portrait"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium">Ready for the challenge</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hackathon;
