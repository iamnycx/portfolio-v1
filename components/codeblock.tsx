"use client";

import { ClipboardCopy, Check } from "lucide-react";
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
      className="h-full w-12 cursor-pointer border-dotted border-neutral-400 bg-radial text-neutral-400 transition-colors duration-300 ease-in-out group-hover:border-orange-200 hover:from-orange-200/10 hover:text-orange-200"
      aria-label="Copy code"
    >
      {copied ? (
        <Check
          strokeWidth={1}
          size={18}
          className="w-full origin-center text-orange-200 transition-transform duration-300 ease-in-out"
        />
      ) : (
        <ClipboardCopy
          strokeWidth={1}
          size={18}
          className="w-full origin-center transition-transform duration-300 ease-in-out hover:rotate-12"
        />
      )}
    </button>
  );
}
