import type { Track } from "./tracks-call.data";
import "./tracks-call.css";
import lupa from "./assets/lupa.png";
import { ArrowIcon } from "./assets/Arrow";

type Props = {
  track: Track;
};

export default function TracksCallCard({ track }: Props) {
  return (  
    <div className="tracks-call-card">
      <img className="tracks-call-card__image" src={lupa} alt="Ícone representando a trilha"></img>
      <h3 className="tracks-call-card__title">{track.title}</h3>
      <p className="tracks-call-card__description">
        Registro e Submissão de Artigo: {track.data ? <span className="tracks-call-card__data">{track.data}</span> : <span className="tracks-call-card__data">Em breve</span>} 
      </p>
      {track.link ? <a className="tracks-call-card__button" href={track.link} target="_blank" rel="noopener noreferrer">Ver mais <ArrowIcon /></a> : <p className="tracks-call-card__coming-soon">Em breve</p>}
    </div>
  )
}