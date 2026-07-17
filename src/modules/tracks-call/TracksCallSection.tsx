import { tracks } from "./tracks-call.data";
import TracksCallCard from "./TracksCallCard";
import "./tracks-call.css";

export default function TracksCallSection() {
  return (
    <section id="chamada-trilhas" className="tracks-call-section">
      <div className="tracks-call-section__card">
        <h2 className="tracks-call-section__title">Chamadas para as <span className="tracks-call-section__title--highlight">trilhas</span></h2>
        <p className="tracks-call-section__description">
          As chamadas para as trilhas estão abertas. Clique em uma das seções para obter mais informações
        </p>
      </div>

      <div className="tracks-call-section__grid">
        {tracks.map((track) => (
          <TracksCallCard key={track.title} track={track} />
        ))}
      </div>
    </section>
  );
}