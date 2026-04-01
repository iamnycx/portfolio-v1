import { cn } from "@/lib/utils";

export default function PlusIcons() {
  return (
    <>
      <Marker position="top-left" />
      <Marker position="top-right" />
      <Marker position="bottom-left" />
      <Marker position="bottom-right" />
    </>
  );
}

function Marker({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  return (
    <div
      className={cn(
        "bg-background absolute flex h-6 w-6 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
        position === "top-left" && "-top-3 -left-3",
        position === "top-right" && "-top-3 -right-3",
        position === "bottom-left" && "-bottom-3 -left-3",
        position === "bottom-right" && "-right-3 -bottom-3",
      )}
    >
      <div className="absolute aspect-square h-3 w-3 border-dotted border-2 border-lime-400 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </div>
  );
}
