export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-dsLg border border-lexuzNeutral-line bg-white p-5 shadow-ds1 transition hover:shadow-ds2">
          <summary className="cursor-pointer list-none font-black text-brand-primary marker:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-secondary text-brand-primary transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-lexuzNeutral-60">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
