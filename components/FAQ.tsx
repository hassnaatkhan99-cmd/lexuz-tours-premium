export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="rounded-lg border border-forest-900/10 bg-white p-5 shadow-soft">
          <summary className="cursor-pointer font-black text-forest-900">{item.question}</summary>
          <p className="mt-3 text-sm leading-6 text-neutral-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
