import { skillGroups } from "@/lib/profile";
import { Reveal } from "@/components/motion/reveal";

export function Skills() {
  return (
    <section id="skills" className="container-shell py-32">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="sticky top-32">
            <p className="section-kicker">Practice</p>
            <h2 className="mt-6 max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl">
              Tools I work with.
            </h2>
          </div>
        </Reveal>
        <div className="space-y-12 pt-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <article className="border-t border-line pt-7" data-cursor="hover">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {group.title}
                </h3>
                <group.icon className="h-5 w-5 shrink-0 text-white/35" />
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium uppercase tracking-[0.18em] text-muted transition duration-300 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
        </div>
      </div>
    </section>
  );
}
