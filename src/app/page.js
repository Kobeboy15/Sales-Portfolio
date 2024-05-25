import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="max-w-screen-md px-6 py-12 mx-auto">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
