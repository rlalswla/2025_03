"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useMobile } from "@/hooks/use-mobile";
import { personalInfo } from "@/data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useMobile();
  const { language } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();

  // 현재 페이지가 프로젝트 또는 스터디 상세 페이지인지 확인
  const isDetailPage =
    pathname.startsWith("/projects/") || pathname.startsWith("/study/");

  // Get the name based on current language
  const name = language === "en" ? personalInfo.en.name : personalInfo.ko.name;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // 뒤로가기 URL 결정
  const getBackUrl = () => {
    if (pathname.startsWith("/projects/")) return "/#projects";
    if (pathname.startsWith("/study/")) return "/#study";
    return "/";
  };

  useEffect(() => {
    // 상세 페이지에서는 스크롤 감지가 필요 없음
    if (isDetailPage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      // Check if we're at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (isAtBottom) {
        // If at the bottom, set the active section to "contact"
        setActiveSection("contact");
        return;
      }

      // Find the current active section
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      });

      // Only update if we found a section or need to clear
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isDetailPage]);

  // Get translated nav labels
  const translatedNavLinks = [
    { href: "#", label: t.nav.home },
    { href: "#projects", label: t.nav.projects },
    { href: "#study", label: t.nav.study },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {isDetailPage ? (
          // 상세 페이지에서는 뒤로가기 버튼 표시
          <Link
            href={getBackUrl()}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">
              {pathname.startsWith("/projects/")
                ? t.projects.backToProjects
                : t.study.backToStudy}
            </span>
          </Link>
        ) : (
          // 홈 페이지에서는 이름/로고 표시
          <div></div>
        )}

        <div className="flex items-center gap-4">
          {/* 상세 페이지가 아닐 때만 일반 네비게이션 메뉴 표시 */}
          {!isDetailPage && !isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              {translatedNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                    activeSection === link.href.substring(1) ||
                    (link.href === "#" && activeSection === "")
                      ? "text-primary after:w-full"
                      : "hover:text-primary after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* 언어 설정과 테마 토글은 항상 표시 */}
          <LanguageToggle />
          <ThemeToggle />

          {/* 모바일에서는 상세 페이지가 아닐 때만 메뉴 버튼 표시 */}
          {isMobile && !isDetailPage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden relative z-50"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu - 상세 페이지가 아닐 때만 표시 */}
      {isMobile && isOpen && !isDetailPage && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16 bg-background/95 backdrop-blur-lg md:hidden animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col items-center gap-6 p-8 mt-4">
            {translatedNavLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-1"
                onClick={closeMenu}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
