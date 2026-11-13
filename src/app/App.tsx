import { type ComponentType, useEffect, useState } from "react";
import AboutSection from "../modules/about/AboutSection";
import AboutSbcSection from "../modules/about-sbc/AboutSbcSection";
import CtdgSi2027Page from "../modules/calls/ctdg-si/CtdgSi2027Page";
import Nire2027Page from "../modules/calls/nire/Nire2027Page";
import TiiSi2027Page from "../modules/calls/tii-si/TiiSi2027Page";
import TmSi2027Page from "../modules/calls/tm-si/TmSi2027Page";
import TpSi2027Page from "../modules/calls/tp-si/TpSi2027Page";
import HomeSection from "../modules/home/HomeSection";
import LocationSection from "../modules/location/LocationSection";
import OrganizationSection from "../modules/organization/OrganizationSection";
import TracksCallSection from "../modules/tracks-call/TracksCallSection";
import {
  ctdgSiPath,
  nirePath,
  tiiSiPath,
  tmSiPath,
  tpSiPath,
} from "../modules/tracks-call/tracks-call.content";
import { initGA, trackPageView } from "../shared/analytics/analytics";
import { LocaleProvider } from "../shared/i18n/LocaleProvider";
import SiteFooter from "../shared/layout/SiteFooter";
import SiteHeader from "../shared/layout/SiteHeader";

const callPages: Record<string, ComponentType> = {
  [tpSiPath]: TpSi2027Page,
  [tmSiPath]: TmSi2027Page,
  [tiiSiPath]: TiiSi2027Page,
  [nirePath]: Nire2027Page,
  [ctdgSiPath]: CtdgSi2027Page,
};

// "/chamadas/x/" must match "/chamadas/x"; the root "/" stays as is.
const readPath = () => window.location.pathname.replace(/(.)\/+$/, "$1");

function AppContent() {
  const [currentPath, setCurrentPath] = useState(readPath);

  useEffect(() => {
    initGA();

    const handlePopState = () => {
      setTimeout(trackPageView, 150);
      setCurrentPath(readPath());
    };

    window.addEventListener("popstate", handlePopState);

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      setTimeout(trackPageView, 150);
      setCurrentPath(readPath());
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      setTimeout(trackPageView, 150);
      setCurrentPath(readPath());
    };

    return () => {
      window.removeEventListener("popstate", handlePopState);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (targetId) document.getElementById(targetId)?.scrollIntoView();
  }, []);

  const CallPage = callPages[currentPath];

  return (
    <div className="page-shell">
      <SiteHeader />
      {CallPage ? (
        <CallPage />
      ) : (
        <main className="page-content">
          <HomeSection />
          <AboutSection />
          <TracksCallSection />
          <OrganizationSection />
          <LocationSection />
          <AboutSbcSection />
        </main>
      )}
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
