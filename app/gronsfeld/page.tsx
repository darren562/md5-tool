import Client from "./Client";
export const metadata = {
  title: "Gronsfeld Cipher Encoder/Decoder | Digit-Key Vigenère",
  description:
    "Encode and decode the Gronsfeld cipher (digit-key variant of Vigenère). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/gronsfeld" },
};
export default function Page() {
  return <Client />;
}
