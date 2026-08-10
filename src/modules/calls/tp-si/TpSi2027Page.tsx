import { useEffect } from "react";
import "./tp-si-2027.css";

const links = {
  cesi: "https://www2.sbc.org.br/ce-si/",
  sbc: "https://www.sbc.org.br/",
  grandsi: "https://books-sol.sbc.org.br/index.php/sbc/catalog/book/183",
  template:
    "https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip",
  jems: "https://jems3.sbc.org.br/",
  submission: "https://jems3.sbc.org.br/events/693",
  byu: "https://guides.lib.byu.edu/c.php?g=216417&p=1686139",
  anais: "https://sol.sbc.org.br/index.php/sbsi/issue/archive",
  ist: "https://doi.org/10.1016/j.infsof.2021.106787",
  zenodo: "https://zenodo.org/",
  figshare: "https://figshare.com/",
  estendidos: "https://sol.sbc.org.br/index.php/sbsi_estendido/issue/archive",
  isys: "https://journals-sol.sbc.org.br/index.php/isys/issue/archive",
};

const external = (href: string, children: string) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const sidebarDates = [
  ["08/09/2026", "Registro do artigo"],
  ["14/09/2026", "Submissão do artigo"],
  ["25/11/2026", "1ª Notificação"],
  ["02/12/2026", "Submissão do rebuttal"],
  ["14/12/2026", "2ª Notificação (pós-rebuttal)"],
  ["15/02/2027", "Entrega da versão final"],
  ["17/05/2027 a 20/05/2027", "Realização do SBSI 2027"],
];

const topics = [
  "Aspectos e impactos tecnológicos, sociais, econômicos e ambientais de sistemas de informação",
  "Complexidade de sistemas de informação",
  "Desafios e tendências de sistemas de informação aplicados a domínios (saúde, agricultura, governo, educação, entre outros)",
  "Diversidade, equidade e inclusão em sistemas de informação",
  "Ecossistemas digitais, de software e de negócios",
  "Educação em sistemas de informação",
  "Ética, cultura, legislação e política em sistemas de informação",
  "Gestão de processos de negócios",
  "Inovação social e tecnológica em sistemas de informação ",
  "Inteligência artificial (generativa, LLM, PLN, entre outros) em sistemas de informação",
  "Negócios intensivos em software",
  "Paradigmas, modelagem, design, engenharia e avaliação de sistemas de informação",
  "Pesquisas interdisciplinares em sistemas de informação",
  "Segurança e privacidade em sistemas de informação",
  "Sistemas de informação e o mundo aberto",
  "Sistemas-de-sistemas e sistemas-de-sistemas de informação",
  "Sistemas de informação organizacionais",
  "Sistemas de informação para gestão de dados, informação e conhecimento",
  "Sustentabilidade em sistemas de informação",
  "Tecnologias emergentes aplicadas a sistemas de informação",
  "Teoria, epistemologia e metodologia da pesquisa em sistemas de informação",
  "Transparência e accountability em sistemas de informação",
  "Visão sociotécnica de sistemas de informação",
];

export default function TpSi2027Page() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main id="tp-si-2027" className="tp-page">
      <header className="tp-hero">
        <p className="tp-kicker">Chamadas</p>
        <h1>Chamada para a Trilha de Pesquisa em SI (TP-SI)</h1>
        <div className="tp-meta">
          <span>17–20 maio 2027</span>
          <span>Campo Grande · MS</span>
          <span>Presencial</span>
        </div>
        <a
          className="tp-hero-cta"
          href={links.submission}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submeter artigo ↗
        </a>
      </header>
      <div className="tp-layout">
        <article className="tp-body">
          <section>
            <p>
              A área de Sistemas de Informação (SI) busca soluções para
              problemas reais da sociedade e das organizações por meio de
              tecnologias inovadoras. O Simpósio Brasileiro de Sistemas de
              Informação (SBSI), maior encontro da área no Brasil, acontece
              anualmente. O evento é promovido pela{" "}
              {external(
                links.cesi,
                "Comissão Especial de Sistemas de Informação CESI",
              )}{" "}
              da{" "}
              {external(links.sbc, "Sociedade Brasileira de Computação (SBC)")},
              constituindo-se em um fórum para a apresentação e discussão de
              temas contemporâneos na área de SI, aproximando estudantes,
              pesquisadores, profissionais, empresários, o governo e a sociedade
              civil, a fim de promover a disseminação de resultados de pesquisa
              e inovação.
            </p>
            <p>
              Em sua 23ª edição, o SBSI 2027 tem como tema “Sistemas de
              Informação para Transições Sustentáveis: Territórios, Organizações
              e Sociedade”. O evento pretende discutir como os Sistemas de
              Informação podem apoiar transformações ambientalmente e
              socialmente responsáveis. Abrange eficiência energética, uso
              responsável de infraestruturas, ciclo de vida de hardware e
              software, inclusão digital e desenvolvimento de soluções que
              conciliem inovação, desempenho e benefícios coletivos. O SBSI 2027
              ocorrerá PRESENCIALMENTE em Campo Grande, capital de Mato Grosso
              do Sul.
            </p>
            <p>
              Para a Trilha de Pesquisa em SI (TP-SI) do SBSI 2027, espera-se a
              submissão de artigos completos que apresentem novas contribuições
              para a área de SI.
            </p>
          </section>
          <section>
            <h2>Tópicos de Interesse</h2>
            <ul className="tp-topics">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Datas Importantes</h2>
            <ul className="tp-inline-dates">
              <li>
                <strong>08/09/2026:</strong> Registro do artigo (título, pessoas
                autoras, tópicos de interesse e resumo estruturado no JEMS3)
              </li>
              <li>
                <strong>14/09/2026:</strong> Submissão do artigo (upload do
                arquivo do artigo em PDF no JEMS3
              </li>
              <li>
                <strong>25/11/2026:</strong> 1ª Notificação (notificação às
                pessoas autoras com aceite, rejeição ou rebuttal)
              </li>
              <li>
                <strong>02/12/2026:</strong> Submissão do rebuttal (data limite
                para envio do rebuttal no JEMS3)
              </li>
              <li>
                <strong>14/12/2026:</strong> 2ª Notificação (notificação às
                pessoas autoras com aceite ou rejeição após o rebuttal)
              </li>
              <li>
                <strong>15/02/2027:</strong> Entrega da versão final (upload do
                arquivo da versão final em PDF no JEMS3
              </li>
              <li>
                <strong>17/05/2027 a 20/05/2027:</strong> Realização do SBSI
                2027
              </li>
            </ul>
          </section>
          <section>
            <h2>Instruções de Submissão</h2>
            <p>
              Esta trilha (TPSI) aceita apenas submissão de artigos completos
              (full papers), correspondentes a trabalhos de pesquisa concluídos,
              embasados na literatura científica, com ideias e resultados
              inovadores e seguindo procedimentos metodológicos científicos
              adequados. Ressalta-se a exigência de rigor quanto à efetiva
              pertinência da pesquisa à área de SI (em relação e/ou em interface
              com demais áreas da Computação ou outras) e à qualidade da
              escrita, do estudo conduzido e dos resultados apresentados.
            </p>
            <p>
              Os artigos completos devem ressaltar o contexto da pesquisa
              relatada, considerando que trabalhos na área de SI envolvem o
              tripé Pessoas, Processos e Procedimentos (também conhecido como
              Organizações, quando a visão se baseia em SI nas organizações) e
              Tecnologias. O artigo completo deve explicitamente apontar o
              domínio de aplicação e/ou o problema (organizacional, social,
              entre outros) abordado pelo trabalho, bem como indicar de que
              forma contribui para as temáticas relacionadas aos{" "}
              {external(
                links.grandsi,
                "II GranDSI-Br: Grandes Desafios de Sistemas de Informação no Brasil 2026-2036",
              )}
              .
            </p>
            <p>
              Cada submissão DEVE contemplar CUIDADOSAMENTE as regras a seguir.
              Submissões para a TPSI que não seguirem essas regras serão
              rejeitadas sumariamente sem revisão (desk reject):
            </p>
            <ol className="tp-rules">
              <li>
                Os artigos completos DEVEM seguir o{" "}
                {external(links.template, "modelo de artigos da SBC")}, com
                limite de 15 a 20 páginas, incluindo referências, apêndices,
                figuras e tabelas, e DEVEM ser submetidos exclusivamente no
                formato PDF. Os artigos completos devem ser escritos em
                português ou em inglês, mas DEVEM apresentar título, resumo
                estruturado e palavras-chave exclusivamente EM INGLÊS no
                formulário do {external(links.jems, "JEMS 3")} e no arquivo PDF,
                mesmo que o restante do texto esteja escrito em português.
              </li>
              <li>
                O resumo estruturado DEVERÁ conter os nomes dos campos (labels)
                das seções exigidas, e isso deverá ser propagado no texto do
                artigo completo para manter a coesão do trabalho, além de ser
                preenchido no formulário de submissão do{" "}
                {external(links.jems, "JEMS 3")}, em até 300 PALAVRAS. Os campos
                das seções do resumo estruturado devem ser: 1) Research Context,
                2) Scientific and/or Practical Problem, 3) Proposed Solution
                and/or Analysis, 4) Related IS Theory, 5) Research Method, 6)
                Summary of Results, and 7) Contributions and Impact to IS area.
                Para apoiar o preenchimento do campo “Related IS Theory”, acesse
                o portal {external(links.byu, "Byu Library")}. Recomenda-se
                ainda analisar exemplos de artigos completos publicados em
                edições anteriores nos {external(links.anais, "Anais do SBSI")},
                além de outros exemplos no periódico{" "}
                {external(links.ist, "Information and Software Technology")}.
              </li>
              <li>
                O arquivo PDF do artigo completo NÃO DEVERÁ CONTER QUALQUER
                IDENTIFICAÇÃO DAS PESSOAS AUTORAS EM TODO O TEXTO (por exemplo,
                nomes de pessoas autoras, projetos, instituições, ferramentas,
                agradecimentos, links, citações de artigos que identifiquem as
                pessoas autoras, entre outros), considerando o processo de
                revisão duplamente anônima (double-anonymous review process) na
                TPSI.
              </li>
              <li>
                Após o prazo final da submissão de artigos completos no{" "}
                {external(links.jems, "JEMS 3")} (upload do arquivo do artigo em
                PDF), NÃO SERÁ PERMITIDA qualquer modificação de título, resumo
                estruturado, tópicos, arquivo PDF e, ESPECIALMENTE, de autoria
                (i.e., inclusão ou remoção de pessoas autoras, mesmo se vier a
                ser aceito). ALÉM DISSO, após este prazo final, também NÃO SERÁ
                PERMITIDO retirar o artigo do processo de revisão (withdraw).
              </li>
              <li>
                A submissão de um artigo completo IMPLICA QUE o trabalho
                descrito não foi publicado anteriormente, que não está sob
                consideração para publicação e não será submetido a nenhum outro
                lugar enquanto estiver em processo de avaliação no SBSI.
                Adicionalmente, a publicação DEVE SER aprovada por todas as
                pessoas autoras e, tacitamente ou explicitamente, pelas
                autoridades responsáveis pela realização do trabalho. Um
                trabalho publicado no SBSI NÃO DEVERÁ ser publicado em outro
                lugar da mesma forma, em qualquer outro idioma, inclusive
                eletronicamente, pois qualquer tipo de plágio constitui um
                comportamento antiético e é inaceitável.
              </li>
              <li>
                A SBC atualizou o seu {external(links.sbc, "Código de Conduta")}{" "}
                para pessoas autoras de publicações. Na parte II, Art. 2º,
                informa-se que “o uso de Inteligência Artificial (IA)
                Generativa: a utilização de ferramentas e tecnologias de IA
                Generativa para a geração de conteúdos, na escrita e/ou revisão
                do conteúdo de artigos, deve ser declarada explicitamente no
                trabalho. A declaração pode ocorrer na Seção de Agradecimentos,
                na metodologia ou em uma seção definida especificamente para
                este fim, de acordo com o template adotado, e deve listar as
                ferramentas e descrever onde foram empregadas, por exemplo,
                textos, tabelas, gráficos, citações etc. Essas ferramentas não
                podem ser listadas como autores de um artigo. O uso de tais
                ferramentas não exime os autores da responsabilidade sobre todo
                o seu conteúdo, inclusive no caso de ser identificado plágio”.
              </li>
            </ol>
            <p>
              Solicitamos às pessoas autoras a adoção de princípios e práticas
              de Ciência Aberta, buscando promover a transparência, a
              replicabilidade e a reprodutibilidade na pesquisa. Encorajamos que
              todas as pessoas autoras divulguem dados e/ou artefatos
              (anonimizados e curados) para aumentar a transparência, a
              replicabilidade e a reprodutibilidade de seus estudos. Sugere-se
              disponibilizar material suplementar em repositórios como{" "}
              {external(links.zenodo, "Zenodo")} e{" "}
              {external(links.figshare, "Figshare")}, de forma anônima, devido
              ao processo de revisão adotado na TPSI.
            </p>
            <p>
              Além disso, solicitamos que as submissões dos artigos completos
              utilizem referências de trabalhos de pesquisadores de grupos
              sub-representados e do sul global, incluindo textos publicados em
              veículos da comunidade brasileira especializada na área, como nos{" "}
              {external(links.anais, "Anais do SBSI")}, nos{" "}
              {external(links.estendidos, "Anais Estendidos do SBSI")} e no
              periódico{" "}
              {external(
                links.isys,
                "iSys: Revista Brasileira de Sistemas de Informação",
              )}
              .
            </p>
          </section>
          <section>
            <h2>Processo de Revisão</h2>
            <p>
              A seleção de artigos completos será realizada a partir da revisão
              por membros do Comitê de Programa da TPSI no SBSI. O processo de
              revisão será conduzido no formato duplamente anônimo
              (double-anonymous review process). Se todas as revisões indicarem
              claramente a aceitação ou a rejeição do artigo completo da forma
              que foi submetido, sem a necessidade de rebuttal, as pessoas
              autoras receberão uma decisão de “artigo completo aceito” ou
              “artigo completo rejeitado” na 1ª Notificação. As pessoas autoras
              dos demais artigos completos serão notificadas para procederem com
              a preparação e envio do rebuttal no período definido. Após a
              análise do rebuttal, as pessoas autoras destes artigos completos
              receberão uma decisão final de “artigo completo aceito” ou “artigo
              completo rejeitado” na 2ª Notificação.
            </p>
            <p>Os seguintes critérios serão considerados na avaliação:</p>
            <ul className="tp-publication-requirements">
              <li>
                Cada submissão DEVE contemplar CUIDADOSAMENTE as regras
                apresentadas na seção “Instruções de Submissão” (acima):
                submissões para a TPSI que não seguirem essas regras serão
                rejeitadas sumariamente sem revisão (desk reject).
              </li>
              <li>
                <b>Novidade</b>: a novidade e/ou o caráter inovador das soluções
                propostas e/ou análises realizadas, das formulações de problemas
                científicos e/ou práticos, dos procedimentos metodológicos, da
                proposição e/ou uso de teorias de SI e/ou das avaliações e
                estudos experimentais apresentados, i.e., o quão o artigo
                completo submetido para a TPSI é suficientemente original com
                relação ao estado da arte.
              </li>
              <li>
                <b>Rigor</b>: a solidez, a clareza e a profundidade de
                contribuições técnicas ou teóricas, bem como o nível de rigor
                dos procedimentos metodológicos empregados e a integridade da
                avaliação apresentada no artigo completo submetido à TPSI.
              </li>
              <li>
                <b>Relevância</b>: a importância e/ou o impacto potencial do
                artigo completo submetido para a TPSI em relação à área de SI a
                partir das publicações realizadas pela comunidade científica em
                veículos internacionais, incluindo as teorias de SI disponíveis
                no portal {external(links.byu, "Byu Library")}, bem como
                nacionais, como nos {external(links.anais, "Anais do SBSI")},
                nos {external(links.estendidos, "Anais Estendidos do SBSI")} e
                no periódico{" "}
                {external(
                  links.isys,
                  "iSys: Revista Brasileira de Sistemas de Informação",
                )}
                , além dos{" "}
                {external(
                  links.grandsi,
                  "II GranDSI-Br: Grandes Desafios de Sistemas de Informação no Brasil 2026-2036",
                )}
                ..
              </li>
              <li>
                <b>Transparência, Replicabilidade e Reprodutibilidade</b>: o
                grau em que o artigo completo submetido à TPSI inclui
                informações suficientes para entender como uma inovação
                funciona; como os dados foram obtidos, analisados e
                interpretados; e como o artigo completo oferece suporte à
                verificação independente ou à replicação das contribuições
                reivindicadas.
              </li>
              <li>
                <b>Apresentação</b>: a clareza, a forma e a organização da
                exposição do conteúdo no artigo completo submetido à TPSI.
              </li>
            </ul>
          </section>
          <section>
            <h2>Apresentação e Publicação dos Artigos Completos Aceitos</h2>
            <p>
              As pessoas autoras deverão incluir seus dados (nomes, filiações e
              e-mails, bem como demais informações necessárias ao artigo, a
              exemplo de citações a outros trabalhos das pessoas autoras e dados
              da publicação, além de agradecimentos) na versão final dos artigos
              completos aceitos para a TPSI.
            </p>
            <p>
              Os artigos completos aceitos serão publicados nos{" "}
              {external(links.anais, "Anais do SBSI")} como parte do acervo da
              Biblioteca Digital da SBC (SOL - SBC OpenLib), desde que atendam
              aos seguintes requisitos:
            </p>
            <ul className="tp-publication-requirements">
              <li>
                Pelo menos uma das pessoas autoras realize o pagamento da sua
                inscrição no evento dentro do prazo estipulado;
              </li>
              <li>
                Seja feito o pagamento de UMA TAXA de publicação PARA CADA
                artigo completo aceito;
              </li>
              <li>
                Pelo menos uma das pessoas autoras compareça PRESENCIALMENTE ao
                SBSI 2026 para apresentar o artigo completo aceito.
              </li>
            </ul>
            <p>
              Ressalta-se que o SBSI 2027 é PRESENCIAL e não haverá qualquer
              possibilidade de apresentação on-line dos artigos completos
              aceitos. Pessoas autoras sócias da SBC devem estar em dia com a
              anuidade para terem direito aos valores reduzidos.
            </p>
          </section>
          <section>
            <h2>Coordenação da Trilha de Pesquisa em SI do SBSI 2027</h2>
            <p>Claudia Cappelli (UERJ)</p>
            <p>Maria Claudia Emer (UTFPR)</p>
          </section>
        </article>
        <aside className="tp-aside">
          <div className="tp-date-card">
            <h2>Datas Importantes</h2>
            <ul className="tp-date-list">
              {sidebarDates.map(([date, label]) => (
                <li className="tp-date" key={date}>
                  <span>{date}</span>
                  <strong>{label}</strong>
                </li>
              ))}
            </ul>
            <a
              className="tp-submission-link"
              href={links.submission}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submeter artigo ↗
            </a>
          </div>
          <div className="tp-coordination">
            <p className="tp-kicker">Coordenação</p>
            <p>
              <strong>Claudia Cappelli (UERJ)</strong>
            </p>
            <p>
              <strong>Maria Claudia Emer (UTFPR)</strong>
            </p>
          </div>
          <div className="tp-links">
            <a href={links.cesi} target="_blank" rel="noreferrer">
              CESI ↗
            </a>
            <a href={links.sbc} target="_blank" rel="noreferrer">
              SBC ↗
            </a>
            <a href={links.jems} target="_blank" rel="noreferrer">
              JEMS3 ↗
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
