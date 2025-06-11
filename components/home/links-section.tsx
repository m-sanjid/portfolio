"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
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
//   ];
// const social = [

  {
    title: "GitHub",
    href: "https://github.com/m-sanjid",
    isSocial:true
  },
  {
    title: "X",
    href: "https://x.com/dev_sanjid",
    isSocial:true
  },
]
  return (
    <div className="space-y-4">
      <h2 className="font-serif text-xl">Links</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ amount: 0.1, once: true }}
            key={link.title}
          >
            {link.isSocial?
            <Link href={link.href}
            target="_blank"
            className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="underline decoration-dashed underline-offset-4">
                {link.title}
              </span>
            </Link>
            :
            <Link
              href={link.href}
              className="group flex items-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="underline decoration-dashed underline-offset-4">
                {link.title}
              </span>
            </Link>
            }
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default LinksSection;
