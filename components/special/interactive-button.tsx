import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@phosphor-icons/react";

type InteractiveHoverButtonProps =
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: InteractiveHoverButtonProps) {
  const content = (
    <>
      <div className="flex items-center justify-center gap-2">
        <div className="bg-highlight h-1 w-1 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRightIcon size={14} />
      </div>
    </>
  );

  const baseClassName = cn(
    "group bg-background border-muted relative rounded-full inline-flex w-auto cursor-pointer overflow-hidden border border-dashed p-2 px-6 text-center text-xs font-semibold uppercase",
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;

    return (
      <a className={baseClassName} href={href} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonOnlyProps =
    props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  const { type = "button", ...buttonProps } = buttonOnlyProps;

  return (
    <button type={type} className={baseClassName} {...buttonProps}>
      {content}
    </button>
  );
}
