import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 콘텐츠 디렉토리 경로 설정
const contentDirectory = path.join(process.cwd(), "content");
const projectsDirectory = path.join(contentDirectory, "projects");
const studiesDirectory = path.join(contentDirectory, "studies");

// 프로젝트 메타데이터 타입 정의
export interface ProjectMeta {
  id: number;
  title: string;
  description: string;
  completedDate: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  adminDemoUrl?: string;
  sourceUrl: string;
  screenshots: string[];
  locale: string;
}

// 스터디 메타데이터 타입 정의
export interface StudyMeta {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  tags: string[];
  url: string;
  locale: string;
}

// 프로젝트 파일 목록 가져오기
export function getProjectFiles(): string[] {
  try {
    return fs.readdirSync(projectsDirectory);
  } catch (error) {
    console.error("프로젝트 디렉토리를 읽을 수 없습니다:", error);
    return [];
  }
}

// 스터디 파일 목록 가져오기
export function getStudyFiles(): string[] {
  try {
    return fs.readdirSync(studiesDirectory);
  } catch (error) {
    console.error("스터디 디렉토리를 읽을 수 없습니다:", error);
    return [];
  }
}

// 슬러그로 프로젝트 데이터 가져오기
export function getProjectBySlug(slug: string, locale: string = "en") {
  // 파일명에서 확장자 제거 (이미 존재할 경우)
  const realSlug = slug.replace(/\.md$/, "");

  // 해당 로케일의 파일 경로 (예: 01.ko.md 또는 01.md)
  const filePath =
    locale === "ko"
      ? path.join(projectsDirectory, `${realSlug}.ko.md`)
      : path.join(projectsDirectory, `${realSlug}.md`);

  // 파일이 존재하지 않으면 다른 로케일 파일 시도
  let finalPath = filePath;
  if (!fs.existsSync(filePath)) {
    const altPath =
      locale === "ko"
        ? path.join(projectsDirectory, `${realSlug}.md`)
        : path.join(projectsDirectory, `${realSlug}.ko.md`);

    if (fs.existsSync(altPath)) {
      finalPath = altPath;
    }
  }

  try {
    // 파일 내용 읽기
    const fileContents = fs.readFileSync(finalPath, "utf8");
    // gray-matter로 frontmatter와 content 분리
    const { data, content } = matter(fileContents);

    return {
      meta: data as ProjectMeta,
      content,
      slug: realSlug,
    };
  } catch (error) {
    console.error(`프로젝트 파일(${finalPath})을 읽을 수 없습니다:`, error);
    return null;
  }
}

// 슬러그로 스터디 데이터 가져오기
export function getStudyBySlug(slug: string, locale: string = "en") {
  // 파일명에서 확장자 제거 (이미 존재할 경우)
  const realSlug = slug.replace(/\.md$/, "");

  const filePath =
    locale === "ko"
      ? path.join(studiesDirectory, `${realSlug}.ko.md`)
      : path.join(studiesDirectory, `${realSlug}.md`);

  let finalPath = filePath;
  if (!fs.existsSync(filePath)) {
    const altPath =
      locale === "ko"
        ? path.join(studiesDirectory, `${realSlug}.md`)
        : path.join(studiesDirectory, `${realSlug}.ko.md`);

    if (fs.existsSync(altPath)) {
      finalPath = altPath;
    }
  }

  try {
    const fileContents = fs.readFileSync(finalPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      meta: data as StudyMeta,
      content,
      slug: realSlug,
    };
  } catch (error) {
    console.error(`스터디 파일(${finalPath})을 읽을 수 없습니다:`, error);
    return null;
  }
}
// 모든 프로젝트 데이터 가져오기
export function getAllProjects(locale: string = "en") {
  const files = getProjectFiles();

  // 로케일에 맞는 파일만 필터링
  const matchingFiles = files.filter((filename) => {
    if (locale === "ko") {
      return filename.includes(".ko.md");
    } else {
      return !filename.includes(".ko.md");
    }
  });

  const projects = matchingFiles
    .map((filename) => {
      const slug = filename.replace(/\.(en|ko)?\.md$/, "");
      const project = getProjectBySlug(slug, locale);
      if (!project) return null;

      return {
        ...project.meta,
        content: project.content,
        slug,
      };
    })
    .filter(Boolean) // null 값 제거
    .sort((a, b) => (a!.id > b!.id ? 1 : -1)); // id 기준으로 정렬

  return projects;
}

// 모든 스터디 데이터 가져오기
export function getAllStudies(locale: string = "en") {
  const files = getStudyFiles();

  // 로케일에 맞는 파일만 필터링
  const matchingFiles = files.filter((filename) => {
    if (locale === "ko") {
      return filename.includes(".ko.md");
    } else {
      return !filename.includes(".ko.md");
    }
  });

  const studies = matchingFiles
    .map((filename) => {
      const slug = filename.replace(/\.(en|ko)?\.md$/, "");
      const study = getStudyBySlug(slug, locale);
      if (!study) return null;

      return {
        ...study.meta,
        content: study.content,
        slug,
      };
    })
    .filter(Boolean) // null 값 제거
    .sort((a, b) => (a!.id > b!.id ? 1 : -1)); // id 기준으로 정렬

  return studies;
}

// 특정 태그와 관련된 프로젝트 가져오기
export function getProjectsByTags(tags: string[], locale: string = "en") {
  const allProjects = getAllProjects(locale);

  if (!tags || tags.length === 0) {
    return allProjects;
  }

  return allProjects.filter((project) =>
    project!.technologies.some((tech) =>
      tags.map((t) => t.toLowerCase()).includes(tech.toLowerCase())
    )
  );
}

// 특정 태그와 관련된 스터디 가져오기
export function getStudiesByTags(tags: string[], locale: string = "en") {
  const allStudies = getAllStudies(locale);

  if (!tags || tags.length === 0) {
    return allStudies;
  }

  return allStudies.filter((study) =>
    study!.tags.some((tag) =>
      tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
    )
  );
}
