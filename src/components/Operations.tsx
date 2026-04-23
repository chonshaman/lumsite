import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiSearch02Icon,
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
import type { content } from "../content";

type Props = {
  data: typeof content.operations;
};

export function Operations({ data }: Props) {
  const [liquidity, ai, growth] = data.sections;
  const liquidityIcons = [DatabaseLightningIcon, UserGroupIcon, DashboardSpeed01Icon];
  const aiIcons = [AiSearch02Icon, CheckmarkCircle03Icon, LicenseDraftIcon];

  return (
    <section className="operations" aria-label="Operational platform features">
      <section className="liquiditySection" aria-labelledby="liquidity-title">
        <div className="liquidityInner">
          <header className="liquidityHeader reveal">
            <div>
              <h2 id="liquidity-title">{liquidity.title}</h2>
              {"kicker" in liquidity ? <p>{liquidity.kicker}</p> : null}
              {"body" in liquidity ? <p>{liquidity.body}</p> : null}
            </div>
            <img src="/assets/imageliquid.webp" alt="" loading="lazy" />
          </header>

          <div className="liquidityCards">
            {liquidity.cards.map((card, index) => (
              <article className={`liquidityCard liquidityCard${index + 1} reveal`} key={card.title}>
                <a className="cornerArrow" href="/" aria-label={`Learn more about ${card.title}`}>
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

      <section className="aiSection" aria-labelledby="ai-title">
        <div className="aiInner">
          <div className="aiHero reveal">
            <h2 id="ai-title">{ai.title}</h2>
            <img src="/assets/imgasbg.webp" alt="" loading="lazy" />
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

function GrowthLoop({ data }: { data: typeof content.operations.sections[2] }) {
  const icons = [MailAccount02Icon, WorkflowSquare10Icon, Link01Icon, CoinsSwapIcon, AiGameIcon];
  const cards = data.cards.map((card, index) => ({ ...card, icon: icons[index] }));
  const loopCards = [...cards, ...cards];

  return (
    <section className="growthLoopSection" aria-labelledby="growth-title">
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
