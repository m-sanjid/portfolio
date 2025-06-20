"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { Home, BookOpen, User, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/about", icon: User, label: "About" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 w-[280px] -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25,
          delay: 0.1
        }}
        className="relative"
      >
        <div className="relative rounded-[32px] bg-black/40 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          
          {/* Subtle inner glow */}
          <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          
          <motion.div
            className="absolute top-3 right-3 w-1 h-1 bg-red-500 rounded-full"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Navigation items */}
          <div className="flex items-center justify-center p-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const isHovered = hoveredItem === index;
              
              return (
                <div key={item.href} className="relative">
                  {/* Tooltip with Nothing OS style */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: -60, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                        className="absolute -translate-x-1/2 pointer-events-none"
                      >
                        <div className="relative">
                          <div className="bg-black/90 text-white/90 text-xs font-normal px-3 py-2 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl">
                            {item.label}
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-px">
                            <div className="w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10"></div>
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
                    <Link href={item.href} className="relative block">
                      {/* Active state background */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 rounded-[24px] bg-white/10 border border-white/[0.15]"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Hover state background */}
                      <motion.div
                        className={`relative rounded-[24px] p-4 transition-colors duration-200 ${
                          !isActive ? "hover:bg-white/[0.05]" : ""
                        }`}
                        animate={isActive ? {
                          backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,0.02)", "rgba(255,255,255,0)"]
                        } : {}}
                        transition={{
                          duration: 4,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div
                          animate={isActive ? {
                            y: [0, -1, 0]
                          } : {}}
                          transition={{
                            duration: 3,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          <item.icon
                            className={`h-5 w-5 transition-all duration-300 ${
                              isActive 
                                ? "text-white stroke-[1.5]" 
                                : "text-white/60 hover:text-white/80 stroke-[1.5]"
                            }`}
                          />
                        </motion.div>

                        {/* Active state indicator dot */}
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/80 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                              delay: 0.1
                            }}
                          />
                        )}
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
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none blur-sm" />
      </motion.div>
    </nav>
  );
}