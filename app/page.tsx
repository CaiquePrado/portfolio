import { HomePageData } from "./@types/page-info";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighLightedProject } from "./components/pages/home/highlighted-pojects";
import { KnowTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
    }
  }
`;
  return fetchHygraphQuery(query, 1000 * 60 * 60 * 24);
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knownTechs} />
      <HighLightedProject />
      <WorkExperience />
    </>
  );
}
