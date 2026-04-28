import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { ProjectsPlaceholder } from "@/components/sections/projects-placeholder";
import { Skills } from "@/components/sections/skills";
import { CustomCursor } from "@/components/site/custom-cursor";
import { Navbar } from "@/components/site/navbar";
import { ScrollProgress } from "@/components/site/scroll-progress";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsPlaceholder />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
