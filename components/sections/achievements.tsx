import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/lib/profile";

export function Achievements() {
  return (
    <section id="achievements" className="container-shell py-24">
      <Reveal>
        <SectionHeading kicker="Achievements" title="Selective programs and recognition.">
          Signals of competitive selection, problem-solving strength, and continued technical growth.
        </SectionHeading>
      </Reveal>

      <div className="grid gap-5">
        {achievements.map((item) => (
          <Reveal key={item.title}>
            <article className="glass rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className="flex flex-col gap-5 sm:flex-row">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-white">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-[0.16em] text-white/45">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 font-medium text-white/85">{item.label}</p>
                  <p className="mt-4 max-w-3xl leading-7 text-muted">{item.details}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
