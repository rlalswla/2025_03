"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export function ProjectsSection() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  const handleCardClick = (projectId: number, e: React.MouseEvent) => {
    // Only navigate if the click wasn't on a button
    if (!(e.target as HTMLElement).closest("button")) {
      router.push(`/projects/${projectId}`);
    }
  };

  return (
    <AnimatedSection
      id="projects"
      className="relative w-full py-24 overflow-hidden"
      direction="right"
      delay={200}
    >
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container relative z-10 max-w-5xl px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
          {t.projects.title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={(e) => handleCardClick(project.id, e)}
              className="overflow-hidden transition-all duration-500 rounded-lg group hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-background/70 backdrop-blur-md border border-border cursor-pointer flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={language === "en" ? project.en.title : project.ko.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-primary/20 backdrop-blur-sm group-hover:opacity-100"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {language === "en" ? project.en.title : project.ko.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {language === "en"
                    ? project.en.description
                    : project.ko.description}
                </p>

                {/* Footer section with tags and buttons - moved to bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="group relative overflow-hidden"
                    >
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                          {t.projects.viewDemo}
                        </span>
                        <span className="absolute inset-0 z-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="group relative overflow-hidden"
                    >
                      <Link
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                          {t.projects.sourceCode}
                        </span>
                        <span className="absolute inset-0 z-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
