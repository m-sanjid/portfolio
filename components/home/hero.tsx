import React from "react";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="py-6 md:py-10" aria-labelledby="hero-heading">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <MotionDiv
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <h1 id="hero-heading" className="text-lg md:text-2xl">
            Muhammed Sanjid
          </h1>
          <p className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-sm">
            Full-stack developer & Designer
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Image
            src="/images/hero.png"
            alt="Portrait of Muhammed Sanjid"
            width={100}
            height={100}
            className="z-20 h-16 w-16 overflow-hidden rounded-md bg-primary/5 object-cover"
          />
          <div
            className="absolute -inset-2 rounded-xl border border-dashed"
            aria-hidden="true"
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;
