"use client";

import { useState, useEffect } from "react";

export function usePortfolioData<T>(
  endpoint: string,
  id?: number,
  summary: boolean = false
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // endpoint에 따라 URL 구성
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
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("알 수 없는 오류가 발생했습니다.")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, id, summary]);

  return { data, loading, error };
}
