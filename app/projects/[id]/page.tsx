"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { use } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import MarkdownRenderer from "@/components/markdown-renderer";

// 타입 정의
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

interface StudyMeta {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  tags: string[];
  url: string;
  locale: string;
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];
  const [loading, setLoading] = useState(true);
  const [relatedStudies, setRelatedStudies] = useState<StudyMeta[]>([]);

  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const projectId = Number.parseInt(resolvedParams.id);

  // API로 프로젝트 데이터 가져오기
  const {
    data: projectData,
    loading: projectLoading,
    error: projectError,
  } = usePortfolioData<any>("projects", projectId);

  // API로 스터디 데이터 가져오기 (관련 스터디를 찾기 위해)
  const { data: studiesData, loading: studiesLoading } = usePortfolioData<
    any[]
  >("study", undefined, true);

  useEffect(() => {
    // API에서 데이터 로드가 완료되면
    if (!projectLoading && !studiesLoading && projectData) {
      // 관련 스터디 찾기
      if (studiesData) {
        // 프로젝트 기술 스택 기반으로 관련 스터디 찾기
        // meta 속성 또는 루트에 있는 technologies 속성에 접근
        const technologies =
          projectData.meta?.technologies || projectData.technologies || [];

        if (technologies && technologies.length > 0) {
          const projectTechnologies = technologies.map((tech: string) =>
            tech.toLowerCase()
          );

          const related = studiesData.filter((study: any) => {
            const studyTags = study.meta?.tags || study.tags || [];
            return studyTags.some((tag: string) =>
              projectTechnologies.includes(tag.toLowerCase())
            );
          });

          setRelatedStudies(related);
        }
      }

      setLoading(false);
    } else if (!projectLoading && projectError) {
      // 프로젝트를 찾을 수 없는 경우
      router.push("/#projects");
      setLoading(false);
    }
  }, [
    projectData,
    studiesData,
    projectLoading,
    studiesLoading,
    projectError,
    router,
  ]);

  // 기존 로딩 UI 유지
  if (loading || projectLoading || studiesLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!projectData) {
    return null;
  }

  // 메타데이터와 콘텐츠 추출
  const meta = projectData.meta || projectData;
  const content = projectData.content || "";

  const demoUrl = meta.demoUrl || "#";
  const adminDemoUrl = meta.adminDemoUrl || null;
  const sourceUrl = meta.sourceUrl || "#";
  const technologies = meta.technologies || [];
  const image = meta.image || "/placeholder.svg?height=600&width=1200";
  const title = meta.title || "";
  const description = meta.description || "";
  const completedDate = meta.completedDate || "";

  return (
    <>
      <Navbar />
      <main className="pt-16 pb-16">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              {title}
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-primary/70 border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-16 md:grid-cols-3 px-4">
            <div className="md:col-span-2">
              {/* 마크다운 콘텐츠 렌더링 */}
              <MarkdownRenderer content={content} />
            </div>

            {/* 오른쪽 사이드바 */}
            <div className="relative">
              <div className="sticky top-20 space-y-6 max-h-[calc(100vh-6rem)] overflow-y-auto pb-4 scrollbar-thin">
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-xl font-semibold mb-4">
                    Project Details
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="block text-sm font-medium">
                          Duration
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {completedDate}
                        </span>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <Code className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <span className="block text-sm font-medium">
                          Tech Stack
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {technologies.join(", ")}
                        </span>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 space-y-3">
                    <Button
                      asChild
                      variant={demoUrl === "-1" ? "destructive" : "default"}
                      className="w-full gap-2"
                    >
                      <Link
                        href={demoUrl === "-1" ? "#" : demoUrl}
                        target={demoUrl === "-1" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {demoUrl === "-1" ? (
                          <span>
                            {t.projects.noDemo || "No Demo Available"}
                          </span>
                        ) : (
                          <span>{t.projects.viewDemo}</span>
                        )}
                      </Link>
                    </Button>

                    {adminDemoUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full gap-2"
                      >
                        <Link
                          href={adminDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Admin Demo</span>
                        </Link>
                      </Button>
                    )}

                    <Button
                      asChild
                      variant="secondary"
                      className="w-full gap-2"
                    >
                      <Link
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* 관련 학습 자료 섹션 */}
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-xl font-semibold mb-4">
                    Related Studies
                  </h3>
                  <div className="space-y-4">
                    {relatedStudies.length > 0 ? (
                      relatedStudies.map((study) => {
                        const studyMeta = study.meta || study;
                        return (
                          <div
                            key={studyMeta.id}
                            className="group cursor-pointer"
                            onClick={() =>
                              router.push(`/study/${studyMeta.id}`)
                            }
                          >
                            <div className="flex items-start gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <h4 className="font-medium group-hover:text-primary transition-colors">
                                {studyMeta.title}
                              </h4>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 ml-6">
                              {studyMeta.description}
                            </p>
                            {/* <div className="flex flex-wrap gap-1 mt-2 ml-6">
                              {studyMeta.tags
                                .slice(0, 2)
                                .map((tag: string, index: number) => (
                                  <span
                                    key={index}
                                    className="px-2 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                            </div> */}
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        No related studies found.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
