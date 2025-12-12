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
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 flex justify-center transition-all duration-300">
            <nav
                className={cn(
                    "w-full max-w-5xl rounded-full transition-all duration-500 ease-in-out border border-transparent",
                    isScrolled
                        ? "bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-xl border-white/20 dark:border-white/10 py-2.5 px-6"
                        : "bg-transparent py-4 px-4"
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2">
                        <Link href="#home" className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 shadow-lg group">
                            <Image
                                src="/imges/WhatsApp Image 2025-09-18 at 18.12.17_736e82e5.jpg" // Using your actual profile image as logo for personal brand feel
                                alt="Logo"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </Link>
                        <span className={cn(
                            "font-bold text-lg tracking-tight hidden sm:block transition-all duration-300",
                            isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        )}>
                            Guiled<span className="text-primary">.dev</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-black/20 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-sm">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/10 dark:hover:bg-white/5 rounded-full transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <ModeToggle />

                        <Button asChild size="sm" className="hidden sm:inline-flex rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                            <Link href="#contact">
                                Hire Me
                            </Link>
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden">
                            <Button
                                onClick={() => setMenuState(!menuState)}
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-white/10"
                            >
                                {menuState ? <X size={20} /> : <Menu size={20} />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={cn(
                        "absolute top-full left-0 right-0 mt-4 p-4 transition-all duration-300 origin-top transform",
                        menuState
                            ? "opacity-100 scale-100 translate-y-0 visible"
                            : "opacity-0 scale-95 -translate-y-4 invisible"
                    )}
                >
                    <div className="glass-card rounded-3xl p-6 shadow-2xl overflow-hidden">
                        <ul className="flex flex-col gap-2">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block p-4 text-center text-lg font-medium text-muted-foreground hover:text-white hover:bg-primary/20 rounded-2xl transition-all duration-200"
                                        onClick={() => setMenuState(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-white/10 mt-2">
                                <Button asChild className="w-full rounded-xl py-6 text-lg" onClick={() => setMenuState(false)}>
                                    <Link href="#contact">
                                        Hire Me Now
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}