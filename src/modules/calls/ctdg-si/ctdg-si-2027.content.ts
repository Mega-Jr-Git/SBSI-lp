import type {
  CallInline,
  CallListItem,
  CallSectionsPageData,
} from "../../../types/call-page.types";
import { tpSi2027Content } from "../tp-si/tp-si-2027.content";

export const ctdgSi2027Links: Record<string, string> = {
  grandsi: "https://www2.sbc.org.br/ce-si/arquivos/grandsi.pdf",
  template:
    "https://www.sbc.org.br/wp-content/uploads/2024/07/modelosparapublicaodeartigos.zip",
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

const item = (...text: CallInline[]): CallListItem => ({ text });

const coordinators = [
  {
    name: "Sean Wolfgand Matsui Siqueira",
    institution: "Universidade Federal do Estado do Rio de Janeiro",
  },
  {
    name: "Karin Satie Komati",
    institution: "Instituto Federal do Espírito Santo",
  },
];

export const ctdgSi2027Content: Record<"pt" | "en", CallSectionsPageData> = {
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
    datesTitle: "Datas Importantes",
    dates: [
      ["29/01/2027", "Submissão dos trabalhos"],
      ["29/03/2027", "Divulgação dos trabalhos finalistas (Fase 1)"],
      ["12/04/2027", "Envio da versão final"],
      [
        "Até 12/04/2027",
        "Prazo para inscrição dos autores finalistas",
        "Com taxa de publicação",
      ],
      ["17 a 20/05/2027", "Realização do SBSI 2027"],
    ],
    tocTitle: "NESTA CHAMADA",
    sections: [
      {
        id: "descricao",
        tocTitle: "Descrição",
        blocks: [
          {
            paragraph: [
              "O IX Concurso de Teses, Dissertações e Trabalhos de Graduação em Sistemas de Informação (CTDG-SI) é uma iniciativa da Comissão Especial de Sistemas de Informação (CESI) da Sociedade Brasileira de Computação (SBC), realizada como trilha do XXIII Simpósio Brasileiro de Sistemas de Informação (SBSI 2027).",
            ],
          },
          {
            paragraph: [
              "O CTDG-SI 2027 está organizado em três categorias, com quatro modalidades de premiação:",
            ],
          },
          {
            style: "decimal",
            list: [
              item("Tese de Doutorado"),
              item("Dissertação de Mestrado"),
              item(
                "Trabalho de Graduação, incluindo Trabalho de Conclusão de Curso (TCC) e Trabalho de Iniciação Científica ou Tecnológica (IC/IT).",
              ),
            ],
          },
          {
            paragraph: [
              "Para participar do concurso, os trabalhos devem ser da área de Sistemas de Informação e ter sido concluídos (isto é, finalizados/defendidos e aprovados) em 2026. O concurso visa selecionar e premiar até três melhores trabalhos em cada categoria.",
            ],
          },
        ],
      },
      {
        id: "topicos",
        title: "Tópicos de Interesse",
        tocTitle: "Tópicos de Interesse",
        blocks: [{ topics: tpSi2027Content.pt.topics ?? [] }],
      },
      {
        id: "datas",
        title: "Datas Importantes",
        tocTitle: "Datas Importantes",
        blocks: [
          { dates: true },
          {
            paragraph: [
              "Link de submissão no JEMS3: ",
              link("submission", "https://jems3.sbc.org.br/ctdg-si2027"),
            ],
          },
        ],
      },
      {
        id: "inscricao",
        title: "Inscrição dos Autores Finalistas",
        tocTitle: "Inscrição dos Autores Finalistas",
        blocks: [
          {
            paragraph: [
              "Conforme as disposições do Manual de Eventos Realizados e Correalizados da Sociedade Brasileira de Computação (SBC), os autores de trabalhos efetivamente selecionados para a Fase Final do CTDG-SI 2027 poderão realizar sua inscrição no SBSI 2027 na categoria Estudante (Graduação ou Pós-graduação), mesmo que já estejam diplomados ou não possuam matrícula ativa na data da inscrição.",
            ],
          },
          {
            paragraph: [
              "Para comprovar o direito a essa modalidade de inscrição no sistema ECOS, o(a) autor(a) poderá enviar um único arquivo em PDF contendo os seguintes documentos:",
            ],
          },
          {
            list: [
              item(
                "Carta ou comprovante de aprovação ou seleção do trabalho no CTDG-SI 2027.",
              ),
              item(
                "Comprovante oficial de defesa ou apresentação do TCC, da dissertação ou da tese, ou documento oficial de conclusão do curso, conforme o caso.",
              ),
            ],
          },
          {
            paragraph: [
              "Os(as) autores(as) finalistas poderão escolher, conforme sua situação associativa, uma das modalidades de inscrição estudantil disponibilizadas pelo evento:",
            ],
          },
          {
            list: [
              item(
                strong("Estudante Associado(a):"),
                " para participantes com anuidade vigente na SBC.",
              ),
              item(
                strong("Estudante COMBO (Inscrição + Associação/Renovação):"),
                " para participantes não associados ou com anuidade a vencer, permitindo associação ou renovação com desconto.",
              ),
              item(
                strong("Estudante Não Associado(a):"),
                " para participantes que desejem apenas realizar a inscrição no evento.",
              ),
            ],
          },
          {
            paragraph: [
              "Essa condição especial aplica-se exclusivamente aos autores ",
              strong("finalistas"),
              ", para participação e apresentação de seus trabalhos aceitos.",
            ],
          },
        ],
      },
      {
        id: "formato",
        title: "Formato de submissão",
        tocTitle: "Formato de submissão",
        blocks: [
          {
            paragraph: [
              "Cada submissão deverá conter os seguintes arquivos, enviados pelo sistema JEMS, todos em formato PDF, conforme a modalidade do trabalho.",
            ],
          },
          { heading: "Modalidades Doutorado, Mestrado e TCC:" },
          {
            style: "alpha",
            list: [
              item(
                "Texto completo (tese de doutorado, dissertação de mestrado, ou trabalho de conclusão de curso de graduação) mantido em seu formato original, em português ou inglês.",
              ),
              item(
                "Diploma, declaração (carta) de conclusão do curso, ou ata de defesa do trabalho, constando obrigatoriamente: Nome do candidato e nome do orientador; Instituição e curso; Título do trabalho; Data da defesa e resultado (aprovação); Nome do coordenador ou secretário do curso, data e assinatura.",
              ),
              item(
                "Ficha de submissão que destaca os principais aspectos do trabalho, em português, respeitando o limite de três páginas.",
              ),
              item(
                "Carta do(a) orientador(a), assinada digitalmente com certificação (ex.: ",
                link("govbr", ".gov.br"),
                "), destacando os principais aspectos pelos quais o trabalho merece o prêmio.",
              ),
            ],
          },
          { heading: "Modalidade Iniciação Científica ou Tecnológica (IC/IT)" },
          {
            style: "alpha",
            list: [
              item(
                "Certificado ou declaração (carta) institucional, contendo: Nome do candidato e do orientador; Instituição e curso; Título do trabalho; Data de conclusão; Assinatura válida do órgão responsável.",
              ),
              {
                text: [
                  "Artigo-resumo do trabalho, no formato SBC, em português ou inglês, com no mínimo 8 e no máximo 10 páginas (incluindo figuras, tabelas, diagramas, referências e apêndices).",
                ],
                items: [
                  {
                    text: [
                      "Caso o estudante já tenha tido um artigo publicado em outro veículo, inclusive o SBSI, o conteúdo pode ser utilizado para fins de avaliação da Fase 1. Se o trabalho for selecionado como finalista, será necessário adequar o artigo a um resumo, conforme as instruções da seção “Publicação dos Trabalhos”, antes da publicação.",
                    ],
                    items: [
                      item(
                        "Modelo da SBC para publicação de artigos, disponível em: ",
                        link(
                          "template",
                          "Modelo para publicação de artigos da SBC",
                        ),
                        ".",
                      ),
                      item(
                        "Explicitar, dentre os autores, quem é o orientador (e o coorientador, se houver).",
                      ),
                      item(
                        "Incluir: visão geral do tema, definição dos objetivos e relevância da pesquisa; estado da arte/prática (trabalhos relacionados); métodos científicos empregados (opcional para trabalho de conclusão de curso de graduação); descrição e discussão dos resultados obtidos; e a conclusão com base nos resultados, relacionando-os aos objetivos do trabalho.",
                      ),
                      item(
                        "Deve ser apresentada, na visão geral do tema, uma análise da relação do trabalho com o relatório dos Grandes Desafios de Pesquisa em Sistemas de Informação no Brasil 2016 a 2026, disponível em: ",
                        link(
                          "grandsi",
                          "Grandes Desafios de Pesquisa em Sistemas de Informação no Brasil 2016 a 2026",
                        ),
                        ".",
                      ),
                    ],
                  },
                ],
              },
              {
                text: [
                  "Declaração do tipo de artigo submetido (carta com assinatura dos autores e orientadores) indicando uma das seguintes opções:",
                ],
                items: [
                  item(
                    "Conteúdo do artigo original (nem submetido, nem publicado).",
                  ),
                  item(
                    "Conteúdo do artigo submetido a outro evento ou periódico (inclusive do próprio SBSI 2026), mas ainda não aceito. Nesse caso, deve-se indicar qual veículo.",
                  ),
                  item(
                    "Conteúdo do artigo aceito ou publicado em outro evento ou periódico. Nesse caso, deve-se indicar qual veículo.",
                  ),
                ],
              },
            ],
          },
        ],
      },
      {
        id: "avaliacao",
        title: "Processo de avaliação",
        tocTitle: "Processo de avaliação",
        blocks: [
          {
            paragraph: [
              "As submissões que não estiverem finalizadas conforme os dados solicitados pelo JEMS e que não tiverem os arquivos correspondentes devidamente postados, conforme as regras estabelecidas nesta chamada, serão rejeitadas e, portanto, não participarão da Fase 1.",
            ],
          },
          {
            paragraph: [
              "A avaliação será conduzida em duas fases, conforme segue:",
            ],
          },
          { heading: "Fase 1 (eliminatória)" },
          {
            paragraph: [
              "Nesta fase, toda a documentação passará por um processo de avaliação para seleção dos melhores trabalhos de cada categoria. Cada trabalho será avaliado por pelo menos dois especialistas. Os resultados da avaliação dos trabalhos selecionados serão divulgados aos autores.",
            ],
          },
          {
            paragraph: [
              "Até três trabalhos mais bem avaliados de cada categoria poderão ser selecionados para a Fase Final, sendo classificados como finalistas.",
            ],
          },
          { heading: "Fase Final (classificatória)" },
          {
            paragraph: [
              "A Fase Final ocorrerá durante o evento, em formato híbrido: as pessoas-autoras poderão participar presencialmente ou de forma remota, por videoconferência.",
            ],
          },
          {
            list: [
              item(
                "A pessoa autora que defendeu a tese de doutorado, a dissertação de mestrado, o trabalho de conclusão de curso de graduação, ou concluiu seu trabalho de iniciação científica ou tecnológica, deverá fazer uma apresentação oral do trabalho, em um tempo estipulado pela organização do evento, para a Banca de Avaliação, que avaliará a qualidade da apresentação e poderá fazer perguntas à pessoa apresentadora. Para os trabalhos de conclusão de curso de graduação realizados em grupo, a apresentação poderá ser feita por apenas um dos integrantes.",
              ),
              item(
                "Destaca-se que o trabalho não poderá ser apresentado pela pessoa professora-orientadora ou por qualquer outra pessoa, devendo, obrigatoriamente, ser apresentado pela pessoa-autora que recebeu o título (de doutor, mestre, graduado ou IC/IT) pelo trabalho.",
              ),
              item(
                "A não apresentação do trabalho nesta etapa implica a desclassificação.",
              ),
            ],
          },
          {
            paragraph: [
              "A classificação final considerará tanto a avaliação do trabalho escrito quanto o desempenho da pessoa autora na apresentação oral.",
            ],
          },
        ],
      },
      {
        id: "criterios",
        title: "Critérios que orientam a avaliação dos trabalhos",
        tocTitle: "Critérios de avaliação",
        blocks: [
          {
            paragraph: [
              "A avaliação dos trabalhos será baseada nos seguintes critérios:",
            ],
          },
          {
            list: [
              item(
                strong("Relevância do problema:"),
                " Quão relevante é o problema abordado para a comunidade científica da área de Sistemas de Informação, considerando o tripé pessoas - processos/organizações - tecnologias.",
              ),
              item(
                strong("Relevância da contribuição e dos resultados:"),
                " Quão relevante é a contribuição do trabalho para a área de pesquisa de Sistemas de Informação em termos dos resultados apresentados, abordando o tripé pessoas - processos/organizações - tecnologias.",
              ),
              item(
                strong("Originalidade:"),
                " Grau de originalidade do problema investigado, da abordagem proposta e das soluções apresentadas.",
              ),
              item(
                strong("Impacto:"),
                " Qual é o impacto do trabalho até este momento, em termos técnicos, científicos e sociais.",
              ),
              item(
                strong("Qualidade técnico-científica:"),
                " Como é a qualidade técnico-científica do trabalho apresentado, em termos dos procedimentos científicos e metodológicos adotados.",
              ),
              item(
                strong("Qualidade da apresentação:"),
                " O quão bem apresentado está o trabalho no artigo, em termos de organização, objetividade, redação, formatação e contextualização.",
              ),
              item(
                strong(
                  "Clareza na exposição dos resultados e das contribuições:",
                ),
                " Quão claro é o trabalho na apresentação de seus resultados e de suas contribuições para a área de Sistemas de Informação.",
              ),
            ],
          },
          {
            paragraph: [
              "A comissão organizadora do IX CTDG-SI coordenará internamente uma Banca de Avaliação da Fase Final, para determinar os trabalhos classificados em cada categoria.",
            ],
          },
          {
            paragraph: [
              "A comissão reserva-se o direito de indicar para premiação apenas os trabalhos que considerar adequados, estando prevista, inclusive, a possibilidade de não haver trabalhos indicados para premiação em uma ou mais categorias.",
            ],
          },
        ],
      },
      {
        id: "premiacao",
        title: "Premiação",
        tocTitle: "Premiação",
        blocks: [
          {
            paragraph: [
              "O anúncio dos trabalhos premiados ocorrerá em uma solenidade específica no SBSI. Os trabalhos premiados entre os finalistas receberão certificados de “Prêmio” nos quais constarão explicitamente a posição alcançada e a categoria.",
            ],
          },
          {
            paragraph: [
              "Os trabalhos premiados das categorias Tese de Doutorado e Dissertação de Mestrado serão convidados a submeter uma versão estendida à ",
              link("isys", "iSys - Journal of Information Systems"),
              ".",
            ],
          },
          {
            paragraph: [
              "Os trabalhos premiados da categoria Trabalho de Graduação serão convidados a submeter uma versão estendida à ",
              link(
                "reic",
                "REIC - Revista Eletrônica de Iniciação Científica em Computação",
              ),
              ", ISSN 3085-8461.",
            ],
          },
          {
            paragraph: [
              "Ambos os periódicos são indexados na ",
              link("sol", "SBC Open Lib"),
              ", o portal de conteúdo da SBC. Todos os artigos serão indexados com DOI.",
            ],
          },
        ],
      },
      {
        id: "conduta",
        title: "Código de Conduta para Autores",
        tocTitle: "Código de Conduta",
        blocks: [
          {
            paragraph: [
              "Ao submeterem trabalhos ao SBSI 2027, as pessoas autoras reconhecem que estão em conformidade com o ",
              link(
                "conduta",
                "Código de Conduta para Autores em Publicações da SBC",
              ),
              ".",
            ],
          },
        ],
      },
      {
        id: "publicacao",
        title: "Publicação dos Trabalhos",
        tocTitle: "Publicação dos Trabalhos",
        blocks: [
          {
            paragraph: [
              "Os trabalhos aceitos na Fase 1 no CTDG-SI 2027, que atendam aos requisitos, comporão os Anais Estendidos do Simpósio Brasileiro de Sistemas de Informação (SBSI), publicados na SBC OpenLib, a biblioteca digital da SBC, disponível em ",
              link("estendidos", "Anais Estendidos do SBSI na SBC OpenLib"),
              ".",
            ],
          },
          {
            list: [
              {
                text: [
                  "Para os trabalhos finalistas de (a) doutorado, (b) mestrado, (c) TCC e (d) IC/IT que já tenha sido publicado ou submetido a outro periódico ou evento científico, os autores deverão encaminhar, como versão final para publicação nos anais do evento, um artigo-resumo do trabalho, elaborado no formato SBC, em português ou inglês, com no mínimo 2 e no máximo 3 páginas (incluindo figuras, tabelas e diagramas, mas excluindo referências e apêndices).",
                ],
                items: [
                  item(
                    "Nesse caso, o(a) autor(a) deverá manter o título original do trabalho, acrescido do sufixo “Resumo Estendido – CTDG-SI 2027” ou “Extended Abstract – CTDG-SI 2027”.",
                  ),
                  item(
                    "O artigo deve citar a publicação original, no caso de IC/IT que já tenha sido publicado ou submetido a outro periódico ou evento científico.",
                  ),
                ],
              },
              item(
                "Para os trabalhos finalistas de IC/IT cujo conteúdo do artigo-resumo seja original (não submetido nem publicado em outro veículo), será publicada a versão final do artigo nos anais estendidos do SBSI, observados os requisitos desta chamada.",
              ),
            ],
          },
          {
            paragraph: [
              "Os trabalhos selecionados na Fase 1 serão publicados nos anais do evento, na Biblioteca Digital da SBC (SOL - SBC OpenLib), desde que atendam aos seguintes requisitos:",
            ],
          },
          {
            list: [
              item(
                "O(a) autor(a) principal do trabalho defendido (tese, dissertação ou trabalho de graduação) efetive sua inscrição no evento no prazo estipulado e faça a apresentação do trabalho na Fase Final;",
              ),
              item(
                "Seja efetuado o pagamento de uma taxa de publicação por cada trabalho aceito.",
              ),
            ],
          },
          {
            paragraph: [
              "Todos os artigos publicados serão indexados e receberão um DOI (Digital Object Identifier).",
            ],
          },
        ],
      },
      {
        id: "chairs",
        title: "Chairs",
        tocTitle: "Chairs",
        blocks: [{ coordinators }],
      },
      {
        id: "comite",
        title: "Comitê de Programa",
        tocTitle: "Comitê de Programa",
        blocks: [{ paragraph: ["A definir"] }],
      },
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
    datesTitle: "Important Dates",
    dates: [
      ["Jan 29, 2027", "Work submission"],
      ["Mar 29, 2027", "Announcement of finalist works (Phase 1)"],
      ["Apr 12, 2027", "Final version submission"],
      [
        "By Apr 12, 2027",
        "Registration deadline for finalist authors",
        "With publication fee",
      ],
      ["May 17–20, 2027", "Holding of SBSI 2027"],
    ],
    tocTitle: "IN THIS CALL",
    sections: [
      {
        id: "descricao",
        tocTitle: "Description",
        blocks: [
          {
            paragraph: [
              "The 9th Thesis, Dissertation, and Undergraduate Work Competition in Information Systems (CTDG-SI) is an initiative of the Special Committee on Information Systems (CESI) of the Brazilian Computer Society (SBC), held as a track of the 23rd Brazilian Symposium on Information Systems (SBSI 2027).",
            ],
          },
          {
            paragraph: [
              "CTDG-SI 2027 is organized into three categories, with four award modalities:",
            ],
          },
          {
            style: "decimal",
            list: [
              item("Doctoral Thesis"),
              item("Master's Dissertation"),
              item(
                "Undergraduate Work, including Undergraduate Final Project (TCC) and Scientific or Technological Initiation Work (IC/IT).",
              ),
            ],
          },
          {
            paragraph: [
              "To take part in the competition, works must belong to the Information Systems field and have been completed (that is, finished/defended and approved) in 2026. The competition aims to select and award up to the three best works in each category.",
            ],
          },
        ],
      },
      {
        id: "topicos",
        title: "Topics of Interest",
        tocTitle: "Topics of Interest",
        blocks: [{ topics: tpSi2027Content.en.topics ?? [] }],
      },
      {
        id: "datas",
        title: "Important Dates",
        tocTitle: "Important Dates",
        blocks: [
          { dates: true },
          {
            paragraph: [
              "Submission link in JEMS3: ",
              link("submission", "https://jems3.sbc.org.br/ctdg-si2027"),
            ],
          },
        ],
      },
      {
        id: "inscricao",
        title: "Registration of Finalist Authors",
        tocTitle: "Registration of Finalist Authors",
        blocks: [
          {
            paragraph: [
              "In accordance with the provisions of the Manual for Events Held and Co-held by the Brazilian Computer Society (SBC), authors of works effectively selected for the CTDG-SI 2027 Final Phase may register for SBSI 2027 in the Student category (Undergraduate or Graduate), even if they have already graduated or do not have an active enrollment on the registration date.",
            ],
          },
          {
            paragraph: [
              "To prove the right to this registration modality in the ECOS system, the author may send a single PDF file containing the following documents:",
            ],
          },
          {
            list: [
              item(
                "Letter or proof of approval or selection of the work in CTDG-SI 2027.",
              ),
              item(
                "Official proof of defense or presentation of the TCC, dissertation, or thesis, or official course completion document, as applicable.",
              ),
            ],
          },
          {
            paragraph: [
              "Finalist authors may choose, according to their membership status, one of the student registration modalities offered by the event:",
            ],
          },
          {
            list: [
              item(
                strong("Student Member:"),
                " for participants with current SBC membership.",
              ),
              item(
                strong("Student COMBO (Registration + Membership/Renewal):"),
                " for non-members or participants whose membership is about to expire, allowing membership or renewal at a discount.",
              ),
              item(
                strong("Student Non-Member:"),
                " for participants who only wish to register for the event.",
              ),
            ],
          },
          {
            paragraph: [
              "This special condition applies exclusively to ",
              strong("finalist"),
              " authors, for participating in and presenting their accepted works.",
            ],
          },
        ],
      },
      {
        id: "formato",
        title: "Submission Format",
        tocTitle: "Submission Format",
        blocks: [
          {
            paragraph: [
              "Each submission must contain the following files, sent through the JEMS system, all in PDF format, according to the work's modality.",
            ],
          },
          { heading: "Doctoral, Master's, and TCC Modalities:" },
          {
            style: "alpha",
            list: [
              item(
                "Full text (doctoral thesis, master's dissertation, or undergraduate final project) kept in its original format, in Portuguese or English.",
              ),
              item(
                "Diploma, course completion statement (letter), or defense minutes, mandatorily stating: Candidate's name and advisor's name; Institution and program; Title of the work; Defense date and result (approval); Name of the program coordinator or secretary, date, and signature.",
              ),
              item(
                "Submission form highlighting the main aspects of the work, in Portuguese, within a limit of three pages.",
              ),
              item(
                "Letter from the advisor, digitally signed with certification (e.g., ",
                link("govbr", ".gov.br"),
                "), highlighting the main reasons why the work deserves the award.",
              ),
            ],
          },
          {
            heading: "Scientific or Technological Initiation (IC/IT) Modality",
          },
          {
            style: "alpha",
            list: [
              item(
                "Institutional certificate or statement (letter), containing: Candidate's and advisor's names; Institution and program; Title of the work; Completion date; Valid signature of the responsible office.",
              ),
              {
                text: [
                  "Summary paper of the work, in the SBC format, in Portuguese or English, with a minimum of 8 and a maximum of 10 pages (including figures, tables, diagrams, references, and appendices).",
                ],
                items: [
                  {
                    text: [
                      "If the student has already had a paper published in another venue, including SBSI, its content may be used for Phase 1 evaluation purposes. If the work is selected as a finalist, the paper must be adapted into an abstract, following the instructions in the “Publication of Works” section, before publication.",
                    ],
                    items: [
                      item(
                        "SBC template for paper publication, available at: ",
                        link("template", "SBC paper publication template"),
                        ".",
                      ),
                      item(
                        "Identify, among the authors, who the advisor is (and the co-advisor, if any).",
                      ),
                      item(
                        "Include: an overview of the topic, definition of objectives and research relevance; state of the art/practice (related work); scientific methods employed (optional for undergraduate final projects); description and discussion of the results obtained; and a conclusion based on the results, relating them to the work's objectives.",
                      ),
                      item(
                        "The overview of the topic must present an analysis of how the work relates to the report Grand Research Challenges in Information Systems in Brazil 2016–2026, available at: ",
                        link(
                          "grandsi",
                          "Grand Research Challenges in Information Systems in Brazil 2016–2026",
                        ),
                        ".",
                      ),
                    ],
                  },
                ],
              },
              {
                text: [
                  "Statement of the type of paper submitted (letter signed by authors and advisors) indicating one of the following options:",
                ],
                items: [
                  item(
                    "Original paper content (neither submitted nor published).",
                  ),
                  item(
                    "Content submitted to another event or journal (including SBSI 2026 itself), but not yet accepted. In this case, the venue must be indicated.",
                  ),
                  item(
                    "Content accepted or published in another event or journal. In this case, the venue must be indicated.",
                  ),
                ],
              },
            ],
          },
        ],
      },
      {
        id: "avaliacao",
        title: "Evaluation Process",
        tocTitle: "Evaluation Process",
        blocks: [
          {
            paragraph: [
              "Submissions that are not finalized with the data requested by JEMS and that do not have the corresponding files properly uploaded, according to the rules of this call, will be rejected and therefore will not take part in Phase 1.",
            ],
          },
          {
            paragraph: [
              "The evaluation will be conducted in two phases, as follows:",
            ],
          },
          { heading: "Phase 1 (eliminatory)" },
          {
            paragraph: [
              "In this phase, all documentation will go through an evaluation process to select the best works in each category. Each work will be evaluated by at least two experts. The evaluation results of the selected works will be shared with the authors.",
            ],
          },
          {
            paragraph: [
              "Up to the three best-evaluated works in each category may be selected for the Final Phase, being classified as finalists.",
            ],
          },
          { heading: "Final Phase (classificatory)" },
          {
            paragraph: [
              "The Final Phase will take place during the event, in a hybrid format: authors may participate in person or remotely, by videoconference.",
            ],
          },
          {
            list: [
              item(
                "The author who defended the doctoral thesis, master's dissertation, or undergraduate final project, or completed the scientific or technological initiation work, must give an oral presentation of the work, within a time set by the event organization, to the Evaluation Committee, which will assess the quality of the presentation and may ask questions to the presenter. For undergraduate final projects carried out in groups, the presentation may be given by only one of the members.",
              ),
              item(
                "It is emphasized that the work may not be presented by the advisor or by any other person; it must be presented by the author who received the degree (doctor, master, graduate, or IC/IT) for the work.",
              ),
              item(
                "Failure to present the work at this stage results in disqualification.",
              ),
            ],
          },
          {
            paragraph: [
              "The final ranking will consider both the evaluation of the written work and the author's performance in the oral presentation.",
            ],
          },
        ],
      },
      {
        id: "criterios",
        title: "Criteria Guiding the Evaluation of Works",
        tocTitle: "Evaluation Criteria",
        blocks: [
          {
            paragraph: [
              "Works will be evaluated according to the following criteria:",
            ],
          },
          {
            list: [
              item(
                strong("Problem relevance:"),
                " How relevant the addressed problem is to the Information Systems scientific community, considering the people - processes/organizations - technologies tripod.",
              ),
              item(
                strong("Relevance of the contribution and results:"),
                " How relevant the work's contribution is to Information Systems research in terms of the results presented, addressing the people - processes/organizations - technologies tripod.",
              ),
              item(
                strong("Originality:"),
                " Degree of originality of the investigated problem, the proposed approach, and the solutions presented.",
              ),
              item(
                strong("Impact:"),
                " The impact of the work so far, in technical, scientific, and social terms.",
              ),
              item(
                strong("Technical-scientific quality:"),
                " The technical-scientific quality of the work, in terms of the scientific and methodological procedures adopted.",
              ),
              item(
                strong("Presentation quality:"),
                " How well the work is presented in the paper, in terms of organization, objectivity, writing, formatting, and contextualization.",
              ),
              item(
                strong("Clarity in presenting results and contributions:"),
                " How clearly the work presents its results and its contributions to the Information Systems field.",
              ),
            ],
          },
          {
            paragraph: [
              "The 9th CTDG-SI organizing committee will internally coordinate a Final Phase Evaluation Committee to determine the ranked works in each category.",
            ],
          },
          {
            paragraph: [
              "The committee reserves the right to nominate for awards only the works it deems appropriate, including the possibility of no works being nominated in one or more categories.",
            ],
          },
        ],
      },
      {
        id: "premiacao",
        title: "Awards",
        tocTitle: "Awards",
        blocks: [
          {
            paragraph: [
              "The awarded works will be announced at a dedicated ceremony at SBSI. Awarded finalist works will receive “Award” certificates explicitly stating the position achieved and the category.",
            ],
          },
          {
            paragraph: [
              "Awarded works in the Doctoral Thesis and Master's Dissertation categories will be invited to submit an extended version to ",
              link("isys", "iSys - Journal of Information Systems"),
              ".",
            ],
          },
          {
            paragraph: [
              "Awarded works in the Undergraduate Work category will be invited to submit an extended version to ",
              link(
                "reic",
                "REIC - Revista Eletrônica de Iniciação Científica em Computação",
              ),
              ", ISSN 3085-8461.",
            ],
          },
          {
            paragraph: [
              "Both journals are indexed in ",
              link("sol", "SBC Open Lib"),
              ", SBC's content portal. All papers will be indexed with a DOI.",
            ],
          },
        ],
      },
      {
        id: "conduta",
        title: "Code of Conduct for Authors",
        tocTitle: "Code of Conduct",
        blocks: [
          {
            paragraph: [
              "By submitting works to SBSI 2027, authors acknowledge that they comply with the ",
              link(
                "conduta",
                "SBC Code of Conduct for Authors of Publications",
              ),
              ".",
            ],
          },
        ],
      },
      {
        id: "publicacao",
        title: "Publication of Works",
        tocTitle: "Publication of Works",
        blocks: [
          {
            paragraph: [
              "Works accepted in Phase 1 of CTDG-SI 2027 that meet the requirements will be part of the Extended Proceedings of the Brazilian Symposium on Information Systems (SBSI), published in SBC OpenLib, SBC's digital library, available at ",
              link("estendidos", "SBSI Extended Proceedings in SBC OpenLib"),
              ".",
            ],
          },
          {
            list: [
              {
                text: [
                  "For finalist works in (a) doctoral, (b) master's, (c) TCC, and (d) IC/IT that have already been published in or submitted to another journal or scientific event, authors must send, as the final version for publication in the event proceedings, a summary paper of the work in the SBC format, in Portuguese or English, with a minimum of 2 and a maximum of 3 pages (including figures, tables, and diagrams, but excluding references and appendices).",
                ],
                items: [
                  item(
                    "In this case, the author must keep the original title of the work, followed by the suffix “Resumo Estendido – CTDG-SI 2027” or “Extended Abstract – CTDG-SI 2027”.",
                  ),
                  item(
                    "The paper must cite the original publication, in the case of IC/IT works already published in or submitted to another journal or scientific event.",
                  ),
                ],
              },
              item(
                "For IC/IT finalist works whose summary paper content is original (neither submitted nor published elsewhere), the final version of the paper will be published in the SBSI extended proceedings, subject to the requirements of this call.",
              ),
            ],
          },
          {
            paragraph: [
              "Works selected in Phase 1 will be published in the event proceedings, in the SBC Digital Library (SOL - SBC OpenLib), provided that they meet the following requirements:",
            ],
          },
          {
            list: [
              item(
                "The main author of the defended work (thesis, dissertation, or undergraduate work) registers for the event within the stipulated deadline and presents the work in the Final Phase;",
              ),
              item("A publication fee is paid for each accepted work."),
            ],
          },
          {
            paragraph: [
              "All published papers will be indexed and will receive a DOI (Digital Object Identifier).",
            ],
          },
        ],
      },
      {
        id: "chairs",
        title: "Chairs",
        tocTitle: "Chairs",
        blocks: [{ coordinators }],
      },
      {
        id: "comite",
        title: "Program Committee",
        tocTitle: "Program Committee",
        blocks: [{ paragraph: ["To be announced"] }],
      },
    ],
  },
};
