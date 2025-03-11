"use client";

import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { studyItems } from "@/data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export function StudySection() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  const handleCardClick = (studyId: number) => {
    router.push(`/study/${studyId}`);
  };

  return (
    <AnimatedSection
      id="study"
      className="relative w-full py-24 overflow-hidden bg-muted/30"
      direction="left"
      delay={200}
    >
      <div className="absolute inset-0 z-0 bg-muted/10 backdrop-blur-sm"></div>
      <div className="container relative z-10 max-w-5xl px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
          {t.study.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {studyItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="p-6 transition-all duration-500 rounded-lg hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 bg-background/70 backdrop-blur-md border border-border cursor-pointer flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="mb-2 text-xl font-semibold hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mb-4 text-muted-foreground overflow-hidden line-clamp-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
