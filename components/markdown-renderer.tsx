"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // 코드 하이라이팅 스타일

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const parseMdx = async () => {
      if (!content) return;

      setIsLoading(true);
      try {
        // 들여쓰기 공백 정리 (마크다운 파일에 들여쓰기가 많은 경우)
        const cleanedContent = content
          .split("\n")
          .map((line) => line.trimStart())
          .join("\n");

        const mdxSource = await serialize(cleanedContent, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
          parseFrontmatter: true, // frontmatter 파싱 추가
        });
        setMdxSource(mdxSource);
      } catch (error) {
        console.error("마크다운 파싱 오류:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (content) {
      parseMdx();
    }
  }, [content]);

  if (isLoading) {
    return (
      <div className={`animate-pulse space-y-4 ${className}`}>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-5/6"></div>
      </div>
    );
  }

  if (!mdxSource) {
    return <div className="text-red-500">콘텐츠를 불러올 수 없습니다.</div>;
  }

  // 커스텀 컴포넌트 정의
  const components = {
    h1: ({ children, ...props }: any) => {
      const id = children
        .toString()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return (
        <h1
          id={id}
          className="text-3xl font-extrabold mt-8 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 scroll-mt-20"
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: any) => {
      const id = children
        .toString()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return (
        <h2
          id={id}
          className="text-2xl font-bold mt-6 mb-3 pb-2 text-primary-600 dark:text-primary-400 border-b border-gray-200 dark:border-gray-700 scroll-mt-20"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: any) => {
      const id = children
        .toString()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return (
        <h3
          id={id}
          className="text-xl font-semibold mt-5 mb-2 text-primary-500 dark:text-primary-300 scroll-mt-20"
          {...props}
        >
          {children}
        </h3>
      );
    },
    ul: (props: any) => (
      <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
    ),
    li: (props: any) => <li className="mb-1" {...props} />,
    blockquote: (props: any) => (
      <blockquote
        className="pl-4 border-l-4 border-primary-500 dark:border-primary-400 italic text-gray-700 dark:text-gray-300 my-4"
        {...props}
      />
    ),
    p: (props: any) => <p className="my-4 leading-relaxed" {...props} />,
    a: (props: any) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    img: (props: any) => (
      <img
        className="rounded-lg shadow-md mx-auto my-6 max-w-full h-auto"
        loading="lazy"
        {...props}
      />
    ),
    table: (props: any) => (
      <div className="overflow-x-auto my-6">
        <table
          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg"
          {...props}
        />
      </div>
    ),
    th: (props: any) => (
      <th
        className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider"
        {...props}
      />
    ),
    td: (props: any) => (
      <td
        className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-sm"
        {...props}
      />
    ),
    hr: (props: any) => (
      <hr className="my-8 border-gray-300 dark:border-gray-700" {...props} />
    ),
    code: (props: any) => {
      const { className } = props;
      // 인라인 코드와 코드 블록 구분
      const isInline = !className;
      return isInline ? (
        <code
          className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-primary-700 dark:text-primary-300 rounded text-sm font-mono"
          {...props}
        />
      ) : (
        <code className={`${className} font-mono text-sm`} {...props} />
      );
    },
    pre: (props: any) => (
      <pre
        className="rounded-lg p-4 overflow-x-auto my-6 bg-gray-800 dark:bg-gray-900 text-white"
        {...props}
      />
    ),
  };

  return (
    <article
      className={`
      prose prose-lg dark:prose-invert 
      prose-headings:font-bold 
      prose-a:text-blue-600 dark:prose-a:text-blue-400 
      prose-img:rounded-xl 
      prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900 prose-pre:text-sm 
      prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
      prose-blockquote:border-l-primary
      prose-img:mx-auto
      max-w-none ${className}
    `}
    >
      <MDXRemote {...mdxSource} components={components} />
    </article>
  );
}
