"use client";

// Personal Information
export const personalInfo = {
  en: {
    name: "Lee Jihoon",
    title: "Frontend Developer",
    email: "elect10@g.skku.edu",
    location: "Seoul, South Korea 🇰🇷",
    university: "University of Technology",
    github: "https://github.com/rlalswla",
    githubUsername: "rlalswla",
    bio: "Building beautiful, responsive, and user-friendly web applications with modern technologies.",
  },
  ko: {
    name: "이지훈",
    title: "Frontend Developer",
    email: "elect10@g.skku.edu",
    location: "서울, 대한민국 🇰🇷",
    university: "성균관대학교 수학과 & 소프트웨어 복수전공",
    github: "https://github.com/rlalswla",
    githubUsername: "rlalswla",
    bio: "다양한 기술을 통한 아름답고, 사용자 친화적인 웹 애플리케이션을 지향합니다.",
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
  "Docker",
  "Git",
  "Figma",
];

// Projects
export const projects = [
  {
    id: 1,
    en: {
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer data.",
      completedDate: "June 2023",
      overview:
        "This e-commerce dashboard provides businesses with real-time analytics and insights into their sales, inventory, and customer behavior. The intuitive interface makes it easy to track key performance indicators and make data-driven decisions.",
      features: [
        "Real-time sales and inventory tracking",
        "Customer behavior analytics",
        "Customizable dashboard widgets",
        "Responsive design for all devices",
        "Dark mode support",
        "Export reports in multiple formats",
      ],
      challenges: [
        {
          title: "Data Visualization Performance",
          description:
            "Rendering large datasets caused performance issues. I implemented data aggregation and virtualized lists to improve rendering speed by 70%.",
        },
        {
          title: "Real-time Updates",
          description:
            "Keeping dashboard data in sync with the backend was challenging. I used WebSockets for real-time updates without compromising performance.",
        },
      ],
    },
    ko: {
      title: "이커머스 대시보드",
      description:
        "이커머스 비즈니스를 위한 판매, 재고 및 고객 데이터를 추적하는 종합 대시보드입니다.",
      completedDate: "2023년 6월",
      overview:
        "이 이커머스 대시보드는 기업에게 판매, 재고 및 고객 행동에 대한 실시간 분석과 인사이트를 제공합니다. 직관적인 인터페이스로 주요 성과 지표를 쉽게 추적하고 데이터 기반 의사 결정을 할 수 있습니다.",
      features: [
        "실시간 판매 및 재고 추적",
        "고객 행동 분석",
        "맞춤형 대시보드 위젯",
        "모든 기기에 대응하는 반응형 디자인",
        "다크 모드 지원",
        "다양한 형식의 보고서 내보내기",
      ],
      challenges: [
        {
          title: "데이터 시각화 성능",
          description:
            "대용량 데이터셋 렌더링으로 성능 이슈가 발생했습니다. 데이터 집계 및 가상화된 리스트를 구현하여 렌더링 속도를 70% 향상시켰습니다.",
        },
        {
          title: "실시간 업데이트",
          description:
            "백엔드와 대시보드 데이터를 동기화하는 것이 어려웠습니다. 성능 저하 없이 실시간 업데이트를 위해 WebSocket을 사용했습니다.",
        },
      ],
    },
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
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
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      completedDate: "March 2023",
      overview:
        "This task management application helps teams organize their work with intuitive boards, lists, and cards. It features real-time updates, allowing team members to collaborate effectively regardless of their location.",
      features: [
        "Drag-and-drop task organization",
        "Real-time collaboration",
        "Task assignment and due dates",
        "File attachments and comments",
        "Progress tracking and reporting",
        "Email notifications",
      ],
      challenges: [
        {
          title: "State Management Complexity",
          description:
            "Managing complex state across multiple components was challenging. I implemented Redux with normalized state structure to solve this issue.",
        },
        {
          title: "Offline Support",
          description:
            "Users needed to access their tasks without internet connection. I implemented service workers and IndexedDB for offline functionality.",
        },
      ],
    },
    ko: {
      title: "태스크 관리 앱",
      description:
        "실시간 업데이트 및 팀 협업 기능을 갖춘 협업 태스크 관리 애플리케이션입니다.",
      completedDate: "2023년 3월",
      overview:
        "이 태스크 관리 애플리케이션은 직관적인 보드, 리스트 및 카드로 팀이 업무를 구성할 수 있도록 도와줍니다. 실시간 업데이트 기능을 통해 팀원들이 위치에 상관없이 효과적으로 협업할 수 있습니다.",
      features: [
        "드래그 앤 드롭 태스크 구성",
        "실시간 협업",
        "태스크 할당 및 마감일",
        "파일 첨부 및 댓글",
        "진행 상황 추적 및 보고",
        "이메일 알림",
      ],
      challenges: [
        {
          title: "상태 관리 복잡성",
          description:
            "여러 컴포넌트에 걸친 복잡한 상태 관리가 어려웠습니다. 이 문제를 해결하기 위해 정규화된 상태 구조를 가진 Redux를 구현했습니다.",
        },
        {
          title: "오프라인 지원",
          description:
            "사용자가 인터넷 연결 없이 태스크에 접근해야 했습니다. 오프라인 기능을 위해 서비스 워커와 IndexedDB를 구현했습니다.",
        },
      ],
    },
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Firebase", "Material UI"],
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
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates marketing content, blog posts, and social media updates.",
      completedDate: "October 2023",
      overview:
        "This AI content generator leverages OpenAI's GPT models to help marketers and content creators generate high-quality content quickly. Users can specify their target audience, tone, and content type to get customized results.",
      features: [
        "Blog post generation with SEO optimization",
        "Social media content creation",
        "Email marketing templates",
        "Content repurposing tools",
        "Tone and style customization",
        "Content history and favorites",
      ],
      challenges: [
        {
          title: "API Cost Optimization",
          description:
            "OpenAI API costs could escalate quickly. I implemented caching strategies and token optimization to reduce API costs by 40%.",
        },
        {
          title: "Content Quality Control",
          description:
            "Ensuring AI-generated content met quality standards was difficult. I developed a post-processing pipeline with quality checks and human review options.",
        },
      ],
    },
    ko: {
      title: "AI 콘텐츠 생성기",
      description:
        "마케팅 콘텐츠, 블로그 포스트 및 소셜 미디어 업데이트를 생성하는 AI 기반 애플리케이션입니다.",
      completedDate: "2023년 10월",
      overview:
        "이 AI 콘텐츠 생성기는 OpenAI의 GPT 모델을 활용하여 마케터와 콘텐츠 제작자가 빠르게 고품질 콘텐츠를 생성할 수 있도록 도와줍니다. 사용자는 대상 청중, 톤, 콘텐츠 유형을 지정하여 맞춤형 결과를 얻을 수 있습니다.",
      features: [
        "SEO 최적화된 블로그 포스트 생성",
        "소셜 미디어 콘텐츠 제작",
        "이메일 마케팅 템플릿",
        "콘텐츠 재활용 도구",
        "톤 및 스타일 커스터마이징",
        "콘텐츠 히스토리 및 즐겨찾기",
      ],
      challenges: [
        {
          title: "API 비용 최적화",
          description:
            "OpenAI API 비용이 빠르게 증가할 수 있었습니다. 캐싱 전략과 토큰 최적화를 구현하여 API 비용을 40% 절감했습니다.",
        },
        {
          title: "콘텐츠 품질 관리",
          description:
            "AI 생성 콘텐츠가 품질 기준을 충족하는지 확인하는 것이 어려웠습니다. 품질 검사와 인간 검토 옵션이 있는 후처리 파이프라인을 개발했습니다.",
        },
      ],
    },
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
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
      title: "Advanced React Patterns",
      description:
        "A deep dive into advanced React patterns including compound components, render props, and custom hooks.",
      publishedDate: "May 2023",
      content: `
        React offers several advanced patterns that can help you build more flexible and reusable components. 
        In this study, I explored three key patterns: compound components, render props, and custom hooks.
        
        Compound components allow you to create components that work together to form a cohesive API. 
        This pattern is particularly useful for complex components like forms, tabs, or dropdown menus.
        
        Render props is a technique where a component takes a function as a prop and calls it instead of 
        implementing its own render logic. This allows for greater flexibility and composition.
        
        Custom hooks enable you to extract component logic into reusable functions. This pattern helps 
        keep your components clean and focused on rendering, while complex logic is abstracted away.
      `,
      keyTakeaways: [
        "Compound components improve component API design",
        "Render props enable flexible component composition",
        "Custom hooks help separate logic from UI concerns",
        "Context API can enhance compound components",
        "TypeScript improves type safety in advanced patterns",
      ],
      codeExample: `
  // Example of a custom hook
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    });
  
    const setValue = (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    };
  
    return [storedValue, setValue];
  }
      `,
      application:
        "I applied these patterns to refactor a complex form component in an e-commerce project. By using compound components and custom hooks, I reduced the component's size by 40% and made it much more maintainable and flexible for future requirements.",
    },
    ko: {
      title: "고급 React 패턴",
      description:
        "컴파운드 컴포넌트, 렌더 프롭스, 커스텀 훅을 포함한 고급 React 패턴에 대한 심층 분석입니다.",
      publishedDate: "2023년 5월",
      content: `
        React는 더 유연하고 재사용 가능한 컴포넌트를 구축하는 데 도움이 되는 여러 고급 패턴을 제공합니다.
        이 연구에서는 세 가지 주요 패턴을 탐구했습니다: 컴파운드 컴포넌트, 렌더 프롭스, 커스텀 훅.
        
        컴파운드 컴포넌트를 사용하면 함께 작동하여 일관된 API를 형성하는 컴포넌트를 만들 수 있습니다.
        이 패턴은 폼, 탭, 드롭다운 메뉴와 같은 복잡한 컴포넌트에 특히 유용합니다.
        
        렌더 프롭스는 컴포넌트가 함수를 prop으로 받아 자체 렌더링 로직을 구현하는 대신 호출하는 기술입니다.
        이를 통해 더 큰 유연성과 구성이 가능합니다.
        
        커스텀 훅을 사용하면 컴포넌트 로직을 재사용 가능한 함수로 추출할 수 있습니다. 이 패턴은
        복잡한 로직이 추상화되는 동안 컴포넌트를 렌더링에 집중하고 깔끔하게 유지하는 데 도움이 됩니다.
      `,
      keyTakeaways: [
        "컴파운드 컴포넌트는 컴포넌트 API 디자인을 개선합니다",
        "렌더 프롭스는 유연한 컴포넌트 구성을 가능하게 합니다",
        "커스텀 훅은 로직과 UI 관심사를 분리하는 데 도움이 됩니다",
        "Context API는 컴파운드 컴포넌트를 향상시킬 수 있습니다",
        "TypeScript는 고급 패턴에서 타입 안전성을 향상시킵니다",
      ],
      codeExample: `
  // 커스텀 훅 예제
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    });
  
    const setValue = (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    };
  
    return [storedValue, setValue];
  }
      `,
      application:
        "이러한 패턴을 이커머스 프로젝트의 복잡한 폼 컴포넌트를 리팩토링하는 데 적용했습니다. 컴파운드 컴포넌트와 커스텀 훅을 사용하여 컴포넌트 크기를 40% 줄이고 향후 요구사항에 대해 훨씬 더 유지보수하기 쉽고 유연하게 만들었습니다.",
    },
    tags: ["React", "JavaScript", "Frontend"],
    url: "#",
  },
  {
    id: 2,
    en: {
      title: "Performance Optimization in React",
      description:
        "Techniques and strategies for optimizing React application performance, including code splitting and memoization.",
      publishedDate: "July 2023",
      content: `
        Performance optimization is crucial for providing a good user experience in React applications.
        In this study, I focused on several key techniques: code splitting, memoization, virtualization, and bundle optimization.
        
        Code splitting allows you to split your code into smaller chunks that can be loaded on demand.
        This reduces the initial load time of your application, especially for larger applications.
        
        Memoization techniques like React.memo, useMemo, and useCallback help prevent unnecessary
        re-renders by caching results based on dependencies.
        
        Virtualization is essential when rendering large lists or tables. Libraries like react-window
        and react-virtualized help render only the items that are currently visible in the viewport.
        
        Bundle optimization involves analyzing and reducing your JavaScript bundle size using tools
        like Webpack Bundle Analyzer and implementing tree shaking.
      `,
      keyTakeaways: [
        "Code splitting reduces initial load time",
        "Memoization prevents unnecessary re-renders",
        "Virtualization is essential for large lists",
        "Bundle analysis helps identify optimization opportunities",
        "Performance should be measured, not guessed",
      ],
      codeExample: `
  // Example of React.memo and useCallback
  import React, { useCallback, useState } from 'react';
  
  const ExpensiveComponent = React.memo(({ onClick, name }) => {
    console.log('ExpensiveComponent rendered');
    return <button onClick={onClick}>{name}</button>;
  });
  
  function App() {
    const [count, setCount] = useState(0);
    
    // This function is memoized and only changes when dependencies change
    const handleClick = useCallback(() => {
      console.log('Button clicked');
    }, []);
    
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ExpensiveComponent onClick={handleClick} name="Optimized Button" />
      </div>
    );
  }
      `,
      application:
        "I applied these optimization techniques to a dashboard application that was experiencing performance issues. By implementing code splitting and virtualization for large data tables, I reduced the initial load time by 60% and improved the scrolling performance significantly.",
    },
    ko: {
      title: "React에서의 성능 최적화",
      description:
        "코드 분할 및 메모이제이션을 포함한 React 애플리케이션 성능 최적화 기법 및 전략입니다.",
      publishedDate: "2023년 7월",
      content: `
        성능 최적화는 React 애플리케이션에서 좋은 사용자 경험을 제공하는 데 중요합니다.
        이 연구에서는 코드 분할, 메모이제이션, 가상화, 번들 최적화와 같은 여러 핵심 기술에 중점을 두었습니다.
        
        코드 분할을 사용하면 코드를 필요에 따라 로드할 수 있는 작은 청크로 분할할 수 있습니다.
        이는 특히 대규모 애플리케이션에서 초기 로드 시간을 줄여줍니다.
        
        React.memo, useMemo, useCallback과 같은 메모이제이션 기술은 의존성에 기반하여
        결과를 캐싱함으로써 불필요한 리렌더링을 방지합니다.
        
        대규모 목록이나 테이블을 렌더링할 때 가상화는 필수적입니다. react-window와
        react-virtualized 같은 라이브러리는 현재 뷰포트에 보이는 항목만 렌더링하도록 도와줍니다.
        
        번들 최적화는 Webpack Bundle Analyzer와 같은 도구를 사용하여 JavaScript 번들 크기를
        분석하고 줄이며 트리 쉐이킹을 구현하는 것을 포함합니다.
      `,
      keyTakeaways: [
        "코드 분할은 초기 로드 시간을 줄입니다",
        "메모이제이션은 불필요한 리렌더링을 방지합니다",
        "대규모 목록에는 가상화가 필수적입니다",
        "번들 분석은 최적화 기회를 식별하는 데 도움이 됩니다",
        "성능은 추측이 아닌 측정되어야 합니다",
      ],
      codeExample: `
  // React.memo와 useCallback 예제
  import React, { useCallback, useState } from 'react';
  
  const ExpensiveComponent = React.memo(({ onClick, name }) => {
    console.log('ExpensiveComponent rendered');
    return <button onClick={onClick}>{name}</button>;
  });
  
  function App() {
    const [count, setCount] = useState(0);
    
    // 이 함수는 메모이제이션되어 의존성이 변경될 때만 변경됩니다
    const handleClick = useCallback(() => {
      console.log('Button clicked');
    }, []);
    
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ExpensiveComponent onClick={handleClick} name="Optimized Button" />
      </div>
    );
  }
      `,
      application:
        "이러한 최적화 기술을 성능 문제가 있는 대시보드 애플리케이션에 적용했습니다. 대규모 데이터 테이블에 코드 분할 및 가상화를 구현하여 초기 로드 시간을 60% 줄이고 스크롤 성능을 크게 향상시켰습니다.",
    },
    tags: ["React", "Performance", "Optimization"],
    url: "#",
  },
  {
    id: 3,
    en: {
      title: "State Management with Redux Toolkit",
      description:
        "An exploration of modern Redux development using Redux Toolkit to simplify state management in React applications.",
      publishedDate: "September 2023",
      content: `
        Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.
        It addresses three common concerns about Redux: complex configuration, too much boilerplate, and too many packages to install.
        
        In this study, I explored how Redux Toolkit simplifies Redux development through features like
        createSlice, which generates action creators and action types automatically, and the built-in
        use of Immer for immutable state updates with simpler syntax.
        
        I also examined RTK Query, a powerful data fetching and caching tool included in Redux Toolkit.
        RTK Query reduces the need for manual data fetching logic and provides automatic cache management.
        
        The study also covered best practices for organizing Redux code, including the "ducks" pattern
        and feature-based organization, as well as performance considerations when using Redux.
      `,
      keyTakeaways: [
        "createSlice reduces Redux boilerplate significantly",
        "Immer enables simpler immutable state updates",
        "RTK Query simplifies data fetching and caching",
        "Feature-based organization improves code maintainability",
        "Redux DevTools integration is seamless with Redux Toolkit",
      ],
      codeExample: `
  // Example of createSlice in Redux Toolkit
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
  interface CounterState {
    value: number;
  }
  
  const initialState: CounterState = {
    value: 0,
  };
  
  const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers
        // It doesn't actually mutate the state because it uses Immer
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
    },
  });
  
  export const { increment, decrement, incrementByAmount } = counterSlice.actions;
  export default counterSlice.reducer;
      `,
      application:
        "I refactored a complex e-commerce application from using vanilla Redux to Redux Toolkit. This reduced the codebase size by 30% and made the state management logic much more maintainable. RTK Query also simplified our API calls and provided automatic loading and error states.",
    },
    ko: {
      title: "Redux Toolkit을 이용한 상태 관리",
      description:
        "Redux Toolkit을 사용하여 React 애플리케이션의 상태 관리를 단순화하는 현대적인 Redux 개발 탐구입니다.",
      publishedDate: "2023년 9월",
      content: `
        Redux Toolkit은 효율적인 Redux 개발을 위한 공식적이고, 의견이 있으며, 배터리가 포함된 도구 세트입니다.
        복잡한 구성, 너무 많은 보일러플레이트, 설치해야 할 너무 많은 패키지라는 Redux에 대한 세 가지 일반적인 우려를 해결합니다.
        
        이 연구에서는 Redux Toolkit이 createSlice와 같은 기능을 통해 Redux 개발을 단순화하는 방법을 탐구했습니다.
        createSlice는 액션 생성자와 액션 타입을 자동으로 생성하며, 더 간단한 구문으로 불변 상태 업데이트를 위해
        Immer를 내장하여 사용합니다.
        
        또한 Redux Toolkit에 포함된 강력한 데이터 가져오기 및 캐싱 도구인 RTK Query를 검토했습니다.
        RTK Query는 수동 데이터 가져오기 로직의 필요성을 줄이고 자동 캐시 관리를 제공합니다.
        
        이 연구는 또한 "ducks" 패턴 및 기능 기반 구성을 포함한 Redux 코드 구성에 대한 모범 사례와
        Redux 사용 시 성능 고려 사항도 다루었습니다.
      `,
      keyTakeaways: [
        "createSlice는 Redux 보일러플레이트를 크게 줄입니다",
        "Immer는 더 간단한 불변 상태 업데이트를 가능하게 합니다",
        "RTK Query는 데이터 가져오기 및 캐싱을 단순화합니다",
        "기능 기반 구성은 코드 유지보수성을 향상시킵니다",
        "Redux DevTools 통합은 Redux Toolkit과 원활하게 작동합니다",
      ],
      codeExample: `
  // Redux Toolkit의 createSlice 예제
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
  interface CounterState {
    value: number;
  }
  
  const initialState: CounterState = {
    value: 0,
  };
  
  const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit은 리듀서에서 "변경" 로직을 작성할 수 있게 해줍니다
        // Immer를 사용하기 때문에 실제로 상태를 변경하지 않습니다
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
    },
  });
  
  export const { increment, decrement, incrementByAmount } = counterSlice.actions;
  export default counterSlice.reducer;
      `,
      application:
        "바닐라 Redux에서 Redux Toolkit으로 복잡한 이커머스 애플리케이션을 리팩토링했습니다. 이로 인해 코드베이스 크기가 30% 줄어들고 상태 관리 로직이 훨씬 더 유지보수하기 쉬워졌습니다. RTK Query는 또한 API 호출을 단순화하고 자동 로딩 및 오류 상태를 제공했습니다.",
    },
    tags: ["Redux", "React", "State Management"],
    url: "#",
  },
  {
    id: 4,
    en: {
      title: "Serverless Architecture with Next.js",
      description:
        "A study on building serverless applications using Next.js, Vercel, and various serverless database solutions.",
      publishedDate: "November 2023",
      content: `
        Serverless architecture allows developers to build and run applications without managing server infrastructure.
        Next.js, combined with platforms like Vercel, provides an excellent framework for serverless development.
        
        In this study, I explored how Next.js API routes and server components can be used to create serverless
        backend functionality. I also examined how to integrate with serverless database solutions like Supabase,
        PlanetScale, and Firebase.
        
        The study covered important considerations for serverless applications, including cold starts,
        execution time limits, and statelessness. I also looked at strategies for optimizing serverless
        functions and managing environment variables securely.
        
        Additionally, I explored how to implement authentication, file uploads, and scheduled tasks in a
        serverless environment, as well as monitoring and debugging techniques.
      `,
      keyTakeaways: [
        "Next.js API routes provide a simple way to create serverless functions",
        "Server Components reduce client-side JavaScript and improve performance",
        "Serverless databases complement the serverless architecture",
        "Cold starts can be mitigated with proper optimization",
        "Edge functions offer lower latency for global applications",
      ],
      codeExample: `
  // Example of a Next.js API route with database connection
  import type { NextApiRequest, NextApiResponse } from 'next';
  import { createClient } from '@supabase/supabase-js';
  
  // Initialize Supabase client
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'GET') {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch products' });
      }
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
  }
      `,
      application:
        "I migrated a traditional Express.js backend to a serverless architecture using Next.js API routes and Supabase. This reduced hosting costs by 70% and improved global performance by leveraging Vercel's edge network. The application now scales automatically based on demand without any infrastructure management.",
    },
    ko: {
      title: "Next.js를 활용한 서버리스 아키텍처",
      description:
        "Next.js, Vercel 및 다양한 서버리스 데이터베이스 솔루션을 사용하여 서버리스 애플리케이션을 구축하는 연구입니다.",
      publishedDate: "2023년 11월",
      content: `
        서버리스 아키텍처를 통해 개발자는 서버 인프라를 관리하지 않고도 애플리케이션을 구축하고 실행할 수 있습니다.
        Next.js는 Vercel과 같은 플랫폼과 결합하여 서버리스 개발을 위한 탁월한 프레임워크를 제공합니다.
        
        이 연구에서는 Next.js API 라우트와 서버 컴포넌트를 사용하여 서버리스 백엔드 기능을 만드는 방법을 탐구했습니다.
        또한 Supabase, PlanetScale, Firebase와 같은 서버리스 데이터베이스 솔루션과의 통합 방법도 검토했습니다.
        
        이 연구는 콜드 스타트, 실행 시간 제한, 무상태성을 포함한 서버리스 애플리케이션에 대한 중요한 고려사항을 다루었습니다.
        또한 서버리스 함수를 최적화하고 환경 변수를 안전하게 관리하는 전략도 살펴보았습니다.
        
        추가적으로, 서버리스 환경에서 인증, 파일 업로드, 예약된 작업을 구현하는 방법과 모니터링 및 디버깅 기술도 탐구했습니다.
      `,
      keyTakeaways: [
        "Next.js API 라우트는 서버리스 함수를 만드는 간단한 방법을 제공합니다",
        "서버 컴포넌트는 클라이언트 측 JavaScript를 줄이고 성능을 향상시킵니다",
        "서버리스 데이터베이스는 서버리스 아키텍처를 보완합니다",
        "적절한 최적화로 콜드 스타트를 완화할 수 있습니다",
        "엣지 함수는 글로벌 애플리케이션에 대한 지연 시간을 줄입니다",
      ],
      codeExample: `
  // 데이터베이스 연결이 있는 Next.js API 라우트 예제
  import type { NextApiRequest, NextApiResponse } from 'next';
  import { createClient } from '@supabase/supabase-js';
  
  // Supabase 클라이언트 초기화
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'GET') {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ error: '제품을 가져오지 못했습니다' });
      }
    }
    
    return res.status(405).json({ error: '허용되지 않는 메소드' });
  }
      `,
      application:
        "전통적인 Express.js 백엔드를 Next.js API 라우트와 Supabase를 사용하는 서버리스 아키텍처로 마이그레이션했습니다. 이로 인해 호스팅 비용이 70% 절감되었고 Vercel의 엣지 네트워크를 활용하여 글로벌 성능이 향상되었습니다. 이제 애플리케이션은 인프라 관리 없이 수요에 따라 자동으로 확장됩니다.",
    },
    tags: ["Next.js", "Serverless", "Backend"],
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
