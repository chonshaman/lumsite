import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiSearch02Icon,
  AnalyticsUpIcon,
  CheckmarkCircle03Icon,
  DashboardSpeed01Icon,
  DatabaseLightningIcon,
  LicenseDraftIcon,
  Link01Icon,
  MailAccount02Icon,
  CoinsSwapIcon,
  AiGameIcon,
  WorkflowSquare10Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { SiteContent } from "../content";
import { FlickeringGrid } from "./FlickeringGrid";
import { Text3DFlip } from "./Text3DFlip";

type Props = {
  data: SiteContent["operations"];
  ui: SiteContent["ui"];
};

export function Operations({ data, ui }: Props) {
  const [liquidity, ai, growth] = data.sections;
  const liquidityIcons = [DatabaseLightningIcon, UserGroupIcon, DashboardSpeed01Icon, AnalyticsUpIcon];
  const aiIcons = [AiSearch02Icon, CheckmarkCircle03Icon, LicenseDraftIcon];

  return (
    <section className="operations" aria-label={ui.operationsLabel}>
      <section className="liquiditySection" id="liquidity-system" aria-labelledby="liquidity-title">
        <div className="liquidityInner">
          <header className="liquidityHeader reveal">
            <div>
              <Text3DFlip as="h2" id="liquidity-title" text={liquidity.title} />
              {"kicker" in liquidity && liquidity.kicker ? <p>{liquidity.kicker}</p> : null}
              {"body" in liquidity && liquidity.body ? <p>{liquidity.body}</p> : null}
            </div>
            <img src={liquidity.image} alt="" loading="lazy" decoding="async" />
          </header>

          <div className="liquidityCards">
            {liquidity.cards.map((card, index) => (
              <article className={`liquidityCard liquidityCard${index + 1} reveal`} key={card.title}>
                <a className="cornerArrow" href="/" aria-label={`${ui.learnMoreAbout} ${card.title}`}>
                  →
                </a>
                <div className="iconBubble">
                  <HugeiconsIcon icon={liquidityIcons[index]} size={36} color="currentColor" strokeWidth={1} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aiSection" id="ai-system" aria-labelledby="ai-title">
        <div className="aiInner">
          <div className="aiHero reveal">
            <Text3DFlip as="h2" id="ai-title" text={ai.title} />
            <img src={ai.image} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="aiCards">
            {ai.cards.map((card, index) => (
              <article className="aiCard reveal" key={card.title}>
                <div className="iconBubble iconBubbleGreen">
                  <HugeiconsIcon icon={aiIcons[index]} size={36} color="currentColor" strokeWidth={1} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {growth ? <GrowthLoop data={growth} /> : null}
    </section>
  );
}

function GrowthLoop({ data }: { data: SiteContent["operations"]["sections"][2] }) {
  const icons = [MailAccount02Icon, WorkflowSquare10Icon, Link01Icon, CoinsSwapIcon, AiGameIcon];
  const cards = data.cards.map((card, index) => ({ ...card, icon: icons[index] }));
  const loopCards = [...cards, ...cards];

  return (
    <section className="growthLoopSection" id="growth-system" aria-labelledby="growth-title">
      <FlickeringGrid className="growthFlickerGrid" color="#ddd2ad" gridGap={14} maxOpacity={0.38} squareSize={6} />
      <div className="growthLoopTrack" aria-hidden="true">
        {loopCards.map((card, index) => (
          <article className={`growthLoopCard growthLoopCard${(index % cards.length) + 1}`} key={`${card.title}-${index}`}>
            <div className="iconBubble iconBubbleGreen">
              <HugeiconsIcon icon={card.icon} size={36} color="currentColor" strokeWidth={1} />
            </div>
            <div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="growthCenterCard reveal">
        <h2 id="growth-title">{data.title}</h2>
      </div>
    </section>
  );
}
