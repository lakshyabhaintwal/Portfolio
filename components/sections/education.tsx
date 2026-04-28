import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/profile";

export function Education() {
  return (
    <section id="education" className="container-shell py-24">
      <Reveal>
        <SectionHeading kicker="Education" title="Academic foundation in electronics and communication.">
          A systems-heavy engineering background that supports both ML research and deployment thinking.
        </SectionHeading>
      </Reveal>

      <div className="grid gap-5">
        {education.map((item) => (
          <Reveal key={item.school}>
            <article className="glass rounded-lg p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-white">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.school}</h3>
                    <p className="mt-2 text-muted">{item.degree}</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <p className="font-semibold text-white">{item.metric}</p>
                  <p className="mt-1 text-sm text-muted">{item.period}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
