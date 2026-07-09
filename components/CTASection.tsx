import { ButtonLink, WhatsAppButton } from "./Button";

export function CTASection({ title = "Ready To Explore Pakistan With Lexuz?", copy = "Book your seat now or message our team on WhatsApp for fast guidance." }: { title?: string; copy?: string }) {
  return (
    <section className="container-page py-16">
      <div className="night-sky overflow-hidden rounded-[34px] border border-white/10 p-8 text-white shadow-[0_36px_110px_rgba(7,18,15,.32)] md:flex md:items-center md:justify-between md:gap-8 md:p-12">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-accent">Travel with confidence</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-white/75">{copy}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 md:mt-0 md:justify-end">
          <ButtonLink href="/public-trips">View Tours</ButtonLink>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
