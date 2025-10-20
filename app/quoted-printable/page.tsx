import Client from "./Client";
export const metadata = {
  title: "Quoted-Printable Encode/Decode Online | RFC 2045",
  description:
    "Encode and decode Quoted-Printable per RFC 2045 for MIME email content-transfer-encoding. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/quoted-printable" },
};
export default function Page() {
  return <Client />;
}
