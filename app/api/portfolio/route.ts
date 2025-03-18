import { personalInfo, skills, projects, studyItems, navLinks } from "@/data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get("section");

  switch (section) {
    case "personalInfo":
      return NextResponse.json(personalInfo);
    case "skills":
      return NextResponse.json(skills);
    case "projects":
      return NextResponse.json(projects);
    case "studyItems":
      return NextResponse.json(studyItems);
    case "navLinks":
      return NextResponse.json(navLinks);
    default:
      return NextResponse.json({
        personalInfo,
        skills,
        projects,
        studyItems,
        navLinks,
      });
  }
}
