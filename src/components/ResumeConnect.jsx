import { ArrowUpRight, Download, FileText, Github, Mail } from "lucide-react";
import { profile } from "../data/content";
import Reveal from "./Reveal";

const base = import.meta.env.BASE_URL;

const socials = [
  {
    label: "GitHub",
    value: "@SamiSahil",
    href: profile.github,
    icon: Github,
    iconClass: "bg-ink text-white dark:bg-white dark:text-ink",
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    iconClass: "bg-copper/10 text-copper dark:bg-copper/15 dark:text-copper-light",
  },
  {
    label: "Resume",
    value: "PDF · one page",
    href: `${base}${profile.resume}`,
    icon: FileText,
    iconClass: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
  },
];

export default function ResumeConnect() {
  return (
    <section className="section-pad pt-0" aria-label="Resume and links">
      <Reveal>
        <div className="card flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-stone-100 text-stone-500 dark:bg-white/[0.06] dark:text-stone-300">
              <FileText size={18} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div>
              <p className="mono-label mb-1">// resume</p>
              <h3 className="text-base font-semibold text-ink dark:text-white">My Resume</h3>
              <p className="mt-1 max-w-md text-sm leading-6 text-stone-500 dark:text-stone-400">
                A one-page overview of my experience, skills and education.
              </p>
            </div>
          </div>
          <a
            href={`${base}${profile.resume}`}
            download
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-copper dark:bg-white dark:text-ink dark:hover:bg-copper-light"
          >
            <Download size={15} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </Reveal>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {socials.map((social, index) => {
          const Icon = social.icon;
          const external = social.href.startsWith("http");
          return (
            <Reveal key={social.label} delay={0.05 + index * 0.05}>
              <a
                href={social.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="card group flex h-full items-center gap-3 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-copper/40 hover:shadow-lift dark:hover:border-copper-light/40"
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${social.iconClass}`}>
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-ink dark:text-white">{social.label}</span>
                  <span className="mt-0.5 block truncate font-mono text-[11px] text-stone-500 dark:text-stone-400">
                    {social.value}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-stone-300 transition group-hover:text-copper dark:text-stone-600 dark:group-hover:text-copper-light"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
