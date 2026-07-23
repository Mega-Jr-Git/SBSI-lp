import { useState, useEffect } from "react";
import "./home.css";

import { useLocale } from "../../shared/i18n/useLocale";
import { homeContent } from "./home.content";

import megaLogo from "./assets/mega.svg";
import { EVENT_DATE } from "./home.data";

const EVENT_LOCATION = "CAMPO GRANDE · MATO GROSSO DO SUL · 2027";

export default function HomeSection() {
  const { locale } = useLocale();
  const content = homeContent[locale];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = EVENT_DATE.getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatValue = (value: number) => String(value).padStart(2, "0");

  return (
    <section id="home" className="home-section">
      <div className="home-section__content">
        <p className="home-section__location">{EVENT_LOCATION}</p>

        <h1 className="home-section__main-title">
          <span className="home-section__main-title-line">{content.titleLine1}</span>
          <span className="home-section__main-title-line">{content.titleLine2}</span>
          <span className="home-section__main-title-line">
            {content.titlePrefix1}&nbsp;<span className="home-section__main-title-highlight">{content.titleHighlight}</span>
          </span>
          <span className="home-section__main-title-line home-section__main-title-highlight">
            {content.titlePrefix2 && <>{content.titlePrefix2}&nbsp;</>}{content.titleSuffix}
          </span>
        </h1>

        <p className="home-section__quote">{content.quote}</p>
        
        <div className="home-section__countdown">
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">{formatValue(timeLeft.days)}</span>
            <span className="home-section__countdown-label">{content.countdown.days}</span>
          </div>
          <div className="home-section__countdown-separator"></div>
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">{formatValue(timeLeft.hours)}</span>
            <span className="home-section__countdown-label">{content.countdown.hours}</span>
          </div>
          <div className="home-section__countdown-separator"></div>
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">{formatValue(timeLeft.minutes)}</span>
            <span className="home-section__countdown-label">{content.countdown.min}</span>
          </div>
          <div className="home-section__countdown-separator"></div>
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">{formatValue(timeLeft.seconds)}</span>
            <span className="home-section__countdown-label">{content.countdown.sec}</span>
          </div>
        </div>
      </div>

      <a
        href="https://www.megajunior.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="home-section__mega-logo-link"
        aria-label={content.megaAria}
      >
        <img src={megaLogo} alt={content.megaAlt} className="home-section__mega-logo" />
      </a>
    </section>
  );
}
