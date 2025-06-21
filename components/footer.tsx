"use client";

import { Link } from "next-view-transitions";
import { motion } from "motion/react";
import { IconHeart } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { socialLinks } from "@/constants/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/craft", label: "Crafts" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative my-20 border-t bg-background/50 backdrop-blur-sm">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

      <div className="relative mx-auto max-w-2xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            staggerChildren: 0.1,
            ease: "easeOut",
          }}
          className="space-y-8"
        >
          {/* Main footer content */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left section - Brand and description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary" />
                <span className="text-lg font-semibold tracking-tight">
                  Muhammed Sanjid
                </span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Full-stack developer and designer crafting digital experiences
                with modern technologies and thoughtful design.
              </p>
            </div>

            {/* Right section - Quick links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium tracking-tight">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-label={link.label}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom section */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
            {/* Social links and theme toggle */}
            <div className="flex items-center space-x-4">
              {/* Social links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div className="rounded-lg p-2 transition-colors hover:bg-muted/50">
                      <social.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Theme toggle */}
              <div className="h-4 w-px bg-border" />
              <ThemeToggle />
            </div>
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Muhammed Sanjid. Made with</span>
              <IconHeart className="h-4 w-4 text-red-500" />
              <span>and Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
