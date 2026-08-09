export default function Loading() {
  return (
    <section className="container-page py-20" role="status" aria-live="polite">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-white/70 bg-white/85 p-8 shadow-ds3 backdrop-blur md:p-12">
        <span className="sr-only">Loading page</span>
        <div aria-hidden="true" className="animate-pulse space-y-5 motion-reduce:animate-none">
          <div className="h-4 w-28 rounded-full bg-brand-accent/30" />
          <div className="h-12 w-4/5 rounded-dsMd bg-brand-primary/15" />
          <div className="h-4 w-full rounded-full bg-lexuzNeutral-line" />
          <div className="h-4 w-2/3 rounded-full bg-lexuzNeutral-line" />
          <div className="mt-8 h-44 rounded-dsLg bg-brand-secondary/70" />
        </div>
      </div>
    </section>
  );
}
