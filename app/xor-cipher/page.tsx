import Client from "./Client";
export const metadata = {
  title: "XOR Cipher Encoder/Decoder | Text/Hex XOR with Key",
  description:
    "Apply XOR cipher byte-wise using a key. Supports text and hex input/output. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/xor-cipher" },
};
export default function Page() {
  return <Client />;
}
