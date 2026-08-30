import { useEffect, useState } from "react";
import AboutSection from "../modules/about/AboutSection";
import TmSi2027Page from "../modules/calls/tm-si/TmSi2027Page";
import TpSi2027Page from "../modules/calls/tp-si/TpSi2027Page";
import HomeSection from "../modules/home/HomeSection";
import OrganizationSection from "../modules/organization/OrganizationSection";
import LocationSection from "../modules/location/LocationSection";
import TracksCallSection from "../modules/tracks-call/TracksCallSection";
import { tmSiPath, tpSiPath } from "../modules/tracks-call/tracks-call.content";
import { initGA, trackPageView } from "../shared/analytics/analytics";
import { LocaleProvider } from "../shared/i18n/LocaleProvider";
import SiteFooter from "../shared/layout/SiteFooter";
import SiteHeader from "../shared/layout/SiteHeader";

function AppContent() {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname,
  );

  useEffect(() => {
    initGA();

    const handlePopState = () => {
      setTimeout(trackPageView, 150);
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      setTimeout(trackPageView, 150);
      setCurrentPath(window.location.pathname);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      setTimeout(trackPageView, 150);
      setCurrentPath(window.location.pathname);
    };

    return () => {
      window.removeEventListener("popstate", handlePopState);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  const renderContent = () => {
    if (currentPath === tpSiPath) {
      return <TpSi2027Page />;
    }

    if (currentPath === tmSiPath) {
      return <TmSi2027Page />;
    }

    return (
      <main className="page-content">
        <HomeSection />
        <AboutSection />
        <TracksCallSection />
        <OrganizationSection />
        <LocationSection />
      </main>
    );
  };

  return (
    <div className="page-shell">
      <SiteHeader />
      {renderContent()}
      <SiteFooter />
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
