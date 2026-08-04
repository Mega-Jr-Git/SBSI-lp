import { siteFooterContent, SiteFooterContent } from "./site-footer.content";
import { useLocale } from "../../shared/i18n/useLocale";

type NavLinkItem = {
  labelKey: keyof SiteFooterContent["nav"];
  targetId: string;
};

type InstitutionalLinkItem = {
  labelKey: keyof SiteFooterContent["inst"];
  href: string;
};

const navLinks: NavLinkItem[] = [
  { labelKey: "inicio", targetId: "home" },
  { labelKey: "sobre", targetId: "sobre" },
  { labelKey: "trilhas", targetId: "chamada-trilhas" },
  { labelKey: "onde", targetId: "local" },
  { labelKey: "inscricao", targetId: "inscricao" },
];

const institutionalLinks: InstitutionalLinkItem[] = [
  { labelKey: "sbc", href: "https://www.sbc.org.br/" },
  { labelKey: "comite", href: "/" },
  { labelKey: "edicoes", href: "https://sbsi.sbc.org.br/2026/" },
];

export default function SiteFooter() {
  const { locale } = useLocale();
  const t = siteFooterContent[locale];

  function handleNavigation(targetId?: string) {
    if (targetId) {
      window.history.pushState(null, "", `#${targetId}`);
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <img
              src="/SBSI_branco.svg"
              alt="SBSI 2027"
              className="site-footer__logo-sbsi"
            />
            <p className="site-footer__description">{t.description}</p>
          </div>

          <div className="site-footer__links-group">
            <div className="site-footer__col">
              <h3 className="site-footer__col-title">{t.navTitle}</h3>
              <ul className="site-footer__list">
                {navLinks.map((item) => (
                  <li key={item.labelKey}>
                    <button
                      type="button"
                      className="site-footer__link"
                      onClick={() => handleNavigation(item.targetId)}
                    >
                      {t.nav[item.labelKey]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__col">
              <h3 className="site-footer__col-title">{t.instTitle}</h3>
              <ul className="site-footer__list">
                {institutionalLinks.map((item) => (
                  <li key={item.labelKey}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-footer__link"
                    >
                      {t.inst[item.labelKey]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">{t.copyright}</p>
          <div className="site-footer__dev">
            <span className="site-footer__dev-text">{t.devBy}</span>
            <a
              href="https://www.megajunior.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__dev-link"
            >
              <img
                className="site-footer__logo-mega"
                src="/logo_megajr_escrito.svg"
                alt="MEGA JR."
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
