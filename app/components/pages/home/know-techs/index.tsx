import { SectionTitle } from "@/app/components/section-title";
import { TbBrandNextjs } from "react-icons/tb";
import { KnowTech } from "./know-tech";

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="Competências" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <KnowTech
            key={`knowTech-${i}`}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2021-01-01",
            }}
          />
        ))}
      </div>
    </section>
  );
};
