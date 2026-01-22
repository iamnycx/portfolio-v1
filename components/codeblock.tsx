"use client";

import { ClipboardCopy } from "lucide-react";

export default function CopyButton({ code }: { code: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(code)}
      className="h-full w-12 cursor-pointer border-dotted border-neutral-400 bg-radial text-neutral-400 transition-colors duration-300 ease-in-out group-hover:border-orange-200 hover:from-orange-200/10 hover:text-orange-200"
    >
      <ClipboardCopy
        strokeWidth={1}
        size={18}
        className="w-full origin-center transition-transform duration-300 ease-in-out hover:rotate-12"
      />
    </button>
  );
}
