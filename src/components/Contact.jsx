import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { profile } from "../data/content";
import Reveal from "./Reveal";

const base = import.meta.env.BASE_URL;

const rows = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: `github.com/${profile.githubUser}`,
    href: profile.github,
    icon: Github,
  },
  {
    label: "Location",
    value: `${profile.location} · ${profile.timezone}`,
    icon: MapPin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="section-pad">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-stone-200/90 bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.03] sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-copper/15 blur-3xl dark:bg-copper/25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
            <div>
              <p className="mono-label mb-3">// contact</p>
              <h2 className="text-[1.9rem] font-semibold leading-[1.12] tracking-[-0.03em] text-ink dark:text-white sm:text-4xl">
                Let&apos;s build
                <br />
                something good.
              </h2>
              <p className="mt-4 max-w-md text-[14.5px] leading-7 text-stone-600 dark:text-stone-400">
                I&apos;m open to internships, junior full-stack roles and freelance work. If you
                have a project in mind — or just want to talk shop — my inbox is open.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <MessageSquare size={16} aria-hidden="true" />
                  Send an email
                </a>
                <button type="button" onClick={copyEmail} className="btn-outline">
                  {copied ? (
                    <Check size={15} className="text-emerald-500" aria-hidden="true" />
                  ) : (
                    <Copy size={15} aria-hidden="true" />
                  )}
                  {copied ? "Copied" : "Copy address"}
                </button>
              </div>

              <p className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] text-stone-400 dark:text-stone-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                {profile.availability} · usually replies within a day
              </p>
            </div>

            <div className="self-end">
              <div className="divide-y divide-stone-200/80 border-t border-stone-200/80 dark:divide-white/10 dark:border-white/10">
                {rows.map((row) => {
                  const Icon = row.icon;
                  const content = (
                    <>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-stone-100/80 text-stone-500 transition group-hover:bg-copper/10 group-hover:text-copper dark:bg-white/[0.06] dark:text-stone-300 dark:group-hover:bg-copper/15 dark:group-hover:text-copper-light">
                        <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500">
                          {row.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[13px] text-stone-700 dark:text-stone-300">
                          {row.value}
                        </span>
                      </span>
                      {row.href ? (
                        <ArrowUpRight
                          size={14}
                          className="shrink-0 text-stone-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper dark:text-stone-600 dark:group-hover:text-copper-light"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  );

                  return row.href ? (
                    <a
                      key={row.label}
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 py-3.5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={row.label} className="group flex items-center gap-3 py-3.5">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={`${base}${profile.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-stone-200 bg-white/60 px-3 py-1.5 font-mono text-[10.5px] text-stone-500 transition hover:border-copper hover:text-copper dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-400 dark:hover:border-copper-light dark:hover:text-copper-light"
                >
                  Resume / CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
