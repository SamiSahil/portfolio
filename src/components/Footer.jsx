import { ArrowUp, Github, Mail } from "lucide-react";
import { nav, profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-[1120px] border-x border-t border-stone-200/80 bg-[#f7f3ee]/70 px-5 py-8 dark:border-white/10 dark:bg-[#0b0d11]/70 sm:px-8 md:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-stone-300 bg-white font-mono text-[12px] font-semibold text-ink dark:border-white/15 dark:bg-white/[0.05] dark:text-white">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink dark:text-white">
                {profile.name}
              </span>
            </a>
            <p className="mt-2 max-w-xs text-[12.5px] leading-5 text-stone-500 dark:text-stone-400">
              Full-stack developer in {profile.location}. Building for the web, one commit at a time.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
                Navigate
              </p>
              <ul className="mt-2 space-y-1.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[12.5px] text-stone-500 transition hover:text-copper dark:text-stone-400 dark:hover:text-copper-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
                Elsewhere
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12.5px] text-stone-500 transition hover:text-copper dark:text-stone-400 dark:hover:text-copper-light"
                  >
                    <Github size={12} aria-hidden="true" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 text-[12.5px] text-stone-500 transition hover:text-copper dark:text-stone-400 dark:hover:text-copper-light"
                  >
                    <Mail size={12} aria-hidden="true" /> Email
                  </a>
                </li>
                <li>
                  <a
                    href={`${import.meta.env.BASE_URL}${profile.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12.5px] text-stone-500 transition hover:text-copper dark:text-stone-400 dark:hover:text-copper-light"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start gap-3 border-t border-stone-200/80 pt-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10.5px] text-stone-400 dark:text-stone-500">
            © {year} {profile.name}. Designed &amp; built with React, Vite and Tailwind CSS.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-stone-400 transition hover:text-copper dark:text-stone-500 dark:hover:text-copper-light"
          >
            Back to top
            <ArrowUp size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
