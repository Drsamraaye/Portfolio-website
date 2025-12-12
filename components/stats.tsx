export default function StatsSection() {
    return (
        <section id="Workstatus" className="py-12 md:py-20 ">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-bold lg:text-5xl text-foreground ">My Work Status</h2>
                    <p className="text-muted-foreground ">My focus is on growth, consistency, and building applications that are both scalable and user-friendly.</p>
                </div>

                <div className="grid gap-12 divide-y divide-border *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-foreground ">+20</div>
                        <p className="font-bold text-muted-foreground">Completed Projects</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-foreground ">200+</div>
                        <p className="font-bold text-muted-foreground">Connections</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold text-foreground ">7/24 hours</div>
                        <p className="font-bold text-muted-foreground" >Available</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
