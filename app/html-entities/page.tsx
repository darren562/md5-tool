import type { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "HTML Entities Encode/Decode Online | Text ↔ Entity Converter",
  description:
    "Convert text to HTML entities and decode entities back to text. Supports named (e.g., &amp;copy;) and numeric (e.g., &#169;) references.",
  alternates: { canonical: "https://www.hashkitly.com/html-entities" },
};

export default function Page() {
  return <Client />;
}
