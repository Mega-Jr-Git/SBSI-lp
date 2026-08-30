export type OrganizationGroup = "general-coordination" | "volunteer-team";

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
};

export const organizationMembers: OrganizationMember[] = [
	{
		id: "karin-satie-komati-1",
		name: "Karin Satie Komati",
		role: { pt: "", en: "" },
		institution: { pt: "IFES", en: "IFES" },
		group: "general-coordination",
	},
	{
		id: "karin-satie-komati-2",
		name: "Karin Satie Komati",
		role: { pt: "", en: "" },
		institution: { pt: "IFES", en: "IFES" },
		group: "general-coordination",
	},
	{
		id: "karin-satie-komati-3",
		name: "Karin Satie Komati",
		role: { pt: "", en: "" },
		institution: { pt: "IFES", en: "IFES" },
		group: "general-coordination",
	},
	{
		id: "isabele-firmino",
		name: "Isabele Firmino",
		role: { pt: "Product Owner", en: "Product Owner" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
	},
	{
		id: "maria-eduarda-moretto",
		name: "Maria Eduarda Moretto",
		role: { pt: "Designer UI/UX", en: "UI/UX Designer" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
	},
	{
		id: "edilson-enzo",
		name: "Edilson Enzo",
		role: { pt: "Desenvolvedor", en: "Developer" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
	},
	{
		id: "marcus-augusto",
		name: "Marcus Augusto",
		role: { pt: "Product Owner", en: "Product Owner" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
	},
	{
		id: "julio-dalpiaz",
		name: "Julio Dalpiaz",
		role: { pt: "Desenvolvedor", en: "Developer" },
		institution: { pt: "", en: "" },
		group: "volunteer-team",
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
