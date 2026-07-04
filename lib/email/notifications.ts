import { company } from "@/data/company";
import type { BookingStatus } from "@/lib/supabase/types";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

type BookingEmailDetails = {
  referenceId: string;
  customerName: string;
  customerEmail: string;
  phone?: string;
  tourName: string;
  travelers?: number;
  departure?: string;
  departureCity?: string | null;
  pickupCity?: string;
  pickupLocation?: string;
  paymentMethod?: string;
  status?: BookingStatus;
  totalAmount?: number | null;
  advancePaid?: number | null;
  remainingAmount?: number | null;
  paymentStatus?: string;
};

function escapeHtml(value: string | number | null | undefined) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDepartureCity(value?: string | null) {
  if (value === "lahore") return "Lahore";
  if (value === "islamabad") return "Islamabad / Rawalpindi";
  return value || "To be confirmed";
}

function formatMoneyValue(value: number | null | undefined) {
  return typeof value === "number" ? `PKR ${value.toLocaleString("en-PK")}` : "To be confirmed by our team";
}

function paymentSummaryRows(details: BookingEmailDetails) {
  const rows = [
    ["Total Amount", formatMoneyValue(details.totalAmount)],
    ["Advance Paid", formatMoneyValue(details.advancePaid)],
    ["Remaining Balance", formatMoneyValue(details.remainingAmount)],
    ["Payment Status", details.paymentStatus || "Payment verification in progress"]
  ];

  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e7da;border-radius:12px;overflow:hidden;">
      ${rows.map(([label, value], index) => `
        <tr style="background:${index % 2 === 0 ? "#fbfcf8" : "#ffffff"};">
          <td style="padding:12px 14px;border-bottom:1px solid #edf0e9;color:#657064;font-size:13px;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #edf0e9;color:#103b1b;font-size:13px;font-weight:800;text-align:right;">${escapeHtml(value)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function approvedBookingRows(details: BookingEmailDetails) {
  const rows = [
    ["Booking Reference", details.referenceId],
    ["Tour", details.tourName],
    ["Departure Date", details.departure || "To be confirmed"],
    ["Departure City", formatDepartureCity(details.departureCity)],
    ["Pickup Location", details.pickupLocation || "To be confirmed"],
    ["Customer Name", details.customerName],
    ["Contact Number", details.phone || "To be confirmed"],
    ["Number of Travellers", details.travelers || "To be confirmed"]
  ];

  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e7da;border-radius:12px;overflow:hidden;">
      ${rows.map(([label, value], index) => `
        <tr style="background:${index % 2 === 0 ? "#fbfcf8" : "#ffffff"};">
          <td style="padding:12px 14px;border-bottom:1px solid #edf0e9;color:#657064;font-size:13px;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #edf0e9;color:#103b1b;font-size:13px;font-weight:800;text-align:right;">${escapeHtml(value)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function emailShell(title: string, preview: string, body: string) {
  return `
    <div style="margin:0;padding:0;background:#f5f7f2;font-family:Arial,Helvetica,sans-serif;color:#172116;">
      <div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(preview)}</div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f7f2;padding:28px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:#ffffff;border:1px solid #dfe6d8;border-radius:14px;overflow:hidden;">
              <tr>
                <td style="background:#103b1b;padding:24px 28px;color:#ffffff;">
                  <p style="margin:0;color:#f7bd18;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;">Lexuz Tours & Adventures</p>
                  <h1 style="margin:8px 0 0;font-size:26px;line-height:1.2;">${escapeHtml(title)}</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:28px;">
                  ${body}
                  <div style="margin-top:28px;padding-top:18px;border-top:1px solid #e5e7eb;color:#56615a;font-size:13px;line-height:1.7;">
                    <strong style="color:#103b1b;">${company.name}</strong><br />
                    Website: <a href="${company.website}" style="color:#103b1b;">${company.website}</a><br />
                    Phone: ${company.phone}<br />
                    Email: <a href="mailto:${company.email}" style="color:#103b1b;">${company.email}</a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function detailRows(details: BookingEmailDetails) {
  const rows = [
    ["Reference / Invoice No.", details.referenceId],
    ["Customer Name", details.customerName],
    ["Tour Name", details.tourName],
    ["Travelers", details.travelers || "To be confirmed"],
    ["Departure", details.departure || "To be confirmed"],
    ["Departure City", formatDepartureCity(details.departureCity)],
    ["Pickup City", details.pickupCity || "To be confirmed"],
    ["Pickup Location", details.pickupLocation || "To be confirmed"],
    ["Payment Method", details.paymentMethod || "To be confirmed"],
    ["Current Status", details.status || "Pending Verification"]
  ];

  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e1e7da;border-radius:12px;overflow:hidden;">
      ${rows.map(([label, value], index) => `
        <tr style="background:${index % 2 === 0 ? "#fbfcf8" : "#ffffff"};">
          <td style="padding:12px 14px;border-bottom:1px solid #edf0e9;color:#657064;font-size:13px;">${escapeHtml(label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #edf0e9;color:#103b1b;font-size:13px;font-weight:800;text-align:right;">${escapeHtml(value)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function refundNote() {
  return `
    <p style="margin:18px 0 0;color:#56615a;font-size:13px;line-height:1.7;">
      Refund note: confirmed paid bookings are fully refundable if cancelled more than 7 days before departure. Cancellations less than 7 days before departure are non-refundable. If Lexuz Tours cancels a trip, customers may choose a full refund or transfer to another available departure.
    </p>
  `;
}

function sectionTitle(title: string) {
  return `
    <div style="margin:26px 0 12px;border-top:1px solid #dfe6d8;padding-top:18px;">
      <p style="margin:0;color:#103b1b;font-size:13px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;">${escapeHtml(title)}</p>
    </div>
  `;
}

function approvedBookingHtml(details: BookingEmailDetails & { status: BookingStatus }) {
  return emailShell(
    "Booking Approved",
    `Your Lexuz booking ${details.referenceId} has been approved.`,
    `
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#344034;">Hello ${escapeHtml(details.customerName)},</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#344034;">Thank you for choosing <strong>Lexuz Tours & Adventures</strong>.</p>
      <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#344034;">We are pleased to inform you that your booking has been <strong>approved</strong>.</p>

      ${sectionTitle("Booking Details")}
      ${approvedBookingRows(details)}

      ${sectionTitle("Payment Summary")}
      ${paymentSummaryRows({ ...details, paymentStatus: details.paymentStatus || "Payment verification in progress" })}

      ${sectionTitle("Booking Status")}
      <div style="border:1px solid #dfe6d8;background:#f8fbf1;border-radius:12px;padding:16px;">
        <p style="margin:0 0 10px;color:#103b1b;font-size:16px;font-weight:900;">✅ Booking Approved</p>
        <p style="margin:0;color:#344034;font-size:14px;line-height:1.7;">Your booking has been successfully reserved.</p>
        <p style="margin:12px 0 0;color:#344034;font-size:14px;line-height:1.7;">The remaining balance can be paid according to our booking policy before departure.</p>
      </div>

      <p style="margin:20px 0 10px;color:#344034;font-size:14px;line-height:1.7;">Our team will contact you before the trip with:</p>
      <ul style="margin:0 0 18px 20px;padding:0;color:#344034;font-size:14px;line-height:1.8;">
        <li>Final departure timing</li>
        <li>Pickup instructions</li>
        <li>Tour guide contact details</li>
        <li>Hotel details, if applicable</li>
        <li>Packing recommendations</li>
      </ul>

      <p style="margin:0 0 12px;color:#344034;font-size:14px;line-height:1.7;">If you have any questions, feel free to contact us anytime.</p>
      <p style="margin:0;color:#103b1b;font-size:14px;line-height:1.8;font-weight:800;">
        Phone: ${escapeHtml(company.phone)}<br />
        WhatsApp: ${escapeHtml(company.phone)}
      </p>

      <p style="margin:18px 0 0;color:#344034;font-size:14px;line-height:1.7;">Thank you for travelling with Lexuz Tours & Adventures. We look forward to making your journey memorable!</p>
    `
  );
}

async function sendEmail({ to, subject, html }: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "";

  if (!apiKey || !from || !to) {
    console.warn("[Lexuz Email] Email skipped. Missing RESEND_API_KEY, EMAIL_FROM, or recipient.", {
      hasApiKey: Boolean(apiKey),
      hasFrom: Boolean(from),
      hasRecipient: Boolean(to),
      subject
    });
    return { skipped: true };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ from, to, subject, html })
    });

    if (!response.ok) {
      const body = await response.text();
      console.warn(`[Lexuz Email] Resend delivery failed for "${subject}": ${body}`);
      return { skipped: false, error: body };
    }

    return response.json();
  } catch (error) {
    console.warn(`[Lexuz Email] Resend request failed for "${subject}".`, error);
    return { skipped: false, error };
  }
}

export async function notifyNewBooking(details: BookingEmailDetails) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "";
  const adminHtml = emailShell(
    "New Booking Received",
    `New booking received for ${details.tourName}`,
    `
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#344034;">A new booking has been submitted and is waiting for admin review.</p>
      ${detailRows({ ...details, status: "Pending Verification" })}
      <p style="margin:18px 0 0;color:#56615a;font-size:13px;line-height:1.7;">Customer phone: <strong>${escapeHtml(details.phone || "Not provided")}</strong></p>
    `
  );
  const customerHtml = emailShell(
    "Booking Received",
    `Your Lexuz booking ${details.referenceId} is pending verification.`,
    `
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#344034;">Dear ${escapeHtml(details.customerName)}, your booking request has been received. Our team will review your details and payment screenshot before updating the status.</p>
      ${detailRows({ ...details, status: "Pending Verification" })}
      ${refundNote()}
    `
  );

  await Promise.allSettled([
    sendEmail({ to: adminEmail, subject: `New Lexuz booking received: ${details.referenceId}`, html: adminHtml }),
    sendEmail({ to: details.customerEmail, subject: `Lexuz booking received: ${details.referenceId}`, html: customerHtml })
  ]);
}

export async function notifyBookingStatus(details: BookingEmailDetails & { status: BookingStatus }) {
  const statusCopy: Record<BookingStatus, { title: string; intro: string }> = {
    "Pending Verification": {
      title: "Booking Pending Verification",
      intro: "Your booking is still pending verification. The Lexuz team will review the submitted details."
    },
    Approved: {
      title: "Booking Approved",
      intro: "Your booking has been approved by the Lexuz team. Payment verification and final confirmation will follow through the normal booking steps."
    },
    Confirmed: {
      title: "Booking Confirmed",
      intro: "Your booking and payment have been confirmed. Please keep this invoice-style confirmation for your record."
    },
    Rejected: {
      title: "Booking Rejected",
      intro: "Your booking request has been rejected. Please contact Lexuz Tours on WhatsApp if you need clarification or want to submit a corrected booking."
    },
    Cancelled: {
      title: "Booking Cancelled",
      intro: "Your booking has been marked as cancelled. Refund eligibility follows the Lexuz cancellation policy."
    }
  };

  const isApproved = details.status === "Approved";
  const isConfirmed = details.status === "Confirmed";
  const html = isApproved ? approvedBookingHtml(details) : emailShell(
    statusCopy[details.status].title,
    `Your Lexuz booking ${details.referenceId} is ${details.status}.`,
    `
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#344034;">Dear ${escapeHtml(details.customerName)}, ${statusCopy[details.status].intro}</p>
      ${detailRows(details)}
      ${isConfirmed ? `
        ${sectionTitle("Payment Summary")}
        ${paymentSummaryRows({ ...details, paymentStatus: details.paymentStatus || "Confirmed" })}
        <div style="margin-top:18px;border:1px solid #f3c847;background:#fff9df;border-radius:12px;padding:16px;">
          <h2 style="margin:0 0 10px;color:#103b1b;font-size:18px;">Invoice-Style Payment Confirmation</h2>
          <p style="margin:0;color:#344034;font-size:14px;line-height:1.7;">Reference / invoice number <strong>${escapeHtml(details.referenceId)}</strong> is confirmed by Lexuz Tours & Adventures. Payment method on record: <strong>${escapeHtml(details.paymentMethod || "To be confirmed")}</strong>. This email confirms the booking status in our system; final meeting point and departure instructions are shared separately by the Lexuz team.</p>
        </div>
      ` : ""}
      ${refundNote()}
    `
  );

  await sendEmail({
    to: details.customerEmail,
    subject: isApproved ? "Booking Approved – Lexuz Tours & Adventures" : `Lexuz booking ${details.status}: ${details.referenceId}`,
    html
  });
}
