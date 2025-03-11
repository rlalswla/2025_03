import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { personalInfo } from "@/data"

export function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container flex flex-col items-center justify-between max-w-5xl px-4 mx-auto md:flex-row">
        <p className="mb-4 text-sm text-muted-foreground md:mb-0">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href={personalInfo.github}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

