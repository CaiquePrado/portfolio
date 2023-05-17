import { HeroSection } from "./components/pages/home/hero-section";
import { HighLightedProject } from "./components/pages/home/highlighted-pojects";
import { KnowTechs } from "./components/pages/home/know-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighLightedProject />
    </>
  );
}
