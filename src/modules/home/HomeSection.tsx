import "./home.css";

import megaLogo from "./assets/mega.svg";

const EVENT_LOCATION = "CAMPO GRANDE · MATO GROSSO DO SUL · 2027";
const EVENT_QUOTE = "\"Sistemas de Informação Inteligentes: Inovações, Aplicações e Ética na Inteligência Artificial\". Um espaço para inovação, reflexão e conexão entre pesquisadores, profissionais e estudantes.";

export default function HomeSection() {
  return (
    <section id="home" className="home-section">
      <div className="home-section__content">
        <p className="home-section__location">{EVENT_LOCATION}</p>
        
        <h1 className="home-section__main-title">
          <span className="home-section__main-title-line">Simpósio</span>
          <span className="home-section__main-title-line">Brasileiro</span>
          <span className="home-section__main-title-line">
            de <span className="home-section__main-title-highlight">Sistemas</span>
          </span>
          <span className="home-section__main-title-line home-section__main-title-highlight">
            de Informação
          </span>
        </h1>

        <p className="home-section__quote">{EVENT_QUOTE}</p>
        
        <div className="home-section__countdown">
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">00</span>
            <span className="home-section__countdown-label">DIAS</span>
          </div>
          <div className="home-section__countdown-separator"></div>
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">00</span>
            <span className="home-section__countdown-label">HORAS</span>
          </div>
          <div className="home-section__countdown-separator"></div>
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">00</span>
            <span className="home-section__countdown-label">MIN</span>
          </div>
          <div className="home-section__countdown-separator"></div>
          <div className="home-section__countdown-item">
            <span className="home-section__countdown-value">00</span>
            <span className="home-section__countdown-label">SEG</span>
          </div>
        </div>
      </div>

      <a 
        href="https://www.megajunior.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="home-section__mega-logo-link"
        aria-label="Acessar site da Mega Júnior"
      >
        <img src={megaLogo} alt="Logo da Mega Júnior" className="home-section__mega-logo" />
      </a>
    </section>
  );
}
