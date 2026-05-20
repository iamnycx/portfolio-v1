"use client";

import { Check, Copy } from "pixelarticons/react";
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
      className="text-neutral-400 hover:from-yellow-400/10 hover:text-yellow-400 h-full w-10 cursor-pointer bg-radial transition-colors duration-300 ease-in-out"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="text-yellow-400 size-5 w-full origin-center transition-transform duration-300 ease-in-out" />
      ) : (
        <Copy className="size-5 w-full origin-center transition-transform duration-300 ease-in-out active:scale-50" />
      )}
    </button>
  );
}
