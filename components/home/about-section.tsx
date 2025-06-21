import React from "react";
import MotionDiv from "@/components/motion-div";
import { Link } from "next-view-transitions";
import { IconChevronRight } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Muhammed Sanjid",
  description:
    "About Muhammed Sanjid, a design engineer passionate about crafting beautiful, performant web experiences that blend clean code with visual finesse.",
};

const AboutSection = () => {
  return (
    <section aria-labelledby="about-heading">
      <MotionDiv
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="flex max-w-xl flex-col gap-4 text-xs leading-relaxed md:text-sm"
      >
        <h2 id="about-heading" className="sr-only">
          About Me
        </h2>
        <p>
          I'm <strong>Muhammed Sanjid</strong> — a design engineer passionate
          about crafting beautiful, performant web experiences that blend clean
          code with visual finesse. I bring ideas to life using React, Next.js,
          Tailwind, Framer Motion, and Figma — building smooth, interactive
          interfaces that feel as good as they look.
        </p>
        <p>
          I obsess over the little things — from typography and
          micro-interactions to accessibility and UX flow. When I'm not deep in
          code or pushing pixels, I'm sketching ideas, writing, or exploring the
          city's best coffee spots.
        </p>
        <p>
          I'm currently open to full-time roles and available for select
          freelance projects. Let's build something meaningful together.
          <Link
            href="/contact"
            className="group ml-2 inline-flex items-center underline decoration-dashed underline-offset-4"
            aria-label="Contact me for collaboration opportunities"
          >
            <span>contact me</span>
            <IconChevronRight
              className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        </p>
      </MotionDiv>
    </section>
  );
};

export default AboutSection;
