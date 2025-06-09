"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/page-header";
import { projects } from "@/constants/projects";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "next-view-transitions";

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="space-y-2">
        <PageHeader
          title="Projects"
          description="A collection of projects I've worked on."
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={project.title}
              className="space-y-4"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <h2 className="font-serif text-xl">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.link}
                  className="inline-flex group items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline decoration-dashed underline-offset-4">
                    View project
                  </span>
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                </Link>
                {project.github && 
                <Link
                  href={project.github}
                  className="inline-flex group items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline decoration-dashed underline-offset-4">
                    View code
                  </span>
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                </Link>
                }
              </div>
              <div className="mt-8 border-b border-border" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
