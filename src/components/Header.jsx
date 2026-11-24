import { useMemo, useState } from "react";
import { Github, Menu, Moon, Search, Sun, X } from "lucide-react";
import { nav, profile } from "../data/content";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useTime";

export default function Header({ onOpenPalette }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const sectionIds = useMemo(() => nav.map((item) => item.href.slice(1)), []);
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f7f3ee]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0d11]/85">
      <div className="page-shell flex h-16 items-center justify-between gap-2 bg-inherit px-4 sm:px-6">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-stone-300 bg-white font-mono text-[13px] font-semibold tracking-tight text-ink shadow-sm transition group-hover:border-copper dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:group-hover:border-copper-light">
            {profile.initials}
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-[#f7f3ee] bg-copper dark:border-[#0b0d11] dark:bg-copper-light" />
          </span>
          <span className="hidden rounded-full border border-stone-300/80 bg-white/60 px-3 py-1 text-[11px] font-medium text-stone-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-300 lg:inline-flex">
            Sami&apos;s Portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition ${
                  isActive
                    ? "bg-stone-200/80 text-ink dark:bg-white/10 dark:text-white"
                    : "text-stone-500 hover:text-ink dark:text-stone-400 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-full border border-stone-300/80 bg-white/60 px-3 py-1.5 text-[12px] font-medium text-stone-500 transition hover:border-copper hover:text-copper dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-400 dark:hover:border-copper-light dark:hover:text-copper-light sm:flex"
            aria-label="Search the site"
          >
            <Search size={14} aria-hidden="true" />
            <span className="hidden xl:inline">Search</span>
            <kbd className="rounded border border-stone-300/80 bg-stone-100/80 px-1.5 py-0.5 font-mono text-[10px] text-stone-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-400">
              Ctrl K
            </kbd>
          </button>

          <button
            type="button"
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-stone-500 transition hover:border-stone-300 hover:bg-white/60 hover:text-ink dark:text-stone-400 dark:hover:border-white/10 dark:hover:bg-white/[0.06] dark:hover:text-white"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full text-stone-500 transition hover:bg-white/60 hover:text-ink dark:text-stone-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
            aria-label="GitHub profile"
          >
            <Github size={17} />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-full text-stone-600 transition hover:bg-white/60 dark:text-stone-300 dark:hover:bg-white/[0.06] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-stone-200/80 bg-[#f7f3ee] px-4 py-4 dark:border-white/10 dark:bg-[#0b0d11] md:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-stone-600 transition hover:bg-white/70 hover:text-ink dark:text-stone-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenPalette();
            }}
            className="mt-2 flex w-full items-center gap-2 rounded-xl border border-stone-200 px-3 py-3 text-left text-sm text-stone-500 dark:border-white/10 dark:text-stone-400"
          >
            <Search size={15} /> Search the site
            <kbd className="ml-auto rounded border border-stone-300 px-1.5 py-0.5 font-mono text-[10px] dark:border-white/10">
              Ctrl K
            </kbd>
          </button>
        </div>
      ) : null}
    </header>
  );
}
