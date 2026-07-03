export function SectionHeading({ eyebrow, title, copy, center = false }: { eyebrow?: string; title: React.ReactNode; copy?: string; center?: boolean }) {
  return (
    <div className={`mb-8 ${center ? "mx-auto max-w-3xl text-center" : ""}`}>
      {eyebrow ? <p className="mb-2 text-sm font-black uppercase tracking-wide text-forest-700">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-ink md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-neutral-600">{copy}</p> : null}
    </div>
  );
}
