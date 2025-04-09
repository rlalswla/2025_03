"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export function TableOfContents({
  content,
  className = "",
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    if (!content) return;

    // 마크다운 내에서 제목(#, ##, ###)을 찾아 추출하는 정규식
    const headerRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches: TOCItem[] = [];

    let match;
    while ((match = headerRegex.exec(content)) !== null) {
      const level = match[1].length; // #의 개수로 레벨 판단
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // 특수문자 제거
        .replace(/\s+/g, "-"); // 공백을 하이픈으로 변환

      matches.push({ id, text, level });
    }

    setHeadings(matches);
  }, [content]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={`p-4 sm:p-6 rounded-lg border bg-card ${className}`}>
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-4">목차</h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className={`
              block text-sm transition-colors hover:text-primary
              ${heading.level === 1 ? "font-medium" : ""}
              ${
                heading.level === 2
                  ? "ml-3 text-muted-foreground hover:text-primary"
                  : ""
              }
              ${
                heading.level === 3
                  ? "ml-6 text-muted-foreground hover:text-primary"
                  : ""
              }
            `}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                // 부드러운 스크롤을 위한 처리
                element.scrollIntoView({ behavior: "smooth" });
                // URL에 앵커 추가
                history.pushState({}, "", `#${heading.id}`);
              }
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
