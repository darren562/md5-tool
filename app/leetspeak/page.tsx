import Client from "./Client";
export const metadata = {
  title: "Leetspeak Converter | Text ↔ 1337 Translator",
  description:
    "Convert text to leetspeak (1337) and translate leet back to normal text. Supports common substitutions like a→4, e→3, t→7.",
  alternates: { canonical: "https://www.hashkitly.com/leetspeak" },
};
export default function Page() {
  return <Client />;
}
export {};
