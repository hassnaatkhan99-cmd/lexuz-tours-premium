export type PaymentMethod = {
  id: string;
  name: string;
  accountNumber: string;
  accountName: string;
};

// Update official Lexuz receiving details here only so payment information stays consistent across the website.
export const paymentMethods = [
  {
    id: "easypaisa",
    name: "EasyPaisa",
    accountNumber: "03115119111",
    accountName: "Hasnat Khaliq"
  },
  {
    id: "js-bank",
    name: "JS Bank Transfer",
    accountNumber: "03115119111",
    accountName: "Hasnat Khaliq"
  }
] satisfies PaymentMethod[];

export function paymentMethodsShareSameReceivingDetails() {
  const [first, ...rest] = paymentMethods;
  return rest.every((method) => method.accountNumber === first.accountNumber && method.accountName === first.accountName);
}
