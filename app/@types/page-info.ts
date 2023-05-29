import type { RichTextContent } from "@graphcms/rich-text-types";
import { knownTech, Project } from "./projects";
import { WorkExperience } from "./work-experience";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: knownTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: knownTech[];
  highlightProjects: Project[];
};

export type ProjectPageData = {
  project: Project;
};

export type ProjectsPageData = {
  projects: Project[];
};

export type ProjectsPageStaticData = {
  projects: {
    slug: string;
  }[];
};

export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperience[];
};
