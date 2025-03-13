import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { personalInfo } from "@/data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  // Use the appropriate data based on language
  const currentPersonalInfo =
    language === "en" ? personalInfo.en : personalInfo.ko;

  // Ensure we have valid URLs for links
  const githubUrl = currentPersonalInfo.github || "#";
  const emailUrl = `mailto:${
    currentPersonalInfo.email || "example@example.com"
  }`;

  return (
    <footer className="py-6 border-t bg-background">
      <div className="container flex flex-col items-center justify-between max-w-5xl px-4 mx-auto md:flex-row">
        <p className="mb-4 text-sm text-muted-foreground md:mb-0">
          © {new Date().getFullYear()} {currentPersonalInfo.name}.{" "}
          {t.footer.rights}
        </p>
        <div className="flex gap-4">
          <Link
            href={githubUrl}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={emailUrl}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
