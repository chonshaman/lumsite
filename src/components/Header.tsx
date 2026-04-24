import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  AtomicPowerIcon,
  CoinsSwapIcon,
  DashboardCircleAddIcon,
  NanoTechnologyIcon,
  StarsIcon,
  UserAdd02Icon,
} from "@hugeicons/core-free-icons";
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
  const [productsOpen, setProductsOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    let collapsedValue = false;

    const updateCollapsed = () => {
      const currentY = window.scrollY;
      const nextCollapsed = currentY > 24 && currentY > lastY;
      if (nextCollapsed !== collapsedValue) {
        collapsedValue = nextCollapsed;
        setCollapsed(nextCollapsed);
      }
      lastY = Math.max(currentY, 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateCollapsed();
      });
    };

    updateCollapsed();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
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
      if (!productsRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
        setProductsOpen(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const productMenuIcons = {
    atomic: AtomicPowerIcon,
    dashboard: DashboardCircleAddIcon,
    liquidity: CoinsSwapIcon,
    stars: StarsIcon,
    referrals: UserAdd02Icon,
    nano: NanoTechnologyIcon,
  } as const;

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
      transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1], backgroundColor: { duration: 0.2, ease: "easeOut" } }}
    >
      <motion.div
        className="siteHeaderBar"
        animate={{
          width: "100%",
          height: collapsed ? 92 : 92,
          borderTopLeftRadius: collapsed ? 16 : 0,
          borderTopRightRadius: collapsed ? 16 : 0,
          borderBottomLeftRadius: productsOpen ? 0 : collapsed ? (tabsDocked ? 4 : 16) : 0,
          borderBottomRightRadius: productsOpen ? 0 : collapsed ? (tabsDocked ? 4 : 16) : 0,
          boxShadow: collapsed ? "0 0 10px rgba(29, 29, 27, 0.1)" : "0 0 10px rgba(29, 29, 27, 0)",
        }}
        initial={false}
        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1], boxShadow: { duration: 0.16, ease: "easeOut" } }}
      >
        <a className="siteLogo" href="/" aria-label={ui.homeAriaLabel}>
          <img className="siteLogoImage" src="/assets/logolum.svg" alt={nav.logoAlt} />
        </a>

        <nav className="siteNav" aria-label={ui.primaryNavLabel}>
          {nav.links.map((link) =>
            link.hasDropdown ? (
              <div
                className="siteNavItem siteNavItemMenu"
                key={link.label}
                ref={productsRef}
              >
                <button
                  aria-expanded={productsOpen}
                  aria-haspopup="menu"
                  className={`siteNavButton${productsOpen ? " isOpen" : ""}`}
                  onClick={() => setProductsOpen((open) => !open)}
                  type="button"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className={`siteNavChevron${productsOpen ? " isOpen" : ""}`}>
                    <HugeiconsIcon icon={ArrowDown01Icon} size={14} color="currentColor" strokeWidth={1.8} />
                  </span>
                </button>
                <AnimatePresence>
                  {productsOpen ? (
                    <motion.div
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      className="megaMenu"
                      exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
                      initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
                      role="menu"
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {nav.productMenu?.map((item) => {
                        const icon = productMenuIcons[item.icon as keyof typeof productMenuIcons];
                        return (
                          <a
                            className="megaMenuItem"
                            href={item.href}
                            key={item.title}
                            onClick={() => setProductsOpen(false)}
                            role="menuitem"
                          >
                            <span className="megaMenuIcon" aria-hidden="true">
                              <HugeiconsIcon icon={icon} size={24} color="currentColor" strokeWidth={1.5} />
                            </span>
                            <span className="megaMenuCopy">
                              <span className="megaMenuTitle">{item.title}</span>
                              {"body" in item && item.body ? <span className="megaMenuBody">{item.body}</span> : null}
                            </span>
                          </a>
                        );
                      })}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <a className="siteNavLink" href={link.href} key={link.label}>
                {link.label}
              </a>
            ),
          )}
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
