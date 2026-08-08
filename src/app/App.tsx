import { useEffect } from "react";
import { LocaleProvider } from "../shared/i18n/LocaleProvider";
import SiteHeader from "../shared/layout/SiteHeader";
import HomeSection from "../modules/home/HomeSection";
import AboutSection from "../modules/about/AboutSection";
import LocationSection from "../modules/location/LocationSection";
import TracksCallSection from "../modules/tracks-call/TracksCallSection";
import SiteFooter from "../shared/layout/SiteFooter";
import { CookieBanner } from "../shared/analytics/CookieBanner";
import { initGA, trackPageView } from "../shared/analytics/analytics";

function AppContent() {
  useEffect(() => {
    initGA();

    const handlePopState = () => {
      trackPageView();
    };

    window.addEventListener("popstate", handlePopState);

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      trackPageView();
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      trackPageView();
    };

    return () => {
      window.removeEventListener("popstate", handlePopState);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="page-content">
        <HomeSection />
        <AboutSection />
        <TracksCallSection />
        <LocationSection />
      </main>

      <SiteFooter />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
}
