import Client from "./Client";
export const metadata = {
  title: "ISBN-10 Check Digit Calculator | Validate/Generate",
  description:
    "Validate and compute ISBN-10 check digits (supports X). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/isbn10" },
};
export default function Page() {
  return <Client />;
}
