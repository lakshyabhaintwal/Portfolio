import { Reveal } from "@/components/motion/reveal";
import { achievements, education, experiences } from "@/lib/profile";

export function Experience() {
  return (
    <section id="experience" className="container-shell py-32">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl">
              Where I’ve learned by doing.
            </h2>
            <p className="mt-8 max-w-xl text-lg font-light leading-8 text-muted">
              Research at IIT Roorkee, machine learning on edge devices, and helping other students get started with AI.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.07}>
              <article className="border-t border-line pt-7" data-cursor="hover">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">{item.period}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{item.role}</h3>
                <p className="mt-2 text-muted">
                  {item.company} · {item.location}
                </p>
                <ul className="mt-6 space-y-3 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-7">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <div className="border-t border-line pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">{education[0].period}</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                {education[0].degree}
              </p>
              <p className="mt-2 text-muted">{education[0].school} · {education[0].metric}</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border-y border-line py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">{achievements[0].period}</p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                {achievements[0].title} · {achievements[0].label}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
