import { memo, useEffect, useMemo, useRef, useState, type CSSProperties, type ComponentPropsWithoutRef, type ElementType } from "react";

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

function Text3DFlipComponent<T extends ElementType = "span">({
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
  const lines = useMemo(
    () =>
      text.split("\n").map((line) =>
        line.split(" ").map((word) => ({
          word,
          characters: splitCharacters(word),
        })),
      ),
    [text],
  );

  useEffect(() => {
    const node = rootRef.current;
    if (!node || isActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsActive(true);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isActive]);

  return (
    <Tag className={`text3dFlip${isActive ? " isActive" : ""}${className ? ` ${className}` : ""}`} ref={rootRef} {...rest}>
      <span className="srOnly">{text}</span>
      {lines.map((line, lineIndex) => (
        <span className="text3dFlipLine" key={`${line}-${lineIndex}`}>
          {line.map(({ word, characters }, wordIndex) => {
            const wordStartIndex = line.slice(0, wordIndex).reduce((count, item) => count + item.characters.length, 0) + lines
              .slice(0, lineIndex)
              .reduce((count, prevLine) => count + prevLine.reduce((lineCount, item) => lineCount + item.characters.length, 0), 0);

            return (
              <span className="text3dFlipWord" key={`${word}-${wordIndex}`}>
                {characters.map((character, characterIndex) => {
                  const characterPosition = wordStartIndex + characterIndex;
                  const style = { "--flip-delay": `${characterPosition * stagger}s` } as CSSProperties;
                  const key = `${character}-${characterPosition}`;
                  return (
                    <span className="text3dFlipCharWrap" key={key} style={style}>
                      <span className={`text3dFlipChar${faceClassName ? ` ${faceClassName}` : ""}`}>
                        <span className="text3dFlipFace text3dFlipFaceFront">{character}</span>
                        <span className="text3dFlipFace text3dFlipFaceBack">{character}</span>
                      </span>
                    </span>
                  );
                })}
                {wordIndex < line.length - 1 ? <span className="text3dFlipSpace" aria-hidden="true" /> : null}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

export const Text3DFlip = memo(Text3DFlipComponent) as typeof Text3DFlipComponent;
