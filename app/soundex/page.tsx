import Client from "./Client";
export const metadata = {
  title: "Soundex Calculator | Phonetic Code Generator",
  description:
    "Compute Soundex phonetic codes for names and words. In-browser.",
  alternates: { canonical: "https://www.hashkitly.com/soundex" },
};
export default function Page() {
  return <Client />;
}
