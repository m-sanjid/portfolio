"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const LinksSection = () => {
  const links = [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "GitHub",
      href: "https://github.com/m-sanjid",
      isSocial: true,
    },
    {
      title: "X",
      href: "https://x.com/dev_sanjid",
      isSocial: true,
    },
  ];
  return (
    <section aria-labelledby="links-heading">
      <h2 id="links-heading" className="text-base md:text-lg">
        Links
      </h2>
      <nav aria-label="Quick navigation links">
        <ul className="space-y-2" role="list">
          {links.map((link, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ amount: 0.1, once: true }}
              key={link.title}
            >
              {link.isSocial ? (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`Visit ${link.title} (opens in new tab)`}
                >
                  <span className="text-xs underline decoration-dashed underline-offset-4 md:text-sm">
                    {link.title}
                  </span>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="mr-2 h-3 w-3 opacity-0 transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`Navigate to ${link.title} page`}
                >
                  <span className="text-xs underline decoration-dashed underline-offset-4 md:text-sm">
                    {link.title}
                  </span>
                  <ArrowRight
                    strokeWidth={1.5}
                    className="mr-2 h-3 w-3 opacity-0 transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default LinksSection;
