import {
  Briefcase,
  Clock3,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  ScanLine,
} from "lucide-react";
import { overview } from "../data/content";
import { useDhakaTime } from "../hooks/useTime";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = {
  role: Briefcase,
  location: MapPin,
  email: Mail,
  github: Github,
  education: GraduationCap,
  time: Clock3,
};

export default function Overview() {
  const time = useDhakaTime();

  return (
    <section id="overview" className="section-pad">
      <Reveal>
        <SectionHeading
          icon={ScanLine}
          title="Overview"
          subtitle="A quick snapshot of who I am, what I do and where I work from."
        />
      </Reveal>

      <div className="grid gap-x-12 sm:grid-cols-2">
        {overview.map((item, index) => {
          const Icon = icons[item.key] ?? Briefcase;
          const value =
            item.key === "time" ? (time ? `${time} (GMT+6)` : "—") : item.value;

          return (
            <Reveal key={item.key} delay={index * 0.04}>
              <div className="group flex items-start gap-3 border-t border-stone-200/80 py-3.5 dark:border-white/10">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-stone-100/80 text-stone-500 transition group-hover:bg-copper/10 group-hover:text-copper dark:bg-white/[0.05] dark:text-stone-400 dark:group-hover:bg-copper/15 dark:group-hover:text-copper-light">
                  <Icon size={14} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-stone-400 dark:text-stone-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-0.5 block truncate text-sm text-stone-700 underline-offset-4 transition hover:text-copper hover:underline dark:text-stone-300 dark:hover:text-copper-light"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 truncate text-sm text-stone-700 dark:text-stone-300">{value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
