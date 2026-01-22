import Link from "next/link";
import { TextScramble } from "./text-scramble";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export default function Links() {
  const links = [
    {
      title: "email",
      href: "mailto:25nikmehta@gmail.com",
    },
    {
      title: "x (twitter)",
      href: "https://x.com/ok_nycx",
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/in/nycx",
    },
    {
      title: "github",
      href: "https://github.com/iamnycx",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold tracking-tight">
        <TextScramble>links</TextScramble>
      </h1>
      <div className="flex-col space-x-8 space-y-4 py-4 md:flex md:flex-row md:py-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="group flex items-center gap-1 transition-colors duration-300 ease-in-out hover:text-orange-200"
          >
            {link.title}
            <SquareArrowOutUpRightIcon
              size={14}
              className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
