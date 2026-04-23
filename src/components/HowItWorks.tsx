import { HugeiconsIcon } from "@hugeicons/react";
import {
  Blockchain05Icon,
  CheckmarkCircle03Icon,
  DashboardSpeed01Icon,
  Idea01Icon,
  Rocket01Icon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";
import type { content } from "../content";

type Props = {
  data: typeof content.howItWorks;
};

export function HowItWorks({ data }: Props) {
  const stepIcons = [Idea01Icon, Rocket01Icon, CheckmarkCircle03Icon];
  const cardIcons = [Blockchain05Icon, DashboardSpeed01Icon, SecurityCheckIcon];

  return (
    <section className="how" aria-labelledby="how-title">
      <h2 id="how-title" className="srOnly">
        How market operations work
      </h2>
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
          <h3>Effortless Operational Control</h3>
        </div>

        <div className="opsStatement reveal">
          <p>
            Run your platform with confidence
            <br />
            No engineering team required.
          </p>
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
    </section>
  );
}
