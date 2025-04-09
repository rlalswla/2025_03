"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ko";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 초기값을 localStorage에서 가져오거나, 없으면 'en' 사용
  const [language, setLanguageState] = useState<Language>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  // 클라이언트 사이드에서만 localStorage에 접근
  useEffect(() => {
    // 초기화 시 localStorage에서 언어 설정 가져오기
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ko")) {
      setLanguageState(savedLanguage);
    } else {
      // 브라우저 언어 설정에 따라 기본값 설정 (선택 사항)
      const browserLang = navigator.language.startsWith("ko") ? "ko" : "en";
      setLanguageState(browserLang);
      localStorage.setItem("language", browserLang);
    }
    setIsInitialized(true);
  }, []);

  // 언어 변경 함수
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // 초기화가 완료될 때까지 렌더링 지연 (선택 사항)
  if (!isInitialized) {
    return null; // 또는 로딩 인디케이터 표시
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
