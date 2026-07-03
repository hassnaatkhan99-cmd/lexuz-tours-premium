# Lexuz Tours Premium

Fresh premium Next.js website and Supabase-powered booking system for Lexuz Tours & Adventures.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Supabase Booking System

The booking form saves real customer, booking and payment records when Supabase environment variables are configured. Payment screenshots upload to private Supabase Storage.

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Run `supabase/schema.sql`.
4. Create a strong admin password and session secret.
5. Add the environment variables from `.env.example` to `.env.local` and to Vercel.

Required environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_PAYMENT_BUCKET=payment-screenshots
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=
RESEND_API_KEY=
EMAIL_FROM=Lexuz Tours <bookings@lexuztours.com>
ADMIN_NOTIFICATION_EMAIL=info@lexuztours.com
```

`RESEND_API_KEY`, `EMAIL_FROM` and `ADMIN_NOTIFICATION_EMAIL` are required for production email delivery. Without them, bookings and admin status updates still work, but email notifications are skipped with a server warning.

Email triggers:

- New booking: admin notification and customer pending verification email.
- Approved booking: customer approval email.
- Rejected booking: customer rejection email.
- Confirmed booking: customer confirmation email with invoice-style booking/payment summary.

## Booking Workflow

- Customer submits `/booking` with traveler details, payment method and screenshot.
- Supabase stores the customer, booking and payment proof.
- Customer receives a booking reference ID.
- Admin logs in at `/admin/login`.
- Admin reviews `/admin/bookings`, opens booking details, then approves, rejects or confirms payment.
- Customer can track status at `/booking-status`.

## Main Content Files

- Company details: `data/company.ts`
- Tours and pricing: `data/tours.ts`
- Reviews: `data/reviews.ts`
- Payments: `data/payments.ts`
- FAQs: `data/faqs.ts`
- Database schema: `supabase/schema.sql`

## Deployment

This project is Vercel-ready. Push to GitHub, import the repository in Vercel, keep default Next.js settings, and deploy.
