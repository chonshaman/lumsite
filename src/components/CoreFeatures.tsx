import { HugeiconsIcon } from "@hugeicons/react";
import { AtomicPowerIcon } from "@hugeicons/core-free-icons";
import type { content } from "../content";

type Props = {
  features: typeof content.coreFeatures;
};

export function CoreFeatures({ features }: Props) {
  return (
    <section className="features" id="products" aria-label="Product features">
      <div className="featureTabs reveal" role="list" aria-label="Feature categories">
        {features.map((feature, index) => (
          <a className={index === 0 ? "isActive" : ""} href={`#feature-${index + 1}`} key={feature.title}>
            {"tabTitle" in feature ? feature.tabTitle : feature.title}
          </a>
        ))}
      </div>

      <div className="featureLayout">
        <div className="featureStack">
          {features.map((feature, index) => (
            <article
              className={`featureCard featureCard${index + 1} reveal`}
              id={`feature-${index + 1}`}
              key={feature.title}
            >
              <div className="featureCardHeader">
                <h2>{feature.title}</h2>
                <a aria-label={`Learn more about ${feature.title}`} className="featureArrow" href="/">
                  →
                </a>
              </div>
              <p>{feature.body}</p>
              <span className="featurePlus" aria-hidden="true">
                +
              </span>
              <img src={feature.image} alt="" loading={index === 0 ? "eager" : "lazy"} />
            </article>
          ))}
        </div>

        <aside className="featureStory reveal" aria-labelledby="feature-story-title">
          <div className="featureStoryIcon" aria-hidden="true">
            <HugeiconsIcon icon={AtomicPowerIcon} size={80} color="currentColor" strokeWidth={1} />
          </div>
          <h2 id="feature-story-title">Your Platform, Your Identity</h2>
          <p>Give your users a world-class trading experience without the development headache</p>
        </aside>
      </div>
    </section>
  );
}
