import { studyItems } from "@/data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const summary = searchParams.get("summary") === "true";

  if (id) {
    const studyId = Number(id);
    const study = studyItems.find((s) => s.id === studyId);

    if (study) {
      return NextResponse.json(study);
    }
    return NextResponse.json(
      { error: "학습 항목을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  // summary 파라미터가 있으면 요약 정보만 반환
  if (summary) {
    const studySummaries = studyItems.map((study) => ({
      id: study.id,
      en: {
        title: study.en.title,
        description: study.en.description,
        publishedDate: study.en.publishedDate,
      },
      ko: {
        title: study.ko.title,
        description: study.ko.description,
        publishedDate: study.ko.publishedDate,
      },
      tags: study.tags,
      url: study.url,
    }));

    return NextResponse.json(studySummaries);
  }

  // 요약 정보가 요청되지 않은 경우 전체 데이터 반환
  return NextResponse.json(studyItems);
}
