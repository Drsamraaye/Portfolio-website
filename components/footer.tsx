
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ChevronsUpDown } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image";

const links = [
    {
        group: 'Home',
        items: [
            {
                title: 'Homepage',
                href: '#Home',
            },
            {
                title: 'Contact',
                href: '#contact',
            },
            {
                title: 'Resume',
                href: '#Resume',
            },
            
        ],
    },
    {
        group: 'Resume',
        items: [
            {
                title: 'About Me',
                href: '#Resume',
            },
            {
                title: 'websites',
                href: '#Create',
            },
            {
                title: 'Educational',
                href: '#Eduaction',
            },
              {
                title: 'Experience',
                href: '#Work',
            },
            
        ],
    },
    {
        group: 'Contact us',
        items: [
            {
                title: 'Contact',
                href: '#contact',
            },
            {
                title: 'Status',
                href: '#Workstatus',
            },
        ],
    },
    
]

export default function FooterSection() {
    return (
        <footer id='contact' className="border-b from-zinc-300  to-white pt-20 dark:bg-transparent">
            <div className="mb-8 border-b md:mb-12">
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    <div className='-mt-30'>
                        <a href="#Home">
                            <Image
                           src="/imges/Black_And_White_Illustrated_Eagle_Logo-removebg-preview.png"
                           alt="My photo"
                           width={80}
                           height={300}
                        />
                        </a>
                    
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm ">
                        <Link
                            href="https://x.com/Guuleed701"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X/Twitter"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns=""
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/guiled-hussein-282545318"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.instagram.com/guiledjr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@guiledpro"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="text-muted-foreground hover:text-primary block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    
                    
                    <form className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
                        <div className="space-y-4">
                            <Label
                                htmlFor="mail"
                                className="block font-medium">
                                Contact 
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    id="mail"
                                    name="mail"
                                    placeholder="Your email"
                                    className="h-8 text-sm"
                                />
                                <Button size="sm">Submit</Button>
                            </div>
                            <span className="text-muted-foreground block text-sm">Leave me a Message</span>
                            <span className='font-bold'>gxuseen@gmail.com</span>
                            <br />
                            <span className='font-bold'>+252637018339</span>
                        </div>
                    </form>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <small className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Guiled portfolio, All rights reserved</small>
                    <form action="">
                        <div className="relative">
                            <ChevronsUpDown
                                className="pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75"
                                size="0.75rem"
                            />
                            <select
                                className={cn(
                                    'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
                                )}
                                name="language">
                                <option value="1">English</option>
                                <option value="2">Espanol</option>
                                <option value="3">Français</option>
                                <option value="4">Swahili</option>
                                <option value="5">Lingala</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}
