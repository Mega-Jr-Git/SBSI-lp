export type OrganizationContent = {
	titlePrefix: string;
	titleHighlight: string;
	generalCoordination: string;
	localOrganization: string;
	publicationsPublicity: string;
	tpSiCoordination: string;
	tmSiCoordination: string;
	nireCoordination: string;
	tiiSiCoordination: string;
	ctdgSiCoordination: string;
	volunteerTeam: string;
	photoAlt: (name: string) => string;
};

export const organizationContent: Record<"pt" | "en", OrganizationContent> = {
	pt: {
		titlePrefix: "Organizadores do",
		titleHighlight: "SBSI 2027",
		generalCoordination: "Coordenação Geral",
		localOrganization: "Organização Local",
		publicationsPublicity: "Coordenação de Publicações e Publicidade",
		tpSiCoordination: "Coordenação da Trilha de TP-SI",
		tmSiCoordination: "Coordenação da Trilha de TM-SI",
		nireCoordination: "Coordenação da Trilha NIRE",
		tiiSiCoordination: "Coordenação da Trilha de TII-SI",
		ctdgSiCoordination: "Coordenação do CTDG-SI",
		volunteerTeam: "Time de voluntários",
		photoAlt: (name) => `Foto de ${name}`,
	},
	en: {
		titlePrefix: "SBSI 2027",
		titleHighlight: "Organizers",
		generalCoordination: "General Coordination",
		localOrganization: "Local Organization",
		publicationsPublicity: "Publications and Publicity Chairs",
		tpSiCoordination: "TP-SI Track Coordination",
		tmSiCoordination: "TM-SI Track Coordination",
		nireCoordination: "NIRE Track Coordination",
		tiiSiCoordination: "TII-SI Track Coordination",
		ctdgSiCoordination: "CTDG-SI Coordination",
		volunteerTeam: "Volunteer Team",
		photoAlt: (name) => `Photo of ${name}`,
	},
};
