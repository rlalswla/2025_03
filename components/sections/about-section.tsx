import Link from "next/link";
import { Github, Mail, MapPin, School } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { personalInfo, skills } from "@/data";

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="relative w-full py-24 overflow-hidden bg-muted/30"
    >
      <div className="absolute inset-0 z-0 bg-muted/10 backdrop-blur-sm"></div>
      <div className="container relative z-10 max-w-5xl px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
          About Me
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
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
                <Link
                  href={personalInfo.github}
                  className="hover:text-primary transition-colors"
                >
                  github.com/{personalInfo.githubUsername}
                </Link>
              </li>
              <li className="flex items-center gap-2 transition-transform hover:translate-x-1 duration-300">
                <Mail className="w-5 h-5 text-primary" />
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
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
    </AnimatedSection>
  );
}
