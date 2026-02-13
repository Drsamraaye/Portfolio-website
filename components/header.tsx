'use client'
import Link from 'next/link'
import { MessageSquare, User, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from './mode-toggle';

const menuItems = [
    { name: 'HOME', href: '#Home' },
    { name: 'ABOUT', href: '#Resume' },
    { name: 'SERVICES', href: '#Work' },
    { name: 'PORTFOLIO', href: '#Project' },
    { name: 'CONTACT', href: '#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = () => setIsScrolled(window.scrollY > 20)
            window.addEventListener('scroll', scrollCheck)
            return () => window.removeEventListener('scroll', scrollCheck)
        }
        return handleScroll()
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
                isScrolled ? "py-4 bg-background/40 backdrop-blur-3xl border-b border-border/50" : "py-6 sm:py-8 bg-transparent"
            )}
        >
            <div className="container mx-auto max-w-[1800px] px-4 md:px-12 lg:px-16">
                <nav className="flex items-center justify-between relative">
                    {/* Left: Mobile Toggle & Desktop Nav */}
                    <div className="flex items-center gap-4 lg:gap-10 xl:gap-14">
                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <Button
                                onClick={() => setMenuState(!menuState)}
                                variant="ghost"
                                size="icon"
                                className="w-10 h-10 rounded-full hover:bg-foreground/10 text-foreground group relative z-50"
                            >
                                <div className="flex flex-col gap-1.2 items-center justify-center">
                                    <span className={cn("w-5 h-0.5 bg-foreground transition-all duration-300", menuState && "rotate-45 translate-y-1.5")}></span>
                                    <span className={cn("w-5 h-0.5 bg-foreground transition-all duration-300", menuState && "opacity-0 translate-x-4")}></span>
                                    <span className={cn("w-5 h-0.5 bg-foreground transition-all duration-300", menuState && "-rotate-45 -translate-y-1.5")}></span>
                                </div>
                            </Button>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex items-center gap-10 xl:gap-14">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[10px] xl:text-[11px] font-black tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all duration-500 relative group drop-shadow-sm"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-primary rounded-full transition-all duration-500 group-hover:w-5 group-hover:drop-shadow-[0_0_12px_rgba(255,0,72,0.9)]"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Branding (Mobile Centered) */}
                    <Link href="/" className="lg:hidden absolute left-1/2 -translate-x-1/2">
                        <span className="text-sm lg:text-lg font-black text-foreground tracking-widest uppercase opacity-40">GUILED</span>
                    </Link>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-1.5 sm:gap-6">
                        {/* Theme Toggle & Social Icons */}
                        <div className="flex items-center gap-1 sm:gap-4">
                            <ModeToggle />
                            <div className="hidden sm:flex items-center gap-3 lg:gap-4">
                                {[MessageSquare, User, CheckCircle].map((Icon, idx) => (
                                    <button key={idx} className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-foreground/5 border border-border/50 text-muted-foreground hover:text-primary transition-all duration-500 transform hover:scale-110">
                                        <Icon strokeWidth={2.5} className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button asChild className="relative overflow-hidden group rounded-full px-4 sm:px-12 py-3.5 sm:py-7 text-[8px] sm:text-xs font-black uppercase tracking-[0.2em] bg-primary hover:bg-[#ff0055] transition-all duration-500 border-0 text-white active:scale-95">
                            <Link href="#contact">
                                <span className="relative z-10">Hire</span>
                                <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div
                        className={cn(
                            "fixed inset-0 min-h-screen bg-background/95 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden flex flex-col justify-center px-12 z-40",
                            menuState
                                ? "translate-y-0 opacity-100 visible"
                                : "-translate-y-full opacity-0 invisible"
                        )}
                    >
                        <div className="flex flex-col gap-10">
                            {menuItems.map((item, idx) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-4xl sm:text-6xl font-black text-foreground hover:text-primary transition-all tracking-tighter transform",
                                        menuState ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                                    )}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                    onClick={() => setMenuState(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className={cn("pt-10 transition-all duration-700 delay-500", menuState ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}>
                                <Button asChild className="w-full rounded-[2rem] py-10 text-xl font-black uppercase tracking-widest bg-primary border-0" onClick={() => setMenuState(false)}>
                                    <Link href="#contact">
                                        Hire Me Now
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile decorative background text */}
                        <div className="absolute bottom-10 left-12 opacity-5 pointer-events-none">
                            <span className="text-8xl font-black tracking-tighter text-foreground">GUILED</span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}