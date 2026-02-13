import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

export default function LogoCloudTwo() {
    return (
        <section className="py-20 bg-background border-y border-foreground/5 transition-colors duration-500">
            <div className="container mx-auto max-w-[1500px] px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/4 lg:border-r lg:border-foreground/10 lg:pr-12 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tighter">
                            Technical <span className="text-primary">Skills</span>
                        </h2>
                        <p className="mt-4 text-muted-foreground font-medium tracking-wide">The core technologies powering my digital solutions.</p>
                    </div>
                    <div className="relative w-full lg:w-3/4 py-6">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={100}
                        >
                            {[
                                { src: "/imges/icons8-nodejs-48.png", alt: "Node.js" },
                                { src: "/imges/postgreesql_48px.png", alt: "PostgreSQL" },
                                { src: "/imges/github_26px.png", alt: "GitHub", invert: true },
                                { src: "/imges/icons8-nextjs-64.png", alt: "Next.js", invert: true },
                                { src: "/imges/javascript_48px.png", alt: "JavaScript" },
                                { src: "/imges/swift_48px.png", alt: "Swift" },
                                { src: "/imges/mysql_48px.png", alt: "MySQL" },
                                { src: "/imges/visual_studio_48px.png", alt: "VS Code" }
                            ].map((logo, i) => (
                                <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 dark:brightness-110">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={48}
                                        height={48}
                                        className={logo.invert ? "dark:invert-0 invert" : ""}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-gradient-to-r from-background via-transparent to-transparent absolute inset-y-0 left-0 w-12 lg:w-32 z-10 transition-colors duration-500"></div>
                        <div className="bg-gradient-to-l from-background via-transparent to-transparent absolute inset-y-0 right-0 w-12 lg:w-32 z-10 transition-colors duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
