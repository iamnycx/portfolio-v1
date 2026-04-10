"use client";

import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
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
      className="text-muted-foreground hover:from-highlight/10 hover:text-highlight h-full w-10 cursor-pointer bg-radial transition-colors duration-300 ease-in-out"
      aria-label="Copy code"
    >
      {copied ? (
        <CheckIcon
          weight="bold"
          size={18}
          className="text-highlight w-full origin-center transition-transform duration-300 ease-in-out"
        />
      ) : (
        <CopySimpleIcon
          weight="bold"
          size={18}
          className="w-full origin-center transition-transform duration-300 ease-in-out active:scale-50"
        />
      )}
    </button>
  );
}
