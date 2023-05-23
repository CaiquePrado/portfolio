import { project } from "@/app/@types/projects";
import Image from "next/image";

interface ProjectCard {
  project: project;
}

export const ProjectCard = ({ project }: ProjectCard) => {
  const technologies = project.technologies.map((x) => x.name).join(", ");

  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.pageThumbnail.url}
          width={380}
          height={200}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="text-gray-50/90 font-medium group-hover:text-emerald-500 transition-all">
          {project.title}
        </strong>
        <p className="mt-2 text-gray-500 line-clamp-4">
          {project.shortDescription}
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {technologies}
        </span>
      </div>
    </div>
  );
};
