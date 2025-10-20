import Client from "./Client";
export const metadata = {
  title: "EAN-13 Check Digit Calculator | Validate Barcode Online",
  description:
    "Compute and validate EAN-13 barcode check digits. Enter 12 digits to get the 13th, or verify a full EAN-13.",
  alternates: { canonical: "https://www.hashkitly.com/ean13" },
};
export default function Page() {
  return <Client />;
}
export {};
