// components/footer.tsx
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";

const FooterSection = () => {
    return (
        <footer className="relative bg-background text-foreground pt-24 pb-12 overflow-hidden font-sans border-t border-border">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

                    {/* Brand Section */}
                    <div className="text-center md:text-left space-y-6">
                        <Link href="#Home" className="text-3xl font-extrabold tracking-tight inline-block">
                            <span className="text-gradient">Guiled</span>
                            <span className="text-foreground">Hussein</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed font-light max-w-sm mx-auto md:mx-0">
                            Crafting exceptional digital experiences with modern technology and creative strategy. Let&apos;s build something amazing together.
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start gap-4">
                            {[
                                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/guiled-husein-a18b8038a/", color: "hover:text-[#0077b5]" },
                                { icon: <FaGithub />, href: "https://github.com/Drsamraaye", color: "hover:text-foreground" },
                                { icon: <FaTwitter />, href: "https://x.com/Guuleed701", color: "hover:text-[#1DA1F2]" },
                                { icon: <CiInstagram />, href: "https://www.instagram.com/guiledjr/?hl=en", color: "hover:text-[#E1306C]" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 glass rounded-full hover:bg-white/10 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 text-muted-foreground`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-foreground mb-8 uppercase tracking-wider text-primary">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "#Home" },
                                { name: "About", href: "#Resume" },
                                { name: "Projects", href: "#Project" },
                                { name: "Services", href: "#Work" },
                                { name: "Education", href: "#Education" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center md:text-left" id="contact">
                        <h3 className="text-lg font-bold text-foreground mb-8 uppercase tracking-wider text-primary">Get In Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center md:justify-start gap-4 group">
                                <div className="p-3 glass rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <MdEmail size={20} />
                                </div>
                                <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">gxuseen@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-4 group">
                                <div className="p-3 glass rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <FaPhone size={20} />
                                </div>
                                <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">+252 63 7018339</span>
                            </div>

                            <a
                                href="https://wa.me/252637018339?text=Hi%20Guiled!%20I%27m%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex items-center justify-center md:justify-start gap-3 w-fit mx-auto md:mx-0 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-[#25D366]/30 transform hover:-translate-y-1"
                            >
                                <FaWhatsapp size={22} />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-light">
                    <p>&copy; {new Date().getFullYear()} Guiled Hussein. All rights reserved.</p>
                    <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-border">
                        <IoLanguageSharp className="text-primary" />
                        <select className="bg-transparent border-none text-foreground focus:ring-0 cursor-pointer outline-none font-medium">
                            <option value="en" className="bg-background">English</option>
                            <option value="ar" className="bg-background">Somali</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
