import React from "react";
import { projects } from "@/constants/projects";
import SectionHeader from "@/components/section-header";
import { ArrowUpRight } from "lucide-react";
import MotionDiv from "../motion-div";
import { Link } from "next-view-transitions";

const ProjectsSection = () => {
  const project = projects.slice(0, 3);
  return (
    <div>
      <SectionHeader
        title="Projects"
        description="A collection of projects I've worked on."
      />
      <div className="border-t border-border" />
      <div className="space-y-8">
        {project.map((project, index) => (
          <MotionDiv
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            key={project.title}
            className="group space-y-4"
          >
            <Link target="_blank" rel="noopener noreferrer" href={project.link}>
              <h2 className="mb-1 mt-4 md:mt-8 md:text-lg">{project.title}</h2>
              <p className="text-sm font-light text-muted-foreground md:text-base">
                {project.description}
              </p>
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
              <div className="mt-2 flex items-center text-xs text-muted-foreground transition-colors hover:text-foreground">
                <span className="underline decoration-dashed underline-offset-4">
                  View project
                </span>
                <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-200 ease-in-out group-hover:translate-x-2" />
              </div>
              {index < projects.length - 1 && (
                <div className="mt-8 border-t border-border" />
              )}
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
