"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { projects as projectsType } from "@/data"; // 타입 정의를 위해서만 import
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Skeleton } from "@/components/ui/skeleton"; // Skeleton UI 추가 필요

export function ProjectsSection() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  // usePortfolioData 훅 사용 - summary 파라미터 추가
  const {
    data: projects,
    loading,
    error,
  } = usePortfolioData<typeof projectsType>("projects", undefined, true); // summary=true로 설정

  const handleCardClick = (projectId: number, e: React.MouseEvent) => {
    // Only navigate if the click wasn't on a button
    if (!(e.target as HTMLElement).closest("button")) {
      router.push(`/projects/${projectId}`);
    }
  };

  // 로딩 상태 UI
  if (loading) {
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
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-border bg-background/70 backdrop-blur-md"
              >
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((j) => (
                      <Skeleton key={j} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  }

  // 에러 상태 UI
  if (error || !projects) {
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
          <div className="flex justify-center items-center py-12">
            <div className="text-center p-6 bg-destructive/10 rounded-lg">
              <p className="text-destructive font-medium mb-2">
                {t.errors.failedToLoadProjects ||
                  "프로젝트를 불러오는데 실패했습니다"}
              </p>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                {t.errors.retry || "다시 시도"}
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  // 성공 상태 UI - 기존 렌더링 로직 사용
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
              className="overflow-hidden transition-all duration-500 rounded-lg hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-background/70 backdrop-blur-md border border-border cursor-pointer flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={language === "en" ? project.en.title : project.ko.title}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-primary/20 backdrop-blur-sm hover:opacity-100"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-semibold hover:text-primary transition-colors duration-300">
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
