import { ArrowUpRight, BadgeCheck, Code2, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/content";

const base = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid relative h-[260px] overflow-hidden border-b border-stone-200/80 dark:border-white/10 sm:h-[300px] md:h-[330px]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-copper/15 blur-3xl dark:bg-copper/20"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-0 h-56 w-72 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/70 to-transparent dark:via-white/15"
        />

        <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 sm:left-8">
          // portfolio — 2026
        </div>
        <div className="absolute right-5 top-5 hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 sm:right-8 sm:flex">
          <MapPin size={11} /> {profile.location}
        </div>

        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/75 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-stone-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-4 select-none font-mono text-[11rem] font-semibold leading-none tracking-tighter text-ink/[0.035] dark:text-white/[0.035] sm:right-12"
        >
          SS
        </div>
      </div>

      <div className="relative px-5 pb-10 pt-0 sm:px-8 md:px-12 md:pb-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="relative -mt-16 h-32 w-32 shrink-0 sm:-mt-20 sm:h-36 sm:w-36">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-full border border-copper/30 dark:border-copper-light/30"
            />
            <img
              src={`${base}profile.jpg`}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full rounded-full border-4 border-[#fbf9f6] object-cover object-top shadow-soft dark:border-[#0d0f13]"
              width="144"
              height="144"
            />
            <span className="absolute bottom-2.5 right-2.5 h-4 w-4 rounded-full border-[3px] border-[#fbf9f6] bg-emerald-500 dark:border-[#0d0f13]" />
          </div>

          <div className="min-w-0 pb-1">
            <p className="mono-label">
              // {profile.role} · {profile.location}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink dark:text-white sm:text-4xl md:text-[2.9rem]">
                {profile.name}
              </h1>
              <BadgeCheck
                className="h-6 w-6 shrink-0 text-copper dark:text-copper-light"
                aria-label="Verified profile"
              />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[12px] text-stone-500 dark:text-stone-400">
              <Code2 size={14} aria-hidden="true" />
              <span>{profile.role}</span>
              <span className="text-stone-300 dark:text-stone-600">/</span>
              <span>{profile.university}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 max-w-2xl">
          <p className="text-[15px] leading-7 text-stone-600 dark:text-stone-400">{profile.intro}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
            <Sparkles size={14} className="text-copper dark:text-copper-light" aria-hidden="true" />
            Currently building with React, Node.js and PostgreSQL.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View projects
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href={`${base}${profile.resume}`} download className="btn-outline">
            <Download size={15} aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
