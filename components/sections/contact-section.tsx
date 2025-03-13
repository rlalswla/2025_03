import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export function ContactSection() {
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
    <AnimatedSection
      id="contact"
      className="relative w-full py-24 overflow-hidden"
      direction="up"
      delay={300}
    >
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container relative z-10 max-w-3xl px-4 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          {t.contact.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            variant="default"
            size="lg"
            className="gap-2 group relative overflow-hidden"
          >
            <Link href={emailUrl}>
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                {t.contact.emailMe}
              </span>
              <span className="absolute inset-0 z-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 group relative overflow-hidden"
          >
            <Link href={githubUrl}>
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                {t.contact.github}
              </span>
              <span className="absolute inset-0 z-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
