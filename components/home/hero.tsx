import React from "react";
import MotionDiv from "@/components/motion-div";

const Hero = () => {
  return (
    <section id="hero" className="py-6 md:py-10">
      <div className="mx-auto max-w-2xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <h1 className="text-lg md:text-2xl">Muhammed Sanjid</h1>
          <p className="text-muted-foreground">
            Full-stack developer & Designer
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;
