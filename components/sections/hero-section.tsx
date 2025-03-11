import Link from "next/link"
import { Github, Mail, MapPin, School } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"
import { Button } from "@/components/ui/button"
import { ParallaxBackground } from "@/components/parallax-background"
import { personalInfo, skills } from "@/data"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-24 overflow-hidden bg-gradient-to-b from-background to-background/80">
      <ParallaxBackground className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 z-0 bg-background/40 backdrop-blur-xl"></div>

      <div className="container relative z-10 max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          {/* Left Column - Name, Photo, Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 overflow-hidden rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-bounce mb-6">
              <span className="text-5xl">👋</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-primary">
                <TypingAnimation text={personalInfo.name} speed={150} />
              </span>
              <span className="block mt-2 text-3xl font-medium text-muted-foreground">
                <TypingAnimation text={personalInfo.title} speed={150} delay={1500} />
              </span>
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground mt-4 opacity-0 animate-[fadeIn_1s_ease-in-out_2s_forwards]">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6 opacity-0 animate-[fadeIn_1s_ease-in-out_2.5s_forwards]">
              <Button asChild variant="default" size="lg" className="gap-2 group relative overflow-hidden">
                <Link href="#projects">
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                    View Projects
                  </span>
                  <span className="absolute inset-0 z-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 group relative overflow-hidden">
                <Link href="#contact">
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                    Contact Me
                  </span>
                  <span className="absolute inset-0 z-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Personal Info and Skills */}
          <div className="grid gap-8 opacity-0 animate-[fadeIn_1s_ease-in-out_3s_forwards]">
            <div className="p-6 rounded-lg bg-background/70 backdrop-blur-md border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-semibold">Personal Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-300">
                  <School className="w-5 h-5 text-primary" />
                  <span>{personalInfo.university}</span>
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-300">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{personalInfo.location}</span>
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-300">
                  <Github className="w-5 h-5 text-primary" />
                  <Link href={personalInfo.github} className="hover:text-primary transition-colors">
                    github.com/{personalInfo.githubUsername}
                  </Link>
                </li>
                <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <Link href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                    {personalInfo.email}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-background/70 backdrop-blur-md border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <h3 className="mb-4 text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link
          href="#projects"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

