import Client from "./Client";
export const metadata = {
  title: "PJW Hash Online | Simple Non-Crypto Hash",
  description:
    "Compute PJW hash (non-cryptographic) online over UTF-8 bytes. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/pjwhash" },
};
export default function Page() {
  return <Client />;
}
