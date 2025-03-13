"use client";

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
        "ON:U is a chat application built to facilitate communication between students and student council members. The project implements real-time messaging using WebSocket and features a custom caching system inspired by React Query.",
      features: [
        "Real-time chat functionality with WebSocket",
        "Custom caching system for optimized data management",
        "Token-based authentication system",
        "Statistical analysis dashboard",
        "Responsive design for all devices",
        "Dark mode support",
      ],
      challenges: [
        {
          title: "WebSocket Management",
          description:
            "Implemented global socket management using Zustand, handling automatic connections on login and subscription management for different chat rooms.",
        },
        {
          title: "Data Optimization",
          description:
            "Built a custom caching system inspired by React Query to manage server state and real-time updates efficiently.",
        },
      ],
    },
    ko: {
      title: "ON:U - 캠퍼스 소통 플랫폼",
      description:
        "학생과 학생회 간의 효과적인 소통을 위한 실시간 채팅 애플리케이션",
      completedDate: "2025년 01월 ~ 2025년 02월",
      overview:
        "ON:U는 학생과 학생회 구성원 간의 소통을 원활하게 하기 위해 개발된 채팅 애플리케이션입니다. WebSocket을 사용한 실시간 메시징과 React Query에서 영감을 받은 커스텀 캐싱 시스템을 집중적으로 구현했습니다.",
      features: [
        "WebSocket을 활용한 실시간 채팅 기능",
        "최적화된 데이터 관리를 위한 커스텀 캐싱 시스템",
        "토큰 기반 인증 시스템",
        "통계 분석 대시보드",
        "모든 기기에 대응하는 반응형 디자인",
        "다크 모드 지원",
      ],
      challenges: [
        {
          title: "웹소켓 관리",
          description:
            "Zustand를 사용하여 전역 소켓 관리를 구현하고, 로그인 시 자동 연결 및 채팅방별 구독 관리를 처리했습니다.",
        },
        {
          title: "데이터 최적화",
          description:
            "React Query에서 영감을 받아 서버 상태와 실시간 업데이트를 효율적으로 관리하는 커스텀 캐싱 시스템을 구축했습니다.",
        },
      ],
    },
    image: "/onu-poster.png?height=300&width=500",
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "Zustand",
      "styled-components",
      "Vite",
      "Storybook",
    ],
    demoUrl: "#",
    sourceUrl: "#",
    screenshots: [
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
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
        "FLEX is an AI health trainer application that analyzes users' preferences and physical conditions to provide personalized diet and workout routines. The app uses advanced AI models for food recognition and recommendation systems.",
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
      completedDate: "2023년 10월",
      overview:
        "FLEX는 사용자의 선호도와 신체 조건을 분석하여 맞춤형 식단과 운동 루틴을 제공하는 AI 헬스 트레이너 애플리케이션입니다. 음식 인식과 추천 시스템을 위해 고급 AI 모델을 사용합니다.",
      features: [
        "냉장고 사진을 통한 AI 식재료 인식",
        "개인 맞춤형 식단 추천",
        "목표 기반 맞춤 운동 루틴",
        "진행 상황 추적 대시보드",
        "실시간 영양 분석",
        "크로스 플랫폼 호환성",
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
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "TypeScript", "AI/ML", "Node.js", "Docker"],
    demoUrl: "#",
    sourceUrl: "#",
    screenshots: [
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
    ],
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
      title: "언어치료 보조 애플리케이션",
      description: "언어발달장애 아동을 위한 AI 기반 치료 보조 애플리케이션",
      completedDate: "2023년 9월",
      overview:
        "언어발달장애 아동의 치료를 돕기 위해 설계된 혁신적인 애플리케이션입니다. 새싹 해커톤에서 우수상을 수상했으며, SPARK 프로그램의 지원을 받아 추가 개발을 진행했습니다.",
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
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "React Native",
      "Next.js",
      "TypeScript",
      "WebSocket",
      "TTS API",
    ],
    demoUrl: "#",
    sourceUrl: "#",
    screenshots: [
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
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
      publishedDate: "August 2023",
      content: `
        Participated in Samsung's intensive algorithm education program, focusing on advanced data structures and algorithms.
        The program involved daily problem-solving sessions with 2-3 high-difficulty problems and theoretical lectures.
        
        Key areas covered included complex tree structures, graph algorithms, and optimization techniques.
        The program significantly improved my problem-solving abilities and algorithmic thinking.
        
        Daily practice and theoretical learning helped build a strong foundation in algorithmic problem-solving,
        which has been invaluable in tackling complex development challenges.
      `,
      keyTakeaways: [
        "Mastered advanced data structures and algorithms",
        "Improved problem-solving approach and efficiency",
        "Learned optimization techniques for complex problems",
        "Developed systematic debugging strategies",
        "Enhanced analytical thinking skills",
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
      publishedDate: "2023년 8월",
      content: `
        삼성의 집중 알고리즘 교육 프로그램에 참여하여 고급 자료구조와 알고리즘을 학습했습니다.
        매일 2-3개의 고난도 문제 해결 세션과 이론 강의로 구성된 프로그램이었습니다.
        
        복잡한 트리 구조, 그래프 알고리즘, 최적화 기법 등을 중점적으로 다뤘습니다.
        이 프로그램을 통해 문제 해결 능력과 알고리즘적 사고가 크게 향상되었습니다.
        
        매일의 실습과 이론 학습을 통해 알고리즘 문제 해결의 탄탄한 기초를 쌓았으며,
        이는 복잡한 개발 과제를 해결하는 데 큰 도움이 되었습니다.
      `,
      keyTakeaways: [
        "고급 자료구조와 알고리즘 마스터",
        "문제 해결 접근법과 효율성 향상",
        "복잡한 문제에 대한 최적화 기법 학습",
        "체계적인 디버깅 전략 개발",
        "분석적 사고력 향상",
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
      title: "Operating System Implementation",
      description:
        "Deep dive into operating system concepts through xv6 implementation",
      publishedDate: "December 2023",
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
      title: "운영체제 구현",
      description: "xv6 구현을 통한 운영체제 개념 심화 학습",
      publishedDate: "2023년 12월",
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
];

// Navigation Links
export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#study", label: "Study" },
  { href: "#contact", label: "Contact" },
];
