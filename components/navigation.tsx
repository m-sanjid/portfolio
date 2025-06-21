"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "@/components/home/logo";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Crafts",
      href: "/craft",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ];

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-2xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center space-x-4 text-xs font-light tracking-tight">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-100 ease-in-out hover:text-primary ${
                  pathname.startsWith(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                aria-current={
                  pathname.startsWith(item.href) ? "page" : undefined
                }
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
