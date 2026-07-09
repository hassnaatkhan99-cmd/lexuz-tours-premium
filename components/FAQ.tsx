export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="timeline-card luxury-card group rounded-[22px] border border-white/70 bg-white/88 p-5 shadow-ds1 backdrop-blur transition hover:border-brand-accent/35 hover:shadow-ds2">
          <summary className="cursor-pointer list-none font-black text-brand-primary marker:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brand-primary/10 bg-brand-secondary text-brand-primary shadow-[inset_0_1px_0_rgba(255,255,255,.8)] transition group-open:rotate-45 group-open:bg-brand-accent/20">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-lexuzNeutral-60">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
