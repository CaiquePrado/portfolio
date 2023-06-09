import { WorkExperience as IWorkExperience } from "@/app/@types/work-experience";
import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";

interface WorkExperienceProps {
  experiences: IWorkExperience[];
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container flex md:gap-4 gap-10 lg:gap-16 py-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiências Profissional"
          subtitle="Experiências"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incriveis.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
