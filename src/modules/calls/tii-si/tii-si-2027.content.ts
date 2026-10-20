import type { CallInline, CallPageData } from "../../../types/call-page.types";

export const tiiSi2027Links: Record<string, string> = {
  cesi: "https://www2.sbc.org.br/ce-si/",
  sbc: "https://www.sbc.org.br/",
  jems: "https://jems3.sbc.org.br/",
  submission: "https://jems3.sbc.org.br/sbsi-tii2027",
  template:
    "https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip",
  grandsi:
    "https://www2.sbc.org.br/ce-si/arquivos/grandDSI/RelatorioiiGrandsibr.pdf",
  estendidos: "https://sol.sbc.org.br/index.php/sbsi_estendido/",
};

const link = (name: string, text: string): CallInline => ({ link: name, text });

export const tiiSi2027Content: Record<"pt" | "en", CallPageData> = {
  pt: {
    hero: {
      title: "Trilha de Indústria e Inovação em SI (TII-SI)",
      submit: "Submeter proposta",
      badges: {
        date: "17–20 maio 2027",
        location: "Campo Grande · MS",
        format: "Presencial",
      },
    },
    introTitle: "Descrição",
    intro: [
      [
        "A trilha de Indústria e Inovação em SI é um evento do Simpósio Brasileiro de Sistemas de Informação (SBSI) que possibilita contato, discussão e alinhamento de visões em torno dos desafios e resultados inovadores obtidos pela Comunidade Científica, pelo Governo, pela Indústria e pela Sociedade. A trilha tem foco em inovação tecnológica, organizacional, de produtos, de serviços e também de modelos de negócio. A partir de pitches sobre soluções inovadoras, a trilha promove a cooperação da indústria com a comunidade científica, governo e sociedade, com o compartilhamento de conhecimento e experiências entre profissionais dos quatro setores. Com isso, a trilha tem como participantes:",
      ],
    ],
    introList: [
      "Pessoas empreendedoras;",
      "Startups e empresas de software;",
      "Profissionais de pesquisa e docência;",
      "Estudantes de graduação e pós-graduação.",
    ],
    datesTitle: "Datas Importantes",
    dates: [
      ["11/12/2026", "Submissão", ""],
      ["22/02/2027", "Notificação de aceitação aos autores", ""],
      ["19/03/2027", "Entrega da Versão Final", ""],
      ["17 a 20 de maio de 2027", "Realização do SBSI 2027", ""],
    ],
    submissionTitle: "Submissão de Pitches",
    submission: {
      paragraphs: [],
      phases: [
        {
          paragraphs: [
            [
              "Participantes com interesse em realizar pitches devem submeter propostas sobre experiências práticas em torno de:",
            ],
          ],
          list: [
            "Inovação organizacional (por exemplo, mudanças estruturais inovadoras, com criação de novas áreas, como laboratórios de inovação de produtos);",
            "Inovação de produtos (por exemplo, desenvolvimento de soluções de software inovadoras, como novas plataformas e ferramentas);",
            "Inovação de serviços (por exemplo, evolução de processos para construção de soluções, técnicas inovadoras para atendimento de clientes);",
            "Inovação de modelo de negócio (por exemplo, redirecionamento da operação da organização para entrar em novos mercados ou evolução de sua estratégia de comercialização).",
          ],
        },
        {
          paragraphs: [
            [
              "As propostas (em .PDF) podem ser escritas em inglês ou português, seguindo o ",
              link("template", "formato de artigos da SBC"),
              ".",
            ],
            [
              "Artigos submetidos passarão por um processo de revisão simples (com inclusão dos autores). Caso os autores se sintam desconfortáveis, é possível adotar o processo duplamente anônimo (double blind), no qual as identidades de autoria são ocultadas de quem revisa o artigo e vice-versa. Para isto, submeta seu artigo anonimizado, ou seja, sem identificação dos autores no texto. Os artigos devem ter entre 2 e 4 páginas (sem considerar referências), refletindo a estrutura abaixo:",
            ],
          ],
          list: [
            "Título (claro e sucinto, refletindo a essência da experiência inovadora);",
            "Nomes das pessoas autoras, com indicação da organização (filiação) e e-mails;",
            "Abstract e resumo (se escrita em português) ou apenas um abstract (se escrita em inglês);",
            "Seção 1 - contexto (problemas e dificuldades iniciais);",
            "Seção 2 - processo adotado (por exemplo, prova de conceito, protótipo, medição de indicadores, etc.);",
            "Seção 3 - solução (resultados e benefícios para a organização e mercado de software);",
            "Seção 4 - referências.",
          ],
        },
        {
          paragraphs: [
            [
              "As propostas devem ser submetidas pela ",
              link("submission", "plataforma JEMS-3"),
              " da SBC.",
            ],
          ],
        },
      ],
    },
    reviewTitle: "Seleção, apresentação e premiação dos trabalhos",
    review: {
      paragraphs: [
        [
          "Sugere-se que, se pertinente, as propostas submetidas estejam relacionadas aos ",
          link(
            "grandsi",
            "Grandes Desafios de Pesquisa em Sistemas de Informação no Brasil 2026-2036",
          ),
          ". As propostas selecionadas serão apresentadas por uma das pessoas autoras em uma sessão de pitches. Estas propostas serão publicadas como parte do volume Anais Estendidos do SBSI 2027 a serem disponibilizados na biblioteca digital SBC-OpenLib (SOL). Os ",
          link("estendidos", "Anais Estendidos do SBSI 2026"),
          " são um exemplo de publicação.",
        ],
        [
          "Durante o SBSI, um júri formado por representantes da indústria e da academia escolherá os três (3) melhores pitches. Os critérios para seleção das propostas vencedoras incluirão (i) clareza da descrição, (ii) grau ou potencial de inovação e (iii) potencial de interesse de empresas, startups e pessoas empreendedoras participantes.",
        ],
        [
          "Para obter mais informações ou sanar dúvidas, entre em contato com a coordenação da trilha pelos e-mails abaixo.",
        ],
      ],
      criteria: [],
    },
    coordinationTitle: "Coordenação",
    coordinationKicker: "",
    coordinators: [
      {
        name: "Nádia Puchalski Kozievitch",
        institution:
          "Universidade Tecnológica Federal do Paraná · nadiap@utfpr.edu.br",
      },
      {
        name: "Leonardo Guerreiro Azevedo",
        institution: "Instituto Kunumi · leonardo.azevedo@kunumi.com",
      },
    ],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS ↗" },
    tocTitle: "NESTA CHAMADA",
    toc: [
      { id: "descricao", title: "Descrição" },
      { id: "datas", title: "Datas" },
      { id: "instrucoes", title: "Submissão de Pitches" },
      { id: "revisao", title: "Seleção, apresentação e premiação" },
      { id: "coordenacao", title: "Coordenação" },
    ],
  },
  en: {
    hero: {
      title: "Industry and Innovation Track in IS (TII-SI)",
      submit: "Submit proposal",
      badges: {
        date: "May 17–20, 2027",
        location: "Campo Grande · MS",
        format: "In person",
      },
    },
    introTitle: "Description",
    intro: [
      [
        "The Industry and Innovation in IS track is an event of the Brazilian Symposium on Information Systems (SBSI) that enables contact, discussion, and alignment of views around the challenges and innovative results achieved by the Scientific Community, Government, Industry, and Society. The track focuses on technological, organizational, product, service, and business model innovation. Through pitches about innovative solutions, the track promotes cooperation between industry and the scientific community, government, and society, sharing knowledge and experiences among professionals from the four sectors. Thus, the track's participants are:",
      ],
    ],
    introList: [
      "Entrepreneurs;",
      "Startups and software companies;",
      "Research and teaching professionals;",
      "Undergraduate and graduate students.",
    ],
    datesTitle: "Important Dates",
    dates: [
      ["Dec 11, 2026", "Submission", ""],
      ["Feb 22, 2027", "Notification of acceptance to authors", ""],
      ["Mar 19, 2027", "Final Version Submission", ""],
      ["May 17–20, 2027", "SBSI 2027", ""],
    ],
    submissionTitle: "Pitch Submission",
    submission: {
      paragraphs: [],
      phases: [
        {
          paragraphs: [
            [
              "Participants interested in giving pitches must submit proposals about practical experiences concerning:",
            ],
          ],
          list: [
            "Organizational innovation (for example, innovative structural changes, with the creation of new areas, such as product innovation labs);",
            "Product innovation (for example, development of innovative software solutions, such as new platforms and tools);",
            "Service innovation (for example, evolution of processes for building solutions, innovative customer service techniques);",
            "Business model innovation (for example, redirecting the organization's operations to enter new markets or evolving its commercialization strategy).",
          ],
        },
        {
          paragraphs: [
            [
              "Proposals (in .PDF) may be written in English or Portuguese, following the ",
              link("template", "SBC paper format"),
              ".",
            ],
            [
              "Submitted papers will undergo a single review process (with authors identified). If authors feel uncomfortable, it is possible to adopt the double-blind process, in which author identities are hidden from reviewers and vice versa. To do so, submit your paper anonymized, that is, without identifying the authors in the text. Papers must be 2 to 4 pages long (excluding references), reflecting the structure below:",
            ],
          ],
          list: [
            "Title (clear and concise, reflecting the essence of the innovative experience);",
            "Author names, indicating the organization (affiliation) and e-mails;",
            "Abstract and resumo (if written in Portuguese) or only an abstract (if written in English);",
            "Section 1 - context (initial problems and difficulties);",
            "Section 2 - adopted process (for example, proof of concept, prototype, measurement of indicators, etc.);",
            "Section 3 - solution (results and benefits for the organization and the software market);",
            "Section 4 - references.",
          ],
        },
        {
          paragraphs: [
            [
              "Proposals must be submitted through SBC's ",
              link("submission", "JEMS-3 platform"),
              ".",
            ],
          ],
        },
      ],
    },
    reviewTitle: "Selection, presentation, and awarding of papers",
    review: {
      paragraphs: [
        [
          "If pertinent, submitted proposals are suggested to be related to the ",
          link(
            "grandsi",
            "Grand Research Challenges in Information Systems in Brazil 2026-2036",
          ),
          ". Selected proposals will be presented by one of the authors in a pitch session. These proposals will be published as part of the SBSI 2027 Extended Proceedings volume, to be made available in the SBC-OpenLib (SOL) digital library. The ",
          link("estendidos", "SBSI 2026 Extended Proceedings"),
          " are an example of publication.",
        ],
        [
          "During SBSI, a jury of industry and academia representatives will choose the three (3) best pitches. The criteria for selecting the winning proposals will include (i) clarity of the description, (ii) degree or potential of innovation, and (iii) potential interest for participating companies, startups, and entrepreneurs.",
        ],
        [
          "For more information or questions, contact the track chairs at the e-mails below.",
        ],
      ],
      criteria: [],
    },
    coordinationTitle: "Chairs",
    coordinationKicker: "",
    coordinators: [
      {
        name: "Nádia Puchalski Kozievitch",
        institution:
          "Universidade Tecnológica Federal do Paraná · nadiap@utfpr.edu.br",
      },
      {
        name: "Leonardo Guerreiro Azevedo",
        institution: "Instituto Kunumi · leonardo.azevedo@kunumi.com",
      },
    ],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS ↗" },
    tocTitle: "IN THIS CALL",
    toc: [
      { id: "descricao", title: "Description" },
      { id: "datas", title: "Dates" },
      { id: "instrucoes", title: "Pitch Submission" },
      { id: "revisao", title: "Selection, presentation, and awards" },
      { id: "coordenacao", title: "Chairs" },
    ],
  },
};
