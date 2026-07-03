import { SectionHeading } from "./SectionHeading";

export function PolicyPage({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Policy" title={title} />
      <div className="rounded-lg bg-white p-6 shadow-soft">
        <ol className="grid gap-4 text-neutral-700">
          {items.map((item, index) => <li key={item}><strong className="text-forest-900">{index + 1}.</strong> {item}</li>)}
        </ol>
      </div>
    </section>
  );
}
