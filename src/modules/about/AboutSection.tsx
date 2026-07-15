import "./about.css";
import logoSbsi from "./assets/SBSI 2027.svg";

type AboutSectionProps = {};

export default function AboutSection({}: AboutSectionProps) {
  return (
    <section id="sobre" className="about-section">
      <div className="about-section__inner">
        <div className="about-section__media">
          <img src={logoSbsi} alt="Logo do SBSI 2027" className="about-section__logo" />
        </div>
        <div className="about-section__content">
          <h2 className="about-section__title">Sobre o SBSI</h2>
          <p className="about-section__text">
            O Simpósio Brasileiro de Sistemas de Informação (SBSI) é um evento realizado anualmente e promovido pela Sociedade Brasileira de Computação (SBC), por meio da Comissão Especial de Sistemas de Informação (CESI). A 23ª edição do SBSI será realizada no período de XX de xxxx a XX de xxxx de 2027, na cidade de Campo Grande, Mato Grosso do Sul, sob a coordenação da Universidade Federal de Mato Grosso do Sul (UFMS).
          </p>
          <p className="about-section__text">
            O simpósio tem como objetivo reunir pesquisadores, estudantes, profissionais e empresários para promover discussões sobre os avanços e desafios relacionados ao uso da inteligência artificial em sistemas de informação. Essas discussões abrangem tanto aplicações práticas em áreas como saúde, educação, indústria e gestão pública, quanto aspectos éticos, incluindo transparência, privacidade, vieses e impactos sociais.
          </p>
        </div>
      </div>
    </section>
  );
}
