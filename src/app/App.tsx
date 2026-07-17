import SiteHeader from "../shared/layout/SiteHeader";
import AboutSection from "../modules/about/AboutSection";
import LocationSection from "../modules/location/LocationSection";
import SiteFooter from "../shared/layout/SiteFooter";

export default function App() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="page-content">
        <AboutSection />
        <LocationSection />
      </main>

      <SiteFooter />
    </div>
  );
}
