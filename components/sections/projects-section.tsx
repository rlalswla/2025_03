"use client";

import type React from "react";

import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Skeleton } from "@/components/ui/skeleton";

// 타입 정의 - 기존 data/index.ts 대신 직접 정의
interface ProjectMeta {
  id: number;
  title: string;
  description: string;
  completedDate: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  adminDemoUrl?: string;
  sourceUrl: string;
  screenshots: string[];
  locale: string;
}

export function ProjectsSection() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  // usePortfolioData 훅 사용하여 마크다운 기반 데이터 가져오기
  const {
    data: projects,
    loading,
    error,
  } = usePortfolioData<ProjectMeta[]>("projects", undefined, true);

  const handleCardClick = (projectId: number, e: React.MouseEvent) => {
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
                {t.errors?.failedToLoadProjects ||
                  "프로젝트를 불러오는데 실패했습니다"}
              </p>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                {t.errors?.retry || "다시 시도"}
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  // 성공 상태 UI
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
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-grow"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/projects/${project.id}`);
                    }}
                  >
                    {language == "en" ? "Details" : "자세히 보기"}
                  </Button>
                  {/* {project.demoUrl !== "-1" && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-grow"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, "_blank");
                      }}
                    >
                      {t.projects.viewDemo}
                    </Button>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
