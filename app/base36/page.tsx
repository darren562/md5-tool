import Client from "./Client";
export const metadata = {
  title: "Base36 Encode/Decode Online | Text ↔ Base36 Converter",
  description:
    "Convert text to Base36 and Base36 back to text using 0-9a-z alphabet. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/base36" },
};
export default function Page() {
  return <Client />;
}
