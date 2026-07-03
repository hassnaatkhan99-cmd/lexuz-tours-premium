"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BookingStatus } from "@/lib/supabase/types";

const actions: { label: string; status: BookingStatus; className: string }[] = [
  { label: "Approve", status: "Approved", className: "bg-forest-800 text-white" },
  { label: "Reject", status: "Rejected", className: "bg-red-700 text-white" },
  { label: "Confirm Payment", status: "Confirmed", className: "bg-saffron-400 text-forest-950" }
];

type AdminBookingActionsProps = {
  bookingId: string;
  currentStatus: BookingStatus;
  totalAmount?: number | null;
  advancePaid?: number | null;
  remainingAmount?: number | null;
  allowApproval?: boolean;
};

function inputValue(value: number | null | undefined) {
  return typeof value === "number" ? String(value) : "";
}

export function AdminBookingActions({
  bookingId,
  currentStatus,
  totalAmount,
  advancePaid,
  remainingAmount,
  allowApproval = true
}: AdminBookingActionsProps) {
  const router = useRouter();
  const [loadingStatus, setLoadingStatus] = useState<BookingStatus | "">("");
  const [error, setError] = useState("");
  const [paymentValues, setPaymentValues] = useState({
    totalAmount: inputValue(totalAmount),
    advancePaid: inputValue(advancePaid),
    remainingAmount: inputValue(remainingAmount)
  });

  function updatePaymentValue(field: keyof typeof paymentValues, value: string) {
    setPaymentValues((current) => ({ ...current, [field]: value }));
  }

  async function updateStatus(status: BookingStatus) {
    setError("");
    setLoadingStatus(status);

    const body: {
      status: BookingStatus;
      totalAmount?: string;
      advancePaid?: string;
      remainingAmount?: string;
    } = { status };

    if (status === "Approved") {
      body.totalAmount = paymentValues.totalAmount;
      body.advancePaid = paymentValues.advancePaid;
      body.remainingAmount = paymentValues.remainingAmount;
    }

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not update booking.");
      router.refresh();
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "Could not update booking.");
    } finally {
      setLoadingStatus("");
    }
  }

  return (
    <div className="grid gap-2">
      {allowApproval ? (
        <div className="grid gap-3 rounded-lg border border-forest-900/10 bg-forest-50 p-4">
          <p className="text-xs font-black uppercase tracking-wide text-forest-700">Payment Amounts For Approval</p>
          <label className="grid gap-1 text-xs font-bold text-forest-950">
            Total Amount
            <input
              value={paymentValues.totalAmount}
              onChange={(event) => updatePaymentValue("totalAmount", event.target.value)}
              type="number"
              min="0"
              step="1"
              className="rounded-md border border-forest-900/10 bg-white px-3 py-2 font-normal"
              placeholder="To be confirmed by our team"
            />
          </label>
          <label className="grid gap-1 text-xs font-bold text-forest-950">
            Advance Paid
            <input
              value={paymentValues.advancePaid}
              onChange={(event) => updatePaymentValue("advancePaid", event.target.value)}
              type="number"
              min="0"
              step="1"
              className="rounded-md border border-forest-900/10 bg-white px-3 py-2 font-normal"
              placeholder="To be confirmed by our team"
            />
          </label>
          <label className="grid gap-1 text-xs font-bold text-forest-950">
            Remaining Amount
            <input
              value={paymentValues.remainingAmount}
              onChange={(event) => updatePaymentValue("remainingAmount", event.target.value)}
              type="number"
              min="0"
              step="1"
              className="rounded-md border border-forest-900/10 bg-white px-3 py-2 font-normal"
              placeholder="To be confirmed by our team"
            />
          </label>
          <p className="text-xs leading-5 text-neutral-600">These exact values are saved to Supabase and used in customer emails, invoices, admin details and booking status pages.</p>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {actions.filter((action) => allowApproval || action.status !== "Approved").map((action) => (
          <button
            key={action.status}
            type="button"
            disabled={loadingStatus !== "" || currentStatus === action.status}
            onClick={() => updateStatus(action.status)}
            className={`rounded-md px-3 py-2 text-xs font-black disabled:cursor-not-allowed disabled:opacity-50 ${action.className}`}
          >
            {loadingStatus === action.status ? "Saving..." : action.label}
          </button>
        ))}
      </div>
      {error ? <p className="text-xs font-bold text-red-700">{error}</p> : null}
    </div>
  );
}
