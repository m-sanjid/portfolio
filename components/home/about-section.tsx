import React from "react";
import MotionDiv from "@/components/motion-div";

const AboutSection = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3 }}
    >
      <p>
        I'm Muhammed Sanjid, a design engineer with a passion for building web
        applications with modern technologies. I write about my experiences,
        learnings, and experiments in the field of software engineering and
        design.
      </p>
      <p>
        I'm currently focused on building accessible, human-centered products at{" "}
        <a href="#" className="underline decoration-dashed underline-offset-4">
          Studio
        </a>
        .
      </p>
    </MotionDiv>
  );
};

export default AboutSection;
