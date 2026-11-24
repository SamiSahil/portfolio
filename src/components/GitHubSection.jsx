import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookMarked,
  Code2,
  Github,
} from "lucide-react";
import { profile } from "../data/content";
import { githubSnapshot } from "../data/githubSnapshot";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Python: "#3572a5",
  Java: "#b07219",
  "C++": "#f34b7d",
  Shell: "#89e051",
};

function relativeTime(value) {
  if (!value) return "";
  const days = Math.max(0, Math.round((Date.now() - new Date(value).getTime()) / 86400000));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5 sm:px-5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-stone-100/80 text-stone-500 dark:bg-white/[0.06] dark:text-stone-300">
        <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-ink dark:text-white">{value}</p>
      </div>
    </div>
  );
}

function RepoRow({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 px-4 py-3.5 transition hover:bg-stone-50/80 dark:hover:bg-white/[0.03] sm:px-5"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-stone-100/80 text-stone-500 transition group-hover:bg-copper/10 group-hover:text-copper dark:bg-white/[0.06] dark:text-stone-300 dark:group-hover:bg-copper/15 dark:group-hover:text-copper-light">
        <BookMarked size={15} strokeWidth={1.9} aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-mono text-[12.5px] font-medium text-ink dark:text-white">
            {repo.name}
          </span>
          {repo.language ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] text-stone-400 dark:text-stone-500">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: languageColors[repo.language] ?? "#b06a45" }}
              />
              {repo.language}
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 block truncate text-[12.5px] text-stone-500 dark:text-stone-400">
          {repo.description || "No description provided."}
        </span>
      </span>

      <span className="hidden shrink-0 font-mono text-[10px] text-stone-400 dark:text-stone-500 sm:block">
        {relativeTime(repo.pushed_at)}
      </span>

      <ArrowUpRight
        size={14}
        className="shrink-0 text-stone-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper dark:text-stone-600 dark:group-hover:text-copper-light"
        aria-hidden="true"
      />
    </a>
  );
}

export default function GitHubSection() {
  const [state, setState] = useState({
    user: githubSnapshot.user,
    topLanguage: githubSnapshot.topLanguage,
    repos: githubSnapshot.repos,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const [userResponse, repoResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUser}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=pushed`, {
            signal: controller.signal,
          }),
        ]);

        if (!userResponse.ok || !repoResponse.ok) return;

        const user = await userResponse.json();
        const all = await repoResponse.json();
        const owned = all.filter(
          (repo) =>
            !repo.fork &&
            repo.description &&
            repo.name.toLowerCase() !== profile.githubUser.toLowerCase()
        );

        const languageCounts = all.reduce((counts, repo) => {
          if (repo.language) counts[repo.language] = (counts[repo.language] ?? 0) + 1;
          return counts;
        }, {});
        const topLanguage =
          Object.entries(languageCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
          githubSnapshot.topLanguage;

        setState({
          user,
          topLanguage,
          repos: owned.length
            ? [...owned]
                .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
                .slice(0, 4)
            : githubSnapshot.repos,
        });
      } catch (error) {
        /* keep the snapshot when the API is unavailable or rate limited */
      }
    }

    load();
    return () => controller.abort();
  }, []);

  const joined = new Date(state.user.created_at).getFullYear();

  return (
    <section id="github" className="section-pad">
      <Reveal>
        <SectionHeading
          icon={Github}
          title="GitHub"
          subtitle="Where the work lives — repositories, experiments and the commit history behind them."
          action={
            <a
              href={`https://github.com/${profile.githubUser}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition hover:text-copper dark:text-stone-400 dark:hover:text-copper-light"
            >
              @{profile.githubUser}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          }
        />
      </Reveal>

      <Reveal delay={0.04}>
        <div className="card grid grid-cols-2 divide-stone-200/80 overflow-hidden p-0 sm:grid-cols-4 sm:divide-x dark:divide-white/10 [&>*:nth-child(-n+2)]:border-b [&>*:nth-child(-n+2)]:border-stone-200/80 dark:[&>*:nth-child(-n+2)]:border-white/10 sm:[&>*:nth-child(-n+2)]:border-b-0">
          <Stat icon={BookMarked} label="Public repos" value={state.user.public_repos} />
          <Stat icon={Code2} label="Top language" value={state.topLanguage} />
          <Stat icon={Github} label="Joined" value={joined} />
          <Stat icon={Github} label="Latest push" value={relativeTime(state.repos[0]?.pushed_at)} />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="card mt-4 overflow-hidden p-0">
          <div className="flex items-center justify-between gap-3 border-b border-stone-200/80 px-4 py-2.5 dark:border-white/10 sm:px-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
              Recently updated
            </p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-stone-400 dark:text-stone-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              public repos
            </span>
          </div>
          <div className="divide-y divide-stone-200/70 dark:divide-white/[0.07]">
            {state.repos.map((repo) => (
              <RepoRow key={repo.name} repo={repo} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-stone-300/80 px-5 py-4 transition hover:border-copper/50 dark:border-white/10 dark:hover:border-copper-light/40"
        >
          <span className="text-sm text-stone-500 dark:text-stone-400">
            Browse every repository, fork and side project.
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-copper dark:text-copper-light">
            All repositories
            <ArrowUpRight
              size={14}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
