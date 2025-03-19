// "use client";

// Personal Information
export const personalInfo = {
  en: {
    name: "Lee Jihoon",
    title: "Frontend Developer",
    email: "elect10@g.skku.edu",
    location: "Seoul, South Korea",
    university: "Sungkyunkwan University Math & CS",
    github: "https://github.com/rlalswla",
    githubUsername: "rlalswla",
    bio: "Building beautiful, responsive, and user-friendly web applications with modern technologies.",
  },
  ko: {
    name: "이지훈",
    title: "프론트엔드 개발자",
    email: "elect10@g.skku.edu",
    location: "서울, 대한민국",
    university: "성균관대학교 수학전공 & 소프트웨어 복수전공",
    github: "https://github.com/rlalswla",
    githubUsername: "rlalswla",
    bio: " 아름답고, 사용자 친화적인 웹 애플리케이션을 지향합니다.",
  },
};

// Skills
export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "C++",
  "C",
  "Git",
  "Docker",
  "CI/CD",
];

// Projects
export const projects = [
  {
    id: 1,
    en: {
      title: "ON:U - Campus Communication Platform",
      description:
        "A real-time chat application for effective communication between students and student council",
      completedDate: "Jan 2025 ~ Feb 2025",
      overview:
        "ON:U is a chat application built to facilitate communication between students and student council members. I focused on implementing real-time messaging using WebSocket and a custom caching system inspired by React Query.",
      features: [
        "Real-time chat functionality with WebSocket",
        "Student opinion submission chat called 'opinion' (1-to-1 chat)",
        "Student council agenda discussion chat called 'agenda' (1-to-N chat)",
        "My Opinion page where students can check their participated chat rooms and notifications",
        "Statistics page for student council to view various analytics",
      ],
      challenges: [
        {
          title: "WebSocket Management",
          description:
            "Used Zustand to manage socket instances globally, enabling automatic connections upon login.\n\nHandled component-specific socket subscriptions using the Observer pattern.",
        },
        {
          title: "Asynchronous Data Management",
          description:
            "Built a custom caching system inspired by React Query (tanstack query) to efficiently manage server state and real-time updates.",
        },
        {
          title: "Enhanced User Experience",
          description:
            "Improved image upload speed through AWS S3 Presigned URL approach.\nImplemented various features to enhance mobile-web compatibility, including PWA integration and viewport adjustments when keyboard appears.",
        },
        {
          title: "Error Handling",
          description:
            "Implemented global error handling for API requests using Context API.\nDisplayed error messages to users via toast notifications and implemented appropriate error handling logic.",
        },
      ],
    },
    ko: {
      title: "ON:U - 캠퍼스 소통 플랫폼",
      description:
        "학생과 학생회 간의 효과적인 소통을 위한 실시간 채팅 애플리케이션",
      completedDate: "2025년 01월 ~ 2025년 02월",
      overview:
        "ON:U는 학생과 학생회 구성원 간의 소통을 원활하게 하기 위해 개발된 채팅 애플리케이션입니다. 저는 WebSocket을 사용한 실시간 메시징과 React Query에서 영감을 받은 커스텀 캐싱 시스템을 집중적으로 구현했습니다.",
      features: [
        "WebSocket을 활용한 실시간 채팅 기능",
        "학생이 의견을 제시하는 말해요 채팅 (1 대 1 채팅)",
        "학생회가 제시한 안건에 학생들이 의견을 제시하는 답해요 채팅 (1 대 N 채팅)",
        "학생 본인이 참여한 채팅방, 알림을 확인할수 있는 내 의견 페이지",
        "학생회가 다양한 통계를 확인 할 수 있는 통계 페이지 ",
      ],
      challenges: [
        {
          title: "전역적 웹소켓 관리",
          description:
            "Zustand를 사용하여 전역적으로 소켓 인스턴스를 관리하고, 로그인 시 자동 연결 될 수 있도록 구현했습니다 \n옵저버 패턴을 통해 컴포넌트별 소켓에 대한 구독을 처리하였습니다",
        },
        {
          title: "비동기 데이터 관리",
          description:
            "React Query (tanstack query) 에서 영감을 받아 서버 상태와 실시간 업데이트를 효율적으로 관리하는 커스텀 캐싱 시스템을 구축했습니다",
        },
        {
          title: "유저 사용성 증진",
          description:
            "AWS S3 - Presigned url 방식을 통해 이미지 업로드 속도를 향상시키고,\n모바일 - 웹 호환성 향상을 위해 PWA, 키보드 등장시 뷰포트 조절등 다양한 고민과 도전을 진행하였습니다",
        },
        {
          title: "에러 핸들링",
          description:
            "context API 를 활용하여 전역적으로 API 요청에 관한 에러를 처리할수 있도록 구현했으며 \n에러를 catch 한 후에 유저로 하여금 toast 를 통해 에러메시지를 보이고 이후 적절한 핸들링 로직을 통해 처리했습니다",
        },
      ],
    },
    image: "/onu/onu-poster.png?height=300&width=500",
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "Zustand",
      "styled-components",
      "Vite",
      "Storybook",
      "Framer-motion",
      "Presigned URL",
    ],
    demoUrl: "https://onu-univ.site",
    adminDemoUrl: "https://admin.onu-univ.site",
    sourceUrl: "https://github.com/softeer5th/Team7-BungeoBbang",
    screenshots: [
      "/onu/student-opinion-entry.png?height=200&width=350",
      "/onu/student-my.png?height=200&width=350",
      "/onu/category.png?height=200&width=350",
      "/onu/onu-student-opinion.png?height=200&width=350",
      "/onu/student-agenda-entry.png?height=200&width=350",
      "/onu/student-agenda-chatpage.png?height=200&width=350",
    ],
  },
  {
    id: 2,
    en: {
      title: "FLEX - AI Health Trainer",
      description:
        "AI-powered health application providing personalized diet and workout recommendations",
      completedDate: "October 2023",
      overview:
        "FLEX is an AI health trainer application that analyzes users' preferences and physical conditions to provide personalized diet and workout routines. The app uses advanced AI models for food recognition and recommendation systems. ",
      features: [
        "AI-powered food recognition from refrigerator photos",
        "Personalized diet recommendations",
        "Custom workout routines based on goals",
        "Progress tracking dashboard",
        "Real-time nutrition analysis",
        "Cross-platform compatibility",
      ],
      challenges: [
        {
          title: "AI Integration",
          description:
            "Successfully integrated YOLO and ResNeXt models for food recognition, and implemented BERT model for preference analysis.",
        },
        {
          title: "User Preference Analysis",
          description:
            "Developed sophisticated preference analysis system using NLTK and ABSA techniques for accurate diet recommendations.",
        },
      ],
    },
    ko: {
      title: "FLEX - AI 헬스 트레이너",
      description: "AI를 활용한 맞춤형 식단 및 운동 추천 헬스 애플리케이션",
      completedDate: "2024년 7월 ~ 2024년 12월",
      overview:
        "FLEX는 사용자의 선호도와 신체 조건을 분석하여 맞춤형 식단과 운동 루틴을 제공하는 AI 헬스 트레이너 애플리케이션입니다. 음식 추천 시스템을 위해 AI 모델을 사용하고 추천된 음식과 사용자 신체정보를 기반으로 자체 알고리즘을 통해 운동을 추천합니다. ",
      features: [
        "개인 맞춤 (선호, 알러지)형 식단 추천",
        "목표 및 사용자 기반 맞춤 운동 루틴",
        "진행 상황 추적 대시보드",
        "추천된 혹은 이미 섭취한 식단에 대한 영양 분석 및 활용",
      ],
      challenges: [
        {
          title: "AI 통합",
          description:
            "YOLO와 ResNeXt 모델을 활용한 식재료 인식, BERT 모델을 활용한 선호도 분석을 성공적으로 구현했습니다.",
        },
        {
          title: "사용자 선호도 분석",
          description:
            "정확한 식단 추천을 위해 NLTK와 ABSA 기술을 활용한 정교한 선호도 분석 시스템을 개발했습니다.",
        },
      ],
    },
    image: "/flex/flex-poster.png?height=300&width=500",
    technologies: [
      "React Native",
      "TypeScript",
      "AI/ML",
      "Zustand",
      "Docker",
      "Framer motion",
      "linear gradient",
    ],
    demoUrl:
      "https://ljhpopol.notion.site/FLEX-f1bd18229be44e86976e2269e7e6108a?pvs=4",
    sourceUrl: "https://github.com/Team-Losers/2024_Fall_Capstone",
    screenshots: [],
  },
  {
    id: 3,
    en: {
      title: "Language Therapy Assistant",
      description:
        "AI-powered application for assisting children with language development disorders",
      completedDate: "September 2023",
      overview:
        "An innovative application designed to assist children with language development disorders. The project won an excellence award at the Saessak Hackathon and received support from the SPARK program for further development.",
      features: [
        "AI-powered speech analysis",
        "Parent voice cloning for TTS",
        "Interactive learning content",
        "Progress tracking system",
        "Customized therapy programs",
        "Real-time feedback system",
      ],
      challenges: [
        {
          title: "Voice Processing",
          description:
            "Implemented real-time voice analysis using WebSocket and integrated custom TTS system using parent's voice samples.",
        },
        {
          title: "User Experience",
          description:
            "Designed intuitive UI/UX specifically for children, minimizing text and maximizing visual interactions.",
        },
      ],
    },
    ko: {
      title: "떠들자 - 언어치료 보조 애플리케이션",
      description: "언어발달장애 아동을 위한 AI 기반 치료 보조 애플리케이션",
      completedDate: "2024년 7월 ~ 2024년 12월",
      overview:
        "언어발달장애 아동의 치료를 돕기 위해 설계된 애플리케이션입니다. 새싹 해커톤에서 우수상을 수상했으며, SPARK 프로그램의 지원을 받아 추가 개발을 진행했습니다.",
      features: [
        "AI 기반 음성 분석",
        "부모 음성 복제 TTS",
        "인터랙티브 학습 콘텐츠",
        "진행 상황 추적 시스템",
        "맞춤형 치료 프로그램",
        "실시간 피드백 시스템",
      ],
      challenges: [
        {
          title: "음성 처리",
          description:
            "WebSocket을 활용한 실시간 음성 분석과 부모의 음성 샘플을 활용한 맞춤형 TTS 시스템을 구현했습니다.",
        },
        {
          title: "사용자 경험",
          description:
            "아동을 위한 직관적인 UI/UX를 설계하여 텍스트를 최소화하고 시각적 상호작용을 극대화했습니다.",
        },
      ],
    },
    image: "/archi/cover.png?height=300&width=500",
    technologies: [
      "React Native",
      "TypeScript",
      "WebSocket",
      "Google TTS API",
      "NestJS",
      "Docker",
      "AI/ML",
    ],
    demoUrl: "-1",
    sourceUrl: "https://github.com/racheliee/ai-LangDevAssist",
    screenshots: [
      "/archi/image.png?height=200&width=350",
      "/archi/image copy.png?height=200&width=350",
      "/archi/image copy 3.png?height=200&width=350",
      "/archi/image copy 4.png?height=200&width=350",
    ],
  },
  {
    id: 4,
    en: {
      title: "SKKU Recruit - Project Recruitment Platform",
      description:
        "Mobile web application for project team formation and recruitment among university students",
      completedDate: "March 2024 ~ June 2024",
      overview:
        "SKKU Recruit is a platform designed to help university students find project teammates and evaluate team members after project completion. The system features user authentication, project posting, team matching, and post-project evaluation functionality.",
      features: [
        "JWT authentication for secure user login and registration",
        "Project posts browsing page with search and filtering features",
        "Project posting functionality for team member recruitment",
        "Project detail view page",
        "Project status management (recruiting, completed) with dynamic UI changes based on status",
        "Team member evaluation system",
      ],
      challenges: [
        {
          title: "Efficient Data Storage",
          description:
            "Utilized bitmask techniques for efficient storage and retrieval of technology stacks, significantly reducing database query complexity and improving performance.",
        },
        {
          title: "State Management",
          description:
            "Applied Zustand for global state management to track team and member information across different components, providing a seamless experience during the team evaluation process.",
        },
      ],
    },
    ko: {
      title: "SKKU Recruit - 프로젝트 팀원 모집 플랫폼",
      description:
        "대학생들을 위한 프로젝트 팀원 모집 및 평가 모바일 웹 애플리케이션",
      completedDate: "2024년 3월 ~ 2024년 6월",
      overview:
        "SKKU Recruit는 대학생들이 프로젝트 팀원을 찾고 프로젝트 완료 후 팀원을 평가할 수 있는 플랫폼입니다. 사용자 인증, 프로젝트 게시, 팀 매칭, 프로젝트 후 평가 기능을 제공합니다.",
      features: [
        "JWT를 활용한 안전한 로그인 및 회원가입 시스템",
        "게시글 조회 페이지 & 검색 및 필터링",
        "팀원 구인을 위한 게시물 작성 기능",
        "프로젝트 상세 조회 페이지",
        "프로젝트 상태 변경 (구인중, 종료) 및 상태에 따라 동적으로 페이지 UI 변경",
        "팀원 평가 시스템",
      ],
      challenges: [
        {
          title: "효율적인 데이터 저장",
          description:
            "기술 스택 저장 및 조회를 위해 비트마스킹 기법을 활용하여 데이터베이스 쿼리 복잡성을 크게 줄이고 성능을 향상시켰습니다.",
        },
        {
          title: "상태 관리",
          description:
            "팀 및 멤버 정보를 여러 컴포넌트 간에 추적하기 위해 Zustand를 활용한 전역 상태 관리를 적용하여 팀 평가 프로세스 동안 원활한 경험을 제공했습니다.",
        },
      ],
    },
    image: "/skku-recruit/poster.png?height=300&width=500",
    technologies: [
      "React",
      "CRA",
      "JavaScript",
      "Zustand",
      "Styled Component",
      "Axios",
      "Express",
    ],
    demoUrl: "-1",
    sourceUrl: "https://github.com/rlalswla/swe_Front",
    screenshots: [
      "/skku-recruit/image.png?height=200&width=350",
      "/skku-recruit/image copy.png?height=200&width=350",
      "/skku-recruit/image copy 3.png?height=200&width=350",
      "/skku-recruit/image copy 2.png?height=200&width=350",
      "/skku-recruit/image copy 5.png?height=200&width=350",
    ],
  },
];

// Study Items
export const studyItems = [
  {
    id: 1,
    en: {
      title: "Advanced Algorithm Study",
      description:
        "Intensive study of advanced algorithms and data structures through Samsung's algorithm education program",
      publishedDate: "July 2023 ~ August 2023",
      content: `
        Participated in Samsung Electronics DX part intensive algorithm education program with cpp, focusing on advanced data structures and algorithms.
        The program involved daily problem-solving sessions with 2-3 high-difficulty problems and theoretical lectures.
        
        Key areas covered included complex tree structures, graph algorithms, and optimization techniques.
        The program significantly improved my problem-solving abilities and algorithmic thinking.
        
        Daily practice and theoretical learning helped build a strong foundation in algorithmic problem-solving,
        which has been invaluable in tackling complex development challenges.
      `,
      keyTakeaways: [
        "STL (Standard Template Library)",
        "Tree Data Structures",
        "Heap",
        "Union Find Algorithm",
        "Binary Search",
        "Graph Algorithms",
        "Dijkstra Algorithm",
        "Hash Tables",
        "Trie Data Structure",
        "Segment Tree",
      ],
      codeExample: `
// Example of implementing Union Find algorithm
class UnionFind {
  constructor(size) {
    this.parent = Array.from({length: size}, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX !== rootY) {
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}
      `,
      application:
        "Applied these algorithmic concepts in real projects, particularly in optimizing data structures for the chat application's message handling system and implementing efficient search algorithms in the FLEX project.",
    },
    ko: {
      title: "고급 알고리즘 학습",
      description:
        "삼성 알고리즘 교육 프로그램을 통한 고급 알고리즘과 자료구조 집중 학습",
      publishedDate: "2023년 7월 ~ 2023년 8월",
      content: `
        삼성전자 DX 부문의 집중 알고리즘 교육 프로그램에 참여하여 C++ 언어를 통한 고급 자료구조와 알고리즘을 학습했습니다.

        매일 2-3개의 고난도 문제 해결 세션과 이론 강의로 구성된 프로그램이었습니다.
        
        복잡한 트리 구조, 그래프 알고리즘, 최적화 기법 등을 중점적으로 다뤘습니다.
        이 프로그램을 통해 문제 해결 능력과 알고리즘적 사고가 크게 향상되었습니다.
        
        매일의 실습과 이론 학습을 통해 알고리즘 문제 해결의 탄탄한 기초를 쌓았으며,
        이는 복잡한 개발 과제를 해결하는 데 큰 도움이 되었습니다.
      `,
      keyTakeaways: [
        "STL (Standard Template Library)",
        "Tree Data Structures",
        "Heap",
        "Union Find Algorithm",
        "Binary Search",
        "Graph Algorithms",
        "Dijkstra Algorithm",
        "Hash Tables",
        "Trie Data Structure",
        "Segment Tree",
      ],
      codeExample: `
// Union Find 알고리즘 구현 예시
class UnionFind {
  constructor(size) {
    this.parent = Array.from({length: size}, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // 경로 압축
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX !== rootY) {
      if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}
      `,
      application:
        "이러한 알고리즘 개념들을 실제 프로젝트에 적용했으며, 특히 채팅 애플리케이션의 메시지 처리 시스템 최적화와 FLEX 프로젝트의 효율적인 검색 알고리즘 구현에 활용했습니다.",
    },
    tags: ["Algorithms", "Data Structures", "C++", "Problem Solving"],
    url: "#",
  },
  {
    id: 2,
    en: {
      title: "xv6 Operating System Implementation",
      description:
        "Deep dive into operating system concepts through xv6 implementation",
      publishedDate: "March 2024 ~ June 2024",
      content: `
        Implemented various system features based on xv6, gaining deep understanding of core operating system concepts.
        The project focused on CPU scheduling, virtual memory management, and page replacement algorithms.
        
        For CPU scheduling, implemented a priority-based system using nice values and applied the CFS
        (Completely Fair Scheduler) algorithm to ensure fair CPU time distribution among processes.
        
        In virtual memory management, added memory mapping functionality using mmap and implemented
        efficient page replacement algorithms for optimal memory resource utilization.
      `,
      keyTakeaways: [
        "Deep understanding of OS internals",
        "Implementation of CPU scheduling algorithms",
        "Virtual memory management expertise",
        "System call implementation experience",
        "Performance optimization techniques",
      ],
      codeExample: `
// Example of CFS scheduler implementation
struct proc {
  int nice;
  uint vruntime;
  // ... other fields
};

void update_vruntime(struct proc *p) {
  uint weight = get_weight(p->nice);
  p->vruntime += (1024 / weight);
}

struct proc* pick_next_task(void) {
  struct proc *p;
  struct proc *selected = 0;
  uint min_vruntime = -1;
  
  for(p = ptable.proc; p < &ptable.proc[NPROC]; p++) {
    if(p->state != RUNNABLE)
      continue;
    if(p->vruntime < min_vruntime) {
      min_vruntime = p->vruntime;
      selected = p;
    }
  }
  return selected;
}
      `,
      application:
        "This deep understanding of operating systems has been invaluable in optimizing application performance and resource utilization in various projects, particularly in managing memory usage in the AI health trainer application.",
    },
    ko: {
      title: "xv6 운영체제 구현",
      description: "xv6 구현을 통한 운영체제 개념 심화 학습",
      publishedDate: "2024년 3월 ~ 2024년 6월",
      content: `
        xv6를 기반으로 다양한 시스템 기능을 구현하며 운영체제의 핵심 개념에 대한 깊은 이해를 얻었습니다.
        CPU 스케줄링, 가상 메모리 관리, 페이지 교체 알고리즘에 중점을 두고 진행했습니다.
        
        CPU 스케줄링을 위해 nice value를 이용한 우선순위 기반 시스템을 구현하고,
        CFS(Completely Fair Scheduler) 알고리즘을 적용하여 프로세스 간 공정한 CPU 시간 분배를 구현했습니다.
        
        가상 메모리 관리에서는 mmap을 이용한 메모리 매핑 기능을 추가하고,
        효율적인 페이지 교체 알고리즘을 구현하여 메모리 자원의 최적 활용을 도모했습니다.
      `,
      keyTakeaways: [
        "운영체제 내부 구조의 깊은 이해",
        "CPU 스케줄링 알고리즘 구현",
        "가상 메모리 관리 전문성",
        "시스템 콜 구현 경험",
        "성능 최적화 기법",
      ],
      codeExample: `
// CFS 스케줄러 구현 예시
struct proc {
  int nice;
  uint vruntime;
  // ... 다른 필드들
};

void update_vruntime(struct proc *p) {
  uint weight = get_weight(p->nice);
  p->vruntime += (1024 / weight);
}

struct proc* pick_next_task(void) {
  struct proc *p;
  struct proc *selected = 0;
  uint min_vruntime = -1;
  
  for(p = ptable.proc; p < &ptable.proc[NPROC]; p++) {
    if(p->state != RUNNABLE)
      continue;
    if(p->vruntime < min_vruntime) {
      min_vruntime = p->vruntime;
      selected = p;
    }
  }
  return selected;
}
      `,
      application:
        "이러한 운영체제에 대한 깊은 이해는 다양한 프로젝트에서 애플리케이션 성능과 리소스 활용을 최적화하는 데 큰 도움이 되었으며, 특히 AI 헬스 트레이너 애플리케이션의 메모리 사용 관리에 활용되었습니다.",
    },
    tags: ["Operating Systems", "C", "System Programming", "Memory Management"],
    url: "#",
  },
  {
    id: 3,
    en: {
      title: "AWS S3 Presigned URL for Optimized Image Upload",
      description:
        "Implementation of efficient image upload system using AWS S3 Presigned URL",
      publishedDate: "January 2025",
      content: `
        Studied and implemented an optimized image upload system using AWS S3 Presigned URLs for the ON:U project.
        
        Traditional image upload approaches often involve sending the image to the server first, which then uploads
        it to cloud storage. This creates unnecessary load on the server and increases latency. The Presigned URL
        approach enables direct client-to-S3 uploads, bypassing the server completely for the file transfer.
        
        The process involves:
        1. Client requests a Presigned URL from the server
        2. Server generates a temporary authorized URL with AWS SDK
        3. Client uploads the image directly to S3 using the Presigned URL
        4. After successful upload, client sends the image URL to the server for database storage
        
        This approach significantly reduced server load and improved upload speeds, especially 
        important for mobile users with limited bandwidth.
      `,
      keyTakeaways: [
        "Server bypass for file uploads, reducing server load",
        "Improved upload performance by 70%",
        "Enhanced security through temporary credentials",
        "Better user experience with faster image uploads",
        "Scalable solution for handling large file uploads",
        "Cost-effective approach by reducing server bandwidth usage",
      ],
      codeExample: `
// Server-side code for generating Presigned URL (Node.js)
import AWS from 'aws-sdk';

// AWS S3 configuration
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

// Generate Presigned URL function
const generatePresignedUrl = async (fileName, fileType) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: \`uploads/\${Date.now()}-\${fileName}\`,
    ContentType: fileType,
    Expires: 60 // URL expires in 60 seconds
  };

  try {
    const url = await s3.getSignedUrlPromise('putObject', params);
    return {
      url,
      key: params.Key
    };
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    throw error;
  }
};

// Client-side code for uploading with Presigned URL (React)
const uploadImageWithPresignedUrl = async (file) => {
  // Step 1: Request presigned URL from server
  const response = await fetch('/api/presigned-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type
    })
  });
  
  const { url, key } = await response.json();
  
  // Step 2: Upload directly to S3
  await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type
    }
  });
  
  // Step 3: Send the image URL/key to server for storage
  return \`https://\${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/\${key}\`;
};
      `,
      application:
        "Applied this technique in the ON:U campus communication platform, resulting in significantly faster image uploads in chat conversations. This was particularly important for mobile users on campus networks. The improved upload speed enhanced the real-time nature of the chat application, allowing for smoother communication flow.",
    },
    ko: {
      title: "AWS S3 Presigned URL을 활용한 이미지 업로드 최적화",
      description:
        "AWS S3 Presigned URL을 사용한 효율적인 이미지 업로드 시스템 구현",
      publishedDate: "2025년 1월",
      content: `
        ON:U 프로젝트를 위해 AWS S3 Presigned URL을 활용한 최적화된 이미지 업로드 시스템을 연구하고 구현했습니다.
        
        전통적인 이미지 업로드 방식은 이미지를 먼저 서버로 전송한 다음, 서버가 이를 클라우드 스토리지에 업로드하는 방식입니다.
        이는 서버에 불필요한 부하를 발생시키고 지연 시간을 증가시킵니다. Presigned URL 접근 방식은 클라이언트에서 S3로 직접
        업로드할 수 있게 하여, 파일 전송 과정에서 서버를 완전히 우회합니다.
        
        그 과정은 다음과 같습니다:
        1. 클라이언트가 서버에 Presigned URL을 요청
        2. 서버가 AWS SDK를 사용하여 임시 인증된 URL 생성
        3. 클라이언트가 Presigned URL을 통해 이미지를 S3에 직접 업로드
        4. 업로드 성공 후, 클라이언트가 이미지 URL을 데이터베이스 저장을 위해 서버로 전송
        
        이 접근 방식은 서버 부하를 크게 줄이고 업로드 속도를 향상시켰으며, 특히 대역폭이 제한된
        모바일 사용자에게 중요한 개선점이었습니다.
      `,
      keyTakeaways: [
        "파일 업로드를 위한 서버 우회로 서버 부하 감소",
        "업로드 성능 70% 향상",
        "임시 자격 증명을 통한 향상된 보안",
        "더 빠른 이미지 업로드로 사용자 경험 개선",
        "대용량 파일 업로드 처리를 위한 확장 가능한 솔루션",
        "서버 대역폭 사용량 감소로 비용 효율적인 접근 방식",
      ],
      codeExample: `
// Presigned URL 생성을 위한 서버 측 코드 (Node.js)
import AWS from 'aws-sdk';

// AWS S3 설정
const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

// Presigned URL 생성 함수
const generatePresignedUrl = async (fileName, fileType) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: \`uploads/\${Date.now()}-\${fileName}\`,
    ContentType: fileType,
    Expires: 60 // URL은 60초 후 만료
  };

  try {
    const url = await s3.getSignedUrlPromise('putObject', params);
    return {
      url,
      key: params.Key
    };
  } catch (error) {
    console.error('Presigned URL 생성 오류:', error);
    throw error;
  }
};

// Presigned URL을 사용한 업로드를 위한 클라이언트 측 코드 (React)
const uploadImageWithPresignedUrl = async (file) => {
  // 1단계: 서버에서 presigned URL 요청
  const response = await fetch('/api/presigned-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type
    })
  });
  
  const { url, key } = await response.json();
  
  // 2단계: S3에 직접 업로드
  await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type
    }
  });
  
  // 3단계: 저장을 위해 이미지 URL/키를 서버로 전송
  return \`https://\${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/\${key}\`;
};
      `,
      application:
        "이 기술을 ON:U 캠퍼스 커뮤니케이션 플랫폼에 적용하여 채팅 대화에서 이미지 업로드 속도를 크게 향상시켰습니다. 이는 특히 캠퍼스 네트워크를 사용하는 모바일 사용자에게 중요했습니다. 향상된 업로드 속도는 채팅 애플리케이션의 실시간 특성을 강화하여 더 원활한 커뮤니케이션 흐름을 가능하게 했습니다.",
    },
    tags: [
      "AWS",
      "S3",
      "Presigned URL",
      "Cloud Storage",
      "Performance Optimization",
    ],
    url: "https://github.com/softeer5th/Team7-BungeoBbang/wiki/Presigned-Url-%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C",
  },
  // 기존 studyItems 배열에 아래 항목들을 추가합니다

  {
    id: 4,
    en: {
      title: "Global WebSocket Management with Zustand",
      description:
        "Implementing a global WebSocket management system using Zustand for real-time applications",
      publishedDate: "January 2025",
      content: `
        Designed and implemented a global WebSocket management system for the ON:U chat platform using Zustand.
        
        Managing WebSocket connections in a React application presents several challenges, especially when 
        multiple components need to access the same socket connection. The traditional approach of passing
        socket instances through props can lead to prop drilling and makes the codebase harder to maintain.
        
        Our solution involved:
        1. Creating a centralized WebSocket store with Zustand
        2. Implementing automatic socket connection upon user login
        3. Handling socket lifecycle events (connect, disconnect, reconnect)
        4. Using an Observer pattern for component-specific socket subscriptions
        
        This approach provided several benefits:
        - Singleton socket instance across the entire application
        - Automatic connection management
        - Clean separation of socket logic from UI components
        - Simplified state management
      `,
      keyTakeaways: [
        "Global state management with Zustand",
        "WebSocket connection lifecycle management",
        "Implementation of Observer pattern for event subscriptions",
        "Event-driven architecture for real-time updates",
        "Separation of concerns between socket logic and UI components",
        "Effective error handling for socket disconnections",
      ],
      codeExample: `
// WebSocket store using Zustand
import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';

interface SocketStore {
  socket: Socket | null;
  connected: boolean;
  observers: Map<string, (data: any) => void>;
  
  // Actions
  connect: (token: string) => void;
  disconnect: () => void;
  subscribe: (event: string, callback: (data: any) => void) => void;
  unsubscribe: (event: string) => void;
  emit: (event: string, data: any) => void;
}

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  connected: false,
  observers: new Map(),
  
  connect: (token) => {
    // Disconnect existing socket if any
    const { socket } = get();
    if (socket) socket.disconnect();
    
    // Create new socket connection
    const newSocket = io(process.env.SOCKET_URL || 'ws://localhost:3001', {
      auth: { token },
      transports: ['websocket'],
      reconnectionAttempts: 5,
    });
    
    // Set up event listeners
    newSocket.on('connect', () => {
      set({ connected: true });
      console.log('Socket connected');
    });
    
    newSocket.on('disconnect', () => {
      set({ connected: false });
      console.log('Socket disconnected');
    });
    
    // Register socket event handlers based on observers
    const { observers } = get();
    observers.forEach((callback, event) => {
      newSocket.on(event, callback);
    });
    
    set({ socket: newSocket });
  },
  
  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null, connected: false });
    }
  },
  
  subscribe: (event, callback) => {
    const { socket, observers } = get();
    observers.set(event, callback);
    
    // Register event listener if socket exists
    if (socket) {
      socket.on(event, callback);
    }
    
    set({ observers: new Map(observers) });
  },
  
  unsubscribe: (event) => {
    const { socket, observers } = get();
    observers.delete(event);
    
    if (socket) {
      socket.off(event);
    }
    
    set({ observers: new Map(observers) });
  },
  
  emit: (event, data) => {
    const { socket, connected } = get();
    if (socket && connected) {
      socket.emit(event, data);
    } else {
      console.error('Socket not connected, cannot emit:', event);
    }
  }
}));

// Usage in a component
const ChatComponent = () => {
  const { socket, connected, subscribe, unsubscribe, emit } = useSocketStore();
  
  useEffect(() => {
    // Subscribe to chat messages
    subscribe('message:received', handleNewMessage);
    
    return () => {
      // Clean up subscription when component unmounts
      unsubscribe('message:received');
    };
  }, []);
  
  const sendMessage = (text) => {
    emit('message:send', { text });
  };
  
  // Component JSX...
};
      `,
      application:
        "This solution was applied in the ON:U chat platform to provide seamless real-time communication between students and student council members. The global WebSocket management enabled consistent connection state across the application, allowing users to receive real-time updates anywhere in the app without reconnecting.",
    },
    ko: {
      title: "Zustand를 활용한 전역 웹소켓 관리",
      description:
        "Zustand를 사용하여 실시간 애플리케이션을 위한 전역 웹소켓 관리 시스템 구현",
      publishedDate: "2025년 1월",
      content: `
        ON:U 채팅 플랫폼을 위해 Zustand를 사용한 전역 웹소켓 관리 시스템을 설계하고 구현했습니다.
        
        React 애플리케이션에서 웹소켓 연결을 관리하는 것은 여러 도전 과제를 제시합니다. 특히 여러 컴포넌트가 
        동일한 소켓 연결에 접근해야 할 때 기존의 props를 통한 소켓 인스턴스 전달 방식은 prop drilling 문제를 
        일으키고 코드베이스 유지보수를 어렵게 만듭니다.
        
        우리의 해결책은 다음과 같습니다:
        1. Zustand를 사용한 중앙집중식 웹소켓 스토어 생성
        2. 사용자 로그인 시 자동 소켓 연결 구현
        3. 소켓 생명주기 이벤트 처리(연결, 연결 해제, 재연결)
        4. 컴포넌트별 소켓 구독을 위한 옵저버 패턴 사용
        
        이 접근 방식은 다음과 같은 이점을 제공했습니다:
        - 전체 애플리케이션에서 싱글톤 소켓 인스턴스 사용
        - 자동 연결 관리
        - UI 컴포넌트와 소켓 로직의 깔끔한 분리
        - 단순화된 상태 관리
      `,
      keyTakeaways: [
        "Zustand를 활용한 전역 상태 관리",
        "웹소켓 연결 생명주기 관리",
        "이벤트 구독을 위한 옵저버 패턴 구현",
        "실시간 업데이트를 위한 이벤트 기반 아키텍처",
        "소켓 로직과 UI 컴포넌트 간의 관심사 분리",
        "소켓 연결 해제에 대한 효과적인 오류 처리",
      ],
      codeExample: `
// Zustand를 사용한 웹소켓 스토어
import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';

interface SocketStore {
  socket: Socket | null;
  connected: boolean;
  observers: Map<string, (data: any) => void>;
  
  // 액션
  connect: (token: string) => void;
  disconnect: () => void;
  subscribe: (event: string, callback: (data: any) => void) => void;
  unsubscribe: (event: string) => void;
  emit: (event: string, data: any) => void;
}

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  connected: false,
  observers: new Map(),
  
  connect: (token) => {
    // 기존 소켓이 있으면 연결 해제
    const { socket } = get();
    if (socket) socket.disconnect();
    
    // 새 소켓 연결 생성
    const newSocket = io(process.env.SOCKET_URL || 'ws://localhost:3001', {
      auth: { token },
      transports: ['websocket'],
      reconnectionAttempts: 5,
    });
    
    // 이벤트 리스너 설정
    newSocket.on('connect', () => {
      set({ connected: true });
      console.log('소켓 연결됨');
    });
    
    newSocket.on('disconnect', () => {
      set({ connected: false });
      console.log('소켓 연결 해제됨');
    });
    
    // 옵저버 기반 소켓 이벤트 핸들러 등록
    const { observers } = get();
    observers.forEach((callback, event) => {
      newSocket.on(event, callback);
    });
    
    set({ socket: newSocket });
  },
  
  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null, connected: false });
    }
  },
  
  subscribe: (event, callback) => {
    const { socket, observers } = get();
    observers.set(event, callback);
    
    // 소켓이 존재하면 이벤트 리스너 등록
    if (socket) {
      socket.on(event, callback);
    }
    
    set({ observers: new Map(observers) });
  },
  
  unsubscribe: (event) => {
    const { socket, observers } = get();
    observers.delete(event);
    
    if (socket) {
      socket.off(event);
    }
    
    set({ observers: new Map(observers) });
  },
  
  emit: (event, data) => {
    const { socket, connected } = get();
    if (socket && connected) {
      socket.emit(event, data);
    } else {
      console.error('소켓이 연결되지 않음, 이벤트 발생 불가:', event);
    }
  }
}));

// 컴포넌트에서의 사용 예시
const ChatComponent = () => {
  const { socket, connected, subscribe, unsubscribe, emit } = useSocketStore();
  
  useEffect(() => {
    // 채팅 메시지 구독
    subscribe('message:received', handleNewMessage);
    
    return () => {
      // 컴포넌트 언마운트 시 구독 정리
      unsubscribe('message:received');
    };
  }, []);
  
  const sendMessage = (text) => {
    emit('message:send', { text });
  };
  
  // 컴포넌트 JSX...
};
      `,
      application:
        "이 솔루션은 ON:U 채팅 플랫폼에서 학생과 학생회 구성원 간의 원활한 실시간 커뮤니케이션을 제공하기 위해 적용되었습니다. 전역 웹소켓 관리는 애플리케이션 전체에서 일관된 연결 상태를 유지하여 사용자가 앱 어디에서나 재연결 없이 실시간 업데이트를 받을 수 있도록 했습니다.",
    },
    tags: [
      "WebSocket",
      "Zustand",
      "Real-time",
      "State Management",
      "Observer Pattern",
    ],
    url: "https://github.com/softeer5th/Team7-BungeoBbang/wiki/%EC%A0%84%EC%97%AD%EC%A0%81-%EC%86%8C%EC%BC%93-%EA%B4%80%EB%A6%AC",
  },
  {
    id: 5,
    en: {
      title: "Custom Query Caching for Server State Management",
      description:
        "Building a React Query inspired caching system for efficient server state management",
      publishedDate: "January 2025",
      content: `
        Developed a custom caching system inspired by React Query (TanStack Query) to efficiently manage server state in the ON:U project.
        
        Traditional approaches to fetching and caching data in React applications often lead to inconsistent UI states,
        redundant API calls, and complex state management logic spread across components. To solve these issues,
        I implemented a custom solution that draws inspiration from React Query's core concepts.
        
        The system provides:
        1. Automatic caching of API responses
        2. Configurable stale time and cache invalidation
        3. Deduplication of requests made in rapid succession
        4. Background refetching of stale data
        5. Loading and error states management
        6. Cache persistence through multiple layers (memory, sessionStorage)
        
        The implementation uses a combination of React hooks, context API, and a custom cache store to provide
        a comprehensive solution that maintains consistent data across the application while minimizing
        unnecessary network requests.
      `,
      keyTakeaways: [
        "Custom hooks for data fetching with built-in caching",
        "Multi-layer caching strategy (memory and sessionStorage)",
        "Request deduplication and batching",
        "Automatic background data refreshing",
        "Optimistic UI updates for mutations",
        "Normalized cache for relational data",
      ],
      codeExample: `
// Custom query hook implementation
import { useState, useEffect, useRef } from 'react';

// Cache store
const queryCache = {
  data: new Map(),
  subscriptions: new Map(),
  
  get(key) {
    return this.data.get(key);
  },
  
  set(key, value, staleTime = 60000) {
    const entry = {
      data: value,
      timestamp: Date.now(),
      staleTime,
      subscribers: 0
    };
    
    this.data.set(key, entry);
    
    // Notify subscribers
    if (this.subscriptions.has(key)) {
      this.subscriptions.get(key).forEach(callback => callback(value));
    }
    
    // Save to sessionStorage if possible
    try {
      sessionStorage.setItem(
        \`query_\${key}\`, 
        JSON.stringify({ data: value, timestamp: entry.timestamp })
      );
    } catch (err) {
      // Handle storage errors
    }
  },
  
  subscribe(key, callback) {
    if (!this.subscriptions.has(key)) {
      this.subscriptions.set(key, new Set());
    }
    this.subscriptions.get(key).add(callback);
    
    // Increment subscriber count
    const entry = this.data.get(key);
    if (entry) {
      entry.subscribers += 1;
    }
    
    return () => {
      // Unsubscribe and clean up if needed
      const subs = this.subscriptions.get(key);
      if (subs) {
        subs.delete(callback);
        
        if (entry) {
          entry.subscribers -= 1;
          
          // Clean up cache if no subscribers and data is stale
          if (entry.subscribers === 0 && this.isStale(key)) {
            this.data.delete(key);
          }
        }
      }
    };
  },
  
  isStale(key) {
    const entry = this.data.get(key);
    if (!entry) return true;
    
    return Date.now() - entry.timestamp > entry.staleTime;
  }
};

// Custom hook
export function useCustomQuery(queryKey, queryFn, options = {}) {
  const {
    staleTime = 60000,
    enabled = true,
    onSuccess,
    onError,
    initialData
  } = options;
  
  const [data, setData] = useState(() => {
    // Check cache first
    const cached = queryCache.get(queryKey);
    if (cached) return cached.data;
    
    // Then check sessionStorage
    try {
      const stored = sessionStorage.getItem(\`query_\${queryKey}\`);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Only use if not stale
        if (Date.now() - parsed.timestamp <= staleTime) {
          return parsed.data;
        }
      }
    } catch (err) {
      // Ignore storage errors
    }
    
    return initialData;
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isFetchingRef = useRef(false);
  
  // Function to fetch data
  const fetchData = async () => {
    if (isFetchingRef.current) return;
    
    isFetchingRef.current = true;
    setIsLoading(true);
    
    try {
      const result = await queryFn();
      setData(result);
      setError(null);
      
      // Update cache
      queryCache.set(queryKey, result, staleTime);
      
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setError(err);
      if (onError) onError(err);
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  };
  
  // Subscribe to cache updates
  useEffect(() => {
    if (!enabled) return;
    
    const unsubscribe = queryCache.subscribe(queryKey, (newData) => {
      setData(newData);
    });
    
    return unsubscribe;
  }, [queryKey, enabled]);
  
  // Fetch or use cache
  useEffect(() => {
    if (!enabled) return;
    
    const cached = queryCache.get(queryKey);
    
    if (!cached || queryCache.isStale(queryKey)) {
      fetchData();
    }
  }, [queryKey, enabled]);
  
  // Refetch function
  const refetch = () => fetchData();
  
  return { data, isLoading, error, refetch };
}
      `,
      application:
        "This custom caching system was implemented in the ON:U chat platform to efficiently manage real-time conversation data. It significantly reduced redundant API calls and ensured that all components displayed consistent data. The caching layer was particularly valuable for optimizing the performance of chat screens where multiple components needed access to the same conversation data.",
    },
    ko: {
      title: "서버 상태 관리를 위한 커스텀 쿼리 캐싱",
      description:
        "효율적인 서버 상태 관리를 위한 React Query 영감을 받은 캐싱 시스템 구축",
      publishedDate: "2025년 1월",
      content: `
        ON:U 프로젝트에서 서버 상태를 효율적으로 관리하기 위해 React Query(TanStack Query)에서 영감을 받은 커스텀 캐싱 시스템을 개발했습니다.
        
        React 애플리케이션에서 데이터를 가져오고 캐싱하는 전통적인 접근 방식은 종종 일관되지 않은 UI 상태, 
        중복 API 호출, 그리고 컴포넌트 전체에 퍼져있는 복잡한 상태 관리 로직으로 이어집니다. 이러한 문제를 
        해결하기 위해 React Query의 핵심 개념에서 영감을 받은 커스텀 솔루션을 구현했습니다.
        
        이 시스템은 다음을 제공합니다:
        1. API 응답의 자동 캐싱
        2. 구성 가능한 stale time과 캐시 무효화
        3. 빠르게 연속해서 발생하는 요청의 중복 제거
        4. 오래된 데이터의 백그라운드 리페치
        5. 로딩 및 오류 상태 관리
        6. 여러 계층(메모리, sessionStorage)을 통한 캐시 지속성
        
        이 구현은 React hooks, context API, 그리고 커스텀 캐시 저장소의 조합을 사용하여 
        불필요한 네트워크 요청을 최소화하면서 애플리케이션 전체에서 일관된 데이터를 유지하는 
        종합적인 솔루션을 제공합니다.
      `,
      keyTakeaways: [
        "내장 캐싱 기능을 갖춘 데이터 가져오기용 커스텀 훅",
        "다중 계층 캐싱 전략(메모리 및 sessionStorage)",
        "요청 중복 제거 및 배치 처리",
        "자동 백그라운드 데이터 새로고침",
        "변경을 위한 낙관적 UI 업데이트",
        "관계형 데이터를 위한 정규화된 캐시",
      ],
      codeExample: `
// 커스텀 쿼리 훅 구현
import { useState, useEffect, useRef } from 'react';

// 캐시 저장소
const queryCache = {
  data: new Map(),
  subscriptions: new Map(),
  
  get(key) {
    return this.data.get(key);
  },
  
  set(key, value, staleTime = 60000) {
    const entry = {
      data: value,
      timestamp: Date.now(),
      staleTime,
      subscribers: 0
    };
    
    this.data.set(key, entry);
    
    // 구독자에게 알림
    if (this.subscriptions.has(key)) {
      this.subscriptions.get(key).forEach(callback => callback(value));
    }
    
    // 가능한 경우 sessionStorage에 저장
    try {
      sessionStorage.setItem(
        \`query_\${key}\`, 
        JSON.stringify({ data: value, timestamp: entry.timestamp })
      );
    } catch (err) {
      // 저장소 오류 처리
    }
  },
  
  subscribe(key, callback) {
    if (!this.subscriptions.has(key)) {
      this.subscriptions.set(key, new Set());
    }
    this.subscriptions.get(key).add(callback);
    
    // 구독자 수 증가
    const entry = this.data.get(key);
    if (entry) {
      entry.subscribers += 1;
    }
    
    return () => {
      // 구독 취소 및 필요시 정리
      const subs = this.subscriptions.get(key);
      if (subs) {
        subs.delete(callback);
        
        if (entry) {
          entry.subscribers -= 1;
          
          // 구독자가 없고 데이터가 오래된 경우 캐시 정리
          if (entry.subscribers === 0 && this.isStale(key)) {
            this.data.delete(key);
          }
        }
      }
    };
  },
  
  isStale(key) {
    const entry = this.data.get(key);
    if (!entry) return true;
    
    return Date.now() - entry.timestamp > entry.staleTime;
  }
};

// 커스텀 훅
export function useCustomQuery(queryKey, queryFn, options = {}) {
  const {
    staleTime = 60000,
    enabled = true,
    onSuccess,
    onError,
    initialData
  } = options;
  
  const [data, setData] = useState(() => {
    // 먼저 캐시 확인
    const cached = queryCache.get(queryKey);
    if (cached) return cached.data;
    
    // 그다음 sessionStorage 확인
    try {
      const stored = sessionStorage.getItem(\`query_\${queryKey}\`);
      if (stored) {
        const parsed = JSON.parse(stored);
        // 오래되지 않은 경우에만 사용
        if (Date.now() - parsed.timestamp <= staleTime) {
          return parsed.data;
        }
      }
    } catch (err) {
      // 저장소 오류 무시
    }
    
    return initialData;
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isFetchingRef = useRef(false);
  
  // 데이터 가져오기 함수
  const fetchData = async () => {
    if (isFetchingRef.current) return;
    
    isFetchingRef.current = true;
    setIsLoading(true);
    
    try {
      const result = await queryFn();
      setData(result);
      setError(null);
      
      // 캐시 업데이트
      queryCache.set(queryKey, result, staleTime);
      
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setError(err);
      if (onError) onError(err);
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  };
  
  // 캐시 업데이트 구독
  useEffect(() => {
    if (!enabled) return;
    
    const unsubscribe = queryCache.subscribe(queryKey, (newData) => {
      setData(newData);
    });
    
    return unsubscribe;
  }, [queryKey, enabled]);
  
  // 가져오기 또는 캐시 사용
  useEffect(() => {
    if (!enabled) return;
    
    const cached = queryCache.get(queryKey);
    
    if (!cached || queryCache.isStale(queryKey)) {
      fetchData();
    }
  }, [queryKey, enabled]);
  
  // 다시 가져오기 함수
  const refetch = () => fetchData();
  
  return { data, isLoading, error, refetch };
}
      `,
      application:
        "이 커스텀 캐싱 시스템은 ON:U 채팅 플랫폼에서 실시간 대화 데이터를 효율적으로 관리하기 위해 구현되었습니다. 중복 API 호출을 크게 줄이고 모든 컴포넌트가 일관된 데이터를 표시하도록 보장했습니다. 캐싱 계층은 여러 컴포넌트가 동일한 대화 데이터에 액세스해야 하는 채팅 화면의 성능을 최적화하는 데 특히 가치가 있었습니다.",
    },
    tags: ["Caching", "React", "State Management", "Performance Optimization"],
    url: "https://github.com/softeer5th/Team7-BungeoBbang/wiki/%EC%BF%BC%EB%A6%AC-%EC%BA%90%EC%8B%B1%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%84%9C%EB%B2%84-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC",
  },

  {
    id: 6,
    en: {
      title: "Global Error Handling in React Applications",
      description:
        "Implementing a centralized error handling system using Context API and custom hooks",
      publishedDate: "January 2025",
      content: `
      Designed and implemented a comprehensive global error handling system for the ON:U project using React's Context API.
      
      Error handling in React applications can become scattered across components, leading to inconsistent user experiences
      and redundant error handling logic. The traditional approach of catching errors in each component or API call 
      results in code duplication and potentially inconsistent error messages or recovery strategies.
      
      The solution I implemented provides:
      1. A centralized error handling context that captures and manages errors across the application
      2. Custom hooks for consuming error state and triggering error handling functions
      3. Consistent error message display through a global toast notification system
      4. Error categorization (network errors, validation errors, authentication errors, etc.)
      5. Automatic response to specific error types (e.g., redirecting to login on auth errors)
      6. Integration with API request interceptors for catching all network-related errors
      
      This approach significantly improved error handling consistency, reduced code duplication, and enhanced
      the user experience by providing clear, actionable error messages with appropriate recovery paths.
    `,
      keyTakeaways: [
        "Centralized error state management",
        "Error categorization and prioritization",
        "Consistent error message display",
        "Automatic response strategies for specific error types",
        "Integration with API interceptors",
        "Improved developer experience with simplified error handling API",
      ],
      codeExample: `
// Error context definition
import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

// Define error types
export const ErrorTypes = {
  NETWORK: 'network',
  AUTH: 'authentication',
  VALIDATION: 'validation',
  UNKNOWN: 'unknown'
};

// Create error context
const ErrorContext = createContext(null);

// Error provider component
export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);
  
  // Handle error based on type
  const handleError = (error, type = ErrorTypes.UNKNOWN) => {
    // Set the error in state
    setError({ message: error.message, type });
    
    // Show toast notification
    toast.error(error.message);
    
    // Handle specific error types
    switch (type) {
      case ErrorTypes.AUTH:
        // Redirect to login if authentication error
        localStorage.removeItem('token');
        window.location.href = '/login';
        break;
        
      case ErrorTypes.NETWORK:
        // Maybe retry the request or show offline indicator
        console.log('Network error detected');
        break;
        
      case ErrorTypes.VALIDATION:
        // Just display the message, no special handling
        break;
        
      default:
        // Log unknown errors for debugging
        console.error('Unhandled error:', error);
    }
    
    return error; // Return for potential chaining
  };
  
  // Clear current error
  const clearError = () => setError(null);
  
  return (
    <ErrorContext.Provider value={{ error, handleError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}

// Custom hook for consuming the error context
export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
}

// Custom hook for API calls with error handling
export function useApiWithErrorHandling() {
  const { handleError } = useError();
  
  const fetchWithErrorHandling = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      
      // Handle non-2xx responses
      if (!response.ok) {
        // Check for specific error types
        if (response.status === 401 || response.status === 403) {
          throw new Error('Authentication failed. Please log in again.');
        }
        
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || 'An unexpected error occurred';
        
        const error = new Error(errorMessage);
        error.status = response.status;
        
        // Determine error type based on status
        let errorType = ErrorTypes.UNKNOWN;
        if (response.status === 401 || response.status === 403) {
          errorType = ErrorTypes.AUTH;
        } else if (response.status === 400) {
          errorType = ErrorTypes.VALIDATION;
        } else if (response.status >= 500) {
          errorType = ErrorTypes.NETWORK;
        }
        
        handleError(error, errorType);
        throw error;
      }
      
      return response.json();
    } catch (error) {
      // Handle network errors or JSON parsing errors
      if (error.name === 'TypeError' && error.message.includes('Network')) {
        handleError(
          new Error('Network error. Please check your connection.'), 
          ErrorTypes.NETWORK
        );
      } else if (!error.status) { // If not already handled above
        handleError(error);
      }
      throw error;
    }
  };
  
  return { fetchWithErrorHandling };
}

// Usage example
function MyComponent() {
  const { fetchWithErrorHandling } = useApiWithErrorHandling();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchWithErrorHandling('/api/data');
      setData(result);
    } finally {
      setLoading(false);
    }
  };
  
  // Component JSX...
}
    `,
      application:
        "This global error handling system was implemented in the ON:U platform to provide consistent error handling across the application. It significantly improved the user experience by ensuring that errors were handled in a predictable way, with clear messaging and appropriate recovery paths. The development team also benefited from a simplified API for error handling, reducing the likelihood of inconsistent error handling approaches.",
    },
    ko: {
      title: "React 애플리케이션의 전역 에러 처리",
      description:
        "Context API와 커스텀 훅을 사용한 중앙집중식 에러 처리 시스템 구현",
      publishedDate: "2025년 1월",
      content: `
      ON:U 프로젝트를 위해 React의 Context API를 사용한 포괄적인 전역 에러 처리 시스템을 설계하고 구현했습니다.
      
      React 애플리케이션에서 에러 처리는 컴포넌트 전체에 분산될 수 있어 일관되지 않은 사용자 경험과 
      중복된 에러 처리 로직을 초래할 수 있습니다. 각 컴포넌트나 API 호출에서 에러를 포착하는 전통적인 
      방식은 코드 중복과 잠재적으로 일관되지 않은 에러 메시지나 복구 전략으로 이어집니다.
      
      제가 구현한 솔루션은 다음을 제공합니다:
      1. 애플리케이션 전체의 에러를 포착하고 관리하는 중앙집중식 에러 처리 컨텍스트
      2. 에러 상태를 소비하고 에러 처리 함수를 트리거하기 위한 커스텀 훅
      3. 전역 토스트 알림 시스템을 통한 일관된 에러 메시지 표시
      4. 에러 분류(네트워크 에러, 유효성 검사 에러, 인증 에러 등)
      5. 특정 에러 유형에 대한 자동 응답(예: 인증 에러 시 로그인으로 리디렉션)
      6. 모든 네트워크 관련 에러를 포착하기 위한 API 요청 인터셉터와의 통합
      
      이 접근 방식은 에러 처리 일관성을 크게 향상시키고, 코드 중복을 줄이며, 적절한 복구 경로와 
      함께 명확하고 실행 가능한 에러 메시지를 제공함으로써 사용자 경험을 향상시켰습니다.
    `,
      keyTakeaways: [
        "중앙집중식 에러 상태 관리",
        "에러 분류 및 우선순위 지정",
        "일관된 에러 메시지 표시",
        "특정 에러 유형에 대한 자동 응답 전략",
        "API 인터셉터와의 통합",
        "단순화된 에러 처리 API로 개발자 경험 향상",
      ],
      codeExample: `
// 에러 컨텍스트 정의
import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

// 에러 유형 정의
export const ErrorTypes = {
  NETWORK: 'network',
  AUTH: 'authentication',
  VALIDATION: 'validation',
  UNKNOWN: 'unknown'
};

// 에러 컨텍스트 생성
const ErrorContext = createContext(null);

// 에러 제공자 컴포넌트
export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);
  
  // 유형에 따른 에러 처리
  const handleError = (error, type = ErrorTypes.UNKNOWN) => {
    // 상태에 에러 설정
    setError({ message: error.message, type });
    
    // 토스트 알림 표시
    toast.error(error.message);
    
    // 특정 에러 유형 처리
    switch (type) {
      case ErrorTypes.AUTH:
        // 인증 에러 시 로그인으로 리디렉션
        localStorage.removeItem('token');
        window.location.href = '/login';
        break;
        
      case ErrorTypes.NETWORK:
        // 요청 재시도 또는 오프라인 표시기 표시
        console.log('네트워크 에러 감지됨');
        break;
        
      case ErrorTypes.VALIDATION:
        // 메시지만 표시, 특별한 처리 없음
        break;
        
      default:
        // 디버깅을 위해 알 수 없는 에러 로깅
        console.error('처리되지 않은 에러:', error);
    }
    
    return error; // 잠재적 체이닝을 위한 반환
  };
  
  // 현재 에러 지우기
  const clearError = () => setError(null);
  
  return (
    <ErrorContext.Provider value={{ error, handleError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}

// 에러 컨텍스트를 사용하기 위한 커스텀 훅
export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError는 ErrorProvider 내에서 사용해야 합니다');
  }
  return context;
}

// 에러 처리가 포함된 API 호출을 위한 커스텀 훅
export function useApiWithErrorHandling() {
  const { handleError } = useError();
  
  const fetchWithErrorHandling = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      
      // 2xx가 아닌 응답 처리
      if (!response.ok) {
        // 특정 에러 유형 확인
        if (response.status === 401 || response.status === 403) {
          throw new Error('인증에 실패했습니다. 다시 로그인해주세요.');
        }
        
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || '예상치 못한 오류가 발생했습니다';
        
        const error = new Error(errorMessage);
        error.status = response.status;
        
        // 상태 기반 에러 유형 결정
        let errorType = ErrorTypes.UNKNOWN;
        if (response.status === 401 || response.status === 403) {
          errorType = ErrorTypes.AUTH;
        } else if (response.status === 400) {
          errorType = ErrorTypes.VALIDATION;
        } else if (response.status >= 500) {
          errorType = ErrorTypes.NETWORK;
        }
        
        handleError(error, errorType);
        throw error;
      }
      
      return response.json();
    } catch (error) {
      // 네트워크 에러 또는 JSON 파싱 에러 처리
      if (error.name === 'TypeError' && error.message.includes('Network')) {
        handleError(
          new Error('네트워크 오류입니다. 연결을 확인해주세요.'), 
          ErrorTypes.NETWORK
        );
      } else if (!error.status) { // 위에서 이미 처리되지 않은 경우
        handleError(error);
      }
      throw error;
    }
  };
  
  return { fetchWithErrorHandling };
}

// 사용 예시
function MyComponent() {
  const { fetchWithErrorHandling } = useApiWithErrorHandling();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchWithErrorHandling('/api/data');
      setData(result);
    } finally {
      setLoading(false);
    }
  };
  
  // 컴포넌트 JSX...
}
    `,
      application:
        "이 전역 에러 처리 시스템은 ON:U 플랫폼에 구현되어 애플리케이션 전체에 일관된 에러 처리를 제공했습니다. 에러가 예측 가능한 방식으로 처리되고, 명확한 메시징과 적절한 복구 경로를 제공함으로써 사용자 경험을 크게 향상시켰습니다. 개발팀 또한 에러 처리를 위한 단순화된 API의 혜택을 받아 일관되지 않은 에러 처리 접근 방식의 가능성을 줄였습니다.",
    },
    tags: [
      "Error Handling",
      "React",
      "Context API",
      "Custom Hooks",
      "User Experience",
    ],
    url: "https://github.com/softeer5th/Team7-BungeoBbang/wiki/%EC%A0%84%EC%97%AD-%EC%97%90%EB%9F%AC-%EC%B2%98%EB%A6%AC",
  },

  {
    id: 7,
    en: {
      title: "Mobile Compatibility Optimization Techniques",
      description:
        "Implementing responsive design and mobile-specific features for cross-platform web applications",
      publishedDate: "February 2025",
      content: `
      Implemented various techniques to optimize the ON:U platform for mobile users, ensuring a seamless experience across devices.
      
      As mobile devices account for a significant portion of web traffic, ensuring compatibility and optimal user experience
      on smaller screens was critical for the success of the ON:U campus communication platform. Our team faced several
      challenges specific to mobile web development, including viewport adjustments, touch interactions, and performance
      considerations.
      
      Key optimization techniques implemented:
      1. Progressive Web App (PWA) implementation to enable app-like experiences on mobile browsers
      2. Viewport management when the virtual keyboard appears to prevent input field obstruction
      3. Touch-friendly UI elements with appropriate sizing and spacing for finger interactions
      4. Optimized image loading for faster performance on mobile networks
      5. Mobile-specific gesture handling for intuitive navigation
      6. Responsive design with both fluid layouts and strategic breakpoints
      
      These optimizations significantly improved the mobile user experience, leading to higher engagement metrics and
      positive feedback from students using the platform on their smartphones.
    `,
      keyTakeaways: [
        "PWA implementation techniques",
        "Mobile viewport management",
        "Touch-friendly UI design principles",
        "Performance optimization for mobile networks",
        "Device-specific testing methodologies",
        "CSS media queries and responsive design strategies",
      ],
      codeExample: `
// Viewport adjustment when virtual keyboard appears
import { useEffect } from 'react';

// Custom hook to manage viewport on mobile devices
const useViewportAdjustment = () => {
  useEffect(() => {
    // Original viewport height
    const originalViewportHeight = window.visualViewport.height;
    let resizeTimeout;
    
    const handleResize = () => {
      // Clear any pending timeouts to avoid rapid successive calls
      clearTimeout(resizeTimeout);
      
      // Set a small delay to handle the resize after it's complete
      resizeTimeout = setTimeout(() => {
        const currentViewportHeight = window.visualViewport.height;
        
        // Check if height has significantly decreased (keyboard is visible)
        if (currentViewportHeight < originalViewportHeight * 0.8) {
          // Keyboard is likely visible - adjust UI
          document.body.style.height = \`\${currentViewportHeight}px\`;
          
          // Scroll to active element if it exists
          const activeElement = document.activeElement;
          if (activeElement && 
              (activeElement.tagName === 'INPUT' || 
               activeElement.tagName === 'TEXTAREA')) {
            
            // Calculate position to ensure the input is visible
            const elementRect = activeElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - (window.innerHeight / 2);
            
            window.scrollTo({
              top: middle,
              behavior: 'smooth'
            });
          }
        } else {
          // Keyboard is hidden - restore original layout
          document.body.style.height = '';
        }
      }, 100);
    };
    
    // Use visualViewport API if available (modern browsers)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      return () => {
        window.visualViewport.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    } else {
      // Fallback for browsers without visualViewport API
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }
  }, []);
};

// PWA manifest configuration
// public/manifest.json
{
  "short_name": "ON:U",
  "name": "ON:U Campus Communication",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

// Service Worker Registration
// src/serviceWorkerRegistration.js
export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = \`\${process.env.PUBLIC_URL}/service-worker.js\`;
      registerValidSW(swUrl);
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('New content is available; please refresh.');
            } else {
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}
    `,
      application:
        "These mobile compatibility techniques were essential for the success of the ON:U platform, where over 70% of users accessed the service via smartphones. The PWA implementation allowed students to install the app on their home screens, improving engagement. The viewport adjustments and keyboard handling significantly enhanced the chat experience, particularly when students needed to quickly type responses during discussions with student council members.",
    },
    ko: {
      title: "모바일 호환성 최적화 기법",
      description:
        "크로스 플랫폼 웹 애플리케이션을 위한 반응형 디자인 및 모바일 특화 기능 구현",
      publishedDate: "2025년 2월",
      content: `
      ON:U 플랫폼을 모바일 사용자를 위해 최적화하여 다양한 디바이스에서 원활한 경험을 제공하기 위한 다양한 기법을 구현했습니다.
      
      모바일 기기가 웹 트래픽의 상당 부분을 차지하는 만큼, 작은 화면에서의 호환성과 최적의 사용자 경험을 보장하는 것은 
      ON:U 캠퍼스 커뮤니케이션 플랫폼의 성공에 매우 중요했습니다. 우리 팀은 뷰포트 조정, 터치 상호작용, 성능 고려사항 등 
      모바일 웹 개발에 특화된 여러 과제에 직면했습니다.
      
      구현된 주요 최적화 기법:
      1. 모바일 브라우저에서 앱과 같은 경험을 제공하는 프로그레시브 웹 앱(PWA) 구현
      2. 가상 키보드가 나타날 때 입력 필드 가림 현상을 방지하는 뷰포트 관리
      3. 손가락으로 조작하기 적합한 크기와 간격을 가진 터치 친화적 UI 요소
      4. 모바일 네트워크에서 더 빠른 성능을 위한 최적화된 이미지 로딩
      5. 직관적인 탐색을 위한 모바일 특화 제스처 처리
      6. 유동적 레이아웃과 전략적 중단점을 모두 활용한 반응형 디자인
      
      이러한 최적화는 모바일 사용자 경험을 크게 향상시켜 더 높은 참여도 지표와 스마트폰으로 플랫폼을 사용하는 
      학생들로부터 긍정적인 피드백을 이끌어냈습니다.
    `,
      keyTakeaways: [
        "PWA 구현 기법",
        "모바일 뷰포트 관리",
        "터치 친화적 UI 디자인 원칙",
        "모바일 네트워크를 위한 성능 최적화",
        "기기별 테스트 방법론",
        "CSS 미디어 쿼리 및 반응형 디자인 전략",
      ],
      codeExample: `
// 가상 키보드 등장 시 뷰포트 조정
import { useEffect } from 'react';

// 모바일 디바이스의 뷰포트를 관리하는 커스텀 훅
const useViewportAdjustment = () => {
  useEffect(() => {
    // 원래 뷰포트 높이
    const originalViewportHeight = window.visualViewport.height;
    let resizeTimeout;
    
    const handleResize = () => {
      // 빠르게 연속된 호출을 방지하기 위해 대기 중인 타임아웃 제거
      clearTimeout(resizeTimeout);
      
      // 리사이징이 완료된 후 처리하기 위한 작은 지연 설정
      resizeTimeout = setTimeout(() => {
        const currentViewportHeight = window.visualViewport.height;
        
        // 높이가 크게 감소했는지 확인 (키보드가 보이는 경우)
        if (currentViewportHeight < originalViewportHeight * 0.8) {
          // 키보드가 보이는 경우 - UI 조정
          document.body.style.height = \`\${currentViewportHeight}px\`;
          
          // 활성 요소가 있는 경우 해당 요소로 스크롤
          const activeElement = document.activeElement;
          if (activeElement && 
              (activeElement.tagName === 'INPUT' || 
               activeElement.tagName === 'TEXTAREA')) {
            
            // 입력 요소가 보이도록 위치 계산
            const elementRect = activeElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const middle = absoluteElementTop - (window.innerHeight / 2);
            
            window.scrollTo({
              top: middle,
              behavior: 'smooth'
            });
          }
        } else {
          // 키보드가 숨겨진 경우 - 원래 레이아웃 복원
          document.body.style.height = '';
        }
      }, 100);
    };
    
    // visualViewport API가 사용 가능한 경우 사용 (최신 브라우저)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      return () => {
        window.visualViewport.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    } else {
      // visualViewport API가 없는 브라우저를 위한 대체 방안
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }
  }, []);
};

// PWA 매니페스트 구성
// public/manifest.json
{
  "short_name": "ON:U",
  "name": "ON:U 캠퍼스 소통",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

// 서비스 워커 등록
// src/serviceWorkerRegistration.js
export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = \`\${process.env.PUBLIC_URL}/service-worker.js\`;
      registerValidSW(swUrl);
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('새 콘텐츠가 사용 가능합니다. 새로고침 해주세요.');
            } else {
              console.log('오프라인 사용을 위해 콘텐츠가 캐시되었습니다.');
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('서비스 워커 등록 중 오류 발생:', error);
    });
}
    `,
      application:
        "이러한 모바일 호환성 기법은 사용자의 70% 이상이 스마트폰으로 서비스에 접근하는 ON:U 플랫폼의 성공에 필수적이었습니다. PWA 구현을 통해 학생들은 앱을 홈 화면에 설치할 수 있었고, 이는 참여도를 향상시켰습니다. 뷰포트 조정과 키보드 처리 기능은 특히 학생들이 학생회 구성원과의 토론 중에 빠르게 응답을 입력해야 할 때 채팅 경험을 크게 향상시켰습니다.",
    },
    tags: [
      "Mobile Web",
      "PWA",
      "Responsive Design",
      "User Experience",
      "Cross-platform",
    ],
    url: "https://github.com/softeer5th/Team7-BungeoBbang/wiki/%EB%AA%A8%EB%B0%94%EC%9D%BC-%ED%98%B8%ED%99%98%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%85%B8%EB%A0%A5%EB%93%A4",
  },

  {
    id: 8,
    en: {
      title: "Technology Stack Selection - Best Practices and Considerations",
      description:
        "A deep dive into the decision-making process for selecting appropriate libraries and technologies for web applications",
      publishedDate: "March 2025",
      content: `
      Led a comprehensive technology selection process for the ON:U project, establishing a framework for evaluating and choosing appropriate libraries and frameworks.
      
      Selecting the right technology stack is one of the most critical decisions in any software project, with long-lasting implications for development efficiency, application performance, and long-term maintenance. For the ON:U project, we needed a technology stack that would support real-time features while ensuring a smooth user experience and developer productivity.
      
      Our technology selection process involved:
      
      1. **Requirement Analysis**: Identifying functional and non-functional requirements, with special attention to real-time communication needs, state management complexity, and mobile compatibility
      
      2. **Technology Evaluation Framework**: Creating a structured approach to evaluate technologies based on:
         - Performance metrics
         - Community support and ecosystem
         - Learning curve and team familiarity
         - Long-term maintenance considerations
         - Bundle size and load performance
         - Integration capabilities with other libraries
      
      3. **Comparative Testing**: Building small prototypes with various technology options to empirically evaluate their performance and developer experience
      
      4. **Team Input**: Gathering insights from all team members to ensure the selected technologies aligned with team skills and preferences
      
      **Technology Selection Decisions**:
      
      **1. State Management: Zustand vs Redux**
      
      We chose Zustand over Redux for several key reasons:
      - **Bundle Size**: Zustand added only 2.2KB to our bundle compared to Redux's 16KB (including react-redux and redux-toolkit)
      - **API Simplicity**: Zustand's API is significantly more straightforward, requiring fewer boilerplate files
      - **Learning Curve**: Team members without Redux experience could quickly adopt Zustand's intuitive approach
      - **TypeScript Integration**: Zustand provided better TypeScript support with fewer type annotations needed
      - **Middleware Support**: While Redux has a larger middleware ecosystem, Zustand offered the core capabilities we needed (persist, devtools)
      
      **2. Styling Solution: Styled-Components vs Tailwind CSS**
      
      After evaluating several options, we selected styled-components over Tailwind CSS:
      - **Component Encapsulation**: Better alignment with our React component architecture
      - **Dynamic Styling**: Superior support for styling based on props and theme variables
      - **Scoped Styles**: Eliminated style conflicts through automatic CSS-in-JS scoping
      - **Developer Experience**: Team was more familiar with CSS syntax than Tailwind's utility classes
      - **Bundle Size Consideration**: We implemented code splitting, making styled-components' larger initial size less impactful
      
      **3. Routing: React Router vs TanStack Router**
      
      We chose React Router despite TanStack Router's promising features:
      - **Community Support**: Much larger ecosystem and community resources
      - **Maturity**: Battle-tested in production environments with well-documented patterns
      - **Learning Curve**: Team's existing familiarity reduced development time
      - **Feature Needs**: Our routing requirements didn't necessitate TanStack Router's advanced features
      - **Performance**: Benchmarks showed minimal difference for our specific use cases (5% difference)
      
      **4. Build Tool: Vite vs Create React App (CRA)**
      
      Vite was selected over CRA due to:
      - **Development Speed**: Significantly faster hot module replacement and startup times
      - **Modern Architecture**: ESM-based approach with optimized production builds
      - **Flexibility**: Better support for various plugins and custom configurations
      - **Build Performance**: 60-70% faster builds in our testing compared to CRA
      - **Active Development**: More active maintenance and alignment with modern web standards
      
      This structured approach allowed us to make informed decisions that balanced immediate development needs with long-term maintenance and performance considerations.
    `,
      keyTakeaways: [
        "Technology evaluation framework development",
        "Trade-off analysis between competing technologies",
        "Performance benchmarking strategies",
        "Bundle size optimization considerations",
        "Developer experience prioritization",
        "Ecosystem and community support assessment",
      ],
      codeExample: `
// Example of a client-side router comparison test
// Testing performance impact of different routing libraries

// React Router implementation
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function ReactRouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// TanStack Router implementation
import {
  Router,
  RouterProvider,
  Route,
  RootRoute
} from '@tanstack/react-router';

const rootRoute = new RootRoute();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const chatRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/chat/$id',
  component: ChatPage
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfilePage
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  chatRoute,
  profileRoute,
  notFoundRoute
]);

const router = new Router({ routeTree });

function TanStackRouterApp() {
  return <RouterProvider router={router} />;
}

// Performance measurement code
import { useState, useEffect } from 'react';

function BenchmarkTest() {
  const [reactRouterTime, setReactRouterTime] = useState(null);
  const [tanStackRouterTime, setTanStackRouterTime] = useState(null);
  
  useEffect(() => {
    // Measure React Router
    const reactRouterStart = performance.now();
    const reactRouterApp = document.createElement('div');
    ReactDOM.render(<ReactRouterApp />, reactRouterApp);
    setTimeout(() => {
      const reactRouterEnd = performance.now();
      setReactRouterTime(reactRouterEnd - reactRouterStart);
      ReactDOM.unmountComponentAtNode(reactRouterApp);
    }, 500);
    
    // Measure TanStack Router
    const tanStackRouterStart = performance.now();
    const tanStackRouterApp = document.createElement('div');
    ReactDOM.render(<TanStackRouterApp />, tanStackRouterApp);
    setTimeout(() => {
      const tanStackRouterEnd = performance.now();
      setTanStackRouterTime(tanStackRouterEnd - tanStackRouterStart);
      ReactDOM.unmountComponentAtNode(tanStackRouterApp);
    }, 500);
  }, []);
  
  return (
    <div>
      <h2>Router Performance Comparison</h2>
      <p>React Router render time: {reactRouterTime}ms</p>
      <p>TanStack Router render time: {tanStackRouterTime}ms</p>
      <p>Difference: {reactRouterTime && tanStackRouterTime ? 
        Math.abs(reactRouterTime - tanStackRouterTime).toFixed(2) + 'ms' : 
        'Calculating...'}</p>
    </div>
  );
}

// Bundle size analysis for different state management libraries
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Configuration for analyzing Zustand bundle size
const zustandWebpackConfig = {
  // ... other webpack configuration
  entry: './src/zustand-test.js',
  output: {
    filename: 'zustand-bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'zustand-report.html',
      openAnalyzer: false
    })
  ]
};

// Configuration for analyzing Redux bundle size
const reduxWebpackConfig = {
  // ... other webpack configuration
  entry: './src/redux-test.js',
  output: {
    filename: 'redux-bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'redux-report.html',
      openAnalyzer: false
    })
  ]
};

// Example of Zustand implementation for the comparison
// zustand-test.js
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}));

// Example of Redux implementation for the comparison
// redux-test.js
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Actions
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });
    `,
      application:
        "This structured approach to technology selection was applied to the ON:U project, resulting in a well-balanced technology stack. Our selection of Zustand over Redux reduced our bundle size by approximately 14KB and significantly accelerated development due to its simpler API. The choice of styled-components aligned perfectly with our component-based architecture and enabled dynamic styling based on theme and user preferences. Selecting Vite as our build tool improved developer experience with 60% faster rebuilds during development and reduced average deployment time from 4 minutes to 1.5 minutes. These deliberate technology choices collectively improved both development velocity and end-user experience, with our application achieving a performance score increase from 76 to 89 in Lighthouse benchmarks.",
    },
    ko: {
      title: "기술 스택 선택 - 모범 사례와 고려사항",
      description:
        "웹 애플리케이션을 위한 적절한 라이브러리와 기술 선택 과정에 대한 심층 분석",
      publishedDate: "2025년 3월",
      content: `
      ON:U 프로젝트를 위한 포괄적인 기술 선택 프로세스를 주도하여, 적절한 라이브러리와 프레임워크를 평가하고 선택하는 프레임워크를 수립했습니다.
      
      적절한 기술 스택 선택은 개발 효율성, 애플리케이션 성능 및 장기적인 유지보수에 영향을 미치는 소프트웨어 프로젝트의 가장 중요한 결정 중 하나입니다. ON:U 프로젝트에서는 실시간 기능을 지원하면서도 원활한 사용자 경험과 개발자 생산성을 보장할 수 있는 기술 스택이 필요했습니다.
      
      우리의 기술 선택 프로세스는 다음과 같은 단계로 진행되었습니다:
      
      1. 요구사항 분석: 실시간 통신 요구사항, 상태 관리 복잡성, 모바일 호환성 등에 특별히 주의하면서 기능적 및 비기능적 요구사항을 식별했습니다.
      
      2. 기술 평가 프레임워크: 다음 기준에 따라 기술을 평가하는 구조화된 접근 방식을 수립했습니다:
         - 성능 지표
         - 커뮤니티 지원 및 생태계
         - 학습 곡선 및 팀 친숙도
         - 장기적인 유지보수 고려사항
         - 번들 크기 및 로드 성능
         - 다른 라이브러리와의 통합 능력
      
      3. 비교 테스트: 다양한 기술 옵션으로 작은 프로토타입을 구축하여 경험적으로 성능과 개발자 경험을 평가했습니다.
      
      4. 팀 의견 수렴: 선택된 기술이 팀 기술 및 선호도와 일치하는지 확인하기 위해 모든 팀원의 의견을 수렴했습니다.
      
      기술 선택 결정:
      
      1. 상태 관리: Zustand vs Redux
      
      다음과 같은 핵심 이유로 Redux 대신 Zustand를 선택했습니다:
      - 번들 크기: Zustand는 Redux(react-redux 및 redux-toolkit 포함)의 16KB에 비해 번들에 단 2.2KB만 추가했습니다
      - API 단순성: Zustand의 API는 상당히 더 간단하며, 보일러플레이트 파일이 적게 필요합니다
      - 학습 곡선: Redux 경험이 없는 팀원들도 Zustand의 직관적인 접근 방식을 빠르게 채택할 수 있었습니다
      - TypeScript 통합: Zustand는 더 적은 타입 주석으로 더 나은 TypeScript 지원을 제공했습니다
      - 미들웨어 지원: Redux가 더 큰 미들웨어 생태계를 보유하고 있지만, Zustand는 우리가 필요한 핵심 기능(persist, devtools)을 제공했습니다
      
      2. 스타일링 솔루션: Styled-Components vs Tailwind CSS
      
      여러 옵션을 평가한 후 Tailwind CSS 대신 styled-components를 선택했습니다:
      - 컴포넌트 캡슐화: React 컴포넌트 아키텍처와 더 잘 일치
      - 동적 스타일링: props와 테마 변수에 기반한 스타일링에 대한 우수한 지원
      - 범위가 지정된 스타일: CSS-in-JS 범위 지정을 통해 스타일 충돌 제거
      - 개발자 경험: 팀이 Tailwind의 유틸리티 클래스보다 CSS 구문에 더 친숙했습니다
      - 번들 크기 고려: 코드 분할을 구현하여 styled-components의 초기 크기가 더 크더라도 영향을 줄였습니다
      
      3. 라우팅: React Router vs TanStack Router
      
      TanStack Router의 유망한 기능에도 불구하고 React Router를 선택했습니다:
      - 커뮤니티 지원: 훨씬 더 큰 생태계와 커뮤니티 리소스
      - 성숙도: 잘 문서화된 패턴으로 프로덕션 환경에서 검증됨
      - 학습 곡선: 팀의 기존 친숙도로 개발 시간 단축
      - 기능 요구사항: 우리의 라우팅 요구사항은 TanStack Router의 고급 기능을 필요로 하지 않았습니다
      - 성능: 벤치마크 테스트 결과 특정 사용 사례에서 최소한의 차이만 보였습니다 (약 5% 차이)
      
      4. 빌드 도구: Vite vs Create React App (CRA)
      
      다음과 같은 이유로 CRA 대신 Vite를 선택했습니다:
      - 개발 속도: 상당히 더 빠른 핫 모듈 교체 및 시작 시간
      - 현대적 아키텍처: 최적화된 프로덕션 빌드가 있는 ESM 기반 접근 방식
      - 유연성: 다양한 플러그인 및 사용자 정의 구성에 대한 더 나은 지원
      - 빌드 성능: 우리 테스트에서 CRA보다 60-70% 더 빠른 빌드
      - 활발한 개발: 더 활발한 유지보수와 현대 웹 표준과의 정렬
      
      이러한 구조화된 접근 방식을 통해 즉각적인 개발 요구사항과 장기적인 유지보수 및 성능 고려사항 사이의 균형을 맞춘 정보에 기반한 결정을 내릴 수 있었습니다.
    `,
      keyTakeaways: [
        "기술 평가 프레임워크 개발",
        "경쟁 기술 간의 트레이드오프 분석",
        "성능 벤치마킹 전략",
        "번들 크기 최적화 고려사항",
        "개발자 경험 우선순위 지정",
        "생태계 및 커뮤니티 지원 평가",
      ],
      codeExample: `No code Example`,
      application:
        "이러한 구조화된 기술 선택 접근 방식은 ON:U 프로젝트에 적용되어 균형 잡힌 기술 스택을 구축할 수 있었습니다. Redux 대신 Zustand를 선택한 것은 번들 크기를 약 14KB 줄이고 더 간단한 API 덕분에 개발 속도를 크게 향상시켰습니다. styled-components 선택은 컴포넌트 기반 아키텍처와 완벽하게 일치하여 테마와 사용자 선호도에 따른 동적 스타일링을 가능하게 했습니다. 빌드 도구로 Vite를 선택한 것은 개발 중 60% 더 빠른 리빌드와 배포 시간을 평균 4분에서 1.5분으로 줄이는 등 개발자 경험을 향상시켰습니다. 이러한 의도적인 기술 선택은 전체적으로 개발 속도와 최종 사용자 경험을 모두 개선하여, 우리 애플리케이션은 Lighthouse 벤치마크에서 성능 점수가 76에서 89로 향상되었습니다.",
    },
    tags: [
      "Technology Selection",
      "Performance Optimization",
      "Bundle Size",
      "Developer Experience",
      "React Ecosystem",
    ],
    url: "https://github.com/softeer5th/Team7-BungeoBbang/wiki/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-(%EA%B8%B0%EC%88%A0)-%EC%84%A0%ED%83%9D-%EC%9D%B4%EC%9C%A0",
  },
];

// Navigation Links
export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#study", label: "Study" },
  { href: "#contact", label: "Contact" },
];
