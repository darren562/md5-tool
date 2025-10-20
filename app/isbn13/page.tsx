import Client from "./Client";
export const metadata = {
  title: "ISBN-13 Check Digit Calculator | Validate/Generate",
  description:
    "Validate and compute ISBN-13 check digits. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/isbn13" },
};
export default function Page() {
  return <Client />;
}
