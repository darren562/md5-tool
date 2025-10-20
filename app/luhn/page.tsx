import Client from "./Client";
export const metadata = {
  title: "Luhn Checksum Calculator | Mod 10 Validator",
  description:
    "Validate and compute Luhn (Mod 10) check digits. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/luhn" },
};
export default function Page() {
  return <Client />;
}
