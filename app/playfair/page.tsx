import Client from "./Client";
export const metadata = {
  title: "Playfair Cipher Encoder/Decoder | 5x5 Digraph Cipher",
  description:
    "Encode and decode the Playfair cipher (I/J combined) online, in-browser.",
  alternates: { canonical: "https://www.hashkitly.com/playfair" },
};
export default function Page() {
  return <Client />;
}
