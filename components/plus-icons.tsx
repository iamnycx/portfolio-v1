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
        "bg-background absolute flex h-6 w-6 items-center justify-center opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100",
        position === "top-left" && "-top-3 -left-3",
        position === "top-right" && "-top-3 -right-3",
        position === "bottom-left" && "-bottom-3 -left-3",
        position === "bottom-right" && "-right-3 -bottom-3",
      )}
    >
      <div className="border-highlight absolute aspect-square h-3 w-3 border-2 border-dotted opacity-0 transition-opacity duration-150 ease-out group-hover:animate-[marker-flicker_500ms_ease-in-out_1] group-hover:opacity-100 motion-reduce:group-hover:animate-none" />
    </div>
  );
}
