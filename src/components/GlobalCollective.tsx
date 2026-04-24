import { useEffect, useMemo, useRef } from "react";
import createGlobe from "cobe";
import type { SiteContent } from "../content";

type Props = {
  data: SiteContent["globalCollective"];
};

const locations = [
  { code: "US", location: [40.7128, -74.006] as [number, number] },
  { code: "HK", location: [22.3193, 114.1694] as [number, number] },
  { code: "KR", location: [37.5665, 126.978] as [number, number] },
  { code: "VN", location: [10.8231, 106.6297] as [number, number] },
] as const;

const locationVectors = locations.map((item) => {
  const [lat, lon] = item.location;
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const cosLat = Math.cos(latRad);

  return {
    code: item.code,
    x: cosLat * Math.cos(lonRad),
    y: Math.sin(latRad),
    z: cosLat * Math.sin(lonRad),
  };
});

export function GlobalCollective({ data }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const globeFrameRef = useRef<HTMLDivElement | null>(null);
  const tagRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const flagsLoop = useMemo(() => [...data.flags, ...data.flags], [data.flags]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = globeFrameRef.current;
    if (!canvas || !frame) return;

    let phi = 0.45;
    let theta = 0.18;
    let width = frame.offsetWidth;
    let animationFrame = 0;
    let lastFrameTime = 0;
    let pointerDown = false;
    let isVisible = true;
    let isDocumentVisible = !document.hidden;
    let startX = 0;
    let startY = 0;
    let startPhi = phi;
    let startTheta = theta;
    let velocity = 0.0023;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const isConstrainedDevice = coarsePointer || (typeof lowMemory === "number" && lowMemory <= 4);
    const dpr = Math.min(window.devicePixelRatio || 1, isConstrainedDevice ? 1.35 : 1.8);
    const targetFrameDuration = reducedMotion ? 1000 / 16 : isConstrainedDevice ? 1000 / 28 : 1000 / 40;
    const mapSamples = reducedMotion ? 9000 : isConstrainedDevice ? 12000 : 18000;
    const markerSize = isConstrainedDevice ? 0.028 : 0.032;
    const idleVelocity = reducedMotion ? 0.0011 : isConstrainedDevice ? 0.0017 : 0.0023;
    velocity = idleVelocity;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi,
      theta,
      dark: 1,
      diffuse: 0.85,
      scale: 1,
      mapSamples,
      mapBrightness: 3.2,
      mapBaseBrightness: 0.04,
      baseColor: [0.5, 0.52, 0.54],
      markerColor: [0.42, 1, 0.56],
      glowColor: [0.08, 0.09, 0.1],
      offset: [0, 0],
      opacity: 1,
      markers: locations.map((item) => ({ location: item.location, size: markerSize })),
      markerElevation: 0.012,
    });

    const updateTags = () => {
      const radius = width * 0.34;
      const centerX = width / 2;
      const centerY = width / 2;

      locationVectors.forEach((item) => {
        const element = tagRefs.current[item.code];
        if (!element) return;

        let x = item.x;
        let y = item.y;
        let z = item.z;

        const cosPhi = Math.cos(phi);
        const sinPhi = Math.sin(phi);
        const xPhi = x * cosPhi - z * sinPhi;
        const zPhi = x * sinPhi + z * cosPhi;
        x = xPhi;
        z = zPhi;

        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        const yTheta = y * cosTheta - z * sinTheta;
        const zTheta = y * sinTheta + z * cosTheta;
        y = yTheta;
        z = zTheta;

        const screenX = centerX + x * radius;
        const screenY = centerY - y * radius;
        const angle = Math.atan2(screenY - centerY, screenX - centerX) * (180 / Math.PI);
        const visible = z < -0.02;

        element.style.left = `${screenX}px`;
        element.style.top = `${screenY}px`;
        element.style.opacity = visible ? "1" : "0";
        element.style.transform = `translate(-50%, -112%) rotate(${angle * 0.08}deg) scale(${visible ? 1 : 0.88})`;
      });
    };

    const render = (timestamp: number) => {
      if (!isVisible || !isDocumentVisible) {
        animationFrame = window.requestAnimationFrame(render);
        return;
      }

      if (timestamp - lastFrameTime < targetFrameDuration) {
        animationFrame = window.requestAnimationFrame(render);
        return;
      }

      lastFrameTime = timestamp;

      if (!pointerDown) {
        phi += velocity;
        velocity *= 0.995;
        if (Math.abs(velocity) < idleVelocity) velocity = idleVelocity;
      }

      globe.update({
        width: width * dpr,
        height: width * dpr,
        phi,
        theta,
      });

      updateTags();
      animationFrame = window.requestAnimationFrame(render);
    };

    const onPointerDown = (event: PointerEvent) => {
      pointerDown = true;
      startX = event.clientX;
      startY = event.clientY;
      startPhi = phi;
      startTheta = theta;
      frame.classList.add("isDragging");
      frame.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!pointerDown) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      phi = startPhi + deltaX * 0.0062;
      theta = Math.max(-0.55, Math.min(0.55, startTheta + deltaY * 0.0036));
      velocity = deltaX * 0.00008;
    };

    const onPointerEnd = (event?: PointerEvent) => {
      pointerDown = false;
      frame.classList.remove("isDragging");
      if (event) {
        try {
          frame.releasePointerCapture(event.pointerId);
        } catch {}
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.08 },
    );

    const onVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };

    animationFrame = window.requestAnimationFrame(render);

    const resizeObserver = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
    });

    resizeObserver.observe(frame);
    visibilityObserver.observe(frame);
    document.addEventListener("visibilitychange", onVisibilityChange);
    frame.addEventListener("pointerdown", onPointerDown);
    frame.addEventListener("pointermove", onPointerMove);
    frame.addEventListener("pointerup", onPointerEnd);
    frame.addEventListener("pointerleave", onPointerEnd);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      frame.removeEventListener("pointerdown", onPointerDown);
      frame.removeEventListener("pointermove", onPointerMove);
      frame.removeEventListener("pointerup", onPointerEnd);
      frame.removeEventListener("pointerleave", onPointerEnd);
      globe.destroy();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = globeFrameRef.current;
    if (!section || !frame) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let animationFrame = 0;

    const updateScale = () => {
      animationFrame = 0;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight * 0.72)));
      const scale = 1.5 - progress * 0.5;
      frame.style.setProperty("--globe-scroll-scale", scale.toFixed(3));
    };

    const onScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateScale);
    };

    updateScale();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="globalCollective" id="company" aria-labelledby="company-title" ref={sectionRef}>
      <div className="globalCollectiveInner reveal">
        <div className="globalGlobePanel">
          <div className="globalGlobeFrame" ref={globeFrameRef}>
            <canvas className="globalGlobeCanvas" ref={canvasRef} />
            {locations.map((item) => {
              const label = data.flags.find((flag) => flag.code === item.code)?.label ?? item.code;
              return (
                <span
                  className="globalTag"
                  key={item.code}
                  ref={(node) => {
                    tagRefs.current[item.code] = node;
                  }}
                >
                  <span>{label}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="globalCollectiveCopy">
          <h2 id="company-title">{data.title}</h2>

          <div className="globalFlagsTicker" aria-label="Global markets">
            <div className="globalFlagsTrack">
              {flagsLoop.map((flag, index) => (
                <span className="globalFlagChip" key={`${flag.code}-${index}`}>
                  <span aria-hidden="true">{flag.emoji}</span>
                  <span>{flag.code}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="globalCollectiveBody">
            {data.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
