import PageHeader from "@/components/page-header";
import { projects } from "@/constants/projects";
import { ArrowUpRight } from "lucide-react";
import { Link } from "next-view-transitions";
import MotionDiv from "@/components/motion-div";
import Tags from "@/components/tags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhammed Sanjid",
  description: "A collection of projects I've worked on. Check out my work!",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <div className="space-y-8">
        <PageHeader
          title="Projects"
          description="A collection of projects I've worked on."
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              key={project.title}
              className="space-y-4"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-2"
              >
                <h2 className="text-base md:text-lg">{project.title}</h2>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {project.description}
                </p>
              </Link>
              <Tags tags={project.tech} />
              <div className="flex items-center gap-4">
                <Link
                  href={project.link}
                  className="group inline-flex items-center text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline decoration-dashed underline-offset-4">
                    View project
                  </span>
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
                    className="group inline-flex items-center text-xs text-muted-foreground transition-colors hover:text-foreground md:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="underline decoration-dashed underline-offset-4">
                      View code
                    </span>
                    <ArrowUpRight className="ml-1 h-3 w-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
              <div className="mt-8 border-b border-border" />
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
