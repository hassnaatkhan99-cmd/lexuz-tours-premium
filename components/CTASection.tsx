import { ButtonLink, WhatsAppButton } from "./Button";

export function CTASection({ title = "Ready To Explore Pakistan With Lexuz?", copy = "Book your seat now or message our team on WhatsApp for fast guidance." }: { title?: string; copy?: string }) {
  return (
    <section className="container-page py-14">
      <div className="rounded-lg bg-forest-900 p-8 text-white shadow-premium md:flex md:items-center md:justify-between">
        <div>
          <p className="script text-3xl text-saffron-400">Escape • Explore • Enjoy</p>
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
