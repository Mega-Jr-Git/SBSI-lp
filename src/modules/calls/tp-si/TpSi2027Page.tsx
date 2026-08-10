import { type ReactNode, useEffect } from "react";
import { useLocale } from "../../../shared/i18n/useLocale";
import {
  type TpSi2027Inline,
  type TpSi2027Paragraph,
  tpSi2027Content,
  tpSi2027Links,
} from "./tp-si-2027.content";
import "./tp-si-2027.css";

function renderInline(content: readonly TpSi2027Inline[]): ReactNode {
  return content.map((part) => {
    if (typeof part === "string") return part;
    if ("link" in part) {
      return (
        <a
          key={part.link}
          href={tpSi2027Links[part.link]}
          target="_blank"
          rel="noreferrer"
        >
          {part.text}
        </a>
      );
    }
    return <b key={part.strong}>{part.strong}</b>;
  });
}

function renderParagraph(paragraph: TpSi2027Paragraph, key: string | number) {
  return <p key={key}>{renderInline(paragraph)}</p>;
}

function inlineKey(content: TpSi2027Paragraph) {
  return content
    .map((part) =>
      typeof part === "string"
        ? part
        : "link" in part
          ? `${part.link}:${part.text}`
          : part.strong,
    )
    .join("");
}

export default function TpSi2027Page() {
  const { locale } = useLocale();
  const content = tpSi2027Content[locale];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main id="tp-si-2027" className="tp-page">
      <header className="tp-hero">
        <p className="tp-kicker">{content.hero.kicker}</p>
        <h1>{content.hero.title}</h1>
        <div className="tp-meta">
          <span>{content.hero.dates}</span>
          <span>{content.hero.location}</span>
          <span>{content.hero.format}</span>
        </div>
        <a
          className="tp-hero-cta"
          href={tpSi2027Links.submission}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.hero.submit}
        </a>
      </header>
      <div className="tp-layout">
        <article className="tp-body">
          <section>
            {content.intro.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
          </section>
          <section>
            <h2>{content.topicsTitle}</h2>
            <ul className="tp-topics">
              {content.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>{content.datesTitle}</h2>
            <ul className="tp-inline-dates">
              {content.dates.map(([date, label, description]) => (
                <li key={date}>
                  <strong>{date}:</strong> {label}
                  {description && ` (${description})`}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2>{content.submissionTitle}</h2>
            {content.submission.paragraphs.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
            <ol className="tp-rules">
              {content.submission.rules.map((rule) => (
                <li key={inlineKey(rule)}>{renderInline(rule)}</li>
              ))}
            </ol>
            {renderParagraph(content.submission.openScience, "open-science")}
            {renderParagraph(content.submission.diversity, "diversity")}
          </section>
          <section>
            <h2>{content.reviewTitle}</h2>
            {content.review.paragraphs.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
            <ul className="tp-publication-requirements">
              {content.review.criteria.map((criterion) => (
                <li key={inlineKey(criterion)}>{renderInline(criterion)}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>{content.publicationTitle}</h2>
            {content.publication.paragraphs.map((paragraph, index) =>
              renderParagraph(paragraph, index),
            )}
            <ul className="tp-publication-requirements">
              {content.publication.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
            <p>{content.publication.closing}</p>
          </section>
          <section>
            <h2>{content.coordinationTitle}</h2>
            {content.coordinators.map((coordinator) => (
              <p key={coordinator}>{coordinator}</p>
            ))}
          </section>
        </article>
        <aside className="tp-aside">
          <div className="tp-date-card">
            <h2>{content.datesTitle}</h2>
            <ul className="tp-date-list">
              {content.dates.map(([date, label]) => (
                <li className="tp-date" key={date}>
                  <span>{date}</span>
                  <strong>{label}</strong>
                </li>
              ))}
            </ul>
            <a
              className="tp-submission-link"
              href={tpSi2027Links.submission}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.hero.submit}
            </a>
          </div>
          <div className="tp-coordination">
            <p className="tp-kicker">{content.coordinationKicker}</p>
            {content.coordinators.map((coordinator) => (
              <p key={coordinator}>
                <strong>{coordinator}</strong>
              </p>
            ))}
          </div>
          <div className="tp-links">
            <a href={tpSi2027Links.cesi} target="_blank" rel="noreferrer">
              {content.sideLinks.cesi}
            </a>
            <a href={tpSi2027Links.sbc} target="_blank" rel="noreferrer">
              {content.sideLinks.sbc}
            </a>
            <a href={tpSi2027Links.jems} target="_blank" rel="noreferrer">
              {content.sideLinks.jems}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
