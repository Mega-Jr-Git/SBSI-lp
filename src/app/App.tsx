import SiteHeader from "../shared/layout/SiteHeader";
import HomeSection from "../modules/home/HomeSection";
import AboutSection from "../modules/about/AboutSection";
import LocationSection from "../modules/location/LocationSection";
import TracksCallSection from "../modules/tracks-call/TracksCallSection";
import SiteFooter from "../shared/layout/SiteFooter";

export default function App() {
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
    </div>
  );
}
