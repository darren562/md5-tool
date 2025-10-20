import Client from "./Client";
export const metadata = {
  title: "Autokey Cipher Encoder/Decoder | Vigenère Variant",
  description:
    "Encode and decode the Autokey cipher (Vigenère variant). In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/autokey" },
};
export default function Page() {
  return <Client />;
}
