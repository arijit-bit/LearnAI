"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const dropdownRef = React.useRef(null)

  React.useEffect(() => {
    setMounted(true)
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="bg-transparent border-transparent">
        <span className="sr-only">Loading theme</span>
      </Button>
    )
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(!open)}
        className="bg-transparent border-transparent text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-lg bg-card border border-border shadow-soft focus:outline-none overflow-hidden">
          <div className="py-1">
            <button
              onClick={() => { setTheme("light"); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${theme === 'light' ? 'bg-black/5 dark:bg-white/5' : ''}`}
            >
              <Sun className="h-4 w-4" />
              Light
            </button>
            <button
              onClick={() => { setTheme("dark"); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${theme === 'dark' ? 'bg-black/5 dark:bg-white/5' : ''}`}
            >
              <Moon className="h-4 w-4" />
              Dark
            </button>
            <button
              onClick={() => { setTheme("system"); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${theme === 'system' ? 'bg-black/5 dark:bg-white/5' : ''}`}
            >
              <Monitor className="h-4 w-4" />
              System
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
