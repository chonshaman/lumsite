import { useEffect, useMemo, useState } from "react";
import { locales, type Locale } from "./content";
import { CoreFeatures } from "./components/CoreFeatures";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Operations } from "./components/Operations";
import { Pricing } from "./components/Pricing";

const KOREAN_COUNTRY_CODES = new Set(["KR"]);

function localeFromLanguageTag(value: string | undefined): Locale | null {
  if (!value) return null;
  return value.toLowerCase().startsWith("ko") ? "kr" : null;
}

function localeFromTimeZone(value: string | undefined): Locale | null {
  if (!value) return null;
  return value === "Asia/Seoul" ? "kr" : null;
}

function localeFromCountryCode(value: string | undefined): Locale | null {
  if (!value) return null;
  return KOREAN_COUNTRY_CODES.has(value.toUpperCase()) ? "kr" : null;
}

async function detectLocaleBySignals(): Promise<Locale> {
  const browserLanguages = navigator.languages ?? [navigator.language];
  for (const lang of browserLanguages) {
    const locale = localeFromLanguageTag(lang);
    if (locale) return locale;
  }

  const timeZoneLocale = localeFromTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  if (timeZoneLocale) return timeZoneLocale;

  let shouldUseGeolocation = false;
  if ("permissions" in navigator) {
    try {
      const permission = await navigator.permissions.query({ name: "geolocation" });
      shouldUseGeolocation = permission.state === "granted";
    } catch {
      shouldUseGeolocation = false;
    }
  }

  if (shouldUseGeolocation && "geolocation" in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 2500,
          maximumAge: 10 * 60 * 1000,
          enableHighAccuracy: false,
        });
      });
      const { latitude, longitude } = position.coords;
      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
        { headers: { Accept: "application/json" } },
      );
      if (geoRes.ok) {
        const geoData: { address?: { country_code?: string } } = await geoRes.json();
        const locale = localeFromCountryCode(geoData.address?.country_code);
        if (locale) return locale;
      }
    } catch {
      // Continue to IP-based lookup.
    }
  }

  try {
    const ipRes = await fetch("https://ipapi.co/json/");
    if (ipRes.ok) {
      const ipData: { country_code?: string; country?: string } = await ipRes.json();
      const locale = localeFromCountryCode(ipData.country_code ?? ipData.country);
      if (locale) return locale;
    }
  } catch {
    // Fall back to English below.
  }

  return "en";
}

export default function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = useMemo(() => locales[locale], [locale]);

  useEffect(() => {
    let isMounted = true;

    detectLocaleBySignals().then((detectedLocale) => {
      if (isMounted) {
        setLocale(detectedLocale);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

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
