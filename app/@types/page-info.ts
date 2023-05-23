import type { RichTextContent } from "@graphcms/rich-text-types";
import { knownTech, project } from "./projects";
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
  highlightProjects: project[];
};

export type ProjectsPageData = {
  projects: project[];
};

export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperience[];
};
