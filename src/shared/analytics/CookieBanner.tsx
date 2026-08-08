import React, { useEffect, useState } from "react";
import { useLocale } from "../i18n/useLocale";
import { getStoredConsent, setConsent } from "./analytics";

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { locale } = useLocale();

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const content = {
    pt: {
      text: "Utilizamos cookies para analisar o tráfego do site e melhorar sua experiência de navegação.",
      accept: "Aceitar",
      decline: "Recusar",
    },
    en: {
      text: "We use cookies to analyze website traffic and enhance your browsing experience.",
      accept: "Accept",
      decline: "Decline",
    },
  };

  const t = content[locale as "pt" | "en"] || content.pt;

  return (
    <aside className="cookie-banner" aria-label="Consentimento de Cookies">
      <p className="cookie-banner__text">{t.text}</p>
      <div className="cookie-banner__actions">
        <button
          type="button"
          onClick={handleDecline}
          className="cookie-banner__button cookie-banner__button--decline"
        >
          {t.decline}
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="cookie-banner__button cookie-banner__button--accept"
        >
          {t.accept}
        </button>
      </div>
    </aside>
  );
};
