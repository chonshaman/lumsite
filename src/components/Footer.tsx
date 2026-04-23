import type { SiteContent } from "../content";

type Props = {
  footer: SiteContent["footer"];
};

export function Footer({ footer }: Props) {
  return (
    <footer className="footer" id="company">
      <div className="sectionWrap footerCta reveal">
        <h2>{footer.cta}</h2>
        <a className="button" href={`mailto:${footer.email}`}>
          {footer.ctaButton}
        </a>
      </div>

      <div className="sectionWrap footerGrid">
        {footer.columns.map((column) => (
          <nav className="footerColumn reveal" aria-label={column.title} key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href="/" key={link}>
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="sectionWrap footerBottom">
        <div>
          <p>
            <strong>{footer.emailLabel}</strong> <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </p>
          <p>
            <strong>{footer.socialLabel}</strong> <a href="/">{footer.socialHandle}</a>
          </p>
        </div>
        <p>{footer.description}</p>
        <div className="legal">
          {footer.legal.map((item) => (
            <a href="/" key={item}>
              {item}
            </a>
          ))}
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
