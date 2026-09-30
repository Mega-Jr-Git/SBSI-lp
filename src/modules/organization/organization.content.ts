export type OrganizationContent = {
	titlePrefix: string;
	titleHighlight: string;
	generalCoordination: string;
	volunteerTeam: string;
	photoAlt: (name: string) => string;
};

export const organizationContent: Record<"pt" | "en", OrganizationContent> = {
	pt: {
		titlePrefix: "Organizadores do",
		titleHighlight: "SBSI 2027",
		generalCoordination: "Coordenação Geral",
		volunteerTeam: "Time de voluntários",
		photoAlt: (name) => `Foto de ${name}`,
	},
	en: {
		titlePrefix: "SBSI 2027",
		titleHighlight: "Organizers",
		generalCoordination: "General Coordination",
		volunteerTeam: "Volunteer Team",
		photoAlt: (name) => `Photo of ${name}`,
	},
};
