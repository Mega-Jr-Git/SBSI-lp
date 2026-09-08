import { type ReactNode, useEffect } from "react";
import type { CallInline, CallPageData, CallParagraph } from "../../../types/call-page.types";
import "./call-page.css";
import { ArrowIcon } from "./assets/Arrow";
import { CalendarIcon } from "./assets/Calendar";

type CallPageLayoutProps = {
  id: string;
  content?: CallPageData;
  links: Record<string, string>;
  criteriaBullets?: boolean;
}

export function CallPageLayout({ id, content, links, criteriaBullets }: CallPageLayoutProps) {
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
          <p className="call-eyebrow">Chamadas</p>
          <h1>Chamada para a Trilha de Pesquisa em SI (TP-SI)</h1>
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
        <p className="call-eyebrow">Chamadas</p>
        <h1>{content.hero.title}</h1>
        <ul className="call-meta">
          <li>{content.hero.badges.date}</li>
          <li>{content.hero.badges.location}</li>
          <li>{content.hero.badges.format}</li>
        </ul>
        {links.submission && (
          <a
            className="call-hero-cta"
            href={links.submission}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.hero.submit} <ArrowIcon />
          </a>
        )}
      </header>

      <div className="call-layout">
        <article className="call-body">
          <section id="descricao" className="call-body-section">
            <h2>{content.introTitle}</h2>
            {content.intro.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
          </section>

          {content.targetAudience && (
            <section className="call-body-section">
              <h2>{content.targetAudienceTitle || "Público-Alvo"}</h2>
              {content.targetAudience.map((paragraph, index) =>
                renderParagraph(paragraph, `target-${index}`),
              )}
            </section>
          )}

          <section id="topicos" className="call-body-section">
            <h2>{content.topicsTitle}</h2>
            <ul className="call-topics">
              {content.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            {content.topicsNote && <p className="call-topics-note">{content.topicsNote}</p>}
          </section>

          <section id="datas" className="call-body-section">
            <h2>{content.datesTitle}</h2>
            <ul className="call-inline-dates">
              {content.dates.map(([date, label, description, oldDate]) => (
                <li key={date}>
                  <div className="call-inline-dates-date">
                    <span className="call-inline-dates-calendar"><CalendarIcon /></span>
                    <span className="call-inline-dates-span">
                      {oldDate && (
                        <>
                          <s className="call-date-old">{oldDate}</s>
                          <br />
                        </>
                      )}
                      {date}
                    </span>
                  </div>
                  <div className="call-inline-dates-info">
                    <div className="call-inline-label">{label}</div>
                    <p>{description && ` ${description}.`}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="instrucoes" className="call-body-section">
            <h2>{content.submissionTitle}</h2>
            {content.submission.paragraphs.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}

            {content.submission.rules && (
              <div className="call-submission-rules-box">
                {content.submission.rulesIntro &&
                  renderParagraph(content.submission.rulesIntro, "submission-rules-intro")}
                <ol className="call-rules">
                  {content.submission.rules.map((rule) => (
                    <li key={inlineKey(rule)}>{renderInline(rule)}</li>
                  ))}
                </ol>
              </div>
            )}

            {content.submission.phases && (
              <div className="call-submission-phases">
                {content.submission.phases.map((phase) => (
                  <div key={phase.title || (phase.paragraphs?.[0] ? inlineKey(phase.paragraphs[0]) : "phase")} className="call-phase-item">
                    {phase.title && <h3>{phase.title}</h3>}
                    {phase.paragraphs?.map((p) =>
                      renderParagraph(p, inlineKey(p)),
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
                {content.format.phase1Rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>

              <h3 className="call-subtitle-spaced">{content.format.phase2Title}</h3>
              <ul className="call-publication-requirements">
                {content.format.phase2Rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </section>
          )}

          {content.importantInfoParagraphs && (
            <section className="call-body-section">
              <h2>{content.importantInfoTitle}</h2>
              <p className="call-important-info-subtitle">{content.importantInfoSubtitle?.map((subtitle) => (
                <span key={inlineKey(subtitle)}>{renderInline(subtitle)}</span>
              ))}</p>
              <ul className="call-rules">
                {content.importantInfoParagraphs.map((info) => (
                   <li key={inlineKey(info)}>{renderInline(info)}</li>
                ))}
              </ul>
            </section>
          )}

          {content.review && (
            <section id="revisao" className="call-body-section">
              <h2>{content.reviewTitle}</h2>
              {content.review.paragraphs.map((paragraph, index) =>
                renderParagraph(paragraph, index),
              )}
              <div className={`call-criteria-grid${criteriaBullets ? " call-criteria-grid--bullets" : ""}`}>
                {content.review.criteria.map((criterion) => (
                  <div key={inlineKey(criterion)} className="call-criterion-card">
                    {renderInline(criterion)}
                  </div>
                ))}
              </div>
              {content.review.publication?.map((paragraph) =>
                renderParagraph(paragraph, inlineKey(paragraph)),
              )}
            </section>
          )}

          {content.publication && (
            <section id="publicacao" className="call-body-section">
              <h2>{content.publicationTitle}</h2>
              {content.publication.paragraphs.map((paragraph, index) =>
                renderParagraph(paragraph, index),
              )}
              <ul className="call-publication-cards">
                {content.publication.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
              <p className="call-publication-note">{content.publication.closing}</p>
            </section>
          )}

          {content.tpcTitle && (
            <section className="call-body-section">
              <h2>{content.tpcTitle}</h2>
              {content.tpcStatus && <p>{content.tpcStatus}</p>}
              {content.tpcMembers && content.tpcMembers.length > 0 && (
                <ul className="call-publication-requirements">
                  {content.tpcMembers.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              )}
            </section>
          )}

          <section id="coordenacao" className="call-body-section">
            <h2>{content.coordinationTitle}</h2>
            {content.coordinationKicker && <p className="call-coordination-kicker">{content.coordinationKicker}</p>}
            <div className="call-coordinator-grid">
              {content.coordinators.map((coordinator) => (
                <div key={coordinator.name} className="call-coordinator-card">
                  <strong>{coordinator.name}</strong>
                  <span>{coordinator.institution}</span>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="call-aside">
          <div className="call-date-card">
            <h2>{content.datesTitle}</h2>
            <ul className="call-date-list">
              {content.dates.map(([date, label, , oldDate]) => (
                <li className="call-date" key={date}>
                  <span>
                    {oldDate && (
                      <>
                        <s className="call-date-old">{oldDate}</s>
                        <br />
                      </>
                    )}
                    {date}
                  </span>
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
                {content.hero.submit} <ArrowIcon />
              </a>
            )}
          </div>

          {content.toc && (
            <div className="call-in-this-call">
              <h2>{content.tocTitle}</h2>
              <ol className="call-toc">
                {content.toc.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}