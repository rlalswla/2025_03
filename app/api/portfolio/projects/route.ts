import { projects } from "@/data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const summary = searchParams.get("summary") === "true";

  if (id) {
    const projectId = Number(id);
    const project = projects.find((p) => p.id === projectId);

    if (project) {
      return NextResponse.json(project);
    }
    return NextResponse.json(
      { error: "프로젝트를 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  // summary 파라미터가 있으면 요약 정보만 반환
  if (summary) {
    const projectSummaries = projects.map((project) => ({
      id: project.id,
      en: {
        title: project.en.title,
        description: project.en.description,
        completedDate: project.en.completedDate,
      },
      ko: {
        title: project.ko.title,
        description: project.ko.description,
        completedDate: project.ko.completedDate,
      },
      image: project.image,
      technologies: project.technologies,
      demoUrl: project.demoUrl,
      sourceUrl: project.sourceUrl,
    }));

    return NextResponse.json(projectSummaries);
  }

  // 요약 정보가 요청되지 않은 경우 전체 데이터 반환
  return NextResponse.json(projects);
}
