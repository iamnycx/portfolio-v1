import { BoxIcon } from "lucide-react";

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
    { title: "Google Cloud" },
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

export default function Stack() {
  return (
    <div id="experience">
      <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(stackData).map(([category, items]) => (
          <div key={category}>
            <h2 className="from-accent/30 flex w-fit items-center gap-1 border border-dotted border-neutral-400 bg-linear-to-bl to-50% px-2 py-1 tracking-tighter">
              <BoxIcon size={16} strokeWidth={1.5} />
              {category}
            </h2>
            <div className="relative ml-6 flex flex-wrap gap-x-3.5 gap-y-2 pt-4">
              <div className="absolute inset-y-0 left-0 -translate-x-4 border-l border-dotted border-neutral-400" />
              {items.map((data) => (
                <div
                  key={data.title}
                  className="from-accent/30 relative bg-linear-to-bl to-50%"
                >
                  <div className="absolute top-1/2 left-0 w-4 -translate-x-4 border-b border-dotted border-neutral-400" />
                  <div className="cursor-default border border-dotted border-neutral-600 px-2 py-1 transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200">
                    {data.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
