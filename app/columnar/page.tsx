import Client from "./Client";
export const metadata = {
  title: "Columnar Transposition Cipher | Encode/Decode Online",
  description:
    "Encode and decode Columnar Transposition cipher with a keyword. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/columnar" },
};
export default function Page() {
  return <Client />;
}
