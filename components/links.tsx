import Link from "next/link";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export default function Links() {
  const links = [
    {
      title: "email",
      href: "mailto:25nikmehta@gmail.com",
    },
    {
      title: "twitter",
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
    <div className="pb-16 space-y-8">
      <p className="text-center text-muted-foreground">feel free to reach out</p>
      <div className="flex justify-center gap-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="group flex items-center gap-1 border border-dotted px-2 py-1 text-center transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200 md:text-left"
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
