import type { CallInline, CallPageData } from "../../../types/call-page.types";

export const nire2027Links: Record<string, string> = {
  cesi: "https://www2.sbc.org.br/ce-si/",
  sbc: "https://www.sbc.org.br/",
  jems: "https://jems3.sbc.org.br/",
  submission: "https://jems3.sbc.org.br/events/695",
  template: "https://www.sbc.org.br/documentosinstitucionais/#publicacoes",
  researchForm:
    "https://docs.google.com/document/d/1H_d7JfFJ5KnR7y0k-o4fimTAJqb4Pf99/edit?usp=drive_link&ouid=106114403009308115075&rtpof=true&sd=true",
  publicationAuthorization:
    "https://www.sbc.org.br/documentosinstitucionais/#publicacoes",
};

const link = (name: string, text: string): CallInline => ({ link: name, text });
const strong = (text: string): CallInline => ({ strong: text });

export const nire2027Content: Record<"pt" | "en", CallPageData> = {
  pt: {
    hero: {
      title:
        "Trilha de Novas Ideias e Resultados Emergentes em Sistemas de Informação (NIRE)",
      submit: "Submeter artigo",
      badges: {
        date: "17–20 maio 2027",
        location: "Campo Grande · MS",
        format: "Presencial",
      },
    },
    introTitle: "Descrição",
    intro: [
      [
        "A Comissão Organizadora da 23ª edição do Simpósio Brasileiro de Sistemas de Informação (SBSI 2027) convida pesquisadores a submeterem artigos para a Trilha de Novas Ideias e Resultados Emergentes (NIRE), que será realizada em conjunto com o simpósio, abrangendo uma ou mais áreas de interesse da comunidade de Sistemas de Informação. O SBSI 2027 ocorrerá, presencialmente, na cidade de Campo Grande, Mato Grosso do Sul. A trilha de Novas Ideias e Resultados Emergentes tem como objetivo promover um fórum alternativo à trilha principal, promovendo o debate de reflexões e provocações, bem como de desenhos de pesquisa. Esta trilha segue uma dinâmica distinta da adotada na trilha principal, atendendo aos formatos mais adequados à exploração das novas ideias e resultados emergentes, e propiciando um ambiente menos formal que permita intensificar as discussões e possibilidades de cooperação, com foco na disseminação de novas temáticas ou pesquisas, bem como na formação de novos pesquisadores.",
      ],
    ],
    topicsTitle: "Tópicos de interesse",
    topics: [
      "Teoria, epistemologia e metodologia da pesquisa em sistemas de informação.",
      "Aspectos e impactos tecnológicos, sociais, econômicos e ambientais de sistemas de informação.",
      "Gestão de processos e sistemas de informação organizacionais.",
      "Desafios de sistemas de informação aplicados a domínios (Saúde, Agricultura, Governo, Educação, entre outros).",
      "Sistemas de informação para gestão de dados, informação e conhecimento.",
      "Sistemas-de-Sistemas de Informação.",
      "Sistemas de informação e o mundo aberto.",
      "Visão sociotécnica de sistemas de informação.",
      "Paradigmas, modelagem, design, engenharia e avaliação de sistemas de informação.",
      "Complexidade de sistemas de informação.",
      "Pesquisas interdisciplinares em sistemas de informação.",
      "Educação em sistemas de informação.",
      "Tecnologias emergentes aplicadas a sistemas de informação.",
      "Ética, cultura, legislação e política em sistemas de informação.",
      "Ecossistemas digitais e de negócios.",
      "Perspectivas e Tendências dos Sistemas de Informação a domínios (Saúde, Agricultura, Governo, Educação, entre outros).",
      "Sistemas de informação e Inteligência Artificial (Generativa, LLM, PLN, entre outros).",
      "Diversidade, equidade e inclusão em Sistemas de Informação.",
    ],
    datesTitle: "Datas importantes",
    dates: [
      ["11/12/2026", "Registro de artigos", ""],
      ["18/02/2027", "Submissão dos arquivos", ""],
      ["22/02/2027", "Notificação:", ""],
      ["a definir", "Entrega da versão final:", ""],
      ["a definir", "Inscrição dos autores:", ""],
      ["17 a 20/05/2027", "Realização do SBSI 2027:", ""],
    ],
    categoriesTitle: "Categorias da Trilha",
    categoriesIntro: [["Essa trilha é subdividida em duas categorias:"]],
    categories: [
      {
        title: "Reflexões e Provocações",
        paragraphs: [
          [
            "Esta categoria visa estimular discussões que levem a reflexões e que provoquem a comunidade a repensar alguma temática ou a própria área de Sistemas de Informação. Encorajamos a submissão de artigos que desafiem ideias convencionais, inspirem novas perspectivas e estimulem o diálogo durante o evento. A categoria Reflexões e Provocações busca explorar questões de relevância crítica, promovendo uma análise aprofundada e incitando o pensamento criativo para fomentar pesquisas e práticas em Sistemas de Informação. Vamos utilizar este espaço para discutirmos as visões ontológicas, epistemológicas, metodológicas e temáticas da área de Sistemas de Informação, questionando teorias, valores, objetivos e tópicos atualmente explorados e propondo novas ideias e abordagens.",
          ],
          [
            "As reflexões devem incluir uma problematização embasada em evidências e/ou sinais que sustentem as argumentações apresentadas. Por outro lado, as provocações devem contrapor o estado atual com as disrupções propostas.",
          ],
          [
            "É importante salientar que esta trilha não se destina a trabalhos em andamento.",
          ],
        ],
      },
      {
        title: "Desenho de Pesquisa",
        paragraphs: [
          [
            "Esta categoria tem por objetivo apoiar a formação de novos pesquisadores em Sistemas de Informação. Encorajamos a submissão de desenhos de pesquisa de alunos de Mestrado e Doutorado para promover a discussão e amadurecimento da pesquisa, antecedendo à finalização do estudo que está em desenvolvimento. A intenção é propiciar um aprofundamento do plano de pesquisa, incorporando estratégias, métodos de execução e demais considerações pertinentes de forma que todos possam contribuir de forma mais efetiva na pesquisa que está sendo desenvolvida e as potenciais contribuições para a área de Sistemas de Informação. A apresentação da proposta deve ser realizada obrigatoriamente pelo pesquisador  (aluno) que está desenvolvendo a pesquisa.",
          ],
        ],
      },
    ],
    submissionTitle: "Submissões",
    submission: {
      paragraphs: [
        [
          "As submissões devem ser feitas na plataforma ",
          link("submission", "JEMS da SBC"),
          ". Os artigos submetidos, tanto em português como inglês, devem estar no formato PDF e devem seguir o ",
          link("template", "formato de artigos da SBC"),
          ".",
        ],
        [
          "A versão de submissão do artigo não deverá conter nenhum tipo de identificação das pessoas autoras em todo o texto. Toda e qualquer referência que identifique a proveniência do artigo deve ser removida da versão de submissão, como nome de projetos, de instituições, de ferramentas e citações de artigos que identifiquem as pessoas autoras. Artigos que possuírem qualquer identificação na submissão serão rejeitados sem revisão (desk-reject).",
        ],
      ],
    },
    formatTitle: "Formato da submissão",
    format: {
      phase1Title: "Reflexões e Provocações",
      phase1Rules: [
        "As pessoas autoras de trabalhos de Reflexões e Provocações devem enviar um artigo com no mínimo 8 (oito) e no máximo 10 (dez) páginas, sem contar as referências.",
        "As seções podem ser definidas de acordo com as pessoas autoras do trabalho.",
      ],
      phase2Title: "Desenho de Pesquisa",
      phase2Rules: [
        "As pessoas pesquisadoras em formação, autoras de trabalhos de Desenho de Pesquisa, devem enviar artigo curto com no mínimo 4 (quatro) e no máximo 5 (cinco) páginas, sem contar as referências, juntamente com a ficha de pesquisa.",
        "As seções podem ser definidas de acordo com as pessoas autoras do trabalho.",
      ],
    },
    formatParagraphs: [
      [
        "As pessoas autoras de trabalhos de Reflexões e Provocações devem enviar um artigo com no mínimo 8 (oito) e no máximo 10 (dez) páginas, sem contar as referências. As seções podem ser definidas de acordo com as pessoas autoras do trabalho.",
      ],
      [
        "As pessoas pesquisadoras em formação, autoras de trabalhos de Desenho de Pesquisa, devem enviar artigo curto com no mínimo 4 (quatro) e no máximo 5 (cinco) páginas, sem contar as referências, juntamente com a ",
        link("researchForm", "ficha de pesquisa"),
        ". As seções podem ser definidas de acordo com as pessoas autoras do trabalho.",
      ],
    ],
    reviewTitle: "Revisão dos Artigos",
    review: {
      paragraphs: [
        [
          "A seleção de trabalhos, de acordo com as categorias da NIRE, será realizada a partir da revisão por membros do Comitê de Programa da Trilha NIRE do SBSI 2027. Ressalta-se que, para a seleção dos trabalhos, cada artigo será revisado por, pelo menos, três membros do Comitê de Programa. O processo de revisão será conduzido no formato duplamente anônimo em todas as categorias da trilha (double-anonymous review process).",
        ],
      ],
      criteria: [],
    },
    publicationTitle: "Orientação aos Trabalhos Aceitos",
    publication: {
      paragraphs: [
        [
          "A versão final, em formato PDF, deve ser submetida no sistema JEMS, considerando de modo obrigatório e cuidadosamente as recomendações dos revisores. Juntamente com a versão final, as pessoas autoras devem enviar o ",
          link(
            "publicationAuthorization",
            "termo de autorização de publicação",
          ),
          " do artigo, devidamente preenchido e assinado, via plataforma JEMS.",
        ],
      ],
      requirements: [
        "A apresentação do trabalho está condicionada à apresentação do trabalho aceito, à inscrição de, pelo menos, uma das pessoas autoras no evento (em sua categoria), com a inclusão da taxa de publicação (uma taxa por trabalho aceito). Pessoas autoras sócias da SBC devem estar em dia com a anuidade para terem direito aos valores reduzidos.",
        "As pessoas autoras de propostas de Reflexões e Provocações devem incluir na versão final do artigo suas minibiografias com no máximo 10 linhas, como página adicional ao artigo.",
        "No caso da categoria Desenho de Pesquisa, obrigatoriamente, a pessoa autora aluna de mestrado ou doutorado deverá participar presencialmente do evento para apresentação e discussão de seu trabalho.",
        "A publicação do artigo aceito nas categorias Novas Ideias e Resultados Emergentes no volume de Anais Estendidos do SBSI na SBC OpenLib está condicionada à apresentação presencial do trabalho durante o evento.",
      ],
      closing: "",
    },
    importantInfoTitle: "Orientação adicional",
    importantInfoParagraph: [
      "O SBSI segue o ",
      link("sbc", "Código de Conduta para Autores da SBC"),
      ", que trata do comportamento ético, honesto e responsável de pessoas autoras e foi atualizado recentemente. Na parte II, Art. 2º, temos que “o uso de Inteligência Artificial (IA) Generativa: a utilização de ferramentas e tecnologias de IA Generativa para geração de conteúdos, na escrita e/ou revisão do conteúdo de artigos, deve ser declarada explicitamente no trabalho. A declaração pode ocorrer na Seção de Agradecimentos, na metodologia ou em uma seção definida especificamente para este fim, de acordo com o template adotado, e deve listar as ferramentas e descrever onde foram empregadas, por exemplo, textos, tabelas, gráficos, citações, etc. Essas ferramentas não podem ser listadas como autores de um artigo. O uso de tais ferramentas não exime os autores da responsabilidade sobre todo o seu conteúdo, inclusive no caso de ser identificado plágio”",
    ],
    importantInfoSubtitle: [
      [
        "O SBSI segue o ",
        link("sbc", "Código de Conduta para Autores da SBC"),
        ", que trata do comportamento ético, honesto e responsável de pessoas autoras e foi atualizado recentemente. Na parte II, Art. 2º, temos que “o uso de Inteligência Artificial (IA) Generativa:",
      ],
    ],
    importantInfoParagraphs: [
      [
        "a utilização de ferramentas e tecnologias de IA Generativa para geração de conteúdos, na escrita e/ou revisão do conteúdo de artigos, deve ser declarada explicitamente no trabalho. A declaração pode ocorrer na Seção de Agradecimentos, na metodologia ou em uma seção definida especificamente para este fim, de acordo com o template adotado, e deve listar as ferramentas e descrever onde foram empregadas, por exemplo, textos, tabelas, gráficos, citações, etc. Essas ferramentas não podem ser listadas como autores de um artigo. O uso de tais ferramentas não exime os autores da responsabilidade sobre todo o seu conteúdo, inclusive no caso de ser identificado plágio”",
      ],
    ],
    coordinationTitle: "Coordenação da NIRE - SBSI 2027",
    coordinationKicker: "Coordenação da trilha",
    coordinators: [
      {
        name: "Rita Suzana Pitangueira Maciel",
        institution: "UFBA · rita.suzana@ufba.br",
      },
      { name: "José Maria David", institution: "UFJF · jose.david@ufjf.br" },
    ],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS ↗" },
    tocTitle: "NESTA CHAMADA",
    toc: [
      { id: "descricao", title: "Descrição" },
      { id: "topicos", title: "Tópicos" },
      { id: "datas", title: "Datas" },
      { id: "categorias", title: "Categorias da Trilha" },
      { id: "submissoes", title: "Submissões" },
      { id: "formato", title: "Formato da submissão" },
      { id: "revisao", title: "Revisão dos Artigos" },
      { id: "publicacao", title: "Trabalhos aceitos" },
      { id: "orientacao-adicional", title: "Orientação adicional" },
      { id: "coordenacao", title: "Coordenação" },
    ],
  },
  en: {
    hero: {
      title: "New Ideas and Emerging Results in Information Systems (NIRE)",
      submit: "Submit paper",
      badges: {
        date: "May 17–20, 2027",
        location: "Campo Grande · MS",
        format: "In person",
      },
    },
    introTitle: "Description",
    intro: [
      [
        "The Organizing Committee of the 23rd Brazilian Symposium on Information Systems (SBSI 2027) invites researchers to submit papers to the New Ideas and Emerging Results Track (NIRE), held alongside the symposium and encompassing one or more areas of interest to the Information Systems community. SBSI 2027 will take place in person in Campo Grande, Mato Grosso do Sul. NIRE aims to provide an alternative forum to the main track for discussing reflections, provocations, and research designs. With a format distinct from the main track, it offers a less formal environment to intensify discussion and opportunities for cooperation, focusing on disseminating new topics or research and training new researchers.",
      ],
    ],
    topicsTitle: "Topics of interest",
    topics: [
      "Theory, epistemology, and methodology of information systems research.",
      "Technological, social, economic, and environmental aspects and impacts of information systems.",
      "Management of processes and organizational information systems.",
      "Challenges of information systems applied to domains (health, agriculture, government, education, among others).",
      "Information systems for data, information, and knowledge management.",
      "Information Systems of Systems.",
      "Information systems and the open world.",
      "Sociotechnical perspectives on information systems.",
      "Paradigms, modeling, design, engineering, and evaluation of information systems.",
      "Complexity of information systems.",
      "Interdisciplinary research in information systems.",
      "Information systems education.",
      "Emerging technologies applied to information systems.",
      "Ethics, culture, legislation, and policy in information systems.",
      "Digital and business ecosystems.",
      "Perspectives and trends in information systems applied to domains (health, agriculture, government, education, among others).",
      "Information systems and Artificial Intelligence (generative AI, LLMs, NLP, among others).",
      "Diversity, equity, and inclusion in Information Systems.",
    ],
    datesTitle: "Important dates",
    dates: [
      [
        "Dec 11, 2026",
        "Paper registration",
        "Deadline to register the paper in JEMS3",
      ],
      [
        "Feb 18, 2027",
        "File submission",
        "Deadline to submit the paper files in JEMS3",
      ],
      ["Feb 22, 2027", "Notification", "Notification to authors"],
      ["To be announced", "Final version delivery", "Date to be announced"],
      ["To be announced", "Author registration", "Date to be announced"],
      ["May 17–20, 2027", "SBSI 2027", ""],
    ],
    categoriesTitle: "Track Categories",
    categoriesIntro: [["The track is divided into two categories:"]],
    categories: [
      {
        title: "Reflections and Provocations",
        paragraphs: [
          [
            "This category aims to encourage discussion that leads the community to reflect on and rethink a topic or Information Systems as a field. We encourage papers that challenge conventional ideas, inspire new perspectives, and stimulate dialogue at the event. It explores critically relevant issues through in-depth analysis and creative thinking to foster research and practice in Information Systems. This is a space to discuss ontological, epistemological, methodological, and thematic views of the field, questioning current theories, values, goals, and topics while proposing new ideas and approaches. Reflections must present an analysis of a problem grounded in evidence and/or signals that support the arguments. Provocations must contrast the current state with the proposed disruptions. This category is not intended for work in progress.",
          ],
        ],
      },
      {
        title: "Research Design",
        paragraphs: [
          [
            "This category supports the development of new Information Systems researchers. We encourage research designs by Master's and PhD students to promote discussion and strengthen the research before the study in progress is completed. The aim is to deepen the research plan, including strategies, execution methods, and other relevant considerations, so the community can contribute effectively to the research and its potential contributions to the field. The proposal must be presented by the student researcher conducting the research.",
          ],
        ],
      },
    ],
    submissionTitle: "Submissions",
    submission: {
      paragraphs: [
        [
          "Submissions must be made through ",
          link("submission", "SBC's JEMS"),
          ". Submitted papers, in Portuguese or English, must be in PDF format and follow the ",
          link("template", "SBC paper format"),
          ". The submitted version must not contain any information identifying the authors. Any reference that identifies the paper's provenance must be removed, including project, institution, or tool names and citations that identify the authors. Papers containing any identifying information will be rejected without review (desk reject).",
        ],
      ],
    },
    formatTitle: "Submission format",
    format: {
      phase1Title: "Reflections and Provocations",
      phase1Rules: [
        "Papers must be at least 8 and at most 10 pages, excluding references.",
        "Authors may define the paper sections.",
      ],
      phase2Title: "Research Design",
      phase2Rules: [
        "Short papers must be at least 4 and at most 5 pages, excluding references, and accompanied by the research form.",
        "Authors may define the paper sections.",
      ],
    },
    formatParagraphs: [
      [
        "Authors of Reflections and Provocations papers must submit a paper with at least 8 and at most 10 pages, excluding references. Authors may determine the section structure.",
      ],
      [
        "Researchers in training who author Research Design papers must submit a short paper with at least 4 and at most 5 pages, excluding references, together with the ",
        link("researchForm", "research form"),
        ". Authors may determine the section structure.",
      ],
    ],
    reviewTitle: "Paper Review",
    review: {
      paragraphs: [
        [
          "Submissions will be selected according to the NIRE categories through review by members of the SBSI 2027 NIRE Program Committee. Each paper will be reviewed by at least three Program Committee members. All categories use a double-anonymous review process.",
        ],
      ],
      criteria: [],
    },
    publicationTitle: "Guidance for Accepted Papers",
    publication: {
      paragraphs: [
        [
          "The final PDF must be submitted through JEMS, and must carefully take the reviewers' recommendations into account. Along with the final version, authors must submit the completed and signed ",
          link("publicationAuthorization", "publication authorization"),
          " for the paper through JEMS.",
        ],
      ],
      requirements: [
        "Accepted work must be presented.",
        "At least one author must register for the event in the relevant category and pay the publication fee (one fee per accepted paper). SBC members must be up to date with their membership dues to qualify for reduced rates.",
        "Final versions of Reflections and Provocations papers must include author biographies of no more than 10 lines on an additional page.",
        "For Research Design papers, the Master's or PhD student author must attend the event in person to present and discuss their work.",
        "Publication of accepted papers in the NIRE categories in the SBSI Extended Proceedings volume in SBC OpenLib is conditional on in-person presentation at the event.",
      ],
      closing: "",
    },
    importantInfoTitle: "Additional Guidance",
    importantInfoParagraph: [
      "SBSI follows the ",
      link("sbc", "SBC Code of Conduct for Authors"),
      ", which addresses ethical, honest, and responsible author behavior and was recently updated. Part II, Art. 2 states: The use of Generative Artificial Intelligence tools and technologies to generate content in writing and/or revising papers must be explicitly declared in the work. The declaration may appear in the Acknowledgments, methodology, or a dedicated section, as appropriate to the template, and must list the tools and describe where they were used (for example, text, tables, graphs, or citations). These tools may not be listed as authors. Their use does not exempt authors from responsibility for all content, including in cases of plagiarism.",
    ],
    importantInfoSubtitle: [
      [
        "SBSI follows the ",
        link("sbc", "SBC Code of Conduct for Authors"),
        ", which addresses ethical, honest, and responsible author behavior and was recently updated. Part II, Art. 2 states:",
      ],
    ],
    importantInfoParagraphs: [
      [
        "The use of Generative Artificial Intelligence tools and technologies to generate content in writing and/or revising papers must be explicitly declared in the work. The declaration may appear in the Acknowledgments, methodology, or a dedicated section, as appropriate to the template, and must list the tools and describe where they were used (for example, text, tables, graphs, or citations). These tools may not be listed as authors. Their use does not exempt authors from responsibility for all content, including in cases of plagiarism.",
      ],
    ],
    coordinationTitle: "NIRE Coordination – SBSI 2027",
    coordinationKicker: "Track chairs",
    coordinators: [
      {
        name: "Rita Suzana Pitangueira Maciel",
        institution: "UFBA · rita.suzana@ufba.br",
      },
      { name: "José Maria David", institution: "UFJF · jose.david@ufjf.br" },
    ],
    sideLinks: { cesi: "CESI ↗", sbc: "SBC ↗", jems: "JEMS ↗" },
    tocTitle: "IN THIS CALL",
    toc: [
      { id: "descricao", title: "Description" },
      { id: "topicos", title: "Topics" },
      { id: "datas", title: "Dates" },
      { id: "categorias", title: "Track Categories" },
      { id: "submissoes", title: "Submissions" },
      { id: "formato", title: "Submission format" },
      { id: "revisao", title: "Paper Review" },
      { id: "publicacao", title: "Accepted Papers" },
      { id: "orientacao-adicional", title: "Additional Guidance" },
      { id: "coordenacao", title: "Coordination" },
    ],
  },
};
