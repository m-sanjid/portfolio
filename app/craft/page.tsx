"use client";

import React from "react";
import PageHeader from "@/components/page-header";
import { useComponents } from "@/hooks/use-components";
import { motion } from "motion/react";
import ComponentCard from "@/components/component-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CraftPage = () => {
  const { components } = useComponents();

  return (
    <div className="px-4 py-20">
      <div className="space-y-12">
        <PageHeader
          title="Craft"
          description="A collection of handcrafted UI components with beautiful animations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6"
        >
          {components.map((component) => (
            <ComponentCard
              key={component.id}
              component={component}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CraftPage;
