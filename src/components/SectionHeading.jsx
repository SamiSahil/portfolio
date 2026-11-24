export default function SectionHeading({ icon: Icon, title, subtitle, action }) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4 md:mb-10">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-stone-200 bg-white/80 text-copper shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-copper-light">
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white md:text-[28px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 max-w-xl text-sm leading-6 text-stone-500 dark:text-stone-400">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      {action ? <div className="hidden shrink-0 sm:block">{action}</div> : null}
    </div>
  );
}
