"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { studyItems, projects } from "@/data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { use } from "react";

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

  useEffect(() => {
    // Find the study item with the matching ID
    const foundStudy = studyItems.find((s) => s.id === studyId);

    if (foundStudy) {
      setStudy(foundStudy);

      // Find related projects based on study tags
      const studyTags = foundStudy.tags.map((tag) => tag.toLowerCase());
      const related = projects
        .filter((project) =>
          project.technologies.some((tech) =>
            studyTags.includes(tech.toLowerCase())
          )
        )
        .slice(0, 2);

      setRelatedProjects(related);
    } else {
      // Redirect to study section if study not found
      router.push("/#study");
    }

    setLoading(false);
  }, [studyId, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!study) {
    return null;
  }

  // Get localized study data based on current language
  const localizedStudy = language === "en" ? study.en : study.ko;

  // Ensure we have valid URLs for links
  const studyUrl = study.url || "#";

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Header */}
        <div className="bg-muted/30 py-12">
          <div className="container max-w-4xl mx-auto px-4">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6 group flex items-center gap-2"
              onClick={() => router.push("/#study")}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>{t.study.backToStudy}</span>
            </Button>

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

        {/* Content */}
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
                      <span className="block text-sm font-medium">Date</span>
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

              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {(() => {
                    // Special case for Advanced Algorithm Study (id: 1) - show ON:U project
                    if (study.id === 1) {
                      const onuProject = projects.find(
                        (project) => project.id === 1
                      ); // ON:U project has id 1
                      if (onuProject) {
                        return (
                          <div
                            key={onuProject.id}
                            className="group cursor-pointer"
                            onClick={() =>
                              router.push(`/projects/${onuProject.id}`)
                            }
                          >
                            <div className="relative h-24 mb-2 overflow-hidden rounded-md">
                              <Image
                                src={
                                  onuProject.image ||
                                  "/placeholder.svg?height=100&width=200"
                                }
                                alt={
                                  language === "en"
                                    ? onuProject.en.title
                                    : onuProject.ko.title
                                }
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {language === "en"
                                ? onuProject.en.title
                                : onuProject.ko.title}
                            </h4>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {onuProject.technologies
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
                        );
                      }
                    }

                    // For other studies, show related projects based on matching tags
                    return projects
                      .filter((project) => {
                        // If this is not the Advanced Algorithm Study, use normal matching
                        if (study.id !== 1) {
                          const studyTags = study.tags.map((tag: string) =>
                            tag.toLowerCase()
                          );
                          return project.technologies.some((tech) =>
                            studyTags.includes(tech.toLowerCase())
                          );
                        }
                        return false;
                      })
                      .slice(0, 2)
                      .map((project) => (
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
