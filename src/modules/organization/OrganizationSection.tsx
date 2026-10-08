import { useLocale } from "../../shared/i18n/useLocale";
import { organizationContent } from "./organization.content";
import {
  type OrganizationGroup,
  type OrganizationMember,
  organizationMembers,
} from "./organization.data";
import "./organization.css";

function membersByGroup(
  members: OrganizationMember[],
  group: OrganizationGroup,
) {
  return members.filter((member) => member.group === group);
}

type MemberCardProps = {
  member: OrganizationMember;
  locale: "pt" | "en";
  photoAlt: (name: string) => string;
};

function MemberCard({ member, locale, photoAlt }: MemberCardProps) {
  const role = member.role[locale];
  const institution = member.institution[locale];

  return (
    <div className="organization-section-card">
      {member.photoUrl ? (
        <img
          className="organization-section-card__photo"
          src={`${import.meta.env.BASE_URL}${member.photoUrl}`}
          alt={photoAlt(member.name)}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="organization-section-card__photo organization-section-card__photo--placeholder"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="8.5" r="4.5" />
            <path d="M3 24c0-5.5 4-9 9-9s9 3.5 9 9z" />
          </svg>
        </div>
      )}

      <p className="organization-section-card__name">{member.name}</p>

      {role ? <p className="organization-section-card__role">{role}</p> : null}

      {institution ? (
        <p className="organization-section-card__institution">{institution}</p>
      ) : null}

      {member.email ? (
        <a
          className="organization-section-card__email"
          href={`mailto:${member.email}`}
        >
          {member.email}
        </a>
      ) : null}
    </div>
  );
}

type MemberGroupProps = {
  title: string;
  members: OrganizationMember[];
  locale: "pt" | "en";
  photoAlt: (name: string) => string;
};

function MemberGroup({ title, members, locale, photoAlt }: MemberGroupProps) {
  if (members.length === 0) {
    return null;
  }

  return (
    <div className="organization-section__group">
      <h3 className="organization-section__group-title">{title}</h3>

      <div className="organization-section__grid">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            locale={locale}
            photoAlt={photoAlt}
          />
        ))}
      </div>
    </div>
  );
}

export default function OrganizationSection() {
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
      <h2
        id="organization-section-title"
        className="organization-section__title"
      >
        {content.titlePrefix}{" "}
        <span className="organization-section__highlight">
          {content.titleHighlight}
        </span>
      </h2>

      <MemberGroup
        title={content.generalCoordination}
        members={generalCoordination}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.localOrganization}
        members={membersByGroup(organizationMembers, "local-organization")}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.publicationsPublicity}
        members={membersByGroup(organizationMembers, "publications-publicity")}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.tpSiCoordination}
        members={membersByGroup(organizationMembers, "tp-si-coordination")}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.tmSiCoordination}
        members={membersByGroup(organizationMembers, "tm-si-coordination")}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.nireCoordination}
        members={membersByGroup(organizationMembers, "nire-coordination")}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.tiiSiCoordination}
        members={membersByGroup(organizationMembers, "tii-si-coordination")}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.ctdgSiCoordination}
        members={membersByGroup(organizationMembers, "ctdg-si-coordination")}
        locale={locale}
        photoAlt={content.photoAlt}
      />

      <MemberGroup
        title={content.volunteerTeam}
        members={volunteerTeam}
        locale={locale}
        photoAlt={content.photoAlt}
      />
    </section>
  );
}
