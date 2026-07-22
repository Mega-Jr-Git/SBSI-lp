import "./location.css";
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL } from "./location.data";

export default function LocationSection() {
  return (
    <section id="local" className="location-section">
      <div className="location-section__content">
        <span className="location-section__tag">LOCAL DO EVENTO</span>
        <h2 className="location-section__title">
          Campo Grande <span className="location-section__dot">•</span> 2027
        </h2>
        <p className="location-section__description">
          O evento será realizado em um estado de grande relevância agropecuária
          e industrial, próximo a rotas de integração com países vizinhos,
          oferecendo aos participantes não apenas uma infraestrutura adequada
          para o simpósio, mas também a oportunidade de conhecer uma cidade com
          rica diversidade cultural e paisagens marcantes do bioma Cerrado.
        </p>
        <div className="location-section__button-group">
          <a
            className="location-section__button"
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Como chegar
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
            title="Mapa de Campo Grande"
            className="location-section__map-frame"
          />
        </div>
      </div>
    </section>
  );
}
