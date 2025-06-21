"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import {
  IconBook,
  IconHome,
  IconUser,
  IconMail,
  IconPalette,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const navItems = [
    { href: "/", icon: IconHome, label: "home" },
    { href: "/blog", icon: IconBook, label: "blog" },
    { href: "/about", icon: IconUser, label: "about" },
    { href: "/contact", icon: IconMail, label: "contact" },
    { href: "/craft", icon: IconPalette, label: "craft" },
  ];

  return (
    <nav
      className="fixed bottom-8 left-1/2 z-30 w-fit max-w-md -translate-x-1/2"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          delay: 0.1,
        }}
        className="relative"
      >
        <div className="relative z-40 rounded-[32px] border border-white/[0.08] bg-black/40 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
          {/* Subtle inner glow */}
          <div className="pointer-events-none absolute inset-[1px] rounded-[31px] bg-gradient-to-b from-white/[0.03] to-transparent" />

          {/* Navigation items */}
          <div className="flex items-center justify-center p-2" role="tablist">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const isHovered = hoveredItem === index;

              return (
                <div key={item.href} className="relative">
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: -46, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="pointer-events-none absolute z-0 -translate-x-1/2"
                        aria-hidden="true"
                      >
                        <div className="relative">
                          <div className="rounded-2xl border bg-primary px-2 py-px text-xs font-bold tracking-tight text-primary-foreground shadow-xl backdrop-blur-xl">
                            {item.label}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="px-2"
                  >
                    <Link
                      href={item.href}
                      className="relative block"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Navigate to ${item.label} page`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {/* Active state background */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 rounded-[24px] border border-white/[0.15] bg-white/10"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                            aria-hidden="true"
                          >
                            <div className="absolute right-2 top-0 h-1 w-1 animate-pulse rounded-full bg-red-500" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Hover state background */}
                      <motion.div
                        className={`relative rounded-[24px] p-4 transition-colors duration-200 ${
                          !isActive ? "hover:bg-white/[0.05]" : ""
                        }`}
                        animate={
                          isActive
                            ? {
                                backgroundColor: [
                                  "rgba(255,255,255,0)",
                                  "rgba(255,255,255,0.02)",
                                  "rgba(255,255,255,0)",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 4,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          animate={
                            isActive
                              ? {
                                  y: [0, -1, 0],
                                }
                              : {}
                          }
                          transition={{
                            duration: 3,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut",
                          }}
                        >
                          <item.icon
                            className={`h-5 w-5 transition-all duration-300 ${
                              isActive
                                ? "stroke-[1.5] text-white"
                                : "stroke-[1.5] text-white/60 hover:text-white/80"
                            }`}
                            aria-hidden="true"
                          />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>

        {/* Outer glow effect */}
        <div className="pointer-events-none absolute -inset-2 z-0 rounded-[32px] bg-gradient-to-b from-white/[0.02] to-transparent blur-sm" />
      </motion.div>
    </nav>
  );
}
