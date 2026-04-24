import type { SiteContent } from "../content";
import { Text3DFlip } from "./Text3DFlip";

type Props = {
  pricing: SiteContent["pricing"];
  contactEmail: string;
};

export function Pricing({ pricing, contactEmail }: Props) {
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
            <div className="planImage">
              <img src={plan.image} alt="" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            </div>
            <div className="planBody">
              <Text3DFlip as="h3" text={plan.name} />
              {"priceLabel" in plan ? <p className="planPrice">{plan.priceLabel}</p> : null}
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="planButton" href={`mailto:${contactEmail}`}>
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
