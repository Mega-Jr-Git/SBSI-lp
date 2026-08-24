/**
 * Fonte estática e tipada dos coordenadores e colaboradores do SBSI 2027.
 *
 * IMPORTANTE:
 * - Nao adicionar nenhuma pessoa aqui sem a relacao final aprovada pela
 *   organizacao (nome, funcao, instituicao e, se houver, autorizacao de foto).
 * - Nao reutilizar nomes, cargos, fotos ou instituicoes do SBSI 2026.
 * - `photoUrl` e opcional: quando ausente, o card exibe um placeholder e o
 *   layout nao quebra (ver OrganizationSection.tsx).
 */

export type OrganizationGroup = "general-coordination" | "volunteer-team";

export type OrganizationMember = {
	/** Identificador único e estável (kebab-case), usado como React key. */
	id: string; // ex.: "nome-sobrenome"
	name: string; // ex.: "Nome Sobrenome"
	role?: string; // função - ex.: "Product Owner"
	institution?: string; // ex.: "UFMS"
	group: OrganizationGroup; // ex.:"general-coordination", // ou "volunteer-team"
	// * Caminho para a foto em `public/` (ex.: "public\organization\nome-sobrenome.jpg").
	photoUrl?: string; // photoUrl é opcional — se não colocar, aparece o placeholder cinza
};  

export const organizationMembers: OrganizationMember[] = [
	{
		id: "Karin-Satie-Komati1",
		name: "Karin Satie Komati",
		role: "",
		institution: "IFES",
		group: "general-coordination",
		// photoUrl: "/organization/karin-satie-komati.jpg",
	},
	{
		id: "Karin-Satie-Komati2",
		name: "Karin Satie Komati",
		role: "",
		institution: "IFES",
		group: "general-coordination",
		// photoUrl: "/organization/karin-satie-komati.jpg",
	},
	{
		id: "Karin-Satie-Komati3",
		name: "Karin Satie Komati",
		role: "",
		institution: "IFES",
		group: "general-coordination",
		// photoUrl: "/organization/karin-satie-komati.jpg",
	},

	{
		id: "Isabele-Firmino",
		name: "Isabele Firmino",
		role: "Product Owner",
		institution: "",
		group: "volunteer-team",
		// photoUrl: "/organization/isabele-firmino.jpg",
	},
	{
		id: "Maria-Eduarda-Moretto",
		name: "Maria Eduarda Moretto",
		role: "Design UI/UX",
		institution: "",
		group: "volunteer-team",
		// photoUrl: "/organization/maria-eduarda-moretto.jpg",
	},
	{
		id: "Edilson-Enzo",
		name: "Edilson Enzo",
		role: "Desenvolvedor",
		institution: "",
		group: "volunteer-team",
		// photoUrl: "/organization/edilson-enzo.jpg",
	},
	{
		id: "Marcus-Augusto",
		name: "Marcus Augusto",
		role: "Product Owner",
		institution: "",
		group: "volunteer-team",
		// photoUrl: "/organization/marcus-augusto.jpg",
	},
	{
		id: "Julio-Dalpiaz",
		name: "Julio Dalpiaz",
		role: "Desenvolvedor",
		institution: "",
		group: "volunteer-team",
		// photoUrl: "/organization/julio-dalpiaz.jpg",
	},
	{
		id: "Jhonathan-Soares",
		name: "Jhonathan Soares",
		role: "Desenvolvedor",
		institution: "",
		group: "volunteer-team",
		// photoUrl: "/organization/jhonathan-soares.jpg",
	},
];
