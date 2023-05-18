import { HorizontalDivider } from "@/app/components/divider/horizonta";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SectionTitle } from "../../../section-title";
import { ProjectCard } from "./project-card";

export const HighLightedProject = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Pojetos em destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />
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
