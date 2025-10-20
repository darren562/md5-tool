import Client from "./Client";
export const metadata = {
  title: "EAN-8 Check Digit Calculator | Validate/Generate",
  description:
    "Validate and compute EAN-8 check digits for barcodes. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/ean8" },
};
export default function Page() {
  return <Client />;
}
export {};
