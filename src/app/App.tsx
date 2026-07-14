import SiteFooter from "../shared/layout/SiteFooter";
import SiteHeader from "../shared/layout/SiteHeader";

export default function App() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="page-content">
        {/* Nenhum modulo criado ainda. Siga docs/coding-standards.md para adicionar uma secao. */}
      </main>

      <SiteFooter />
    </div>
  );
}
