type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  number: string;
};

export function SectionHeading({
  eyebrow,
  title,
  number,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
