"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Code,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, studyItems } from "@/data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { use } from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedStudies, setRelatedStudies] = useState<any[]>([]);

  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const projectId = Number.parseInt(resolvedParams.id);

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find((p) => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);

      // Find related studies based on technologies used in the project
      const projectTechnologies = foundProject.technologies.map((tech) =>
        tech.toLowerCase()
      );
      const related = studyItems
        .filter((study) =>
          study.tags.some((tag) =>
            projectTechnologies.includes(tag.toLowerCase())
          )
        )
        .slice(0, 2);

      setRelatedStudies(related);
    } else {
      // Redirect to projects section if project not found
      router.push("/#projects");
    }

    setLoading(false);
  }, [projectId, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  // Get localized project data based on current language
  const localizedProject = language === "en" ? project.en : project.ko;

  // Ensure we have valid URLs for links
  const demoUrl = project.demoUrl || "#";
  const sourceUrl = project.sourceUrl || "#";

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src={project.image || "/placeholder.svg?height=600&width=1200"}
            alt={localizedProject.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
              {localizedProject.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.technologies.map((tech: string) => (
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
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 group flex items-center gap-2"
            onClick={() => router.push("/#projects")}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{t.projects.backToProjects}</span>
          </Button>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground">
                  {localizedProject.overview}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {localizedProject.features.map(
                    (feature: string, index: number) => (
                      <li key={index}>{feature}</li>
                    )
                  )}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {localizedProject.challenges.map(
                    (challenge: any, index: number) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {challenge.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </section>

              {project.screenshots && project.screenshots.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map(
                      (screenshot: string, index: number) => (
                        <div
                          key={index}
                          className="rounded-lg overflow-hidden border"
                        >
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`${localizedProject.title} screenshot ${
                              index + 1
                            }`}
                            width={350}
                            height={200}
                            className="w-full h-auto"
                          />
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium">
                        Duration
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {localizedProject.completedDate}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Code className="w-14 text-primary mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium">
                        Tech Stack
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.technologies.join(", ")}
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 space-y-3">
                  <Button asChild variant="default" className="w-full gap-2">
                    <Link
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full gap-2">
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

              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4">Related Studies</h3>
                <div className="space-y-4">
                  {(() => {
                    // Special case for ON:U project (id: 1) - show Advanced Algorithm Study
                    if (project.id === 1) {
                      const algorithmStudy = studyItems.find(
                        (study) => study.id === 1
                      ); // Advanced Algorithm Study has id 1
                      if (algorithmStudy) {
                        return (
                          <div
                            key={algorithmStudy.id}
                            className="group cursor-pointer"
                            onClick={() =>
                              router.push(`/study/${algorithmStudy.id}`)
                            }
                          >
                            <div className="flex items-start gap-2 mb-2">
                              <BookOpen className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <h4 className="font-medium group-hover:text-primary transition-colors">
                                {language === "en"
                                  ? algorithmStudy.en.title
                                  : algorithmStudy.ko.title}
                              </h4>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2 ml-6">
                              {language === "en"
                                ? algorithmStudy.en.description
                                : algorithmStudy.ko.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2 ml-6">
                              {algorithmStudy.tags
                                .slice(0, 3)
                                .map((tag: string, index: number) => (
                                  <span
                                    key={index}
                                    className="px-2 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/20"
                                  >
                                    {tag}
                                  </span>
                                ))}
                            </div>
                          </div>
                        );
                      }
                    }

                    // For other projects, show related studies based on matching technologies
                    return studyItems
                      .filter((study) => {
                        // If this is not the ON:U project, use normal matching
                        if (project.id !== 1) {
                          const projectTechnologies = project.technologies.map(
                            (tech: string) => tech.toLowerCase()
                          );
                          return study.tags.some((tag) =>
                            projectTechnologies.includes(tag.toLowerCase())
                          );
                        }
                        return false;
                      })
                      .slice(0, 2)
                      .map((study) => (
                        <div
                          key={study.id}
                          className="group cursor-pointer"
                          onClick={() => router.push(`/study/${study.id}`)}
                        >
                          <div className="flex items-start gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {language === "en"
                                ? study.en.title
                                : study.ko.title}
                            </h4>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 ml-6">
                            {language === "en"
                              ? study.en.description
                              : study.ko.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2 ml-6">
                            {study.tags
                              .slice(0, 3)
                              .map((tag: string, index: number) => (
                                <span
                                  key={index}
                                  className="px-2 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/20"
                                >
                                  {tag}
                                </span>
                              ))}
                          </div>
                        </div>
                      ));
                  })()}
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
