import { Layers3, LayoutDashboard, Server, Wrench } from "lucide-react";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { stack } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const techIcons = {
  React: { Icon: SiReact, color: "#61DAFB" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  "Framer Motion": { Icon: SiFramer, color: "currentColor" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress, color: "currentColor" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Prisma: { Icon: SiPrisma, color: "currentColor" },
  JWT: { Icon: SiJsonwebtokens, color: "currentColor" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "currentColor" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "VS Code": { Icon: VscVscode, color: "#007ACC" },
  Vercel: { Icon: SiVercel, color: "currentColor" },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },
};

const groupIcons = {
  layout: LayoutDashboard,
  server: Server,
  wrench: Wrench,
};

export default function Stack() {
  return (
    <section id="stack" className="section-pad">
      <Reveal>
        <SectionHeading
          icon={Layers3}
          title="Stack"
          subtitle="The tools I reach for to take an idea from a sketch to production."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {stack.map((group, index) => {
          const GroupIcon = groupIcons[group.icon] ?? Layers3;
          return (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="card h-full p-5">
                <div className="flex items-start gap-3 border-b border-stone-200/80 pb-4 dark:border-white/10">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-stone-100 text-stone-500 dark:bg-white/[0.06] dark:text-stone-300">
                    <GroupIcon size={16} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink dark:text-white">{group.title}</h3>
                    <p className="mt-0.5 text-[11px] text-stone-400 dark:text-stone-500">{group.caption}</p>
                  </div>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const tech = techIcons[item];
                    const Icon = tech?.Icon;
                    const monochrome = tech?.color === "currentColor";
                    return (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white/60 px-3 py-1.5 text-[12px] text-stone-600 transition hover:border-copper/40 hover:text-ink dark:border-white/10 dark:bg-white/[0.04] dark:text-stone-300 dark:hover:border-copper-light/40 dark:hover:text-white"
                      >
                        {Icon ? (
                          <Icon
                            size={13}
                            aria-hidden="true"
                            className={monochrome ? "text-ink dark:text-white" : ""}
                            style={monochrome ? undefined : { color: tech.color }}
                          />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                        )}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.12}>
        <p className="mt-5 font-mono text-[11px] text-stone-400 dark:text-stone-500">
          // currently going deeper into Docker, Prisma and software architecture
        </p>
      </Reveal>
    </section>
  );
}
