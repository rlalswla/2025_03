"use client";

import { useState, useEffect, useRef } from "react";

// 메모리 캐시 (앱 실행 중에만 유지됨)
const memoryCache: Record<string, { data: any; timestamp: number }> = {};

// 캐시 만료 시간 (1시간)
const CACHE_EXPIRY = 60 * 60 * 1000;

interface PortfolioDataOptions {
  /** 캐시 데이터가 오래되었다고 간주되기 전 유효 시간(ms) */
  staleTime?: number;
  /** 관련 프로젝트/스터디 필터링을 위한 태그 */
  relatedTags?: string[];
}

/**
 * 포트폴리오 데이터를 가져오고 메모리에 캐싱하는 훅
 */
export function usePortfolioData<T>(
  endpoint: string,
  id?: number,
  summary: boolean = false,
  options: PortfolioDataOptions = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // 요청 중복 방지를 위한 ref
  const isFetchingRef = useRef<boolean>(false);

  // 캐시 키 생성
  const getCacheKey = () => {
    let key = `portfolio_${endpoint}`;

    if (id !== undefined) {
      key += `_${id}`;
    } else {
      key += "_all";
    }

    if (summary) {
      key += "_summary";
    }

    if (options.relatedTags?.length) {
      // 태그를 키에 포함시켜 다른 태그 조합으로 요청할 때마다 개별 캐싱
      key += `_tags_${options.relatedTags.sort().join("_")}`;
    }

    return key;
  };

  useEffect(() => {
    // 필요한 데이터가 없을 때만 요청하도록 제한
    // 예: relatedTags가 있으면 특정 항목만 가져오는 경우
    if (endpoint === "projects" && !id && options.relatedTags?.length === 0) {
      // 관련 프로젝트가 필요하지 않은 경우 요청 방지
      setData([] as any);
      setLoading(false);
      return;
    }

    if (endpoint === "study" && !id && options.relatedTags?.length === 0) {
      // 관련 스터디가 필요하지 않은 경우 요청 방지
      setData([] as any);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      if (isFetchingRef.current) return;

      const cacheKey = getCacheKey();
      const staleTime = options.staleTime || CACHE_EXPIRY;

      // 메모리 캐시 확인
      const cachedData = memoryCache[cacheKey];
      const now = Date.now();

      if (cachedData && now - cachedData.timestamp < staleTime) {
        setData(cachedData.data);
        setLoading(false);
        return;
      }

      // API 호출
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

          if (id !== undefined) {
            params.append("id", id.toString());
          } else if (summary) {
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

        // 메모리 캐시 업데이트
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
    options.staleTime,
    JSON.stringify(options.relatedTags),
  ]);

  // 데이터 새로고침 함수는 그대로 유지합니다...
  const refresh = async () => {
    const cacheKey = getCacheKey();

    // 메모리 캐시 삭제
    if (memoryCache[cacheKey]) {
      delete memoryCache[cacheKey];
    }

    // 다시 데이터 로드
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
        if (id) {
          url = `/api/portfolio/${endpoint}?id=${id}`;
        } else {
          url = `/api/portfolio/${endpoint}${summary ? "?summary=true" : ""}`;
        }
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API 호출 실패: ${response.status}`);
      }

      const result = await response.json();

      // 메모리 캐시 업데이트
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
