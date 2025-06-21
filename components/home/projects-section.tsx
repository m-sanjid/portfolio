import React from "react";
import { projects } from "@/constants/projects";
import SectionHeader from "@/components/section-header";
import { ArrowUpRight } from "lucide-react";
import MotionDiv from "@/components/motion-div";
import { Link } from "next-view-transitions";
import Tags from "../tags";

const ProjectsSection = () => {
  const project = projects.slice(0, 3);
  return (
    <div>
      <SectionHeader
        title="Projects"
        description="A collection of projects I've worked on."
      />
      <div className="space-y-8 divide-y">
        {project.map((project, index) => (
          <MotionDiv
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            key={project.title}
            className="group"
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              className="space-y-4"
            >
              <h2 className="mb-1 mt-4 text-base md:mt-8 md:text-lg">
                {project.title}
              </h2>
              <p className="text-xs font-light text-muted-foreground md:text-sm">
                {project.description}
              </p>
              <Tags tags={project.tech} />
              <div className="mt-2 flex items-center text-xs text-muted-foreground transition-colors hover:text-foreground">
                <span className="underline decoration-dashed underline-offset-4">
                  View project
                </span>
                <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-200 ease-in-out group-hover:translate-x-2" />
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
