import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  CornerDownLeft,
  Download,
  FolderGit2,
  Github,
  Hash,
  Mail,
  Search,
} from "lucide-react";
import { nav, profile, projects } from "../data/content";

const base = import.meta.env.BASE_URL;

function goTo(href) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  } else {
    window.location.hash = href;
  }
}

function openExternal(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function CommandPalette({ open, onOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const groups = useMemo(() => {
    const pages = nav.map((item) => ({
      id: `page-${item.href}`,
      label: item.label,
      hint: `Jump to ${item.label.toLowerCase()}`,
      icon: Hash,
      keywords: `${item.label} section navigate jump`,
      run: () => goTo(item.href),
    }));

    const projectItems = projects.map((project) => ({
      id: `project-${project.id}`,
      label: project.name,
      hint: project.subtitle,
      icon: FolderGit2,
      keywords: `${project.name} ${project.subtitle} ${project.tags.join(" ")} project`,
      run: () =>
        project.links.live ? openExternal(project.links.live) : openExternal(project.links.code),
    }));

    const links = [
      {
        id: "link-github",
        label: "GitHub profile",
        hint: `github.com/${profile.githubUser}`,
        icon: Github,
        keywords: "github code repositories source",
        run: () => openExternal(profile.github),
      },
      {
        id: "link-email",
        label: "Send an email",
        hint: profile.email,
        icon: Mail,
        keywords: "email mail contact hire reach out",
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "link-resume",
        label: "Download resume",
        hint: "PDF · one page",
        icon: Download,
        keywords: "resume cv download pdf hire",
        run: () => openExternal(`${base}${profile.resume}`),
      },
    ];

    const term = query.trim().toLowerCase();
    const filter = (items) =>
      term
        ? items.filter((item) =>
            `${item.label} ${item.hint} ${item.keywords}`.toLowerCase().includes(term)
          )
        : items;

    return [
      { title: "Navigate", items: filter(pages) },
      { title: "Projects", items: filter(projectItems) },
      { title: "Links", items: filter(links) },
    ].filter((group) => group.items.length > 0);
  }, [query]);

  const flat = useMemo(() => groups.flatMap((group) => group.items), [groups]);

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) onClose();
        else onOpen();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpen, onClose]);

  useEffect(() => {
    if (!open) return undefined;

    setQuery("");
    setIndex(0);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 40);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (index > flat.length - 1) setIndex(0);
  }, [flat.length, index]);

  useEffect(() => {
    const node = listRef.current?.querySelector('[data-active="true"]');
    node?.scrollIntoView({ block: "nearest" });
  }, [index]);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIndex((current) => (flat.length ? (current + 1) % flat.length : 0));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIndex((current) => (flat.length ? (current - 1 + flat.length) % flat.length : 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      flat[index]?.run();
      onClose();
    }
  }

  const duration = reduceMotion ? 0 : 0.18;
  let cursor = -1;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="palette"
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh] sm:pt-[16vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-ink/40 backdrop-blur-sm dark:bg-black/60"
            tabIndex={-1}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search this site"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-stone-200 bg-[#fbf9f6] shadow-2xl dark:border-white/10 dark:bg-[#0f1216]"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-stone-200/80 px-4 dark:border-white/10">
              <Search size={16} className="shrink-0 text-stone-400 dark:text-stone-500" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setIndex(0);
                }}
                type="text"
                placeholder="Search sections, projects and links…"
                aria-label="Search sections, projects and links"
                aria-controls="palette-results"
                autoComplete="off"
                spellCheck="false"
                className="h-14 w-full bg-transparent text-sm text-ink outline-none placeholder:text-stone-400 dark:text-white dark:placeholder:text-stone-500"
              />
              <kbd className="hidden shrink-0 rounded border border-stone-300/80 bg-stone-100/80 px-1.5 py-0.5 font-mono text-[10px] text-stone-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-400 sm:block">
                ESC
              </kbd>
            </div>

            <div
              id="palette-results"
              ref={listRef}
              role="listbox"
              aria-label="Search results"
              className="max-h-[52vh] overflow-y-auto p-2"
            >
              {flat.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-stone-400 dark:text-stone-500">
                  No results for “{query}”.
                </p>
              ) : (
                groups.map((group) => (
                  <div key={group.title} className="mb-1 last:mb-0">
                    <p className="px-3 pb-1 pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
                      {group.title}
                    </p>
                    {group.items.map((item) => {
                      cursor += 1;
                      const active = cursor === index;
                      const Icon = item.icon;
                      const position = cursor;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          role="option"
                          aria-selected={active}
                          data-active={active}
                          onMouseMove={() => setIndex(position)}
                          onClick={() => {
                            item.run();
                            onClose();
                          }}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                            active
                              ? "bg-copper/10 text-ink dark:bg-copper/15 dark:text-white"
                              : "text-stone-600 dark:text-stone-300"
                          }`}
                        >
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                              active
                                ? "bg-copper/15 text-copper dark:bg-copper/20 dark:text-copper-light"
                                : "bg-stone-100/80 text-stone-400 dark:bg-white/[0.05] dark:text-stone-500"
                            }`}
                          >
                            <Icon size={14} aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[13px] font-medium">{item.label}</span>
                            <span className="mt-0.5 block truncate text-[11.5px] text-stone-400 dark:text-stone-500">
                              {item.hint}
                            </span>
                          </span>
                          {active ? (
                            <CornerDownLeft
                              size={13}
                              className="shrink-0 text-copper dark:text-copper-light"
                              aria-hidden="true"
                            />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-stone-200/80 px-4 py-2.5 font-mono text-[10px] text-stone-400 dark:border-white/10 dark:text-stone-500">
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <ArrowUp size={11} aria-hidden="true" />
                  <ArrowDown size={11} aria-hidden="true" />
                  navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <CornerDownLeft size={11} aria-hidden="true" />
                  select
                </span>
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded border border-stone-300/80 px-1 py-0.5 dark:border-white/10">Ctrl</kbd>
                <kbd className="rounded border border-stone-300/80 px-1 py-0.5 dark:border-white/10">K</kbd>
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
