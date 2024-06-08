import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import ProjectSection from "./components/ProjectSection";

import EasterEgg from "./components/EasterEgg";

import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/KC.json", "utf-8");
  const { name, title, quote, experiences, projects } = JSON.parse(file);

  return (
    <main className="grid max-w-screen-xl grid-cols-1 px-8 py-12 mx-auto lg:py-0 lg:px-28 lg:grid-cols-[0.75fr_1fr]">
      <LoadingScreen />
      <div id="hero-content" className="hidden">
        <HeroSection name={name} title={title} quote={quote} />
      </div>
      <div id="scroll-content" className="hidden lg:py-28">
        <AboutSection />
        <ExperienceSection experiences={experiences} />
        <ProjectSection projects={projects}/>
        <FooterSection />
        <EasterEgg />
      </div>
    </main>
  );
}
