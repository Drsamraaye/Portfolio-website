import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloudTwo() {
    return (
        <section className=" py-18 bg-white">
            <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-55 md:border-r md:pr-6">
                                <p className=" text-4xl font-bold ml-13">My skills</p>
                            </div>
                            <div className="relative py-6 ml-10 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto w-8 dark:invert"
                                            src="/imges/icons8-nodejs-48.png"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto w-8 dark:invert"
                                            src="/imges/postgreesql_48px.png"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto w-8 dark:invert"
                                            src="/imges/github_26px.png"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto w-8 dark:invert"
                                            src="/imges/icons8-nextjs-64.png"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto w-8 dark:invert"
                                            src="/imges/javascript_48px.png"
                                            alt="Lemon Squeezy Logo"
                                            height="20"
                                            width="50"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto w-8 dark:invert"
                                            src="/imges/swift_48px.png"
                                            alt="Laravel Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto w-8 dark:invert"
                                            src="/imges/mysql_48px.png"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="/imges/visual_studio_48px.png"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
        </section>
    )
}
