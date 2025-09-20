'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo' // Assuming this is your logo component
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name:'Home', href: '#home' },
    { name: 'Resume', href: '#Resume' },
    { name: 'Contact', href: '#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                className="fixed z-20 w-full px-1 -p-14">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-8', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-3 py-1 lg:gap-0 lg:py-0">
                        {/* Logo */}
                        <a href="#Home">
                        
                           
                            <img className='w-30' src="/imges/Black_And_White_Illustrated_Eagle_Logo-removebg-preview.png" alt="Guild Logo" />
                        
                        </a>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground duration-150">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Dashboard Button */}
                        <div className="hidden lg:block">
                            <Button asChild size="sm">
                                <Link href="#contact">
                                    Hire me
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <Button
                                onClick={() => setMenuState(!menuState)}
                                variant="ghost"
                                size="sm"
                                className="z-50"
                            >
                                {menuState ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    data-state={menuState && 'active'}
                    className="absolute inset-x-0 top-0 mt-28 hidden w-full transform-gpu overflow-hidden px-6 transition-all duration-300 data-[state=active]:block lg:hidden"
                >
                    <div className="rounded-3xl border bg-background p-6 shadow-2xl">
                        <ul className="space-y-6 text-base">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                        onClick={() => setMenuState(false)} // Close menu on link click
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <Button asChild className="w-full" onClick={() => setMenuState(false)}>
                                <Link href="#contact">
                                    Hire
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}