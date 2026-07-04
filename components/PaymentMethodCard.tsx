export function PaymentMethodCard({ method }: { method: { name: string; accountNumber: string; accountName: string } }) {
  return (
    <div className="rounded-dsLg border border-lexuzNeutral-line bg-brand-secondary p-5 shadow-ds1">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-brand-primary">Official receiving account</p>
      <h3 className="mt-2 text-lg font-black text-lexuzNeutral-100">{method.name}</h3>
      <div className="mt-4 grid gap-2 text-sm text-lexuzNeutral-80">
        <p><strong>Account Number:</strong> {method.accountNumber}</p>
        <p><strong>Account Name:</strong> {method.accountName}</p>
      </div>
      <p className="mt-4 text-xs leading-5 text-lexuzNeutral-60">After transfer, upload the screenshot so the Lexuz team can verify your payment and update your booking status.</p>
    </div>
  );
}
