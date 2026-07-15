import SiteFooter from "../shared/layout/SiteFooter";
import SiteHeader from "../shared/layout/SiteHeader";
import AboutSection from "../modules/about/AboutSection";
import SectionPlaceholder from "../shared/components/SectionPlaceholder";

export default function App() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="page-content">
        <AboutSection />
        <SectionPlaceholder id="proxima-secao" title="Próxima Seção" description="Espaço reservado para a próxima seção." />
      </main>

      <SiteFooter />
    </div>
  );
}
