import Client from "./Client";
export const metadata = {
  title: "Damm Checksum Calculator | Validate/Generate",
  description:
    "Generate and validate Damm checksums for numeric strings. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/damm" },
};
export default function Page() {
  return <Client />;
}
