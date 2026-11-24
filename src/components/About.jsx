import { ArrowUpRight, BookOpen, GraduationCap, UserRound } from "lucide-react";
import { focusAreas, profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="bio" className="section-pad">
      <Reveal>
        <SectionHeading
          icon={UserRound}
          title="About"
          subtitle="Background, focus and the way I like to build."
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:gap-14">
        <Reveal>
          <div className="space-y-4 text-[15px] leading-7 text-stone-600 dark:text-stone-400">
            <p>
              I&apos;m a Computer Science &amp; Engineering student at{" "}
              <span className="font-medium text-ink dark:text-stone-200">{profile.university}</span> and a
              full-stack developer who enjoys turning ideas into working products. I build responsive
              interfaces with React and Tailwind CSS, and back them with APIs using Node.js, Express and
              databases like MongoDB and PostgreSQL.
            </p>
            <p>
              I care about readable code, thoughtful UI and shipping features that solve real problems.
              I&apos;m currently looking for an internship or junior full-stack role where I can contribute
              to a real product and keep growing as an engineer.
            </p>
          </div>

          <div className="mt-6">
            <p className="mono-label mb-3">// what I focus on</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-stone-200 bg-white/60 px-3 py-1.5 text-[12px] text-stone-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-copper underline-offset-4 hover:underline dark:text-copper-light"
          >
            See what I&apos;m building on GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-copper/10 text-copper dark:bg-copper/15 dark:text-copper-light">
                <GraduationCap size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div>
                <p className="mono-label mb-1">// education</p>
                <h3 className="text-sm font-semibold text-ink dark:text-white">{profile.degree}</h3>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{profile.university}</p>
                <p className="mt-1 font-mono text-[11px] text-stone-400 dark:text-stone-500">
                  {profile.period}
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-stone-200/80 pt-4 dark:border-white/10">
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-400 dark:text-stone-500">
                <BookOpen size={13} aria-hidden="true" />
                Relevant coursework
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-[12px] text-stone-600 dark:text-stone-400">
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Database Systems</li>
                <li>Object-Oriented Programming</li>
                <li>Software Engineering</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
