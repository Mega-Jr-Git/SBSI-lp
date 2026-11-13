import { useEffect, useRef, useState } from "react";
import { useLocale } from "../../shared/i18n/useLocale";
import {
  trackLanguageChange,
  trackSectionNavigation,
} from "../analytics/analytics";
import { navigateToSection } from "./navigateToSection";
import { siteHeaderContent } from "./site-header.content";

type NavItem = {
  labelKey: keyof typeof siteHeaderContent.pt.menu;
  targetId?: string;
};

type Language = {
  code: "pt" | "en";
  label: string;
  flagUrl: string;
  alt: string;
};

const publicUrl = import.meta.env.BASE_URL;

const navItems: NavItem[] = [
  { labelKey: "sobre", targetId: "sobre" },
  { labelKey: "trilhas", targetId: "chamada-trilhas" },
  { labelKey: "organizacao", targetId: "organizacao" },
  { labelKey: "local", targetId: "local" },
];

const languages: Language[] = [
  {
    code: "pt",
    label: "Português",
    flagUrl: `${publicUrl}flags/brasil_flag.png`,
    alt: "Brasil",
  },
  {
    code: "en",
    label: "English",
    flagUrl: `${publicUrl}flags/usa_flag.png`,
    alt: "United States",
  },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSbcVisible, setIsSbcVisible] = useState(false);
  const { locale, setLocale } = useLocale();

  const langSelectorRef = useRef<HTMLDivElement>(null);
  const selectedLang =
    languages.find((lang) => lang.code === locale) || languages[0];
  const t = siteHeaderContent[locale];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Same as cbsoft.sbc.org.br: the SBC logo shows when the user scrolls up at the top of the page.
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (window.scrollY === 0 && event.deltaY < 0) setIsSbcVisible(true);
      if (event.deltaY > 0) setIsSbcVisible(false);
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langSelectorRef.current &&
        !langSelectorRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleNavigation(targetId?: string) {
    trackSectionNavigation(
      isMenuOpen ? "mobile_menu" : "header",
      targetId || "unknown",
    );
    setIsMenuOpen(false);
    if (targetId) navigateToSection(targetId);
  }

  function handleLanguageChange(code: "pt" | "en") {
    trackLanguageChange(code);
    setLocale(code);
    setIsLangOpen(false);
  }

  return (
    <header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""} ${isMenuOpen ? "site-header--open" : ""}`}
    >
      <div className="site-header__inner">
        <div className="site-header__brand-group">
          <a
            className={`site-header__sbc ${isSbcVisible ? "site-header__sbc--visible" : ""}`}
            href="https://www.sbc.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.realizacao}
            <img src={`${publicUrl}sbc-logo.svg`} alt="SBC" />
          </a>
          <button
            type="button"
            className="site-header__brand"
            aria-label="SBSI"
            onClick={() => handleNavigation("home")}
          >
            <img
              src={`${publicUrl}SBSI_branco.svg`}
              alt="SBSI"
              className="site-header__logo-img"
            />
          </button>
        </div>

        <nav aria-label={t.navAria} className="site-header__nav">
          {navItems.map((item) => (
            <button
              key={item.labelKey}
              type="button"
              className="site-header__nav-item"
              onClick={() => handleNavigation(item.targetId)}
            >
              {t.menu[item.labelKey]}
            </button>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__btn site-header__btn--outline"
            onClick={() => handleNavigation("chamada-trilhas")}
          >
            {t.submeter}
          </button>
          <button
            type="button"
            className="site-header__btn site-header__btn--filled"
            disabled
          >
            {t.inscrever}
            <span className="site-header__btn-badge">({t.soon})</span>
          </button>

          <div className="site-header__lang-wrapper" ref={langSelectorRef}>
            <button
              type="button"
              className="site-header__lang-selector"
              aria-label={t.ariaLang}
              aria-expanded={isLangOpen}
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <img
                src={selectedLang.flagUrl}
                alt={selectedLang.alt}
                className="site-header__flag-img"
              />
              <svg
                className={`site-header__arrow-icon ${isLangOpen ? "site-header__arrow-icon--flipped" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isLangOpen && (
              <ul className="site-header__lang-dropdown">
                {languages.map((lang) => (
                  <li key={lang.code} className="site-header__lang-option">
                    <button
                      type="button"
                      className={`site-header__lang-opt-btn ${locale === lang.code ? "site-header__lang-opt-btn--selected" : ""}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      <img
                        src={lang.flagUrl}
                        alt=""
                        className="site-header__flag-img"
                      />
                      <span>{lang.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          type="button"
          className="site-menu-toggle"
          aria-controls="site-mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t.menuClose : t.menuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="site-mobile-menu"
        className={`site-header__mobile-menu ${isMenuOpen ? "site-header__mobile-menu--open" : ""}`}
      >
        <nav aria-label={t.mobileNavAria} className="site-header__mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.labelKey}
              type="button"
              className="site-header__mobile-nav-item"
              onClick={() => handleNavigation(item.targetId)}
            >
              {t.menu[item.labelKey]}
            </button>
          ))}
        </nav>

        <div className="site-header__mobile-actions">
          <button
            type="button"
            className="site-header__btn site-header__btn--outline"
            onClick={() => handleNavigation("chamada-trilhas")}
          >
            {t.submeter}
          </button>
          <button
            type="button"
            className="site-header__btn site-header__btn--filled"
            disabled
          >
            {t.inscrever}
            <span className="site-header__btn-badge">({t.soon})</span>
          </button>

          <div className="site-header__mobile-lang">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={`site-header__mobile-lang-btn ${locale === lang.code ? "site-header__mobile-lang-btn--active" : ""}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <img
                  src={lang.flagUrl}
                  alt=""
                  className="site-header__flag-img"
                />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
