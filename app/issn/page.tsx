import Client from "./Client";
export const metadata = {
  title: "ISSN Check Digit Calculator | Validate/Generate",
  description:
    "Validate and compute ISSN check digits (supports X). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/issn" },
};
export default function Page() {
  return <Client />;
}
