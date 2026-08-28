export type SiteHeaderContent = {
  menu: { sobre: string; trilhas: string; organizacao: string; local: string };
  submeter: string;
  inscrever: string;
  ariaLang: string;
  navAria: string;
  mobileNavAria: string;
  menuOpen: string;
  menuClose: string;
};

export const siteHeaderContent: Record<"pt" | "en", SiteHeaderContent> = {
  pt: {
    menu: { sobre: "Sobre", trilhas: "Trilhas", organizacao: "Organização", local: "Local" },
    submeter: "Submeta seu trabalho",
    inscrever: "Inscreva-se",
    ariaLang: "Mudar idioma. Atual: Português",
    navAria: "Navegação principal",
    mobileNavAria: "Menu principal móvel",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },
  en: {
    menu: { sobre: "About", trilhas: "Tracks", organizacao: "Organization", local: "Venue" },
    submeter: "Submit your paper",
    inscrever: "Register",
    ariaLang: "Change language. Current: English",
    navAria: "Main navigation",
    mobileNavAria: "Main mobile menu",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
};
