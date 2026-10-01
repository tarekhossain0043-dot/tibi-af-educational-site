import Link from "next/link";

export default function PortalPage({
  eyebrow,
  title,
  description,
  asideTitle,
  asideText,
  tips,
  children,
}) {
  return (
    <div className="min-h-[68vh] bg-paper px-3 py-9 sm:px-4 sm:py-12">
      <div className="mx-auto max-w-[1140px]">
        <header className="mx-auto mb-6 max-w-3xl text-center sm:mb-[30px]">
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
            {eyebrow}
          </span>
          <h1 className="mt-2 font-serif text-[1.65rem] font-extrabold text-ink sm:text-[2rem]">
            {title}
          </h1>
          <p className="mx-auto mt-2 max-w-[680px] text-[0.86rem] leading-[1.7] text-ink-soft sm:text-[0.92rem]">
            {description}
          </p>
        </header>
        <div className="mx-auto grid max-w-[980px] items-stretch gap-[18px] lg:grid-cols-[minmax(0,1fr)_300px]">
          <section className="min-w-0 rounded-md border border-paper-line bg-white p-5 shadow-[0_10px_28px_rgba(22,35,61,0.045)] sm:p-7">
            {children}
          </section>
          <aside className="rounded-md border-t-[3px] border-gold bg-ink px-[21px] py-[25px] text-white/85">
            <span className="mb-3 grid h-[38px] w-[38px] place-items-center rounded-[5px] bg-gold-soft text-ink sm:mb-[19px]">
              <i className="fas fa-circle-info" aria-hidden="true" />
            </span>
            <h2 className="font-serif text-[1.08rem] text-white">
              {asideTitle}
            </h2>
            <p className="mt-2 text-[0.81rem] leading-[1.7]">{asideText}</p>
            <ul className="my-5 grid list-none gap-3 border-y border-white/15 py-[18px]">
              {tips.map((tip) => (
                <li
                  className="flex items-start gap-2 text-[0.78rem] leading-[1.5]"
                  key={tip}
                >
                  <i
                    className="fas fa-check mt-1 text-[0.7rem] text-gold-soft"
                    aria-hidden="true"
                  />
                  {tip}
                </li>
              ))}
            </ul>
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 text-[0.79rem] font-bold text-gold-soft no-underline hover:text-white"
            >
              সর্বশেষ নোটিশ দেখুন{" "}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
