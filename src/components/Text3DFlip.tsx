import { memo, useEffect, useMemo, useRef, useState, type CSSProperties, type ComponentPropsWithoutRef, type ElementType } from "react";

type Props<T extends ElementType> = {
  text: string;
  as?: T;
  className?: string;
  faceClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

type AnimatedWord = {
  characters: string[];
  startIndex: number;
};

function Text3DFlipComponent<T extends ElementType = "span">({
  text,
  as,
  className,
  faceClassName,
  ...rest
}: Props<T>) {
  const Tag = (as ?? "span") as ElementType;
  const rootRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const lines = useMemo(() => {
    let characterCount = 0;

    return text.split("\n").map((line) =>
      line.split(" ").map((word): AnimatedWord => {
        const animatedWord = {
          characters: Array.from(word),
          startIndex: characterCount,
        };

        characterCount += word.length + 1;
        return animatedWord;
      }),
    );
  }, [text]);

  const replayAnimation = () => {
    setAnimationKey((key) => key + 1);
  };

  useEffect(() => {
    const node = rootRef.current;
    if (!node || isActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsActive(true);
        replayAnimation();
        observer.disconnect();
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isActive]);

  useEffect(() => {
    setIsActive(false);
  }, [text]);

  return (
    <Tag
      className={`text3dFlip textLetterGlow${isActive ? " isActive" : ""}${className ? ` ${className}` : ""}`}
      onMouseEnter={replayAnimation}
      ref={rootRef}
      {...rest}
    >
      <span className="srOnly">{text}</span>
      {lines.map((line, lineIndex) => (
        <span className={`text3dFlipLine${faceClassName ? ` ${faceClassName}` : ""}`} aria-hidden="true" key={`${animationKey}-${lineIndex}`}>
          {line.map((word, wordIndex) => (
            <span className="textLetterGlowWord" key={`${lineIndex}-${wordIndex}`}>
              {word.characters.map((character, characterIndex) => (
                <span
                  className="textLetterGlowChar"
                  key={`${lineIndex}-${wordIndex}-${characterIndex}`}
                  style={{ "--letter-index": word.startIndex + characterIndex } as CSSProperties}
                >
                  {character}
                </span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

export const Text3DFlip = memo(Text3DFlipComponent) as typeof Text3DFlipComponent;
