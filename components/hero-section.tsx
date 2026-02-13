import React from 'react'
import { HeroHeader } from "@/components/header"

import LogoCloudTwo from './logo-cloud'
import StatsSection from './stats'

import Image from "next/image";
import Products from './cards'
import AboutMeSection from './Aboutme'
import Hackathon from './hackathon'
import Service from './service'
import Education from './Education'
import FooterSection from './footer'
import WhatsAppButton from './whatsapp-button'


export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main id='Home' className="bg-background text-foreground overflow-hidden relative min-h-screen transition-colors duration-500">
        {/* Background Glows and Particles */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[800px] h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[160px] animate-pulse-glow"></div>
          <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[140px]"></div>
          <div className="absolute inset-0 opacity-[0.15] dark:opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.2) 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
        </div>

        {/* Hero Area */}
        <section className="relative min-h-screen lg:min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">

          {/* Centered Image Background Element */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="relative w-full h-full animate-float opacity-40 md:opacity-60 lg:opacity-100">
              <Image
                src="/imges/ChatGPT Image Feb 13, 2026, 11_53_56 AM.png"
                alt="Guiled Hussein"
                fill
                className="object-cover object-[center_30%] md:object-[center_22%] lg:object-[center_28%] transition-all duration-700 grayscale-[0.2] dark:grayscale-0"
                priority
              />
              {/* Cinematic Vignettes and Glows */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent lg:opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 hidden lg:block"></div>

              {/* Intense Red Glow behind the head */}
              <div className="absolute top-[30%] lg:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] lg:blur-[140px] mix-blend-screen animate-pulse"></div>
            </div>
          </div>

          <div className="container mx-auto max-w-[1800px] px-6 md:px-12 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] lg:min-h-[750px] relative py-12 lg:py-0">

              {/* Left Content - Hero Text */}
              <div className="w-full lg:w-[60%] space-y-6 lg:space-y-12 animate-slide-up text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="space-y-1 lg:space-y-4">
                  <span className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter opacity-70 block text-foreground/70">
                    Hi, I&apos;m
                  </span>
                  <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-primary leading-[1] lg:leading-[0.8] uppercase tracking-tighter animate-in fade-in slide-in-from-left duration-1000 drop-shadow-sm transition-all">
                    Guiled <br className="lg:block" /> Hussein
                  </h1>
                </div>

                <div className="space-y-6 lg:space-y-10 max-w-xl">
                  <div className="space-y-4">
                    <h2 className="text-sm sm:text-xl md:text-2xl font-bold text-foreground uppercase tracking-[0.3em] lg:tracking-[0.4em] border-l-4 border-primary pl-4 lg:pl-8 py-1">
                      Full-Stack Developer & <br className="hidden sm:block" />Digital Strategist
                    </h2>
                    <p className="text-xs sm:text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-xs sm:max-w-md mx-auto lg:ml-9">
                      Crafting cutting-edge digital experiences <br className="hidden sm:block" /> for the new era.
                    </p>
                  </div>

                  <div className="pt-2 lg:pt-4 lg:ml-9">
                    <a href="#Project" className="group relative inline-flex items-center gap-4 lg:gap-6 px-8 lg:px-14 py-4 lg:py-6 text-sm lg:text-xl font-black uppercase tracking-widest text-white bg-primary rounded-full shadow-[0_0_30px_rgba(255,0,72,0.3)] hover:shadow-[0_0_60px_rgba(255,0,72,0.5)] transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden">
                      <span className="relative z-10 transition-transform group-hover:-translate-x-3">View My Work</span>
                      <span className="relative z-10 transition-transform group-hover:translate-x-3 text-xl">→</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Content - About Me Card */}
              <div className="w-full lg:w-[35%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
                {/* Floating Navigation Circle - Re-positioned for mobile */}
                <div className="absolute top-0 right-0 lg:top-1/2 lg:-translate-y-1/2 lg:-left-12 w-10 h-10 lg:w-16 lg:h-16 rounded-full glass border border-primary/20 flex items-center justify-center animate-bounce-slow z-30 transform lg:hover:scale-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,0,72,0.3)]">
                  <span className="text-primary text-lg">→</span>
                </div>

                <div className="w-full max-w-[380px] lg:max-w-[420px] glass p-6 lg:p-14 rounded-[2rem] lg:rounded-[2.5rem] border border-foreground/5 backdrop-blur-3xl shadow-2xl relative animate-slide-up delay-700 z-20 overflow-hidden group">
                  <div className="space-y-4 lg:space-y-10 relative z-10">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#ff0048]"></div>
                      <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] lg:tracking-[0.5em] text-primary">Status Brief</span>
                    </div>

                    <h3 className="text-2xl lg:text-4xl font-black tracking-tight leading-none uppercase text-foreground">
                      Visionary <span className="text-primary italic">Mindset</span>
                    </h3>

                    <p className="text-sm lg:text-lg text-muted-foreground font-medium leading-[1.6] lg:leading-[1.8]">
                      Pushing the boundaries of technology. Specializing in high-performance web systems and digital innovation.
                    </p>

                    <div className="pt-2">
                      <a href="#Resume" className="inline-flex items-center gap-3 lg:gap-4 text-[10px] lg:text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-300 group/link">
                        Explore Profile
                        <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Subtle glass texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <LogoCloudTwo />
        <AboutMeSection />
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