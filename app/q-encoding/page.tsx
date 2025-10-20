import Client from "./Client";
export const metadata = {
  title: "Q-encoding (RFC 2047) Online | Email Header Encoder/Decoder",
  description:
    "Encode and decode RFC 2047 Q-encoding for MIME email headers. Handles non-ASCII text safely for Subject and other fields.",
  alternates: { canonical: "https://www.hashkitly.com/q-encoding" },
};
export default function Page() {
  return <Client />;
}
