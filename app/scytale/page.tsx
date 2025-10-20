import Client from "./Client";
export const metadata = {
  title: "Scytale Cipher Encoder/Decoder | Transposition",
  description:
    "Encode and decode the Scytale transposition cipher. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/scytale" },
};
export default function Page() {
  return <Client />;
}
