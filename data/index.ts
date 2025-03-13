"use client"

// Personal Information
export const personalInfo = {
  name: "Your Name",
  title: "Frontend Developer",
  email: "your.email@example.com",
  location: "San Francisco, CA",
  university: "University of Technology",
  github: "https://github.com/yourusername",
  githubUsername: "yourusername",
  bio: "Building beautiful, responsive, and user-friendly web applications with modern technologies.",
}

// Skills
export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Responsive Design",
  "UI/UX",
]

// Projects
export const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer data.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    sourceUrl: "#",
    // Extended information for project detail page
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
    screenshots: [
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Firebase", "Material UI"],
    demoUrl: "#",
    sourceUrl: "#",
    // Extended information for project detail page
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
    screenshots: [
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
    ],
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates marketing content, blog posts, and social media updates.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    demoUrl: "#",
    sourceUrl: "#",
    // Extended information for project detail page
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
    screenshots: [
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
      "/placeholder.svg?height=200&width=350",
    ],
  },
]

// Study Items
export const studyItems = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description:
      "A deep dive into advanced React patterns including compound components, render props, and custom hooks.",
    tags: ["React", "JavaScript", "Frontend"],
    url: "#",
    // Extended information for study detail page
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
  {
    id: 2,
    title: "Performance Optimization in React",
    description:
      "Techniques and strategies for optimizing React application performance, including code splitting and memoization.",
    tags: ["React", "Performance", "Optimization"],
    url: "#",
    // Extended information for study detail page
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
  {
    id: 3,
    title: "State Management with Redux Toolkit",
    description:
      "An exploration of modern Redux development using Redux Toolkit to simplify state management in React applications.",
    tags: ["Redux", "React", "State Management"],
    url: "#",
    // Extended information for study detail page
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
  {
    id: 4,
    title: "Serverless Architecture with Next.js",
    description:
      "A study on building serverless applications using Next.js, Vercel, and various serverless database solutions.",
    tags: ["Next.js", "Serverless", "Backend"],
    url: "#",
    // Extended information for study detail page
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
]

// Navigation Links
export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#study", label: "Study" },
  { href: "#contact", label: "Contact" },
]

