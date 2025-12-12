"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-14 h-8 rounded-full bg-white/10 animate-pulse"></div>
        )
    }

    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{
                backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)"
            }}
            aria-label="Toggle Theme"
        >
            <div
                className="absolute top-1 left-1 w-6 h-6 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center bg-white"
                style={{
                    transform: isDark ? "translateX(24px)" : "translateX(0)",
                }}
            >
                {isDark ? (
                    <Moon className="w-3.5 h-3.5 text-purple-600 rotate-0 transition-all duration-300" />
                ) : (
                    <Sun className="w-3.5 h-3.5 text-orange-500 rotate-0 transition-all duration-300" />
                )}
            </div>
        </button>
    )
}
