"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { use } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import MarkdownRenderer from "@/components/markdown-renderer";
import { TableOfContents } from "@/components/table-of-contents";

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

export default function StudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<ProjectMeta[]>([]);

  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const studyId = Number.parseInt(resolvedParams.id);

  // API로 스터디 데이터 가져오기
  const {
    data: studyData,
    loading: studyLoading,
    error: studyError,
  } = usePortfolioData<any>("study", studyId);

  // API로 프로젝트 데이터 가져오기 (관련 프로젝트를 찾기 위해)
  const { data: projectsData, loading: projectsLoading } = usePortfolioData<
    any[]
  >("projects", undefined, true);

  useEffect(() => {
    // API에서 데이터 로드가 완료되면
    if (!studyLoading && !projectsLoading && studyData) {
      // 관련 프로젝트 찾기
      if (projectsData) {
        // meta 속성 또는 루트에 있는 속성에 접근
        const studyInfo = studyData.meta || studyData;
        const studyId = studyInfo.id;
        const studyTags = studyInfo.tags || [];

        // Special case for Advanced Algorithm Study (id: 1) - show ON:U project
        if (studyId === 1) {
          const onuProject = projectsData.find((project) => {
            const projectId = project.meta?.id || project.id;
            return projectId === 1;
          });

          if (onuProject) {
            setRelatedProjects([onuProject]);
          }
        } else if (studyTags && studyTags.length > 0) {
          // 스터디 태그 기반으로 관련 프로젝트 찾기
          const lowerStudyTags = studyTags.map((tag: string) =>
            tag.toLowerCase()
          );

          const related = projectsData
            .filter((project) => {
              const technologies =
                project.meta?.technologies || project.technologies || [];
              return technologies.some((tech: string) =>
                lowerStudyTags.includes(tech.toLowerCase())
              );
            })
            .slice(0, 2);

          setRelatedProjects(related);
        }
      }

      setLoading(false);
    } else if (!studyLoading && studyError) {
      // 스터디를 찾을 수 없는 경우
      router.push("/#study");
      setLoading(false);
    }
  }, [
    studyData,
    projectsData,
    studyLoading,
    projectsLoading,
    studyError,
    router,
  ]);

  // 기존 로딩 UI 유지
  if (loading || studyLoading || projectsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!studyData) {
    return null;
  }

  // 메타데이터와 콘텐츠 추출
  const meta = studyData.meta || studyData;
  const content = studyData.content || "";

  const title = meta.title || "";
  const description = meta.description || "";
  const publishedDate = meta.publishedDate || "";
  const tags = meta.tags || [];
  const url = meta.url || "#";

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16 min-h-screen">
        {/* 헤더 섹션 */}
        <div className="bg-muted/30 py-8 sm:py-12">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Published on <span className="font-medium">{publishedDate}</span>
            </div>
          </div>
        </div>

        {/* 콘텐츠 */}
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid gap-16 md:grid-cols-3 px-4">
            <div className="md:col-span-2">
              <MarkdownRenderer content={content} />
            </div>

            {/* 오른쪽: 사이드바 - 전체 사이드바를 sticky로 만듭니다 */}
            <div className="relative">
              <div className="sticky top-24 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pb-4 scrollbar-thin">
                {/* 목차 */}
                <TableOfContents content={content} />

                {/* 리소스 섹션 */}
                <div className="p-4 sm:p-6 rounded-lg border bg-card">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    Resources
                  </h3>
                  <div className="space-y-3">
                    <Button
                      asChild
                      variant={url === "#" ? "destructive" : "default"}
                      className="w-full gap-2"
                    >
                      <Link
                        href={url}
                        target={url === "#" ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {url === "#" ? (
                          <span>No Resource for this study</span>
                        ) : (
                          <span>View Original Resource</span>
                        )}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* 관련 프로젝트 섹션 */}
                <div className="p-4 sm:p-6 rounded-lg border bg-card">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    Related Projects
                  </h3>
                  <div className="space-y-4">
                    {relatedProjects.length > 0 ? (
                      relatedProjects.map((project) => {
                        const projectMeta = project.meta || project;
                        return (
                          <div
                            key={projectMeta.id}
                            className="group cursor-pointer"
                            onClick={() =>
                              router.push(`/projects/${projectMeta.id}`)
                            }
                          >
                            <div className="relative h-20 sm:h-24 mb-2 overflow-hidden rounded-md">
                              <Image
                                src={
                                  projectMeta.image ||
                                  "/placeholder.svg?height=100&width=200"
                                }
                                alt={projectMeta.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <h4 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                              {projectMeta.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {(projectMeta.technologies || [])
                                .slice(0, 3)
                                .join(", ")}
                              {projectMeta.technologies?.length > 3
                                ? "..."
                                : ""}
                            </p>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        No related projects found.
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
