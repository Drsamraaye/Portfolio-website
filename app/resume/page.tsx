"use client"
import React from 'react'
import { HeroHeader } from "@/components/header"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from 'lucide-react'

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-transparent flex flex-col font-sans">
            <HeroHeader />

            <main className="flex-grow container mx-auto px-4 md:px-8 pt-32 pb-12">

                {/* Header Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 animate-slide-up">
                    <Button variant="ghost" asChild className="group hover:bg-primary/10">
                        <Link href="/" className="flex items-center gap-2 text-foreground">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </Button>

                    <div className="flex items-center gap-4">
                        <a href="/CV.pdf" download="Guiled_Hussein_CV.pdf" target="_blank" rel="noopener noreferrer">
                            <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 gap-2">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </Button>
                        </a>
                    </div>
                </div>

                {/* PDF Viewer Container */}
                <div className="w-full h-[80vh] rounded-3xl overflow-hidden glass shadow-2xl border border-border/50 animate-slide-up bg-card relative">
                    <object
                        data="/CV.pdf"
                        type="application/pdf"
                        className="w-full h-full"
                    >
                        {/* Fallback for browsers that don't support object embed */}
                        <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center text-muted-foreground">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                                <Download className="w-8 h-8 opacity-50" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Preview Not Available</h3>
                            <p className="max-w-md">
                                Your browser doesn&apos;t support PDF embedding. You can download the resume to view it.
                            </p>
                            <a href="/CV.pdf" download="GreenElegantProfessionalResume(1).pdf">
                                <Button variant="outline" className="mt-4">
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </object>
                </div>
            </main>
        </div>
    )
}
