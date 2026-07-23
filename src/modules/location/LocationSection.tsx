import { useLocale } from "../../shared/i18n/useLocale";
import { locationContent } from "./location.content";
import "./location.css";
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL } from "./location.data";

export default function LocationSection() {
  const { locale } = useLocale();
  const content = locationContent[locale];

  return (
    <section id="local" className="location-section">
      <div className="location-section__content">
        <span className="location-section__tag">{content.tag}</span>
        <h2 className="location-section__title">
          Campo Grande <span className="location-section__dot">•</span> 2027
        </h2>
        <p className="location-section__description">
          {content.description}
        </p>
        <div className="location-section__button-group">
          <a
            className="location-section__button"
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.btnDirections}
          </a>
        </div>
        <div className="location-section__map-container">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={content.mapTitle}
            className="location-section__map-frame"
          />
        </div>
      </div>
    </section>
  );
}
