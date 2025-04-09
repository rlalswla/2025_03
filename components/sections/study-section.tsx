"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

// 타입 정의 - 기존 data/index.ts 대신 직접 정의
interface StudyMeta {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  tags: string[];
  url: string;
  locale: string;
}

// 고정된 카테고리 목록
const CATEGORIES = [
  "Vanilla JS",
  "React",
  "React Native",
  "Basic Frontend",
  "CS",
  "CSS",
  "Project based",
  "Algorithm",
];

// study ID를 카테고리 배열에 매핑하는 함수 (중복 카테고리 지원)
const getCategoriesForStudy = (id: number): string[] => {
  // ID 기반으로 각 학습 항목의 카테고리를 직접 매핑
  const categoryMapping: Record<number, string[]> = {
    1: ["Algorithm", "CS"], // Advanced Algorithm Study
    2: ["CS"], // xv6 Operating System Implementation
    3: ["CS", "Project based"], // AWS S3 Presigned URL
    4: ["React", "Project based"], // Global WebSocket Management with Zustand
    5: ["React", "Project based"], // Custom Caching System for React
    6: ["React"], // Global Error Handling in React
    7: ["Basic Frontend", "CSS"], // Mobile Compatibility Optimization Techniques
    8: ["CS", "Project based"], // Technology Selection Framework
    9: ["Vanilla JS", "Basic Frontend"], // DOM Manipulation Techniques
    10: ["Vanilla JS"], // ES Modules and Modular Programming
    11: ["Vanilla JS", "Basic Frontend"], // Event Delegation in JavaScript
    12: ["Vanilla JS", "Project based"], // Fetch API and Asynchronous Communication
    13: ["CS", "Project based"], // Observer Pattern Implementation
  };

  return categoryMapping[id] || ["Project based"]; // 기본값은 Project based
};

export function StudySection() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  // 카테고리 필터링을 위한 상태 추가
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // usePortfolioData 훅 사용
  const {
    data: studies,
    loading,
    error,
  } = usePortfolioData<StudyMeta[]>("study", undefined, true);

  // 선택된 카테고리에 따라 학습 항목 필터링
  const filteredStudies =
    studies && selectedCategory
      ? studies.filter((item) =>
          getCategoriesForStudy(item.id).includes(selectedCategory)
        )
      : studies;

  // 카드 클릭 핸들러
  const handleCardClick = (studyId: number, e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("button")) {
      router.push(`/study/${studyId}`);
    }
  };

  // 카테고리 선택 핸들러
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
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
          <h2 className="mb-10 text-3xl font-bold text-center sm:text-4xl">
            {t.study.title || "Study & Research"}
          </h2>

          {/* 스켈레톤 카테고리 필터 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-full" />
            ))}
          </div>

          {/* 스켈레톤 카드 */}
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-lg border border-border">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-4 w-1/3 mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    );
  }

  // 에러 상태 UI
  if (error || !studies) {
    return (
      <AnimatedSection
        id="study"
        className="w-full py-24"
        direction="left"
        delay={200}
      >
        <div className="container max-w-5xl px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center sm:text-4xl">
            {t.study.title || "Study & Research"}
          </h2>
          <div className="flex justify-center items-center py-12">
            <div className="text-center p-6 bg-destructive/10 rounded-lg">
              <p className="text-destructive font-medium mb-2">
                {t.errors?.failedToLoadStudies ||
                  "스터디 항목을 불러오는데 실패했습니다"}
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
      id="study"
      className="w-full py-24"
      direction="left"
      delay={200}
    >
      <div className="container max-w-5xl px-4 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center sm:text-4xl">
          {t.study.title || "Study & Research"}
        </h2>

        {/* 카테고리 필터 UI */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategorySelect(null)}
              className="rounded-full transition-all duration-300"
            >
              {t.study.allCategories || "전체 보기"}
            </Button>

            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategorySelect(category)}
                className="rounded-full transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* 필터링된 학습 항목 목록 */}
        {filteredStudies?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <p className="text-muted-foreground">
              {t.study.noItemsFound ||
                "선택한 카테고리에 해당하는 학습 기록이 없습니다."}
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => handleCategorySelect(null)}
            >
              {t.study.viewAllCategories || "모든 카테고리 보기"}
            </Button>
          </motion.div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 relative">
            <AnimatePresence mode="wait">
              {filteredStudies?.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  onClick={(e) => handleCardClick(item.id, e)}
                  className="flex flex-col min-h-[200px] p-6 rounded-lg border border-border bg-background/70 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                >
                  {/* 여러 카테고리 배지 표시 */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {getCategoriesForStudy(item.id).map((category, idx) => (
                      <Badge
                        key={`cat-${idx}`}
                        variant={
                          category === selectedCategory
                            ? "default"
                            : "secondary"
                        }
                        className="px-2 py-1 text-xs transition-all duration-300"
                      >
                        {category}
                      </Badge>
                    ))}

                    {/* 태그 표시 */}
                    {item.tags?.slice(0, 2).map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="px-2 py-1 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {item.tags?.length > 2 && (
                      <Badge variant="outline" className="px-2 py-1 text-xs">
                        +{item.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* 콘텐츠 영역 */}
                  <div className="flex-grow">
                    <h3 className="mb-2 text-xl font-semibold transition-colors hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mb-2 text-muted-foreground line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* 날짜 정보 */}
                  <p className="mt-auto pt-4 text-sm text-muted-foreground border-t border-border/50">
                    {item.publishedDate}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
