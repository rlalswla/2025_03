"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { studyItems as studyItemsType } from "@/data"; // 타입 정의를 위해서만 import
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Skeleton } from "@/components/ui/skeleton";

export function StudySection() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  // usePortfolioData 훅 사용 - summary 파라미터 추가
  const {
    data: studyItems,
    loading,
    error,
  } = usePortfolioData<typeof studyItemsType>("study", undefined, true); // summary=true로 설정

  const handleCardClick = (studyId: number, e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("button")) {
      router.push(`/study/${studyId}`);
    }
  };

  // 로딩 상태 UI
  if (loading) {
    return (
      <AnimatedSection
        id="study"
        className="w-full py-24"
        direction="left"
        delay={200}
      >
        <div className="container max-w-5xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
            {t.study.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />
                <div className="flex flex-wrap gap-2 mb-4">
                  {[1, 2, 3, 4].map((j) => (
                    <Skeleton key={j} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
                <Skeleton className="h-10 w-28" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  }

  // 에러 상태 UI
  if (error || !studyItems) {
    return (
      <AnimatedSection
        id="study"
        className="w-full py-24"
        direction="left"
        delay={200}
      >
        <div className="container max-w-5xl px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
            {t.study.title}
          </h2>
          <div className="flex justify-center items-center py-12">
            <div className="text-center p-6 bg-destructive/10 rounded-lg">
              <p className="text-destructive font-medium mb-2">
                {t.errors.failedToLoadStudies ||
                  "학습 항목을 불러오는데 실패했습니다"}
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

  // 성공 상태 UI
  return (
    <AnimatedSection
      id="study"
      className="w-full py-24"
      direction="left"
      delay={200}
    >
      <div className="container max-w-5xl px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
          {t.study.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {studyItems.map((item, index) => (
            <div
              key={item.id}
              onClick={(e) => handleCardClick(item.id, e)}
              className="p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="mb-2 text-xl font-semibold transition-colors hover:text-primary">
                {language === "en" ? item.en.title : item.ko.title}
              </h3>
              <p className="mb-2 text-muted-foreground">
                {language === "en" ? item.en.description : item.ko.description}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                {language === "en"
                  ? item.en.publishedDate
                  : item.ko.publishedDate}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 4 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-muted">
                    +{item.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
