"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="bg-background/70 backdrop-blur-sm w-10 h-10">
        <span className="text-xs font-medium">EN</span>
        <span className="sr-only">Toggle language</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-background/70 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 w-10 h-10"
        >
          <span className="text-xs font-medium">{language === "en" ? "EN" : "KO"}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-in fade-in-80 slide-in-from-top-5 duration-300">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer transition-colors duration-200 hover:text-primary ${
            language === "en" ? "text-primary" : ""
          }`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ko")}
          className={`cursor-pointer transition-colors duration-200 hover:text-primary ${
            language === "ko" ? "text-primary" : ""
          }`}
        >
          한국어
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

