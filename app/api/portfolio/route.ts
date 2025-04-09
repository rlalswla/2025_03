import { personalInfo, skills, navLinks } from "@/data";
import { NextResponse } from "next/server";
import { getAllProjects, getAllStudies } from "@/lib/markdown";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get("section");
  const locale = searchParams.get("locale") || "en";

  try {
    switch (section) {
      case "personalInfo":
        return NextResponse.json(personalInfo);
      case "skills":
        return NextResponse.json(skills);
      case "navLinks":
        return NextResponse.json(navLinks);
      case "projects":
        const projects = getAllProjects(locale);
        return NextResponse.json(projects);
      case "study":
        const studies = getAllStudies(locale);
        return NextResponse.json(studies);
      default:
        const allProjects = getAllProjects(locale);
        const allStudies = getAllStudies(locale);
        return NextResponse.json({
          personalInfo,
          skills,
          navLinks,
          projects: allProjects,
          studies: allStudies,
        });
    }
  } catch (error) {
    console.error("데이터를 가져오는 중 오류 발생:", error);
    return NextResponse.json(
      { error: "데이터를 가져오는 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
