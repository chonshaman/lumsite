import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [collapsed, setCollapsed] = useState(false);

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
          borderRadius: collapsed ? 16 : 0,
          boxShadow: collapsed ? "0 0 10px rgba(29, 29, 27, 0.1)" : "0 0 10px rgba(29, 29, 27, 0)",
        }}
        initial={false}
        transition={{ type: "spring", stiffness: 260, damping: 32, boxShadow: { duration: 0.12, ease: "easeOut" } }}
      >
        <a className="siteLogo" href="/" aria-label="Lumberworks home">
          <img className="siteLogoImage" src="/assets/logolum.svg" alt="Lumberworks" />
        </a>

        <nav className="siteNav" aria-label="Primary navigation">
          <a href="#products">
            Products <span aria-hidden="true">⌄</span>
          </a>
          <a href="#company">
            Company <span aria-hidden="true">⌄</span>
          </a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="siteHeaderCta" href="mailto:business@lumberworks.xyz">
          Let&apos;s Talk
        </a>
      </motion.div>
    </motion.header>
  );
}
