import { useLocale } from "../../shared/i18n/useLocale";
import type { Track } from "./tracks-call.content";
import { tracksContent } from "./tracks-call.content";
import "./tracks-call.css";
import { ArrowIcon } from "./assets/Arrow";
import lupa from "./assets/lupa.png";

type Props = {
  track: Track;
};

export default function TracksCallCard({ track }: Props) {
  const { locale } = useLocale();
  const content = tracksContent[locale];

  return (
    <div className="tracks-call-card">
      <img
        className="tracks-call-card__image"
        src={lupa}
        alt={content.iconAlt}
      />
      <h3 className="tracks-call-card__title">{track.title}</h3>
      <p className="tracks-call-card__description">
        {content.p2}{" "}
        {track.date ? (
          <span className="tracks-call-card__data">{track.date}</span>
        ) : (
          <span className="tracks-call-card__data">{content.soon}</span>
        )}
      </p>
      {track.link ? (
        <a
          className="tracks-call-card__button"
          href={track.link}
          {...(!track.link.startsWith("#")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {content.link} <ArrowIcon />
        </a>
      ) : (
        <p className="tracks-call-card__coming-soon">{content.soon}</p>
      )}
    </div>
  );
}
