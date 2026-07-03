export function PaymentMethodCard({ method }: { method: { name: string; accountNumber: string; accountName: string } }) {
  return (
    <div className="rounded-lg border border-forest-900/10 bg-forest-50 p-4">
      <h3 className="font-black text-forest-900">{method.name}</h3>
      <p className="mt-2 text-sm"><strong>Account Number:</strong> {method.accountNumber}</p>
      <p className="text-sm"><strong>Account Name:</strong> {method.accountName}</p>
    </div>
  );
}
