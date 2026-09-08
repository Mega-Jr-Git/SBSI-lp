export type Track = {
  title: string;
  date?: string;
  link?: string;
};

const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");
export const tpSiPath = `${basePath}/chamadas/chamada-pesquisa`;
export const tmSiPath = `${basePath}/chamadas/chamada-minicursos`;

export const tracksContent = {
  pt: {
    title: "Chamadas para as",
    title_highlight: "trilhas",
    iconAlt: "Ícone representando a trilha",
    p1: "As chamadas para as trilhas estão abertas. Clique em uma das seções para obter mais informações",
    p2: "Submissão de Proposta: ",
    soon: "Em breve",
    link: "Ver mais",

    tracks: [
      {
        title: "Pesquisa em SI",
        date: "21/09/2026 – 28/09/2026",
        link: tpSiPath,
      },
      {
        title: "Minicursos em SI",
        date: "28/09/2026",
        link: tmSiPath,
      },
      { title: "Indústria e Inovação", date: "Em breve", link: "" },
      {
        title: "Novas Ideias e Resultados Emergentes em SI",
        date: "Em breve",
        link: "",
      },
      {
        title: "Grandes Desafios em Sistemas de Informação no Brasil",
        date: "Em breve",
        link: "",
      },
      {
        title: "Concurso de Teses, Dissertações e TCCs em SI",
        date: "Em breve",
        link: "",
      },
    ],
  },
  en: {
    title: "Call for",
    title_highlight: "tracks",
    iconAlt: "Icon representing the track",
    p1: "The calls for tracks are open. Click on one of the sections for more information",
    p2: "Proposal Submission: ",
    soon: "Coming soon",
    link: "See more",

    tracks: [
      {
        title: "Research in IS",
        date: "Sep 21 – Sep 28, 2026",
        link: tpSiPath,
      },
      {
        title: "Short Courses in IS",
        date: "Sep 28, 2026",
        link: tmSiPath,
      },
      { title: "Industry and Innovation", date: "Coming soon", link: "" },
      {
        title: "New Ideas and Emerging Results in IS",
        date: "Coming soon",
        link: "",
      },
      {
        title: "Grand Challenges in Information Systems in Brazil",
        date: "Coming soon",
        link: "",
      },
      {
        title: "Thesis, Dissertation, and TCC Competition in IS",
        date: "Coming soon",
        link: "",
      },
    ],
  },
};