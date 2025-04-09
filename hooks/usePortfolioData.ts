"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/language-context";

// 메모리 캐시
const memoryCache: Record<string, { data: any; timestamp: number }> = {};

// 캐시 만료 시간 (1시간)
const CACHE_EXPIRY = 60 * 60 * 1000;

interface PortfolioDataOptions {
  staleTime?: number;
  relatedTags?: string[];
}

export function usePortfolioData<T>(
  endpoint: string,
  id?: number,
  summary: boolean = false,
  options: PortfolioDataOptions = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage(); // 현재 언어 상태 가져오기
  const isFetchingRef = useRef<boolean>(false);

  // 캐시 키 생성 (언어 포함)
  const getCacheKey = () => {
    let key = `portfolio_${endpoint}_${language}`;

    if (id !== undefined) {
      key += `_${id}`;
    } else {
      key += "_all";
    }

    if (summary) {
      key += "_summary";
    }

    if (options.relatedTags?.length) {
      key += `_tags_${options.relatedTags.sort().join("_")}`;
    }

    return key;
  };

  useEffect(() => {
    if (endpoint === "projects" && !id && options.relatedTags?.length === 0) {
      setData([] as any);
      setLoading(false);
      return;
    }

    if (endpoint === "study" && !id && options.relatedTags?.length === 0) {
      setData([] as any);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      if (isFetchingRef.current) return;

      const cacheKey = getCacheKey();
      const staleTime = options.staleTime || CACHE_EXPIRY;
      const cachedData = memoryCache[cacheKey];
      const now = Date.now();

      if (cachedData && now - cachedData.timestamp < staleTime) {
        setData(cachedData.data);
        setLoading(false);
        return;
      }

      try {
        isFetchingRef.current = true;
        setLoading(true);

        let url = "";
        if (
          endpoint === "personalInfo" ||
          endpoint === "skills" ||
          endpoint === "navLinks"
        ) {
          url = `/api/portfolio?section=${endpoint}`;
        } else if (endpoint === "projects" || endpoint === "study") {
          // API 요청 URL 구성
          url = `/api/portfolio/${endpoint}`;

          // 쿼리 파라미터 구성
          const params = new URLSearchParams();
          params.append("locale", language); // 현재 언어 설정 추가

          if (id !== undefined) {
            params.append("id", id.toString());
          }

          if (summary) {
            params.append("summary", "true");
          }

          // 관련 항목 필터링을 위한 태그 추가
          if (options.relatedTags?.length) {
            options.relatedTags.forEach((tag) => {
              params.append("tag", tag.toLowerCase());
            });
          }

          // URL에 쿼리 파라미터 추가
          if (params.toString()) {
            url += `?${params.toString()}`;
          }
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`API 호출 실패: ${response.status}`);
        }

        const result = await response.json();
        memoryCache[cacheKey] = { data: result, timestamp: Date.now() };
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("알 수 없는 오류가 발생했습니다.")
        );
      } finally {
        setLoading(false);
        isFetchingRef.current = false;
      }
    };

    fetchData();
  }, [
    endpoint,
    id,
    summary,
    language, // 언어가 변경될 때마다 데이터 다시 로드
    options.staleTime,
    JSON.stringify(options.relatedTags),
  ]);

  // 데이터 새로고침 함수 (필요시 사용)
  const refresh = async () => {
    const cacheKey = getCacheKey();
    if (memoryCache[cacheKey]) {
      delete memoryCache[cacheKey];
    }

    setLoading(true);
    setError(null);

    try {
      isFetchingRef.current = true;

      let url = "";
      if (
        endpoint === "personalInfo" ||
        endpoint === "skills" ||
        endpoint === "navLinks"
      ) {
        url = `/api/portfolio?section=${endpoint}`;
      } else if (endpoint === "projects" || endpoint === "study") {
        const params = new URLSearchParams();
        params.append("locale", language);

        if (id !== undefined) {
          params.append("id", id.toString());
        }

        if (summary) {
          params.append("summary", "true");
        }

        if (options.relatedTags?.length) {
          options.relatedTags.forEach((tag) => {
            params.append("tag", tag.toLowerCase());
          });
        }

        url = `/api/portfolio/${endpoint}?${params.toString()}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }

      const result = await response.json();
      memoryCache[cacheKey] = { data: result, timestamp: Date.now() };
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("알 수 없는 오류가 발생했습니다.")
      );
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  };

  return { data, loading, error, refresh };
}
