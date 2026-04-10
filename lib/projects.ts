export type PROJECT_CATEGORY =
  | "frontend"
  | "backend"
  | "fullstack"
  | "blockchain";

export interface Project {
  name: string;
  type: string;
  category: PROJECT_CATEGORY;
  stack: string[];
  site?: string;
  repo?: string;
  description: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Tarun Thusu Website",
    type: "Freelance Project",
    category: "frontend",
    featured: true,
    stack: ["NextJs", "Motion.dev", "Tailwind", "TypeScript"],
    site: "https://tarun-thusu.vercel.app/",
    description:
      "Working on a client portfolio project using nextjs. implemented micro-interactions and animations using motion/react, nextjs dynamic routes.",
  },
  {
    name: "Calender Component",
    type: "Frontend Project",
    category: "frontend",
    featured: true,
    stack: ["NextJs", "Motion.dev", "Zustand", "TypeScript"],
    site: "https://calender-one-self.vercel.app/",
    repo: "https://github.com/iamnycx/calender",
    description:
      "A polished Next.js calendar with dual modes for flexible viewing. Features smooth transitions, theme-aware visuals, and sticky notes for days, months, and ranges.",
  },
  {
    name: "Bug Tracker",
    type: "Full Stack Project",
    category: "fullstack",
    featured: false,
    stack: ["React", "Flask", "TypeScript", "PostgreSQL", "Docker"],
    site: "https://bug-tracker-tau-liart.vercel.app",
    repo: "https://github.com/iamnycx/bug-tracker",
    description:
      "Production-minded bug tracker with a strict lifecycle state machine, role-based access control, and a Kanban-first UI.",
  },
  {
    name: "Support Ticket System",
    type: "Full Stack Project",
    category: "fullstack",
    featured: false,
    stack: ["React", "DRF", "OpenAI", "PostgreSQL", "Docker"],
    site: "https://tickets-manager-phi.vercel.app/",
    repo: "https://github.com/iamnycx/tickets-manager",
    description:
      "A modern support ticket system built with React (TypeScript) and Django REST Framework, featuring LLM-based ticket classification and prioritization.",
  },
  {
    name: "BlackTrack",
    type: "Full Stack",
    category: "fullstack",
    featured: false,
    stack: ["NextJS", "Node", "Drizzle", "Web3", "Ether.js", "Metamask"],
    site: "https://blacktrack-eta.vercel.app/",
    repo: "https://www.github.com/iamnycx/blacktrack",
    description:
      "Web3-enabled expense tracking application with MetaMask wallet authentication, implementing secure, password-less user access",
  },
  {
    name: "Sandscape",
    type: "Hackathon Project",
    category: "fullstack",
    featured: false,
    stack: ["NextJS", "FastAPI", "Docker", "Machine Learning"],
    repo: "https://www.github.com/iamnycx/sandscape",
    description:
      "Developed the Backend and Frontend for sand grain analysis system, dockerized each service for seamless local setup and deployment",
  },
  {
    name: "Lume - Social Network",
    type: "Full Stack Project",
    category: "fullstack",
    featured: false,
    stack: ["React", "Django", "Djoser", "Docker", "PostgreSQL"],
    site: "https://social-network-eight-eta.vercel.app",
    repo: "https://github.com/iamnycx/lume",
    description:
      "Full-stack social media app with React for frontend and Django for backend. implemented JWT auth, images, interactions (like/dislike)",
  },
  {
    name: "Therapist Landing Page",
    type: "Frontend Project",
    category: "frontend",
    featured: false,
    stack: ["NextJS", "TailwindCSS", "Motion.dev"],
    site: "https://maya-website-kappa.vercel.app/",
    repo: "https://github.com/iamnycx/maya-website",
    description:
      "A minimalist therapist landing page emphasizing clarity, calm visuals, and smooth animations.",
  },
  {
    name: "Tinta - Text to Pallete",
    type: "Mini Project",
    category: "fullstack",
    featured: false,
    stack: ["NextJS", "Gemini", "PostgreSQL"],
    site: "https://tinta-flax.vercel.app",
    repo: "https://github.com/iamnycx/tinta",
    description:
      "A simple project to generate a color pallete from simple text prompts using large language models. Used Gemini as LLM provider",
  },
  {
    name: "Fund-Me",
    type: "Smart-Contract",
    category: "blockchain",
    featured: false,
    stack: ["Solidity", "Foundry", "Chainlink", "Ethereum"],
    repo: "https://github.com/iamnycx/fund-me",
    description:
      "A Decentralized crowdfunding smart Contract that enforces a minimum USD-based ETH contribution using Chainlink price feeds",
  },
];
