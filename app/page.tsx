import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { ProjectsPlaceholder } from "@/components/sections/projects-placeholder";
import { Skills } from "@/components/sections/skills";
import { Navbar } from "@/components/site/navbar";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { MotionPage } from "@/components/motion/motion-page";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <MotionPage>
        <Hero />
        <About />
        <Skills />
        <ProjectsPlaceholder />
        <Experience />
        <Contact />
      </MotionPage>
      <Footer />
    </>
  );
}
