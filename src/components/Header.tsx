import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import type { Locale, SiteContent } from "../content";

type Props = {
  locale: Locale;
  nav: SiteContent["nav"];
  ui: SiteContent["ui"];
  onLocaleChange: (locale: Locale) => void;
};

export function Header({ locale, nav, ui, onLocaleChange }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [tabsDocked, setTabsDocked] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setCollapsed(currentY > 24 && currentY > lastY);
      if (currentY < lastY || currentY <= 24) {
        setCollapsed(false);
      }
      lastY = Math.max(currentY, 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onTabsDock = (event: Event) => {
      const detail = (event as CustomEvent<{ docked?: boolean }>).detail;
      setTabsDocked(Boolean(detail?.docked));
    };

    window.addEventListener("featuretabsdock", onTabsDock as EventListener);
    return () => window.removeEventListener("featuretabsdock", onTabsDock as EventListener);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <motion.header
      className="siteHeader"
      animate={{
        top: collapsed ? 16 : 0,
        paddingLeft: collapsed ? 20 : 0,
        paddingRight: collapsed ? 20 : 0,
        backgroundColor: collapsed ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)",
      }}
      initial={false}
      transition={{ type: "spring", stiffness: 260, damping: 32, backgroundColor: { duration: 0.36, ease: "easeOut" } }}
    >
      <motion.div
        className="siteHeaderBar"
        animate={{
          width: collapsed ? "min(1280px, calc(100vw - 40px))" : "100vw",
          height: collapsed ? 92 : 92,
          borderTopLeftRadius: collapsed ? 16 : 0,
          borderTopRightRadius: collapsed ? 16 : 0,
          borderBottomLeftRadius: collapsed ? (tabsDocked ? 4 : 16) : 0,
          borderBottomRightRadius: collapsed ? (tabsDocked ? 4 : 16) : 0,
          boxShadow: collapsed ? "0 0 10px rgba(29, 29, 27, 0.1)" : "0 0 10px rgba(29, 29, 27, 0)",
        }}
        initial={false}
        transition={{ type: "spring", stiffness: 260, damping: 32, boxShadow: { duration: 0.12, ease: "easeOut" } }}
      >
        <a className="siteLogo" href="/" aria-label={ui.homeAriaLabel}>
          <img className="siteLogoImage" src="/assets/logolum.svg" alt={nav.logoAlt} />
        </a>

        <nav className="siteNav" aria-label={ui.primaryNavLabel}>
          {nav.links.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}{" "}
              {link.hasDropdown ? (
                <span aria-hidden="true" className="siteNavChevron">
                  <HugeiconsIcon icon={ArrowDown01Icon} size={14} color="currentColor" strokeWidth={1.8} />
                </span>
              ) : null}
            </a>
          ))}
        </nav>

        <div className="siteHeaderActions">
          <a className="siteHeaderCta" href="mailto:business@lumberworks.xyz">
            {nav.cta}
          </a>

          <div className="languageMenu" ref={languageRef}>
            <button
              aria-expanded={languageOpen}
              aria-haspopup="listbox"
              className="languageTrigger"
              onClick={() => setLanguageOpen((open) => !open)}
              type="button"
            >
              <span>{ui.languages[locale]}</span>
              <span aria-hidden="true" className={`languageChevron${languageOpen ? " isOpen" : ""}`}>
                <HugeiconsIcon icon={ArrowDown01Icon} size={14} color="currentColor" strokeWidth={1.8} />
              </span>
            </button>

            {languageOpen ? (
              <div aria-label={ui.languageLabel} className="languageDropdown" role="listbox">
                {(["en", "kr"] as Locale[]).map((option) => (
                  <button
                    aria-selected={locale === option}
                    className={`languageOption${locale === option ? " isActive" : ""}`}
                    key={option}
                    onClick={() => {
                      onLocaleChange(option);
                      setLanguageOpen(false);
                    }}
                    role="option"
                    type="button"
                  >
                    {ui.languages[option]}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
