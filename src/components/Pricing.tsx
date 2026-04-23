import { content } from "../content";

type Props = {
  pricing: typeof content.pricing;
};

export function Pricing({ pricing }: Props) {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="pricingIntro reveal">
        <h2 id="pricing-title">{pricing.title}</h2>
        <p className="pricingSubtitle">{pricing.subtitle}</p>
        <p>{pricing.body}</p>
      </div>
      <div className="plans">
        {pricing.plans.map((plan, index) => (
          <article className={`plan plan${index + 1} reveal`} key={plan.name}>
            <div className="planArrowMask" aria-hidden="true" />
            <a className="planCornerArrow" href={`mailto:${content.footer.email}`} aria-label={`Book ${plan.name} demo`}>
              →
            </a>
            <div className="planImage">
              <img src={plan.image} alt="" loading={index === 0 ? "eager" : "lazy"} />
            </div>
            <div className="planBody">
              <h3>{plan.name}</h3>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="planButton" href={`mailto:${content.footer.email}`}>
                <span>{plan.cta}</span>
                <span aria-hidden="true">⊙</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
