export const tpSi2027Links = {
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
} as const;

type LinkName = keyof typeof tpSi2027Links;
export type TpSi2027Inline =
  | string
  | { link: LinkName; text: string }
  | { strong: string };
export type TpSi2027Paragraph = TpSi2027Inline[];

const link = (name: LinkName, text: string): TpSi2027Inline => ({
  link: name,
  text,
});
const strong = (text: string): TpSi2027Inline => ({ strong: text });

export const tpSi2027Content = {
  pt: {
    hero: {
      kicker: "Chamadas",
      title: "Trilha de Pesquisa em SI (TP-SI)",
      dates: "17–20 maio 2027",
      location: "Campo Grande · MS",
      format: "Presencial",
      submit: "Submeter artigo ↗",
    },
    intro: [
      [
        "A área de Sistemas de Informação (SI) busca soluções para problemas reais da sociedade e das organizações por meio de tecnologias inovadoras. O Simpósio Brasileiro de Sistemas de Informação (SBSI), maior encontro da área no Brasil, acontece anualmente. O evento é promovido pela ",
        link("cesi", "Comissão Especial de Sistemas de Informação CESI"),
        " da ",
        link("sbc", "Sociedade Brasileira de Computação (SBC)"),
        ", constituindo-se em um fórum para a apresentação e discussão de temas contemporâneos na área de SI, aproximando estudantes, pesquisadores, profissionais, empresários, o governo e a sociedade civil, a fim de promover a disseminação de resultados de pesquisa e inovação.",
      ],
      [
        "Em sua 23ª edição, o SBSI 2027 tem como tema “Sistemas de Informação para Transições Sustentáveis: Territórios, Organizações e Sociedade”. O evento pretende discutir como os Sistemas de Informação podem apoiar transformações ambientalmente e socialmente responsáveis. Abrange eficiência energética, uso responsável de infraestruturas, ciclo de vida de hardware e software, inclusão digital e desenvolvimento de soluções que conciliem inovação, desempenho e benefícios coletivos. O SBSI 2027 ocorrerá PRESENCIALMENTE em Campo Grande, capital de Mato Grosso do Sul.",
      ],
      [
        "Para a Trilha de Pesquisa em SI (TP-SI) do SBSI 2027, espera-se a submissão de artigos completos que apresentem novas contribuições para a área de SI.",
      ],
    ] as TpSi2027Paragraph[],
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
    datesTitle: "Datas Importantes",
    dates: [
      [
        "08/09/2026",
        "Registro do artigo",
        "título, pessoas autoras, tópicos de interesse e resumo estruturado no JEMS3",
      ],
      [
        "14/09/2026",
        "Submissão do artigo",
        "upload do arquivo do artigo em PDF no JEMS3",
      ],
      [
        "25/11/2026",
        "1ª Notificação",
        "notificação às pessoas autoras com aceite, rejeição ou rebuttal",
      ],
      [
        "02/12/2026",
        "Submissão do rebuttal",
        "data limite para envio do rebuttal no JEMS3",
      ],
      [
        "14/12/2026",
        "2ª Notificação (pós-rebuttal)",
        "notificação às pessoas autoras com aceite ou rejeição após o rebuttal",
      ],
      [
        "15/02/2027",
        "Entrega da versão final",
        "upload do arquivo da versão final em PDF no JEMS3",
      ],
      ["17/05/2027 a 20/05/2027", "Realização do SBSI 2027", ""],
    ],
    submissionTitle: "Instruções de Submissão",
    submission: {
      paragraphs: [
        [
          "Esta trilha (TPSI) aceita apenas submissão de artigos completos (full papers), correspondentes a trabalhos de pesquisa concluídos, embasados na literatura científica, com ideias e resultados inovadores e seguindo procedimentos metodológicos científicos adequados. Ressalta-se a exigência de rigor quanto à efetiva pertinência da pesquisa à área de SI (em relação e/ou em interface com demais áreas da Computação ou outras) e à qualidade da escrita, do estudo conduzido e dos resultados apresentados.",
        ],
        [
          "Os artigos completos devem ressaltar o contexto da pesquisa relatada, considerando que trabalhos na área de SI envolvem o tripé Pessoas, Processos e Procedimentos (também conhecido como Organizações, quando a visão se baseia em SI nas organizações) e Tecnologias. O artigo completo deve explicitamente apontar o domínio de aplicação e/ou o problema (organizacional, social, entre outros) abordado pelo trabalho, bem como indicar de que forma contribui para as temáticas relacionadas aos ",
          link(
            "grandsi",
            "II GranDSI-Br: Grandes Desafios de Sistemas de Informação no Brasil 2026-2036",
          ),
          ".",
        ],
        [
          "Cada submissão DEVE contemplar CUIDADOSAMENTE as regras a seguir. Submissões para a TPSI que não seguirem essas regras serão rejeitadas sumariamente sem revisão (desk reject):",
        ],
      ] as TpSi2027Paragraph[],
      rules: [
        [
          "Os artigos completos DEVEM seguir o ",
          link("template", "modelo de artigos da SBC"),
          ", com limite de 15 a 20 páginas, incluindo referências, apêndices, figuras e tabelas, e DEVEM ser submetidos exclusivamente no formato PDF. Os artigos completos devem ser escritos em português ou em inglês, mas DEVEM apresentar título, resumo estruturado e palavras-chave exclusivamente EM INGLÊS no formulário do ",
          link("jems", "JEMS 3"),
          " e no arquivo PDF, mesmo que o restante do texto esteja escrito em português.",
        ],
        [
          "O resumo estruturado DEVERÁ conter os nomes dos campos (labels) das seções exigidas, e isso deverá ser propagado no texto do artigo completo para manter a coesão do trabalho, além de ser preenchido no formulário de submissão do ",
          link("jems", "JEMS 3"),
          ", em até 300 PALAVRAS. Os campos das seções do resumo estruturado devem ser: 1) Research Context, 2) Scientific and/or Practical Problem, 3) Proposed Solution and/or Analysis, 4) Related IS Theory, 5) Research Method, 6) Summary of Results, and 7) Contributions and Impact to IS area. Para apoiar o preenchimento do campo “Related IS Theory”, acesse o portal ",
          link("byu", "BYU Library"),
          ". Recomenda-se ainda analisar exemplos de artigos completos publicados em edições anteriores nos ",
          link("anais", "Anais do SBSI"),
          ", além de outros exemplos no periódico ",
          link("ist", "Information and Software Technology"),
          ".",
        ],
        [
          "O arquivo PDF do artigo completo NÃO DEVERÁ CONTER QUALQUER IDENTIFICAÇÃO DAS PESSOAS AUTORAS EM TODO O TEXTO (por exemplo, nomes de pessoas autoras, projetos, instituições, ferramentas, agradecimentos, links, citações de artigos que identifiquem as pessoas autoras, entre outros), considerando o processo de revisão duplamente anônima (double-anonymous review process) na TPSI.",
        ],
        [
          "Após o prazo final da submissão de artigos completos no ",
          link("jems", "JEMS 3"),
          " (upload do arquivo do artigo em PDF), NÃO SERÁ PERMITIDA qualquer modificação de título, resumo estruturado, tópicos, arquivo PDF e, ESPECIALMENTE, de autoria (i.e., inclusão ou remoção de pessoas autoras, mesmo se vier a ser aceito). ALÉM DISSO, após este prazo final, também NÃO SERÁ PERMITIDO retirar o artigo do processo de revisão (withdraw).",
        ],
        [
          "A submissão de um artigo completo IMPLICA QUE o trabalho descrito não foi publicado anteriormente, que não está sob consideração para publicação e não será submetido a nenhum outro lugar enquanto estiver em processo de avaliação no SBSI. Adicionalmente, a publicação DEVE SER aprovada por todas as pessoas autoras e, tacitamente ou explicitamente, pelas autoridades responsáveis pela realização do trabalho. Um trabalho publicado no SBSI NÃO DEVERÁ ser publicado em outro lugar da mesma forma, em qualquer outro idioma, inclusive eletronicamente, pois qualquer tipo de plágio constitui um comportamento antiético e é inaceitável.",
        ],
        [
          "A SBC atualizou o seu ",
          link("sbc", "Código de Conduta"),
          " para pessoas autoras de publicações. Na parte II, Art. 2º, informa-se que “o uso de Inteligência Artificial (IA) Generativa: a utilização de ferramentas e tecnologias de IA Generativa para a geração de conteúdos, na escrita e/ou revisão do conteúdo de artigos, deve ser declarada explicitamente no trabalho. A declaração pode ocorrer na Seção de Agradecimentos, na metodologia ou em uma seção definida especificamente para este fim, de acordo com o template adotado, e deve listar as ferramentas e descrever onde foram empregadas, por exemplo, textos, tabelas, gráficos, citações etc. Essas ferramentas não podem ser listadas como autores de um artigo. O uso de tais ferramentas não exime os autores da responsabilidade sobre todo o seu conteúdo, inclusive no caso de ser identificado plágio”.",
        ],
      ] as TpSi2027Paragraph[],
      openScience: [
        "Solicitamos às pessoas autoras a adoção de princípios e práticas de Ciência Aberta, buscando promover a transparência, a replicabilidade e a reprodutibilidade na pesquisa. Encorajamos que todas as pessoas autoras divulguem dados e/ou artefatos (anonimizados e curados) para aumentar a transparência, a replicabilidade e a reprodutibilidade de seus estudos. Sugere-se disponibilizar material suplementar em repositórios como ",
        link("zenodo", "Zenodo"),
        " e ",
        link("figshare", "Figshare"),
        ", de forma anônima, devido ao processo de revisão adotado na TPSI.",
      ] as TpSi2027Paragraph,
      diversity: [
        "Além disso, solicitamos que as submissões dos artigos completos utilizem referências de trabalhos de pesquisadores de grupos sub-representados e do sul global, incluindo textos publicados em veículos da comunidade brasileira especializada na área, como nos ",
        link("anais", "Anais do SBSI"),
        ", nos ",
        link("estendidos", "Anais Estendidos do SBSI"),
        " e no periódico ",
        link("isys", "iSys: Revista Brasileira de Sistemas de Informação"),
        ".",
      ] as TpSi2027Paragraph,
    },
    reviewTitle: "Processo de Revisão",
    review: {
      paragraphs: [
        [
          "A seleção de artigos completos será realizada a partir da revisão por membros do Comitê de Programa da TPSI no SBSI. O processo de revisão será conduzido no formato duplamente anônimo (double-anonymous review process). Se todas as revisões indicarem claramente a aceitação ou a rejeição do artigo completo da forma que foi submetido, sem a necessidade de rebuttal, as pessoas autoras receberão uma decisão de “artigo completo aceito” ou “artigo completo rejeitado” na 1ª Notificação. As pessoas autoras dos demais artigos completos serão notificadas para procederem com a preparação e envio do rebuttal no período definido. Após a análise do rebuttal, as pessoas autoras destes artigos completos receberão uma decisão final de “artigo completo aceito” ou “artigo completo rejeitado” na 2ª Notificação.",
        ],
        ["Os seguintes critérios serão considerados na avaliação:"],
      ] as TpSi2027Paragraph[],
      criteria: [
        [
          "Cada submissão DEVE contemplar CUIDADOSAMENTE as regras apresentadas na seção “Instruções de Submissão” (acima): submissões para a TPSI que não seguirem essas regras serão rejeitadas sumariamente sem revisão (desk reject).",
        ],
        [
          strong("Novidade"),
          ": a novidade e/ou o caráter inovador das soluções propostas e/ou análises realizadas, das formulações de problemas científicos e/ou práticos, dos procedimentos metodológicos, da proposição e/ou uso de teorias de SI e/ou das avaliações e estudos experimentais apresentados, i.e., o quão o artigo completo submetido para a TPSI é suficientemente original com relação ao estado da arte.",
        ],
        [
          strong("Rigor"),
          ": a solidez, a clareza e a profundidade de contribuições técnicas ou teóricas, bem como o nível de rigor dos procedimentos metodológicos empregados e a integridade da avaliação apresentada no artigo completo submetido à TPSI.",
        ],
        [
          strong("Relevância"),
          ": a importância e/ou o impacto potencial do artigo completo submetido para a TPSI em relação à área de SI a partir das publicações realizadas pela comunidade científica em veículos internacionais, incluindo as teorias de SI disponíveis no portal ",
          link("byu", "BYU Library"),
          ", bem como nacionais, como nos ",
          link("anais", "Anais do SBSI"),
          ", nos ",
          link("estendidos", "Anais Estendidos do SBSI"),
          " e no periódico ",
          link("isys", "iSys: Revista Brasileira de Sistemas de Informação"),
          ", além dos ",
          link(
            "grandsi",
            "II GranDSI-Br: Grandes Desafios de Sistemas de Informação no Brasil 2026-2036",
          ),
          ".",
        ],
        [
          strong("Transparência, Replicabilidade e Reprodutibilidade"),
          ": o grau em que o artigo completo submetido à TPSI inclui informações suficientes para entender como uma inovação funciona; como os dados foram obtidos, analisados e interpretados; e como o artigo completo oferece suporte à verificação independente ou à replicação das contribuições reivindicadas.",
        ],
        [
          strong("Apresentação"),
          ": a clareza, a forma e a organização da exposição do conteúdo no artigo completo submetido à TPSI.",
        ],
      ] as TpSi2027Paragraph[],
    },
    publicationTitle: "Apresentação e Publicação dos Artigos Completos Aceitos",
    publication: {
      paragraphs: [
        [
          "As pessoas autoras deverão incluir seus dados (nomes, filiações e e-mails, bem como demais informações necessárias ao artigo, a exemplo de citações a outros trabalhos das pessoas autoras e dados da publicação, além de agradecimentos) na versão final dos artigos completos aceitos para a TPSI.",
        ],
        [
          "Os artigos completos aceitos serão publicados nos ",
          link("anais", "Anais do SBSI"),
          " como parte do acervo da Biblioteca Digital da SBC (SOL - SBC OpenLib), desde que atendam aos seguintes requisitos:",
        ],
      ] as TpSi2027Paragraph[],
      requirements: [
        "Pelo menos uma das pessoas autoras realize o pagamento da sua inscrição no evento dentro do prazo estipulado;",
        "Seja feito o pagamento de UMA TAXA de publicação PARA CADA artigo completo aceito;",
        "Pelo menos uma das pessoas autoras compareça PRESENCIALMENTE ao SBSI 2027 para apresentar o artigo completo aceito.",
      ],
      closing:
        "Ressalta-se que o SBSI 2027 é PRESENCIAL e não haverá qualquer possibilidade de apresentação on-line dos artigos completos aceitos. Pessoas autoras sócias da SBC devem estar em dia com a anuidade para terem direito aos valores reduzidos.",
    },
    coordinationTitle: "Coordenação da Trilha de Pesquisa em SI do SBSI 2027",
    coordinationKicker: "Coordenação",
    coordinators: ["Claudia Cappelli (UERJ)", "Maria Claudia Emer (UTFPR)"],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS3 ↗" },
  },
  en: {
    hero: {
      kicker: "Calls",
      title: "IS Research Track (TP-SI)",
      dates: "May 17–20, 2027",
      location: "Campo Grande · MS",
      format: "In person",
      submit: "Submit paper ↗",
    },
    intro: [
      [
        "The Information Systems (IS) field seeks solutions to real problems faced by society and organizations through innovative technologies. The Brazilian Symposium on Information Systems (SBSI), the largest event in the field in Brazil, takes place annually. The event is promoted by the ",
        link("cesi", "Special Committee on Information Systems CESI"),
        " of the ",
        link("sbc", "Brazilian Computer Society (SBC)"),
        ", serving as a forum for presenting and discussing contemporary topics in IS, bringing together students, researchers, professionals, businesspeople, government, and civil society to promote the dissemination of research and innovation results.",
      ],
      [
        "In its 23rd edition, SBSI 2027 has the theme “Information Systems for Sustainable Transitions: Territories, Organizations, and Society”. The event aims to discuss how Information Systems can support environmentally and socially responsible transformations. It covers energy efficiency, responsible infrastructure use, hardware and software life cycles, digital inclusion, and the development of solutions that reconcile innovation, performance, and collective benefits. SBSI 2027 will take place IN PERSON in Campo Grande, the capital of Mato Grosso do Sul.",
      ],
      [
        "For the IS Research Track (TP-SI) of SBSI 2027, submissions of full papers presenting new contributions to the IS field are expected.",
      ],
    ] as TpSi2027Paragraph[],
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
    datesTitle: "Important Dates",
    dates: [
      [
        "08/09/2026",
        "Paper registration",
        "title, authors, topics of interest, and structured abstract in JEMS3",
      ],
      [
        "14/09/2026",
        "Paper submission",
        "upload of the paper file in PDF format to JEMS3",
      ],
      [
        "25/11/2026",
        "1st Notification",
        "notification to authors of acceptance, rejection, or rebuttal",
      ],
      [
        "02/12/2026",
        "Rebuttal submission",
        "deadline for sending the rebuttal in JEMS3",
      ],
      [
        "14/12/2026",
        "2nd Notification (post-rebuttal)",
        "notification to authors of acceptance or rejection after the rebuttal",
      ],
      [
        "15/02/2027",
        "Final version delivery",
        "upload of the final version file in PDF format to JEMS3",
      ],
      ["17/05/2027 to 20/05/2027", "SBSI 2027", ""],
    ],
    submissionTitle: "Submission Instructions",
    submission: {
      paragraphs: [
        [
          "This track (TPSI) accepts only full papers, corresponding to completed research work grounded in the scientific literature, with innovative ideas and results, and following appropriate scientific methodological procedures. The research must be rigorously pertinent to the IS field (in relation to and/or in interface with other areas of Computing or other fields), and the writing, study conducted, and results presented must be of high quality.",
        ],
        [
          "Full papers must emphasize the context of the reported research, considering that work in IS involves the tripod of People, Processes and Procedures (also known as Organizations when the perspective is based on IS in organizations) and Technologies. The full paper must explicitly identify the application domain and/or the problem (organizational, social, among others) addressed by the work, as well as indicate how it contributes to the themes related to ",
          link(
            "grandsi",
            "II GranDSI-Br: Grand Challenges in Information Systems in Brazil 2026–2036",
          ),
          ".",
        ],
        [
          "Each submission MUST CAREFULLY comply with the following rules. Submissions to TPSI that do not comply with these rules will be summarily rejected without review (desk reject):",
        ],
      ] as TpSi2027Paragraph[],
      rules: [
        [
          "Full papers MUST follow the ",
          link("template", "SBC paper template"),
          ", with a limit of 15 to 20 pages, including references, appendices, figures, and tables, and MUST be submitted exclusively in PDF format. Full papers may be written in Portuguese or English, but MUST present the title, structured abstract, and keywords exclusively IN ENGLISH in the ",
          link("jems", "JEMS 3"),
          " submission form and in the PDF file, even when the rest of the text is written in Portuguese.",
        ],
        [
          "The structured abstract MUST contain the field names (labels) of the required sections, and these must be carried into the full paper text to maintain the work's coherence, in addition to being completed in the ",
          link("jems", "JEMS 3"),
          " submission form, in up to 300 WORDS. The structured abstract section fields must be: 1) Research Context, 2) Scientific and/or Practical Problem, 3) Proposed Solution and/or Analysis, 4) Related IS Theory, 5) Research Method, 6) Summary of Results, and 7) Contributions and Impact to IS area. To help complete the “Related IS Theory” field, access the ",
          link("byu", "BYU Library"),
          " portal. It is also recommended to examine examples of full papers published in previous editions in the ",
          link("anais", "SBSI Proceedings"),
          ", as well as other examples in the ",
          link("ist", "Information and Software Technology"),
          " journal.",
        ],
        [
          "The full paper PDF MUST NOT CONTAIN ANY IDENTIFICATION OF THE AUTHORS ANYWHERE IN THE TEXT (for example, author names, projects, institutions, tools, acknowledgments, links, citations of papers that identify the authors, among others), considering the double-anonymous review process at TPSI.",
        ],
        [
          "After the deadline for submitting full papers to ",
          link("jems", "JEMS 3"),
          " (upload of the paper file in PDF format), NO modification of the title, structured abstract, topics, PDF file, and ESPECIALLY authorship (i.e., adding or removing authors, even if the paper is accepted) WILL BE PERMITTED. IN ADDITION, after this deadline, withdrawing the paper from the review process (withdraw) WILL NOT BE PERMITTED.",
        ],
        [
          "Submitting a full paper IMPLIES THAT the described work has not been published previously, is not under consideration for publication, and will not be submitted elsewhere while it is being evaluated at SBSI. Additionally, publication MUST BE approved by all authors and, tacitly or explicitly, by the authorities responsible for carrying out the work. A work published at SBSI MUST NOT be published elsewhere in the same form, in any other language, including electronically, since any type of plagiarism constitutes unethical and unacceptable behavior.",
        ],
        [
          "SBC has updated its ",
          link("sbc", "Code of Conduct"),
          " for publication authors. Part II, Art. 2, states that “the use of Generative Artificial Intelligence (AI): the use of Generative AI tools and technologies to generate content, in the writing and/or revision of article content, must be explicitly declared in the work. The declaration may appear in the Acknowledgments section, the methodology, or a section specifically defined for this purpose, according to the adopted template, and must list the tools and describe where they were used, for example, text, tables, graphs, citations, etc. These tools may not be listed as authors of a paper. The use of such tools does not exempt authors from responsibility for all of its content, including if plagiarism is identified”.",
        ],
      ] as TpSi2027Paragraph[],
      openScience: [
        "We ask authors to adopt Open Science principles and practices, seeking to promote transparency, replicability, and reproducibility in research. We encourage all authors to share data and/or artifacts (anonymized and curated) to increase the transparency, replicability, and reproducibility of their studies. We suggest making supplementary material available in repositories such as ",
        link("zenodo", "Zenodo"),
        " and ",
        link("figshare", "Figshare"),
        ", anonymously, due to the review process adopted at TPSI.",
      ] as TpSi2027Paragraph,
      diversity: [
        "In addition, we ask full-paper submissions to cite works by researchers from underrepresented groups and from the Global South, including texts published in venues of the specialized Brazilian community, such as the ",
        link("anais", "SBSI Proceedings"),
        ", the ",
        link("estendidos", "SBSI Extended Proceedings"),
        " and the journal ",
        link("isys", "iSys: Brazilian Journal of Information Systems"),
        ".",
      ] as TpSi2027Paragraph,
    },
    reviewTitle: "Review Process",
    review: {
      paragraphs: [
        [
          "The selection of full papers will be based on reviews by members of the TPSI Program Committee at SBSI. The review process will be conducted in a double-anonymous format. If all reviews clearly indicate acceptance or rejection of the full paper as submitted, without the need for a rebuttal, authors will receive a decision of “full paper accepted” or “full paper rejected” in the 1st Notification. Authors of the other full papers will be notified to prepare and submit a rebuttal during the defined period. After the rebuttal is analyzed, the authors of these full papers will receive a final decision of “full paper accepted” or “full paper rejected” in the 2nd Notification.",
        ],
        ["The following criteria will be considered in the evaluation:"],
      ] as TpSi2027Paragraph[],
      criteria: [
        [
          "Each submission MUST CAREFULLY comply with the rules presented in the “Submission Instructions” section (above): submissions to TPSI that do not comply with these rules will be summarily rejected without review (desk reject).",
        ],
        [
          strong("Novelty"),
          ": the novelty and/or innovative nature of the proposed solutions and/or analyses, the formulation of scientific and/or practical problems, the methodological procedures, the proposition and/or use of IS theories, and/or the evaluations and experimental studies presented; i.e., how sufficiently original the full paper submitted to TPSI is in relation to the state of the art.",
        ],
        [
          strong("Rigor"),
          ": the soundness, clarity, and depth of technical or theoretical contributions, as well as the level of rigor of the methodological procedures employed and the integrity of the evaluation presented in the full paper submitted to TPSI.",
        ],
        [
          strong("Relevance"),
          ": the importance and/or potential impact of the full paper submitted to TPSI in relation to the IS field, based on publications by the scientific community in international venues, including IS theories available on the ",
          link("byu", "BYU Library"),
          " portal, as well as national venues such as the ",
          link("anais", "SBSI Proceedings"),
          ", the ",
          link("estendidos", "SBSI Extended Proceedings"),
          " and the journal ",
          link("isys", "iSys: Brazilian Journal of Information Systems"),
          ", in addition to ",
          link(
            "grandsi",
            "II GranDSI-Br: Grand Challenges in Information Systems in Brazil 2026–2036",
          ),
          ".",
        ],
        [
          strong("Transparency, Replicability, and Reproducibility"),
          ": the extent to which the full paper submitted to TPSI includes sufficient information to understand how an innovation works; how data were obtained, analyzed, and interpreted; and how the full paper supports independent verification or replication of the claimed contributions.",
        ],
        [
          strong("Presentation"),
          ": the clarity, form, and organization of the content presented in the full paper submitted to TPSI.",
        ],
      ] as TpSi2027Paragraph[],
    },
    publicationTitle: "Presentation and Publication of Accepted Full Papers",
    publication: {
      paragraphs: [
        [
          "Authors must include their information (names, affiliations, and email addresses, as well as other information necessary for the paper, such as citations to the authors' other works and publication data, in addition to acknowledgments) in the final version of full papers accepted to TPSI.",
        ],
        [
          "Accepted full papers will be published in the ",
          link("anais", "SBSI Proceedings"),
          " as part of the SBC Digital Library collection (SOL - SBC OpenLib), provided that they meet the following requirements:",
        ],
      ] as TpSi2027Paragraph[],
      requirements: [
        "At least one author pays their event registration fee within the stipulated deadline;",
        "ONE publication FEE is paid FOR EACH accepted full paper;",
        "At least one author attends SBSI 2027 IN PERSON to present the accepted full paper.",
      ],
      closing:
        "It is emphasized that SBSI 2027 is an IN-PERSON event and there will be no possibility of online presentation of accepted full papers. Authors who are SBC members must be up to date with their membership dues to be entitled to reduced fees.",
    },
    coordinationTitle: "Coordination of the SBSI 2027 IS Research Track",
    coordinationKicker: "Coordination",
    coordinators: ["Claudia Cappelli (UERJ)", "Maria Claudia Emer (UTFPR)"],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS3 ↗" },
  },
} as const;

export type TpSi2027Content = (typeof tpSi2027Content)["pt"];
