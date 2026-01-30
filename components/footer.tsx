"use client";

export default function Footer() {
  return (
    <>
      <div className="mx-auto max-w-6xl border-x border-dotted border-neutral-400 px-4 md:px-6">
        <div className="h-6 border-x border-t border-dotted border-neutral-600" />
      </div>
      <div className="mx-auto max-w-6xl border-x border-t border-dotted border-neutral-400 px-2 md:px-6">
        <div className="flex min-w-0 flex-col items-center justify-between gap-2 overflow-hidden py-4 sm:flex-row sm:gap-0">
          <p className="shrink-0 text-neutral-400 md:mr-2">
            <span>println!</span>
            <span>{"("}</span>
            <span className="text-neutral-500">{"'{}', "}</span>
            <span className="text-orange-200">{"total_visitors"}</span>
            <span>{");"}</span>
          </p>

          <div className="flex w-full max-w-full min-w-0 flex-1 items-center overflow-hidden sm:w-auto">
            <div className="text-muted-foreground/50 min-w-0 flex-1 overflow-hidden whitespace-nowrap">
              ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
            </div>
            <span className="shrink-0 px-1 md:pl-2">10</span>
            <div className="text-muted-foreground/50 min-w-0 flex-1 overflow-hidden whitespace-nowrap md:hidden">
              ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
