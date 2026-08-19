import type { CallInline, CallPageData } from "../../../types/call-page.types";

export const tmSi2027Links: Record<string, string> = {
  cesi: "https://www2.sbc.org.br/ce-si/",
  sbc: "https://www.sbc.org.br/",
  jems: "https://jems3.sbc.org.br/",
  submission: "https://jems3.sbc.org.br/events/694",
  modeloCapitulos: "https://www.sbc.org.br/documentosinstitucionais/#publicacoes",
  templateArtigos: "https://www.sbc.org.br/documentos-da-sbc/summary/169-templates-para-artigos-e-capitulos-de-livros/878-modelosparapublicaodeartigos",
  ata: "http://www2.sbc.org.br/ce-si/arquivos/atas_reunioes_cesi/2019.pdf"
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
        "A Comissão Organizadora da 23ª edição do SBSI convida pesquisadores da área de Sistemas de Informação a submeterem propostas de minicursos, introdutórios ou avançados, a serem ministrados nesta edição do evento.",
      ],
      [
        "Minicursos são eventos de curta duração com a finalidade de apresentar uma visão geral de um tópico de pesquisa ou tecnologia que seja de interesse da comunidade de Sistemas de Informação, de forma que o ouvinte tenha a oportunidade de aprender sobre um novo assunto vinculado à sua área de atuação e também de extrair elementos para serem aplicados em sua pesquisa e/ou prática. Os minicursos poderão ser introdutórios ou avançados, e deverão estar relacionados aos tópicos de interesse do simpósio.",
      ],
    ],
    targetAudienceTitle: "Escopo e público-alvo",
    targetAudience: [
      [
        "Os minicursos a serem apresentados no SBSI 2027 têm como público-alvo estudantes do ensino médio, estudantes de graduação, estudantes de pós-graduação, profissionais da indústria e docentes na área de Sistemas de Informação. Os minicursos podem cobrir tanto conceitos e aspectos fundamentais quanto tecnologias emergentes em Sistemas de Informação.",
      ],
    ],
    submissionTitle: "Submissão de propostas",
    submission: {
      paragraphs: [
        ["As submissões dos minicursos ocorrerão em duas fases:"],
      ],
      phases: [
        {
          paragraphs: [
            [
              strong("Primeira fase: "),
              "Na primeira fase, uma proposta do minicurso deve ser apresentada para avaliação dos revisores. Até 3 membros do comitê de revisão analisarão as propostas, considerando a aderência à chamada de minicurso e ao formato solicitado, a qualidade técnica da proposta, da escrita, da sua estrutura, das figuras, tabelas e do resumo.",
            ],
          ],
        },
        {
          paragraphs: [
            [
              strong("Segunda fase: "),
              "Na segunda fase, o conteúdo do minicurso selecionado deverá ser submetido (em formato de texto) aos coordenadores da TM-SI. Na segunda etapa, o texto completo (capítulo) será revisado a fim de torná-lo adequado para publicação.",
            ],
          ],
        },
        {
          paragraphs: [
            [
              "As submissões deverão ser realizadas na plataforma ",
              link("submission", "JEMS 3 da SBC"),
              ".",
            ],
          ]
        }
      ],
    },
    importantInfoTitle: "Informações importantes",
     importantInfoSubtitle: [
      [
        "Na Reunião da Comissão Especial de Sistemas de Informação (CESI) com a comunidade durante o SBSI 2019 em Aracaju, conforme consta em ",
      link("ata","ata aprovada"),
      " foram promulgadas mudanças relativas aos minicursos, quais sejam:",
    ]
  ],
      importantInfoParagraphs: [
        [
          "Os minicursos serão mantidos no evento e com submissão de propostas pela comunidade;",
        ],
        [
          "Um capítulo de livro deverá ser produzido e será avaliado como resultado do aceite de uma proposta de minicurso;",
        ],
        [
          "Os minicursos serão ",
          strong("gratuitos para os participantes do SBSI"),
            ", de modo que não haverá cobrança extra;",
        ],
        [
          "A organização do SBSI ", strong("não se responsabilizará pelo apoio financeiro"), " para viabilizar a ida do(a) ministrante, de modo que, assim como autores de artigos completos aceitos, os autores de minicursos deverão arcar com as despesas da viagem para apresentação;",
        ],
        [
          "Autores de minicursos deverão também se inscrever no evento, assim como pagar a taxa de publicação, uma vez que a publicação gera DOI e, consequentemente, custos para a organização;",
        ],
        [
          "A comunidade decidiu por limitar a quantidade a ", strong("DOIS"), " minicursos por edição do SBSI.",
        ],
      ],
    topicsTitle: "Tópicos de interesse",
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
      "Também será dada preferência a minicursos com caráter mais prático, que em suas propostas sejam destacadas estratégias para torná-los mais dinâmicos e para fomentar a interação entre instrutores e público. O objetivo é evitar que os minicursos sejam baseados apenas em estratégias expositivas.",
    datesTitle: "Datas Importantes",
    dates: [
      [
        "14/09/2026",
        "Submissão de proposta",
        "artigo de 4 páginas",
      ],
      [
        "23/10/2026",
        "1ª etapa de avaliação",
        "(proposta) - Notificação aos autores",
      ],
      [
        "01/12/2026",
        "Submissão do texto completo",
        "capítulo",
      ],
      [
        "15/02/2027",
        "Entrega da Versão Final do capítulo de livro",
        "",
      ],
    ],
    reviewTitle: "Formato",
    review: {
      paragraphs: [
        [
          "Na primeira fase, a proposta do minicurso deverá ser escrita em Português ou Inglês e ter, no máximo, 4 páginas (",
          link("templateArtigos", "formato de artigos da SBC"),
          "), incluindo as seguintes informações:",
        ],
      ],
      criteria: [
        [strong("● "), "Título, autor(es) e filiação do(s) autor(es);"],
        [strong("● "), "Resumo com, no máximo, 200 palavras;"],
        [
          strong("● "),
          'Descrição incluindo objetivos e requisitos técnicos (equipamento e "software"), indicando o escopo (introdutório ou avançado);',
        ],
        [strong("● "), "Metodologia/abordagem didática a ser empregada;"],
        [
          strong("● "),
          "Tempo para a realização do minicurso (que deverá ter duração máxima de quatro horas);",
        ],
        [strong("● "), "Relevância do minicurso para o SBSI 2027;"],
        [
          strong("● "),
          "Esboço contendo os tópicos principais e o conteúdo programático;",
        ],
        [strong("● "), "Referências principais;"],
        [strong("● "), "Idioma em que será ministrado (Português ou Inglês);"],
        [strong("● "), "Biografia curta do(s) autor(es)."],
      ],
      publication: [
        [
          "Cada minicurso selecionado deverá ter como versão final um texto no mesmo idioma da proposta e apresentação. O texto será publicado como capítulo de um livro on-line, conforme ",
          link("modeloCapitulos", "modelo para publicação de capítulos de livros da SBC"),
          ", de 20 a 30 páginas. Capítulos em português também devem conter título e resumo em inglês. Os autores deverão autorizar a publicação do resumo do minicurso no website do evento.",
        ],
      ],
    },
    tpcTitle: "TPC da TM-SI do SBSI 2027 ",
    tpcStatus: "Em formação",
    coordinationTitle: "Coordenação da TM-SI 2027",
    coordinationKicker: "Coordenação",
    coordinators: [
      "Davi Viana (UFMA)",
      "Paulo Malcher (UFRA)",
    ],
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
        "The Organizing Committee of the 23rd SBSI edition invites researchers in Information Systems to submit short course proposals (introductory or advanced) to be presented at this event edition.",
      ],
      [
        "Short courses are short-duration events aimed at presenting an overview of a research topic or technology of interest to the Information Systems community, allowing attendees to learn about a new topic related to their field and extract elements for research and practice. Courses must align with the symposium's topics of interest.",
      ],
    ],
    targetAudienceTitle: "Scope and target audience",
    targetAudience: [
      [
        "The target audience includes high school students, undergraduate and graduate students, industry professionals, and faculty members in Information Systems. Courses may cover foundational concepts as well as emerging technologies in Information Systems.",
      ],
    ],
    submissionTitle: "Proposal submission",
    submission: {
      paragraphs: [
        ["Short course submissions will take place in two phases:"],
      ],
      phases: [
        {
          paragraphs: [
            [
              strong("First phase: "),
              "In the first phase, a short course proposal must be submitted for reviewer evaluation. Up to 3 review committee members will evaluate the proposals based on adherence to the call, formatting, technical quality, writing, structure, figures, tables, and abstract.",
            ],
          ],
        },
        {
          paragraphs: [
            [
              strong("Second phase: "),
              "In the second phase, the selected short course content must be submitted (in text format) to TM-SI chairs. The full text (chapter) will be reviewed for publication.",
            ],
          ],
        },
        {
          paragraphs: [
            [
              "Submissions must be made on the ",
              link("submission", "JEMS 3 da SBC"),
              ".",
            ],
          ],
        }
      ],
    },
    importantInfoTitle: "Important Information",
    importantInfoSubtitle: [
      [
        "During the CESI meeting with the community at SBSI 2019 in Aracaju, as recorded in ",
      link("ata","the approved minutes"),
      " , changes regarding short courses were promulgated, as follows:",
    ]
  ],
      importantInfoParagraphs: [
        [
          "Short courses will be maintained at the event with proposal submissions by the community;",
        ],
        [
          "A book chapter must be produced and evaluated as a result of the acceptance of a short course proposal;",
        ],
        [
          "Short courses will be ",
          strong("free for SBSI participants"),
          ", so there will be no extra charge;",
        ],
        [
          "The SBSI organization ",
          strong("will not be responsible for financial support"),
          " to enable the instructor's attendance, so, like authors of accepted full papers, short course authors must cover their travel expenses for the presentation;",
        ],
        [
          "Short course authors must also register for the event and pay the publication fee, as publication generates a DOI and, consequently, costs for the organization;",
        ],
        [
          "The community decided to limit the quantity to ",
          strong("TWO"),
          " short courses per SBSI edition.",
        ],
      ],
    topicsTitle: "Topics of interest",
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
      "Preference will be given to practical and dynamic proposals that foster interaction between instructors and attendees, avoiding purely lecture-based strategies.",
    datesTitle: "Important Dates",
    dates: [
      [
        "14/09/2026",
        "Proposal submission",
        "4-page paper",
      ],
      [
        "23/10/2026",
        "1st Review Phase",
        "(Proposal) - Notification to authors",
      ],
      [
        "01/12/2026",
        "Full text submission",
        "chapter",
      ],
      [
        "15/02/2027",
        "Final version submission of the book chapter",
        "",
      ],
    ],
    reviewTitle: "Format",
    review: {
      paragraphs: [
        [
          "In the first phase, short course proposals must be written in Portuguese or English and contain at most 4 pages (",
          link("templateArtigos", "SBC paper format"),
          "), including the following information:",
        ],
      ],
      criteria: [
        [strong("● "), "Title, author(s), and affiliation;"],
        [strong("● "), "Abstract with up to 200 words;"],
        [
          strong("● "),
          'Description including goals and technical requirements (equipment and software), indicating scope (introductory or advanced);',
        ],
        [strong("● "), "Didactic methodology/approach to be used;"],
        [
          strong("● "),
          "Estimated duration (maximum 4 hours);",
        ],
        [strong("● "), "Relevance of the short course to SBSI 2027;"],
        [
          strong("● "),
          "Outline containing main topics and program content;",
        ],
        [strong("● "), "Main references;"],
        [strong("● "), "Language in which it will be taught (Portuguese or English);"],
        [strong("● "), "Short biography of author(s)."],
      ],
      publication: [
        [
          "Each selected short course must submit a final text in the same language as the proposal and presentation. The text will be published as an online book chapter, according to the ",
          link("modeloCapitulos", "SBC book chapter publication template"),
          ", from 20 to 30 pages. Chapters in Portuguese must also contain an English title and abstract. Authors must authorize the publication of the short course abstract on the event website.",
        ],
      ],
    },
    tpcTitle: "TM-SI TPC of SBSI 2027",
    tpcStatus: "In formation",
    coordinationTitle: "SBSI 2027 IS Short Courses Track Chairs",
    coordinationKicker: "Chairs",
    coordinators: [
      "Davi Viana (UFMA)",
      "Paulo Malcher (UFRA)",
    ],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS3 ↗" },
  },
};