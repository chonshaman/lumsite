import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import type { SiteContent } from "../content";

type HeroProps = {
  hero: SiteContent["hero"];
  ui: SiteContent["ui"];
  footer: SiteContent["footer"];
};

export function Hero({ hero, ui, footer }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const [shapeIntroDone, setShapeIntroDone] = useState(false);
  const [shapesActivated, setShapesActivated] = useState(false);
  const isHeroInView = useInView(heroRef, { amount: 0.4 });
  const mouseX = useMotionValue(-360);
  const mouseY = useMotionValue(-360);
  const shape1X = useSpring(mouseX, { stiffness: 90, damping: 24 });
  const shape1Y = useSpring(mouseY, { stiffness: 90, damping: 24 });
  const shape2X = useSpring(mouseX, { stiffness: 70, damping: 26 });
  const shape2Y = useSpring(mouseY, { stiffness: 70, damping: 26 });
  const shape3X = useSpring(mouseX, { stiffness: 55, damping: 28 });
  const shape3Y = useSpring(mouseY, { stiffness: 55, damping: 28 });
  const textEffectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setShapeIntroDone(true), 1450);
    const heroNode = heroRef.current;
    const target = textEffectRef.current;
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!heroNode || !target || !media.matches || reducedMotion.matches) {
      return () => window.clearTimeout(introTimer);
    }

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      });
    };
    const onPointerEnterText = () => {
      setShapesActivated(true);
    };

    heroNode.addEventListener("pointermove", onPointerMove, { passive: true });
    target.addEventListener("pointerenter", onPointerEnterText);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(introTimer);
      heroNode.removeEventListener("pointermove", onPointerMove);
      target.removeEventListener("pointerenter", onPointerEnterText);
    };
  }, [mouseX, mouseY]);

  const introEase = [0.16, 1, 0.3, 1] as const;

  return (
    <header className="hero" ref={heroRef}>
      <a className="skipLink" href="#main">
        {ui.skipToContent}
      </a>

      <section className="heroGrid sectionWrap" aria-labelledby="hero-title">
        <div className="heroCopy reveal">
          <motion.p
            className="eyebrow heroIntroReveal"
            initial={{ clipPath: "inset(0 100% 0 0)", x: -18, opacity: 0 }}
            animate={isHeroInView ? { clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 } : { clipPath: "inset(0 100% 0 0)", x: -18, opacity: 0 }}
            transition={{ duration: 0.82, ease: introEase }}
          >
            {hero.eyebrow}
          </motion.p>
          <motion.div
            className="heroTextEffect heroIntroReveal"
            aria-labelledby="hero-title"
            ref={textEffectRef}
            initial={{ clipPath: "inset(0 100% 0 0)", x: -18, opacity: 0 }}
            animate={
              isHeroInView
                ? { clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 }
                : { clipPath: "inset(0 100% 0 0)", x: -18, opacity: 0 }
            }
            transition={{ duration: 0.96, ease: introEase, delay: 0.12 }}
          >
            {!shapeIntroDone ? (
              <div className="heroIntroShapes" aria-hidden="true">
                <span className="heroIntroShape heroIntroShape1" />
                <span className="heroIntroShape heroIntroShape2" />
                <span className="heroIntroShape heroIntroShape3" />
              </div>
            ) : null}
            <div className={`heroShapes${shapeIntroDone && shapesActivated ? " isHoverReady" : ""}`} aria-hidden="true">
              <motion.span className="heroShape heroShape1" style={{ x: shape1X, y: shape1Y }} />
              <motion.span className="heroShape heroShape2" style={{ x: shape2X, y: shape2Y }} />
              <motion.span className="heroShape heroShape3" style={{ x: shape3X, y: shape3Y }} />
            </div>
            <div className="heroTextMask">
              <h1 id="hero-title">{hero.title}</h1>
            </div>
          </motion.div>
          <motion.p
            className="heroCaption heroIntroReveal"
            initial={{ clipPath: "inset(0 100% 0 0)", x: -18, opacity: 0 }}
            animate={isHeroInView ? { clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 } : { clipPath: "inset(0 100% 0 0)", x: -18, opacity: 0 }}
            transition={{ duration: 0.82, ease: introEase, delay: 0.28 }}
          >
            {hero.caption}
          </motion.p>
          <motion.div
            className="heroActions"
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.76, ease: introEase, delay: 0.62 }}
          >
            <a className="button heroButton" href={`mailto:${footer.email}`}>
              <span>{hero.cta}</span>
              <span className="buttonArrow" aria-hidden="true">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="heroVisual reveal"
          aria-label={hero.imageAlt}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
          transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
        >
          <img src={hero.image} alt="" decoding="async" fetchPriority="high" />
        </motion.div>
      </section>

      <motion.a
        className="heroScrollCue"
        href="#identity"
        aria-label="Scroll down"
        initial={{ y: 20, opacity: 0 }}
        animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.72, ease: introEase, delay: 0.82 }}
      >
        <span className="heroScrollMouse" aria-hidden="true">
          <span className="heroScrollDot" />
        </span>
      </motion.a>
    </header>
  );
}
