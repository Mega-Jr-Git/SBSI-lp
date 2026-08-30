export type SiteFooterContent = {
  description: string;
  navTitle: string;
  instTitle: string;
  nav: {
    inicio: string;
    sobre: string;
    trilhas: string;
    organizacao: string;
    onde: string;
    inscricao: string;
  };
  inst: {
    sbc: string;
    edicoes: string;
  };
  copyright: string;
  devBy: string;
  analyticsNotice: string;
};

export const siteFooterContent: Record<"pt" | "en", SiteFooterContent> = {
  pt: {
    description:
      "Simpósio Brasileiro de Sistemas de Informação.\nXXII edição: Campo Grande, Mato Grosso do Sul - 17 a 20 de Maio de 2027.",
    navTitle: "NAVEGAÇÃO",
    instTitle: "INSTITUCIONAL",
    nav: {
      inicio: "Início",
      sobre: "Sobre",
      trilhas: "Trilhas",
      organizacao: "Organização",
      onde: "Onde",
      inscricao: "Inscrição",
    },
    inst: {
      sbc: "SBC",
      edicoes: "Edições anteriores",
    },
    copyright:
      "© 2027 Simpósio Brasileiro de Sistemas de Informação. Todos os direitos reservados",
    devBy: "Desenvolvido por:",
    analyticsNotice:
      "Este site utiliza Google Analytics para análise anônima de tráfego.",
  },
  en: {
    description:
      "Brazilian Symposium on Information Systems.\nXXII edition: Campo Grande, Mato Grosso do Sul - May 17 to 20, 2027.",
    navTitle: "NAVIGATION",
    instTitle: "INSTITUTIONAL",
    nav: {
      inicio: "Home",
      sobre: "About",
      trilhas: "Tracks",
      organizacao: "Organization",
      onde: "Venue",
      inscricao: "Registration",
    },
    inst: {
      sbc: "SBC",
      edicoes: "Previous editions",
    },
    copyright:
      "© 2027 Brazilian Symposium on Information Systems. All rights reserved",
    devBy: "Developed by:",
    analyticsNotice: "This site uses Google Analytics for anonymous traffic analysis.",
  },
};
