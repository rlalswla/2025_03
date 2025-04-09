import { NextRequest, NextResponse } from "next/server";
import {
  getAllStudies,
  getStudyBySlug,
  getStudiesByTags,
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
      const studies = getStudiesByTags(tags, locale as string);

      if (summary) {
        return NextResponse.json(studies.map(({ content, ...rest }) => rest));
      }

      return NextResponse.json(studies);
    }

    // ID로 특정 스터디 조회
    if (id) {
      // ID는 숫자 또는 슬러그 둘 다 지원
      const isNumeric = !isNaN(Number(id));

      let study;
      if (isNumeric) {
        // 숫자 ID로 모든 스터디에서 찾기
        const allStudies = getAllStudies(locale as string);
        const matchingStudy = allStudies.find((s) => s!.id === Number(id));

        if (matchingStudy) {
          const slug = String(matchingStudy.id).padStart(2, "0");
          study = getStudyBySlug(slug, locale as string);
        }
      } else {
        // 슬러그로 직접 찾기
        study = getStudyBySlug(id, locale as string);
      }

      if (!study) {
        return NextResponse.json({ error: "Study not found" }, { status: 404 });
      }

      // summary 모드일 경우 content는 제외
      if (summary) {
        const { content, ...rest } = study;
        return NextResponse.json(rest);
      }

      return NextResponse.json(study);
    }

    // 모든 스터디 조회
    const studies = getAllStudies(locale as string);

    if (summary) {
      return NextResponse.json(studies.map(({ content, ...rest }) => rest));
    }

    return NextResponse.json(studies);
  } catch (error) {
    console.error("Failed to fetch studies:", error);
    return NextResponse.json(
      { error: "Failed to fetch studies" },
      { status: 500 }
    );
  }
}
