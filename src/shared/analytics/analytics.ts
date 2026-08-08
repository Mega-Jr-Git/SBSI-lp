const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const CONSENT_STORAGE_KEY = "sbsi_analytics_consent";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const getStoredConsent = (): "granted" | "denied" | null => {
  return localStorage.getItem(CONSENT_STORAGE_KEY) as
    | "granted"
    | "denied"
    | null;
};

export const initGA = () => {
  if (!GA_MEASUREMENT_ID || getStoredConsent() !== "granted") return;

  if (document.getElementById("ga-gtag-script")) return;

  const script = document.createElement("script");
  script.id = "ga-gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });

  trackPageView();
};

export const setConsent = (granted: boolean) => {
  const status = granted ? "granted" : "denied";
  localStorage.setItem(CONSENT_STORAGE_KEY, status);

  if (granted) {
    initGA();
  }
};

export const trackPageView = () => {
  if (
    !GA_MEASUREMENT_ID ||
    getStoredConsent() !== "granted" ||
    typeof window.gtag !== "function"
  )
    return;

  const pagePath =
    window.location.pathname + window.location.search + window.location.hash;

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackSectionNavigation = (
  origin: "header" | "mobile_menu" | "footer",
  destination: string,
) => {
  if (
    !GA_MEASUREMENT_ID ||
    getStoredConsent() !== "granted" ||
    typeof window.gtag !== "function"
  )
    return;

  window.gtag("event", "section_navigation", {
    origin,
    destination,
  });
};

export const trackLanguageChange = (language: string) => {
  if (
    !GA_MEASUREMENT_ID ||
    getStoredConsent() !== "granted" ||
    typeof window.gtag !== "function"
  )
    return;

  window.gtag("event", "language_change", {
    language,
  });
};
