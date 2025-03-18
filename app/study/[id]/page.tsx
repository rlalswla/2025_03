"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { studyItems, projects } from "@/data"; // 타입 정의를 위해서만 import
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { use } from "react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function StudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];
  const [study, setStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);

  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const studyId = Number.parseInt(resolvedParams.id);

  // API로 스터디 데이터 가져오기
  const {
    data: studyData,
    loading: studyLoading,
    error: studyError,
  } = usePortfolioData<(typeof studyItems)[0]>("study", studyId);

  // API로 프로젝트 데이터 가져오기 (관련 프로젝트를 찾기 위해 필요한 경우에만)
  const { data: projectsData, loading: projectsLoading } =
    usePortfolioData<typeof projects>("projects");

  useEffect(() => {
    // API에서 데이터 로드가 완료되면
    if (!studyLoading && !projectsLoading && studyData) {
      setStudy(studyData);

      // 관련 프로젝트 찾기
      if (projectsData) {
        // Special case for Advanced Algorithm Study (id: 1) - show ON:U project
        if (studyData.id === 1) {
          const onuProject = projectsData.find((project) => project.id === 1);
          if (onuProject) {
            setRelatedProjects([onuProject]);
          }
        } else {
          // 스터디 태그 기반으로 관련 프로젝트 찾기
          const studyTags = studyData.tags.map((tag) => tag.toLowerCase());
          const related = projectsData
            .filter((project) =>
              project.technologies.some((tech) =>
                studyTags.includes(tech.toLowerCase())
              )
            )
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

  if (!study) {
    return null;
  }

  // 기존 코드와 동일하게 유지
  const localizedStudy = language === "en" ? study.en : study.ko;
  const studyUrl = study.url || "#";

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Header - 기존 디자인 유지 */}
        <div className="bg-muted/30 py-12">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {localizedStudy.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-sm text-muted-foreground">
              Published on{" "}
              <span className="font-medium">
                {localizedStudy.publishedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Content - 기존 디자인 유지 */}
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {localizedStudy.content}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {localizedStudy.keyTakeaways.map(
                    (takeaway: string, index: number) => (
                      <li key={index}>{takeaway}</li>
                    )
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Code Example</h2>
                <div className="p-4 bg-muted/30 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    <code>{localizedStudy.codeExample}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Application</h2>
                <p className="text-muted-foreground mb-4">
                  Here's how I applied this knowledge in a real-world project:
                </p>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Project Implementation</h3>
                  <p className="text-sm text-muted-foreground">
                    {localizedStudy.application}
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4">Study Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium">
                        Duration
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {localizedStudy.publishedDate}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Tag className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium">Topics</span>
                      <span className="text-sm text-muted-foreground">
                        {study.tags.join(", ")}
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild variant="default" className="w-full gap-2">
                    <Link
                      href={studyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Original Resource</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* 관련 프로젝트 섹션 - API에서 가져온 데이터 사용 */}
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {relatedProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group cursor-pointer"
                      onClick={() => router.push(`/projects/${project.id}`)}
                    >
                      <div className="relative h-24 mb-2 overflow-hidden rounded-md">
                        <Image
                          src={
                            project.image ||
                            "/placeholder.svg?height=100&width=200"
                          }
                          alt={
                            language === "en"
                              ? project.en.title
                              : project.ko.title
                          }
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {language === "en"
                          ? project.en.title
                          : project.ko.title}
                      </h4>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                  ))}
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
