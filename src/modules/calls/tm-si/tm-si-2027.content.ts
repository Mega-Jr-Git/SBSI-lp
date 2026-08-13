import type { CallInline, CallPageData } from "../../../types/call-page.types";

export const tmSi2027Links: Record<string, string> = {
  cesi: "https://www2.sbc.org.br/ce-si/",
  sbc: "https://www.sbc.org.br/",
  jems: "https://jems3.sbc.org.br/",
  submission: "https://jems3.sbc.org.br/events/694",
  modeloCapitulos: "https://www.sbc.org.br/documentosinstitucionais/#publicacoes",
  templateArtigos: "https://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos",
};

const link = (name: string, text: string): CallInline => ({
  link: name,
  text,
});

const strong = (text: string): CallInline => ({ strong: text });

export const tmSi2027Content: Record<"pt" | "en", CallPageData> = {
  pt: {
    hero: {
      kicker: "Chamadas",
      title: "Trilha de Minicursos em SI (TM-SI)",
      dates: "17–20 maio 2027",
      location: "Campo Grande · MS",
      format: "Presencial",
      submit: "Submeter proposta ↗",
    },
    intro: [
      [
        "A Comissão Organizadora da 23ª edição do Simpósio Brasileiro de Sistemas de Informação (SBSI 2027) convida pesquisadores da área de Sistemas de Informação a submeterem propostas de minicursos, introdutórios ou avançados, a serem ministrados nesta edição do evento.",
      ],
      [
        "Minicursos são eventos de curta duração (4 horas) com a finalidade de apresentar uma visão geral de um tópico de pesquisa ou tecnologia de interesse da comunidade de Sistemas de Informação. O objetivo é permitir que o ouvinte aprenda sobre um novo assunto vinculado à sua área de atuação e extraia elementos para aplicação em sua pesquisa e/ou prática. Os minicursos deverão estar relacionados aos tópicos de interesse do simpósio.",
      ],
    ],
    targetAudienceTitle: "Escopo e Público-Alvo",
    targetAudience: [
      [
        "Os minicursos a serem apresentados no SBSI 2027 têm como público-alvo estudantes do ensino médio, estudantes de graduação, estudantes de pós-graduação, profissionais da indústria e docentes na área de Sistemas de Informação. Os minicursos podem cobrir tanto conceitos e aspectos fundamentais quanto tecnologias emergentes em Sistemas de Informação.",
      ],
    ],
    topicsTitle: "Tópicos de Interesse",
    topics: [
      "Aspectos e impactos tecnológicos, sociais, econômicos e ambientais de sistemas de informação",
      "Complexidade de sistemas de informação",
      "Desafios e tendências de sistemas de informação aplicados a domínios (saúde, agricultura, governo, educação, entre outros)",
      "Diversidade, equidade e inclusão em sistemas de informação",
      "Ecossistemas digitais, de software e de negócios",
      "Educação em sistemas de informação",
      "Ética, cultura, legislação e política em sistemas de informação",
      "Gestão de processos de negócios",
      "Inovação social e tecnológica em sistemas de informação",
      "Inteligência artificial (generativa, LLM, PLN, entre outros) em sistemas de informação",
      "Negócios intensivos em software",
      "Paradigmas, modelagem, design, engenharia e avaliação de sistemas de informação",
      "Pesquisas interdisciplinares em sistemas de informação",
      "Segurança e privacidade em sistemas de informação",
      "Sistemas de informação e o mundo aberto",
      "Sistemas de sistemas e sistemas de sistemas de informação",
      "Sistemas de informação organizacionais",
      "Sistemas de informação para gestão de dados, informação e conhecimento",
      "Sustentabilidade em sistemas de informação",
      "Tecnologias emergentes aplicadas a sistemas de informação",
      "Teoria, epistemologia e metodologia da pesquisa em sistemas de informação",
      "Transparência e accountability em sistemas de informação",
      "Visão sociotécnica de sistemas de informação",
    ],
    topicsNote:
      "Também será dada preferência a minicursos com caráter mais prático, que em suas propostas sejam destacadas estratégias para torná-los mais dinâmicos e para fomentar a interação entre instrutores e público, evitando estratégias exclusivamente expositivas.",
    datesTitle: "Datas Importantes",
    dates: [
      [
        "14/09/2026",
        "Submissão de proposta",
        "artigo de 4 páginas via JEMS 3",
      ],
      [
        "23/10/2026",
        "1ª etapa de avaliação (proposta)",
        "notificação de resultado aos autores",
      ],
      [
        "01/12/2026",
        "Submissão do texto completo",
        "envio do capítulo de livro aos coordenadores",
      ],
      [
        "15/02/2027",
        "Entrega da versão final",
        "capítulo de livro finalizado para publicação",
      ],
      ["17/05/2027 a 20/05/2027", "Realização do SBSI 2027", ""],
    ],
    submissionTitle: "Instruções de Submissão",
    submission: {
      paragraphs: [
        [
          "As submissões dos minicursos ocorrerão em duas fases via plataforma ",
          link("jems", "JEMS 3 da SBC"),
          ":",
        ],
      ],
      phases: [
        {
          paragraphs: [
            [
              strong("Primeira fase (Avaliação da proposta): "),
              "Na primeira fase, a proposta do minicurso deverá ser escrita em Português ou Inglês e ter, no máximo, 4 páginas (",
              link("templateArtigos", "formato de artigos da SBC"),
              "). A proposta deve conter: título, autor(es) e filiação; resumo com até 200 palavras; descrição dos objetivos e requisitos técnicos; metodologia didática; tempo de realização (máx. 4h); relevância para o evento; esboço do conteúdo programático; referências e biografia curta dos autores.",
            ],
          ],
        },
        {
          paragraphs: [
            [
              strong("Segunda fase (Texto completo): "),
              "Cada minicurso selecionado deverá ter como versão final um texto no mesmo idioma da proposta e apresentação. O texto será publicado como capítulo de um livro on-line, conforme ",
              link("modeloCapitulos", "modelo para publicação de capítulos de livros da SBC"),
              ", de 20 a 30 páginas. Capítulos em português também devem conter título e resumo em inglês. Os autores deverão autorizar a publicação do resumo do minicurso no website do evento.",
            ],
          ],
        },
      ],
      rules: [
        [
          "Os minicursos serão mantidos no evento com submissão de propostas pela comunidade.",
        ],
        [
          "Um capítulo de livro deverá ser produzido e avaliado como resultado do aceite de uma proposta.",
        ],
        [
          "Os minicursos serão gratuitos para os participantes do SBSI (sem cobrança extra de inscrição para os ouvintes).",
        ],
        [
          "A organização do SBSI não se responsabilizará pelo apoio financeiro para viabilizar a ida do(a) ministrante; os autores arcarão com as despesas de viagem.",
        ],
        [
          "Autores de minicursos deverão se inscrever no evento e pagar a taxa de publicação (geração de DOI).",
        ],
        [
          "A quantidade é limitada a no máximo DOIS minicursos por edição do SBSI.",
        ],
      ],
    },
    reviewTitle: "Processo de Avaliação",
    review: {
      paragraphs: [
        [
          "A seleção dos minicursos para a TM-SI no SBSI 2027 será realizada por membros do Comitê de Programa a partir das propostas submetidas na 1ª fase.",
        ],
        ["Os seguintes critérios serão considerados na avaliação das propostas:"],
      ],
      criteria: [
        [
          strong("Aderência ao Escopo"),
          ": relevância do tema e alinhamento com as áreas de interesse do SBSI 2027.",
        ],
        [
          strong("Qualidade Técnica e Metodológica"),
          ": clareza dos objetivos, estrutura do conteúdo programático e viabilidade de execução no tempo proposto.",
        ],
        [
          strong("Abordagem Didática"),
          ": estratégias propostas para tornar o minicurso dinâmico, interativo e com caráter prático, evitando apresentações exclusivamente expositivas.",
        ],
        [
          strong("Formato e Apresentação"),
          ": conformidade com o limite de páginas, modelo de formatação da SBC, clareza e qualidade da escrita.",
        ],
      ],
    },
    publicationTitle: "Apresentação e Publicação dos Minicursos Selecionados",
    publication: {
      paragraphs: [
        [
          "Os minicursos selecionados terão suas versões finais publicadas como capítulos de um livro on-line oficial do evento, mediante atendimento aos seguintes requisitos:",
        ],
      ],
      requirements: [
        "Pelo menos um(a) dos(as) autores(as)/ministrantes realize a inscrição no evento dentro do prazo estipulado;",
        "Seja efetuado o pagamento da taxa de publicação (relativa à geração de DOI) para o capítulo aceito;",
        "Pelo menos um(a) dos(as) ministrantes compareça PRESENCIALMENTE ao SBSI 2027 para ministrar o minicurso.",
      ],
      closing:
        "Ressalta-se que o SBSI 2027 é PRESENCIAL e a condução do minicurso deve ocorrer presencialmente. A organização do evento não arcará com custos de transporte ou hospedagem dos ministrantes. Pessoas autoras sócias da SBC devem estar em dia com a anuidade para obter valores reduzidos de inscrição.",
    },
    coordinationTitle: "Coordenação da TM-SI 2027",
    coordinationKicker: "Coordenação",
    coordinators: ["Davi Viana (UFMA)", "Paulo Malcher (UFRA)"],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS3 ↗" },
  },
  en: {
    hero: {
      kicker: "Calls",
      title: "IS Short Courses Track (TM-SI)",
      dates: "May 17–20, 2027",
      location: "Campo Grande · MS",
      format: "In person",
      submit: "Submit proposal ↗",
    },
    intro: [
      [
        "The Organizing Committee of the 23rd Brazilian Symposium on Information Systems (SBSI 2027) invites researchers in Information Systems to submit short course proposals (introductory or advanced) to be presented at this edition.",
      ],
      [
        "Short courses are short-duration events (4 hours) aimed at providing an overview of a research topic or technology relevant to the Information Systems community. The goal is to enable attendees to learn about new subjects in their field and apply these concepts in research or practice. Courses must align with the symposium's topics of interest.",
      ],
    ],
    targetAudienceTitle: "Scope and Target Audience",
    targetAudience: [
      [
        "The target audience includes high school students, undergraduate and graduate students, industry professionals, and faculty members in Information Systems. Courses may cover foundational concepts as well as emerging technologies.",
      ],
    ],
    topicsTitle: "Topics of Interest",
    topics: [
      "Technological, social, economic, and environmental aspects and impacts of information systems",
      "Complexity of information systems",
      "Challenges and trends in information systems applied to domains (health, agriculture, government, education, among others)",
      "Diversity, equity, and inclusion in information systems",
      "Digital, software, and business ecosystems",
      "Information systems education",
      "Ethics, culture, legislation, and policy in information systems",
      "Business process management",
      "Social and technological innovation in information systems",
      "Artificial intelligence (generative, LLM, NLP, among others) in information systems",
      "Software-intensive businesses",
      "Paradigms, modeling, design, engineering, and evaluation of information systems",
      "Interdisciplinary research in information systems",
      "Security and privacy in information systems",
      "Information systems and the open world",
      "Systems of systems and information systems of systems",
      "Organizational information systems",
      "Information systems for data, information, and knowledge management",
      "Sustainability in information systems",
      "Emerging technologies applied to information systems",
      "Theory, epistemology, and methodology of information systems research",
      "Transparency and accountability in information systems",
      "Sociotechnical view of information systems",
    ],
    topicsNote:
      "Preference will be given to practical and dynamic proposals that foster interaction between instructors and attendees, moving beyond strictly lecture-based formats.",
    datesTitle: "Important Dates",
    dates: [
      [
        "14/09/2026",
        "Proposal submission",
        "4-page paper via JEMS 3",
      ],
      [
        "23/10/2026",
        "1st Review Phase (Proposal)",
        "notification to authors",
      ],
      [
        "01/12/2026",
        "Full text submission",
        "submission of book chapter to chairs",
      ],
      [
        "15/02/2027",
        "Final version submission",
        "final book chapter ready for publication",
      ],
      ["17/05/2027 to 20/05/2027", "SBSI 2027 Event", ""],
    ],
    submissionTitle: "Submission Instructions",
    submission: {
      paragraphs: [
        [
          "Submissions will be carried out in two phases via the ",
          link("jems", "SBC JEMS 3 platform"),
          ":",
        ],
      ],
      phases: [
        {
          paragraphs: [
            [
              strong("First Phase (Proposal Evaluation): "),
              "In the first phase, short course proposals must be written in Portuguese or English, up to 4 pages (",
              link("templateArtigos", "SBC paper template"),
              "). Proposals must include: title, authors/affiliations, abstract (max 200 words), objectives/technical requirements, didactic methodology, duration (max 4 hours), relevance to SBSI, program outline, references, and short bio.",
            ],
          ],
        },
        {
          paragraphs: [
            [
              strong("Second Phase (Full Text): "),
              "Each selected short course must submit a final text in the same language as the proposal and presentation. The text will be published as an online book chapter, according to the ",
              link("modeloCapitulos", "SBC book chapter publication template"),
              ", from 20 to 30 pages. Chapters in Portuguese must also contain an English title and abstract. Authors must authorize the publication of the short course abstract on the event website.",
            ],
          ],
        },
      ],
      rules: [
        [
          "Short courses will be maintained with open community call for proposals.",
        ],
        [
          "An accepted proposal requires producing an evaluated book chapter.",
        ],
        [
          "Courses are free of extra charge for SBSI attendees.",
        ],
        [
          "SBSI organization does not provide travel financial support for instructors.",
        ],
        [
          "Authors must register for the conference and pay the publication fee (DOI costs).",
        ],
        [
          "Limited to a maximum of TWO short courses in this SBSI edition.",
        ],
      ],
    },
    reviewTitle: "Evaluation Process",
    review: {
      paragraphs: [
        [
          "Short courses for TM-SI at SBSI 2027 will be selected by Program Committee members based on the proposals submitted in Phase 1.",
        ],
        ["The following criteria will be considered during evaluation:"],
      ],
      criteria: [
        [
          strong("Scope Alignment"),
          ": relevance of topic and alignment with SBSI 2027 topics of interest.",
        ],
        [
          strong("Technical & Methodological Quality"),
          ": clarity of goals, program outline structure, and feasibility within the allocated time.",
        ],
        [
          strong("Didactic Approach"),
          ": proposed strategies to make the course dynamic, interactive, and practical, avoiding purely lecture-based formats.",
        ],
        [
          strong("Format & Presentation"),
          ": adherence to page limit, SBC layout template, and overall writing quality.",
        ],
      ],
    },
    publicationTitle: "Presentation and Publication of Selected Short Courses",
    publication: {
      paragraphs: [
        [
          "Accepted short courses will have their final texts published as online book chapters, provided the following requirements are met:",
        ],
      ],
      requirements: [
        "At least one author/instructor registers for the conference within the deadline;",
        "Payment of the publication fee (for DOI generation) for the accepted chapter is completed;",
        "At least one instructor attends SBSI 2027 IN PERSON to deliver the short course.",
      ],
      closing:
        "Please note that SBSI 2027 is IN-PERSON and course delivery must take place on-site. The organizing committee will not cover travel or accommodation expenses. SBC active members are eligible for registration discounts.",
    },
    coordinationTitle: "SBSI 2027 IS Short Courses Track Chairs",
    coordinationKicker: "Chairs",
    coordinators: ["Davi Viana (UFMA)", "Paulo Malcher (UFRA)"],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS3 ↗" },
  },
};