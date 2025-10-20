import Client from "./Client";
export const metadata = {
  title: "UPC-A Check Digit Calculator | Validate/Generate",
  description:
    "Validate and compute UPC-A check digits for barcodes. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/upca" },
};
export default function Page() {
  return <Client />;
}
export {};
