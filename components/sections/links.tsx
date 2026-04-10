import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

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
  ];

  return (
    <div id="links" className="space-y-8 pb-16">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="group hover:border-highlight hover:text-highlight flex items-center gap-1 border border-dotted px-2 py-1 text-center uppercase transition-colors duration-300 ease-in-out"
          >
            {link.title}
            <ArrowUpRightIcon
              weight="bold"
              size={18}
              className="opacity-25 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
