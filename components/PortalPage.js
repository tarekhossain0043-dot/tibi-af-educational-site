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
    <div className="portal-page">
      <div className="container">
        <header className="portal-heading">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        <div className="portal-layout">
          <section className="portal-form-panel">{children}</section>
          <aside className="portal-aside">
            <span className="portal-aside-icon">
              <i className="fas fa-circle-info" aria-hidden="true" />
            </span>
            <h2>{asideTitle}</h2>
            <p>{asideText}</p>
            <ul>
              {tips.map((tip) => (
                <li key={tip}>
                  <i className="fas fa-check" aria-hidden="true" />
                  {tip}
                </li>
              ))}
            </ul>
            <Link href="/notices" className="portal-aside-link">
              সর্বশেষ নোটিশ দেখুন{" "}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
