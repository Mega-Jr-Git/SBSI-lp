import { useLocale } from "../../shared/i18n/useLocale";
import { aboutContent } from "./about.content";
import "./about.css";
import logoSbsi from "./assets/sbsi-2027.svg";

export default function AboutSection() {
  const { locale } = useLocale()
  const content = aboutContent[locale]

  return (
    <section id="sobre" className="about-section">
      <div className="about-section__inner">
        <div className="about-section__media">
          <img src={logoSbsi} alt={content.logoAlt} className="about-section__logo" />
        </div>
        <div className="about-section__content">
          <h2 className="about-section__title">{content.title}</h2>
          <p className="about-section__text">
            {content.p1}
          </p>
          <p className="about-section__text">
            {content.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
