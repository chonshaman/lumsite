import type { MouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { AtomicPowerIcon } from "@hugeicons/core-free-icons";
import type { SiteContent } from "../content";
import { Text3DFlip } from "./Text3DFlip";

type Props = {
  content: SiteContent["coreFeatures"];
  ui: SiteContent["ui"];
};

export function CoreFeatures({ content, ui }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const featureIds = useMemo(() => content.items.map((_, index) => `feature-${index + 1}`), [content.items]);
  const tabTitles = useMemo(() => content.items.map((feature) => feature.tabTitle), [content.items]);

  useEffect(() => {
    const sections = featureIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (!visibleEntries.length) return;

        const nextId = visibleEntries[0].target.id;
        const nextIndex = featureIds.indexOf(nextId);
        if (nextIndex >= 0) {
          setActiveIndex(nextIndex);
        }
      },
      {
        rootMargin: "-180px 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [featureIds]);

  useEffect(() => {
    const section = sectionRef.current;
    const tabs = tabsRef.current;
    if (!section || !tabs) return;

    const stickyTop = 108;
    let frame = 0;
    let lastDocked = false;

    const emitDocked = (docked: boolean) => {
      if (lastDocked === docked) return;
      lastDocked = docked;
      document.body.classList.toggle("feature-tabs-docked", docked);
      window.dispatchEvent(new CustomEvent("featuretabsdock", { detail: { docked } }));
    };

    const checkDocked = () => {
      const sectionRect = section.getBoundingClientRect();
      const tabsRect = tabs.getBoundingClientRect();
      const docked = tabsRect.top <= stickyTop + 1 && sectionRect.bottom > stickyTop + tabsRect.height + 24;
      emitDocked(docked);
    };

    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(checkDocked);
    };

    checkDocked();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      emitDocked(false);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToFeature = (index: number) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById(featureIds[index]);
    if (!target) return;

    const headerOffset = 118;
    const tabOffset = 78;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - tabOffset;

    setActiveIndex(index);
    window.history.replaceState(null, "", `#${featureIds[index]}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="features" id="identity" aria-label={ui.productFeaturesLabel} ref={sectionRef}>
      <div className="featureTabs reveal" ref={tabsRef} role="tablist" aria-label={ui.featureTabsLabel}>
        {content.items.map((feature, index) => (
          <a
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "isActive" : ""}
            href={`#feature-${index + 1}`}
            key={feature.title}
            onClick={scrollToFeature(index)}
            role="tab"
          >
            {tabTitles[index]}
          </a>
        ))}
      </div>

      <div className="featureLayout">
        <div className="featureStack">
          {content.items.map((feature, index) => (
            <article
              className={`featureCard featureCard--${feature.theme} featureCard--${feature.size} reveal`}
              id={`feature-${index + 1}`}
              key={feature.title}
            >
              <div className="featureCardHeader">
                <h2>{feature.title}</h2>
                <a aria-label={`${ui.learnMoreAbout} ${feature.title}`} className="featureArrow" href="/">
                  →
                </a>
              </div>
              <p>{feature.body}</p>
              <span className="featurePlus" aria-hidden="true">
                +
              </span>
              <img src={feature.image} alt="" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            </article>
          ))}
        </div>

        <aside className="featureStory reveal" aria-labelledby="feature-story-title">
          <div className="featureStoryIcon" aria-hidden="true">
            <HugeiconsIcon icon={AtomicPowerIcon} size={80} color="currentColor" strokeWidth={1} />
          </div>
          <Text3DFlip as="h2" id="feature-story-title" text={content.storyTitle} />
          <p>{content.storyBody}</p>
        </aside>
      </div>
    </section>
  );
}
