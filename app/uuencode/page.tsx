import Client from "./Client";
export const metadata = {
  title: "UUEncode Online | Encode/Decode Unix-to-Unix Encoding",
  description:
    "Encode and decode uuencode format (Unix-to-Unix). Convert binary data to text and back for legacy email/file transfer.",
  alternates: { canonical: "https://www.hashkitly.com/uuencode" },
};
export default function Page() {
  return <Client />;
}
