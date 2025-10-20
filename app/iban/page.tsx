import Client from "./Client";
export const metadata = {
  title: "IBAN Validator | Mod 97-10 Check",
  description:
    "Validate International Bank Account Numbers (IBAN) using mod-97-10. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/iban" },
};
export default function Page() {
  return <Client />;
}
