import { knownTech } from "./projects";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: string;
  };
  technologies: knownTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: knownTech[];
};

export type HomePageData = {
  page: HomePageInfo;
};
