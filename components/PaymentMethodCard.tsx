import { paymentMethodsShareSameReceivingDetails, type PaymentMethod } from "@/data/payments";

export function PaymentMethodCard({ method }: { method: PaymentMethod }) {
  const sharedReceivingDetails = paymentMethodsShareSameReceivingDetails();

  return (
    <div className="rounded-dsLg border border-lexuzNeutral-line bg-brand-secondary p-5 shadow-ds1">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-brand-primary">Official receiving account</p>
      <h3 className="mt-2 text-lg font-black text-lexuzNeutral-100">{method.name}</h3>
      <div className="mt-4 grid gap-2 text-sm text-lexuzNeutral-80">
        <p><strong>Account Number:</strong> {method.accountNumber}</p>
        <p><strong>Account Name:</strong> {method.accountName}</p>
      </div>
      {sharedReceivingDetails ? <p className="mt-4 rounded-dsSm border border-brand-primary/10 bg-white px-3 py-2 text-xs font-bold leading-5 text-brand-primary">EasyPaisa and JS Bank are currently configured with the same official receiving details.</p> : null}
      <p className="mt-4 text-xs leading-5 text-lexuzNeutral-60">After transfer, upload the screenshot so the Lexuz team can review your payment and confirm the booking.</p>
    </div>
  );
}
