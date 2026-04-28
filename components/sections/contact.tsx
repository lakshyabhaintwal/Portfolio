"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { contactItems } from "@/lib/profile";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="container-shell py-32">
      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-6 text-6xl font-black leading-[0.86] tracking-[-0.07em] text-white sm:text-8xl lg:text-9xl">
              Let&apos;s build the useful thing.
            </h2>
            <p className="mt-8 max-w-xl text-lg font-light leading-8 text-muted">
              Reach out for software engineering roles, systems work, internships, research collaborations, or products that need thoughtful ML integration.
            </p>
            <div className="mt-10 space-y-4">
              {contactItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 border-t border-line py-5 transition duration-300 last:border-b hover:border-white/35"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-muted">{item.label}</span>
                    <span className="mt-1 block break-all text-lg font-medium text-white">{item.value}</span>
                  </span>
                  <item.icon className="h-5 w-5 text-white/35 transition group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="border-t border-line pt-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-white">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 h-13 w-full border-b border-line bg-transparent px-0 text-white outline-none transition placeholder:text-muted focus:border-white/55"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-medium text-white">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 h-13 w-full border-b border-line bg-transparent px-0 text-white outline-none transition placeholder:text-muted focus:border-white/55"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-white">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full resize-none border-b border-line bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-muted focus:border-white/55"
                placeholder="Tell me what you are building..."
              />
            </label>
            <button
              type="submit"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 border-b border-white pb-1 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:tracking-[0.28em]"
            >
              Send message
              <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            {sent ? <p className="mt-4 text-sm text-white/70">Frontend form captured locally. Connect an API route when ready.</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
