import { knownTech } from "@/app/@types/projects";
import { SectionTitle } from "@/app/components/section-title";
import { KnowTech } from "./know-tech";

type KnowTechsProps = {
  techs: knownTech[];
};

export const KnowTechs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="Competências" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs.map((tech) => (
          <KnowTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
