import { RichTextContent } from "@graphcms/rich-text-types";
import { knownTech } from "./projects";

export type WorkExperience = {
  companyLogo: {
    url: string;
  };
  role: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  technologies: knownTech[];
  description: {
    raw: RichTextContent;
  };
};
