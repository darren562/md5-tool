import Client from "./Client";
export const metadata = {
  title: "Verhoeff Checksum Calculator | Validate/Generate",
  description:
    "Validate and compute Verhoeff check digits. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/verhoeff" },
};
export default function Page() {
  return <Client />;
}
