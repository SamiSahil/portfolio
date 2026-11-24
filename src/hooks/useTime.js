import { useEffect, useState } from "react";

export function useDhakaTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
