import { BoxIcon } from "lucide-react";

const stackData = {
  Web2: [
    { title: "TypeScript" },
    { title: "React" },
    { title: "Next" },
    { title: "Tailwind" },
    { title: "Motion" },
    { title: "Node" },
    { title: "PostgreSQL" },
    { title: "tRPC" },
    { title: "GraphQL" },
    { title: "WebSockets" },
    { title: "MongoDB" },
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
    { title: "Sentry" },
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
  ],
  Web3: [
    { title: "Solidity" },
    { title: "Rust" },
    { title: "Foundry" },
    { title: "MetaMask" },
    { title: "Chainlink" },
    { title: "EVM" },
    { title: "Smart Contracts" },
  ],
};

export default function Stack() {
  return (
    <div id="experience">
      <div className="grid space-y-8 py-8 md:grid-cols-4">
        {Object.entries(stackData).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h2 className="flex w-fit items-center gap-1 border border-dotted border-neutral-400 px-2 py-1 tracking-tighter lowercase">
              <BoxIcon size={16} strokeWidth={1.5} />
              {category}
            </h2>
            <div className="relative mx-6 flex flex-wrap gap-x-3.5 gap-y-2">
              <div className="absolute inset-y-0 left-0 -translate-x-4 -translate-y-4 border-l border-dotted border-neutral-400" />
              {items.map((data) => (
                <div key={data.title} className="relative">
                  <div className="absolute top-1/2 left-0 w-4 -translate-x-4 border-b border-dotted border-neutral-400" />
                  <div className="cursor-default border border-dotted border-neutral-600 px-2 py-1 lowercase transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200">
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
