import Link from "next/link";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export default function Links() {
  const links = [
    {
      title: "Email",
      href: "mailto:25nikmehta@gmail.com",
    },
    {
      title: "X.com",
      href: "https://x.com/ok_nycx",
    },
    {
      title: "GitHub",
      href: "https://github.com/iamnycx",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/nycx",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/nikhil_meht_a/",
    },
  ];

  return (
    <div className="space-y-8 pb-16">
      <p className="text-center text-neutral-400">You can find me here</p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="group flex items-center gap-1 border border-dotted px-2 py-1 text-center transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200"
          >
            {link.title}
            <SquareArrowOutUpRightIcon
              size={14}
              className="opacity-25 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
