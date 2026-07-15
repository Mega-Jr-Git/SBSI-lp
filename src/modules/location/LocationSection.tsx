import "./Location.css";
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL, HOTELS_URL } from "./location.data";

export function LocationSection() {
  return (
    <section id="local" className="location_container">
      <div className="location_content">
        <span className="location_tag">LOCAL DO EVENTO</span>
        <h2 className="location_title">
          Campo Grande <span className="location_dot">•</span> 2027
        </h2>
        <p className="location_description">
          O evento será realizado em um estado de grande relevância agropecuária
          e industrial, próximo a rotas de integração com países vizinhos,
          oferecendo aos participantes não apenas uma infraestrutura adequada
          para o simpósio, mas também a oportunidade de conhecer uma cidade com
          rica diversidade cultural e paisagens marcantes do bioma Cerrado.
        </p>
        <div className="location_buttonGroup">
          <a
            className="location_button"
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Como chegar
          </a>
          <a
            className="location_button"
            href={HOTELS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver hotéis
          </a>
        </div>
        <div className="location_mapContainer">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Campo Grande"
            className="location_mapFrame"
          />
        </div>
      </div>
    </section>
  );
}
