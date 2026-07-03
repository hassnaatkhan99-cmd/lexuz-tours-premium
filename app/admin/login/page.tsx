import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Secure Lexuz Tours admin login."
};

export default function AdminLoginPage() {
  const configured = Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);

  return (
    <section className="container-page grid min-h-[70vh] place-items-center py-14">
      <div className="w-full max-w-md rounded-lg border border-forest-900/10 bg-white p-7 shadow-premium">
        <SectionHeading eyebrow="Admin" title="Login" copy="Enter the admin password to review bookings and payments." />
        {!configured ? (
          <div className="mb-5 rounded-lg border border-saffron-500/40 bg-saffron-100 p-4 text-sm font-bold text-forest-950">
            Local admin login is not configured. Add ADMIN_PASSWORD and ADMIN_SESSION_SECRET to your local environment to sign in.
          </div>
        ) : null}
        <form action="/api/admin/login" method="post" className="grid gap-4">
          <label className="grid gap-2 text-sm font-bold">
            Admin Password
            <input name="password" type="password" required className="rounded-md border border-neutral-200 px-4 py-3 font-normal" placeholder="Enter password" />
          </label>
          <button className="rounded-md bg-forest-800 px-5 py-3 font-black text-white">Login</button>
        </form>
      </div>
    </section>
  );
}
