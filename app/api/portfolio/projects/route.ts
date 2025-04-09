import { NextRequest, NextResponse } from "next/server";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectsByTags,
} from "@/lib/markdown";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const locale = searchParams.get("locale") || "en";
  const summary = searchParams.get("summary") === "true";
  const tags = searchParams.getAll("tag");

  try {
    // 태그 기반 필터링
    if (tags.length > 0) {
      const projects = getProjectsByTags(tags, locale as string);

      if (summary) {
        return NextResponse.json(projects.map(({ content, ...rest }) => rest));
      }

      return NextResponse.json(projects);
    }

    // ID로 특정 프로젝트 조회
    if (id) {
      // ID는 숫자 또는 슬러그 둘 다 지원
      const isNumeric = !isNaN(Number(id));

      let project;
      if (isNumeric) {
        // 숫자 ID로 모든 프로젝트에서 찾기
        const allProjects = getAllProjects(locale as string);
        const matchingProject = allProjects.find((p) => p!.id === Number(id));

        if (matchingProject) {
          const slug = String(matchingProject.id).padStart(2, "0");
          project = getProjectBySlug(slug, locale as string);
        }
      } else {
        // 슬러그로 직접 찾기
        project = getProjectBySlug(id, locale as string);
      }

      if (!project) {
        return NextResponse.json(
          { error: "Project not found" },
          { status: 404 }
        );
      }

      // summary 모드일 경우 content는 제외
      if (summary) {
        const { content, ...rest } = project;
        return NextResponse.json(rest);
      }

      return NextResponse.json(project);
    }

    // 모든 프로젝트 조회
    const projects = getAllProjects(locale as string);

    if (summary) {
      return NextResponse.json(projects.map(({ content, ...rest }) => rest));
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
