import fs from "fs";
import path from "path";
import { projects, studyItems } from "../data";

// 디렉토리 경로 설정
let contentDir = path.join(process.cwd(), "content");
contentDir = path.join(process.cwd(), "..");
const projectsDir = path.join(contentDir, "projects");
const studiesDir = path.join(contentDir, "studies");

// 디렉토리가 없으면 생성
if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir);
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir);
if (!fs.existsSync(studiesDir)) fs.mkdirSync(studiesDir);

// 프로젝트 데이터를 Markdown으로 변환
projects.forEach((project) => {
  // 영어 버전
  const enContent = `---
id: ${project.id}
title: "${project.en.title}"
description: "${project.en.description}"
completedDate: "${project.en.completedDate}"
image: "${project.image}"
technologies: ${JSON.stringify(project.technologies)}
demoUrl: "${project.demoUrl}"
${project.adminDemoUrl ? `adminDemoUrl: "${project.adminDemoUrl}"` : ""}
sourceUrl: "${project.sourceUrl}"
screenshots: ${JSON.stringify(project.screenshots)}
locale: "en"
---

# Overview

${project.en.overview}

## Features

${project.en.features.map((feature) => `- ${feature}`).join("\n")}

## Challenges

${project.en.challenges
  .map(
    (challenge) => `
### ${challenge.title}

${challenge.description}
`
  )
  .join("\n")}
  `;

  fs.writeFileSync(
    path.join(projectsDir, `${String(project.id).padStart(2, "0")}.md`),
    enContent
  );

  // 한국어 버전
  const koContent = `---
id: ${project.id}
title: "${project.ko.title}"
description: "${project.ko.description}"
completedDate: "${project.ko.completedDate}"
image: "${project.image}"
technologies: ${JSON.stringify(project.technologies)}
demoUrl: "${project.demoUrl}"
${project.adminDemoUrl ? `adminDemoUrl: "${project.adminDemoUrl}"` : ""}
sourceUrl: "${project.sourceUrl}"
screenshots: ${JSON.stringify(project.screenshots)}
locale: "ko"
---

# 개요

${project.ko.overview}

## 기능

${project.ko.features.map((feature) => `- ${feature}`).join("\n")}

## 도전 과제

${project.ko.challenges
  .map(
    (challenge) => `
### ${challenge.title}

${challenge.description}
`
  )
  .join("\n")}
  `;

  fs.writeFileSync(
    path.join(projectsDir, `${String(project.id).padStart(2, "0")}.ko.md`),
    koContent
  );
});

// 스터디 데이터를 Markdown으로 변환
studyItems.forEach((study) => {
  // 영어 버전
  const enContent = `---
id: ${study.id}
title: "${study.en.title}"
description: "${study.en.description}"
publishedDate: "${study.en.publishedDate}"
tags: ${JSON.stringify(study.tags)}
url: "${study.url}"
locale: "en"
---

${study.en.content}

${
  study.en.keyTakeaways
    ? `## Key Takeaways

${study.en.keyTakeaways.map((item) => `- ${item}`).join("\n")}
`
    : ""
}

${
  study.en.codeExample
    ? `## Code Example

\`\`\`typescript
${study.en.codeExample}
\`\`\`
`
    : ""
}

${
  study.en.application
    ? `## Application

${study.en.application}
`
    : ""
}
`;

  // 파일 저장
  fs.writeFileSync(
    path.join(studiesDir, `${String(study.id).padStart(2, "0")}.md`),
    enContent
  );

  // 한국어 버전
  const koContent = `---
id: ${study.id}
title: "${study.ko.title}"
description: "${study.ko.description}"
publishedDate: "${study.ko.publishedDate}"
tags: ${JSON.stringify(study.tags)}
url: "${study.url}"
locale: "ko"
---

${study.ko.content}

${
  study.ko.keyTakeaways
    ? `## 핵심 요점

${study.ko.keyTakeaways.map((item) => `- ${item}`).join("\n")}
`
    : ""
}

${
  study.ko.codeExample
    ? `## 코드 예제

\`\`\`typescript
${study.ko.codeExample}
\`\`\`
`
    : ""
}

${
  study.ko.application
    ? `## 적용

${study.ko.application}
`
    : ""
}
`;

  // 파일 저장
  fs.writeFileSync(
    path.join(studiesDir, `${String(study.id).padStart(2, "0")}.ko.md`),
    koContent
  );
});

console.log("변환 완료! content/ 디렉토리에 Markdown 파일이 생성되었습니다.");
