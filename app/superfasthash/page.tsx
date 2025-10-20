import Client from "./Client";
export const metadata = {
  title: "SuperFastHash Online | Paul Hsieh’s Non-Crypto Hash",
  description:
    "Compute Paul Hsieh’s SuperFastHash over UTF-8 text. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/superfasthash" },
};
export default function Page() {
  return <Client />;
}
export {};
