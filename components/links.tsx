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
      title: "x",
      href: "https://x.com/ok_nycx",
    },
    {
      title: "github",
      href: "https://github.com/iamnycx",
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/in/nycx",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold tracking-tight">
        <TextScramble>links</TextScramble>
      </h1>
      <div className="flex-col justify-center space-y-4 space-x-4 py-4 md:flex md:flex-row md:justify-start md:py-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="group flex items-center gap-1 py-2 text-center transition-colors duration-300 ease-in-out hover:text-orange-200 md:text-left"
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
