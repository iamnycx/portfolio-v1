import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function CommandPalette() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [command, setCommand] = useState("");

  const runCommand = () => {
    if (command === "help") {
      setHelpOpen(true);
    }
  };

  return (
    <div className="bg-background/10 absolute inset-0 z-50 backdrop-blur-xs">
      <AnimatePresence>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="bg-background border-muted-foreground absolute inset-x-80 top-1/2 z-50 mx-auto -translate-y-1/2 border border-dotted px-6 py-4"
        >
          <input
            onChange={(e) => setCommand(e.target.value)}
            autoFocus
            placeholder="enter a command or type help (esc for exit)"
            className="ml-4 w-1/2 bg-transparent ring-0 outline-0"
          />
          <span className="absolute left-6 text-neutral-500">{":"}</span>
        </motion.div>
      </AnimatePresence>
      {helpOpen && <CommandHelper />}
    </div>
  );
}

function CommandHelper() {
  const commands = [
    {
      command: "cd",
      arguments: ["home", "projects", "blog"],
    },
  ];

  return (
    <div className="to-accent/20 fixed inset-x-56 inset-y-28 border border-dotted border-neutral-400 bg-radial from-50% p-8 shadow-2xl backdrop-blur-lg">
      <h1 className="text-xl font-bold">available commands</h1>
      <div className="my-6">
        {commands.map((cmd) => (
          <div key={cmd.command} className="flex gap-4">
            <h2 className="font-bold text-purple-400">: {cmd.command}</h2>
            <div className="space-y-2">
              {cmd.arguments.map((arg) => (
                <h3 key={arg}>{arg}</h3>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
