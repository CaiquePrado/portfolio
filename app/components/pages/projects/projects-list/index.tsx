"use client";

import { project } from "@/app/@types/projects";
import { Link } from "@/app/components/link";
import { fadeUpAnimation } from "@/app/libs/animations";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

interface ProjectListProps {
  projects: project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects?.map((project, i) => (
        <motion.div
          key={i}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
