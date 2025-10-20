import Client from "./Client";
export const metadata = {
  title: "CRC-32/MPEG-2 Checksum Calculator | Online",
  description:
    "Compute CRC-32/MPEG-2 checksums from text or hex. In-browser, no upload.",
  alternates: { canonical: "https://www.hashkitly.com/crc32-mpeg2" },
};
export default function Page() {
  return <Client />;
}
export {};
