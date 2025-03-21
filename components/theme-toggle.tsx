"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // 테마 전환 핸들러 - system 옵션 제거
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="bg-background/70 backdrop-blur-sm"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-background/70 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/50"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="animate-in fade-in-80 slide-in-from-top-5 duration-300"
      >
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className={`cursor-pointer transition-colors duration-200 hover:text-primary flex items-center gap-2 ${
            theme === "light" ? "text-primary font-medium" : ""
          }`}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className={`cursor-pointer transition-colors duration-200 hover:text-primary flex items-center gap-2 ${
            theme === "dark" ? "text-primary font-medium" : ""
          }`}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
