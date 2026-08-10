import { useEffect, useState } from "react";
import AboutSection from "../modules/about/AboutSection";
import TpSi2027Page from "../modules/calls/tp-si/TpSi2027Page";
import HomeSection from "../modules/home/HomeSection";
import LocationSection from "../modules/location/LocationSection";
import TracksCallSection from "../modules/tracks-call/TracksCallSection";
import { LocaleProvider } from "../shared/i18n/LocaleProvider";
import SiteFooter from "../shared/layout/SiteFooter";
import SiteHeader from "../shared/layout/SiteHeader";

export default function App() {
  const [isTpPage, setIsTpPage] = useState(
    () => window.location.hash === "#tp-si-2027",
  );
  useEffect(() => {
    const onHash = () => setIsTpPage(window.location.hash === "#tp-si-2027");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
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
