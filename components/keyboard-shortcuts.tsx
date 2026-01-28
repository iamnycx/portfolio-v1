import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KeyboardShortcuts({
  setCommandPaletteOpen,
}: {
  setCommandPaletteOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === ":") {
        setCommandPaletteOpen(true);
        e.preventDefault();
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false);
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router, setCommandPaletteOpen]);

  return null;
}
