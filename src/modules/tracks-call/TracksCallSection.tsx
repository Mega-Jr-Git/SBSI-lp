import { useLocale } from "../../shared/i18n/useLocale";
import { tracksContent } from "./tracks-call.content";
import TracksCallCard from "./TracksCallCard";
import "./tracks-call.css";

export default function TracksCallSection() {
  const { locale } = useLocale()
  const content = tracksContent[locale]

  return (
    <section id="chamada-trilhas" className="tracks-call-section">
      <div className="tracks-call-section__card">
        <h2 className="tracks-call-section__title">{content.title} <span className="tracks-call-section__title--highlight">{content.title_highlight}</span></h2>
        <p className="tracks-call-section__description">
          {content.p1}
        </p>
      </div>

      <div className="tracks-call-section__grid">
        {content.tracks.map((track) => (
          <TracksCallCard key={track.title} track={track} />
        ))}
      </div>
    </section>
  );
}