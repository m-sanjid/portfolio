"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.div variants={childVariants}>
        <Link
          href="/"
          className="group flex items-center text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span>Back to home</span>
        </Link>
      </motion.div>

      <motion.h1 variants={childVariants} className="text-lg">
        {title}
      </motion.h1>

      <motion.p variants={childVariants} className="text-muted-foreground">
        {description}
      </motion.p>
    </motion.div>
  );
};

export default PageHeader;
