import { useEffect } from "react";
import { content } from "./content";
import { CoreFeatures } from "./components/CoreFeatures";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Operations } from "./components/Operations";
import { Pricing } from "./components/Pricing";
import { Report } from "./components/Report";

export default function App() {
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
  }, []);

  return (
    <>
      <Header />
      <Hero nav={content.nav} hero={content.hero} />
      <main id="main">
        <CoreFeatures features={content.coreFeatures} />
        <HowItWorks data={content.howItWorks} />
        <Operations data={content.operations} />
        <Report report={content.report} />
        <Pricing pricing={content.pricing} />
      </main>
      <Footer footer={content.footer} />
    </>
  );
}
