import Client from "./Client";
export const metadata = {
  title: "JS Hash Online | Simple Non-Crypto Hash",
  description:
    "Compute JS Hash (non-cryptographic) online over UTF-8 bytes. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/jshash" },
};
export default function Page() {
  return <Client />;
}
