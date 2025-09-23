import React from 'react'
import { HeroHeader } from "@/components/header"

import LogoCloudTwo from './logo-cloud'
import StatsSection from './stats'

import Image from "next/image";


import Products from './cards'
import AboutMe from './Aboutme'

import Service from './service'
import Education from './Education'
import FooterSection from './footer'





export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main id='Home' className="overflow-x-hidden ">
         <section className="bg-zinc-300 bg-gradient-to-br from-zinc-300 to-white text-white min-h-screen flex items-center justify-center p-4 **pt-24**">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-8">
    {/* Left side: Text and button */}
    <div className="text-center md:text-left md:w-1/2">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black leading-tight tracking-tight">
      Hi, I&apos;m <br />Full-stack Developer
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-black max-w-lg mx-auto md:mx-0">
        I am a passionate Full-Stack Developer and Digital Marketer, dedicated to building modern, responsive, and user-friendly web applications.
      </p>
      <a
        href="#Resume"
        className="mt-10 inline-block px-8 py-3 text-sm font-semibold bg-black text-white border-2 border-black rounded-full transition-colors duration-300 hover:bg-black hover:text-zinc-600"
      >
        Resume
      </a>
    </div>

    {/* Right side: Image placeholder */}
    <div className="w-full md:w-3/4 flex justify-center md:justify-end mt-12 md:mt-0">
      <div className="relative w-full max-w-sm aspect-[9/9] rounded-full bg-black shadow-2xl overflow-hidden">
        {/* Inner placeholder to mimic a screen */}
        <div className="absolute inset-2 rounded-full bg-zinc-300 flex items-center justify-center">
          <Image 
          src="/imges/WhatsApp_Image_2025-09-17_at_18.40.19_8ac072c5-removebg-preview.png"
          alt=""
          fill
          style={{objectFit:"cover"}}
          />
        </div>
      </div>
    </div>
  </div>
</section>
            <LogoCloudTwo />
          
                <AboutMe />
                
            
            <Products />
            <Service/>
          <Education/>

          <StatsSection/>
          <FooterSection/>
                 </main>
            
        </>
    )
}