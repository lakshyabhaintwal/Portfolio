"use client";

import { motion } from "framer-motion";
import { Code2, Mail, Network } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="home" className="container-shell relative flex min-h-screen items-center pb-24 pt-36">
      <div className="grid w-full gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-kicker text-white/45"
          >
            Lakshya Bhaintwal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 max-w-6xl text-balance text-[clamp(5.2rem,15vw,13.5rem)] font-black leading-[0.78] tracking-[-0.075em] text-white"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 bg-gradient-to-r from-white via-[#c6ceff] to-[#8b5cf6] bg-clip-text text-xs font-semibold uppercase tracking-[0.34em] text-transparent sm:text-sm"
          >
            {profile.domains}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 max-w-2xl text-lg font-light leading-8 text-muted sm:text-xl sm:leading-9"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-[0.22em]"
          >
            <Link href="#contact" className="editorial-link text-white">
              Start a conversation
            </Link>
            <Link href={profile.resumePath} download className="editorial-link text-muted hover:text-white">
              Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { href: profile.github, icon: Code2, label: "GitHub" },
              { href: profile.linkedin, icon: Network, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-muted transition duration-300 hover:-translate-y-1 hover:text-white"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-h-[520px] items-center justify-center lg:flex"
          aria-hidden="true"
        >
          <motion.div
            animate={{
              borderRadius: ["38% 62% 55% 45%", "58% 42% 43% 57%", "38% 62% 55% 45%"],
              y: [0, -18, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="h-[390px] w-[390px] bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.95),rgba(162,177,255,0.48)_28%,rgba(139,92,246,0.25)_56%,rgba(11,11,15,0)_72%)] opacity-85 blur-[1px] shadow-[0_0_90px_rgba(139,92,246,0.14)]"
          />
          <div className="absolute h-[500px] w-[500px] rounded-full border border-white/[0.05]" />
        </motion.div>
      </div>
    </section>
  );
}
