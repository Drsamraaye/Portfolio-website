import { Rocket, Users, Clock } from 'lucide-react';

export default function StatsSection() {
    return (
        <section id="Workstatus" className="py-24 lg:py-40 bg-transparent border-t border-foreground/5 relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto max-w-[1400px] px-6 space-y-16 lg:space-y-24">
                <div className="relative z-10 mx-auto max-w-3xl space-y-4 lg:space-y-6 text-center">
                    <span className="inline-block px-4 py-2 rounded-full glass border border-foreground/10 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-primary">Live Status</span>
                    <h2 className="text-4xl lg:text-7xl font-black text-foreground leading-tight uppercase tracking-tighter">My Work <span className="text-primary italic">Status</span></h2>
                    <p className="text-base lg:text-lg text-muted-foreground font-medium leading-relaxed">My focus is on growth, consistency, and building applications that are both scalable and user-friendly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        { label: 'Completed Projects', value: '20+', icon: Rocket, sub: 'Success builds trust' },
                        { label: 'Global Connections', value: '200+', icon: Users, sub: 'Collaborating worldwide' },
                        { label: 'Availability', value: '24/7', icon: Clock, sub: 'Ready for new challenges' },
                    ].map((stat, i) => (
                        <div key={i} className="group relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-3xl -z-10"></div>
                            <div className="glass p-6 sm:p-12 rounded-[2rem] lg:rounded-[2.5rem] border border-foreground/5 text-center space-y-4 lg:space-y-6 hover:border-primary/40 transition-all duration-700 hover:-translate-y-2 backdrop-blur-xl">
                                <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
                                    <stat.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                                </div>
                                <div className="space-y-1 lg:space-y-2">
                                    <div className="text-4xl lg:text-6xl font-black text-foreground tracking-tighter group-hover:text-primary transition-colors duration-500 font-mono italic">
                                        {stat.value}
                                    </div>
                                    <p className="text-[9px] lg:text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.3em]">{stat.label}</p>
                                </div>
                                <p className="text-[10px] lg:text-xs font-bold text-muted-foreground/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
