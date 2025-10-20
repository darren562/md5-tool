import Client from "./Client";
export const metadata = {
  title: "Beaufort Cipher Encoder/Decoder | Reciprocal Vigenère",
  description:
    "Encode and decode the Beaufort cipher (reciprocal of Vigenère). In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/beaufort" },
};
export default function Page() {
  return <Client />;
}
