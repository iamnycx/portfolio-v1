"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-muted-foreground h-full w-10 cursor-pointer bg-radial transition-colors duration-300 ease-in-out hover:from-lime-400/10 hover:text-lime-400"
      aria-label="Copy code"
    >
      {copied ? (
        <Check
          size={18}
          className="w-full origin-center text-lime-400 transition-transform duration-300 ease-in-out"
        />
      ) : (
        <Copy
          size={18}
          className="w-full origin-center transition-transform duration-300 ease-in-out active:scale-50"
        />
      )}
    </button>
  );
}
