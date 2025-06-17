import React from "react";
import MotionDiv from "@/components/motion-div";

const Bio = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-lg">About</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I specialize in building full-stack web applications with React,
          Next.js, and Node.js. I'm passionate about clean code, user
          experience, and building products that solve real problems.
        </p>
        <p>
          When I'm not coding, you'll find me writing, reading, or exploring new
          coffee shops in the city.
        </p>
      </div>
    </MotionDiv>
  );
};

export default Bio;
