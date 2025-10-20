import Client from "./Client";
export const metadata = {
  title: "AP Hash Online | Simple Non-Crypto Hash",
  description:
    "Compute AP Hash (non-cryptographic) online over UTF-8 bytes. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/aphash" },
};
export default function Page() {
  return <Client />;
}
