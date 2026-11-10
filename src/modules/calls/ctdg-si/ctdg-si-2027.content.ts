import type { CallInline, CallPageData } from "../../../types/call-page.types";
import { tpSi2027Content } from "../tp-si/tp-si-2027.content";

export const ctdgSi2027Links: Record<string, string> = {
  cesi: "https://www2.sbc.org.br/ce-si/",
  sbc: "https://www.sbc.org.br/",
  grandsi: "https://www2.sbc.org.br/ce-si/arquivos/grandsi.pdf",
  template:
    "https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip",
  jems: "https://jems3.sbc.org.br/",
  submission: "https://jems3.sbc.org.br/ctdg-si2027",
  govbr: "https://assinador.iti.br/assinatura/index.xhtml",
  conduta: "https://sol.sbc.org.br/index.php/indice/conduta",
  sol: "https://sol.sbc.org.br/index.php/indice",
  estendidos: "https://sol.sbc.org.br/index.php/sbsi_estendido/",
  isys: "https://journals-sol.sbc.org.br/index.php/isys/",
  reic: "https://journals-sol.sbc.org.br/index.php/reic",
} as const;

const link = (name: string, text: string): CallInline => ({
  link: name,
  text,
});

const strong = (text: string): CallInline => ({ strong: text });

export const ctdgSi2027Content: Record<"pt" | "en", CallPageData> = {
  pt: {
    hero: {
      title:
        "IX Concurso de Teses, Dissertações e Trabalhos de Graduação em SI (CTDG-SI 2027)",
      submit: "Submeter trabalho",
      badges: {
        date: "17–20 maio 2027",
        location: "Campo Grande · MS",
        format: "Fase final híbrida",
      },
    },
    introTitle: "Descrição",
    intro: [
      [
        "O IX Concurso de Teses, Dissertações e Trabalhos de Graduação em Sistemas de Informação (CTDG-SI) é uma iniciativa da ",
        link("cesi", "Comissão Especial de Sistemas de Informação (CESI)"),
        " da ",
        link("sbc", "Sociedade Brasileira de Computação (SBC)"),
        ", realizada como trilha do XXIII Simpósio Brasileiro de Sistemas de Informação (SBSI 2027).",
      ],
      [
        "O CTDG-SI 2027 está organizado em três categorias, com quatro modalidades de premiação:",
      ],
    ],
    introList: [
      "Tese de Doutorado",
      "Dissertação de Mestrado",
      "Trabalho de Graduação, incluindo Trabalho de Conclusão de Curso (TCC) e Trabalho de Iniciação Científica ou Tecnológica (IC/IT)",
    ],
    introClosing: [
      [
        "Para participar do concurso, os trabalhos devem ser da área de Sistemas de Informação e ter sido concluídos (isto é, finalizados/defendidos e aprovados) em 2026. O concurso visa selecionar e premiar até três melhores trabalhos em cada categoria.",
      ],
    ],
    topicsTitle: "Tópicos de interesse",
    topics: tpSi2027Content.pt.topics,
    datesTitle: "DATAS IMPORTANTES",
    dates: [
      ["29/01/2027", "Submissão dos trabalhos", "Submissão no JEMS3"],
      ["29/03/2027", "Divulgação dos finalistas", "Resultado da Fase 1"],
      ["12/04/2027", "Envio da versão final", ""],
      [
        "Até 12/04/2027",
        "Inscrição dos autores finalistas",
        "Com taxa de publicação",
      ],
      ["17/05/2027 a 20/05/2027", "Realização do SBSI 2027", ""],
    ],
    submissionTitle: "Formato de submissão",
    submission: {
      paragraphs: [
        [
          "Cada submissão deverá conter os seguintes arquivos, enviados pelo sistema ",
          link("submission", "JEMS3"),
          ", todos em formato PDF, conforme a modalidade do trabalho.",
        ],
      ],
      phases: [
        {
          title: "Modalidades Doutorado, Mestrado e TCC",
          rules: [
            [
              "Texto completo (tese de doutorado, dissertação de mestrado, ou trabalho de conclusão de curso de graduação) mantido em seu formato original, em português ou inglês.",
            ],
            [
              "Diploma, declaração (carta) de conclusão do curso, ou ata de defesa do trabalho, constando obrigatoriamente: nome do candidato e nome do orientador; instituição e curso; título do trabalho; data da defesa e resultado (aprovação); nome do coordenador ou secretário do curso, data e assinatura.",
            ],
            [
              "Ficha de submissão que destaca os principais aspectos do trabalho, em português, respeitando o limite de três páginas.",
            ],
            [
              "Carta do(a) orientador(a), assinada digitalmente com certificação (ex.: ",
              link("govbr", ".gov.br"),
              "), destacando os principais aspectos pelos quais o trabalho merece o prêmio.",
            ],
          ],
        },
        {
          title: "Modalidade Iniciação Científica ou Tecnológica (IC/IT)",
          rules: [
            [
              "Certificado ou declaração (carta) institucional, contendo: nome do candidato e do orientador; instituição e curso; título do trabalho; data de conclusão; assinatura válida do órgão responsável.",
            ],
            [
              "Artigo-resumo do trabalho, no ",
              link("template", "formato SBC"),
              ", em português ou inglês, com no mínimo 8 e no máximo 10 páginas (incluindo figuras, tabelas, diagramas, referências e apêndices). Caso o estudante já tenha tido um artigo publicado em outro veículo, inclusive o SBSI, o conteúdo pode ser utilizado para fins de avaliação da Fase 1. Se o trabalho for selecionado como finalista, será necessário adequar o artigo a um resumo, conforme as instruções da seção “Premiação e publicação”, antes da publicação.\n\nO artigo deve explicitar, dentre os autores, quem é o orientador (e o coorientador, se houver) e incluir: visão geral do tema, definição dos objetivos e relevância da pesquisa; estado da arte/prática (trabalhos relacionados); métodos científicos empregados (opcional para trabalho de conclusão de curso de graduação); descrição e discussão dos resultados obtidos; e a conclusão com base nos resultados, relacionando-os aos objetivos do trabalho. Deve ser apresentada, na visão geral do tema, uma análise da relação do trabalho com o relatório dos ",
              link(
                "grandsi",
                "Grandes Desafios de Pesquisa em Sistemas de Informação no Brasil 2016 a 2026",
              ),
              ".",
            ],
            [
              "Declaração do tipo de artigo submetido (carta com assinatura dos autores e orientadores) indicando uma das seguintes opções: conteúdo do artigo original (nem submetido, nem publicado); conteúdo do artigo submetido a outro evento ou periódico (inclusive do próprio SBSI 2026), mas ainda não aceito, indicando o veículo; ou conteúdo do artigo aceito ou publicado em outro evento ou periódico, indicando o veículo.",
            ],
          ],
        },
      ],
      openScience: [
        "Ao submeterem trabalhos ao SBSI 2027, as pessoas autoras reconhecem que estão em conformidade com o ",
        link("conduta", "Código de Conduta para Autores em Publicações da SBC"),
        ".",
      ],
    },
    importantInfoTitle: "Inscrição dos autores finalistas",
    importantInfoSubtitle: [
      [
        "Conforme as disposições do Manual de Eventos Realizados e Correalizados da SBC, os autores de trabalhos efetivamente selecionados para a Fase Final do CTDG-SI 2027 poderão realizar sua inscrição no SBSI 2027 na categoria Estudante (Graduação ou Pós-graduação), mesmo que já estejam diplomados ou não possuam matrícula ativa na data da inscrição. Para comprovar esse direito no sistema ECOS, o(a) autor(a) poderá enviar um único arquivo em PDF contendo a carta ou comprovante de aprovação ou seleção do trabalho no CTDG-SI 2027 e o comprovante oficial de defesa ou apresentação do TCC, da dissertação ou da tese, ou documento oficial de conclusão do curso, conforme o caso. Os(as) autores(as) finalistas poderão escolher, conforme sua situação associativa, uma das modalidades de inscrição estudantil:",
      ],
    ],
    importantInfoParagraphs: [
      [
        strong("Estudante Associado(a):"),
        " para participantes com anuidade vigente na SBC.",
      ],
      [
        strong("Estudante COMBO (Inscrição + Associação/Renovação):"),
        " para participantes não associados ou com anuidade a vencer, permitindo associação ou renovação com desconto.",
      ],
      [
        strong("Estudante Não Associado(a):"),
        " para participantes que desejem apenas realizar a inscrição no evento.",
      ],
      [
        "Essa condição especial aplica-se exclusivamente aos autores finalistas, para participação e apresentação de seus trabalhos aceitos.",
      ],
    ],
    reviewTitle: "Processo e critérios de avaliação",
    review: {
      paragraphs: [
        [
          "As submissões que não estiverem finalizadas conforme os dados solicitados pelo JEMS3 e que não tiverem os arquivos correspondentes devidamente postados, conforme as regras estabelecidas nesta chamada, serão rejeitadas e, portanto, não participarão da Fase 1. A avaliação será conduzida em duas fases.",
        ],
        [
          strong("Fase 1 (eliminatória)"),
          "\nToda a documentação passará por um processo de avaliação para seleção dos melhores trabalhos de cada categoria. Cada trabalho será avaliado por pelo menos dois especialistas. Os resultados da avaliação dos trabalhos selecionados serão divulgados aos autores. Até três trabalhos mais bem avaliados de cada categoria poderão ser selecionados para a Fase Final, sendo classificados como finalistas.",
        ],
        [
          strong("Fase Final (classificatória)"),
          "\nA Fase Final ocorrerá durante o evento, em formato híbrido: as pessoas autoras poderão participar presencialmente ou de forma remota, por videoconferência.\n\nA pessoa autora que defendeu a tese de doutorado, a dissertação de mestrado, o trabalho de conclusão de curso de graduação, ou concluiu seu trabalho de iniciação científica ou tecnológica, deverá fazer uma apresentação oral do trabalho, em um tempo estipulado pela organização do evento, para a Banca de Avaliação, que avaliará a qualidade da apresentação e poderá fazer perguntas à pessoa apresentadora. Para os trabalhos de conclusão de curso de graduação realizados em grupo, a apresentação poderá ser feita por apenas um dos integrantes.\n\nO trabalho não poderá ser apresentado pela pessoa professora-orientadora ou por qualquer outra pessoa, devendo, obrigatoriamente, ser apresentado pela pessoa autora que recebeu o título (de doutor, mestre, graduado ou IC/IT) pelo trabalho. A não apresentação do trabalho nesta etapa implica a desclassificação.\n\nA classificação final considerará tanto a avaliação do trabalho escrito quanto o desempenho da pessoa autora na apresentação oral. A avaliação dos trabalhos será baseada nos seguintes critérios:",
        ],
      ],
      criteria: [
        [
          strong("Relevância do problema"),
          "Quão relevante é o problema abordado para a comunidade científica da área de Sistemas de Informação, considerando o tripé pessoas - processos/organizações - tecnologias.",
        ],
        [
          strong("Relevância da contribuição e dos resultados"),
          "Quão relevante é a contribuição do trabalho para a área de pesquisa de Sistemas de Informação em termos dos resultados apresentados, abordando o tripé pessoas - processos/organizações - tecnologias.",
        ],
        [
          strong("Originalidade"),
          "Grau de originalidade do problema investigado, da abordagem proposta e das soluções apresentadas.",
        ],
        [
          strong("Impacto"),
          "Qual é o impacto do trabalho até este momento, em termos técnicos, científicos e sociais.",
        ],
        [
          strong("Qualidade técnico-científica"),
          "Como é a qualidade técnico-científica do trabalho apresentado, em termos dos procedimentos científicos e metodológicos adotados.",
        ],
        [
          strong("Qualidade da apresentação"),
          "O quão bem apresentado está o trabalho no artigo, em termos de organização, objetividade, redação, formatação e contextualização.",
        ],
        [
          strong("Clareza na exposição dos resultados e das contribuições"),
          "Quão claro é o trabalho na apresentação de seus resultados e de suas contribuições para a área de Sistemas de Informação.",
        ],
      ],
      publication: [
        [
          "A comissão organizadora do IX CTDG-SI coordenará internamente uma Banca de Avaliação da Fase Final, para determinar os trabalhos classificados em cada categoria.\n\nA comissão reserva-se o direito de indicar para premiação apenas os trabalhos que considerar adequados, estando prevista, inclusive, a possibilidade de não haver trabalhos indicados para premiação em uma ou mais categorias.",
        ],
      ],
    },
    publicationTitle: "Premiação e publicação",
    publication: {
      paragraphs: [
        [
          "O anúncio dos trabalhos premiados ocorrerá em uma solenidade específica no SBSI. Os trabalhos premiados entre os finalistas receberão certificados de “Prêmio” nos quais constarão explicitamente a posição alcançada e a categoria.\n\nOs trabalhos premiados das categorias Tese de Doutorado e Dissertação de Mestrado serão convidados a submeter uma versão estendida à ",
          link("isys", "iSys - Journal of Information Systems"),
          ". Os trabalhos premiados da categoria Trabalho de Graduação serão convidados a submeter uma versão estendida à ",
          link(
            "reic",
            "REIC - Revista Eletrônica de Iniciação Científica em Computação",
          ),
          ", ISSN 3085-8461. Ambos os periódicos são indexados na SBC OpenLib, o portal de conteúdo da SBC.",
        ],
        [
          "Os trabalhos aceitos na Fase 1 do CTDG-SI 2027, que atendam aos requisitos, comporão os ",
          link("estendidos", "Anais Estendidos do SBSI"),
          ", publicados na ",
          link("sol", "SBC OpenLib (SOL)"),
          ", a biblioteca digital da SBC.\n\nPara os trabalhos finalistas de (a) doutorado, (b) mestrado, (c) TCC e (d) IC/IT que já tenham sido publicados ou submetidos a outro periódico ou evento científico, os autores deverão encaminhar, como versão final para publicação nos anais do evento, um artigo-resumo do trabalho, elaborado no ",
          link("template", "formato SBC"),
          ", em português ou inglês, com no mínimo 2 e no máximo 3 páginas (incluindo figuras, tabelas e diagramas, mas excluindo referências e apêndices). Nesse caso, o(a) autor(a) deverá manter o título original do trabalho, acrescido do sufixo “Resumo Estendido – CTDG-SI 2027” ou “Extended Abstract – CTDG-SI 2027”. O artigo deve citar a publicação original, no caso de IC/IT que já tenha sido publicado ou submetido a outro periódico ou evento científico.\n\nPara os trabalhos finalistas de IC/IT cujo conteúdo do artigo-resumo seja original (não submetido nem publicado em outro veículo), será publicada a versão final do artigo nos anais estendidos do SBSI, observados os requisitos desta chamada.\n\nOs trabalhos selecionados na Fase 1 serão publicados nos anais do evento desde que atendam aos seguintes requisitos:",
        ],
      ],
      requirements: [
        "O(a) autor(a) principal do trabalho defendido (tese, dissertação ou trabalho de graduação) efetive sua inscrição no evento no prazo estipulado e faça a apresentação do trabalho na Fase Final;",
        "Seja efetuado o pagamento de uma taxa de publicação por cada trabalho aceito.",
      ],
      closing:
        "Todos os artigos publicados serão indexados e receberão um DOI (Digital Object Identifier).",
    },
    tpcTitle: "Comitê de Programa",
    tpcStatus: "A definir.",
    coordinationTitle: "Coordenação da trilha",
    coordinationKicker: "Responsáveis pelo CTDG-SI no SBSI 2027.",
    coordinators: [
      { name: "Sean Wolfgand Matsui Siqueira", institution: "UNIRIO" },
      { name: "Karin Satie Komati", institution: "IFES" },
    ],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS3 ↗" },
    tocTitle: "NESTA CHAMADA",
    toc: [
      { id: "descricao", title: "Descrição" },
      { id: "topicos", title: "Tópicos" },
      { id: "datas", title: "Datas" },
      { id: "instrucoes", title: "Submissão" },
      { id: "informacoes-importantes", title: "Inscrição dos finalistas" },
      { id: "revisao", title: "Avaliação" },
      { id: "publicacao", title: "Premiação e publicação" },
      { id: "tpc", title: "Comitê de Programa" },
      { id: "coordenacao", title: "Coordenação" },
    ],
  },
  en: {
    hero: {
      title:
        "9th Thesis, Dissertation, and Undergraduate Work Competition in IS (CTDG-SI 2027)",
      submit: "Submit work",
      badges: {
        date: "May 17–20, 2027",
        location: "Campo Grande · MS",
        format: "Hybrid final round",
      },
    },
    introTitle: "Description",
    intro: [
      [
        "The 9th Thesis, Dissertation, and Undergraduate Work Competition in Information Systems (CTDG-SI) is an initiative of the ",
        link("cesi", "Special Committee on Information Systems (CESI)"),
        " of the ",
        link("sbc", "Brazilian Computer Society (SBC)"),
        ", held as a track of the 23rd Brazilian Symposium on Information Systems (SBSI 2027).",
      ],
      [
        "CTDG-SI 2027 is organized into three categories, with four award modalities:",
      ],
    ],
    introList: [
      "Doctoral Thesis",
      "Master's Dissertation",
      "Undergraduate Work, including Undergraduate Final Project (TCC) and Scientific or Technological Initiation Work (IC/IT)",
    ],
    introClosing: [
      [
        "To take part in the competition, works must belong to the Information Systems field and have been completed (that is, finished/defended and approved) in 2026. The competition aims to select and award up to the three best works in each category.",
      ],
    ],
    topicsTitle: "Topics of Interest",
    topics: tpSi2027Content.en.topics,
    datesTitle: "IMPORTANT DATES",
    dates: [
      ["29/01/2027", "Work submission", "Submission in JEMS3"],
      ["29/03/2027", "Finalists announcement", "Phase 1 results"],
      ["12/04/2027", "Final version submission", ""],
      [
        "Until 12/04/2027",
        "Finalist author registration",
        "With publication fee",
      ],
      ["17/05/2027 to 20/05/2027", "Holding of SBSI 2027", ""],
    ],
    submissionTitle: "Submission Format",
    submission: {
      paragraphs: [
        [
          "Each submission must contain the following files, sent through the ",
          link("submission", "JEMS3"),
          " system, all in PDF format, according to the work's modality.",
        ],
      ],
      phases: [
        {
          title: "Doctoral, Master's, and TCC Modalities",
          rules: [
            [
              "Full text (doctoral thesis, master's dissertation, or undergraduate final project) kept in its original format, in Portuguese or English.",
            ],
            [
              "Diploma, course completion statement (letter), or defense minutes, mandatorily stating: candidate's and advisor's names; institution and program; title of the work; defense date and result (approval); name of the program coordinator or secretary, date, and signature.",
            ],
            [
              "Submission form highlighting the main aspects of the work, in Portuguese, within a limit of three pages.",
            ],
            [
              "Letter from the advisor, digitally signed with certification (e.g., ",
              link("govbr", ".gov.br"),
              "), highlighting the main reasons why the work deserves the award.",
            ],
          ],
        },
        {
          title: "Scientific or Technological Initiation (IC/IT) Modality",
          rules: [
            [
              "Institutional certificate or statement (letter), containing: candidate's and advisor's names; institution and program; title of the work; completion date; valid signature of the responsible office.",
            ],
            [
              "Summary paper of the work, in the ",
              link("template", "SBC format"),
              ", in Portuguese or English, with a minimum of 8 and a maximum of 10 pages (including figures, tables, diagrams, references, and appendices). If the student has already had a paper published in another venue, including SBSI, its content may be used for Phase 1 evaluation purposes. If the work is selected as a finalist, the paper must be adapted into an abstract, following the instructions in the “Awards and Publication” section, before publication.\n\nThe paper must identify, among the authors, the advisor (and co-advisor, if any) and include: an overview of the topic, definition of objectives and research relevance; state of the art/practice (related work); scientific methods employed (optional for undergraduate final projects); description and discussion of the results obtained; and a conclusion based on the results, relating them to the work's objectives. The overview must present an analysis of how the work relates to the report ",
              link(
                "grandsi",
                "Grand Research Challenges in Information Systems in Brazil 2016–2026",
              ),
              ".",
            ],
            [
              "Statement of the type of paper submitted (letter signed by authors and advisors) indicating one of the following options: original paper content (neither submitted nor published); content submitted to another event or journal (including SBSI 2026 itself) but not yet accepted, indicating the venue; or content accepted or published in another event or journal, indicating the venue.",
            ],
          ],
        },
      ],
      openScience: [
        "By submitting works to SBSI 2027, authors acknowledge that they comply with the ",
        link("conduta", "SBC Code of Conduct for Authors of Publications"),
        ".",
      ],
    },
    importantInfoTitle: "Finalist Author Registration",
    importantInfoSubtitle: [
      [
        "In accordance with SBC's Manual for Held and Co-held Events, authors of works effectively selected for the CTDG-SI 2027 Final Phase may register for SBSI 2027 in the Student category (Undergraduate or Graduate), even if they have already graduated or do not have an active enrollment on the registration date. To prove this right in the ECOS system, the author may send a single PDF file containing the letter or proof of approval or selection of the work in CTDG-SI 2027 and the official proof of defense or presentation of the TCC, dissertation, or thesis, or the official course completion document, as applicable. Finalist authors may choose, according to their membership status, one of the student registration modalities:",
      ],
    ],
    importantInfoParagraphs: [
      [
        strong("Student Member:"),
        " for participants with current SBC membership.",
      ],
      [
        strong("Student COMBO (Registration + Membership/Renewal):"),
        " for non-members or participants whose membership is about to expire, allowing membership or renewal at a discount.",
      ],
      [
        strong("Student Non-Member:"),
        " for participants who only wish to register for the event.",
      ],
      [
        "This special condition applies exclusively to finalist authors, for participating in and presenting their accepted works.",
      ],
    ],
    reviewTitle: "Evaluation Process and Criteria",
    review: {
      paragraphs: [
        [
          "Submissions that are not finalized with the data requested by JEMS3 and that do not have the corresponding files properly uploaded, according to the rules of this call, will be rejected and therefore will not take part in Phase 1. The evaluation will be conducted in two phases.",
        ],
        [
          strong("Phase 1 (eliminatory)"),
          "\nAll documentation will go through an evaluation process to select the best works in each category. Each work will be evaluated by at least two experts. The evaluation results of the selected works will be shared with the authors. Up to the three best-evaluated works in each category may be selected for the Final Phase, being classified as finalists.",
        ],
        [
          strong("Final Phase (classificatory)"),
          "\nThe Final Phase will take place during the event, in a hybrid format: authors may participate in person or remotely, by videoconference.\n\nThe author who defended the doctoral thesis, master's dissertation, or undergraduate final project, or completed the scientific or technological initiation work, must give an oral presentation of the work, within a time set by the event organization, to the Evaluation Committee, which will assess the quality of the presentation and may ask questions to the presenter. For undergraduate final projects carried out in groups, the presentation may be given by only one of the members.\n\nThe work may not be presented by the advisor or by any other person; it must be presented by the author who received the degree (doctor, master, graduate, or IC/IT) for the work. Failure to present the work at this stage results in disqualification.\n\nThe final ranking will consider both the evaluation of the written work and the author's performance in the oral presentation. Works will be evaluated according to the following criteria:",
        ],
      ],
      criteria: [
        [
          strong("Problem relevance"),
          "How relevant the addressed problem is to the Information Systems scientific community, considering the people - processes/organizations - technologies tripod.",
        ],
        [
          strong("Relevance of the contribution and results"),
          "How relevant the work's contribution is to Information Systems research in terms of the results presented, addressing the people - processes/organizations - technologies tripod.",
        ],
        [
          strong("Originality"),
          "Degree of originality of the investigated problem, the proposed approach, and the solutions presented.",
        ],
        [
          strong("Impact"),
          "The impact of the work so far, in technical, scientific, and social terms.",
        ],
        [
          strong("Technical-scientific quality"),
          "The technical-scientific quality of the work, in terms of the scientific and methodological procedures adopted.",
        ],
        [
          strong("Presentation quality"),
          "How well the work is presented in the paper, in terms of organization, objectivity, writing, formatting, and contextualization.",
        ],
        [
          strong("Clarity of results and contributions"),
          "How clearly the work presents its results and its contributions to the Information Systems field.",
        ],
      ],
      publication: [
        [
          "The 9th CTDG-SI organizing committee will internally coordinate a Final Phase Evaluation Committee to determine the ranked works in each category.\n\nThe committee reserves the right to nominate for awards only the works it deems appropriate, including the possibility of no works being nominated in one or more categories.",
        ],
      ],
    },
    publicationTitle: "Awards and Publication",
    publication: {
      paragraphs: [
        [
          "The awarded works will be announced at a dedicated ceremony at SBSI. Awarded finalist works will receive “Award” certificates explicitly stating the position achieved and the category.\n\nAwarded works in the Doctoral Thesis and Master's Dissertation categories will be invited to submit an extended version to ",
          link("isys", "iSys - Journal of Information Systems"),
          ". Awarded works in the Undergraduate Work category will be invited to submit an extended version to ",
          link(
            "reic",
            "REIC - Electronic Journal of Undergraduate Research in Computing",
          ),
          ", ISSN 3085-8461. Both journals are indexed in SBC OpenLib, SBC's content portal.",
        ],
        [
          "Works accepted in Phase 1 of CTDG-SI 2027 that meet the requirements will be part of the ",
          link("estendidos", "SBSI Extended Proceedings"),
          ", published in ",
          link("sol", "SBC OpenLib (SOL)"),
          ", SBC's digital library.\n\nFor finalist works in (a) doctoral, (b) master's, (c) TCC, and (d) IC/IT that have already been published in or submitted to another journal or scientific event, authors must send, as the final version for publication in the event proceedings, a summary paper of the work in the ",
          link("template", "SBC format"),
          ", in Portuguese or English, with a minimum of 2 and a maximum of 3 pages (including figures, tables, and diagrams, but excluding references and appendices). In this case, the author must keep the original title of the work, followed by the suffix “Resumo Estendido – CTDG-SI 2027” or “Extended Abstract – CTDG-SI 2027”. The paper must cite the original publication, in the case of IC/IT works already published in or submitted to another journal or scientific event.\n\nFor IC/IT finalist works whose summary paper content is original (neither submitted nor published elsewhere), the final version of the paper will be published in the SBSI extended proceedings, subject to the requirements of this call.\n\nWorks selected in Phase 1 will be published in the event proceedings provided that they meet the following requirements:",
        ],
      ],
      requirements: [
        "The main author of the defended work (thesis, dissertation, or undergraduate work) registers for the event within the stipulated deadline and presents the work in the Final Phase;",
        "A publication fee is paid for each accepted work.",
      ],
      closing:
        "All published papers will be indexed and will receive a DOI (Digital Object Identifier).",
    },
    tpcTitle: "Program Committee",
    tpcStatus: "To be announced.",
    coordinationTitle: "Track Chairs",
    coordinationKicker: "Those responsible for CTDG-SI at SBSI 2027.",
    coordinators: [
      { name: "Sean Wolfgand Matsui Siqueira", institution: "UNIRIO" },
      { name: "Karin Satie Komati", institution: "IFES" },
    ],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS3 ↗" },
    tocTitle: "IN THIS CALL",
    toc: [
      { id: "descricao", title: "Description" },
      { id: "topicos", title: "Topics" },
      { id: "datas", title: "Dates" },
      { id: "instrucoes", title: "Submission" },
      { id: "informacoes-importantes", title: "Finalist registration" },
      { id: "revisao", title: "Evaluation" },
      { id: "publicacao", title: "Awards and publication" },
      { id: "tpc", title: "Program Committee" },
      { id: "coordenacao", title: "Chairs" },
    ],
  },
};
