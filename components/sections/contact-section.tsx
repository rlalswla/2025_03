import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data"

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="relative w-full py-24 overflow-hidden" direction="up" delay={300}>
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container relative z-10 max-w-3xl px-4 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          I'm currently available for freelance work or full-time positions. If you have a project that needs some
          creative touch, let's talk!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="default" size="lg" className="gap-2 group relative overflow-hidden">
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                Email Me
              </span>
              <span className="absolute inset-0 z-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 group relative overflow-hidden">
            <Link href={personalInfo.github}>
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">GitHub</span>
              <span className="absolute inset-0 z-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}

