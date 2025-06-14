"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Logo from "@/components/home/logo";

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-2xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="flex items-center space-x-4 text-xs font-light tracking-tight">
            <Link
              href="/blog"
              className={`transition-colors duration-100 ease-in-out hover:text-primary ${
                pathname.startsWith("/blog")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className={`transition-colors duration-100 ease-in-out hover:text-primary ${
                pathname === "/projects"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Projects
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
