import { useEffect, useState } from "react";
import AboutSection from "../modules/about/AboutSection";
import TpSi2027Page from "../modules/calls/tp-si/TpSi2027Page";
import HomeSection from "../modules/home/HomeSection";
import LocationSection from "../modules/location/LocationSection";
import TracksCallSection from "../modules/tracks-call/TracksCallSection";
import { tpSiPath } from "../modules/tracks-call/tracks-call.content";
import { LocaleProvider } from "../shared/i18n/LocaleProvider";
import SiteFooter from "../shared/layout/SiteFooter";
import SiteHeader from "../shared/layout/SiteHeader";

export default function App() {
  const [isTpPage, setIsTpPage] = useState(
    () => window.location.pathname === tpSiPath,
  );
  useEffect(() => {
    const onLocationChange = () =>
      setIsTpPage(window.location.pathname === tpSiPath);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);
  return (
    <LocaleProvider>
      <div className="page-shell">
        <SiteHeader />

        {isTpPage ? (
          <TpSi2027Page />
        ) : (
          <main className="page-content">
            <HomeSection />
            <AboutSection />
            <TracksCallSection />
            <LocationSection />
          </main>
        )}

        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}
