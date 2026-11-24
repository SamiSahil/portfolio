import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { AicCover, AttendanceCover, EduSysCover, PortfolioCover } from "./ProjectCover";

const covers = {
  edusys: EduSysCover,
  aic: AicCover,
  attendance: AttendanceCover,
  portfolio: PortfolioCover,
};

function ProjectCard({ project, index }) {
  const Cover = covers[project.cover] ?? EduSysCover;
  const hasLive = Boolean(project.links.live);

  return (
    <Reveal delay={index * 0.06}>
      <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-lift dark:hover:border-copper-light/35">
        <div className="relative overflow-hidden border-b border-white/10 bg-[#0a0d12]">
          <div className="transition duration-500 group-hover:scale-[1.015]">
            <Cover />
          </div>
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/80 backdrop-blur">
            {project.scope}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-ink dark:text-white">
                {project.name}
              </h3>
              <p className="mt-0.5 text-[12px] text-stone-500 dark:text-stone-400">{project.subtitle}</p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {hasLive ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full border border-stone-200 text-stone-500 transition hover:border-copper hover:text-copper dark:border-white/10 dark:text-stone-400 dark:hover:border-copper-light dark:hover:text-copper-light"
                  aria-label={`${project.name} live demo`}
                  title="Live demo"
                >
                  <ExternalLink size={14} />
                </a>
              ) : null}
              <a
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full border border-stone-200 text-stone-500 transition hover:border-copper hover:text-copper dark:border-white/10 dark:text-stone-400 dark:hover:border-copper-light dark:hover:text-copper-light"
                aria-label={`${project.name} source code`}
                title="Source code"
              >
                <Github size={14} />
              </a>
            </div>
          </div>

          <p className="mt-3 flex-1 text-[13.5px] leading-6 text-stone-600 dark:text-stone-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-stone-200/90 bg-stone-50/80 px-2.5 py-1 font-mono text-[10px] text-stone-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <Reveal>
        <SectionHeading
          icon={ArrowUpRight}
          title="Projects"
          subtitle="Selected work — designed, built and shipped end to end."
          action={
            <a
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition hover:text-copper dark:text-stone-400 dark:hover:text-copper-light"
            >
              All repositories
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          }
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-stone-300/80 px-5 py-4 dark:border-white/10">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            More experiments, practice builds and open-source work live on GitHub.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-copper hover:underline dark:text-copper-light"
          >
            Visit GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
