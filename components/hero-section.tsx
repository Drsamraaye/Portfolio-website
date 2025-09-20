'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { LogoCloud } from './logo-cloud'

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="">
      {/* Header */}
      <header className="py-4 bg-black sm:py-1">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#">
            <img
              className="w-auto h-35"
              src="/imges/Black_And_White_Illustrated_Eagle_Logo-removebg-preview.png" // replace with local logo if needed
              alt="Logo"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 items-center">
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Services</Link>
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Skills</Link>
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Build websites</Link>
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:inline-flex relative items-center justify-center group">
            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <Link
              href="#"
              className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
            >
              Hire me 
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="flex flex-col pt-8 pb-4 space-y-6 md:hidden px-4">
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Services</Link>
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Skills</Link>
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Build websites</Link>
            <Link href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Contact</Link>
            <Link href="#" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full">
              Start free trial
            </Link>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl grid items-center grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-normal text-white sm:text-3xl lg:text-5xl xl:text-6xl">
              Hi, I’m Guiled
              Full-Stack Developer & Content Creation
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
              I build responsive websites and apps with modern technologies like nextjs Passionate about creating clean, functional, and user-friendly designs.
            </p>
            <div className="mt-4 flex items-center space-x-3">
                <span className="ml-2 text-base font-normal text-white">⭐ 4.1/5 (14k Reviews)</span>
              <span className="text-lg font-normal text-white">Created by 20+ websites</span>
            </div>
            <div className='gap-2 justify-center items-center p-24 pt-10'>
            <Button className='rounded-full bg-blue-950 px-10 py-7 '>
              View my work
            </Button>
            </div>
            {/* Reviews */}
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="absolute inset-0">
              <svg className="blur-3xl opacity-70" style={{ filter: 'blur(64px)' }} width="444" height="536" viewBox="0 0 444 536" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
                <defs>
                  <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="cyan" />
                    <stop offset="100%" stopColor="purple" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Image src="/imges/WhatsApp_Image_2025-08-13_at_16.37.26_18fa1b7a-removebg-preview (1).png" alt="Illustration" width={400} height={800} className="relative  w-250 h-140 rounded-full object-cover" />
          </div>
          <LogoCloud/>
        </div>
      </section>
    </div>
  )
}
