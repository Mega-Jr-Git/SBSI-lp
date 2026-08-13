import { useEffect, useState } from "react";
import AboutSection from "../modules/about/AboutSection";
import TmSi2027Page from "../modules/calls/tm-si/TmSi2027Page";
import TpSi2027Page from "../modules/calls/tp-si/TpSi2027Page";
import HomeSection from "../modules/home/HomeSection";
import LocationSection from "../modules/location/LocationSection";
import TracksCallSection from "../modules/tracks-call/TracksCallSection";
import { tmSiPath, tpSiPath } from "../modules/tracks-call/tracks-call.content";
import { LocaleProvider } from "../shared/i18n/LocaleProvider";
import SiteFooter from "../shared/layout/SiteFooter";
import SiteHeader from "../shared/layout/SiteHeader";

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname,
  );

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
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
        <LocationSection />
      </main>
    );
  };

  return (
    <LocaleProvider>
      <div className="page-shell">
        <SiteHeader />
        {renderContent()}
        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}