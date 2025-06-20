"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionDiv from "@/components/motion-div";

const skills = [
  {
    name: "Frontend",
    items: [
      { name: "React", icon: <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width="16" height="16" /> },
      { name: "Next.js", icon: <img src="https://cdn.simpleicons.org/nextdotjs/FFFFFF" alt="Next.js" width="16" height="16" /> },
      { name: "TypeScript", icon: <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" width="16" height="16" /> },
      { name: "Tailwind CSS", icon: <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" width="16" height="16" /> },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" width="16" height="16" /> },
      { name: "Express", icon: <img src="https://cdn.simpleicons.org/express/FFFFFF" alt="Express" width="16" height="16" /> },
      { name: "PostgreSQL", icon: <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" width="16" height="16" /> },
      { name: "MongoDB", icon: <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" width="16" height="16" /> },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" width="16" height="16" /> },
      { name: "Docker", icon: <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" width="16" height="16" /> },
      { name: "AWS", icon: <img src="https://cdn.simpleicons.org/amazonaws/FFFFFF" alt="AWS" width="16" height="16" /> },
      { name: "Figma", icon: <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" width="16" height="16" /> },
    ],
  },
];

const SkillItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer relative overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Subtle hover background */}
        <motion.div
          className="absolute inset-0 bg-white/5 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Icon with subtle glow effect */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-7 h-7 rounded-md bg-white/10 backdrop-blur-sm"
          animate={{
            backgroundColor: isHovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
            boxShadow: isHovered ? "0 0 20px rgba(255,255,255,0.1)" : "0 0 0px rgba(255,255,255,0)"
          }}
          transition={{ duration: 0.2 }}
        >
          {item.icon}
        </motion.div>
        
        {/* Text with smooth transitions */}
        <motion.span
          className="relative z-10 text-sm font-medium text-gray-300"
          animate={{
            color: isHovered ? "#ffffff" : "#d1d5db",
            x: isHovered ? 2 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          {item.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

const SkillCategory = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group"
    >
      {/* Category header with minimal design */}
      <motion.div
        className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        <div className="w-1 h-1 bg-white rounded-full" />
        <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {skill.name}
        </h4>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
      </motion.div>

      {/* Skills grid with staggered animation */}
      <div className="space-y-1">
        {skill.items.map((item, itemIndex) => (
          <SkillItem
            key={item.name}
            item={item}
            index={itemIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <MotionDiv className="px-4 py-20">
      <div className="mx-auto max-w-2xl space-y-16">
        <PageHeader
          title="About Me"
          description="A glimpse into my journey and technical expertise."
        />

        <div className="space-y-12">
          {/* Bio section with improved typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and
                user experience. I thrive on building beautiful, functional, and
                performant web applications that solve real-world problems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in tech began with a deep curiosity for how things work,
                which has driven me to explore a wide array of technologies and
                frameworks. I'm a firm believer in lifelong learning and am
                always eager to expand my skill set and take on new challenges.
              </p>
            </div>
          </motion.div>

          {/* Redesigned Skills section */}
          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Technical Skills</h3>
              <p className="text-sm text-gray-500">Technologies I work with</p>
            </motion.div>

            {/* Skills grid with improved layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <SkillCategory
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Call to action with subtle enhancement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button asChild className="rounded-full relative overflow-hidden group">
                <Link href="/contact" className="relative z-10">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  Let's Connect
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MotionDiv>
  );
}