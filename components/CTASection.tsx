import { ButtonLink, WhatsAppButton } from "./Button";

export function CTASection({ title = "Ready To Explore Pakistan With Lexuz?", copy = "Book your seat now or message our team on WhatsApp for fast guidance." }: { title?: string; copy?: string }) {
  return (
    <section className="container-page py-16">
      <div className="night-sky overflow-hidden rounded-[28px] border border-white/10 p-8 text-white shadow-[0_30px_90px_rgba(7,18,15,.28)] md:flex md:items-center md:justify-between md:p-10">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Travel with confidence</p>
          <h2 className="mt-2 text-3xl font-black">{title}</h2>
          <p className="mt-3 max-w-2xl text-white/75">{copy}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
          <ButtonLink href="/booking">Book Now</ButtonLink>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
