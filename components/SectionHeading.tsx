export function SectionHeading({ eyebrow, title, copy, center = false }: { eyebrow?: string; title: React.ReactNode; copy?: string; center?: boolean }) {
  return (
    <div className={`mb-8 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-brand-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-lexuzNeutral-100 md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-8 text-lexuzNeutral-60">{copy}</p> : null}
    </div>
  );
}
