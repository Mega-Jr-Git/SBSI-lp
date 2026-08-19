import { type ReactNode, useEffect } from "react";
import type { CallInline, CallPageData, CallParagraph } from "../../../types/call-page.types";
import "./call-page.css";

interface CallPageLayoutProps {
  id: string;
  content?: CallPageData;
  links: Record<string, string>;
}

export function CallPageLayout({ id, content, links }: CallPageLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0 });

    const baseTitle = "SBSI";
    const suffix = content?.hero?.title;
    if (suffix) {
      document.title = `${baseTitle} | ${suffix}`;
      return () => {
        document.title = baseTitle;
      };
    }
  }, [content?.hero?.title]);

  if (!content) {
    return (
      <main id={id} className="call-page">
        <header className="call-hero">
          <p className="call-kicker">Chamadas</p>
          <h1>Trilha de Minicursos (TM-SI)</h1>
        </header>
        <div className="call-layout call-empty-state">
          <h2 className="call-empty-title">Em breve</h2>
          <p className="call-empty-description">
            A chamada completa e aprovada para a Trilha de Minicursos do SBSI 2027 estará disponível em breve.
          </p>
        </div>
      </main>
    );
  }

  function renderInline(parts: readonly CallInline[]): ReactNode {
    return parts.map((part) => {
      if (typeof part === "string") return part;
      if ("link" in part) {
        const href = links[part.link];
        if (!href) return part.text;

        return (
          <a
            key={`${part.link}:${part.text}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part.text}
          </a>
        );
      }
      return <b key={part.strong}>{part.strong}</b>;
    });
  }

  function renderParagraph(paragraph: CallParagraph, key: string | number) {
    return <p key={key}>{renderInline(paragraph)}</p>;
  }

  function inlineKey(parts: CallParagraph) {
    return parts
      .map((part) =>
        typeof part === "string"
          ? part
          : "link" in part
            ? `${part.link}:${part.text}`
            : part.strong,
      )
      .join("");
  }

  return (
    <main id={id} className="call-page">
      <header className="call-hero">
        <p className="call-kicker">{content.hero.kicker}</p>
        <h1>{content.hero.title}</h1>
        <div className="call-meta">
          <span>{content.hero.dates}</span>
          <span>{content.hero.location}</span>
          <span>{content.hero.format}</span>
        </div>
        {links.submission && (
          <a
            className="call-hero-cta"
            href={links.submission}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.hero.submit}
          </a>
        )}
      </header>

      <div className="call-layout">
        <article className="call-body">
          <section>
            {content.intro.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
          </section>

          {content.targetAudience && (
            <section>
              <h2>{content.targetAudienceTitle || "Público-Alvo"}</h2>
              {content.targetAudience.map((paragraph, index) =>
                renderParagraph(paragraph, `target-${index}`),
              )}
            </section>
          )}

            <section>
            <h2>{content.submissionTitle}</h2>
            {content.submission.paragraphs.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}

            {content.submission.rules && (
              <ol className="call-rules">
                {content.submission.rules.map((rule) => (
                  <li key={inlineKey(rule)}>{renderInline(rule)}</li>
                ))}
              </ol>
            )}

            {content.submission.phases && (
              <div className="call-submission-phases">
                {content.submission.phases.map((phase, idx) => (
                  <div key={idx} className="call-phase-item">
                    {phase.title && <h3>{phase.title}</h3>}
                    {phase.paragraphs?.map((p, pIdx) =>
                      renderParagraph(p, `phase-p-${idx}-${pIdx}`),
                    )}
                    {phase.rules && (
                      <ol className="call-rules">
                        {phase.rules.map((rule) => (
                          <li key={inlineKey(rule)}>{renderInline(rule)}</li>
                        ))}
                      </ol>
                    )}
                  </div>
                ))}
              </div>
            )}

            {content.submission.openScience &&
              renderParagraph(content.submission.openScience, "open-science")}
            {content.submission.diversity &&
              renderParagraph(content.submission.diversity, "diversity")}
          </section>

          {content.format && (
            <section>
              <h2>{content.formatTitle || "Formato da Proposta e do Capítulo"}</h2>
              
              <h3>{content.format.phase1Title}</h3>
              <ul className="call-publication-requirements">
                {content.format.phase1Rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>

              <h3 className="call-subtitle-spaced">{content.format.phase2Title}</h3>
              <ul className="call-publication-requirements">
                {content.format.phase2Rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </section>
          )}

          {content.importantInfoParagraphs && (
            <section>
              <h2>{content.importantInfoTitle}</h2>
              <p className="call-important-info-subtitle">{content.importantInfoSubtitle?.map((subtitle, index) => (
                <span key={index}>{renderInline(subtitle)}</span>
              ))}</p>
              <ul className="call-rules">
                {content.importantInfoParagraphs.map((info) => (
                   <li key={inlineKey(info)}>{renderInline(info)}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2>{content.topicsTitle}</h2>
            <ul className="call-topics">
              {content.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            {content.topicsNote && <p className="call-topics-note">{content.topicsNote}</p>}
          </section>

          <section>
            <h2>{content.datesTitle}</h2>
            <ul className="call-inline-dates">
              {content.dates.map(([date, label, description]) => (
                <li key={date}>
                  <strong>{date}:</strong> {label}
                  {description && ` (${description})`}
                </li>
              ))}
            </ul>
          </section>

          {content.review && (
            <section>
              <h2>{content.reviewTitle}</h2>
              {content.review.paragraphs.map((paragraph, index) =>
                renderParagraph(paragraph, index),
              )}
              <ul className="call-publication-requirements">
                {content.review.criteria.map((criterion) => (
                  <li key={inlineKey(criterion)}>{renderInline(criterion)}</li>
                ))}
              </ul>
              {content.review.publication && content.review.publication.map((paragraph, index) =>
                renderParagraph(paragraph, index),
              )}
            </section>
          )}

          {content.publication && (
            <section>
              <h2>{content.publicationTitle}</h2>
              {content.publication.paragraphs.map((paragraph, index) =>
                renderParagraph(paragraph, index),
              )}
              <ul className="call-publication-requirements">
                {content.publication.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
              <p>{content.publication.closing}</p>
            </section>
          )}

          {content.tpcTitle && (
            <section>
              <h2>{content.tpcTitle}</h2>
              {content.tpcStatus && <p>{content.tpcStatus}</p>}
              {content.tpcMembers && content.tpcMembers.length > 0 && (
                <ul className="call-publication-requirements">
                  {content.tpcMembers.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              )}
            </section>
          )}

          <section>
            <h2>{content.coordinationTitle}</h2>
            {content.coordinators.map((coordinator) => (
              <p key={coordinator}>{coordinator}</p>
            ))}
          </section>
        </article>

        <aside className="call-aside">
          <div className="call-date-card">
            <h2>{content.datesTitle}</h2>
            <ul className="call-date-list">
              {content.dates.map(([date, label]) => (
                <li className="call-date" key={date}>
                  <span>{date}</span>
                  <strong>{label}</strong>
                </li>
              ))}
            </ul>
            {links.submission && (
              <a
                className="call-submission-link"
                href={links.submission}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.hero.submit}
              </a>
            )}
          </div>

          <div className="call-coordination">
            <p className="call-kicker">{content.coordinationKicker}</p>
            {content.coordinators.map((coordinator) => (
              <p key={coordinator}>
                <strong>{coordinator}</strong>
              </p>
            ))}
          </div>

          <div className="call-links">
            {links.cesi && (
              <a href={links.cesi} target="_blank" rel="noopener noreferrer">
                {content.sideLinks.cesi}
              </a>
            )}
            {links.sbc && (
              <a href={links.sbc} target="_blank" rel="noopener noreferrer">
                {content.sideLinks.sbc}
              </a>
            )}
            {links.jems && (
              <a href={links.jems} target="_blank" rel="noopener noreferrer">
                {content.sideLinks.jems}
              </a>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}