import { useEffect, useRef, useState, type CSSProperties, type ComponentPropsWithoutRef, type ElementType } from "react";

type Props<T extends ElementType> = {
  text: string;
  as?: T;
  className?: string;
  faceClassName?: string;
  stagger?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const IntlWithSegmenter = Intl as typeof Intl & {
  Segmenter?: new (locales?: string | string[], options?: { granularity: "grapheme" }) => {
    segment: (input: string) => Iterable<{ segment: string }>;
  };
};

const segmenter =
  typeof Intl !== "undefined" && IntlWithSegmenter.Segmenter
    ? new IntlWithSegmenter.Segmenter(undefined, { granularity: "grapheme" })
    : null;

function splitCharacters(text: string) {
  if (segmenter) {
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }

  return Array.from(text);
}

export function Text3DFlip<T extends ElementType = "span">({
  text,
  as,
  className,
  faceClassName,
  stagger = 0.028,
  ...rest
}: Props<T>) {
  const Tag = (as ?? "span") as ElementType;
  const rootRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const lines = text.split("\n");
  let charIndex = 0;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag className={`text3dFlip${isActive ? " isActive" : ""}${className ? ` ${className}` : ""}`} ref={rootRef} {...rest}>
      <span className="srOnly">{text}</span>
      {lines.map((line, lineIndex) => (
        <span className="text3dFlipLine" key={`${line}-${lineIndex}`}>
          {line.split(" ").map((word, wordIndex, words) => (
            <span className="text3dFlipWord" key={`${word}-${wordIndex}`}>
              {splitCharacters(word).map((character) => {
                const style = { "--flip-delay": `${charIndex * stagger}s` } as CSSProperties;
                const key = `${character}-${charIndex}`;
                charIndex += 1;
                return (
                  <span className="text3dFlipCharWrap" key={key} style={style}>
                    <span className={`text3dFlipChar${faceClassName ? ` ${faceClassName}` : ""}`}>
                      <span className="text3dFlipFace text3dFlipFaceFront">{character}</span>
                      <span className="text3dFlipFace text3dFlipFaceBack">{character}</span>
                    </span>
                  </span>
                );
              })}
              {wordIndex < words.length - 1 ? <span className="text3dFlipSpace" aria-hidden="true" /> : null}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
