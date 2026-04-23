import { useEffect, useMemo, useState } from "react";
import { locales, type Locale } from "./content";
import { CoreFeatures } from "./components/CoreFeatures";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Operations } from "./components/Operations";
import { Pricing } from "./components/Pricing";

export default function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = useMemo(() => locales[locale], [locale]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
          } else {
            entry.target.classList.remove("isVisible");
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "kr" ? "ko" : "en";
  }, [locale]);

  return (
    <>
      <Header locale={locale} nav={content.nav} ui={content.ui} onLocaleChange={setLocale} />
      <Hero hero={content.hero} ui={content.ui} footer={content.footer} />
      <main id="main">
        <CoreFeatures content={content.coreFeatures} ui={content.ui} />
        <HowItWorks data={content.howItWorks} />
        <Operations data={content.operations} ui={content.ui} />
        <Pricing pricing={content.pricing} contactEmail={content.footer.email} />
      </main>
      <Footer footer={content.footer} />
    </>
  );
}
