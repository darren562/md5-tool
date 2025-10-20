import Client from "./Client";
export const metadata = {
  title: "NATO Phonetic Alphabet Converter | Text ↔ Code Words",
  description:
    "Convert text to NATO phonetic alphabet (Alpha, Bravo, Charlie) and back. Great for spelling names over the phone.",
  alternates: { canonical: "https://www.hashkitly.com/nato" },
};
export default function Page() {
  return <Client />;
}
export {};
