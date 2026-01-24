'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Image from "next/image";
import { ModeToggle } from './mode-toggle';

const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#Resume' },
    { name: 'Services', href: '#Work' },
    { name: 'Portfolio', href: '#Project' },
    { name: 'Education', href: '#Education' },
    { name: 'Hackathon', href: '#Hackathon' },
    { name: 'Resume', href: '/resume' }
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-2" : "py-4 md:py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-8">
                <nav
                    className={cn(
                        "relative flex items-center justify-between rounded-full transition-all duration-500 ease-in-out",
                        isScrolled
                            ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg px-6 py-3"
                            : "bg-transparent px-2 md:px-0"
                    )}
                >
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <Link href="#home" className="relative group block">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background shadow-md">
                                <Image
                                    src="/imges/WhatsApp Image 2025-09-18 at 18.12.17_736e82e5.jpg"
                                    alt="Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <Link href="#home" className={cn(
                            "flex flex-col",
                            isScrolled ? "opacity-100" : "opacity-100"
                        )}>
                            <span className="font-bold text-lg leading-none tracking-tight">
                                Guiled<span className="text-primary">.dev</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-black/50 rounded-full px-1.5 py-1 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors duration-300 group"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-0 shadow-sm origin-center"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <ModeToggle />

                        <Button asChild className="hidden sm:inline-flex rounded-full px-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-300 shadow-md shadow-primary/20 border-0">
                            <Link href="#contact">
                                Hire Me
                            </Link>
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <Button
                                onClick={() => setMenuState(!menuState)}
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-background/50 backdrop-blur-md border-input"
                            >
                                {menuState ? <X size={18} /> : <Menu size={18} />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div
                        className={cn(
                            "absolute top-[calc(100%+1rem)] left-0 right-0 mx-4 p-1 transition-all duration-300 origin-top transform z-50",
                            menuState
                                ? "opacity-100 scale-100 translate-y-0 visible"
                                : "opacity-0 scale-95 -translate-y-4 invisible"
                        )}
                    >
                        <div className="bg-background/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/10 overflow-hidden ring-1 ring-black/5">
                            <div className="flex flex-col gap-1">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-between p-4 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-2xl transition-all duration-200"
                                        onClick={() => setMenuState(false)}
                                    >
                                        {item.name}
                                        <span className="text-muted-foreground/30">→</span>
                                    </Link>
                                ))}
                                <div className="h-px bg-border my-2"></div>
                                <Button asChild className="w-full rounded-xl py-6 text-lg bg-gradient-to-r from-primary to-secondary border-0" onClick={() => setMenuState(false)}>
                                    <Link href="#contact">
                                        Hire Me Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}