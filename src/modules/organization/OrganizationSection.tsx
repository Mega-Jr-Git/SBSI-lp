import { useLocale } from "../../shared/i18n/useLocale";
import { organizationContent } from "./organization.content";
import {
	organizationMembers,
	type OrganizationGroup,
	type OrganizationMember,
} from "./organization.data";
import "./organization.css";

type OrganizationSectionProps = Record<string, never>;

function membersByGroup(
	members: OrganizationMember[],
	group: OrganizationGroup,
) {
	return members.filter((member) => member.group === group);
}

type MemberCardProps = {
	member: OrganizationMember;
	photoAlt: (name: string) => string;
};

function MemberCard({ member, photoAlt }: MemberCardProps) {
	return (
		<div className="organization-section-card">
			{member.photoUrl ? (
				<img
					className="organization-section-card__photo"
					src={member.photoUrl}
					alt={photoAlt(member.name)}
				/>
			) : (
				<div
					className="organization-section-card__photo organization-section-card__photo--placeholder"
					aria-hidden="true"
				/>
			)}

			<p className="organization-section-card__name">{member.name}</p>
			<p className="organization-section-card__role">{member.role}</p>
			<p className="organization-section-card__institution">
				{member.institution}
			</p>
		</div>
	);
}

type MemberGroupProps = {
	title: string;
	members: OrganizationMember[];
	photoAlt: (name: string) => string;
};

function MemberGroup({ title, members, photoAlt }: MemberGroupProps) {
	if (members.length === 0) {
		return null;
	}

	return (
		<div className="organization-section__group">
			<h3 className="organization-section__group-title">{title}</h3>

			<div className="organization-section__grid">
				{members.map((member) => (
					<MemberCard key={member.id} member={member} photoAlt={photoAlt} />
				))}
			</div>
		</div>
	);
}

export default function OrganizationSection({}: OrganizationSectionProps) {
	const { locale } = useLocale();
	const content = organizationContent[locale];

	const generalCoordination = membersByGroup(
		organizationMembers,
		"general-coordination",
	);
	const volunteerTeam = membersByGroup(organizationMembers, "volunteer-team");

	return (
		<section
			id="organizacao"
			className="organization-section"
			aria-labelledby="organization-section-title"
		>
			<h2 id="organization-section-title" className="organization-section__title">
				{content.titlePrefix}{" "}
				<span className="organization-section__highlight">
					{content.titleHighlight}
				</span>
			</h2>

			<MemberGroup
				title={content.generalCoordination}
				members={generalCoordination}
				photoAlt={content.photoAlt}
			/>

			<MemberGroup
				title={content.volunteerTeam}
				members={volunteerTeam}
				photoAlt={content.photoAlt}
			/>
		</section>
	);
}
