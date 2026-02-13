// components/footer.tsx
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const FooterSection = () => {
    return (
        <footer className="relative bg-background text-foreground pt-24 pb-12 lg:pb-12 overflow-hidden font-sans border-t border-foreground/5 transition-colors duration-500">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[128px] -z-10 animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[128px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 max-w-[1500px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
                        <Link href="#Home" className="text-3xl lg:text-4xl font-black uppercase tracking-tighter inline-block">
                            GUILED <span className="text-primary italic">HUSSEIN</span>
                        </Link>
                        <p className="text-muted-foreground leading-[1.8] font-medium max-w-md mx-auto lg:mx-0">
                            Crafting exceptional digital experiences with modern technology and creative strategy. Leading the next generation of web innovation.
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center lg:justify-start gap-4">
                            {[
                                { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/guiled-husein-a18b8038a/", color: "hover:bg-primary" },
                                { icon: <FaGithub size={18} />, href: "https://github.com/Drsamraaye", color: "hover:bg-primary" },
                                { icon: <FaTwitter size={18} />, href: "https://x.com/Guuleed701", color: "hover:bg-primary" },
                                { icon: <CiInstagram size={20} />, href: "https://www.instagram.com/guiledjr/?hl=en", color: "hover:bg-primary" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 flex items-center justify-center rounded-xl glass border border-foreground/10 ${social.color} transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,72,0.3)] text-muted-foreground hover:text-white`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3 text-center lg:text-left">
                        <h3 className="text-[10px] lg:text-xs font-black text-muted-foreground/60 uppercase tracking-[0.4em] mb-8 lg:mb-10">Navigation</h3>
                        <ul className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                            {[
                                { name: "Home", href: "#Home" },
                                { name: "About", href: "#Resume" },
                                { name: "Projects", href: "#Project" },
                                { name: "Services", href: "#Work" },
                                { name: "Education", href: "#Education" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-sm lg:text-base font-bold text-muted-foreground hover:text-primary transition-all duration-300 flex items-center justify-center lg:justify-start group gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4 text-center lg:text-left" id="contact">
                        <h3 className="text-[10px] lg:text-xs font-black text-muted-foreground/60 uppercase tracking-[0.4em] mb-8 lg:mb-10">Contact</h3>
                        <div className="space-y-6 lg:space-y-8">
                            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-foreground/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                                    <MdEmail size={20} />
                                </div>
                                <span className="text-muted-foreground font-bold group-hover:text-foreground transition-colors break-all">gxuseen@gmail.com</span>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl glass border border-foreground/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                                    <FaPhone size={18} />
                                </div>
                                <span className="text-muted-foreground font-bold group-hover:text-foreground transition-colors">+252 63 7018339</span>
                            </div>

                            <a
                                href="https://wa.me/252637018339?text=Hi%20Guiled!%20I%27m%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-8 lg:px-10 py-4 lg:py-5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl font-black uppercase tracking-widest transition-all duration-500 shadow-xl hover:shadow-[#25D366]/40 transform hover:-translate-y-1 active:scale-95"
                            >
                                <FaWhatsapp size={22} />
                                <span className="text-sm">Let&apos;s Talk Info</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-foreground/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                    <p>&copy; {new Date().getFullYear()} Guiled Hussein. Built for the Future.</p>
                    <div className="flex items-center gap-4 glass px-6 py-3 rounded-full border border-foreground/10">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-muted-foreground">AVAILABLE FOR NEW PROJECTS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
