import { HugeiconsIcon } from "@hugeicons/react";
import {
  Activity03Icon,
  Blockchain05Icon,
  CancelCircleIcon,
  CheckmarkCircle03Icon,
  DashboardSpeed01Icon,
  DollarCircleIcon,
  Exchange01Icon,
  Idea01Icon,
  Invoice02Icon,
  LicenseIcon,
  ReloadIcon,
  Rocket01Icon,
  SaveMoneyDollarIcon,
  SecurityCheckIcon,
  TaskDone01Icon,
  WalletAdd01Icon,
} from "@hugeicons/core-free-icons";
import type { SiteContent } from "../content";
import { Text3DFlip } from "./Text3DFlip";

type Props = {
  data: SiteContent["howItWorks"];
};

export function HowItWorks({ data }: Props) {
  const stepIcons = [Idea01Icon, Rocket01Icon, SaveMoneyDollarIcon];
  const cardIcons = [Blockchain05Icon, DashboardSpeed01Icon, SecurityCheckIcon];
  const dashboardIcons = [
    DollarCircleIcon,
    DollarCircleIcon,
    Activity03Icon,
    Exchange01Icon,
    TaskDone01Icon,
    WalletAdd01Icon,
    Invoice02Icon,
    LicenseIcon,
    ReloadIcon,
    Activity03Icon,
    Activity03Icon,
    CancelCircleIcon,
  ];
  const dashboardLoop = [...data.dashboard.sections, ...data.dashboard.sections];

  return (
    <section className="how" id="admin-operations" aria-labelledby="how-title">
      <h2 id="how-title" className="srOnly">
        {data.title}
      </h2>

      <div className="howInner">
        <div className="opsDashboardFrame reveal" aria-hidden="true">
          <div className="opsDashboardPerspective">
            <div className="opsDashboardSurface">
              <div className="opsDashboardScroller">
                {dashboardLoop.map((section, sectionIndex) => (
                  <div className="opsDashboardBlock" key={`${section.title}-${sectionIndex}`}>
                    <div className="opsDashboardHeader">
                      <div className="opsDashboardAdmin">
                        <div className="opsDashboardAdminBadge">SA</div>
                        <div>
                          <span>{data.dashboard.adminRole}</span>
                          <strong>{data.dashboard.adminName}</strong>
                        </div>
                      </div>

                      <div className="opsDashboardTitle">
                        <h3>{data.dashboard.title}</h3>
                        <p>{data.dashboard.subtitle}</p>
                      </div>

                      <div className="opsDashboardMeta">
                        <span className="opsDashboardLive">{data.dashboard.status}</span>
                        <span className="opsDashboardStamp">{data.dashboard.updated}</span>
                        <span className="opsDashboardRefresh">
                          <HugeiconsIcon icon={ReloadIcon} size={12} color="currentColor" strokeWidth={1.6} />
                          {data.dashboard.refresh}
                        </span>
                      </div>
                    </div>

                    <div className="opsDashboardSectionTitle">
                      <span>{section.title}</span>
                      <div />
                      <span>{section.metricCount}</span>
                    </div>

                    <div className={`opsDashboardMetrics opsDashboardMetrics--${section.cards.length}`}>
                      {section.cards.map((card, cardIndex) => {
                        const icon = dashboardIcons[(sectionIndex * 5 + cardIndex) % dashboardIcons.length];
                        const trendIcon = card.trend === "up" ? "↑" : card.trend === "down" ? "↓" : card.trend === "live" ? "●" : "→";

                        return (
                          <article className={`opsMetricCard opsMetricCard--${card.accent}`} key={`${section.title}-${card.title}`}>
                            <div className="opsMetricIcon">
                              <HugeiconsIcon icon={icon} size={14} color="currentColor" strokeWidth={1.5} />
                            </div>
                            <h4>{card.title}</h4>
                            <p>{card.body}</p>
                            <strong>{card.value}</strong>
                            <div className={`opsMetricDelta opsMetricDelta--${card.trend}`}>
                              <span>{trendIcon}</span>
                              <span>{card.delta}</span>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="opsGrid">
          {data.steps.map((step, index) => (
            <article className="step reveal" key={step.title}>
              <span className="opsIcon" aria-hidden="true">
                <HugeiconsIcon icon={stepIcons[index]} size={80} color="currentColor" strokeWidth={1} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}

          <div className="opsTitle reveal">
            <Text3DFlip as="h3" text={data.highlightTitle} />
          </div>

          <div className="opsStatement reveal">
            <Text3DFlip as="p" className="opsStatementFlip" text={data.highlightStatement} />
            <p className="opsStatementCaption">{data.highlightCaption}</p>
          </div>

          {data.cards.map((card, index) => (
            <article className="darkCard reveal" key={card.title}>
              <span className="opsIcon" aria-hidden="true">
                <HugeiconsIcon icon={cardIcons[index]} size={80} color="currentColor" strokeWidth={1} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
