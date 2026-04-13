"use client";

import { motion } from "motion/react";
import { Package } from "pixelarticons/react";

const stackData = {
  Web2: [
    { title: "TypeScript" },
    { title: "React" },
    { title: "Next" },
    { title: "Tailwind" },
    { title: "Motion" },
    { title: "Node" },
    { title: "Hono.js" },
    { title: "PostgreSQL" },
    { title: "tRPC" },
    { title: "GraphQL" },
    { title: "WebSockets" },
    { title: "MongoDB" },
    { title: "Redis" },
    { title: "Python" },
    { title: "Django" },
    { title: "FastAPI" },
  ],
  DevOps: [
    { title: "Docker" },
    { title: "Linux" },
    { title: "CI/CD" },
    { title: "Monorepos" },
    { title: "Cloudflare" },
    { title: "AWS" },
    { title: "Vercel" },
    { title: "Netlify" },
  ],
  Tools: [
    { title: "Git" },
    { title: "GitHub" },
    { title: "GitLab" },
    { title: "Figma" },
    { title: "Bruno" },
    { title: "Nvim" },
    { title: "Postman" },
    { title: "Notion" },
    { title: "Posthog" },
    { title: "Sentry" },
  ],
  Web3: [
    { title: "Solidity" },
    { title: "Rust" },
    { title: "Foundry" },
    { title: "MetaMask" },
    { title: "Chainlink" },
    { title: "EVM" },
    { title: "Smart Contracts" },
    { title: "Ethers.js" },
  ],
};

const revealOnView = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 2,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeOut" as const,
    duration: 0.35,
    delay,
  },
  viewport: { once: true, margin: "0px" },
});

export default function Stack() {
  return (
    <div id="stack" className="px-4 py-16 md:px-6">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {Object.entries(stackData).map(([category, items], categoryIndex) => (
          <motion.div key={category} {...revealOnView(categoryIndex * 0.12)}>
            <h2 className="from-accent/30 border-muted-foreground relative ml-10 flex w-fit items-center gap-1 border border-dotted bg-linear-to-bl to-50% px-2 py-1 font-bold tracking-wide">
              <Package className="size-4 stroke-1" />
              <span className="translate-y-0.5">{category}</span>
              <div className="border-muted-foreground absolute top-0 -left-0.5 h-0.5 w-10.5 origin-left rotate-135 border-t border-dashed" />
            </h2>
            <div className="relative ml-6 flex flex-wrap gap-x-3.5 gap-y-2 pt-4">
              <div className="border-muted-foreground absolute inset-y-0 left-0 -translate-x-4 border-l border-dashed" />
              {items.map((data, itemIndex) => (
                <motion.div
                  key={data.title}
                  {...revealOnView(
                    Math.min(categoryIndex * 0.08 + itemIndex * 0.015, 0.3),
                  )}
                  className="from-accent/30 relative bg-linear-to-bl to-50% tracking-wide"
                >
                  <div className="border-muted-foreground absolute top-1/2 left-0 w-4 -translate-x-4 border-b border-dashed" />
                  <div className="border-muted-foreground hover:border-highlight hover:text-highlight cursor-default border border-dotted px-2 py-1 transition-colors duration-300 ease-in-out">
                    {data.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
