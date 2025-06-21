"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Card } from "@/components/ui/card";

export default function ThreeDCardDemo() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="relative h-96 w-72"
    >
      <Card className="relative h-full w-full p-8">
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <h3 className="text-2xl font-bold">3D Card</h3>
          <p className="mt-4 text-muted-foreground">
            Move your mouse over this card to see it rotate in 3D space.
            The card follows your cursor movement with smooth spring animations.
          </p>
        </div>
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5"
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
        />
      </Card>
    </motion.div>
  );
} 