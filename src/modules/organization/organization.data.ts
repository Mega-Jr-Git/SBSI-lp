/**
 * Fonte estática e tipada dos coordenadores e colaboradores do SBSI 2027.
 *
 * IMPORTANTE:
 * - Nao adicionar nenhuma pessoa aqui sem a relacao final aprovada pela
 *   organizacao (nome, funcao, instituicao e, se houver, autorizacao de foto).
 * - Nao reutilizar nomes, cargos, fotos ou instituicoes do SBSI 2026.
 * - `role` e `institution` sao texto visivel para quem visita o site, entao
 *   precisam de versao pt e en (regra 6 de coding-standards.md).
 * - `photoUrl` e opcional: quando ausente, o card exibe um placeholder e o
 *   layout nao quebra (ver OrganizationSection.tsx).
 */

export type OrganizationGroup = "general-coordination" | "volunteer-team";

/** Texto que varia por pessoa e precisa existir em pt e en. */
export type LocalizedText = {
	pt: string;
	en: string;
};

export type OrganizationMember = {
	/** Identificador único e estável (kebab-case), usado como React key. */
	id: string; // ex.: "nome-sobrenome"
	name: string; // ex.: "Nome Sobrenome" (nome próprio não é traduzido)
	role: LocalizedText; // função - ex.: { pt: "Desenvolvedor", en: "Developer" }
	institution: LocalizedText; // ex.: { pt: "IFES", en: "IFES" }
	group: OrganizationGroup; // "general-coordination" ou "volunteer-team"
	/** Caminho para a foto em `public/` (ex.: "/organization/nome-sobrenome.jpg"). */
	photoUrl?: string;
};

export const organizationMembers: OrganizationMember[] = [
	{
		id: "karin-satie-komati-1",
		name: "Karin Satie Komati",
		role: { pt: "", en: "" },
		institution: { pt: "IFES", en: "IFES" },
		group: "general-coordination",
		// photoUrl: "/organization/karin-satie-komati.jpg",
	},
	{
		id: "karin-satie-komati-2",
		name: "Karin Satie Komati",
		role: { pt: "", en: "" },
		institution: { pt: "IFES", en: "IFES" },
		group: "general-coordination",
		// photoUrl: "/organization/karin-satie-komati.jpg",
	},
	{
		id: "karin-satie-komati-3",
		name: "Karin Satie Komati",
		role: { pt: "", en: "" },
		institution: { pt: "IFES", en: "IFES" },
		group: "general-coordination",
		// photoUrl: "/organization/karin-satie-komati.jpg",
	},
	{
		id: "isabele-firmino",
		name: "Isabele Firmino",
		role: { pt: "Product Owner", en: "Product Owner" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
		// photoUrl: "/organization/isabele-firmino.jpg",
	},
	{
		id: "maria-eduarda-moretto",
		name: "Maria Eduarda Moretto",
		role: { pt: "Design UI/UX", en: "UI/UX Design" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
		// photoUrl: "/organization/maria-eduarda-moretto.jpg",
	},
	{
		id: "edilson-enzo",
		name: "Edilson Enzo",
		role: { pt: "Desenvolvedor", en: "Developer" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
		// photoUrl: "/organization/edilson-enzo.jpg",
	},
	{
		id: "marcus-augusto",
		name: "Marcus Augusto",
		role: { pt: "Product Owner", en: "Product Owner" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
		// photoUrl: "/organization/marcus-augusto.jpg",
	},
	{
		id: "julio-dalpiaz",
		name: "Julio Dalpiaz",
		role: { pt: "Desenvolvedor", en: "Developer" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
		// photoUrl: "/organization/julio-dalpiaz.jpg",
	},
	{
		id: "jhonathan-soares",
		name: "Jhonathan Soares",
		role: { pt: "Desenvolvedor", en: "Developer" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
		photoUrl: "/organization/jhonathan-soares.jpg",
	},
];
