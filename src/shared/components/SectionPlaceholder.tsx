type SectionPlaceholderProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function SectionPlaceholder({
  id,
  eyebrow,
  title,
  description,
}: SectionPlaceholderProps) {
  return (
    <section id={id} className="content-section">
      <div className="section-card">
        {eyebrow && <p className="section-card__eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-card__title">{title}</h2>}
        {description && <p className="section-card__description">{description}</p>}
      </div>
    </section>
  );
}
