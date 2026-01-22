"use client";

export default function Footer() {
  const currentDate = new Date()
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toLowerCase();

  return (
    <>
      <div className="mx-auto max-w-6xl border-x border-dotted border-neutral-400 px-4 md:px-6">
        <div className="h-6 border-x border-t border-dotted border-neutral-600" />
      </div>
      <div className="mx-auto max-w-6xl border-x border-t border-dotted border-neutral-400 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between py-4 md:flex-row">
          <p className="text-neutral-400">
            <span>println!</span>
            <span>{"("}</span>
            <span className="text-white">{"'thanks for visiting!'"}</span>
            <span>{");"}</span>
          </p>
          <p className="text-neutral-400">
            <span>updated: </span>
            <span>{currentDate}</span>
          </p>
        </div>
      </div>
    </>
  );
}
