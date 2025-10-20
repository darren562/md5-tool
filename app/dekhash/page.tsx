import Client from "./Client";
export const metadata = {
  title: "DEK Hash Online | Simple Non-Crypto Hash",
  description:
    "Compute DEK hash (non-cryptographic) over UTF-8 text. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/dekhash" },
};
export default function Page() {
  return <Client />;
}
