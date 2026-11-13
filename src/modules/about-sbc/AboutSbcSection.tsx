import "../about/about.css";

const ceUrl = "https://www.sbc.org.br/403-comissoes-especiais";
const membershipUrl = "https://centraldesistemas.sbc.org.br/mom";

// Standard SBC text (section 4.1 of the SBC events manual), kept verbatim in every locale.
export default function AboutSbcSection() {
  return (
    <section id="sobre-sbc" className="about-section about-section--warm">
      <div className="about-section__inner">
        <div className="about-section__content">
          <h2 className="about-section__title">Sobre a SBC</h2>
          <p className="about-section__text">
            A <strong>Sociedade Brasileira de Computação - SBC</strong> é uma
            Sociedade Científica sem fins lucrativos, fundada em julho de 1978,
            que reúne estudantes, professores, profissionais, pesquisadores e
            entusiastas da área da Computação e Informática de todo o país.
          </p>
          <p className="about-section__text">
            A SBC tem como função fomentar o acesso à informação e cultura por
            meio da informática, promover a inclusão digital, incentivar a
            pesquisa e o ensino em computação no Brasil, e contribuir para a
            formação do profissional da computação com responsabilidade social.
          </p>
          <p className="about-section__text">
            Para organização e divulgação de atividades, ações e eventos
            científicos, técnicos, educacionais e políticos, a SBC mantém uma
            estrutura de três tipos de Grupos Temáticos (GT), que são as Grandes
            Áreas (GA), as Comissões Especiais (CE) e os Grupos de Interesses
            (GI). Estes grupos reúnem associados com interesses comuns em
            subáreas da computação.
          </p>
          <p className="about-section__text">
            Aqui, você está acessando o site do evento de uma das{" "}
            <strong>Comissões Especiais (CE) da SBC</strong>, que representa um
            grupo de associados da SBC que compartilham dos interesses e valores
            em determinada área da Computação. Associados vigentes podem se
            inscrever nas{" "}
            <a href={ceUrl} target="_blank" rel="noopener noreferrer">
              listas de e-mail das Comissões Especiais (CE)
            </a>{" "}
            da área que deseja acompanhar. Se você ainda não é um associado ou
            deseja renovar sua associação à nossa comunidade{" "}
            <a href={membershipUrl} target="_blank" rel="noopener noreferrer">
              clique aqui
            </a>{" "}
            e venha fazer parte da maior e mais importante sociedade científica
            na área de computação da América Latina!
          </p>
        </div>
      </div>
    </section>
  );
}
