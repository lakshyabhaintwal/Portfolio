import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { selectedWork } from "@/lib/profile";

export function ProjectsPlaceholder() {
  return (
    <section id="projects" className="container-shell py-36">
      <Reveal>
        <div className="max-w-6xl">
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-6 text-6xl font-black leading-[0.85] tracking-[-0.075em] text-white sm:text-8xl lg:text-9xl">
            Selected Work
          </h2>
        </div>
      </Reveal>

      <div className="mt-24 space-y-28">
        {selectedWork.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article
              className="group border-t border-line pt-10 transition duration-300 hover:border-white/40"
              data-cursor="hover"
            >
              <div className={index % 2 === 0 ? "max-w-5xl" : "ml-auto max-w-5xl"}>
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white transition duration-300 group-hover:translate-x-2 sm:text-7xl lg:text-8xl">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-4 h-7 w-7 shrink-0 text-white/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <p className="mt-8 max-w-2xl text-xl font-light leading-8 text-muted">
                  {project.description}
                </p>

                <p className="mt-5 max-w-3xl text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
                  {project.tech}
                </p>

                <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                  <ul className="space-y-4">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-4 text-base leading-7 text-white/80">
                        <span className="mt-3 h-px w-8 shrink-0 bg-white/35 transition duration-300 group-hover:w-12 group-hover:bg-white" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-5 lg:pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                      Impact
                    </p>
                    <div className="space-y-3">
                      {project.impact.map((impact) => (
                        <p
                          key={impact}
                          className="bg-gradient-to-r from-white via-[#d8ddff] to-[#8b5cf6] bg-clip-text text-2xl font-semibold leading-tight tracking-[-0.04em] text-transparent sm:text-3xl"
                        >
                          {impact}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="editorial-link text-sm font-semibold uppercase tracking-[0.22em] text-white"
                        >
                          GitHub
                        </a>
                      ) : (
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                          GitHub to be added
                        </p>
                      )}

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="editorial-link text-sm font-semibold uppercase tracking-[0.22em] text-white"
                        >
                          Live
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
