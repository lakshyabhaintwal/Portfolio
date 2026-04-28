import { Reveal } from "@/components/motion/reveal";
import { highlights, profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="container-shell py-32">
      <Reveal>
        <div className="ml-auto max-w-4xl">
          <p className="section-kicker">Intro</p>
          <p className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
            I design and build software that makes intelligent systems feel reliable, fast, and quietly useful.
          </p>
          <p className="mt-10 max-w-2xl text-lg font-light leading-8 text-muted">
            {profile.summary}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="ml-auto mt-16 max-w-4xl border-y border-line py-6 text-lg font-semibold leading-8 tracking-tight text-white sm:text-2xl">
          {highlights.map((item) => `${item.value} ${item.label}`).join(" · ")}
        </p>
      </Reveal>
    </section>
  );
}
