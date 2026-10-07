export type OrganizationGroup =
  | "general-coordination"
  | "local-organization"
  | "publications-publicity"
  | "tp-si-coordination"
  | "tm-si-coordination"
  | "nire-coordination"
  | "tii-si-coordination"
  | "ctdg-si-coordination"
  | "volunteer-team";

export type LocalizedText = {
  pt: string;
  en: string;
};

export type OrganizationMember = {
  id: string;
  name: string;
  role: LocalizedText;
  institution: LocalizedText;
  group: OrganizationGroup;
  photoUrl?: string;
  email?: string;
};

export const organizationMembers: OrganizationMember[] = [
  {
    id: "awdren-fontao",
    name: "Awdren Fontão",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    email: "awdren.fontao@ufms.br",
    group: "general-coordination",
    photoUrl: "organization/Awdren_Fontao.jpg",
  },
  {
    id: "debora-paiva",
    name: "Débora Paiva",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    email: "debora.paiva@ufms.br",
    group: "general-coordination",
    photoUrl: "organization/Debora_Paiva.jpg",
  },
  {
    id: "cristiano-vieira",
    name: "Cristiano Vieira",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/cristiano-vieira.jpg",
  },
  {
    id: "hudson-borges",
    name: "Hudson Borges",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/hudson-borges.jpg",
  },
  {
    id: "jucele-vasconcellos",
    name: "Jucele Vasconcellos",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/jucele-vasconcellos.jpg",
  },
  {
    id: "marcelo-turine",
    name: "Marcelo Turine",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/marcelo-turine.jpg",
  },
  {
    id: "marcio-silva",
    name: "Márcio Silva",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/marcio-silva.jpg",
  },
  {
    id: "maria-istela-machado",
    name: "Maria Istela",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/maria-istela-machado.jpg",
  },
  {
    id: "patricia-matsubara",
    name: "Patrícia Matsubara",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/patricia-matsubara.jpg",
  },
  {
    id: "ricardo-geraldi",
    name: "Ricardo Theis",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/ricardo-geraldi.jpg",
  },
  {
    id: "vanessa-borges",
    name: "Vanessa Borges",
    role: { pt: "", en: "" },
    institution: { pt: "UFMS", en: "UFMS" },
    group: "local-organization",
    photoUrl: "organization/vanessa-borges.jpg",
  },
  {
    id: "rodrigo-zacarias",
    name: "Rodrigo Zacarias",
    role: { pt: "", en: "" },
    institution: { pt: "UFF", en: "UFF" },
    group: "publications-publicity",
    photoUrl: "organization/rodrigo-zacarias.jpg",
  },
  {
    id: "washington-cunha",
    name: "Washington Cunha",
    role: { pt: "", en: "" },
    institution: { pt: "UNICAMP", en: "UNICAMP" },
    group: "publications-publicity",
    photoUrl: "organization/washington-cunha.jpg",
  },
  {
    id: "carolina-sacramento",
    name: "Carolina Sacramento",
    role: { pt: "", en: "" },
    institution: { pt: "Fiocruz", en: "Fiocruz" },
    group: "publications-publicity",
    photoUrl: "organization/carolina-sacramento.jpg",
  },
  {
    id: "claudia-cappelli",
    name: "Claudia Cappelli",
    role: { pt: "", en: "" },
    institution: { pt: "UERJ", en: "UERJ" },
    group: "tp-si-coordination",
    photoUrl: "organization/claudia-cappelli.jpg",
  },
  {
    id: "maria-claudia-emer",
    name: "Maria Claudia Emer",
    role: { pt: "", en: "" },
    institution: { pt: "UTFPR", en: "UTFPR" },
    group: "tp-si-coordination",
    photoUrl: "organization/maria-claudia-emer.jpg",
  },
  {
    id: "davi-viana",
    name: "Davi Viana",
    role: { pt: "", en: "" },
    institution: { pt: "UFMA", en: "UFMA" },
    group: "tm-si-coordination",
    photoUrl: "organization/davi-viana.jpg",
  },
  {
    id: "paulo-malcher",
    name: "Paulo Malcher",
    role: { pt: "", en: "" },
    institution: { pt: "UFRA", en: "UFRA" },
    group: "tm-si-coordination",
    photoUrl: "organization/paulo-malcher.jpg",
  },
  {
    id: "rita-suzana-maciel",
    name: "Rita Suzana Maciel",
    role: { pt: "", en: "" },
    institution: { pt: "UFBA", en: "UFBA" },
    group: "nire-coordination",
    photoUrl: "organization/rita-suzana-maciel.jpg",
  },
  {
    id: "jose-maria-david",
    name: "José Maria David",
    role: { pt: "", en: "" },
    institution: { pt: "UFJF", en: "UFJF" },
    group: "nire-coordination",
    photoUrl: "organization/jose-maria-david.jpg",
  },
  {
    id: "nadia-kozievitch",
    name: "Nádia Kozievitch",
    role: { pt: "", en: "" },
    institution: { pt: "UTFPR", en: "UTFPR" },
    group: "tii-si-coordination",
    photoUrl: "organization/nadia-kozievitch.jpg",
  },
  {
    id: "leonardo-azevedo",
    name: "Leonardo Azevedo",
    role: { pt: "", en: "" },
    institution: { pt: "Instituto Kunumi", en: "Instituto Kunumi" },
    group: "tii-si-coordination",
    photoUrl: "organization/leonardo-azevedo.jpg",
  },
  {
    id: "sean-siqueira",
    name: "Sean Siqueira",
    role: { pt: "", en: "" },
    institution: { pt: "UNIRIO", en: "UNIRIO" },
    group: "ctdg-si-coordination",
    photoUrl: "organization/sean-siqueira.jpg",
  },
  {
    id: "karin-komati",
    name: "Karin Komati",
    role: { pt: "", en: "" },
    institution: { pt: "IFES", en: "IFES" },
    group: "ctdg-si-coordination",
    photoUrl: "organization/karin-komati.jpg",
  },
  {
    id: "isabele-firmino",
    name: "Isabele Firmino",
    role: { pt: "", en: "" },
    institution: { pt: "", en: "" },
    group: "volunteer-team",
  },
  {
    id: "maria-eduarda-moretto",
    name: "Maria Eduarda Moretto",
    role: { pt: "", en: "" },
    institution: { pt: "", en: "" },
    group: "volunteer-team",
  },
  {
    id: "edilson-enzo",
    name: "Edilson Enzo",
    role: { pt: "", en: "" },
    institution: { pt: "", en: "" },
    group: "volunteer-team",
  },
  {
    id: "marcus-augusto",
    name: "Marcus Augusto",
    role: { pt: "", en: "" },
    institution: { pt: "", en: "" },
    group: "volunteer-team",
    photoUrl: "organization/marcus-augusto.jpg",
  },
  {
    id: "julio-dalpiaz",
    name: "Julio Dalpiaz",
    role: { pt: "", en: "" },
    institution: { pt: "", en: "" },
    group: "volunteer-team",
  },
  {
    id: "jhonathan-soares",
    name: "Jhonathan Soares",
    role: { pt: "", en: "" },
    institution: { pt: "", en: "" },
    group: "volunteer-team",
    photoUrl: "organization/jhonathan-soares.jpg",
  },
];
