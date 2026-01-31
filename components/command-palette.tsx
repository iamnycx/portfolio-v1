import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CommandPalette() {
  const [command, setCommand] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("enter a command");
  const router = useRouter();

  const runCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [cmd, ...args] = command.trim().split(" ");

    switch (cmd) {
      case "exit":
        setIsOpen(false);
        break;
      case "cd":
        if (args.length > 0) {
          const destination = args[0];
          if (destination === "home") {
            setMessage("navigating to: home");
            router.push("/");
          } else if (["projects", "blog"].includes(destination)) {
            setMessage(`navigating to: ${destination}`);
            router.push(`/${destination}`);
          } else {
            setMessage(`invalid destination: ${destination}`);
          }
        }
        break;
      default:
        setMessage(`unknown command: ${cmd}`);
    }

    setCommand("");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="command-palette"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{
              ease: "easeInOut",
            }}
            className="border-muted-foreground bg-background fixed inset-x-0 bottom-0 z-50 mx-auto border border-b-0 border-dotted px-6 py-4 md:max-w-6xl"
          >
            <div className="relative h-full w-full">
              <form onSubmit={runCommand}>
                <input
                  onChange={(e) => setCommand(e.target.value)}
                  value={command}
                  autoFocus
                  placeholder={"cd <destination> (exit to close)"}
                  className="ml-4 w-1/2 bg-transparent ring-0 outline-0"
                />
                <span className="text-muted-foreground absolute left-0">
                  {":"}
                </span>
              </form>
              <div className="text-muted-foreground absolute inset-y-0 right-0 flex items-center">
                {message}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
