import type { content } from "../content";

type Props = {
  report: typeof content.report;
};

export function Report({ report }: Props) {
  return (
    <section className="report sectionWrap reveal" id="resources" aria-labelledby="report-title">
      <div className="reportCopy">
        <a className="button buttonDark" href="/assets/placeholder.svg" download>
          {report.cta}
        </a>
        <h2 id="report-title">{report.title}</h2>
        <p className="reportTag">{report.tag}</p>
        <p>{report.body}</p>
      </div>
      <div className="reportMedia">
        <img src={report.image} alt="" loading="lazy" />
      </div>
    </section>
  );
}
