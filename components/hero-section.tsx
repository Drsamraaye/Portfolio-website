import React from 'react'
import { HeroHeader } from "@/components/header"

import LogoCloudTwo from './logo-cloud'
import StatsSection from './stats'

import Image from "next/image";
import Products from './cards'
import AboutMe from './Aboutme'
import Hackathon from './hackathon'
import Service from './service'
import Education from './Education'
import FooterSection from './footer'
import WhatsAppButton from './whatsapp-button'


export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main id='Home' className="bg-transparent overflow-x-hidden relative">
        {/* Hero Area */}
        <section className="relative min-h-screen flex items-center pt-32 pb-20">

          {/* Background Glow */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-glow"></div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

              {/* Left Content */}
              <div className="text-center lg:text-left lg:w-3/5 space-y-8 animate-slide-up">

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 bg-primary/5 mx-auto lg:mx-0">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-foreground/80">Available for Freelance Projects</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight">
                    Hi, I&apos;m <br />
                    <span className="text-gradient">Guiled Hussein</span>
                  </h1>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground/80 text-balance">
                    Full-Stack Developer & <br className="hidden md:block" />Digital Strategist
                  </h2>
                </div>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed border-l-2 border-primary/50 pl-6">
                  I engineer robust web applications and data-driven marketing strategies that transform businesses. Specializing in the React ecosystem and modern web performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start pt-4">
                  <a href="#Project" className="group px-8 py-4 text-base font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    View My Work
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#contact" className="px-8 py-4 text-base font-bold text-foreground glass rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/30 dark:hover:bg-white/5">
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:w-2/5 flex justify-center animate-float relative">
                {/* Decorative circle behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl transform scale-110"></div>

                <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] p-2 rounded-full border border-black/5 dark:border-white/10 glass">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-background shadow-2xl">
                    <Image
                      src="/imges/WhatsApp_Image_2025-09-17_at_18.40.19_8ac072c5-removebg-preview.png"
                      alt="Guiled Hussein"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      priority
                    />
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="absolute -left-4 top-1/4 glass p-3 rounded-2xl animate-bounce-slow shadow-lg border border-white/20 dark:border-white/5">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                      alt="React"
                    />
                  </div>
                  <div className="absolute -right-4 bottom-1/3 glass p-3 rounded-2xl animate-bounce-slow delay-700 shadow-lg border border-white/20 dark:border-white/5">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      width={32}
                      height={32}
                      className="w-8 h-8 dark:invert"
                      alt="Next.js"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoCloudTwo />
        <AboutMe />
        <Hackathon />
        <Products />
        <Service />
        <Education />
        <StatsSection />
        <FooterSection />
      </main>
      <WhatsAppButton />
    </>
  )
}