import { project } from "@/app/@types/projects";
import { HorizontalDivider } from "@/app/components/divider/horizonta";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SectionTitle } from "../../../section-title";
import { ProjectCard } from "./project-card";

interface HighLightedProjectProps {
  projects: project[];
}

export const HighLightedProject = ({ projects }: HighLightedProjectProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Pojetos em destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href="/projects">
            Ver todos <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
